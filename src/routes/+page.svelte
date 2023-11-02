<!-- Navbar.svelte -->
<script lang="ts">
  import HeroSection from "$lib/components/block/HeroSection.svelte";
    import Navbar from "$lib/components/block/Navbar.svelte";
    import Test from "$lib/components/block/Test.svelte";
    import CardList from "$lib/components/block/CardList.svelte";
</script>


<div>
  <!-- Header Image -->
  <div
    class="bg-cover bg-center h-[calc(100vh-64px)] bg-[url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
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

<CardList sectionTitle="Notice Board"/>

<!-- <div class="mb-16">hi</div> -->


<Test/>