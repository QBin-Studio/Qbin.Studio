<script lang="ts">
	import { allProjects } from '$lib/config/projects';
	import WorkCard from '$ui/WorkCard.svelte';
</script>

<section id="work" class="py-24">
	<div class="section-divider"></div>
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<span class="text-brand-secondary text-sm font-semibold tracking-wider uppercase"
				>Case Studies</span
			>
			<h2 class="text-brand-primary mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
				Highlighted Projects
			</h2>
			<p class="text-brand-secondary mx-auto mt-4 max-w-2xl text-xl">
				Innovation delivered through code and pixels.
			</p>
		</div>
		<div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
			{#each allProjects.slice(0, 2) as project (project.id)}
				<WorkCard {project} />
			{/each}
		</div>
		<div class="mt-12 text-center">
			<a
				href="/projects"
				class="text-brand-accent-primary hover:text-brand-accent-hover group inline-flex items-center font-medium transition-colors duration-200"
			>
				See more projects
				<span class="ml-1 transition-transform duration-200 group-hover:translate-x-1">→</span>
			</a>
		</div>
	</div>
</section>
