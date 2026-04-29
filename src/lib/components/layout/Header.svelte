<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	const navbarLinks = [
		{ href: '/#services', label: 'Services' },
		{ href: '/#reviews', label: 'Reviews' },
		// { href: '/projects', label: 'Projects' },
		{ href: '/#tech', label: 'Tech' },
		{ href: '/#pricing', label: 'Pricing' },
		{ href: '/#about', label: 'About' },
		{ href: '/#contact', label: 'Contact' }
	];

	let isMobileMenuOpen = $state(false);
	type Theme = 'light' | 'dark';
	let theme = $state<Theme>('light');

	const toggleMobileMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};

	function applyTheme(nextTheme: Theme): void {
		theme = nextTheme;
		document.documentElement.dataset.theme = nextTheme;
		document.documentElement.style.colorScheme = nextTheme;
		localStorage.setItem('theme', nextTheme);
	}

	function toggleTheme(): void {
		applyTheme(theme === 'dark' ? 'light' : 'dark');
	}

	onMount(() => {
		const currentTheme = document.documentElement.dataset.theme;
		if (currentTheme === 'light' || currentTheme === 'dark') {
			theme = currentTheme;
		}
	});
</script>

<header class="bg-bg-primary/70 border-border/70 sticky top-0 z-50 border-b backdrop-blur-xl">
	<div class="mx-auto w-full px-2.5 sm:px-4 lg:max-w-7xl lg:px-8">
		<div class="flex h-14 items-center justify-between sm:h-16">
			<a
				href="/"
				class="text-brand-primary flex items-center gap-1.5 text-2xl font-bold tracking-tight sm:gap-2"
			>
				<img
					class="h-6 sm:h-7"
					src={theme === 'dark' ? '/logos/SVG/dark-long.svg' : '/logos/SVG/light-long.svg'}
					alt="Qbin Studio"
				/>
			</a>
			<nav
				class="bg-bg-secondary/70 border-border/80 hidden items-center space-x-1 rounded-full border p-1 lg:flex"
			>
				{#each navbarLinks as link (link.href)}
					<a href={link.href} class="nav-link-desktop">{link.label}</a>
				{/each}
			</nav>
			<div class="flex items-center gap-1.5 sm:gap-2">
				<button
					onclick={toggleTheme}
					type="button"
					class="mode-toggle mode-toggle-soft mobile-only-inline"
					aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
					title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
				>
					{#if theme === 'dark'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.8"
							stroke="currentColor"
							class="h-4.5 w-4.5"
						>
							<circle cx="12" cy="12" r="3.2" />
							<path stroke-linecap="round" d="M12 3.8v1.6M12 18.6v1.6M20.2 12h-1.6M5.4 12H3.8" />
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.8"
							stroke="currentColor"
							class="h-4.5 w-4.5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M14.6 4.2a7.9 7.9 0 1 0 5.2 11.4A8.4 8.4 0 0 1 14.6 4.2Z"
							/>
						</svg>
					{/if}
				</button>
				<button
					onclick={toggleTheme}
					type="button"
					class="mode-toggle desktop-only-inline"
					aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
					title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
				>
					{#if theme === 'dark'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-5 w-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 3v1.5m0 15V21m8.25-9H21M3 12H4.5m12.364 6.364 1.06 1.06M6.075 6.075l1.06 1.06m9.729 0 1.06-1.06M6.075 17.925l1.06-1.06M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
							/>
						</svg>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="h-5 w-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M21.752 15.002A9.718 9.718 0 0 1 12.75 21a9.75 9.75 0 0 1-8.613-14.338 9.752 9.752 0 0 0 13.615 13.615 9.718 9.718 0 0 1 3.998-5.275Z"
							/>
						</svg>
					{/if}
				</button>
				<a href="#contact" class="btn-accent-gradient btn-size-header desktop-only-inline"
					>Get Started</a
				>
				<button
					onclick={toggleMobileMenu}
					type="button"
					id="mobile-menu-button"
					class="text-brand-secondary hover:text-brand-primary hover:bg-bg-secondary focus:ring-brand-accent-primary mobile-only-inline items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset"
				>
					{#if isMobileMenuOpen}
						<svg
							class="h-6 w-6"
							id="menu-icon-open"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
						</svg>
					{:else}
						<svg
							class="block h-6 w-6"
							id="menu-icon-closed"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
							/>
						</svg>
					{/if}
				</button>
			</div>
		</div>
	</div>
	{#if isMobileMenuOpen}
		<div transition:slide class="bg-bg-secondary/95 backdrop-blur-md lg:hidden" id="mobile-menu">
			<div class="border-border/60 space-y-1 border-t px-2 pt-2 pb-3 sm:px-3">
				<a href="#services" class="nav-link-mobile">Services</a>
				<a href="#process" class="nav-link-mobile">Process</a>
				<a href="#work" class="nav-link-mobile">Work</a>
				<a href="#tech" class="nav-link-mobile">Tech</a>
				<a href="#about" class="nav-link-mobile">About</a>
				<a href="#contact" class="nav-link-mobile">Contact</a>
			</div>
			<div class="border-border border-t px-5 pt-4 pb-5">
				<a href="#contact" class="btn-accent-gradient btn-size-mobile"> Get Started </a>
			</div>
		</div>
	{/if}
</header>
