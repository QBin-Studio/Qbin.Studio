<script lang="ts">
	import { allProjects } from '$lib/config/projects';
	import WorkCard from '$ui/WorkCard.svelte';

	let categories = ['All', ...new Set(allProjects.map((p) => p.category))]; // Get unique categories + 'All'
	let selectedCategory = 'All'; // Default filter

	$: filteredProjects =
		selectedCategory === 'All'
			? allProjects
			: allProjects.filter((p) => p.category === selectedCategory);
</script>

<main class="flex-grow">
	<section class="relative isolate overflow-hidden bg-transparent pt-24 pb-16 sm:pt-32 sm:pb-24">
		<div class="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
			<h1 class="text-brand-primary text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
				Our Work
			</h1>
			<p class="text-brand-secondary mx-auto mt-6 max-w-2xl text-lg leading-8 md:text-xl">
				Explore a selection of projects showcasing our expertise in design, development, and
				strategic thinking across various industries.
			</p>
		</div>
	</section>

	<section class="bg-transparent py-16 sm:py-24">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<!-- Filter Controls -->
			<div class="mb-12 flex flex-wrap justify-center gap-x-4 gap-y-3">
				{#each categories as category}
					<button
						type="button"
						on:click={() => (selectedCategory = category)}
						class={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ease-out ${selectedCategory === category ? 'hover:bg-brand-accent-primary/80' : 'hover:bg-bg-secondary/70'}`}
						class:bg-brand-accent-primary={selectedCategory === category}
						class:text-white={selectedCategory === category}
						class:bg-bg-secondary={selectedCategory !== category}
						class:text-brand-secondary={selectedCategory !== category}
						class:hover:text-white={selectedCategory === category}
						class:hover:text-brand-primary={selectedCategory !== category}
					>
						{category}
					</button>
				{/each}
			</div>

			{#if filteredProjects.length > 0}
				<div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
					{#each filteredProjects as project (project.id)}
						<WorkCard {project} />
					{/each}
				</div>
			{:else}
				<p class="text-brand-secondary py-12 text-center text-lg">
					No projects found for the selected category.
				</p>
			{/if}
		</div>
	</section>

	<section class="bg-bg-secondary py-16">
		<div class="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
			<h2 class="text-brand-primary text-2xl font-bold tracking-tight sm:text-3xl">
				Have a project in mind?
			</h2>
			<p class="text-brand-secondary mt-4 text-base leading-7">
				Let's discuss how Qbin Studio can help bring your ideas to life.
			</p>
			<div class="mt-8">
				<a href="/#contact" class="btn-accent-gradient btn-size-cta">Get In Touch</a>
			</div>
		</div>
	</section>
</main>
