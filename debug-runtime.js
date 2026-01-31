#!/usr/bin/env node

// Test the exact runtime logic from the page
const fs = require('fs');
const path = require('path');

async function testRuntimeLogic() {
  const slug = 'zephyrhills';
  
  console.log(`🧪 Testing runtime logic for: "${slug}"\n`);
  
  try {
    console.log('Step 1: Loading city lookup file...');
    const lookupFile = path.join(__dirname, 'src/data/pseo/city-lookup.json');
    
    console.log(`Looking for: ${lookupFile}`);
    
    if (!fs.existsSync(lookupFile)) {
      console.log('❌ City lookup file not found');
      return;
    }
    
    console.log('✅ City lookup file exists');
    
    console.log('\nStep 2: Parsing JSON...');
    const cityLookup = JSON.parse(fs.readFileSync(lookupFile, 'utf8'));
    console.log(`✅ Loaded ${Object.keys(cityLookup).length} cities from lookup`);
    
    console.log('\nStep 3: Looking up specific city...');
    const lookupCity = cityLookup[slug.toLowerCase()];
    
    if (!lookupCity) {
      console.log(`❌ City "${slug}" not found in lookup`);
      console.log('Available cities starting with "z":', Object.keys(cityLookup).filter(k => k.startsWith('z')).slice(0, 5));
      return;
    }
    
    console.log(`✅ Found city: ${lookupCity.name}, ${lookupCity.stateCode}`);
    
    console.log('\nStep 4: Creating city data object...');
    
    // Test the exact structure we're creating
    const basicCityData = {
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
    
    console.log('✅ City data object created successfully');
    console.log('City data preview:', JSON.stringify({
      city: basicCityData.city,
      state: basicCityData.state,
      climate: basicCityData.climate.challenge
    }, null, 2));
    
    console.log('\n🎉 Runtime logic test passed! The issue must be elsewhere.');
    
  } catch (error) {
    console.error('❌ Error during runtime test:', error);
    console.error('Stack trace:', error.stack);
  }
}

testRuntimeLogic();