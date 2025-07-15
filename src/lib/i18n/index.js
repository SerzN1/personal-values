import { derived, writable } from 'svelte/store';

import de from './translations/de.json';
import en from './translations/en.json';
import es from './translations/es.json';
import fr from './translations/fr.json';
import it from './translations/it.json';
import pt from './translations/pt.json';

const DEFAULT_LANGUAGE = 'en';

export const languages = {
  en: { code: 'en', name: 'English', translations: en },
  es: { code: 'es', name: 'Español', translations: es },
  fr: { code: 'fr', name: 'Français', translations: fr },
  de: { code: 'de', name: 'Deutsch', translations: de },
  pt: { code: 'pt', name: 'Português', translations: pt },
};

export const languagesList = Object.values(languages);


// Get saved language from localStorage or detect from browser
function getInitialLanguage() {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  // Check localStorage first
  try {
    const saved = localStorage.getItem('language');
    if (saved && languages[saved]) {
      return saved;
    }
  } catch (e) {
    // localStorage might not be available
  }

  // Check browser language
  if (navigator && navigator.language) {
    const browserLang = navigator.language.split('-')[0];
    if (languages[browserLang]) {
      return browserLang;
    }
  }

  return DEFAULT_LANGUAGE;
}

// Current language store
export const currentLanguage = writable(getInitialLanguage());

// Current translations store
export const translations = derived(
  currentLanguage,
  ($currentLanguage) => languages[$currentLanguage]?.translations || languages[DEFAULT_LANGUAGE].translations
);

// Function to change language
export function setLanguage(languageCode) {
  if (languages[languageCode]) {
    currentLanguage.set(languageCode);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('language', languageCode);
      } catch (e) {
        // localStorage might not be available
      }
    }
  }
}

// Helper function to get nested object value
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : null;
  }, obj);
}

// Interpolate template string with parameters
function interpolate(template, params) {
  if (typeof template !== 'string') return template;

  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return params[key] !== undefined ? String(params[key]) : match;
  });
}

// Reactive translation function for use in Svelte components
export const t = derived(translations, ($translations) => {
  return function translate(key, params = {}) {
    const result = getNestedValue($translations, key);

    if (result === null) {
      return key; // Return key if translation not found
    }

    // Handle interpolation
    if (typeof result === 'string' && Object.keys(params).length > 0) {
      return interpolate(result, params);
    }

    return result;
  };
});
