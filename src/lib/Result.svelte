<script lang="ts">
  import { VALUES_RESULT_COUNT } from './constants';
  import { valueTypes, values } from './data';
  import RadialDiagram from './RadialDiagram.svelte';
  import TopValues from './TopValues.svelte';

  export let scores: Record<string, number> = {};
  export let onStartOver: () => void;

  const topValuesSorted = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, VALUES_RESULT_COUNT)
    .filter(Boolean);

  const topValuesData = topValuesSorted.map(([name]) => values.find(v => v.name === name));



  // const top5 = calculateTop5Values(...);
  // const scoresByGroup = summarizeGroups(top5.topValues);
  // const insightList = detectTensions(scoresByGroup);

  // console.log("🔍 Insights:");
  // for (const line of insightList) {
  //   console.log("• " + line);
  // }


</script>

<header class="header">
  <h1 class="header-title">Your Top 5 Values</h1>
  <p class="header-description">
    They reflect what truly matters to you — the principles that shape your choices, relationships, and direction in life. Keep them close; they’re your compass.
  </p>
</header>

<main class="comparison-results">
  <TopValues
    topValues={topValuesData}
    valueGroups={valueTypes}
  />

  <RadialDiagram
    scores={topValuesData.reduce((acc, val) => {
      acc[val.name] = val.score;
      return acc;
    }, {} as Record<string, number>)}
  />

  <p class="bottom-cta">
    <a href="#start" class="cta" on:click={onStartOver}>Start Over</a>
  </p>


  <!-- Temporary
  <ul>
    {#each topValuesSorted as topValue}
      <li><strong>{topValue[0]}</strong>: {topValue[1]} points</li>
    {/each}
  </ul> -->
</main>

<style>
  .bottom-cta {
    border-top: 1px solid var(--sk-border);
    text-wrap: balance;
    margin: 7rem 0 0;
    padding: 1rem 0 0;
  }
  .cta {
    display: block;
    color: var(--sk-color-primary);
    color: var(--sk-fg-accent);
  }
  .cta::after {
    content: '';
    display: block;
    mask: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cg%20stroke='hsl(12%2093%2048)'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'%20clip-path='url(%23a)'%3e%3cpath%20d='M18%2012.004H6M12%206l6%206-6%206'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e") 100% / 100% no-repeat;
  }
</style>
