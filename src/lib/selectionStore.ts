import { writable } from 'svelte/store';
import { REQUIRED_SELECTIONS, SELECTION_STATE_KEY, STAGES } from './constants';

export const STORAGE_KEY = SELECTION_STATE_KEY;

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

// Add a store for the current stage of the process
export const processStage = writable<typeof STAGES[keyof typeof STAGES]>(getInitialStage());

function getInitialStage() {
  const comparisonRaw = typeof window !== 'undefined' ? localStorage.getItem('comparison-state-v1') : null;
  if (comparisonRaw) {
    const state = JSON.parse(comparisonRaw);
    if (state && state.scores && state.pairs && state.selected) {
      if (state.current >= state.pairs.length) return STAGES.RESULTS;
      return STAGES.COMPARISON;
    }
  }
  const selectionRaw = typeof window !== 'undefined' ? localStorage.getItem('selection-v1') : null;
  if (selectionRaw) {
    const arr = JSON.parse(selectionRaw);
    if (Array.isArray(arr) && arr.length >= REQUIRED_SELECTIONS) return STAGES.SELECTION;
  }
  return STAGES.SELECTION;
}
