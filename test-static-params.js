#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

async function testStaticParams() {
  try {
    // Test loading the static paths file
    const staticPathsFile = path.join(__dirname, 'src/data/pseo/static-paths.json');
    console.log('Loading from:', staticPathsFile);
    
    if (!fs.existsSync(staticPathsFile)) {
      console.error('❌ static-paths.json file not found!');
      return;
    }
    
    const staticPathsData = JSON.parse(fs.readFileSync(staticPathsFile, 'utf8'));
    console.log(`✅ Loaded ${staticPathsData.length} static paths`);
    
    // Show first few entries
    console.log('\nFirst 5 paths:');
    staticPathsData.slice(0, 5).forEach((path, i) => {
      console.log(`  ${i + 1}. ${JSON.stringify(path)}`);
    });
    
    // Check format
    const firstPath = staticPathsData[0];
    if (firstPath && firstPath.params && typeof firstPath.params.location === 'string') {
      console.log('✅ Format looks correct');
    } else {
      console.log('❌ Format issue detected');
      console.log('Expected: { params: { location: "city-name" } }');
      console.log('Actual:', firstPath);
    }
    
  } catch (error) {
    console.error('❌ Error testing static params:', error.message);
  }
}

testStaticParams();