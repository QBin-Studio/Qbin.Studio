<script lang="ts">
	import type { Project } from '$lib/types';

	type Props = {
		project: Project;
	};

	let { project }: Props = $props();
</script>

<a href="/projects/{project.slug}" class="work-card group block">
	<div
		class="work-card-image bg-bg-secondary border-border relative mb-5 aspect-video overflow-hidden rounded-lg border"
		class:flex={!project.imageUrl}
		class:items-center={!project.imageUrl}
		class:justify-center={!project.imageUrl}
	>
		<div
			class="from-brand-accent-primary/5 to-brand-accent-secondary/5 absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-300 group-hover:opacity-100"
		></div>

		{#if project.imageUrl}
			<img
				src={project.imageUrl}
				alt="Thumbnail for {project.title}"
				class="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
				loading="lazy"
				width="400"
				height="225"
			/>
		{:else}
			<!-- Placeholder SVG Icon -->
			<svg
				class="text-brand-secondary/30 z-10 h-16 w-16"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1"
					d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm16.5-1.875h.008v.008h-.008v-.008Z"
				/>
			</svg>
		{/if}
	</div>

	<div class="work-card-content">
		<p class="text-brand-accent-primary mb-1 text-sm font-medium">{project.category}</p>
		<h3 class="text-brand-primary mb-2 text-xl font-semibold">{project.title}</h3>
		<p class="text-brand-secondary text-base leading-relaxed">
			{project.shortDescription}
		</p>
		{#if project.tags && project.tags.length > 0}
			<div class="mt-4 flex flex-wrap gap-1.5">
				{#each project.tags.slice(0, 3) as tag}
					<span
						class="bg-bg-primary text-brand-secondary/80 inline-block rounded px-2 py-0.5 text-xs font-medium"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</a>
