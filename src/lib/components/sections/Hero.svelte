<section class="relative isolate pt-24 pb-32 md:pt-32 md:pb-40">
	<div
		class="absolute inset-0 -z-10 opacity-30"
		style="
			background-image: radial-gradient(
					circle at 15% 25%,
					rgba(20, 184, 166, 0.04),
					transparent 45%
				),
				radial-gradient(
					circle at 85% 75%,
					rgba(6, 182, 212, 0.03),
					transparent 50%
				);
		"
	></div>
	<div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
			<div class="text-center md:text-left">
				<h1
					class="text-brand-primary mb-6 text-5xl font-extrabold tracking-tighter sm:text-6xl lg:text-7xl"
				>
					Innovative Digital Solutions, Expertly Crafted.
				</h1>
				<p class="text-brand-secondary mx-auto mb-10 max-w-xl text-lg md:mx-0 md:text-xl">
					Qbin Studio partners with visionary businesses to design and develop impactful,
					high-performance web and mobile experiences.
				</p>
				<div class="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
					<a href="#contact" class="btn-accent-gradient btn-size-hero"> Discuss Your Project </a>
					<a href="#services" class="btn-secondary btn-size-hero"> Explore Services </a>
				</div>
			</div>
			<div class="flex flex-col items-center">
				<div class="relative aspect-square w-full max-w-md p-4 pulse-slow">
					<svg
						width="100%"
						height="100%"
						viewBox="0 0 200 200"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<defs>
							<linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stop-color="var(--color-brand-accent-primary)" stop-opacity="0.7" />
								<stop offset="100%" stop-color="var(--color-brand-accent-secondary)" stop-opacity="0.7" />
							</linearGradient>
							<filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
								<feGaussianBlur stdDeviation="6" result="coloredBlur" />
								<feMerge>
									<feMergeNode in="coloredBlur" />
									<feMergeNode in="SourceGraphic" />
								</feMerge>
							</filter>
						</defs>
						<path
							d="M100 20 A 80 80 0 1 1 100 180 A 80 80 0 1 1 100 20 Z"
							stroke="var(--color-border)"
							stroke-width="1"
							opacity="0.5"
						/>
						<path
							d="M100 40 A 60 60 0 1 1 100 160 A 60 60 0 1 1 100 40 Z"
							stroke="var(--color-border-highlight)"
							stroke-width="0.5"
							stroke-dasharray="4 4"
							opacity="0.7"
						/>
						<g filter="url(#glow)" opacity="0.9">
							<path
								d="M135 100 A 35 35 0 1 1 100 65 A 35 35 0 0 1 135 100 Z"
								stroke="url(#heroGradient)"
								stroke-width="4"
								stroke-linecap="round"
							/>
							<path
								d="M115 115 L140 140"
								stroke="url(#heroGradient)"
								stroke-width="4"
								stroke-linecap="round"
							/>
						</g>
						<path
							d="M135 100 A 35 35 0 1 1 100 65 A 35 35 0 0 1 135 100 Z"
							stroke="var(--color-text-primary)"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
						<path
							d="M115 115 L140 140"
							stroke="var(--color-text-primary)"
							stroke-width="1.5"
							stroke-linecap="round"
						/>
						<line
							x1="100"
							y1="20"
							x2="100"
							y2="40"
							stroke="var(--color-border)"
							stroke-width="0.5"
						/>
						<line
							x1="100"
							y1="180"
							x2="100"
							y2="160"
							stroke="var(--color-border)"
							stroke-width="0.5"
						/>
						<line
							x1="20"
							y1="100"
							x2="40"
							y2="100"
							stroke="var(--color-border)"
							stroke-width="0.5"
						/>
						<line
							x1="180"
							y1="100"
							x2="160"
							y2="100"
							stroke="var(--color-border)"
							stroke-width="0.5"
						/>
					</svg>
				</div>
				<p class="text-brand-secondary mt-4 text-xl font-semibold tracking-widest">QBIN STUDIO</p>
			</div>
		</div>
	</div>
</section>
