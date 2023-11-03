<script>
  import "../app.postcss";
  import Navbar from "$lib/components/block/Navbar.svelte";
  import Footer from "$lib/components/block/Footer.svelte";
  import { ExternalLink } from "lucide-svelte";
  import { fetchMainEvent } from "$lib/components/firebase/main_event";
  let hasMainEvent = true;
  // fetchMainEvent();
</script>

{#if hasMainEvent}
  <div
    class="bg-foreground text-background flex justify-center items-center cursor-pointer"
  >
    <a
      href="https://crce-connect.vercel.app"
      class=" text-background cursor-pointer"
    >
      Euphoria 2k23 is here 🎉🎉
    </a>&nbsp;&nbsp;&nbsp;<ExternalLink size={16} />
  </div>
{/if}
<Navbar />

<slot />
<Footer />
