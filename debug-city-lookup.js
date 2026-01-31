#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

async function debugCityLookup() {
  const testSlugs = ['zephyrhills', 'tampa', 'miami', 'orlando'];
  
  console.log('🔍 Debugging city lookup function...\n');
  
  try {
    // Test the lookup file directly
    const lookupFile = path.join(__dirname, 'src/data/pseo/city-lookup.json');
    
    console.log(`📁 Checking lookup file: ${lookupFile}`);
    
    if (!fs.existsSync(lookupFile)) {
      console.log('❌ City lookup file not found!');
      return;
    }
    
    const cityLookup = JSON.parse(fs.readFileSync(lookupFile, 'utf8'));
    console.log(`✅ Loaded lookup with ${Object.keys(cityLookup).length} entries\n`);
    
    // Test each slug
    for (const slug of testSlugs) {
      console.log(`Testing slug: "${slug}"`);
      
      // Test exact lookup
      const exactMatch = cityLookup[slug];
      console.log(`  Direct lookup: ${exactMatch ? '✅ Found' : '❌ Not found'}`);
      
      if (exactMatch) {
        console.log(`    → ${exactMatch.name}, ${exactMatch.stateCode}`);
      } else {
        // Check if it exists with different casing
        const lowerSlug = slug.toLowerCase();
        const lowerMatch = cityLookup[lowerSlug];
        console.log(`  Lowercase lookup: ${lowerMatch ? '✅ Found' : '❌ Not found'}`);
        
        if (lowerMatch) {
          console.log(`    → ${lowerMatch.name}, ${lowerMatch.stateCode}`);
        } else {
          // List similar keys
          const similarKeys = Object.keys(cityLookup).filter(key => 
            key.includes(slug) || slug.includes(key.split('-')[0])
          ).slice(0, 3);
          
          if (similarKeys.length > 0) {
            console.log(`  Similar keys found: ${similarKeys.join(', ')}`);
          } else {
            console.log(`  No similar keys found`);
          }
        }
      }
      
      console.log('');
    }
    
    // Test the actual getCityDataBySlug function logic
    console.log('🧪 Testing getCityDataBySlug logic simulation...\n');
    
    for (const slug of testSlugs) {
      console.log(`Testing getCityDataBySlug("${slug}"):`);
      
      // Simulate the function logic
      const lookupCity = cityLookup[slug.toLowerCase()];
      
      if (lookupCity) {
        console.log(`  ✅ Found: ${lookupCity.name}, ${lookupCity.stateCode}`);
      } else {
        console.log(`  ❌ Not found in lookup`);
      }
      
      console.log('');
    }
    
  } catch (error) {
    console.error('❌ Error during debug:', error);
  }
}

debugCityLookup();