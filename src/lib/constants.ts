// Constants for localStorage keys and other app-wide constants

export const COMPARISON_STATE_KEY = 'personal-values-comparison-state-v1';
export const SELECTION_STATE_KEY = 'personal-values-selection-v1';

export const STAGES = {
  START: 'start',
  SELECTION: 'selection',
  COMPARISON: 'comparison',
  RESULTS: 'results',
} as const;

export const VALUES_SELECTIONS_REQUIRED = 5;
export const VALUES_RESULT_COUNT = 5;
