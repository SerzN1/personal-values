<script lang="ts">
  import Comparison from './lib/Comparison.svelte';
  import { comparisonStore, resetPrioritization } from './lib/comparisonStore';
  import { STAGES, VALUES_SELECTIONS_REQUIRED } from './lib/constants';
  import { valueTypes, values, valuesShuffled } from './lib/data';
  import { t } from './lib/i18n';
  import Result from './lib/Result.svelte';
  import { processStage, resetSelectedValues, selectedValues } from './lib/selectionStore';
  import Breadcrumbs from './lib/toolbox/Breadcrumbs.svelte';
  import CTA from './lib/toolbox/CTA.svelte';
  import FAQ from './lib/toolbox/FAQ.svelte';
  import Navigation from './lib/toolbox/Header.svelte';
  import PrivacyNote from './lib/toolbox/PrivacyNote.svelte';
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
    <h1 class="header-title">{$t('header.title')}</h1>
    <p class="header-description">
      {$t('header.description')}
    </p>
  </header>
  <main>
    <CTA
      title={$t('header.start')}
      message={$t('header.startMessage')}
      onClick={handleStart}
    />
    <FAQ />
  </main>
{:else if $processStage === STAGES.SELECTION}
  <ValueSelection
    values={valuesShuffled}
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
