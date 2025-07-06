<script lang="ts">
  import Breadcrumbs from './lib/Breadcrumbs.svelte';
  import Comparison from './lib/Comparison.svelte';
  import { resetComparison } from './lib/comparisonStore';
  import { STAGES, VALUES_SELECTIONS_REQUIRED } from './lib/constants';
  import { valueGroups, values } from './lib/data';
  import FAQ from './lib/FAQ.svelte';
  import Navigation from './lib/Header.svelte';
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

<Navigation stage={stage} onStart={handleStart} onRestart={handleRestart} selected={selected} />
<header class="header">
  <Breadcrumbs stage={stage} />
  <h1 class="header-title">Personal Values Assessment</h1>
  <p class="header-description">
    Discover your core personal values and learn how they shape your decisions, relationships, and overall well-being.
  </p>

  <a href="#start" class="cta" on:click={handleStart}>
    <h2>Start Assessment</h2>
    <p>We recommend starting with the interactive tutorial, which will teach you how to use Svelte right here in your browser.</p>
  </a>
</header>
<main>
  <FAQ />
  {#if stage === STAGES.START}
  123
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
  .cta {
      color: inherit;
      background-color: var(--sk-bg-1);
      border-radius: var(--sk-border-radius);
      margin: 1em -1.6rem;
      padding: 1.6rem;
      display: block;
      color: var(--sk-fg-accent);
  }

  .cta:hover {
      background-color: var(--sk-bg-2);
      filter: drop-shadow(1px 2px 4px #0000001a);
      transform: var(--safari-fix);
      -webkit-transform: var(--safari-fix);
      text-decoration: none;
  }

  .cta h2:after {
      /* .options.svelte-pf4pqp a:where(.svelte-pf4pqp) h2:where(.svelte-pf4pqp):after { */
    content: "";
    background: var(--sk-fg-accent);
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: .2rem;
    right: 0;
    mask: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cg%20stroke='hsl(12%2093%2048)'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'%20clip-path='url(%23a)'%3e%3cpath%20d='M18%2012.004H6M12%206l6%206-6%206'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e") 100% / 100% no-repeat;
  }

  @media (min-width: 480px) {
      .cta {
          margin: 1em -2.4rem;
          padding: 2.4rem;
      }
  }
</style>
