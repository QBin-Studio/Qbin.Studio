<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Qbin Studio - Bespoke Digital Experiences</title>
	<meta
		name="description"
		content="Qbin Studio crafts premium, high-performance digital solutions through expert design, development, and strategy."
	/>
	<link
		rel="icon"
		href="/logos/SVG/dark-square.svg"
	/>
</svelte:head>
<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
