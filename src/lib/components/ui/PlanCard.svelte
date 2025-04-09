<script lang="ts">
	import type { PricingPlan } from '$lib/types';

	type Props = {
		plan: PricingPlan;
	};

	let { plan }: Props = $props();

	function formatCurrency(amount: number): string {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(amount);
	}
</script>

<div
	class={`card-base bg-bg-secondary flex h-full flex-col rounded-lg p-8 transition-shadow duration-300 ${plan.isHighlighted ? 'ring-brand-accent-primary/30' : ''}`}
	class:border={!plan.isHighlighted}
	class:border-border={!plan.isHighlighted}
	class:shadow-md={!plan.isHighlighted}
	class:hover:shadow-xl={!plan.isHighlighted}
	class:relative={plan.isHighlighted}
	class:border-2={plan.isHighlighted}
	class:border-brand-accent-primary={plan.isHighlighted}
	class:shadow-xl={plan.isHighlighted}
	class:ring-1={plan.isHighlighted}
	class:ring-inset={plan.isHighlighted}
	class:hover:shadow-2xl={plan.isHighlighted}
>
	<!-- Conditional "Most Popular" Badge -->
	{#if plan.isHighlighted && plan.highlightBadgeText}
		<div
			class="from-brand-accent-primary to-brand-accent-secondary absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-r px-4 py-1.5 text-xs font-semibold tracking-wide text-white shadow-md"
		>
			{plan.highlightBadgeText}
		</div>
	{/if}

	<!-- Tier Header -->
	<div class="mb-6" class:pt-4={plan.isHighlighted && plan.highlightBadgeText}>
		<h3 class="text-brand-primary text-xl font-semibold">{plan.name}</h3>
		<p class="text-brand-secondary mt-2 text-sm">{plan.description}</p>

		<!-- Price Display -->
		{#if plan.price === 'Custom'}
			<p class="text-brand-primary mt-4 text-4xl font-bold tracking-tight">
				{plan.price}
			</p>
			<!-- Invisible placeholder for height consistency -->
			<p class="text-brand-secondary invisible mt-1 text-xs" aria-hidden="true">Placeholder</p>
		{:else}
			<p class="text-brand-primary mt-4 text-4xl font-bold tracking-tight">
				{formatCurrency(plan.price)}
				<!-- Use formatter -->
				{#if plan.priceSuffix}
					<span class="text-brand-secondary text-base font-medium">{plan.priceSuffix}</span>
				{/if}
			</p>
			{#if plan.priceNote}
				<p class="text-brand-secondary mt-1 text-xs">{plan.priceNote}</p>
			{:else}
				<!-- Invisible placeholder if no note but not custom -->
				<p class="text-brand-secondary invisible mt-1 text-xs" aria-hidden="true">Placeholder</p>
			{/if}
		{/if}
	</div>

	<!-- Features List -->
	<ul role="list" class="text-brand-secondary space-y-4 text-sm leading-6">
		{#each plan.features as feature}
			<li class="flex items-center gap-3">
				<!-- Checkmark Icon -->
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="text-brand-accent-primary h-5 w-5 flex-shrink-0"
				>
					<path
						fill-rule="evenodd"
						d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
						clip-rule="evenodd"
					/>
				</svg>
				{feature}
			</li>
		{/each}
	</ul>

	<!-- CTA Button -->
	<div class="mt-auto pt-8">
		<a
			href={plan.ctaLink}
			class="btn-size-hero w-full text-center"
			class:btn-secondary={!plan.isHighlighted}
			class:btn-accent-gradient={plan.isHighlighted}
		>
			{plan.ctaText}
		</a>
	</div>
</div>
