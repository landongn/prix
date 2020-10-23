<style lang="postcss">

</style>

<script>
import io from "socket.io-client";
import { onMount } from "svelte";
export let segment; // the current URL;

onMount(() => {
  let socket = io();
})
</script>


<main>
  <slot />
</main>

