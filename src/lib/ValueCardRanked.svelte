<script lang="ts">
  import type { IValue, IValueType } from './types';
  export let rank: number;
  export let value: IValue;
  export let group: IValueType;
</script>

<div class="card card-ranked">
  <h2 style="color: {group.color};">{value.label}</h2>
  <img class="group-icon" src="{group.iconSvg}" alt="{group.label}" color={group.color} />
  <p class="value-description">{value.description}</p>
  <p class="value-strengths"><b class="highlight add">Strengths:</b> {value.strengths}</p>
  <p class="value-dangers"><b class="highlight remove">Dangers:</b> {value.dangers}</p>
  <span class="rank" aria-label="Rank {value.label}">#{rank}</span>
</div>

<style>
  .card {
    background: var(--sk-bg-2);
    border: 1px solid var(--sk-border);
    border-radius: var(--sk-border-radius);

    /* background-color: var(--sk-bg-2);
    filter: drop-shadow(1px 2px 4px #0000001a);
    border-radius: var(--sk-border-radius);
    padding: 1.6rem;
    margin: 1em -1.6rem;
    border: 2px solid transparent;
    overflow: hidden; */
  }

  @media (min-width: 480px) {
    .card {
      margin: 1em -2.4rem;
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

  .rank {
    font: var(--sk-font-h1);
    font-size: 12rem;
    position: absolute;
    top: -3rem;
    right: 0rem;
    opacity: 0.15;
  }
</style>
