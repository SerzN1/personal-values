<script lang="ts">
  import { groupData } from './data';
  import RadialDiagram from './RadialDiagram.svelte';
  import SvsGroupsDisplay from './SVSGroupsDisplay.svelte';
  import type { IGroupAnalysisResult } from './types';
  import { detectTensions, generateUserReflections } from './utils';

  export let groupScores: Record<string, number> = {};
  export let groupAnalysysResult: IGroupAnalysisResult;

  const radialDiagramInsights = detectTensions(groupScores, groupData);
  const userReflections = generateUserReflections(groupScores);
  const topGroupData = groupData[groupAnalysysResult.topGroup];
  const bottomGroupData = groupData[groupAnalysysResult.bottomGroup];
</script>

<h2>Values Group Balance Overview</h2>
<p>
  <span style="color:{topGroupData.color}">{topGroupData.label}</span> is your <code>Leading Value Group Orientation</code>.
  <span style="color:{bottomGroupData.color}">{bottomGroupData.label}</span> is a <code>Less Emphasized Focus</code>.
  {groupAnalysysResult.summary}
</p>

<div class="graphs">
  <SvsGroupsDisplay groupScores={groupScores} />
  <RadialDiagram scores={groupScores} />
</div>

<h3>Personal Insights</h3>
{#each radialDiagramInsights as insight}
  <blockquote>
    <p>{insight}</p>
  </blockquote>
{/each}

<h3 id="reflective-prompts">Reflective Prompts</h3>
<blockquote>
  <p>
    {#each userReflections as userReflection}
      {userReflection}<br />
    {/each}
  </p>
</blockquote>

{#if groupAnalysysResult.polarization}
  <h2 id="polarization-insight">Polarization Insight</h2>
  <blockquote>
    <p>
      {groupAnalysysResult.polarization.gap} points
    </p>
    <p>
      {groupAnalysysResult.polarization.message}
    </p>
  </blockquote>
{/if}

<style>
  h2 {
    margin-top: 7rem;
    scroll-margin-top: calc(var(--sk-nav-height) + 4rem);
  }

  h3 {
    margin-top: 5rem;
    scroll-margin-top: calc(var(--sk-nav-height) + 4rem);
  }

  .graphs {
    display: grid;
    gap: 2rem;
    align-items: center;
  }

  @media (min-width: 600px) {
    .graphs {
      grid-template-columns: 1fr 1fr;
    }
  }


  blockquote {
    padding: 0 0 0 4.5rem;
    position: relative;
  }

  blockquote:before {
    font-size: 6.4em;
    line-height: 1;
    font-family: var(--sk-font-family-heading);
    color: var(--sk-fg-4);
    position: absolute;
    left: 0;
    content: "";
    background: var(--sk-fg-accent);
    pointer-events: none;
    width: 2em;
    height: 2em;
    display: block;
    top: .05em;
    mask: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='%23ff3e00'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'%3e%3cpath%20d='M15%2014c.2-1%20.7-1.7%201.5-2.5%201-.9%201.5-2.2%201.5-3.5A6%206%200%200%200%206%208c0%201%20.2%202.2%201.5%203.5.7.7%201.3%201.5%201.5%202.5'/%3e%3cpath%20d='M9%2018h6'/%3e%3cpath%20d='M10%2022h4'/%3e%3c/svg%3e") .5rem 0/2.6rem no-repeat
  }
</style>
