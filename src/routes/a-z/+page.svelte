<script>
  // @ts-ignore
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { Search } from "lucide-svelte";
  import { pages } from "$lib/js/PageList.js";

  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let starts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let value = ""; // this contains the current value of the search bar
  function searchInput(e) {
    value = e.target.value.toLowerCase();
    // console.log(value);
  }
</script>

<div class="flex flex-wrap my-4">
  {#each alphabets as alphabet}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <span
      class="my-1 mx-3 py-1 px-2 rounded-sm hover:bg-slate-200 cursor-pointer"
      on:click={() => {
        starts = alphabet;
        // console.log(starts);
      }}>{alphabet}</span
    >
  {/each}
</div>

<form class="mx-16 flex items-center space-x-2">
  <Input type="text" placeholder="Search" on:input={searchInput} />
  <Button type="submit"><Search /></Button>
</form>

{#each pages as page}
  {#if (page.title.includes(value) || page.description.includes(value)) && starts.includes(page.title[0])}
    <a href={page.link} class="border m-4 p-4 block">
      <p class="font-bold text-lg">{page.title}</p>
      <p class="text-md">{page.description}</p>
    </a>
  {/if}
{/each}
