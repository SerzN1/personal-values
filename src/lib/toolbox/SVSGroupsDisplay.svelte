<script lang="ts">
  import { groupData } from "../data";
  import { t } from "../i18n";

  export let groupScores: Record<string, number>;

  const total = Object.values(groupScores).reduce((a, b) => a + b, 0);
</script>

<div class="items">
  {#each Object.entries(groupScores) as [key, score]}
    {@const percentage = (score / total * 100).toFixed(1)}
    <div class="item">
      <div class="item-score">{$t(groupData[key].label)}: {percentage}%</div>
      <div class="rounded">
        <div class="item-ribbon" style="width: {percentage}%; background-color: {groupData[key].color}"></div>
      </div>
    </div>
  {/each}
</div>

<style>
  .items {
    overflow: hidden;
    padding: 4rem 0;
    display: flex;
    flex-direction: column;
    justify-items: center;
  }

  @media (min-width: 600px) {
    .items {
      padding: 0;
    }
  }

  .item {
    margin: 0 0 1.5rem;
  }
  .item-score {
    white-space: nowrap;
    font-family: var(--sk-font-family-mono);
    font-size: var(--sk-font-size-ui-small);

  }
  .item-ribbon {
    height: 1rem;
    min-width: 1rem;
    border-radius: var(--sk-border-radius-inner);
  }
  div::-webkit-scrollbar {
    display: none;
  }
</style>
