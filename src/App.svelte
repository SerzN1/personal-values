<script lang="ts">
  import Breadcrumbs from './lib/Breadcrumbs.svelte';
  import Comparison from './lib/Comparison.svelte';
  import { comparisonStore, resetPrioritization } from './lib/comparisonStore';
  import { STAGES, VALUES_SELECTIONS_REQUIRED } from './lib/constants';
  import CTA from './lib/CTA.svelte';
  import { valueTypes, values } from './lib/data';
  import FAQ from './lib/FAQ.svelte';
  import Navigation from './lib/Header.svelte';
  import PrivacyNote from './lib/PrivacyNote.svelte';
  import Result from './lib/Result.svelte';
  import { processStage, resetSelectedValues, selectedValues } from './lib/selectionStore';
  import ValueSelection from './lib/ValueSelection.svelte';

  export const prerender = true;

  function handleSelectionChange(newSelected: string[] = []) {
    selectedValues.set(newSelected);
  }

  function handleProceed() {
    if ($selectedValues.length < VALUES_SELECTIONS_REQUIRED) {
      return;
    }
    processStage.set(STAGES.COMPARISON);
  }

  function handleBackToComparison() {
    resetPrioritization();
    processStage.set(STAGES.COMPARISON);
  }

  function handleComparisonFinish() {
    processStage.set(STAGES.RESULTS);
  }

  function handleStart() {
    processStage.set(STAGES.SELECTION);
  }

  function handleRestart() {
    resetSelectedValues();
    resetPrioritization();

    processStage.set(STAGES.START);
    window.scrollTo(0, 0);
    // window.location.reload();
  }
</script>

<Navigation
  stage={$processStage}
  selected={$selectedValues}
  comparedPairs={$comparisonStore?.current}
  onStart={handleStart}
  onNext={handleProceed}
  onRestart={handleRestart}
/>

<Breadcrumbs stage={$processStage} />

{#if $processStage === STAGES.START}
  <header class="header">
    <h1 class="header-title">Personal Values Assessment</h1>
    <p class="header-description">
      Discover your core personal values and learn how they shape your decisions, relationships, and overall well-being.
    </p>
  </header>
  <main>
    <CTA
      title="Start Assessment"
      message="Begin your journey of self-awareness — the assessment takes no more than 15 minutes."
      onClick={handleStart}
    />
    <FAQ />
  </main>
{:else if $processStage === STAGES.SELECTION}
  <ValueSelection
    values={values}
    valueTypes={valueTypes}
    selected={$selectedValues}
    onSelectionChange={handleSelectionChange}
    onProceed={handleProceed}
  />
{:else if $processStage === STAGES.COMPARISON}
  <Comparison
    selected={values.filter(v => $selectedValues.includes(v.id))}
    onFinish={handleComparisonFinish}
  />
{:else if $processStage === STAGES.RESULTS}
  <Result
    scores={$comparisonStore?.scores}
    onPrev={handleBackToComparison}
    onNext={handleRestart}
  />
{/if}

<PrivacyNote />
