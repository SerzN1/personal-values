<script lang="ts">
  import { VALUES_RESULT_COUNT } from './constants';
  import Controls from './toolbox/Controls.svelte';
  import { groupData, valueById } from './data';
  import GroupBalance from './toolbox/GroupBalance.svelte';
  import { t } from './i18n';
  import TopValues from './toolbox/TopValues.svelte';
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
  <h1 class="header-title">{$t('results.title')}</h1>
  <p class="header-description">{$t('results.description')}</p>
</header>

<main class="comparison-results">
  <TopValues topValues={topValuesSorted} />
  <hr />
  <GroupBalance groupScores={groupScores} groupAnalysysResult={groupAnalysysResult} />

  <Controls>
    {#snippet prev()}
      <a href="#prev" on:click|preventDefault={onPrev} title={$t('results.prioritizeAgain')} aria-label={$t('results.prioritizeAgain')}>{$t('results.prioritizeAgain')}</a>
    {/snippet}
    {#snippet next()}
      <a href="#next" on:click|preventDefault={onNext} title={$t('results.restartAssessment')} aria-label={$t('results.restartAssessment')}>{$t('results.restartAssessment')}</a>
    {/snippet}
  </Controls>
</main>

<style>

</style>
