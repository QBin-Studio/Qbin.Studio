<script lang="ts">
	import type { TeamMember } from '$lib/types';
	import TeamCard from '$ui/TeamCard.svelte';

	const team: TeamMember[] = [
		{
			id: 1,
			name: 'John Doe',
			title: 'Lead UX Architect',
			imageUrl: null,
			initials: 'JD',
			socials: { linkedIn: '#', twitter: '#' }
		},
		{
			id: 2,
			name: 'M. Akmal',
			title: 'Softaware Engineer',
			imageUrl: null,
			initials: 'MA',
			socials: { linkedIn: '#', github: '#' }
		},
		{
			id: 3,
			name: 'H. Naz',
			title: 'Softaware Engineer',
			imageUrl: null,
			initials: 'HN',
			socials: { linkedIn: '#', twitter: '#' }
		}
	];

	function ensureInitials(members: TeamMember[]): TeamMember[] {
		return members.map((member) => {
			if (!member.initials && member.name) {
				member.initials = member.name
					.split(' ')
					.map((n) => n[0])
					.slice(0, 2)
					.join('')
					.toUpperCase();
			} else if (!member.initials) {
				member.initials = '??'; // Fallback if name is also missing
			}
			return member;
		});
	}

	const teamWithInitials = ensureInitials(team);
</script>

<section id="team-modern" class="bg-bg-primary py-24">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<!-- Section Header -->
		<div class="mb-16 text-center">
			<span class="text-brand-secondary text-sm font-semibold tracking-wider uppercase"
				>Our Collective</span
			>
			<h2 class="text-brand-primary mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
				The Architects of Your Success
			</h2>
			<p class="text-brand-secondary mx-auto mt-4 max-w-2xl text-xl">
				Meet the core team dedicated to bringing your vision to life.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each teamWithInitials as member (member.id)}
				<TeamCard {member} />
			{/each}
		</div>
	</div>
</section>
