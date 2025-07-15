<script lang="ts">
  import { onMount } from 'svelte';
  import { comparisonStore, getPairs, resetPrioritization } from './comparisonStore';
  import Controls from './Controls.svelte';
  import { valueById, valueTypes } from './data';
  import type { IValue } from './types';
  import ValueCard from './toolbox/ValueCard.svelte';

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
  <h1 class="header-title">What Guides You Most?</h1>
  <p class="header-description">
    You’ve selected values that resonate with you — great start. In this step, we’ll help you clarify what matters most by comparing them directly. Just choose the one that feels more important in each pair.
  </p>
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
          <div class="vs-text">or</div>
      </div>

      <ValueCard
        value={valueById[pairs[current][1]]}
        type={valueTypes[valueById[pairs[current][1]].type]}
        onClick={() => pick(pairs[current][1], pairs[current][0])}
      />
    </div>
    <!-- <p>Pair {current + 1} of {pairs.length}</p> -->
  {/if}

  <Controls>
    {#snippet prev()}
      <a href="#prev" on:click|preventDefault={resetPrioritization} title="Reset prioritization" aria-label="Reset prioritization">Reset Prioritization</a>
    {/snippet}
    {#snippet next()}
      <a href="#next" on:click|preventDefault title="You need to finish comparison too see results" class="disabled">See results</a>
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
