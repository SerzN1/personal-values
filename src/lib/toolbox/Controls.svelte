
<script>
	import { t } from '../i18n';

	let { prev = null, next = null } = $props();
</script>

<div class="controls">
  <div class="control-title">
    <span class="prev {!prev && 'faded'}">{$t('common.previous')}</span>
    <span class="next {!next && 'faded'}">{$t('common.next')}</span>
  </div>
  <div class="controls-content">
    <div class="prev">
      {#if prev}
        {@render prev()}
      {/if}
    </div>
    <div class="next">
      {#if next}
        {@render next()}
      {/if}
    </div>
  </div>
</div>

<style>
	.controls {
		max-width: calc(var(--sk-page-content-width) + 1rem);
    border-top: 1px solid var(--sk-border);
    text-wrap: balance;
    margin: 5rem 0 0;
    padding: 1rem 0 0;
  }
  .control-title,
  .controls-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .control-title {
    font: var(--sk-font-ui-medium);
    text-transform: uppercase;
    color: var(--sk-fg-3);
  }
  .controls-content {
    font: var(--sk-font-body);
  }
  .faded {
    opacity: .4;
  }
</style>
