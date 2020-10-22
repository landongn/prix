<script>

export let segment;
import io from "socket.io-client";
import { onMount } from "svelte";

onMount(() => {
  let socket = io();
  
})
</script>

<div class="flex flex-col h-screen">
 

  <main class="container max-w-4xl flex-grow mx-auto py-16">
    <slot />
  </main>

</div>
