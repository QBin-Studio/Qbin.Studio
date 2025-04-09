export interface PricingPlan {
	id: string;
	name: string;
	description: string;
	price: number | 'Custom'; // number for fixed price, 'Custom' for the last tier
	priceSuffix?: string; // e.g., '/project', '/month'
	priceNote?: string; // e.g., 'Starting price'
	features: string[];
	ctaText: string;
	ctaLink: string; // '#contact'
	isHighlighted?: boolean; // Flag for the visually distinct plan
	highlightBadgeText?: string; // Text for the badge if highlighted
}

export interface TeamMember {
	id: number;
	name: string;
	title: string;
	imageUrl?: string | null;
	initials: string;
	socials?: {
		linkedIn?: string;
		twitter?: string;
		github?: string;
	};
}

export interface Review {
	id: number | string;
	quote: string;
	author: string;
	title: string; // e.g., "CEO, Company Name"
}

export interface Project {
	id: number | string;
	slug: string;
	title: string;
	category: string;
	imageUrl: string | null;
	shortDescription: string;
	tags?: string[];
}
