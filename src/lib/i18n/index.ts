import { derived, writable, type Readable, type Writable } from 'svelte/store';

import ar from './translations/ar.json';
import en from './translations/en.json';
import es from './translations/es.json';
import fr from './translations/fr.json';
import ru from './translations/ru.json';
import zh from './translations/zh.json';

// Type definitions
export type LanguageCode = 'en' | 'fr' | 'es' | 'ru' | 'zh' | 'ar';

export interface Language {
  code: LanguageCode;
  name: string;
  isRtl?: boolean;
  translations: Record<string, any>;
}

export type Languages = Record<LanguageCode, Language>;

export interface TranslationFunction {
  <T = any>(key: string, params?: Record<string, string | number>): T;
}

const DEFAULT_LANGUAGE: LanguageCode = 'en';

export const languages: Languages = {
  en: { code: 'en', name: 'English', translations: en },
  fr: { code: 'fr', name: 'Français', translations: fr },
  es: { code: 'es', name: 'Español', translations: es },
  ru: { code: 'ru', name: 'Русский', translations: ru },
  zh: { code: 'zh', name: '中文', translations: zh },
  ar: { code: 'ar', name: 'العربية', translations: ar, isRtl: true },
};

export const languagesList: Language[] = Object.values(languages);

// Get saved language from localStorage or detect from browser
function getInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  // Check localStorage first
  try {
    const saved = localStorage.getItem('language');
    if (saved && languages[saved]) {
      return saved as LanguageCode;
    }
  } catch (e) {
    // localStorage might not be available
  }

  // Check browser language
  if (navigator && navigator.language) {
    const browserLang = navigator.language.split('-')[0];
    if (languages[browserLang]) {
      return browserLang as LanguageCode;
    }
  }

  return DEFAULT_LANGUAGE;
}

// Current language store
export const currentLanguage: Writable<LanguageCode> = writable(getInitialLanguage());

// Initialize RTL on startup
if (typeof window !== 'undefined') {
  const initialLang = getInitialLanguage();
  setLanguage(initialLang);
}

// Current translations store
export const translations: Readable<Record<string, any>> = derived(
  currentLanguage,
  ($currentLanguage) => languages[$currentLanguage]?.translations || languages[DEFAULT_LANGUAGE].translations
);

// Function to change language
export function setLanguage(languageCode: LanguageCode): void {
  if (languages[languageCode]) {
    currentLanguage.set(languageCode);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('language', languageCode);
      } catch (e) {
        // localStorage might not be available
      }
      // Handle RTL using the isRtl property
      const language = languages[languageCode];
      const isRTL = language.isRtl === true;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = languageCode;
    }
  }
}

// Helper function to get nested object value
function getNestedValue(obj: Record<string, any>, path: string): any {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : null;
  }, obj);
}

// Interpolate template string with parameters
function interpolate(template: string, params: Record<string, string | number>): string {
  if (typeof template !== 'string') return template;

  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return params[key] !== undefined ? String(params[key]) : match;
  });
}

// Reactive translation function for use in Svelte components
export const t: Readable<TranslationFunction> = derived(translations, ($translations) => {
  return function translate<T = any>(key: string, params: Record<string, string | number> = {}): T {
    const result = getNestedValue($translations, key);

    if (result === null) {
      return key as T; // Return key if translation not found
    }

    // Handle interpolation for strings only
    if (typeof result === 'string' && Object.keys(params).length > 0) {
      return interpolate(result, params) as T;
    }

    return result as T;
  };
});
