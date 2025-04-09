<script lang="ts">
	import type { Review } from '$lib/types';

	type Props = {
		review: Review;
	};

	let { review }: Props = $props();
</script>

<div class="card-base review-card relative flex h-full flex-col p-8">
	<svg
		class="text-brand-accent-primary absolute top-8 left-8 h-12 w-12 opacity-15"
		fill="currentColor"
		viewBox="0 0 32 32"
		aria-hidden="true"
	>
		<path
			d="M9.333 8A5.333 5.333 0 004 13.333v8.081a1.281 1.281 0 001.28 1.281h5.408a1.281 1.281 0 001.28-1.28V13.33a5.333 5.333 0 00-5.302-5.334zm13.334 0A5.333 5.333 0 0017.333 13.333v8.081a1.281 1.281 0 001.28 1.281h5.408a1.281 1.281 0 001.28-1.28V13.33a5.333 5.333 0 00-5.302-5.334z"
		/>
	</svg>
	<blockquote class="text-brand-secondary mt-16 flex-grow text-lg leading-relaxed">
		"{review.quote}"
	</blockquote>
	<footer class="border-border/50 mt-6 border-t pt-6">
		<p class="text-brand-primary text-base font-semibold">{review.author}</p>
		<p class="text-brand-secondary text-sm">{review.title}</p>
	</footer>
</div>
