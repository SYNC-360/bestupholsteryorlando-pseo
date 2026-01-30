import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Slug generation for URLs
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Title case conversion
export function toTitleCase(str: string): string {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

// Format phone numbers
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

// Generate PSEO URLs
export function generatePSEOUrl(pattern: string, ...params: string[]): string {
  let url = pattern;
  params.forEach((param, index) => {
    url = url.replace(`{${index}}`, createSlug(param));
  });
  return url;
}

// Location URL generators
export function generateLocationUrl(city: string, state: string, service?: string): string {
  const citySlug = createSlug(city);
  const stateSlug = createSlug(state);
  const serviceSlug = service ? createSlug(service) : 'upholstery';
  return `/locations/${citySlug}-${stateSlug}/${serviceSlug}`;
}

// Comparison URL generators  
export function generateComparisonUrl(itemA: string, itemB: string): string {
  const slugA = createSlug(itemA);
  const slugB = createSlug(itemB);
  return `/compare/${slugA}-vs-${slugB}`;
}

// Template URL generators
export function generateTemplateUrl(category: string, type: string): string {
  const categorySlug = createSlug(category);
  const typeSlug = createSlug(type);
  return `/templates/${categorySlug}/${typeSlug}`;
}

// Example URL generators
export function generateExampleUrl(category: string, type?: string): string {
  const categorySlug = createSlug(category);
  const typeSlug = type ? createSlug(type) : '';
  return typeSlug ? `/examples/${categorySlug}/${typeSlug}` : `/examples/${categorySlug}`;
}

// Best/Curation URL generators
export function generateBestUrl(category: string): string {
  const categorySlug = createSlug(category);
  return `/best/${categorySlug}`;
}

// Conversion URL generators
export function generateConvertUrl(from: string, to: string): string {
  const fromSlug = createSlug(from);
  const toSlug = createSlug(to);
  return `/convert/${fromSlug}-to-${toSlug}`;
}

// Persona URL generators
export function generatePersonaUrl(audience: string): string {
  const audienceSlug = createSlug(audience);
  return `/for/${audienceSlug}`;
}

// Glossary URL generators
export function generateGlossaryUrl(term: string): string {
  const termSlug = createSlug(term);
  return `/glossary/${termSlug}`;
}

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

// Calculate reading time
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Generate excerpt from content
export function generateExcerpt(content: string, maxLength: number = 160): string {
  const stripped = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
  if (stripped.length <= maxLength) return stripped;
  
  const trimmed = stripped.substr(0, maxLength);
  const lastSpace = trimmed.lastIndexOf(' ');
  
  return lastSpace > 0 ? trimmed.substr(0, lastSpace) + '...' : trimmed + '...';
}

// Distance calculation between coordinates
export function calculateDistance(
  lat1: number, 
  lon1: number, 
  lat2: number, 
  lon2: number
): number {
  const R = 3959; // Radius of the Earth in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distance in miles
}

// Check if location is within service radius
export function isWithinServiceRadius(
  centerLat: number,
  centerLon: number,
  targetLat: number,
  targetLon: number,
  radiusMiles: number = 1000
): boolean {
  const distance = calculateDistance(centerLat, centerLon, targetLat, targetLon);
  return distance <= radiusMiles;
}

// Generate schema markup
export function generateLocalBusinessSchema(business: any) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": business.name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": business.address.street,
      "addressLocality": business.address.city,
      "addressRegion": business.address.state,
      "postalCode": business.address.zip,
      "addressCountry": business.address.country
    },
    "telephone": business.phone,
    "email": business.email,
    "url": business.website,
    "openingHours": Object.entries(business.hours).map(([day, hours]) => 
      `${day.charAt(0).toUpperCase() + day.slice(1)} ${hours}`
    ),
    "serviceArea": "Southeast United States",
    "priceRange": "$$"
  };
}

// Generate article schema
export function generateArticleSchema(article: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Organization",
      "name": "Best Upholstery Orlando"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Best Upholstery Orlando"
    },
    "datePublished": article.publishDate,
    "dateModified": article.lastModified,
    "mainEntityOfPage": article.url
  };
}

// SEO utilities
export function generateCanonicalUrl(path: string, baseUrl: string = 'https://bestupholsteryorlando.com'): string {
  return `${baseUrl}${path}`;
}

export function generateOgImage(title: string, category?: string): string {
  const params = new URLSearchParams({
    title,
    ...(category && { category }),
  });
  return `/api/og?${params.toString()}`;
}