<!-- Navbar.svelte -->
<script lang="ts">
	import Button from "$lib/components/ui/button/button.svelte";
  import { Search } from 'lucide-svelte';

  let className="";

  export {className as class}
</script>



<nav class="top-0 left-0 px-8 py-2 flex items-center justify-between">
  <img class="w-8 h-8 mr-4" src="favicon.png" alt="College Logo" />

  <ul class="flex items-center space-x-8">
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/academics">Academics</a></li>
    <li><a href="/admissions"> Admissions</a></li>
  </ul>

  <ul class="flex items-center space-x-6">
    <Search size="24" class="text-primary-background" />
    <Button variant="default"><a href="/contact-us">Contact Us</a></Button>
  </ul>
</nav>
