// Constants for localStorage keys and other app-wide constants

export const SELECTION_STORAGE_KEY = 'personal-values-selection-v1';
export const PRIORITIZATION_STORAGE_KEY = 'personal-values-prioritization-state-v1';

export const STAGES = {
  START: 'start',
  SELECTION: 'selection',
  COMPARISON: 'comparison',
  RESULTS: 'results',
} as const;

export const VALUES_SELECTIONS_REQUIRED = 3;
export const VALUES_RESULT_COUNT = 5;
