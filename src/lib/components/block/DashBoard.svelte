<script>
  // import { deleteHallOfFameImages } from "$lib/firebase/hall_of_fame_images";

  // @ts-nocheck
  import { addHallOfFameImages } from "$lib/firebase/hall_of_fame_images";

  let currentTab = "hall_of_fame_images";

  function changeTab(tab) {
    currentTab = tab;
    console.log(currentTab);
  }

  let srcImg = "";
  let altImg = "";
  let titleImg = "";

  // deleteHallOfFameImages("MJ4HYmL4WA7eMFWjMsai")
  
  async function submitImg() {
    console.log(srcImg);
    console.log(altImg);
    console.log(titleImg);
    console.log("submitted the images");
  }
</script>

<div class="flex">
  <aside class="sticky top-0 h-screen w-56 bg-gray-100 text-gray-800 p-4">
    <div class="flex items-center mb-4 space-x-1">
      <h1 class="text-lg font-medium">DASHBOARD</h1>
    </div>
    <nav class="space-y-2">
      <button
        class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg {currentTab ===
        'hall_of_fame_images'
          ? 'text-gray-800'
          : 'text-gray-500'}"
        on:click={() => changeTab("hall_of_fame_images")}
      >
        <span class="text-sm font-medium">Hall of Fame Images</span></button
      ><button
        class="w-full flex items-center space-x-2 bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg {currentTab ===
        'main event'
          ? 'text-gray-800'
          : 'text-gray-500'} "
        on:click={() => changeTab("main event")}
        ><span class="text-sm font-medium">Main Event</span></button
      ><button
        class="w-full flex items-center space-x-2 hover:bg-gray-200 active:bg-gray-300 py-2 px-2 rounded-lg{currentTab ===
        'notices'
          ? 'text-gray-800'
          : 'text-gray-500'}"
        on:click={() => changeTab("notices")}
      >
        <span class="text-sm font-medium">Notices</span></button
      >
    </nav>
  </aside>
  <div class="p-4">
    {#if currentTab === "hall_of_fame_images"}
      <form id="myForm" on:submit|preventDefault={deleteHallOfFameImages}>
        <label for="src">Source of the Image:</label>
        <input
          type="text"
          id="src"
          name="src"
          class=" border-2 rounded-md p-2"
          required
          bind:value={srcImg}
        />
        <br />
        <br />
        <label for="alt">Alternate Text:</label>
        <input
          type="text"
          id="alt"
          name="alt"
          class=" border-2 rounded-md p-2"
          required
          bind:value={altImg}
        />
        <br />
        <br />
        <label for="src">Title the Image:</label>
        <input
          type="text"
          id="src"
          name="src"
          class=" border-2 rounded-md p-2"
          required
          bind:value={titleImg}
        />
        <br />
        <br />
        <br /><br />
        <input
          type="submit"
          value="Submit"
          class=" cursor-pointer border p-2"
        />
      </form>
    {/if}
  </div>
</div>
