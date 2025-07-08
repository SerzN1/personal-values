<script lang="ts">
  import type { IValue, IValueType } from './types';
  export let rank: number;
  export let value: IValue;
  export let type: IValueType;
</script>

<div class="card card-ranked">
  <h2 style="color: {type.color};">{value.label}</h2>
  <img class="group-icon" src="{type.iconSvg}" alt="{type.label}" color={type.color} />
  <p>{value.description}</p>
  <p><b class="highlight add">Strengths:</b> {value.strengths}</p>
  <p><b class="highlight remove">Dangers:</b> {value.dangers}</p>
  <p><b class="highlight">Self-reflection questions:</b></p>
  <ul class="value-reflections">
    {#each value.reflectionQuestions as q}
      <li>{q}</li>
    {/each}
  </ul>
  <span class="rank" aria-label="Rank {value.label}">#{rank}</span>
</div>

<style>
  .card {
    color: inherit;
    background-color: var(--sk-bg-2);
    filter: drop-shadow(1px 2px 4px #0000001a);
    border-radius: var(--sk-border-radius);
    padding: 1.6rem;
    text-decoration: none;
    border: 2px solid transparent;
    overflow: hidden;
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
