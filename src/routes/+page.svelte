<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import Services from '$lib/components/sections/Services.svelte';
	import Process from '$lib/components/sections/Process.svelte';
	import Philosophy from '$lib/components/sections/Philosophy.svelte';
	import Technologies from '$lib/components/sections/Technologies.svelte';
	import OurApproach from '$lib/components/sections/OurApproach.svelte';
	import Work from '$lib/components/sections/Work.svelte';
	import About from '$lib/components/sections/About.svelte';
	import CTA from '$lib/components/sections/CTA.svelte';
	import Review from '$lib/components/sections/Review.svelte';
	import Pricing from '$lib/components/sections/Pricing.svelte';
	import Team from '$lib/components/sections/Team.svelte';
</script>

<svelte:head>
	<title>Qbin Studio - Bespoke Digital Experiences</title>
	<meta
		name="description"
		content="Qbin Studio crafts premium, high-performance digital solutions through expert design, development, and strategy."
	/>
	<link
		rel="icon"
		href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>Q</text></svg>"
	/>
	<link
		href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Hero />
<Services />
<Process />
<Philosophy />
<Technologies />
<OurApproach />
<Work />
<Review />
<Pricing />
<Team />
<About />
<CTA />
