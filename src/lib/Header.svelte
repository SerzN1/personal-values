<script lang="ts">
  import logo from '../assets/logo.svg';
  import { STAGES, VALUES_SELECTIONS_REQUIRED } from './constants';

  export let stage: typeof STAGES[keyof typeof STAGES] = STAGES.START;
  export let selected: string[] = [];
  export let comparedPairs: number = 0;
  export let totalPairs: number = 0;
  export let onStart: () => void;
  export let onNext: () => void;
  export let onRestart: () => void;

  function toggleDarkMode() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    darkMode = isDark;
  }

  $: darkMode = localStorage.getItem('darkMode') === 'true';
  $: if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  function clickLogo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openGithub() {
    window.open('https://github.com/serzn1/personal-values/', '_blank');
  }

  function scrollToPageBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
</script>

<nav aria-label="Primary" class="header">
  <div class="header-logo" on:click={clickLogo} on:keypress={clickLogo} tabindex="0" role="button">
    <img src={logo} class="logo" alt="Personal Values Assessment" />
    <span class="header-title">Personal Values<br /> Assessment</span>
  </div>
  <div class="header-data">
    {#if stage === STAGES.START}
      <button class="btn raised" type="button" aria-pressed="false" aria-label="Start Assessment" title="Start Assessment" on:click={onStart}>
        <span class="icon icon-start"></span>
      </button>
    {:else if stage === STAGES.SELECTION}
      <span class="header-status">
        Selected {selected?.length} of {VALUES_SELECTIONS_REQUIRED}
      </span>
      <button class="btn raised" type="button" aria-pressed="false" aria-label="Continue Assessment" title="Continue Assessment" on:click={onNext}>
        <span class="icon icon-continue"></span>
      </button>
      <button class="btn raised" type="button" aria-pressed="false" aria-label="Restart Assessment" title="Restart Assessment" on:click={onRestart}>
        <span class="icon icon-restart"></span>
      </button>
    {:else if stage === STAGES.COMPARISON}
      <span class="header-status">
        Compared {comparedPairs} of {totalPairs}
      </span>
      <button class="btn raised" type="button" aria-pressed="false" aria-label="Restart Assessment" title="Restart Assessment" on:click={onRestart}>
        <span class="icon icon-restart"></span>
      </button>
    {:else if stage === STAGES.RESULTS}
      <button class="btn raised" type="button" aria-pressed="false" aria-label="Restart Assessment" title="Restart Assessment" on:click={onRestart}>
        <span class="icon icon-restart"></span>
      </button>
    {/if}

    <button class="raised" type="button" aria-pressed="false" aria-label="Toggle Dark Mode" title="Toggle Dark Mode" on:click={toggleDarkMode}>
      <span class="icon {darkMode ? 'icon-dark-mode' : 'icon-light-mode'}"></span>
    </button>
    <button class="raised" type="button" aria-pressed="false" aria-label="Github" title="Github" on:click={openGithub}>
      <span class="icon icon-github"></span>
    </button>
    <button class="raised" type="button" aria-pressed="false" aria-label="Privacy Note" title="Privacy Note" on:click={scrollToPageBottom}>
      <span class="icon icon-privacy"></span>
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
    cursor: pointer;
  }

  .header-title {
    color: inherit;
    font: var(--sk-font-ui-medium);
    font-size: 1.5rem;
    line-height: 1.3;
    align-items: center;
    margin-left: .4em;
    display: flex;
    text-transform: uppercase;
    white-space: nowrap;
    letter-spacing: -0.02em;
  }

  @media (max-width: 831px) {
    .header-title {
      display: none;
    }
  }

  .logo {
    height: 38px;
    margin-right: 1em;
  }

  .header-logo:hover .logo {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }

  .header-data {
    /* font-size: 0.9em; */
    gap: .5rem;
    display: flex;
    align-items: center;
  }

  .header-status {
    padding: .1rem .8rem 0;
    color: inherit;
    font: var(--sk-font-ui-medium);
    white-space: nowrap;
    outline-offset: -2px;
    align-items: center;
    height: 100%;
    text-decoration: none;
    display: flex;
  }

  .icon-start {
    mask: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%20fill='none'%3E%3Cpath%20d='M12%202v6.5'%20stroke='%23676778'%20stroke-width='2'%20stroke-linecap='round'/%3E%3Cpath%20d='M6.05%207.05a8%208%200%201%200%2011.9%200'%20stroke='%23676778'%20stroke-width='2'%20stroke-linecap='round'/%3E%3C/svg%3E") 50% / 2.2rem no-repeat;
  }

  .icon-continue {
    mask: url("data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%3E%3Cpath%20d='M8%206l6%206-6%206'%20stroke='%23676778'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3E%3Cpath%20d='M12%206l6%206-6%206'%20stroke='%23676778'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3E%3C/svg%3E") 50% / 2.2rem no-repeat;
  }

  .icon-restart {
    /* content: "";
    transition: all .2s ease-out;
    position: absolute;
    top: 0;
    left: 0; */
    mask: url("data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.364%2018.364C16.7353%2019.9927%2014.4853%2021%2012%2021C7.02945%2021%203%2016.9706%203%2012C3%207.02945%207.02945%203%2012%203C14.4853%203%2016.7353%204.00736%2018.364%205.63605C19.193%206.46505%2021%208.5%2021%208.5'%20stroke='%23676778'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M21%204V8.5H16.5'%20stroke='%23676778'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e") 50% / 1.8rem no-repeat;
  }


  .icon-light-mode {
    mask-image: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23666'%20d='M12%2021q-3.775%200-6.388-2.613T3%2012q0-3.45%202.25-5.988T11%203.05q.625-.075.975.45t-.025%201.1q-.425.65-.638%201.375T11.1%207.5q0%202.25%201.575%203.825T16.5%2012.9q.775%200%201.538-.225t1.362-.625q.525-.35%201.075-.037t.475.987q-.35%203.45-2.937%205.725T12%2021Zm0-2q2.2%200%203.95-1.213t2.55-3.162q-.5.125-1%20.2t-1%20.075q-3.075%200-5.238-2.163T9.1%207.5q0-.5.075-1t.2-1q-1.95.8-3.163%202.55T5%2012q0%202.9%202.05%204.95T12%2019Zm-.25-6.75Z'/%3e%3c/svg%3e");
    mask-size: 2rem;
  }
  .icon-dark-mode {
    mask-image: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23d4d4d4'%20d='M12%2019a1%201%200%200%201%20.993.883L13%2020v1a1%201%200%200%201-1.993.117L11%2021v-1a1%201%200%200%201%201-1zm6.313-2.09.094.083.7.7a1%201%200%200%201-1.32%201.497l-.094-.083-.7-.7a1%201%200%200%201%201.218-1.567l.102.07zm-11.306.083a1%201%200%200%201%20.083%201.32l-.083.094-.7.7a1%201%200%200%201-1.497-1.32l.083-.094.7-.7a1%201%200%200%201%201.414%200zM4%2011a1%201%200%200%201%20.117%201.993L4%2013H3a1%201%200%200%201-.117-1.993L3%2011h1zm17%200a1%201%200%200%201%20.117%201.993L21%2013h-1a1%201%200%200%201-.117-1.993L20%2011h1zM6.213%204.81l.094.083.7.7a1%201%200%200%201-1.32%201.497l-.094-.083-.7-.7A1%201%200%200%201%206.11%204.74l.102.07zm12.894.083a1%201%200%200%201%20.083%201.32l-.083.094-.7.7a1%201%200%200%201-1.497-1.32l.083-.094.7-.7a1%201%200%200%201%201.414%200zM12%202a1%201%200%200%201%20.993.883L13%203v1a1%201%200%200%201-1.993.117L11%204V3a1%201%200%200%201%201-1zm0%205a5%205%200%201%201-4.995%205.217L7%2012l.005-.217A5%205%200%200%201%2012%207z'/%3e%3c/svg%3e");
  }

  .icon-github {
    mask-image: url("data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23666'/%3e%3c/svg%3e");
  }
  .icon-privacy {
    mask-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%20-1%2024%2024%22%20id%3D%22shield%22%3E%3Cpath%20d%3D%22M19.6%2C3.65a1%2C1%2C0%2C0%2C0-.84-.2%2C8%2C8%2C0%2C0%2C1-6.22-1.27%2C1%2C1%2C0%2C0%2C0-1.14%2C0A8%2C8%2C0%2C0%2C1%2C5.21%2C3.45a1%2C1%2C0%2C0%2C0-.84.2A1%2C1%2C0%2C0%2C0%2C4%2C4.43v7.45a9%2C9%2C0%2C0%2C0%2C3.77%2C7.33l3.65%2C2.6a1%2C1%2C0%2C0%2C0%2C1.16%2C0l3.65-2.6A9%2C9%2C0%2C0%2C0%2C20%2C11.88V4.43A1%2C1%2C0%2C0%2C0%2C19.63%2C3.65ZM18%2C11.88a7%2C7%2C0%2C0%2C1-2.93%2C5.7L12%2C19.77%2C8.93%2C17.58A7%2C7%2C0%2C0%2C1%2C6%2C11.88V5.58a10%2C10%2C0%2C0%2C0%2C6-1.39%2C10%2C10%2C0%2C0%2C0%2C6%2C1.39ZM13.54%2C9.59l-2.69%2C2.7-.89-.9a1%2C1%2C0%2C0%2C0-1.42%2C1.42l1.6%2C1.6a1%2C1%2C0%2C0%2C0%2C1.42%2C0L15%2C11a1%2C1%2C0%2C0%2C0-1.42-1.42Z%22%2F%3E%3C%2Fsvg%3E");
  }
</style>
