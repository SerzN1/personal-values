<script lang="ts">

  import Comparison from './lib/Comparison.svelte';
  import { resetComparison } from './lib/comparisonStore';
  import { STAGES, VALUES_SELECTIONS_REQUIRED } from './lib/constants';
  import { valueGroups, values } from './lib/data';
  import FAQ from './lib/FAQ.svelte';
  import Header from './lib/Header.svelte';
  import Result from './lib/Result.svelte';
  import { processStage, resetSelectedValues, selectedValues } from './lib/selectionStore';
  import ValueSelection from './lib/ValueSelection.svelte';

  // Subscribe to store for reactivity
  let stage: typeof STAGES[keyof typeof STAGES] = STAGES.SELECTION;
  let selected: string[] = [];
  let comparisonScores: Record<string, number> = {};
  let error = '';

  processStage.subscribe(val => stage = val);

  selectedValues.subscribe((val) => {
    selected = val;
  });

  function handleSelectionChange(newSelected: string[]) {
    selectedValues.set(newSelected);
    error = '';
  }

  function handleProceed() {
    if (selected.length < VALUES_SELECTIONS_REQUIRED) {
      error = `Please select at least ${VALUES_SELECTIONS_REQUIRED} values to continue.`;
      return;
    }
    processStage.set(STAGES.COMPARISON);
  }

  function handleComparisonFinish(scores: Record<string, number>) {
    comparisonScores = scores;
    processStage.set(STAGES.RESULTS);
  }

  function handleStart() {
    processStage.set(STAGES.SELECTION);
  }

  function handleRestart() {
    resetSelectedValues();
    resetComparison();

    processStage.set(STAGES.START);
    error = '';
    window.location.reload();
  }
</script>

<Header stage={stage} onStart={handleStart} onRestart={handleRestart} selected={selected} />
<main class="page">
  <h1>Personal Values Assessment</h1>
  {#if stage === STAGES.START}
    <p>
      Discover your core personal values and learn how they shape your decisions, relationships, and overall well-being.
    </p>
    <button class="start-btn" on:click={handleStart}>
      Start Assessment
    </button>
    <FAQ />
  {:else if stage === STAGES.SELECTION}
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
    <Result
      scores={comparisonScores}
      onStartOver={handleRestart}
    />
  {/if}
</main>

<style>

  .page {
    padding: var(--sk-page-padding-top) var(--sk-page-padding-side) var(--sk-page-padding-bottom);
  }

</style>
