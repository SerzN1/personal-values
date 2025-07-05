<script lang="ts">
  import ValueCard from './ValueCard.svelte';
  import { REQUIRED_SELECTIONS } from './constants';
  import type { IValue, IValueGroup } from './values';
  export let values: IValue[] = [];
  export let valueGroups: Record<string, IValueGroup> = {};
  export let selected: string[] = [];
  export let error: string = '';
  export let onSelectionChange: (selected: string[]) => void;
  export let onProceed: () => void;
  export let onRestart: () => void;

  let localSelected = [...selected];
  $: selectionCount = localSelected.length;
  $: canProceed = selectionCount >= REQUIRED_SELECTIONS;

  function toggleValue(name: string) {
    if (localSelected.includes(name)) {
      localSelected = localSelected.filter(n => n !== name);
    } else {
      if (localSelected.length >= values.length) return;
      localSelected = [...localSelected, name];
    }
    onSelectionChange(localSelected);
  }

  function proceed() {
    if (!canProceed) return;
    onProceed();
  }

  function restart() {
    localSelected = [];
    onRestart();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<section class="value-selection">
  <h2>Select Your Values</h2>
  <p>Select at least {REQUIRED_SELECTIONS} values that resonate with you.</p>
  {#if error}
    <p class="error">{error}</p>
  {/if}
  <div class="values-list">
    {#each values as value}
      {@const group = valueGroups[value.group]}
      {@const isSelected = localSelected.includes(value.name)}
      <ValueCard
        {value}
        {group}
        {isSelected}
        onToggle={toggleValue}
      />
    {/each}
  </div>
  <p class="selected-count">Selected: {selectionCount} / {values.length}</p>
  <button class="continue-btn" on:click={proceed} disabled={!canProceed}>
    Continue
  </button>
  <button class="restart-btn" on:click={restart}>
    Restart
  </button>
</section>

<style>
  .value-selection {
    /* Container for the selection UI */
  }

  .error {
    color: red;
  }

  .values-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .selected-count {
    margin-top: 1em;
  }

  .continue-btn {
    margin-top: 1rem;
  }

  .restart-btn {
    margin-top: 1rem;
    margin-left: 1rem;
    background: #eee;
    color: #333;
  }
</style>
