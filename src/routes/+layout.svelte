<script>
  import "../app.postcss";
  import Navbar from "$lib/components/block/Navbar.svelte";
  let hasMainEvent = true;
</script>

{#if hasMainEvent}
  <div class="bg-foreground flex justify-center cursor-pointer">
    <a href="https://crce-connect.vercel.app" class=" text-background cursor-pointer">
      Visit the old website</a
    >
  </div>
{/if}
<Navbar/>
<slot />
