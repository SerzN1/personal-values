<script lang="ts">
  import type { IValue, IValueType } from './types';
  import ValueCardRanked from './ValueCardRanked.svelte';
  export let topValues: IValue[] = [];
  export let valueGroups: Record<string, IValueType> = {};
</script>

<div class="top-values">
  <div class="cards">
    {#each topValues as value, i}
      <ValueCardRanked
        rank={i + 1}
        value={value}
        group={valueGroups[value.group]}
      />
    {/each}
  </div>
</div>

<style>
  .top-values {
    margin-top: 2em;
  }
  .cards {
    display: grid;
    gap: 1.5rem;
  }
</style>
