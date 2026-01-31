#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Import the city generator (simulate the import)
async function testFullLookup() {
  const testSlug = 'zephyrhills';
  
  console.log(`🧪 Testing full lookup chain for: "${testSlug}"\n`);
  
  try {
    console.log('Step 1: Loading city lookup file...');
    const lookupFile = path.join(__dirname, 'src/data/pseo/city-lookup.json');
    
    if (!fs.existsSync(lookupFile)) {
      console.log('❌ City lookup file not found');
      return;
    }
    
    const cityLookup = JSON.parse(fs.readFileSync(lookupFile, 'utf8'));
    console.log(`✅ Loaded lookup with ${Object.keys(cityLookup).length} entries`);
    
    console.log('\nStep 2: Looking up city data...');
    const lookupCity = cityLookup[testSlug.toLowerCase()];
    
    if (!lookupCity) {
      console.log(`❌ City "${testSlug}" not found in lookup`);
      return;
    }
    
    console.log(`✅ Found city: ${lookupCity.name}, ${lookupCity.stateCode}`);
    console.log('City data:', JSON.stringify(lookupCity, null, 2));
    
    console.log('\nStep 3: Testing CityDataGenerator (basic check)...');
    
    // Check if the generator would work with this data
    const requiredFields = ['name', 'state', 'stateCode', 'county', 'population', 'coordinates', 'timezone'];
    const missingFields = requiredFields.filter(field => !lookupCity[field]);
    
    if (missingFields.length > 0) {
      console.log(`❌ Missing required fields: ${missingFields.join(', ')}`);
      return;
    }
    
    console.log('✅ All required fields present for city generation');
    
    console.log('\nStep 4: Checking coordinates format...');
    if (!lookupCity.coordinates || typeof lookupCity.coordinates.lat !== 'number' || typeof lookupCity.coordinates.lng !== 'number') {
      console.log('❌ Invalid coordinates format');
      console.log('Coordinates:', lookupCity.coordinates);
      return;
    }
    
    console.log(`✅ Valid coordinates: ${lookupCity.coordinates.lat}, ${lookupCity.coordinates.lng}`);
    
    console.log('\n🎉 Full lookup chain test passed!');
    console.log('The issue is likely with the TypeScript imports or the CityDataGenerator class in the Next.js environment.');
    
  } catch (error) {
    console.error('❌ Error during full lookup test:', error);
  }
}

testFullLookup();