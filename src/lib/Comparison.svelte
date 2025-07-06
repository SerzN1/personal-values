<script lang="ts">
  import { onMount } from 'svelte';
  import { comparisonStore, resetComparison } from './comparisonStore';
  import { VALUES_RESULT_COUNT } from './constants';
  import { valueGroups } from './data';
  import TopValues from './TopValues.svelte';
  import type { IValue } from './types';
  import { getPairs } from './utils';

  export let selected: IValue[] = [];
  export let onFinish: (scores: Record<string, number>) => void;

  let pairs: [IValue, IValue][] = [];
  let scores: Record<string, number> = {};
  let current = 0;
  let lastWinner: string | null = null;

  function initializeFromStore(selected: IValue[]) {
    comparisonStore.subscribe((state) => {
      if (state && state.selected && JSON.stringify(state.selected) === JSON.stringify(selected.map(v => v.name))) {
        // Restore from store
        scores = { ...scores, ...state.scores };
        current = state.current;
        lastWinner = state.lastWinner;
        // Rebuild pairs from names
        const nameToValue = Object.fromEntries(selected.map(v => [v.name, v]));
        pairs = state.pairs.map(([a, b]) => [nameToValue[a], nameToValue[b]]);
      } else {
        // Fresh start
        pairs = getPairs(selected);
        scores = {};
        selected.forEach(v => (scores[v.name] = 0));
        current = 0;
        lastWinner = null;
      }
    });
  }

  onMount(() => {
    initializeFromStore(selected);
  });

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
    let found = false;
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
        found = true;
        break;
      }
    }
    saveState();
    if (current >= pairs.length) {
      resetComparison();
      onFinish(scores);
    }
  }
</script>

{#if current < pairs.length}
  <div class="comparison">
    <h2>Which value is more important to you?</h2>
    <button class="compare-btn" on:click={() => pick(pairs[current][0], pairs[current][1])}>
      {pairs[current][0].name}
    </button>
    <span style="margin: 0 1em;">vs</span>
    <button class="compare-btn" on:click={() => pick(pairs[current][1], pairs[current][0])}>
      {pairs[current][1].name}
    </button>
    <p>Pair {current + 1} of {pairs.length}</p>
  </div>
{:else}
  <div class="comparison-results">
    <h2>Comparison Complete</h2>
    <!-- Show top values as cards -->
    <TopValues
      topValues={Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, VALUES_RESULT_COUNT)
        .map(([name]) => selected.find(v => v.name === name))
        .filter(Boolean)}
      valueGroups={valueGroups}
    />
    <ul style="margin-top:2em;">
      {#each Object.entries(scores).sort((a, b) => b[1] - a[1]) as [name, score]}
        <li><strong>{name}</strong>: {score} points</li>
      {/each}
    </ul>
  </div>
{/if}

<style>
  .comparison {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
  }
  .compare-btn {
    font-size: 1.2em;
    padding: 1em 2em;
    margin: 0.5em;
    border-radius: 8px;
    border: 2px solid #888;
    cursor: pointer;
    transition: box-shadow 0.2s;
  }
  .compare-btn:hover {
    box-shadow: 0 0 0 2px #888;
  }
  .comparison-results {
    margin-top: 2em;
  }
</style>
