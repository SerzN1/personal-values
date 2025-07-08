<script lang="ts">
  import { groupData } from "./data";

  export let groupScores: Record<string, number>;

  const total = Object.values(groupScores).reduce((a, b) => a + b, 0);
</script>

<div class="items">
  {#each Object.entries(groupScores) as [key, score]}
    <div class="item">
      <div class="item-score">{groupData[key].label}: {score / total}%</div>
      <div class="rounded">
        <div class="item-ribbon" style="width: {score}%; background-color: {groupData[key].color}"></div>
      </div>
    </div>
  {/each}
</div>

<style>
  .items {}
  .item {}
  .item-ribbon {
    height: 4rem;
  }
  .item-ribbon {
    height: 4rem;
  }
  div::-webkit-scrollbar {
    display: none;
  }
</style>
