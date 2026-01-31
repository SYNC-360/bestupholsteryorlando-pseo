#!/usr/bin/env tsx
/**
 * PSEO Preview Script
 * 
 * Quickly preview generated city data without full generation
 * Useful for testing and development
 */

import { PSEODataLoader } from '../src/lib/pseo/data-loader';
import { CityDataGenerator } from '../src/lib/pseo/city-generator';

async function previewPSEO() {
  console.log('🔍 PSEO Data Preview\n');

  try {
    const dataLoader = new PSEODataLoader();
    const cityGenerator = new CityDataGenerator();

    // Load a small sample of cities
    console.log('📍 Loading sample WordPress cities...');
    const wpCities = await dataLoader.extractWordPressCities(
      'https://bestupholsteryorlando.com/sitemap/sitemap.xml'
    );

    console.log(`Found ${wpCities.length} WordPress cities\n`);

    // Preview first 5 cities
    const sampleCities = wpCities.slice(0, 5);
    
    console.log('🏙️  Sample Cities from WordPress:');
    console.log('─'.repeat(60));
    
    for (const wpCity of sampleCities) {
      const baseData = dataLoader.convertWordPressCityToBase(wpCity);
      const cityData = cityGenerator.generateCityData(baseData);
      
      console.log(`\n📍 ${cityData.city}, ${cityData.state}`);
      console.log(`   Population: ${baseData.population.toLocaleString()}`);
      console.log(`   Climate: ${cityData.climate.challenge}`);
      console.log(`   Architecture: ${cityData.architecture.styles.slice(0, 2).join(', ')}`);
      console.log(`   Lifestyle: ${cityData.lifestyle.pace} pace`);
      
      // Generate sample metadata
      const title = `Professional Upholstery Services in ${cityData.city}, ${getStateAbbrev(cityData.state)} | Best Upholstery Orlando`;
      const description = `Expert upholstery and fabric selection services in ${cityData.city}, ${cityData.state}. ${cityData.climate.impact}`;
      
      console.log(`   SEO Title: ${title.slice(0, 70)}...`);
      console.log(`   Description: ${description.slice(0, 120)}...`);
    }

    // Test expansion cities
    console.log('\n\n🌎 Sample Expansion Cities (1000-mile radius):');
    console.log('─'.repeat(60));
    
    const expansionCities = await dataLoader.generateExpansionCities(1000, 5);
    
    for (const baseData of expansionCities) {
      const cityData = cityGenerator.generateCityData(baseData);
      
      console.log(`\n📍 ${cityData.city}, ${cityData.state}`);
      console.log(`   Population: ${baseData.population.toLocaleString()}`);
      console.log(`   Distance from Orlando: ${Math.round(baseData.coordinates.lat * baseData.coordinates.lng)} miles`);
      console.log(`   Climate Zone: ${cityData.climate.challenge}`);
      console.log(`   Market Focus: ${cityData.climate.specialFocus || 'General market'}`);
    }

    // Preview URL generation
    console.log('\n\n🔗 Sample URLs:');
    console.log('─'.repeat(60));
    
    const allSamples = [...sampleCities.slice(0, 3), ...expansionCities.slice(0, 2)];
    
    for (const sample of allSamples) {
      const baseData = 'slug' in sample 
        ? dataLoader.convertWordPressCityToBase(sample)
        : sample;
      
      const slug = baseData.name.toLowerCase().replace(/\s+/g, '-');
      const url = `https://bestupholsteryorlando.com/upholstery/${slug}`;
      
      console.log(`   ${baseData.name}: ${url}`);
    }

    // Performance estimates
    console.log('\n\n⚡ Performance Estimates:');
    console.log('─'.repeat(60));
    console.log(`WordPress Cities: ${wpCities.length} (existing footprint)`);
    console.log(`Potential 1000-mile expansion: ~4,000-5,000 cities`);
    console.log(`Potential national expansion: ~10,000-15,000 cities`);
    console.log(`Build time estimate: 15-30 minutes for full generation`);
    console.log(`Static generation: All pages pre-rendered for instant loading`);

    console.log('\n✅ Preview completed successfully!');
    console.log('\n🚀 To generate full PSEO data:');
    console.log('   npm run generate-pseo:dev    (500-mile radius, 1,000 cities)');
    console.log('   npm run generate-pseo        (1,000-mile radius, 10,000 cities)');
    console.log('   npm run generate-pseo:full   (1,500-mile radius, 15,000 cities)');

  } catch (error) {
    console.error('❌ Preview failed:', error);
    process.exit(1);
  }
}

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

// Run preview
if (require.main === module) {
  previewPSEO();
}