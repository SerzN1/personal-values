import { writable } from 'svelte/store';
import { COMPARISON_STATE_KEY } from './constants';

export interface IComparisonState {
  scores: Record<string, number>;
  current: number;
  pairs: [string, string][];
  selected: string[];
  lastWinner: string | null;
}

function loadComparisonState(): IComparisonState | null {
  if (typeof window !== 'undefined') {
    try {
      const saved = localStorage.getItem(COMPARISON_STATE_KEY);
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

function initializeFromStore(selected: IValue[]) {
  comparisonStore.subscribe((state) => {
    if (state && state.selected && JSON.stringify(state.selected) === JSON.stringify(selected.map(v => v.name))) {
      // Restore from store
      scores = { ...scores, ...state.scores };
      current = state.current;
      lastWinner = state.lastWinner;
      // Rebuild pairs from names
      const nameToValue = Object.fromEntries(selected.map(v => [v.name, v]));
      pairs = state.pairs.map(([a, b]) => [nameToValue[a], nameToValue[b]]);
    } else {
      // Fresh start
      pairs = getPairs(selected);
      scores = {};
      selected.forEach(v => (scores[v.name] = 0));
      current = 0;
      lastWinner = null;
    }
  });
}

  // onMount(() => {
  //   initializeFromStore(selected);
  // });


export const comparisonStore = writable<IComparisonState | null>(loadComparisonState());

comparisonStore.subscribe((val) => {
  if (typeof window !== 'undefined') {
    if (val) {
      try {
        localStorage.setItem(COMPARISON_STATE_KEY, JSON.stringify(val));
      } catch (e) {
        console.error('Failed to save comparison state to localStorage:', e);
      }
    } else {
      try {
        localStorage.removeItem(COMPARISON_STATE_KEY);
      } catch (e) {
        console.error('Failed to remove comparison state from localStorage:', e);
      }
    }
  }
});

export function resetComparison() {
  comparisonStore.set(null);
}
