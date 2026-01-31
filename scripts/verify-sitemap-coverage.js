const fs = require('fs');
const path = require('path');

// Load the original sitemap and compare with our static paths
async function verifySitemapCoverage() {
  try {
    // Load original sitemap
    const originalSitemap = fs.readFileSync('./sitemap-production.xml', 'utf8');
    
    // Extract all upholstery URLs from original sitemap
    const upholsteryUrlRegex = /<loc>https:\/\/bestupholsteryorlando\.com\/upholstery\/([^\/]+)\/</g;
    const originalLocations = [];
    let match;
    
    while ((match = upholsteryUrlRegex.exec(originalSitemap)) !== null) {
      originalLocations.push(match[1]);
    }
    
    // Load our static paths
    const staticPathsFile = './src/data/pseo/static-paths.json';
    const staticPaths = JSON.parse(fs.readFileSync(staticPathsFile, 'utf8'));
    const ourLocations = staticPaths.map(p => p.params.location);
    
    console.log(`📊 Coverage Analysis:`);
    console.log(`   Original sitemap locations: ${originalLocations.length}`);
    console.log(`   Our static paths: ${ourLocations.length}`);
    
    // Find missing locations
    const missing = originalLocations.filter(loc => !ourLocations.includes(loc));
    const extra = ourLocations.filter(loc => !originalLocations.includes(loc));
    
    console.log(`   Missing from our data: ${missing.length}`);
    console.log(`   Extra in our data: ${extra.length}`);
    
    if (missing.length > 0) {
      console.log(`\n❌ Missing locations (first 10):`);
      console.log(missing.slice(0, 10).join('\n   '));
    }
    
    if (extra.length > 0) {
      console.log(`\n➕ Extra locations (first 10):`);
      console.log(extra.slice(0, 10).join('\n   '));
    }
    
    if (missing.length === 0) {
      console.log('\n✅ Perfect coverage! All original sitemap locations are included.');
    }
    
    return {
      original: originalLocations.length,
      ours: ourLocations.length,
      missing: missing.length,
      extra: extra.length
    };
    
  } catch (error) {
    console.error('Error verifying sitemap coverage:', error);
    return null;
  }
}

// Run the verification
verifySitemapCoverage().then(result => {
  if (result) {
    console.log(`\n📈 Coverage: ${((result.ours - result.missing) / result.original * 100).toFixed(1)}%`);
  }
});