<script lang="ts">
  import { VALUES_RESULT_COUNT } from './constants';
  import Controls from './Controls.svelte';
  import { groupData, valueById } from './data';
  import GroupBalance from './GroupBalance.svelte';
  import TopValues from './TopValues.svelte';
  import { analyzeGroupScores, summarizeGroups } from './utils';

  export let scores: Record<string, number> = {};
  export let onPrev: () => void;
  export let onNext: () => void;

  const topValuesSorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, VALUES_RESULT_COUNT)
    .filter(Boolean);

  const groupScores = summarizeGroups(topValuesSorted, valueById);
  const groupAnalysysResult = analyzeGroupScores(groupScores, groupData)
</script>

<header class="header">
  <h1 class="header-title">Assessment Results</h1>
  <p class="header-description">
    They reflect what truly matters to you — the principles that shape your choices, relationships, and direction in life. Keep them close; they’re your compass.
  </p>
</header>

<main class="comparison-results">
  <TopValues topValues={topValuesSorted} />
  <hr />
  <GroupBalance groupScores={groupScores} groupAnalysysResult={groupAnalysysResult} />

  <Controls>
    {#snippet prev()}
      <a href="#prev" on:click|preventDefault={onPrev} title="Prioritize Again" aria-label="Prioritize Again">Prioritize Again</a>
    {/snippet}
    {#snippet next()}
      <a href="#next" on:click|preventDefault={onNext} aria-label="Restart Assessment">Restart Assessment</a>
    {/snippet}
  </Controls>
</main>

<style>

</style>
