<!-- SectionLayout.svelte -->
<script>
  import { CalendarRange } from "lucide-svelte";
  
  export let sectionTitle = "Section Title";
  // Example data structure for a card: { startDate, endDate, title }
  // const exampleCard = { startDate: "2023-11-01", endDate: "2023-11-05", title: "Card Title" };
  export let cards = [
    {
      startDate: "12/13/2023",
      endDate: "12/13/2023",
      title: "this is a title",
    },
    { startDate: "2023-11-01", endDate: "2023-11-05", title: "Card Title" },
    { startDate: "2023-11-01", endDate: "2023-11-05", title: "Card Title" },
    { startDate: "2023-11-01", endDate: "2023-11-05", title: "Card Title" },
    { startDate: "2023-11-01", endDate: "2023-11-05", title: "Card Title" },
    { startDate: "2023-11-01", endDate: "2023-11-05", title: "Card Title" },
  ];

</script>

<div class="h-[33%] w-[25%] border border-gray-300 rounded-lg shadow-lg">
  <!-- Title Bar -->
  <div class="bg-primary p-2 rounded-t-lg">
    <h2 class="text-lg font-semibold text-secondary flex justify-center">{sectionTitle}</h2>
  </div>

  <!-- Body (List of Cards) -->
  <div class="py-4 space-y-4 h-96 overflow-y-auto">
    {#each cards as card (card.title)}
      <div
        class="bg-white p-2 border mx-2 rounded-lg flex items-center"
      >
        <div>
          <div class="text-sm font-semibold">
            <!-- <span class="text-primary"> -->
            <CalendarRange class="inline text-primary" />
            <!-- </span> -->
            {card.startDate} - {card.endDate}
          </div>
          <p class="text-md">{card.title}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
