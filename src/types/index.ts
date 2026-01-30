// Basic types for the application
export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

export interface GeographicLocation {
  city: string;
  state: string;
  population?: number;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface FabricType {
  id: string;
  name: string;
  description: string;
  characteristics: string[];
  bestFor: string[];
  priceRange: 'budget' | 'mid' | 'premium' | 'luxury';
  durability: 1 | 2 | 3 | 4 | 5;
  maintenance: 'low' | 'medium' | 'high';
  images?: string[];
}

export interface FurnitureType {
  id: string;
  name: string;
  description: string;
  typicalYardage: {
    min: number;
    max: number;
  };
  considerations: string[];
}

export interface PSEOPage {
  slug: string;
  title: string;
  description: string;
  content: string;
  category: 'template' | 'comparison' | 'example' | 'curation' | 'conversion' | 'location' | 'persona' | 'glossary';
  keywords: string[];
  relatedPages: string[];
  lastUpdated: string;
  featured?: boolean;
}

export interface TemplateData {
  id: string;
  name: string;
  description: string;
  category: string;
  downloadUrl?: string;
  previewImage?: string;
  features: string[];
  usageInstructions: string;
}

export interface ComparisonData {
  id: string;
  itemA: {
    name: string;
    pros: string[];
    cons: string[];
    bestFor: string[];
    image?: string;
  };
  itemB: {
    name: string;
    pros: string[];
    cons: string[];
    bestFor: string[];
    image?: string;
  };
  winner?: 'A' | 'B' | 'tie';
  summary: string;
}

export interface ExampleData {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  featured?: boolean;
  details?: {
    fabric: string;
    furniture: string;
    style: string;
    cost?: string;
  };
}

export interface CurationData {
  id: string;
  title: string;
  description: string;
  items: {
    rank: number;
    name: string;
    description: string;
    pros: string[];
    cons: string[];
    rating: number;
    priceRange: string;
    image?: string;
    buyLink?: string;
  }[];
  criteria: string[];
  lastUpdated: string;
}

export interface LocalBusinessData {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  website: string;
  hours: Record<string, string>;
  services: string[];
  rating?: number;
  reviews?: number;
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
  featured?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

// Analytics and tracking types
export interface AnalyticsEvent {
  event: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  source?: string;
}

export interface SampleRequestData {
  name: string;
  email: string;
  phone?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  projectType: string;
  fabricInterests: string[];
  notes?: string;
}

// City-specific data for location pages
export interface CityData {
  city: string;
  state: string;
  climate: {
    challenge: string;
    impact: string;
    solutions: string[];
    specialFocus?: string;
  };
  architecture: {
    styles: string[];
    considerations: string;
    trends: string;
  };
  lifestyle: {
    pace: string;
    priorities: string[];
    preferences: string;
  };
  seasonalConsiderations?: Array<{
    season: string;
    temp: string;
    recommendations: string[];
    colors: string[];
  }>;
  neighborhoods?: Array<{
    area: string;
    style: string;
    description: string;
    fabricChoices: string[];
    approach: string;
  }>;
  localResources?: Array<{
    category: string;
    locations: string[];
    benefit: string;
  }>;
  successStories?: Array<{
    name: string;
    location: string;
    project: string;
    result: string;
  }>;
}