<script lang="ts">
	import type { PricingPlan } from '$lib/types';
	import PlanCard from '$ui/PlanCard.svelte';

	const pricingPlans: PricingPlan[] = [
		{
			id: 'foundation',
			name: 'Foundation',
			description: 'Ideal for startups or specific project needs.',
			price: 499,
			priceSuffix: '/project',
			priceNote: 'Starting price',
			features: [
				'Core Feature Set Included',
				'Standard Project Timeline',
				'Basic Support Package',
				'Up to 5 Pages/Screens'
			],
			ctaText: 'Get Started',
			ctaLink: '#contact',
			isHighlighted: false
		},
		{
			id: 'growth',
			name: 'Growth',
			description: 'For businesses scaling their digital presence.',
			price: 1999,
			priceSuffix: '/project',
			priceNote: 'Starting price',
			features: [
				'Extended Feature Set',
				'Priority Development Cycle',
				'Enhanced Support & Maintenance',
				'CMS Integration',
				'Basic SEO Setup'
			],
			ctaText: 'Choose Growth Plan',
			ctaLink: '#contact',
			isHighlighted: true,
			highlightBadgeText: 'Most Popular'
		},
		{
			id: 'enterprise',
			name: 'Enterprise',
			description: 'Bespoke solutions for complex requirements.',
			price: 'Custom',
			// priceSuffix: '', // Optional, can omit if price is Custom
			// priceNote: '', // Optional
			features: [
				'Fully Customized Scope & Features',
				'Dedicated Development Team Option',
				'Scalable Cloud Architecture',
				'Premium SLA & Ongoing Partnership',
				'Advanced Analytics & Reporting',
				'API Integrations'
			],
			ctaText: 'Request a Quote',
			ctaLink: '#contact',
			isHighlighted: false
		}
	];
</script>

<section id="pricing" class="bg-bg-primary py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<span class="text-brand-secondary text-sm font-semibold tracking-wider uppercase"
				>Transparent Pricing</span
			>
			<h2 class="text-brand-primary mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
				Plans Tailored for Growth
			</h2>
			<p class="text-brand-secondary mx-auto mt-4 max-w-2xl text-xl">
				Choose the right level of engagement to meet your project goals and budget.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
			{#each pricingPlans as plan (plan.id)}
				<PlanCard {plan} />
			{/each}
		</div>

		<div class="mt-16 text-center">
			<p class="text-brand-secondary">
				Need something different? <a
					href="#contact"
					class="text-brand-accent-primary hover:text-brand-accent-hover font-medium transition-colors"
					>Contact us</a
				> for a custom solution tailored to your exact needs.
			</p>
		</div>
	</div>
</section>
