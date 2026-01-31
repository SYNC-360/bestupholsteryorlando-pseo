#!/usr/bin/env tsx
/**
 * PSEO Data Generation Script
 * 
 * Generates all city data for programmatic SEO pages
 * Can be run during build or as a standalone script
 * 
 * Usage:
 * npm run generate-pseo
 * npm run generate-pseo -- --radius=1500 --max=15000
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import { PSEODataLoader } from '../src/lib/pseo/data-loader';
import { PSEOCityData } from '../src/lib/pseo/types';

interface GenerationOptions {
  radius: number;
  maxCities: number;
  outputDir: string;
  sitemapUrl: string;
  verbose: boolean;
}

class PSEODataGenerator {
  private options: GenerationOptions;
  private dataLoader: PSEODataLoader;

  constructor(options: Partial<GenerationOptions> = {}) {
    this.options = {
      radius: 1000,
      maxCities: 10000,
      outputDir: './src/data/pseo',
      sitemapUrl: 'https://bestupholsteryorlando.com/sitemap/sitemap.xml',
      verbose: false,
      ...options
    };

    this.dataLoader = new PSEODataLoader();
  }

  async generate(): Promise<void> {
    console.log('🚀 Starting PSEO data generation...');
    console.log(`📊 Target: ${this.options.maxCities} cities within ${this.options.radius} miles of Orlando`);
    
    const startTime = Date.now();

    try {
      // 1. Create output directory
      this.createOutputDirectory();

      // 2. Load all city data
      console.log('📍 Loading WordPress cities from sitemap...');
      const cities = await this.dataLoader.loadAllPSEOData({
        sitemapUrl: this.options.sitemapUrl,
        expansionRadius: this.options.radius,
        maxCities: this.options.maxCities
      });

      console.log(`✅ Loaded ${cities.length} total cities`);

      // 3. Analyze and categorize data
      const analytics = this.analyzeCities(cities);
      this.printAnalytics(analytics);

      // 4. Generate output files
      await this.generateOutputFiles(cities, analytics);

      const duration = (Date.now() - startTime) / 1000;
      console.log(`\n🎉 PSEO data generation completed in ${duration.toFixed(2)}s`);
      console.log(`📁 Output directory: ${this.options.outputDir}`);

    } catch (error) {
      console.error('❌ Error generating PSEO data:', error);
      process.exit(1);
    }
  }

  private createOutputDirectory(): void {
    if (!existsSync(this.options.outputDir)) {
      mkdirSync(this.options.outputDir, { recursive: true });
      console.log(`📁 Created output directory: ${this.options.outputDir}`);
    }
  }

  private analyzeCities(cities: PSEOCityData[]): CityAnalytics {
    const analytics: CityAnalytics = {
      total: cities.length,
      byState: {},
      byRegion: {},
      byDistanceFromOrlando: {
        under300: 0,
        between300And600: 0,
        between600And1000: 0,
        over1000: 0
      },
      byPopulation: {
        under10k: 0,
        between10kAnd50k: 0,
        between50kAnd100k: 0,
        between100kAnd500k: 0,
        over500k: 0
      },
      byClimateZone: {},
      wordPressCities: cities.filter(c => c.distanceFromOrlando <= 600).length,
      expansionCities: cities.filter(c => c.distanceFromOrlando > 600).length
    };

    // Analyze each city
    for (const city of cities) {
      // By state
      analytics.byState[city.stateCode] = (analytics.byState[city.stateCode] || 0) + 1;

      // By distance
      if (city.distanceFromOrlando < 300) {
        analytics.byDistanceFromOrlando.under300++;
      } else if (city.distanceFromOrlando < 600) {
        analytics.byDistanceFromOrlando.between300And600++;
      } else if (city.distanceFromOrlando < 1000) {
        analytics.byDistanceFromOrlando.between600And1000++;
      } else {
        analytics.byDistanceFromOrlando.over1000++;
      }

      // By population
      if (city.population < 10000) {
        analytics.byPopulation.under10k++;
      } else if (city.population < 50000) {
        analytics.byPopulation.between10kAnd50k++;
      } else if (city.population < 100000) {
        analytics.byPopulation.between50kAnd100k++;
      } else if (city.population < 500000) {
        analytics.byPopulation.between100kAnd500k++;
      } else {
        analytics.byPopulation.over500k++;
      }

      // By climate zone
      const climate = city.climateZone.id;
      analytics.byClimateZone[climate] = (analytics.byClimateZone[climate] || 0) + 1;
    }

    return analytics;
  }

  private printAnalytics(analytics: CityAnalytics): void {
    console.log('\n📊 City Analytics:');
    console.log('─'.repeat(50));
    
    console.log(`Total Cities: ${analytics.total}`);
    console.log(`WordPress Cities: ${analytics.wordPressCities}`);
    console.log(`Expansion Cities: ${analytics.expansionCities}`);

    console.log('\n🗺️  By State:');
    Object.entries(analytics.byState)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10)
      .forEach(([state, count]) => {
        console.log(`  ${state}: ${count}`);
      });

    console.log('\n📏 By Distance from Orlando:');
    console.log(`  < 300 miles: ${analytics.byDistanceFromOrlando.under300}`);
    console.log(`  300-600 miles: ${analytics.byDistanceFromOrlando.between300And600}`);
    console.log(`  600-1000 miles: ${analytics.byDistanceFromOrlando.between600And1000}`);
    console.log(`  > 1000 miles: ${analytics.byDistanceFromOrlando.over1000}`);

    console.log('\n👥 By Population:');
    console.log(`  < 10k: ${analytics.byPopulation.under10k}`);
    console.log(`  10k-50k: ${analytics.byPopulation.between10kAnd50k}`);
    console.log(`  50k-100k: ${analytics.byPopulation.between50kAnd100k}`);
    console.log(`  100k-500k: ${analytics.byPopulation.between100kAnd500k}`);
    console.log(`  > 500k: ${analytics.byPopulation.over500k}`);

    console.log('\n🌤️  By Climate Zone:');
    Object.entries(analytics.byClimateZone)
      .sort(([, a], [, b]) => b - a)
      .forEach(([climate, count]) => {
        console.log(`  ${climate}: ${count}`);
      });
  }

  private async generateOutputFiles(cities: PSEOCityData[], analytics: CityAnalytics): Promise<void> {
    console.log('\n📝 Generating output files...');

    // 1. All cities data
    const citiesFile = join(this.options.outputDir, 'cities.json');
    writeFileSync(citiesFile, JSON.stringify(cities, null, 2));
    console.log(`✅ Generated: cities.json (${cities.length} cities)`);

    // 2. Cities by state
    const citiesByState: Record<string, PSEOCityData[]> = {};
    for (const city of cities) {
      if (!citiesByState[city.stateCode]) {
        citiesByState[city.stateCode] = [];
      }
      citiesByState[city.stateCode].push(city);
    }

    for (const [state, stateCities] of Object.entries(citiesByState)) {
      const stateFile = join(this.options.outputDir, `cities-${state.toLowerCase()}.json`);
      writeFileSync(stateFile, JSON.stringify(stateCities, null, 2));
      console.log(`✅ Generated: cities-${state.toLowerCase()}.json (${stateCities.length} cities)`);
    }

    // 3. City index (for faster lookups)
    const cityIndex: Record<string, string> = {};
    for (const city of cities) {
      const slug = city.name.toLowerCase().replace(/\s+/g, '-');
      cityIndex[slug] = `${city.name}, ${city.stateCode}`;
    }

    const indexFile = join(this.options.outputDir, 'city-index.json');
    writeFileSync(indexFile, JSON.stringify(cityIndex, null, 2));
    console.log(`✅ Generated: city-index.json (${Object.keys(cityIndex).length} entries)`);

    // 4. Analytics report
    const analyticsFile = join(this.options.outputDir, 'analytics.json');
    writeFileSync(analyticsFile, JSON.stringify({
      ...analytics,
      generatedAt: new Date().toISOString(),
      options: this.options
    }, null, 2));
    console.log(`✅ Generated: analytics.json`);

    // 5. Static paths for Next.js
    const staticPaths = this.dataLoader.generateStaticPaths(cities);
    const pathsFile = join(this.options.outputDir, 'static-paths.json');
    writeFileSync(pathsFile, JSON.stringify(staticPaths, null, 2));
    console.log(`✅ Generated: static-paths.json (${staticPaths.length} paths)`);

    // 6. High-priority cities (for priority generation)
    const highPriorityCities = cities
      .filter(city => 
        city.population > 100000 || 
        city.distanceFromOrlando < 300 ||
        ['FL', 'GA', 'NC', 'SC', 'TN'].includes(city.stateCode)
      )
      .sort((a, b) => a.distanceFromOrlando - b.distanceFromOrlando);

    const priorityFile = join(this.options.outputDir, 'priority-cities.json');
    writeFileSync(priorityFile, JSON.stringify(highPriorityCities, null, 2));
    console.log(`✅ Generated: priority-cities.json (${highPriorityCities.length} priority cities)`);
  }
}

// Analytics interface
interface CityAnalytics {
  total: number;
  byState: Record<string, number>;
  byRegion: Record<string, number>;
  byDistanceFromOrlando: {
    under300: number;
    between300And600: number;
    between600And1000: number;
    over1000: number;
  };
  byPopulation: {
    under10k: number;
    between10kAnd50k: number;
    between50kAnd100k: number;
    between100kAnd500k: number;
    over500k: number;
  };
  byClimateZone: Record<string, number>;
  wordPressCities: number;
  expansionCities: number;
}

// CLI interface
async function main() {
  const args = process.argv.slice(2);
  const options: Partial<GenerationOptions> = {
    verbose: args.includes('--verbose') || args.includes('-v')
  };

  // Parse command line arguments
  for (const arg of args) {
    if (arg.startsWith('--radius=')) {
      options.radius = parseInt(arg.split('=')[1]);
    } else if (arg.startsWith('--max=')) {
      options.maxCities = parseInt(arg.split('=')[1]);
    } else if (arg.startsWith('--output=')) {
      options.outputDir = arg.split('=')[1];
    } else if (arg.startsWith('--sitemap=')) {
      options.sitemapUrl = arg.split('=')[1];
    }
  }

  const generator = new PSEODataGenerator(options);
  await generator.generate();
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Generation failed:', error);
    process.exit(1);
  });
}

export { PSEODataGenerator };
export type { CityAnalytics };