<!-- Navbar.svelte -->
<script lang="ts">
  import HeroSection from "$lib/components/block/HeroSection.svelte";
  import Navbar from "$lib/components/block/Navbar.svelte";
  import Testimonial from "$lib/components/block/Testimonial.svelte";
  import CardList from "$lib/components/block/CardList.svelte";
</script>

<div>
  <!-- Header Image -->
  <div
    class="bg-cover bg-center h-[calc(100vh-64px)] bg-[url('/2-page-1-crce-building.webp')]"
  >
    <div
      class="absolute inset-0 flex flex-col justify-center items-center text-white"
    >
      <!-- Heading -->
      <h1 class=" mx-56 text-6xl text-background font-bold text-center">
        Fr. Conceicao Rodrigues College of Engineering
      </h1>

      <!-- Subheading -->
      <p class="pt-4 text-2xl text-background text-left">
        Moulding Engineers Who Can Build Nation
      </p>
    </div>
  </div>
</div>

<HeroSection
  src="https://fragnel.edu.in/images/2021/10/2-page-1-crce-building.png"
  class="mx-16 my-32"
  heading="About FrCRCE"
  buttonText="Read more"
  subheading="The Institute started with only one programme in Production Engineering in 1984 with an intake capacity of 60 students. In 1987, the programme in Electronics Engineering was started with an intake capacity of 60 students followed by Computer Engineering in 1991 with an intake capacity of 60 students. In 2001, the programme in Information Technology was started with an intake capacity of 30 students which was later increased to 60 in 2010. The College started offering Master’s ... "
/>
<div class="mb-20 px-16 flex justify-end">
  <CardList sectionTitle="Notice Board" />
</div>
<div class="flex justify-center">
  <hr class="w-3/4 border-2" />
</div>
<!-- <div class="mb-16">hi</div> -->
<div class="flex font-bold justify-center text-4xl pt-12 pb-16">
  Testimonial
</div>

<div class="sm:overflow-auto flex gap-4 justify-center">
  <!-- Horizontal Scrollable List -->
  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
    <Testimonial />
  </div>
  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
    <Testimonial />
  </div>
  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
    <Testimonial />
  </div>
  <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
    <Testimonial />
  </div>
</div>

<!-- 
Horizontal Scrollable List on Mobile Screens
<div class="md:hidden overflow-x-auto flex flex-row">
  <div class="flex-shrink-0 w-60">
    <Testimonial />
  </div>
  <div class="flex-shrink-0 w-60">
    <Testimonial />
  </div>
  <div class="flex-shrink-0 w-60">
    <Testimonial />
  </div>
  <div class="flex-shrink-0 w-60">
    <Testimonial />
  </div>
</div> 
-->

<!-- <Test/> -->
