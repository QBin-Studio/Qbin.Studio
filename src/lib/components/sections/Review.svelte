<script lang="ts">
	import type { Review } from '$lib/types';
	import ReviewCard from '$ui/ReviewCard.svelte';

	const reviews: Review[] = [
		{
			id: 1,
			quote:
				'Working with Qbin Studio was transformative. Their technical expertise combined with a keen eye for design resulted in a product that exceeded our expectations and delighted our users.',
			author: 'Alex Johnson',
			title: 'CEO, TechForward Inc.'
		},
		{
			id: 2,
			quote:
				"The team's collaborative approach and commitment to deadlines were outstanding. They didn't just build an app; they became a true strategic partner, offering valuable insights throughout the process.",
			author: 'Samantha Lee',
			title: 'Product Manager, Creative Solutions'
		},
		{
			id: 3,
			quote:
				'From complex backend architecture to polished UI/UX, Qbin Studio delivered flawlessly. Their technical depth and problem-solving skills are truly impressive. Highly recommended.',
			author: 'David Chen',
			title: 'CTO, HealthTech Innovations'
		}
	];
</script>

<section id="reviews" class="bg-bg-secondary py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<span class="text-brand-secondary text-sm font-semibold tracking-wider uppercase"
				>What Clients Say</span
			>
			<h2 class="text-brand-primary mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
				Trusted by Innovators
			</h2>
			<p class="text-brand-secondary mx-auto mt-4 max-w-2xl text-xl">
				Hear directly from partners we've helped succeed.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each reviews as review (review.id)}
				<ReviewCard {review} />
			{/each}
		</div>
	</div>
</section>
