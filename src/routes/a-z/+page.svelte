<script>
  // @ts-ignore
  import { Button } from "$lib/components/ui/button";
  import { Input } from "$lib/components/ui/input";
  import { X } from "lucide-svelte";
  import { pages } from "$lib/js/PageList.js";
  import NavbarSpacer from "$lib/components/block/NavbarSpacer.svelte";

  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let starts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let value = ""; // this contains the current value of the search bar
  /**
   * @param {{ target: { value: string; }; }} e
   */
  function searchInput(e) {
    value = e.target.value.toLowerCase();
    if(starts!== "ABCDEFGHIJKLMNOPQRSTUVWXYZ"){
      starts = "ABCDEFGHIJKLMNOPQRSTU";
    }
    // console.log(value);
  }

  function resetSearch(){
    starts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    value = ""; 
  }
</script>

  <NavbarSpacer/>

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
  <Button type="submit" on:click={resetSearch} title="resets the search"><X /></Button>
</form>

<div class="min-h-screen">
  {#each pages as page}
    {#if (page.title.toLowerCase().includes(value) || page.description
        .toLowerCase()
        .includes(value)) && starts.includes(page.title[0])}
      <a href={page.link} class="border m-4 p-4 block">
        <p class="font-bold text-lg">{page.title}</p>
        <p class="text-md">{page.description}</p>
      </a>
    {/if}
  {/each}
</div>
