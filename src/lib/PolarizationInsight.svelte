<script lang="ts">
  import { valueById, valueTypes } from './data';
  import type { IGroupPolarization } from './types';

  export let polarization: IGroupPolarization;
</script>

<h2>Polarization Insight</h2>
<p>
  {polarization.gap}
</p>
<p>
  {polarization.message}
</p>
<p>
  {polarization.tensionBetween}
</p>

<style>
  h2 {
    margin-top: 7rem;
    scroll-margin-top: calc(var(--sk-nav-height) + 4rem);
  }
</style>
