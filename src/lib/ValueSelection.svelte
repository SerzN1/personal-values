<script lang="ts">
  import ValueCard from './ValueCard.svelte';
  import { VALUES_SELECTIONS_REQUIRED } from './constants';
  import type { IValue, IValueGroup } from './types';

  export let values: IValue[] = [];
  export let valueGroups: Record<string, IValueGroup> = {};
  export let selected: string[] = [];
  export let onSelectionChange: (selected: string[]) => void;
  export let onProceed: () => void;

  function toggleValue(name: string) {
    if (selected.includes(name)) {
      onSelectionChange(selected.filter(n => n !== name));
    } else {
      if (selected.length >= values.length) return;
      onSelectionChange([...selected, name]);
    }
  }

  function proceed() {
    if (selected.length < VALUES_SELECTIONS_REQUIRED) return;
    onProceed();
  }
</script>

<section class="value-selection">
  <h2>Select Your Values</h2>
  <p>Select at least {VALUES_SELECTIONS_REQUIRED} values that resonate with you.</p>
  <div class="values-list">
    {#each values as value}
      {@const group = valueGroups[value.group]}
      {@const isSelected = selected.includes(value.name)}
      <ValueCard
        {value}
        {group}
        {isSelected}
        onToggle={toggleValue}
      />
    {/each}
  </div>
  <button class="continue-btn" on:click={proceed} disabled={selected.length < VALUES_SELECTIONS_REQUIRED}>
    Continue
  </button>
</section>

<style>

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
