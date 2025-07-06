import { writable } from 'svelte/store';
import { SELECTION_STATE_KEY, STAGES, VALUES_SELECTIONS_REQUIRED } from './constants';

function loadSelectedValues(): string[] {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(SELECTION_STATE_KEY);
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

export const selectedValues = writable<string[]>(loadSelectedValues());

selectedValues.subscribe((val) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(SELECTION_STATE_KEY, JSON.stringify(val));
    } catch (e) {
      console.error('Failed to save selection to localStorage:', e);
    }
  }
});

export function resetSelectedValues() {
  selectedValues.set([]);
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(SELECTION_STATE_KEY);
    } catch (e) {
      console.error('Failed to remove selection from localStorage:', e);
    }
  }
}

export function isSelectionValid(selected: string[], min = 10): boolean {
  return selected.length >= min;
}

// Add a store for the current stage of the process
export const processStage = writable<typeof STAGES[keyof typeof STAGES]>(getInitialProcessStage());

function getInitialProcessStage() {
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
    if (Array.isArray(arr) && arr.length >= VALUES_SELECTIONS_REQUIRED) return STAGES.SELECTION;
  }
  return STAGES.SELECTION;
}
