<script lang="ts">
  import PolarizationInsight from './PolarizationInsight.svelte';
  import RadialDiagram from './RadialDiagram.svelte';
  import SvsGroupsDisplay from './SVSGroupsDisplay.svelte';
  import type { IGroupAnalysisResult } from './types';
  import { detectTensions, generateUserReflections } from './utils';

  export let groupScores: Record<string, number> = {};
  export let groupAnalysysResult: IGroupAnalysisResult;

  const radialDiagramInsights = detectTensions(groupScores);
  const userReflections = generateUserReflections(groupScores);
</script>

<h2>Group Balance Overview</h2>
<p>{groupAnalysysResult.summary}</p>

<div class="graphs">
  <SvsGroupsDisplay groupScores={groupScores} />
  <RadialDiagram scores={groupScores} />
</div>

<h3>Your Leading Value Orientation</h3>
<p>{groupAnalysysResult.topGroup}</p>

<h3>A Less Emphasized Focus</h3>
<p>{groupAnalysysResult.bottomGroup}</p>

<h3>Personal Insights</h3>
{#each radialDiagramInsights as insight}
  <p>{insight}</p>
{/each}

<h3>Reflective Prompts</h3>
{#each userReflections as userReflection}
  <p>{userReflection}</p>
{/each}

{#if groupAnalysysResult.polarization}
  <PolarizationInsight polarization={groupAnalysysResult.polarization} />
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
    grid-template-columns: 1fr, 1fr;
  }
</style>
