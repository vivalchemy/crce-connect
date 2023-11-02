<!-- FlexibleSection.svelte -->
<script>
  import Button from "../ui/button/button.svelte";

  let className = "";

  export let reverse = false;
  export let src = "";
  export let alt = "";
  export let heading = "Your Heading";
  export let subheading = "Your Subheading";
  export { className as class };
  export let buttonText = "";
</script>

<div
  class="flex flex-wrap {reverse
    ? 'flex-row-reverse'
    : 'flex-row'} h-70vh {className} justify-center items-center"
>
  <div class="flex-1 flex justify-center items-center">
    <img
      class=" rounded-3xl min-w-[240px] max-w-full h-auto shadow-2xl mr-16"
      {src}
      {alt}
    />
  </div>
  <div class="flex-1 flex flex-col justify-center p-8">
    <div>
      <h2 class="text-3xl font-bold">{heading}</h2>
      <p class="text-md">{subheading}</p>
    </div>
    {#if buttonText !== ""}
      <Button class="text-lg w-100px">{buttonText}</Button>
    {/if}
  </div>
</div>
