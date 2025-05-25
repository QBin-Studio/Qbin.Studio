<script lang="ts">
	import Footer from '$lib/components/layout/Footer.svelte';
	import Header from '$lib/components/layout/Header.svelte';
	import '../tailwind.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/logos/SVG/dark-square.svg" />
</svelte:head>
<div class="flex min-h-screen flex-col">
	<Header />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>
