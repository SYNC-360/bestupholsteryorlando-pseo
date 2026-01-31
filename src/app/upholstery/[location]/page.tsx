import { notFound } from 'next/navigation';
import { CityPageTemplate } from '@/components/templates/city-page';
import { PSEODataLoader } from '@/lib/pseo/data-loader';
import { getCityData } from '@/lib/city-data';
import type { Metadata } from 'next';
import { CityData } from '@/types';

// Static params generation - optimized for large datasets
export async function generateStaticParams() {
  try {
    // Load from pre-generated PSEO data files
    const fs = require('fs');
    const path = require('path');
    
    const staticPathsFile = path.join(process.cwd(), 'src/data/pseo/static-paths.json');
    
    if (!fs.existsSync(staticPathsFile)) {
      console.log('static-paths.json not found, using fallback method');
      throw new Error('static-paths.json not found');
    }
    
    const staticPathsData = JSON.parse(fs.readFileSync(staticPathsFile, 'utf8'));
    
    // In development, limit to 50 pages for faster builds
    // In production, build all pages
    const isProduction = process.env.NODE_ENV === 'production';
    const maxPages = isProduction ? staticPathsData.length : 50;
    const limitedPaths = staticPathsData.slice(0, maxPages);
    
    console.log(`✅ Loading ${limitedPaths.length}/${staticPathsData.length} static paths for /upholstery/[location] (${process.env.NODE_ENV})`);
    
    return limitedPaths;
    
  } catch (error) {
    console.error('Error loading static paths from local files:', error);
    
    // Fallback to major cities only
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
  params: Promise<{ location: string }> 
}): Promise<Metadata> {
  const { location: locationSlug } = await params;
  
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
    
    // Generate SEO metadata with interior design + MCM + furniture keywords
    const title = `Interior Designer & MCM Specialist in ${cityData.city}, ${getStateAbbrev(cityData.state)} | Custom Sofa & Furniture`;
    const description = `Interior designer specializing in mid-century modern furniture, custom sofa reupholstery, and contemporary chairs in ${cityData.city}, ${cityData.state}. ${cityData.climate.challenge} MCM restoration & performance fabric expertise.`;
    
    return {
      title,
      description,
      keywords: [
        `interior designer ${cityData.city}`,
        `home decorator ${cityData.city}`,
        `interior design services ${cityData.city}`,
        `mid century modern ${cityData.city}`,
        `mcm furniture ${cityData.city}`,
        `sofa ${cityData.city}`,
        `couch ${cityData.city}`,
        `chairs ${cityData.city}`,
        `sectional sofa ${cityData.city}`,
        `accent chairs ${cityData.city}`,
        `dining chairs ${cityData.city}`,
        `custom sofa ${cityData.city}`,
        `mid century modern sofa ${cityData.city}`,
        `mcm chairs ${cityData.city}`,
        `contemporary furniture ${cityData.city}`,
        `custom upholstery ${cityData.city}`,
        `furniture restoration ${cityData.city}`,
        'performance fabric furniture',
        'mcm reupholstery'
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

// Enable ISR for on-demand page generation
export const dynamicParams = true;
export const revalidate = 86400; // 24 hours

// Main page component with ISR support
export default async function LocationPage({ 
  params 
}: { 
  params: Promise<{ location: string }> 
}) {
  const { location: locationSlug } = await params;
  
  try {
    // Try to get city data
    const cityData = await getCityDataBySlug(locationSlug);
    
    if (!cityData) {
      console.log(`City data not found for: ${locationSlug}`);
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
    
    // Load from city lookup index (fast and efficient)
    const fs = require('fs');
    const path = require('path');
    
    const lookupFile = path.join(process.cwd(), 'src/data/pseo/city-lookup.json');
    
    if (!fs.existsSync(lookupFile)) {
      return null;
    }
    
    const cityLookup = JSON.parse(fs.readFileSync(lookupFile, 'utf8'));
    const lookupCity = cityLookup[slug.toLowerCase()];
    
    if (lookupCity) {
      
      // Create a basic CityData object matching the expected interface
      const basicCityData: CityData = {
        city: lookupCity.name,
        state: lookupCity.state,
        
        // Climate info based on state
        climate: {
          challenge: lookupCity.stateCode === 'FL' 
            ? "High humidity and UV exposure require fade-resistant fabrics"
            : "Temperature fluctuations require durable, versatile fabric choices",
          impact: lookupCity.stateCode === 'FL'
            ? "Coastal humidity can cause fabric fading and mold if not properly protected"
            : "Variable temperatures require versatile fabric choices for year-round comfort",
          solutions: [
            "Solution-dyed acrylic fabrics",
            "Performance outdoor textiles", 
            "UV-resistant treatments",
            "Moisture-wicking materials"
          ],
          specialFocus: "Climate-appropriate fabric selection for longevity"
        },
        
        // Architecture
        architecture: {
          styles: ["Contemporary", "Modern", "Traditional"],
          considerations: "Open floor plans and large windows are common, requiring fabrics that complement natural light",
          trends: "Clean lines, natural textures, and neutral color palettes"
        },
        
        // Lifestyle
        lifestyle: {
          pace: "Moderate",
          priorities: ["Comfort", "Durability", "Style"],
          preferences: "Casual elegance with practical considerations for daily living"
        }
      };
      
      return basicCityData;
    }
    
    return null;
    
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