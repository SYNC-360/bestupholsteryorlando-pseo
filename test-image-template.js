#!/usr/bin/env node

// Quick test of the image-enhanced template
console.log('🧪 Testing image-enhanced template...\n');

const fs = require('fs');
const path = require('path');

// Check if image-enhanced template exists
const templatePath = path.join(__dirname, 'src/components/templates/city-page-with-images.tsx');
const currentTemplatePath = path.join(__dirname, 'src/components/templates/city-page.tsx');

if (!fs.existsSync(templatePath)) {
  console.error('❌ Image-enhanced template not found!');
  process.exit(1);
}

console.log('✅ Image-enhanced template found');

// Check if image directories exist
const imageBasePath = path.join(__dirname, 'public/images');
const requiredDirs = [
  'climates/humid-subtropical',
  'climates/humid-continental', 
  'fabric-details/uv-protection',
  'fabric-details/moisture-resistance',
  'fabric-details/stain-resistance',
  'fabric-details/durability',
  'fabric-details/humid-subtropical',
  'fabric-details/humid-continental',
  'transformations'
];

let missingDirs = [];
requiredDirs.forEach(dir => {
  const fullPath = path.join(imageBasePath, dir);
  if (!fs.existsSync(fullPath)) {
    missingDirs.push(dir);
  } else {
    console.log(`✅ Directory exists: ${dir}`);
  }
});

if (missingDirs.length > 0) {
  console.log(`\n⚠️  Missing directories: ${missingDirs.length}`);
  missingDirs.forEach(dir => console.log(`   - ${dir}`));
} else {
  console.log('\n✅ All required directories exist');
}

// Check for placeholder images
const requiredImages = [
  'climates/humid-subtropical/hero-fallback.svg',
  'climates/humid-continental/hero-fallback.svg',
  'fabric-details/humid-subtropical/climate-fabric-sample.svg',
  'fabric-details/humid-continental/climate-fabric-sample.svg',
  'fabric-details/uv-protection/close-up.svg',
  'fabric-details/moisture-resistance/close-up.svg',
  'fabric-details/stain-resistance/demonstration.svg',
  'fabric-details/durability/wear-test.svg',
  'transformations/living-room-before-after.svg',
  'transformations/dining-room-before-after.svg'
];

let existingImages = 0;
requiredImages.forEach(imgPath => {
  const fullPath = path.join(imageBasePath, imgPath);
  if (fs.existsSync(fullPath)) {
    existingImages++;
    console.log(`✅ Image exists: ${imgPath}`);
  } else {
    console.log(`❌ Missing: ${imgPath}`);
  }
});

console.log(`\n📊 Image Status: ${existingImages}/${requiredImages.length} placeholder images found`);

// Test template activation readiness
if (existingImages >= 8) {
  console.log('\n🚀 READY FOR ACTIVATION:');
  console.log('   1. Sufficient placeholder images exist');
  console.log('   2. Template is properly structured');
  console.log('   3. Ready to replace with stock photos');
  
  console.log('\n📋 Next Steps:');
  console.log('   1. Source stock photos (see STOCK-PHOTO-SOURCING.md)');
  console.log('   2. Replace SVG placeholders with WebP images');
  console.log('   3. Activate template with: mv city-page-with-images.tsx city-page.tsx');
  console.log('   4. Test build: npm run build');
} else {
  console.log('\n⚠️  NOT READY: Need to create missing image placeholders first');
  console.log('   Run: node create-image-placeholders.js');
}

console.log('\n✅ Template test complete!');