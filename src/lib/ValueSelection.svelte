<script lang="ts">
  import Controls from './Controls.svelte';
  import ValueCard from './ValueCard.svelte';
  import { VALUES_SELECTIONS_REQUIRED } from './constants';
  import type { IValue, IValueType } from './types';

  export let values: IValue[] = [];
  export let valueTypes: Record<string, IValueType> = {};
  export let selected: string[] = [];
  export let onSelectionChange: (selected?: string[]) => void;
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

  $: isDisabled = selected.length < VALUES_SELECTIONS_REQUIRED;
  $: ctaMessage = isDisabled ? `Select ${VALUES_SELECTIONS_REQUIRED - selected.length} more values to proceed.` : 'Let’s refine your selection';
</script>

<header class="header">
  <h1 class="header-title">Select Your Values</h1>
  <p class="header-description">
    What matters to you, really? Pick the values that feel like “you.”<br />
    Select at least {VALUES_SELECTIONS_REQUIRED} values that resonate with you.
  </p>
</header>

<main>
  <div class="values-list">
    {#each values as value}
      {@const group = valueTypes[value.type]}
      {@const isSelected = selected.includes(value.id)}
      <ValueCard
        {value}
        {group}
        {isSelected}
        onClick={toggleValue}
      />
    {/each}
  </div>

  <Controls>
    {#snippet prev()}
      <a href="#prev" on:click|preventDefault={() => onSelectionChange()} title="Reset selection" aria-label="Reset selection">
        Reset selection
      </a>
    {/snippet}
    {#snippet next()}
      <a href="#next" on:click|preventDefault={proceed} title={ctaMessage} aria-label="Continue to next step" class="{isDisabled ? 'disabled' : ''}">
        Continue
      </a>
    {/snippet}
  </Controls>
</main>

<style>
  .values-list {
    display: grid;
    grid-gap: 1rem;
    margin-bottom: 7rem;
  }

  @media (min-width: 600px) {
    .values-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 900px) {
    .values-list {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .disabled {
    cursor: not-allowed;
  }
</style>
