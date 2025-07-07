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

  // function clickLogo() {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }
</script>

<nav aria-label="Primary" class="header">
  <div class="header-logo">
    <img src={logo} class="logo" alt="Personal Values Assessment" />
    <span class="header-title">Personal Values<br /> Assessment</span>
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

    <button class="raised" type="button" aria-pressed="false" aria-label="Toggle dark mode"><span class="icon svelte-1e8u0mo"></span>
    </button>
  </div>
</nav>

<style>
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
  .header:after {
    content: "";
    background: linear-gradient(#0000, #0000000d);
    width: 100%;
    height: 4px;
    position: absolute;
    top: -4px;
    left: 0;
  }
  @media (max-width: 831px) {
      .header {
          top: unset;
          bottom: 0;
          transition: transform .2s;
      }
  }

  @media (min-width: 832px) {
    .header:after {
        background: linear-gradient(#0000000d, #0000);
        top: auto;
        bottom: -4px;
    }
}

  .header-logo {
    display: flex;
    align-items: center;
  }

  .header-title {
    color: inherit;
    font: var(--sk-font-ui-medium);
    align-items: center;
    margin-left: .4em;
    display: flex;
    text-transform: uppercase;
    letter-spacing: -0.02em;
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
