<script lang="ts">
  import logo from '../assets/logo.svg';
  import { STAGES, VALUES_SELECTIONS_REQUIRED } from './constants';

  export let stage: typeof STAGES[keyof typeof STAGES] = STAGES.START;
  export let selected: string[] = [];
  export let onStart: () => void;
  export let onRestart: () => void;

  // function toggleDarkMode() {
  //   const isDark = document.documentElement.classList.toggle('dark');
  //   localStorage.setItem('darkMode', isDark ? 'true' : 'false');
  // }
  // $: darkMode = localStorage.getItem('darkMode') === 'true';
  // $: if (darkMode) {
  //   document.documentElement.classList.add('dark');
  // } else {
  //   document.documentElement.classList.remove('dark');
  // }

  function clickLogo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
</script>

<nav aria-label="Primary" class="header">
  <div class="header-logo">
    <img src={logo} class="logo" alt="Personal Values Assessment" />
    <span class="header-title">Personal Values Assessment</span>
  </div>
  <div class="header-data">
    <button class="btn raised" type="button" aria-pressed="false" aria-label="Toggle dark mode"><span class="icon svelte-1e8u0mo"></span></button>


    {#if stage === STAGES.START}
      <button on:click={onStart}>Start Assessment</button>
    {:else if stage === STAGES.SELECTION}
      Selected: {selected.length} / {VALUES_SELECTIONS_REQUIRED}
      <button class="restart-btn" on:click={onRestart}>
        Restart
      </button>
    {:else if stage === STAGES.COMPARISON}
      Compared {selected.length} values
      <button class="restart-btn" on:click={onRestart}>
        Restart
      </button>
    {:else if stage === STAGES.RESULTS}
      <button class="restart-btn" on:click={onRestart}>
        Restart
      </button>
    {/if}
  </div>
</nav>

<style>
  :root {
    --sk-bg-1: #f8f9fa;
    --sk-bg-3: #23272f;
    --sk-nav-height: 6rem;
    --sk-secondary-nav-height: 5rem;
    --sk-page-padding-top: 6rem;
    --sk-page-padding-bottom: 8rem;
    --sk-page-padding-side: 1.6rem;
    --sk-thick-border-width: .3rem;
    --sk-border-radius: .4rem;
    --sk-border-radius-inner: .2rem;
    --sk-page-content-width: 76rem;
    --sk-banner-height: 0px;
    --sk-pane-controls-height: 4.2rem;

    --sk-nav-height: 60px;
    --sk-page-padding-side: 1rem;
    --sk-page-padding-top: 8rem;
    --sk-page-padding-side: 4.8rem;
    --sk-secondary-nav-height: 6rem;
  }

  @media (-webkit-min-device-pixel-ratio: 1.75), (min-resolution: 1.75dppx) {
    :root {
        --sk-font-family-body: "EB Garamond", Georgia, serif;
        --sk-font-size-body: 2.2rem;
        --sk-font-size-body-small: 2rem;
    }
  }

  .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--sk-bg-3);
      padding: 0 var(--sk-page-padding-side);
      height: var(--sk-nav-height);
      z-index: 101;
  }
  @media (max-width: 831px) {
      .header {
          top: unset;
          bottom: 0;
          transition: transform .2s;
      }
  }

  .header-logo {
    display: flex;
    align-items: center;
  }

  .logo {
    height: 40px;
    margin-right: 1em;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  .header-data {
    font-size: 0.9em;
  }

  .restart-btn {
    margin-left: 1em;
    background-color: #dc3545;
    color: white;
    border: none;
    padding: 0.5em 1em;
    cursor: pointer;
  }




  .btn:has(>span.icon) {
      background-position: 50%;
      background-repeat: no-repeat;
      background-size: 2.3rem 2.3rem;
      width: 3.2rem;
      height: 3.2rem;
      position: relative;
  }
  .btn.raised {
      border-radius: var(--sk-border-radius);
      border-style: solid;
      border-color: var(--sk-raised-color);
      border-width: var(--sk-raised-width);
  }
  .btn {
      color: currentColor;
      background-color: #0000;
      border: none;
  }
</style>
