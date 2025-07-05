<script lang="ts">
  export let faqs: { q: string; a: string }[] = [
    {
      q: 'What are personal values?',
      a: 'Personal values are the guiding principles that influence your behavior, choices, and sense of purpose.'
    },
    {
      q: 'How does knowing your own values help you in daily life?',
      a: 'Knowing your values helps you make decisions that align with your authentic self, reduce stress, and improve your relationships.'
    },
    {
      q: 'Can personal values change over time?',
      a: 'Yes, personal values can evolve as you grow, learn, and experience new things in life.'
    },
    {
      q: 'Why is it important to assess your values?',
      a: 'Assessing your values helps you prioritize what matters most and navigate life’s challenges with confidence.'
    },
    {
      q: 'How many values should I focus on?',
      a: 'Focusing on a core set of values (such as 10) helps you stay true to yourself without feeling overwhelmed.'
    }
  ];
</script>

{#each faqs as faq}
  <section style="margin-bottom: 1.5em;">
    <article>
      <h2>{faq.q}</h2>
      <p>{faq.a}</p>
    </article>
  </section>
{/each}
