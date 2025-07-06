<script lang="ts">
  export let faqs: { q: string; a: string }[] = [
  {
    "q": "What are personal core values?",
    "a": "Personal core values are the beliefs and inner principles that guide your decisions, actions, and relationships. They shape how you lead, what you prioritize, and how you define success. These values aren’t just abstract ideas — they’re deeply felt drivers of behavior. When you’re clear on them, you navigate life with more confidence and clarity. Values like curiosity, honesty, autonomy, or compassion reflect who you are at your core — not who others expect you to be."
  },
  {
    "q": "Why does knowing your values matter?",
    "a": "When you know your core values, you make decisions with more ease and integrity. You feel more aligned in your work, relationships, and leadership. Your values help you define what “success” actually means to you — and they serve as a compass when things get unclear or challenging. Without clarity on your values, it’s easy to feel pulled in too many directions or stuck in roles that no longer fit who you are."
  },
  {
    "q": "How does this values assessment work?",
    "a": "This is a quick, reflective tool designed to help you identify your Top 5 personal values. You’ll review a carefully curated list of values, choose the ones that resonate most, and then prioritize them. It only takes a few minutes — but the insight you gain can be long-lasting. The goal isn’t perfection — it’s self-awareness. Once you know your values, you can start making decisions and setting goals that truly align."
  },
  {
    "q": "Who is this for?",
    "a": "This assessment is for leaders, professionals, and anyone who wants to live and lead more intentionally. Whether you’re navigating change, working with a coach, or simply curious about what drives you, this tool helps you connect with what matters most. It’s especially useful during career transitions, leadership development, or moments when you’re feeling stuck or out of sync. Clarity on your values leads to clarity in your actions."
  },
  {
    "q": "Can values change over time?",
    "a": "Yes — and that’s a sign of growth. As you evolve, face new challenges, or experience meaningful shifts in life, some values may rise in importance while others fade. Checking in with your values helps you stay aligned with who you are becoming, not just who you’ve been. This assessment isn’t about locking yourself into fixed ideas — it’s about staying grounded and intentional in how you lead and live."
  },
  {
    "q": "What will I get at the end?",
    "a": "You’ll receive a clear, prioritized list of your Top 5 personal values. Each one comes with a short reflection prompt to help you explore how it shows up in your daily life and leadership. It’s a snapshot of your inner compass — one you can revisit anytime you need to make a tough decision, reconnect with your purpose, or explore what’s next. Simple, insightful, and highly personal."
  }
]
;
</script>

<section id="faq" itemscope itemtype="https://schema.org/FAQPage">
  {#each faqs as faq}
    <article itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
      <h2 itemprop="name">{faq.q}</h2>
      <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
        <p itemprop="text">{faq.a}</p>
      </div>
    </article>
  {/each}
</section>
