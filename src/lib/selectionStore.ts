import { writable } from 'svelte/store';
import { PRIORITIZATION_STORAGE_KEY, SELECTION_STORAGE_KEY, STAGES } from './constants';

function loadSelectedValues(): string[] {
  const selectedRaw = typeof window !== 'undefined' ? localStorage.getItem(SELECTION_STORAGE_KEY) : null;
  if (!selectedRaw) return [];

  try {
    const parsed = JSON.parse(selectedRaw);
    if (Array.isArray(parsed) && parsed.every(item => typeof item === 'string')) {
      return parsed;
    }
  } catch (e) {
    console.error('Failed to load selection from localStorage:', e);
  }
  return []
}

export const selectedValues = writable<string[]>(loadSelectedValues());

selectedValues.subscribe((val) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(SELECTION_STORAGE_KEY, JSON.stringify(val));
    } catch (e) {
      console.error('Failed to save selection to localStorage:', e);
    }
  }
});

export function resetSelectedValues() {
  selectedValues.set([]);
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(SELECTION_STORAGE_KEY, JSON.stringify('[]'));
    } catch (e) {
      console.error('Failed to remove selection from localStorage:', e);
    }
  }
}

// Add a store for the current stage of the process
export const processStage = writable<typeof STAGES[keyof typeof STAGES]>(getInitialProcessStage());

function getInitialProcessStage() {
  const comparisonRaw = typeof window !== 'undefined' ? localStorage.getItem(PRIORITIZATION_STORAGE_KEY) : null;
  if (comparisonRaw) {
    const state = JSON.parse(comparisonRaw);
    if (state && state.scores && state.pairs && state.selected) {
      if (state.current >= state.pairs.length) return STAGES.RESULTS;
      return STAGES.COMPARISON;
    }
  }
  const selectionRaw = typeof window !== 'undefined' ? localStorage.getItem(SELECTION_STORAGE_KEY) : null;
  if (selectionRaw) {
    const parsed = JSON.parse(selectionRaw);
    if (Array.isArray(parsed) && parsed.every(item => typeof item === 'string') && parsed.length > 0) {
      return STAGES.SELECTION;
    };
  }
  return STAGES.START;
}
