<script lang="ts">

  export let title: string = '';
  export let message: string = '';
  export let onClick: () => void;
</script>

<a href="#cta" class="cta" on:click|preventDefault={onClick}>
  <h2>{title}</h2>
  <p>{message}</p>
</a>

<style>
  .cta {
    color: inherit;
    background-color: var(--sk-bg-2);
    filter: drop-shadow(1px 2px 4px #0000001a);
    border-radius: var(--sk-border-radius);
    margin: 1em -1.6rem;
    padding: 1.6rem;
    display: block;
    transition: all .3s ease-in-out;
    /* color: var(--sk-fg-accent); */
  }

  .cta:hover {
    background-color: var(--sk-bg-3);
    filter: drop-shadow(2px 3px 4px #0000002a);
    transform: var(--safari-fix);
    text-decoration: none;
  }

  .cta:hover h2 {
    text-decoration: underline;
  }

  .cta h2:after {
    content: "";
    background: var(--sk-fg-accent);
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: .2rem;
    right: 0;
    mask: url("data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cg%20stroke='hsl(12%2093%2048)'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'%20clip-path='url(%23a)'%3e%3cpath%20d='M18%2012.004H6M12%206l6%206-6%206'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='a'%3e%3cpath%20fill='%23fff'%20d='M0%200h24v24H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e") 100% / 100% no-repeat;
  }

  @media (min-width: 480px) {
    .cta {
      margin: 1em -2.4rem;
      padding: 2.4rem;
    }
  }
</style>
