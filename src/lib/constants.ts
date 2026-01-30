// Site Configuration
export const SITE_CONFIG = {
  name: 'Best Upholstery Orlando',
  title: 'Fabric-First Upholstery Authority | Orlando & Southeast US',
  description: 'Discover why choosing the perfect fabric first transforms your upholstery project. Expert guidance, premium fabric selection, and educational resources for Orlando and the Southeast US.',
  url: 'https://bestupholsteryorlando.com',
  domain: 'bestupholsteryorlando.com',
  author: 'Best Upholstery Orlando',
  logo: '/images/logo.png',
  ogImage: '/images/og-image.jpg',
  favicon: '/favicon.ico',
  email: 'hello@bestupholsteryorlando.com',
  phone: '(407) 123-4567',
  
  // Business Information
  business: {
    name: 'Best Upholstery Orlando',
    address: {
      street: '123 Fabric Lane',
      city: 'Orlando',
      state: 'Florida',
      zip: '32801',
      country: 'US'
    },
    coordinates: {
      lat: 28.5383355,
      lng: -81.3792365
    },
    hours: {
      monday: '9:00 AM - 6:00 PM',
      tuesday: '9:00 AM - 6:00 PM', 
      wednesday: '9:00 AM - 6:00 PM',
      thursday: '9:00 AM - 6:00 PM',
      friday: '9:00 AM - 6:00 PM',
      saturday: '10:00 AM - 4:00 PM',
      sunday: 'Closed'
    }
  },

  // Social Media
  social: {
    twitter: '@bestupholsteryorlando',
    facebook: 'bestupholsteryorlando',
    instagram: '@bestupholsteryorlando',
    pinterest: 'bestupholsteryorlando',
    youtube: 'bestupholsteryorlando'
  },

  // Connected Sites
  connectedSites: {
    fabricStore: 'https://bestupholsteryfabric.com',
    fabricByYard: 'https://upholsteryfabricbytheyard.com'
  },

  // SEO Settings
  seo: {
    keywords: [
      'upholstery Orlando',
      'fabric selection',
      'fabric-first upholstery',
      'upholstery fabric',
      'furniture restoration',
      'custom upholstery',
      'interior design Orlando',
      'fabric samples'
    ],
    defaultOgType: 'website',
    defaultTwitterCard: 'summary_large_image'
  }
} as const;

// Geographic Markets
export const GEOGRAPHIC_MARKETS = {
  tier1: [
    { city: 'Atlanta', state: 'GA', population: 498715 },
    { city: 'Miami', state: 'FL', population: 442241 },
    { city: 'Charlotte', state: 'NC', population: 874579 },
    { city: 'Nashville', state: 'TN', population: 689447 },
    { city: 'Jacksonville', state: 'FL', population: 949611 },
    { city: 'Tampa', state: 'FL', population: 384959 },
    { city: 'Raleigh', state: 'NC', population: 474069 },
    { city: 'Birmingham', state: 'AL', population: 200733 }
  ],
  tier2: [
    { city: 'Savannah', state: 'GA', population: 147780 },
    { city: 'Charleston', state: 'SC', population: 150227 },
    { city: 'New Orleans', state: 'LA', population: 383997 },
    { city: 'Mobile', state: 'AL', population: 187041 },
    { city: 'Tallahassee', state: 'FL', population: 194500 },
    { city: 'Gainesville', state: 'FL', population: 141085 }
  ]
};

// Fabric Categories for PSEO
export const FABRIC_CATEGORIES = [
  'velvet',
  'linen',
  'cotton',
  'leather',
  'silk',
  'wool',
  'outdoor',
  'performance',
  'chenille',
  'mohair',
  'microfiber',
  'canvas'
] as const;

// Furniture Types  
export const FURNITURE_TYPES = [
  'sofa',
  'chair', 
  'ottoman',
  'sectional',
  'loveseat',
  'recliner',
  'dining-chair',
  'accent-chair',
  'bench',
  'headboard'
] as const;

// Use Cases
export const USE_CASES = [
  'living-room',
  'dining-room',
  'bedroom',
  'office',
  'commercial',
  'outdoor',
  'marine',
  'automotive',
  'hospitality'
] as const;

// PSEO URL Patterns
export const PSEO_PATTERNS = {
  templates: '/templates',
  best: '/best',
  compare: '/compare',
  examples: '/examples',
  convert: '/convert',
  glossary: '/glossary',
  locations: '/locations',
  personas: '/for',
  integrations: '/integrations'
} as const;