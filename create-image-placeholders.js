#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create text-based placeholders for upholstery images
const placeholders = [
  {
    path: 'public/images/climates/humid-subtropical/hero-fallback.webp',
    text: 'Climate-Appropriate\nUpholstery Example\n\nHumid Subtropical\n(Florida/Coastal)'
  },
  {
    path: 'public/images/climates/humid-continental/hero-fallback.webp', 
    text: 'Climate-Appropriate\nUpholstery Example\n\nHumid Continental\n(Inland/Variable Temp)'
  },
  {
    path: 'public/images/fabric-details/humid-subtropical/climate-fabric-sample.webp',
    text: 'UV-Resistant\nFabric Sample\n\nSolution-Dyed\nMoisture-Wicking'
  },
  {
    path: 'public/images/fabric-details/humid-continental/climate-fabric-sample.webp',
    text: 'Temperature-Versatile\nFabric Sample\n\nSeasonal Comfort\nDurable Weave'
  },
  {
    path: 'public/images/fabric-details/uv-protection/close-up.webp',
    text: 'UV Protection\nFabric Detail\n\nSolution-Dyed Fibers\nFade Resistance'
  },
  {
    path: 'public/images/fabric-details/moisture-resistance/close-up.webp',
    text: 'Moisture Resistance\nFabric Detail\n\nQuick-Dry Properties\nMold Prevention'
  },
  {
    path: 'public/images/fabric-details/stain-resistance/demonstration.webp',
    text: 'Stain Resistance\nDemo\n\nEasy Cleanup\nFamily-Friendly'
  },
  {
    path: 'public/images/fabric-details/durability/wear-test.webp',
    text: 'Durability Test\nFabric Weave\n\nHigh-Performance\nLong-Lasting'
  },
  {
    path: 'public/images/transformations/living-room-before-after.webp',
    text: 'Before/After\nLiving Room\n\nClimate Upgrade\nFabric Selection'
  },
  {
    path: 'public/images/transformations/dining-room-before-after.webp',
    text: 'Before/After\nDining Room\n\nStain-Resistant\nUpgrade'
  }
];

// SVG template for placeholders
const createSVG = (text, width = 800, height = 600) => `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#f3f4f6"/>
  <rect x="20" y="20" width="${width-40}" height="${height-40}" fill="#e5e7eb" stroke="#d1d5db" stroke-width="2" stroke-dasharray="10,5"/>
  
  <!-- Upholstery icon -->
  <g transform="translate(${width/2-30}, 100)">
    <rect x="0" y="0" width="60" height="40" fill="#f59e0b" rx="8"/>
    <rect x="5" y="5" width="50" height="30" fill="#fbbf24" rx="4"/>
    <circle cx="15" cy="15" r="3" fill="#f59e0b"/>
    <circle cx="30" cy="15" r="3" fill="#f59e0b"/>
    <circle cx="45" cy="15" r="3" fill="#f59e0b"/>
    <circle cx="15" cy="25" r="3" fill="#f59e0b"/>
    <circle cx="30" cy="25" r="3" fill="#f59e0b"/>
    <circle cx="45" cy="25" r="3" fill="#f59e0b"/>
  </g>
  
  <!-- Text -->
  <text x="${width/2}" y="${height/2 + 60}" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="600" text-anchor="middle" fill="#374151">
    ${text.split('\\n').map((line, i) => 
      `<tspan x="${width/2}" dy="${i === 0 ? 0 : 30}">${line}</tspan>`
    ).join('')}
  </text>
  
  <!-- Instructions -->
  <text x="${width/2}" y="${height - 60}" font-family="Inter, Arial, sans-serif" font-size="14" text-anchor="middle" fill="#6b7280">
    Replace with relevant upholstery image
  </text>
  <text x="${width/2}" y="${height - 40}" font-family="Inter, Arial, sans-serif" font-size="12" text-anchor="middle" fill="#9ca3af">
    See IMPLEMENT-UPHOLSTERY-IMAGES.md for sourcing guide
  </text>
</svg>`.trim();

console.log('🖼️ Creating upholstery image placeholders...\n');

placeholders.forEach(({ path: imagePath, text }) => {
  const fullPath = path.join(__dirname, imagePath);
  const dir = path.dirname(fullPath);
  
  // Ensure directory exists
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${path.relative(__dirname, dir)}`);
  }
  
  // Create SVG placeholder
  const svg = createSVG(text);
  
  // For now, save as SVG (can be converted to WebP later with real images)
  const svgPath = fullPath.replace('.webp', '.svg');
  fs.writeFileSync(svgPath, svg);
  
  console.log(`✅ Created placeholder: ${path.relative(__dirname, svgPath)}`);
});

console.log(`\n🎯 Created ${placeholders.length} upholstery image placeholders!`);
console.log('\n📋 Next Steps:');
console.log('1. Source real upholstery images (see IMPLEMENT-UPHOLSTERY-IMAGES.md)');
console.log('2. Replace .svg placeholders with .webp real images');
console.log('3. Update city page template to use real image paths');
console.log('4. Test with 2-3 cities before full deployment');

console.log('\n✅ All placeholders clearly marked as upholstery-related content!');
console.log('No random stock photos - only relevant furniture/fabric imagery needed.');