<script lang="ts">
	import type { TeamMember } from '$lib/types';

	type Props = {
		member: TeamMember;
	};

	let { member }: Props = $props();
</script>

<div
	class="card-base group border-border bg-bg-secondary hover:border-brand-accent-primary/30 flex transform flex-col items-center rounded-xl border p-8 pt-10 text-center shadow-md transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
>
	<div class="relative mb-6 h-28 w-28 flex-shrink-0">
		<div
			class="border-border/10 from-bg-primary to-bg-secondary relative flex h-full w-full items-center justify-center overflow-hidden rounded-full border-2 bg-gradient-to-br shadow-inner"
		>
			{#if member.imageUrl}
				<img
					src={member.imageUrl}
					alt="Photo of {member.name}"
					class="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
					loading="lazy"
				/>
			{:else}
				<span
					class="text-brand-accent-primary/70 group-hover:text-brand-accent-primary text-3xl font-medium transition-colors duration-300 select-none"
				>
					{member.initials}
				</span>
			{/if}
		</div>
		<div
			aria-hidden="true"
			class="group-hover:border-brand-accent-primary/50 pointer-events-none absolute inset-[-3px] rounded-full border-2 border-transparent transition-colors duration-300"
		></div>
	</div>

	<div class="flex-grow">
		<h3 class="text-brand-primary text-xl font-semibold tracking-tight">{member.name}</h3>
		<p class="text-brand-accent-primary mt-1 text-base font-medium">{member.title}</p>
	</div>

	<!-- Social Links -->
	{#if member.socials && Object.keys(member.socials).length > 0}
		<div
			class="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-3 opacity-60 transition-opacity duration-300 group-hover:opacity-100"
		>
			{#if member.socials.linkedIn}
				<a
					href={member.socials.linkedIn}
					target="_blank"
					rel="noopener noreferrer"
					title="{member.name} on LinkedIn"
					class="text-brand-secondary hover:text-brand-accent-primary transition-colors"
				>
					<span class="sr-only">LinkedIn</span>
					<svg class="h-5 w-5" fill="currentColor" viewBox="-5.5 0 32 32"
						><path
							d="M0 8.219v15.563c0 1.469 1.156 2.625 2.625 2.625h15.563c0.719 0 1.406-0.344 1.844-0.781 0.469-0.469 0.781-1.063 0.781-1.844v-15.563c0-1.469-1.156-2.625-2.625-2.625h-15.563c-0.781 0-1.375 0.313-1.844 0.781-0.438 0.438-0.781 1.125-0.781 1.844zM2.813 10.281c0-1 0.813-1.875 1.813-1.875 1.031 0 1.875 0.875 1.875 1.875 0 1.031-0.844 1.844-1.875 1.844-1 0-1.813-0.813-1.813-1.844zM7.844 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.656c0.375 0 0.375 0.438 0.375 0.719 0.75-0.75 1.719-0.938 2.719-0.938 2.438 0 4 1.156 4 3.719v6.438c0 0.219-0.188 0.406-0.375 0.406h-2.75c-0.219 0-0.375-0.219-0.375-0.406v-5.813c0-0.969-0.281-1.5-1.375-1.5-1.375 0-1.719 0.906-1.719 2.125v5.188c0 0.219-0.219 0.406-0.438 0.406h-2.719c-0.156 0-0.375-0.219-0.375-0.406zM2.875 23.125v-9.531c0-0.219 0.219-0.406 0.375-0.406h2.719c0.25 0 0.406 0.156 0.406 0.406v9.531c0 0.219-0.188 0.406-0.406 0.406h-2.719c-0.188 0-0.375-0.219-0.375-0.406z"
						></path></svg
					>
				</a>
			{/if}
			{#if member.socials.twitter}
				<a
					href={member.socials.twitter}
					target="_blank"
					rel="noopener noreferrer"
					title="{member.name} on Twitter"
					class="text-brand-secondary hover:text-brand-accent-primary transition-colors"
				>
					<span class="sr-only">Twitter</span>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"
						><path
							d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
						></path></svg
					>
				</a>
			{/if}
			{#if member.socials.portfolio}
				<a
					href={member.socials.portfolio}
					target="_blank"
					rel="noopener noreferrer"
					title="{member.name} Portfolio"
					class="text-brand-secondary hover:text-brand-accent-primary transition-colors"
				>
					<span class="sr-only">Portfolio</span>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
						<path stroke-linecap="round" stroke-linejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
					</svg>					
				</a>
			{/if}
			{#if member.socials.github}
				<a
					href={member.socials.github}
					target="_blank"
					rel="noopener noreferrer"
					title="{member.name} on GitHub"
					class="text-brand-secondary hover:text-brand-accent-primary transition-colors"
				>
					<span class="sr-only">GitHub</span>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 16 16"
						><path
							d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
						/></svg
					>
				</a>
			{/if}
		</div>
	{/if}
</div>
