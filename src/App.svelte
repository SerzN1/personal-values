<script lang="ts">
  import svelteLogo from './assets/svelte.svg';
  import Comparison from './lib/Comparison.svelte';
  import FAQ from './lib/FAQ.svelte';
  import { resetSelection, selectedValues } from './lib/selectionStore';
  import { valueGroups, values } from './lib/values';
  import ValueSelection from './lib/ValueSelection.svelte';
  import viteLogo from '/vite.svg';

  // Subscribe to store for reactivity
  let selected: string[] = [];
  let started = false;
  let error = '';
  let showComparison = false;
  let comparisonScores: Record<string, number> = {};

  // Restore comparison state from localStorage if present
  const COMPARISON_KEY = 'comparison-state-v1';
  if (typeof window !== 'undefined') {
    const raw = localStorage.getItem(COMPARISON_KEY);
    if (raw) {
      try {
        const state = JSON.parse(raw);
        if (state.selected && state.pairs) {
          showComparison = true;
          started = true;
        }
      } catch {}
    }
  }

  selectedValues.subscribe((val) => {
    selected = val;
    started = selected.length > 0;
  });

  function startAssessment() {
    started = true;
    error = '';
  }

  function handleSelectionChange(newSelected: string[]) {
    selectedValues.set(newSelected);
    error = '';
  }

  function handleProceed() {
    if (selected.length < 3) {
      error = 'Please select at least 10 values to continue.';
      return;
    }
    showComparison = true;
  }

  function handleComparisonFinish(scores: Record<string, number>) {
    comparisonScores = scores;
    // Optionally, do something with the results (e.g., show a summary)
  }

  function handleRestart() {
    resetSelection();
    started = false;
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
  {#if !started}
    <button on:click={startAssessment}>
      Start Assessment
    </button>
    <FAQ />
  {/if}

  {#if started && !showComparison}
    <ValueSelection
      values={values}
      valueGroups={valueGroups}
      selected={selected}
      onSelectionChange={handleSelectionChange}
      onProceed={handleProceed}
      onRestart={handleRestart}
      error={error}
    />
  {/if}
  {#if showComparison}
    <Comparison
      selected={values.filter(v => selected.includes(v.name))}
      onFinish={handleComparisonFinish}
    />
  {/if}
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
