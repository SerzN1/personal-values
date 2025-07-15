<script lang="ts">
  import { valueById, valueInsights, valueTypes } from '../data';
  import { t } from '../i18n';
  import ValueCardRanked from './ValueCardRanked.svelte';

  export let topValues: [string, number][] = [];
</script>

<h2>{$t('topValues.title')}</h2>
<p>{$t('topValues.description')}</p>
<div class="cards">
  {#each topValues as value, i}
    <ValueCardRanked
      rank={i}
      value={valueById[value[0]]}
      type={valueTypes[valueById[value[0]].type]}
      insight={valueById[value[0]].insight || valueInsights[value[0]]}
    />
  {/each}
</div>

<style>
  h2 {
    margin-top: 7rem;
    scroll-margin-top: calc(var(--sk-nav-height) + 4rem);
  }
</style>
