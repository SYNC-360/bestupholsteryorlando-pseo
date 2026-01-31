import { notFound } from 'next/navigation';
import { CityPageTemplate } from '@/components/templates/city-page';
import { CityDataGenerator } from '@/lib/pseo/city-generator';
import { PSEODataLoader } from '@/lib/pseo/data-loader';
import { getCityData } from '@/lib/city-data';
import type { Metadata } from 'next';
import { CityData } from '@/types';

// Static params generation for existing cities
export async function generateStaticParams() {
  try {
    // Load all PSEO cities for static generation
    const dataLoader = new PSEODataLoader();
    
    // Load from WordPress sitemap + expansion
    const cities = await dataLoader.loadAllPSEOData({
      sitemapUrl: 'https://bestupholsteryorlando.com/sitemap/sitemap.xml',
      expansionRadius: 1000, // 1000 mile radius
      maxCities: 10000 // Target 10,000 total cities
    });
    
    // Generate static paths
    return dataLoader.generateStaticPaths(cities);
    
  } catch (error) {
    console.error('Error generating static params:', error);
    
    // Fallback to essential cities if loading fails
    const fallbackCities = [
      'orlando', 'tampa', 'miami', 'jacksonville', 'atlanta', 'charlotte', 
      'nashville', 'sarasota', 'clearwater', 'st-petersburg', 'fort-lauderdale'
    ];
    
    return fallbackCities.map(city => ({
      params: { location: city }
    }));
  }
}

// Dynamic metadata generation
export async function generateMetadata({ 
  params 
}: { 
  params: { location: string } 
}): Promise<Metadata> {
  const locationSlug = params.location;
  
  try {
    // Try to get city data
    const cityData = await getCityDataBySlug(locationSlug);
    
    if (!cityData) {
      return {
        title: 'Location Not Found | Best Upholstery Orlando',
        description: 'The requested location was not found.',
        robots: { index: false, follow: false }
      };
    }
    
    // Generate SEO metadata
    const title = `Professional Upholstery Services in ${cityData.city}, ${getStateAbbrev(cityData.state)} | Best Upholstery Orlando`;
    const description = `Expert upholstery and fabric selection services in ${cityData.city}, ${cityData.state}. ${cityData.climate.challenge} Free estimates and professional craftsmanship.`;
    
    return {
      title,
      description,
      keywords: [
        `upholstery ${cityData.city}`,
        `furniture restoration ${cityData.city}`,
        `fabric selection ${cityData.state}`,
        `custom upholstery ${cityData.city}`,
        'professional upholstery services'
      ],
      openGraph: {
        title,
        description,
        type: 'website',
        siteName: 'Best Upholstery Orlando',
        locale: 'en_US'
      },
      alternates: {
        canonical: `https://bestupholsteryorlando.com/upholstery/${locationSlug}`
      }
    };
    
  } catch (error) {
    console.error('Error generating metadata:', error);
    
    return {
      title: 'Upholstery Services | Best Upholstery Orlando',
      description: 'Professional upholstery and fabric selection services.'
    };
  }
}

// Main page component
export default async function LocationPage({ 
  params 
}: { 
  params: { location: string } 
}) {
  const locationSlug = params.location;
  
  try {
    // Try to get city data
    const cityData = await getCityDataBySlug(locationSlug);
    
    if (!cityData) {
      notFound();
    }
    
    return <CityPageTemplate cityData={cityData} />;
    
  } catch (error) {
    console.error('Error loading city page:', error);
    notFound();
  }
}

// Helper function to get city data by slug
async function getCityDataBySlug(slug: string): Promise<CityData | null> {
  try {
    // First, try the manually curated cities (higher quality)
    const curatedCityData = getCityData(slug);
    if (curatedCityData) {
      return curatedCityData;
    }
    
    // If not found in curated data, generate programmatically
    const dataLoader = new PSEODataLoader();
    const cityGenerator = new CityDataGenerator();
    
    // Load PSEO cities and find match
    const cities = await dataLoader.loadAllPSEOData({
      sitemapUrl: 'https://bestupholsteryorlando.com/sitemap/sitemap.xml',
      expansionRadius: 1000,
      maxCities: 10000
    });
    
    const pseoCity = dataLoader.getCityBySlug(cities, slug);
    
    if (pseoCity) {
      // Convert PSEO data to CityData format
      return cityGenerator.generateCityData({
        name: pseoCity.name,
        state: pseoCity.state,
        stateCode: pseoCity.stateCode,
        county: pseoCity.county,
        population: pseoCity.population,
        coordinates: pseoCity.coordinates,
        timezone: pseoCity.timezone
      });
    }
    
    // Last resort: try to generate from slug name
    const cityName = slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Create basic city data and generate
    const basicCityData = {
      name: cityName,
      state: 'Florida', // Default assumption for unknown cities
      stateCode: 'FL',
      county: `${cityName} County`,
      population: 25000,
      coordinates: { lat: 28.5, lng: -81.4 }, // Near Orlando
      timezone: 'America/New_York'
    };
    
    return cityGenerator.generateCityData(basicCityData);
    
  } catch (error) {
    console.error('Error getting city data:', error);
    return null;
  }
}

// Helper function to get state abbreviation
function getStateAbbrev(state: string): string {
  const stateAbbrevs: Record<string, string> = {
    'Alabama': 'AL', 'Alaska': 'AK', 'Arizona': 'AZ', 'Arkansas': 'AR', 'California': 'CA',
    'Colorado': 'CO', 'Connecticut': 'CT', 'Delaware': 'DE', 'Florida': 'FL', 'Georgia': 'GA',
    'Hawaii': 'HI', 'Idaho': 'ID', 'Illinois': 'IL', 'Indiana': 'IN', 'Iowa': 'IA',
    'Kansas': 'KS', 'Kentucky': 'KY', 'Louisiana': 'LA', 'Maine': 'ME', 'Maryland': 'MD',
    'Massachusetts': 'MA', 'Michigan': 'MI', 'Minnesota': 'MN', 'Mississippi': 'MS', 'Missouri': 'MO',
    'Montana': 'MT', 'Nebraska': 'NE', 'Nevada': 'NV', 'New Hampshire': 'NH', 'New Jersey': 'NJ',
    'New Mexico': 'NM', 'New York': 'NY', 'North Carolina': 'NC', 'North Dakota': 'ND', 'Ohio': 'OH',
    'Oklahoma': 'OK', 'Oregon': 'OR', 'Pennsylvania': 'PA', 'Rhode Island': 'RI', 'South Carolina': 'SC',
    'South Dakota': 'SD', 'Tennessee': 'TN', 'Texas': 'TX', 'Utah': 'UT', 'Vermont': 'VT',
    'Virginia': 'VA', 'Washington': 'WA', 'West Virginia': 'WV', 'Wisconsin': 'WI', 'Wyoming': 'WY'
  };
  
  return stateAbbrevs[state] || state;
}