import { writable } from 'svelte/store';
import { PRIORITIZATION_STORAGE_KEY } from './constants';
import type { IValue } from './types';

export interface IComparisonState {
  scores: Record<string, number>;
  current: number;
  pairs: [string, string][];
  selected: string[];
  lastWinner: string | null;
}

// Generate all unique pairs
export function getPairs(arr: IValue[]) {
  const pairs: [string, string][] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      pairs.push([arr[i].id, arr[j].id]);
    }
  }
  return pairs;
}

function loadPrioritizationsState(): IComparisonState | null {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(PRIORITIZATION_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          parsed &&
          typeof parsed === 'object' &&
          Array.isArray(parsed.selected) &&
          Array.isArray(parsed.pairs)
        ) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to load comparison state from localStorage:', e);
    }
  }
  return null;
}

export const comparisonStore = writable<IComparisonState | null>(loadPrioritizationsState());

comparisonStore.subscribe((val) => {
  if (typeof window !== 'undefined') {
    if (val) {
      try {
        localStorage.setItem(PRIORITIZATION_STORAGE_KEY, JSON.stringify(val));
      } catch (e) {
        console.error('Failed to save comparison state to localStorage:', e);
      }
    } else {
      try {
        localStorage.removeItem(PRIORITIZATION_STORAGE_KEY);
      } catch (e) {
        console.error('Failed to remove comparison state from localStorage:', e);
      }
    }
  }
});

export function resetPrioritization() {
  comparisonStore.set(null);
}
