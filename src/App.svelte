<script lang="ts">
  import svelteLogo from './assets/svelte.svg';
  import FAQ from './lib/FAQ.svelte';
  import { isSelectionValid, resetSelection, selectedValues } from './lib/selectionStore';
  import { values } from './lib/values';
  import viteLogo from '/vite.svg';
  let started = false;
  let error = '';

  // Subscribe to store for reactivity
  let selected: string[] = [];
  selectedValues.subscribe((val) => {
    selected = val;
    if (selected.length > 0) started = true;
  });

  function startAssessment() {
    started = true;
    error = '';
  }

  function toggleValue(name: string) {
    if (selected.includes(name)) {
      selectedValues.set(selected.filter(n => n !== name));
    } else {
      if (selected.length >= values.length) return;
      selectedValues.set([...selected, name]);
    }
    error = '';
  }

  function proceed() {
    if (!isSelectionValid(selected)) {
      error = 'Please select at least 10 values to continue.';
      return;
    }
    // Proceed to next stage (to be implemented)
    alert('Proceeding to comparison stage...');
  }

  function restartAssessment() {
    resetSelection();
    started = false;
    error = '';
  }
</script>

<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Personal Values Assessment</h1>
  <p>
    Discover your core personal values and learn how they shape your decisions, relationships, and overall well-being.
  </p>
  {#if !started}
    <button on:click={startAssessment}>
      Start Assessment
    </button>
  {/if}

  {#if started}
    <section>
      <h2>Select Your Values</h2>
      <p>Select at least 10 values that resonate with you.</p>
      {#if error}
        <p style="color: red">{error}</p>
      {/if}
      <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
        {#each values as value}
          <button type="button" style="border: 1px solid #ccc; border-radius: 4px; padding: 1rem; width: 220px; background: {selected.includes(value.name) ? '#e0ffe0' : 'rgba(255, 255, 255, 0.8)'}; cursor: pointer;" on:click={() => toggleValue(value.name)}>
            <img src={value.image} alt={value.name} style="width: 48px; height: 48px; object-fit: contain;" />
            <h3>{value.name}</h3>
            <small>({value.synonyms.join(', ')})</small>
            <p>{value.info}</p>
          </button>
        {/each}
      </div>
      <p>Selected: {selected.length} / {values.length}</p>
      <button on:click={proceed} disabled={selected.length < 10} style="margin-top: 1rem;">
        Continue
      </button>
      <button on:click={restartAssessment} style="margin-top: 1rem; margin-left: 1rem; background: #eee; color: #333;">
        Restart
      </button>
    </section>
  {/if}

  {#if !started}
    <section>
      <h2>What are personal values?</h2>
      <p>Personal values are the guiding principles that influence your behavior, choices, and sense of purpose.</p>
    </section>

    <section>
      <h2>How does knowing your own values help you in daily life?</h2>
      <p>Knowing your values helps you make decisions that align with your authentic self, reduce stress, and improve your relationships.</p>
    </section>

    <FAQ />
  {/if}
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
