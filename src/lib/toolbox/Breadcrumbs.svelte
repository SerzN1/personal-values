<script lang="ts">
  import { STAGES } from '../constants';
  import { t } from '../i18n';

  export let stage: typeof STAGES[keyof typeof STAGES] = STAGES.START;
</script>

<div class="breadcrumbs">
  <span class="breadcrumb {stage === STAGES.START ? 'active' : ''}">{$t('breadcrumbs.start')}</span>
  <span class="breadcrumb {stage === STAGES.SELECTION ? 'active' : ''}">{$t('breadcrumbs.selection')}</span>
  <span class="breadcrumb {stage === STAGES.COMPARISON ? 'active' : ''}">{$t('breadcrumbs.comparison')}</span>
  <span class="breadcrumb {stage === STAGES.RESULTS ? 'active' : ''}">{$t('breadcrumbs.results')}</span>
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
