<script lang="ts">
  import type { IValue, IValueGroup } from './types';
  export let topValues: IValue[] = [];
  export let valueGroups: Record<string, IValueGroup> = {};

  // Inline SVG background for each card
  function getSvgBg(group: IValueGroup) {
    return group?.iconSvg ? `url('data:image/svg+xml;utf8,${encodeURIComponent(group.iconSvg)}')` : 'none';
  }
</script>

<div class="top-values">
  <h2>Your Top 5 Values</h2>
  <div class="cards">
    {#each topValues as value, i}
      {@const group = valueGroups[value.group]}
      <div class="result-card group-{value.group}" style="background-image: {getSvgBg(group)};">
        <div class="rank-badge">#{i + 1}</div>
        <h3>{value.name}</h3>
        <small>{value.synonyms.join(', ')}</small>
        <div class="group-label">{group?.label}</div>
        <div class="group-desc">{group?.description}</div>
        <div class="info"><strong>What it means:</strong> {value.info}</div>
        <div class="strengths"><strong>Strengths:</strong> {value.strengths}</div>
        <div class="dangers"><strong>Watch out for:</strong> {value.dangers}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  .top-values {
    margin-top: 2em;
    text-align: center;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
  }
  .result-card {
    position: relative;
    border: 2px solid #bbb;
    border-radius: 8px;
    padding: 1.2rem;
    width: 320px;
    background-repeat: no-repeat;
    background-size: 70px 70px;
    background-position: top right;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    text-align: left;
    margin-bottom: 1em;
  }
  .rank-badge {
    position: absolute;
    top: 0.7em;
    left: 0.7em;
    background: #333;
    color: #fff;
    border-radius: 50%;
    width: 2.1em;
    height: 2.1em;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.1em;
    box-shadow: 0 1px 4px rgba(0,0,0,0.10);
    z-index: 2;
  }
  .result-card h3 {
    margin: 0 0 0.2em 0;
  }
  .result-card small {
    color: #666;
  }
  .group-label {
    font-size: 0.95em;
    margin-top: 0.5em;
    font-weight: bold;
  }
  .group-desc {
    font-size: 0.85em;
    color: #666;
    margin-bottom: 0.5em;
  }
  .info, .strengths, .dangers {
    margin-top: 0.5em;
    font-size: 0.97em;
  }
  .strengths {
    color: #2e7d32;
  }
  .dangers {
    color: #ad1457;
  }
  .reset-btn {
    margin-top: 2em;
    padding: 0.7em 1.5em;
    font-size: 1em;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .reset-btn:hover {
    background-color: #0056b3;
  }
</style>
