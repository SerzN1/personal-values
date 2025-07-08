<script lang="ts">
  import type { IValue, IValueType } from './types';
  export let value: IValue;
  export let group: IValueType;
  export let isSelected: boolean;
  export let onClick: (name: string) => void;
</script>

<div
  class="card group-{value.group} {isSelected ? 'selected' : ''}"
  style="border-color: {isSelected ? group.color : 'transparent'};"
  role="button"
  tabindex="0"
  on:click|preventDefault={() => onClick(value.id)}
  on:keypress|preventDefault={() => onClick(value.id)}
>
  <h3>{value.label}</h3>
  <small class="value-description">{value.description}</small>
  <img class="group-icon" src="{group.iconSvg}" alt="{group.label}" color={group.color} />
  <button class="checkbox" type="button" aria-label="Select {value.label}">
    <span class="icon icon-check"></span>
  </button>
</div>

<style>
  .card {
      color: inherit;
      background-color: var(--sk-bg-2);
      filter: drop-shadow(1px 2px 4px #0000001a);
      border-radius: var(--sk-border-radius);
      /* margin: 1em -1.6rem; */
      padding: 1.6rem;
      display: block;
      cursor: pointer;
      transition: all .3s ease-in-out;
      text-decoration: none;
      border: 2px solid transparent;
      overflow: hidden;
      /* color: var(--sk-fg-accent); */
  }
  .card:hover {
      background-color: var(--sk-bg-3);
      filter: drop-shadow(2px 3px 4px #0000002a);
      transform: var(--safari-fix);
      text-decoration: none;
  }
  @media (min-width: 480px) {
    .card {
      padding: 2.4rem;
    }
  }

  .group-icon {
    position: absolute;
    top: -1rem;
    left: -1rem;
    height: 140%;
    opacity: 0.05;
    pointer-events: none;
  }
  .value-description {
    font-size: 1.3rem;
  }

  .checkbox {
    opacity: 0;
    transition: all 0.3s ease-in-out;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    pointer-events: none;
  }
  .icon-check {
    mask-image: url("data:image/svg+xml,%3csvg%20height='24'%20viewBox='0%200%2024%2024'%20width='24'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m21%207-12%2012-5.5-5.5%201.41-1.41%204.09%204.08%2010.59-10.58z'%20fill='%23000000e0'/%3e%3c/svg%3e");
  }
  .selected .checkbox {
    opacity: 1;
  }
</style>
