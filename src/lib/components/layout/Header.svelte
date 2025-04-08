<script lang="ts">
	import { slide } from 'svelte/transition';

	let isMobileMenuOpen = $state(false);
	const toggleMobileMenu = () => {
		isMobileMenuOpen = !isMobileMenuOpen;
	};
</script>

<header class="bg-bg-primary/80 border-border/70 sticky top-0 z-50 border-b backdrop-blur-xl">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a
				href="/"
				class="text-brand-primary flex items-center gap-2 text-2xl font-bold tracking-tight"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="text-brand-accent-primary"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
						fill="currentColor"
						fill-opacity="0.3"
					/>
					<path
						d="M12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 9.5 16.5 7.4 14.5 6.5"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
					<path d="M15 15L17 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
				</svg>
				Qbin Studio
			</a>
			<nav class="hidden space-x-1 md:flex">
				<a
					href="#services"
					class="text-brand-secondary hover:text-brand-primary rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150"
					>Services</a
				>
				<a
					href="#process"
					class="text-brand-secondary hover:text-brand-primary rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150"
					>Process</a
				>
				<a
					href="#work"
					class="text-brand-secondary hover:text-brand-primary rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150"
					>Work</a
				>
				<a
					href="#tech"
					class="text-brand-secondary hover:text-brand-primary rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150"
					>Tech</a
				>
				<a
					href="#about"
					class="text-brand-secondary hover:text-brand-primary rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150"
					>About</a
				>
				<a
					href="#contact"
					class="text-brand-secondary hover:text-brand-primary rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150"
					>Contact</a
				>
			</nav>
			<div class="flex items-center gap-4">
				<a href="#contact" class="btn-accent-gradient btn-size-header hidden md:inline-flex"
					>Get Started</a
				>
				<button
					onclick={toggleMobileMenu}
					type="button"
					id="mobile-menu-button"
					class="text-brand-secondary hover:text-brand-primary hover:bg-bg-secondary focus:ring-brand-accent-primary inline-flex items-center justify-center rounded-md p-2 focus:ring-2 focus:outline-none focus:ring-inset md:hidden"
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
		<div transition:slide class="bg-bg-secondary/95 backdrop-blur-md md:hidden" id="mobile-menu">
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
