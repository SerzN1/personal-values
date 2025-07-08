<script lang="ts">
  export let faqs: { id: string; q: string; a: string }[] = [
  {
    id: "what-are-values",
    q: "What are personal core values?",
    a: "Personal core values are the beliefs and inner principles that guide your decisions, actions, and relationships. They shape how you lead, what you prioritize, and how you define success. These values aren’t just abstract ideas — they’re deeply felt drivers of behavior. When you’re clear on them, you navigate life with more confidence and clarity. Values like curiosity, honesty, autonomy, or compassion reflect who you are at your core — not who others expect you to be."
  },
  {
    id: "why-know-values",
    q: "Why does knowing your values matter?",
    a: "When you know your core values, you make decisions with more ease and integrity. You feel more aligned in your work, relationships, and leadership. Your values help you define what “success” actually means to you — and they serve as a compass when things get unclear or challenging. Without clarity on your values, it’s easy to feel pulled in too many directions or stuck in roles that no longer fit who you are."
  },
  {
    id: "how-assessment-works",
    q: "How does this values assessment work?",
    a: "This is a quick, reflective tool designed to help you identify your Top 5 personal values. You’ll review a carefully curated list of values, choose the ones that resonate most, and then prioritize them. It only takes a few minutes — but the insight you gain can be long-lasting. The goal isn’t perfection — it’s self-awareness. Once you know your values, you can start making decisions and setting goals that truly align."
  },
  {
    id: "who-is-this-for",
    q: "Who is this for?",
    a: "This assessment is for leaders, professionals, and anyone who wants to live and lead more intentionally. Whether you’re navigating change, working with a coach, or simply curious about what drives you, this tool helps you connect with what matters most. It’s especially useful during career transitions, leadership development, or moments when you’re feeling stuck or out of sync. Clarity on your values leads to clarity in your actions."
  },
  {
    id: "can-values-change",
    q: "Can values change over time?",
    a: "Yes — and that’s a sign of growth. As you evolve, face new challenges, or experience meaningful shifts in life, some values may rise in importance while others fade. Checking in with your values helps you stay aligned with who you are becoming, not just who you’ve been. This assessment isn’t about locking yourself into fixed ideas — it’s about staying grounded and intentional in how you lead and live."
  },
  {
    id: "what-will-i-get",
    q: "What will I get at the end?",
    a: "You’ll receive a clear, prioritized list of your Top 5 personal values, each with a short reflection to help you explore how it shows up in your life and leadership. You’ll also see how your values are balanced across four key motivation groups — offering insight into what drives you, where tensions may exist, and how to stay aligned with what matters most. It’s a simple, personal snapshot of your inner compass — one you can return to whenever you need clarity, direction, or a moment of reflection."
  }
]
;
</script>

<section id="faq" itemscope itemtype="https://schema.org/FAQPage">
  {#each faqs as faq}
    <article itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h2 itemprop="name" id={faq.id}>
        {faq.q}
        <a href={`#${faq.id}`} class="permalink" aria-label="permalink"></a>
      </h2>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">{faq.a}</p>
      </div>
    </article>
  {/each}
</section>

<style>
  article {
    margin-top: 7rem;
  }
</style>
