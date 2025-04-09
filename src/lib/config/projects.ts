import type { Project } from '$lib/types';

export const allProjects: Project[] = [
	{
		id: 1,
		slug: 'fintech-data-aggregator',
		title: 'FinTech Data Aggregator',
		category: 'Web Platform',
		imageUrl: null,
		shortDescription: 'Secure platform processing millions of data points daily.',
		tags: ['Next.js', 'TypeScript', 'API', 'Cloud']
	},
	{
		id: 2,
		slug: 'ecommerce-mobile-experience',
		title: 'E-Commerce Mobile Experience',
		category: 'Mobile App',
		imageUrl: null,
		shortDescription: 'Native app redesign boosting conversion and engagement.',
		tags: ['React Native', 'iOS', 'Android', 'UX/UI']
	},
	{
		id: 3,
		slug: 'saas-branding-identity',
		title: 'SaaS Startup Branding',
		category: 'Branding',
		imageUrl: null,
		shortDescription: 'Crafting a compelling visual identity for market launch.',
		tags: ['Brand Strategy', 'Logo Design', 'UI Kit']
	},
	{
		id: 4,
		slug: 'healthtech-portal',
		title: 'HealthTech Patient Portal',
		category: 'Web Platform',
		imageUrl: null,
		shortDescription: 'HIPAA-compliant portal for secure patient communication.',
		tags: ['React', 'Node.js', 'Security', 'Healthcare']
	},
	{
		id: 5,
		slug: 'travel-booking-app',
		title: 'Travel Booking Application',
		category: 'Mobile App',
		imageUrl: null,
		shortDescription: 'Intuitive interface for seamless travel planning.',
		tags: ['Flutter', 'API Integration', 'UX/UI']
	},
	{
		id: 6,
		slug: 'analytics-dashboard-design',
		title: 'Analytics Dashboard UI',
		category: 'UI/UX Design',
		imageUrl: null,
		shortDescription: 'Data visualization and interface design for complex analytics.',
		tags: ['Figma', 'Data Viz', 'Design System']
	}
];
