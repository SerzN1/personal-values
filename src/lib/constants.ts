// Constants for localStorage keys and other app-wide constants

export const COMPARISON_STATE_KEY = 'personal-values-comparison-state-v1';
export const SELECTION_STATE_KEY = 'personal-values-selection-v1';

export const STAGES = {
  SELECTION: 'selection',
  COMPARISON: 'comparison',
  RESULTS: 'results',
} as const;

export const REQUIRED_SELECTIONS = 5;
export const TOP_VALUES_COUNT = 5;
