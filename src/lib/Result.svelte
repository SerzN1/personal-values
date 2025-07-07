<script lang="ts">
  import { VALUES_RESULT_COUNT } from './constants';
  import { valueGroups, values } from './data';
  import TopValues from './TopValues.svelte';

  export let scores: Record<string, number> = {};
  export let onStartOver: () => void;

  const topValuesSorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, VALUES_RESULT_COUNT)
    .filter(Boolean);

  const topValuesData = topValuesSorted.map(([name]) => values.find(v => v.name === name));

  console.log('Top values sorted:', topValuesSorted, topValuesData);
</script>

<div class="comparison-results">
  <h2>Your Top 5 Values</h2>
  <TopValues
    topValues={topValuesData}
    valueGroups={valueGroups}
  />
  <button class="reset-btn" type="button" on:click={onStartOver}>
    Start Over
  </button>

  Temporary
  <ul style="margin-top:2em;">
    {#each topValuesSorted as topValue}
      <li><strong>{topValue[0]}</strong>: {topValue[1]} points</li>
    {/each}
  </ul>
</div>

<style>
  .comparison-results {
    margin-top: 2em;
  }
</style>
