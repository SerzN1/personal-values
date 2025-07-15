<script lang="ts">
  import { t } from '../i18n';

  type FAQ = { id: string; q: string; a: string };

  $: faqs = $t<FAQ[]>('faq');
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
