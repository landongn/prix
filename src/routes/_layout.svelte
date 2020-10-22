<script>
  import Nav from '../components/Nav.svelte';

  export let segment;
</script>

<div class="flex flex-col h-screen">
  <Nav {segment} />

  <main class="container max-w-4xl flex-grow mx-auto py-16">
    <slot />
  </main>

</div>
