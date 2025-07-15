<script lang="ts">
  import { onMount } from 'svelte';
  import { comparisonStore, getPairs, resetPrioritization } from './comparisonStore';
  import { valueById, valueTypes } from './data';
  import { t } from './i18n';
  import Controls from './toolbox/Controls.svelte';
  import ValueCard from './toolbox/ValueCard.svelte';
  import type { IValue } from './types';

  export let selected: IValue[] = [];
  export let onFinish: () => void;

  let pairs: [string, string][] = [];
  let scores: Record<string, number> = {};
  let current = 0;
  let lastWinnerId: string | null = null;

  function initializeFromStore(selected: IValue[]) {
    comparisonStore.subscribe((state) => {
      if (state && state.selected && JSON.stringify(state.selected) === JSON.stringify(selected.map(v => v.id))) {
        // Restore from store
        scores = { ...scores, ...state.scores };
        current = state.current;
        lastWinnerId = state.lastWinner;
        pairs = state.pairs;
      } else {
        // Fresh start
        pairs = getPairs(selected);
        scores = {};
        selected.forEach(v => (scores[v.id] = 0));
        current = 0;
        lastWinnerId = null;
      }
    });
  }

  function saveState() {
    comparisonStore.set({
      scores,
      current,
      pairs,
      selected: selected.map(v => v.id),
      lastWinner: lastWinnerId
    });
  }

  function pick(winnerId: string, loserId: string) {
    scores[winnerId]++;
    lastWinnerId = winnerId;
    current++;
    // Always show the winner in the next pair if possible
    // Find the next pair where winner is present and move it to the next position
    let nextIdx = current;
    for (let i = current; i < pairs.length; i++) {
      const [a, b] = pairs[i];
      if (a === winnerId || b === winnerId) {
        // Place winner as first in the pair
        pairs[i] = [winnerId, a === winnerId ? b : a];
        // Move this pair to nextIdx
        if (i !== nextIdx) {
          const temp = pairs[nextIdx];
          pairs[nextIdx] = pairs[i];
          pairs[i] = temp;
        }
        break;
      }
    }
    saveState();
    if (current >= pairs.length) {
      onFinish();
    }
  }


  onMount(() => {
    initializeFromStore(selected);
  });
</script>

<header class="header">
  <h1 class="header-title">{$t('comparison.title')}</h1>
  <p class="header-description">{$t('comparison.description')}</p>
</header>

<main>
  {#if current < pairs.length}
    <div class="comparison">
      <ValueCard
        value={valueById[pairs[current][0]]}
        type={valueTypes[valueById[pairs[current][0]].type]}
        onClick={() => pick(pairs[current][0], pairs[current][1])}
      />

      <div class="vs">
          <div class="vs-text">{$t('comparison.or')}</div>
      </div>

      <ValueCard
        value={valueById[pairs[current][1]]}
        type={valueTypes[valueById[pairs[current][1]].type]}
        onClick={() => pick(pairs[current][1], pairs[current][0])}
      />
    </div>
  {/if}

  <Controls>
    {#snippet prev()}
      <a href="#prev" on:click|preventDefault={resetPrioritization} title={$t('comparison.resetPrioritization')} aria-label={$t('comparison.resetPrioritization')}>{$t('comparison.resetPrioritization')}</a>
    {/snippet}
    {#snippet next()}
      <a href="#next" on:click|preventDefault title={$t('comparison.finishComparisonFirst')} class="disabled">{$t('comparison.seeResults')}</a>
    {/snippet}
  </Controls>
</main>

<style>
  .comparison {
    display: grid;
    grid-gap: 1rem;
    margin: 5rem 0;
  }
  .comparison > :first-child {
    text-align: right;
  }
  @media (min-width: 600px) {
    .comparison {
      grid-template-columns: 1fr auto 1fr;
      gap: 2rem;
    }
  }

  .vs {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em 0;
    overflow: hidden;
  }
  .vs-text {
    font: var(--sk-font-ui-small);
    color: var(--sk-fg-4);
    text-transform: uppercase;
  }

  .disabled {
    cursor: not-allowed;
  }
</style>
