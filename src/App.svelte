<script lang="ts">
  import svelteLogo from './assets/svelte.svg';
  import Comparison from './lib/Comparison.svelte';
  import { REQUIRED_SELECTIONS, STAGES } from './lib/constants';
  import FAQ from './lib/FAQ.svelte';
  import { processStage, resetSelection, selectedValues } from './lib/selectionStore';
  import { valueGroups, values } from './lib/values';
  import ValueSelection from './lib/ValueSelection.svelte';
  import viteLogo from '/vite.svg';

  // Subscribe to store for reactivity
  let selected: string[] = [];
  let error = '';
  let showComparison = false;
  let comparisonScores: Record<string, number> = {};
  let stage: typeof STAGES[keyof typeof STAGES] = STAGES.SELECTION;

  processStage.subscribe(val => stage = val);

  selectedValues.subscribe((val) => {
    selected = val;
  });

  function startAssessment() {
    processStage.set('selection');
    error = '';
  }

  function handleSelectionChange(newSelected: string[]) {
    selectedValues.set(newSelected);
    error = '';
  }

  function handleProceed() {
    if (selected.length < REQUIRED_SELECTIONS) {
      error = `Please select at least ${REQUIRED_SELECTIONS} values to continue.`;
      return;
    }
    processStage.set(STAGES.COMPARISON);
  }

  function handleComparisonFinish(scores: Record<string, number>) {
    comparisonScores = scores;
    processStage.set(STAGES.RESULTS);
  }

  function handleRestart() {
    resetSelection();
    processStage.set(STAGES.SELECTION);
    error = '';
    showComparison = false;
  }
</script>

<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Personal Values Assessment</h1>
  <p>
    Discover your core personal values and learn how they shape your decisions, relationships, and overall well-being.
  </p>
  {#if stage === STAGES.SELECTION}
    <ValueSelection
      values={values}
      valueGroups={valueGroups}
      selected={selected}
      onSelectionChange={handleSelectionChange}
      onProceed={handleProceed}
      onRestart={handleRestart}
      error={error}
    />
  {:else if stage === STAGES.COMPARISON}
    <Comparison
      selected={values.filter(v => selected.includes(v.name))}
      onFinish={handleComparisonFinish}
    />
  {:else if stage === STAGES.RESULTS}
    <Comparison
      selected={values.filter(v => selected.includes(v.name))}
      onFinish={handleComparisonFinish}
    />
  {/if}
  <FAQ />
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
