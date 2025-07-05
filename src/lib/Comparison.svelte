<script lang="ts">
  import { onMount } from 'svelte';
  import TopValues from './TopValues.svelte';
  import type { IValue } from './values';
  import { valueGroups } from './values';

  export let selected: IValue[] = [];
  export let onFinish: (scores: Record<string, number>) => void;

  // Generate all unique pairs
  function getPairs(arr: IValue[]) {
    const pairs: [IValue, IValue][] = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        pairs.push([arr[i], arr[j]]);
      }
    }
    return pairs;
  }

  const STORAGE_KEY = 'comparison-state-v1';

  let pairs = getPairs(selected);
  let scores: Record<string, number> = {};
  selected.forEach(v => (scores[v.name] = 0));
  let current = 0;
  let lastWinner: string | null = null;

  function saveState() {
    const state = {
      scores,
      current,
      pairs: pairs.map(pair => [pair[0].name, pair[1].name]),
      selected: selected.map(v => v.name),
      lastWinner
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function loadState() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    try {
      const state = JSON.parse(raw);
      if (!state.selected || !state.pairs) return false;
      // Only restore if selected matches
      if (JSON.stringify(state.selected) !== JSON.stringify(selected.map(v => v.name))) return false;
      scores = { ...scores, ...state.scores };
      current = state.current;
      lastWinner = state.lastWinner;
      // Rebuild pairs from names
      const nameToValue = Object.fromEntries(selected.map(v => [v.name, v]));
      pairs = state.pairs.map(([a, b]: [string, string]) => [nameToValue[a], nameToValue[b]]);
      return true;
    } catch {
      return false;
    }
  }

  onMount(() => {
    loadState();
  });

  function pick(winner: IValue, loser: IValue) {
    scores[winner.name]++;
    lastWinner = winner.name;
    current++;
    // Reorder the remaining pairs so that the winner is always first in the next pair(s) where possible
    // Priority: next pair should be winner vs the next unresolved value, then continue as before
    // Only reorder pairs after the current one
    let nextIdx = current;
    // Find the next pair where winner is present and is not first, and swap it to be next
    for (let i = current; i < pairs.length; i++) {
      const [a, b] = pairs[i];
      if (a.name !== winner.name && b.name === winner.name) {
        // Swap winner to first position in this pair
        pairs[i] = [winner, a];
      }
      // Move the next pair with winner to the next position if not already there
      if (i === nextIdx && pairs[i][0].name !== winner.name && pairs[i][1].name === winner.name) {
        // Swap with nextIdx
        const temp = pairs[nextIdx];
        pairs[nextIdx] = pairs[i];
        pairs[i] = temp;
        break;
      }
    }
    saveState();
    if (current >= pairs.length) {
      localStorage.removeItem(STORAGE_KEY);
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
    <!-- Show top 5 values as cards -->
    <TopValues
      topValues={Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
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
