<script lang="ts">
  import { valueById, valueInsights, valueTypes } from './data';
  import ValueCardRanked from './ValueCardRanked.svelte';

  export let topValues: [string, number][] = [];
</script>

<h2>Your Top 5 Values</h2>
<p>
  These values represent the core principles that resonate with you the most. They are the guiding lights in your life, shaping your decisions and actions.
</p>
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
