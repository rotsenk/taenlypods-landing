export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export interface Feature {
  title: string;
  description: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ComparisonRow {
  feature: string;
  nebula: string | boolean;
  competitors: string | boolean;
}

export type PageType = 'home' | 'features' | 'pricing';
