<script lang="ts">
  import { t } from '../i18n';
  import type { IValue, IValueType } from '../types';

  export let rank: number;
  export let value: IValue;
  export let type: IValueType;
  export let insight: string;

  const fontSizes = ['--sk-font-size-h1', '--sk-font-size-h2'];
</script>

<div class="ranked">
  <h3 style="color: {type.color}; font-size: var({fontSizes[rank]})" id="nr{rank + 1}">
    {$t(value.label)}
    <a href="#nr{rank + 1}" class="permalink" aria-label="permalink"></a>
  </h3>
  <img class="group-icon" src="{type.iconSvg}" alt="{type.label}" color={type.color} />
  <p>{$t(insight)}</p>
  <p>
    <span class="highlight add">{$t('valueCard.strengths')}:</span> {$t(value.strengths)}<br />
    <span class="highlight remove">{$t('valueCard.dangers')}:</span> {$t(value.dangers)}<br />
    <span class="highlight">{$t('valueCard.reflectionQuestions')}:</span><br />
    {#each $t(value.reflectionQuestions) as q}
      • {q}<br />
    {/each}
  </p>
  <span class="rank" aria-label="{$t('valueCard.rank', { rank: rank + 1 })}" style="font-size: {12 - 1.3 * rank}rem">#{rank + 1}</span>
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
  :global([dir="rtl"]) .group-icon {
    left: auto;
    right: -1rem;
  }
  .rank {
    font: var(--sk-font-h1);
    font-size: 5rem;
    position: absolute;
    top: -3rem;
    right: 0rem;
    opacity: 0.15;
    pointer-events: none;
  }
  :global([dir="rtl"]) .rank {
    left: 0rem;
    right: auto;
  }
  h3 {
    margin-top: 5rem;
    scroll-margin-top: calc(var(--sk-nav-height) + 4rem);
  }
  @media (max-width: 767px) {
    .permalink {
      display: none;
    }
  }
</style>
