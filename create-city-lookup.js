#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Read the PSEO cities data
const citiesFile = path.join(__dirname, 'src/data/pseo/cities.json');
const cities = JSON.parse(fs.readFileSync(citiesFile, 'utf8'));

console.log(`Processing ${cities.length} cities...`);

// Create a lookup map: slug -> basic city data
const cityLookup = {};

cities.forEach(city => {
  const slug = city.name.toLowerCase().replace(/\s+/g, '-');
  
  cityLookup[slug] = {
    name: city.name,
    state: city.state,
    stateCode: city.stateCode,
    county: city.county,
    population: city.population,
    coordinates: city.coordinates,
    timezone: city.timezone,
    distanceFromOrlando: city.distanceFromOrlando
  };
});

// Write the lookup file
const lookupFile = path.join(__dirname, 'src/data/pseo/city-lookup.json');
fs.writeFileSync(lookupFile, JSON.stringify(cityLookup, null, 2));

console.log(`✅ Created city lookup with ${Object.keys(cityLookup).length} entries`);
console.log(`📁 Saved to: ${lookupFile}`);

// Test a few lookups
const testSlugs = ['zephyrhills', 'tampa', 'miami', 'orlando'];
console.log('\n🧪 Testing lookups:');
testSlugs.forEach(slug => {
  const city = cityLookup[slug];
  if (city) {
    console.log(`  ✅ ${slug} -> ${city.name}, ${city.stateCode}`);
  } else {
    console.log(`  ❌ ${slug} -> not found`);
  }
});