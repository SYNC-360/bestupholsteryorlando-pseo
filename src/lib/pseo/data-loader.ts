// Data loader for PSEO city generation from various sources
import { BaseCityData, PSEOCityData } from './types';
import { estimateCityCoordinates, getDistanceFromOrlando, getTimezone } from './geo-utils';
import { CityDataGenerator } from './city-generator';

export interface WordPressCityData {
  slug: string;
  name: string;
  state?: string;
  stateCode?: string;
  lastmod?: string;
}

export class PSEODataLoader {
  private cityGenerator: CityDataGenerator;

  constructor() {
    this.cityGenerator = new CityDataGenerator();
  }

  /**
   * Extract city data from WordPress sitemap
   */
  async extractWordPressCities(sitemapUrl: string): Promise<WordPressCityData[]> {
    try {
      const response = await fetch(sitemapUrl);
      const xmlText = await response.text();
      
      // Parse XML to extract upholstery location URLs
      const urlMatches = xmlText.match(/https:\/\/bestupholsteryorlando\.com\/upholstery\/([^<]+)\//g) || [];
      
      const cities: WordPressCityData[] = [];
      
      for (const url of urlMatches) {
        const slug = url.replace('https://bestupholsteryorlando.com/upholstery/', '').replace('/', '');
        
        // Skip duplicates or invalid slugs
        if (!slug || cities.some(c => c.slug === slug)) continue;
        
        const cityData = await this.parseWordPressCitySlug(slug);
        if (cityData) {
          cities.push(cityData);
        }
      }
      
      return cities;
    } catch (error) {
      console.error('Error extracting WordPress cities:', error);
      return [];
    }
  }

  /**
   * Parse WordPress city slug into structured data
   */
  private async parseWordPressCitySlug(slug: string): Promise<WordPressCityData | null> {
    // Clean up slug variations
    const cleanSlug = slug
      .replace(/-\d+$/, '') // Remove numbered suffixes like "-2"
      .replace(/^\d+_/, '') // Remove numbered prefixes
      .trim();

    if (!cleanSlug) return null;

    // Convert slug to city name
    const cityName = cleanSlug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    // Try to determine state from known patterns
    const stateInfo = this.determineStateFromSlug(cleanSlug, cityName);

    return {
      slug: cleanSlug,
      name: cityName,
      state: stateInfo.state,
      stateCode: stateInfo.stateCode
    };
  }

  /**
   * Determine state from city slug/name using known patterns
   */
  private determineStateFromSlug(slug: string, cityName: string): { state?: string; stateCode?: string } {
    // Known Florida cities (most WordPress entries are likely Florida-based)
    const floridaCities = [
      'orlando', 'tampa', 'miami', 'jacksonville', 'fort-lauderdale', 'st-petersburg',
      'clearwater', 'sarasota', 'winter-park', 'winter-springs', 'winter-haven',
      'apopka', 'altamonte-springs', 'kissimmee', 'sanford', 'oviedo', 'longwood',
      'deltona', 'palm-coast', 'port-orange', 'daytona-beach', 'new-smyrna-beach',
      'titusville', 'cocoa', 'melbourne', 'palm-bay', 'vero-beach', 'fort-pierce',
      'stuart', 'jupiter', 'west-palm-beach', 'boca-raton', 'delray-beach',
      'boynton-beach', 'lake-worth', 'wellington', 'royal-palm-beach',
      'naples', 'fort-myers', 'cape-coral', 'bonita-springs', 'estero',
      'bradenton', 'venice', 'englewood', 'port-charlotte', 'punta-gorda',
      'lakeland', 'bartow', 'sebring', 'avon-park', 'lake-wales',
      'ocala', 'gainesville', 'leesburg', 'mount-dora', 'clermont', 'tavares'
    ];

    // Other southeastern cities
    const georgiaCities = ['atlanta', 'savannah', 'augusta', 'columbus', 'macon', 'albany'];
    const northCarolinaCities = ['charlotte', 'raleigh', 'greensboro', 'durham', 'winston-salem', 'fayetteville'];
    const southCarolinaCities = ['charleston', 'columbia', 'greenville', 'spartanburg', 'rock-hill'];
    const tennesseeCities = ['nashville', 'memphis', 'knoxville', 'chattanooga', 'clarksville', 'murfreesboro'];
    const alabamaCities = ['birmingham', 'montgomery', 'huntsville', 'mobile', 'tuscaloosa', 'hoover'];

    if (floridaCities.includes(slug.toLowerCase())) {
      return { state: 'Florida', stateCode: 'FL' };
    }
    if (georgiaCities.includes(slug.toLowerCase())) {
      return { state: 'Georgia', stateCode: 'GA' };
    }
    if (northCarolinaCities.includes(slug.toLowerCase())) {
      return { state: 'North Carolina', stateCode: 'NC' };
    }
    if (southCarolinaCities.includes(slug.toLowerCase())) {
      return { state: 'South Carolina', stateCode: 'SC' };
    }
    if (tennesseeCities.includes(slug.toLowerCase())) {
      return { state: 'Tennessee', stateCode: 'TN' };
    }
    if (alabamaCities.includes(slug.toLowerCase())) {
      return { state: 'Alabama', stateCode: 'AL' };
    }

    // Default assumption for unknown cities (most WordPress entries are likely Florida)
    return { state: 'Florida', stateCode: 'FL' };
  }

  /**
   * Convert WordPress city data to base city data
   */
  convertWordPressCityToBase(wpCity: WordPressCityData): BaseCityData {
    const stateCode = wpCity.stateCode || 'FL';
    const state = wpCity.state || 'Florida';
    
    // Estimate population based on known cities or use default
    const population = this.estimatePopulation(wpCity.name, stateCode);
    
    // Generate coordinates
    const coordinates = estimateCityCoordinates(wpCity.name, stateCode, population);
    
    // Estimate county (simplified)
    const county = this.estimateCounty(wpCity.name, stateCode);

    return {
      name: wpCity.name,
      state,
      stateCode,
      county,
      population,
      coordinates,
      timezone: getTimezone(coordinates)
    };
  }

  /**
   * Estimate population for cities
   */
  private estimatePopulation(cityName: string, stateCode: string): number {
    // Known major cities with approximate populations
    const knownPopulations: Record<string, number> = {
      // Florida
      'Orlando': 280000,
      'Tampa': 384000,
      'Miami': 463000,
      'Jacksonville': 950000,
      'Fort Lauderdale': 183000,
      'St Petersburg': 265000,
      'Clearwater': 115000,
      'Sarasota': 58000,
      'Winter Park': 29000,
      'Kissimmee': 73000,
      'Sanford': 61000,
      'Apopka': 55000,
      
      // Other states
      'Atlanta': 500000,
      'Charlotte': 875000,
      'Nashville': 695000,
      'Charleston': 140000,
      'Birmingham': 210000
    };

    const key = cityName;
    if (knownPopulations[key]) {
      return knownPopulations[key];
    }

    // Estimate based on name patterns and state
    if (cityName.includes('Beach') || cityName.includes('Springs')) {
      return 15000; // Tourist/resort towns
    }
    
    if (cityName.includes('Park') || cityName.includes('Gardens')) {
      return 25000; // Suburban areas
    }
    
    if (stateCode === 'FL') {
      return 35000; // Florida average for smaller cities
    }
    
    return 25000; // General default
  }

  /**
   * Estimate county for cities
   */
  private estimateCounty(cityName: string, stateCode: string): string {
    // Known city-county mappings
    const countyMappings: Record<string, Record<string, string>> = {
      'FL': {
        'Orlando': 'Orange County',
        'Tampa': 'Hillsborough County',
        'Miami': 'Miami-Dade County',
        'Jacksonville': 'Duval County',
        'Fort Lauderdale': 'Broward County',
        'St Petersburg': 'Pinellas County',
        'Clearwater': 'Pinellas County',
        'Sarasota': 'Sarasota County',
        'Winter Park': 'Orange County',
        'Kissimmee': 'Osceola County',
        'Sanford': 'Seminole County'
      },
      'GA': {
        'Atlanta': 'Fulton County',
        'Savannah': 'Chatham County',
        'Augusta': 'Richmond County'
      },
      'NC': {
        'Charlotte': 'Mecklenburg County',
        'Raleigh': 'Wake County'
      }
    };

    const stateCounties = countyMappings[stateCode];
    if (stateCounties && stateCounties[cityName]) {
      return stateCounties[cityName];
    }

    // Generate generic county name
    return `${cityName} County`;
  }

  /**
   * Generate new cities for expansion beyond existing WordPress data
   */
  async generateExpansionCities(radiusMiles: number, targetCount: number): Promise<BaseCityData[]> {
    const cities: BaseCityData[] = [];
    
    // Major US cities by state for expansion
    const expansionCities: Record<string, Array<{name: string, population: number}>> = {
      'TX': [
        { name: 'Houston', population: 2300000 },
        { name: 'San Antonio', population: 1530000 },
        { name: 'Dallas', population: 1340000 },
        { name: 'Austin', population: 965000 },
        { name: 'Fort Worth', population: 895000 },
        { name: 'El Paso', population: 681000 },
        { name: 'Arlington', population: 395000 },
        { name: 'Corpus Christi', population: 325000 },
        { name: 'Plano', population: 290000 },
        { name: 'Lubbock', population: 260000 }
      ],
      'NY': [
        { name: 'New York City', population: 8400000 },
        { name: 'Buffalo', population: 255000 },
        { name: 'Rochester', population: 205000 },
        { name: 'Yonkers', population: 200000 },
        { name: 'Syracuse', population: 145000 },
        { name: 'Albany', population: 97000 },
        { name: 'New Rochelle', population: 79000 }
      ],
      'CA': [
        { name: 'Los Angeles', population: 4000000 },
        { name: 'San Diego', population: 1420000 },
        { name: 'San Jose', population: 1030000 },
        { name: 'San Francisco', population: 875000 },
        { name: 'Fresno', population: 545000 },
        { name: 'Sacramento', population: 525000 },
        { name: 'Long Beach', population: 465000 },
        { name: 'Oakland', population: 430000 }
      ],
      'PA': [
        { name: 'Philadelphia', population: 1580000 },
        { name: 'Pittsburgh', population: 305000 },
        { name: 'Allentown', population: 125000 },
        { name: 'Erie', population: 97000 },
        { name: 'Reading', population: 95000 }
      ],
      'OH': [
        { name: 'Columbus', population: 905000 },
        { name: 'Cleveland', population: 385000 },
        { name: 'Cincinnati', population: 310000 },
        { name: 'Toledo', population: 270000 },
        { name: 'Akron', population: 195000 },
        { name: 'Dayton', population: 140000 }
      ]
      // Add more states as needed...
    };

    // Generate cities within radius
    for (const [stateCode, stateCities] of Object.entries(expansionCities)) {
      for (const cityInfo of stateCities) {
        if (cities.length >= targetCount) break;

        const coordinates = estimateCityCoordinates(cityInfo.name, stateCode, cityInfo.population);
        const distance = getDistanceFromOrlando(coordinates);
        
        if (distance <= radiusMiles) {
          const stateNames: Record<string, string> = {
            'TX': 'Texas',
            'NY': 'New York', 
            'CA': 'California',
            'PA': 'Pennsylvania',
            'OH': 'Ohio'
          };

          cities.push({
            name: cityInfo.name,
            state: stateNames[stateCode] || stateCode,
            stateCode,
            county: `${cityInfo.name} County`,
            population: cityInfo.population,
            coordinates,
            timezone: getTimezone(coordinates)
          });
        }
      }
      
      if (cities.length >= targetCount) break;
    }

    return cities;
  }

  /**
   * Load all PSEO data: existing WordPress + new expansion cities
   */
  async loadAllPSEOData(options: {
    sitemapUrl: string;
    expansionRadius: number;
    maxCities: number;
  }): Promise<PSEOCityData[]> {
    const allCities: PSEOCityData[] = [];
    
    try {
      // 1. Load existing WordPress cities
      console.log('Loading WordPress cities...');
      const wpCities = await this.extractWordPressCities(options.sitemapUrl);
      console.log(`Found ${wpCities.length} WordPress cities`);
      
      for (const wpCity of wpCities) {
        const baseData = this.convertWordPressCityToBase(wpCity);
        const pseoData = this.cityGenerator.generatePSEOData(baseData);
        allCities.push(pseoData);
      }
      
      // 2. Generate expansion cities
      const remaining = options.maxCities - allCities.length;
      if (remaining > 0) {
        console.log(`Generating ${remaining} expansion cities...`);
        const expansionCities = await this.generateExpansionCities(options.expansionRadius, remaining);
        
        for (const baseData of expansionCities) {
          const pseoData = this.cityGenerator.generatePSEOData(baseData);
          allCities.push(pseoData);
        }
      }
      
      console.log(`Total PSEO cities loaded: ${allCities.length}`);
      return allCities;
      
    } catch (error) {
      console.error('Error loading PSEO data:', error);
      return allCities;
    }
  }

  /**
   * Generate static paths for Next.js
   */
  generateStaticPaths(cities: PSEOCityData[]): Array<{ params: { location: string } }> {
    return cities.map(city => ({
      params: {
        location: city.name.toLowerCase().replace(/\s+/g, '-')
      }
    }));
  }

  /**
   * Get city data by slug
   */
  getCityBySlug(cities: PSEOCityData[], slug: string): PSEOCityData | undefined {
    return cities.find(city => 
      city.name.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
    );
  }
}