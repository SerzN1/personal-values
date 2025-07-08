<script lang="ts">
  import type { IValue, IValueType } from './types';
  export let rank: number;
  export let value: IValue;
  export let type: IValueType;
</script>

<div class="ranked">
  <h3 style="color: {type.color};" id="nr{rank}">
    {value.label}
    <a href="#nr{rank}" class="permalink" aria-label="permalink"></a>
  </h3>
  <img class="group-icon" src="{type.iconSvg}" alt="{type.label}" color={type.color} />
  <p>{value.description}</p>
  <p>
    <span class="highlight add">Strengths:</span> {value.strengths}<br />
    <span class="highlight remove">Dangers:</span> {value.dangers}<br />
    <span class="highlight">Self-reflection questions:</span><br />
    {#each value.reflectionQuestions as q}
      {q}<br />
    {/each}
  </p>
  <span class="rank" aria-label="Rank {value.label}">#{rank}</span>
</div>

<style>
  .ranked {
    position: relative;
  }
  .group-icon {
    position: absolute;
    top: -1rem;
    left: -1rem;
    height: 140%;
    opacity: 0.05;
    pointer-events: none;
    max-height: 35vh;
  }
  .rank {
    font: var(--sk-font-h1);
    font-size: 12rem;
    position: absolute;
    top: -3rem;
    right: 0rem;
    opacity: 0.15;
  }

  h3 {
    margin-top: 5rem;
    scroll-margin-top: calc(var(--sk-nav-height) + 4rem);
  }

</style>
