<script lang="ts">
  export let faqs: { q: string; a: string }[] = [
    {
      q: 'What are personal values?',
      a: 'Personal values are the core beliefs and principles that guide your decisions, actions, and interactions with others.'
    },
    {
      q: 'How does knowing your own values help you in daily life?',
      a: 'Understanding your values helps you make choices that align with your true self, leading to greater satisfaction and clarity.'
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
