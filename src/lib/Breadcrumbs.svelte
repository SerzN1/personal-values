<script lang="ts">
  import { STAGES } from './constants';

  export let stage: typeof STAGES[keyof typeof STAGES] = STAGES.START;
</script>

<div class="breadcrumbs">
  <span class="breadcrumb {stage === STAGES.START ? 'active' : ''}">Start</span>
  <span class="breadcrumb {stage === STAGES.SELECTION ? 'active' : ''}">Values Selection</span>
  <span class="breadcrumb {stage === STAGES.COMPARISON ? 'active' : ''}">Values Prioritization</span>
  <span class="breadcrumb {stage === STAGES.RESULTS ? 'active' : ''}">Results</span>
</div>

<style>
   .breadcrumbs {
    font: var(--sk-font-ui-small);
    color: var(--sk-fg-4);
    text-transform: uppercase;
  }

  .breadcrumb:not(:last-child):after {
    content: " • ";
    color: var(--sk-fg-4);
  }

  .breadcrumb.active {
    color: var(--sk-fg-1);
  }
</style>
