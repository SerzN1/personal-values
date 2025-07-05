import { writable } from 'svelte/store';

export const STORAGE_KEY = 'personal-values-selected';

function loadSelection(): string[] {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.every(item => typeof item === 'string')) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load selection from localStorage:', e);
    }
  }
  return [];
}

export const selectedValues = writable<string[]>(loadSelection());

selectedValues.subscribe((val) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    } catch (e) {
      console.error('Failed to save selection to localStorage:', e);
    }
  }
});

export function resetSelection() {
  selectedValues.set([]);
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Failed to remove selection from localStorage:', e);
    }
  }
}

export function isSelectionValid(selected: string[], min = 10): boolean {
  return selected.length >= min;
}
