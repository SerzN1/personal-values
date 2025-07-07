<script lang="ts">
  import type { IValue, IValueGroup } from './types';
  export let value: IValue;
  export let group: IValueGroup;
  export let isSelected: boolean;
  export let onToggle: (name: string) => void;
</script>

<button
  type="button"
  class="value-card group-{value.group} {isSelected ? 'selected' : ''}"
  style="background-image: {group.iconSvg};"
  on:click={() => onToggle(value.name)}
>
  <h3>{value.name}</h3>
  <small>{value.synonyms.join(', ')}</small>
  <div class="group-label">{group?.label}</div>
  <div class="group-desc">{group?.description}</div>
</button>

<style>
.value-card {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 1rem;
  width: 220px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 60px 60px;
  background-position: top right;
  box-shadow: none;
  transition: box-shadow 0.2s, border-color 0.2s;
}
.value-card.selected {
  box-shadow: 0 0 0 2px #333;
  border-color: #333;
  outline: 2px solid #333;
}
.value-card h3 {
  margin: 0 0 0.2em 0;
}
.value-card small {
  color: #666;
}
.group-label {
  font-size: 0.9em;
  margin-top: 0.5em;
}
.group-desc {
  font-size: 0.8em;
  color: #666;
}
/* Group background and color classes */
.group-self-direction {
  background: #e3e6fa;
  color: #1a237e;
}
.group-universalism {
  background: #e0f2f1;
  color: #00695c;
}
.group-stimulation {
  background: #fce4ec;
  color: #ad1457;
}
.group-hedonism {
  background: #fff3e0;
  color: #ff6f00;
}
.group-achievement {
  background: #e8f5e9;
  color: #2e7d32;
}
.group-power {
  background: #efebe9;
  color: #6d4c41;
}
.group-security {
  background: #e1f5fe;
  color: #0277bd;
}
.group-conformity {
  background: #eceff1;
  color: #37474f;
}
.group-tradition {
  background: #fbe9e7;
  color: #8d6e63;
}
.group-benevolence {
  background: #e8f5e9;
  color: #388e3c;
}
</style>
