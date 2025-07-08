<script lang="ts">
  import { comparisonStore } from './comparisonStore';
  import type { IValue } from './types';
  import ValueCard from './ValueCard.svelte';

  export let selected: IValue[] = [];
  export let onFinish: (scores: Record<string, number>) => void;

  let pairs: [IValue, IValue][] = [];
  let scores: Record<string, number> = {};
  let current = 0;
  let lastWinner: string | null = null;


  function saveState() {
    comparisonStore.set({
      scores,
      current,
      pairs: pairs.map(pair => [pair[0].name, pair[1].name]),
      selected: selected.map(v => v.name),
      lastWinner
    });
  }

  function pick(winner: IValue, loser: IValue) {
    scores[winner.name]++;
    lastWinner = winner.name;
    current++;
    // Always show the winner in the next pair if possible
    // Find the next pair where winner is present and move it to the next position
    let nextIdx = current;
    for (let i = current; i < pairs.length; i++) {
      const [a, b] = pairs[i];
      if (a.name === winner.name || b.name === winner.name) {
        // Place winner as first in the pair
        pairs[i] = [winner, a.name === winner.name ? b : a];
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
      onFinish(scores);
    }
  }
</script>

<header class="header">
  <h1 class="header-title">What Guides You Most?</h1>
  <p class="header-description">
    You’ve selected values that resonate with you — great start. In this step, we’ll help you clarify what matters most by comparing them directly. Just choose the one that feels more important in each pair.
  </p>
</header>

{#if current < pairs.length}
  <div class="comparison">
    <ValueCard
      value={pairs[current][0]}
      group={pairs[current][0].group}
      onClick={() => pick(pairs[current][0], pairs[current][1])}
      aria-label="Select {pairs[current][0].name} as more important than {pairs[current][1].name}"
    />

    <div class="vs">
        <div class="vs-text">or</div>
    </div>

    <ValueCard
      value={pairs[current][1]}
      group={pairs[current][1].group}
      onClick={() => pick(pairs[current][1], pairs[current][0])}
      aria-label="Select {pairs[current][1].name} as more important than {pairs[current][0].name}"
    />
  </div>
  <p>Pair {current + 1} of {pairs.length}</p>
{/if}

<style>
  .comparison {
    margin-top: 2em;
    display: grid;
    grid-gap: 1rem;
    margin: 2rem -1.6rem;
  }
  .comparison > :first-child {
    text-align: right;
  }
  @media (min-width: 600px) {
    .comparison {
      grid-template-columns: 1fr auto 1fr;
      gap: 2rem;
      margin: 7rem -2.4rem;
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
</style>
