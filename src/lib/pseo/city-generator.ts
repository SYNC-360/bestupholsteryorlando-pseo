import { CityData } from '@/types';
import { 
  PSEOCityData, 
  BaseCityData, 
  ClimateZone, 
  DemographicData, 
  ArchitectureData, 
  LifestyleData,
  CLIMATE_ZONES,
  getCitySize,
  getRegion,
  CitySize
} from './types';
import { getDistanceFromOrlando } from './geo-utils';

export class CityDataGenerator {
  /**
   * Generate complete CityData from basic city information
   */
  generateCityData(baseData: BaseCityData): CityData {
    const pseoData = this.generatePSEOData(baseData);
    
    return this.convertToLegacyCityData(pseoData);
  }

  /**
   * Generate rich PSEO data from base city data
   */
  generatePSEOData(baseData: BaseCityData): PSEOCityData {
    const climateZone = this.determineClimateZone(baseData.coordinates);
    const demographics = this.generateDemographics(baseData);
    const architecture = this.generateArchitecture(baseData);
    const lifestyle = this.generateLifestyle(baseData, demographics);
    const distanceFromOrlando = getDistanceFromOrlando(baseData.coordinates);

    return {
      ...baseData,
      climateZone,
      demographics,
      architecture,
      lifestyle,
      distanceFromOrlando,
      nearbyMajorCity: this.findNearbyMajorCity(baseData),
      lastUpdated: new Date().toISOString()
    };
  }

  /**
   * Determine climate zone based on coordinates
   */
  private determineClimateZone(coords: { lat: number; lng: number }): ClimateZone {
    const { lat, lng } = coords;

    // Simplified Köppen climate classification for US
    if (lat < 25.5) {
      return CLIMATE_ZONES.humid_subtropical; // South Florida
    }
    
    if (lat < 32 && lng > -84) {
      return CLIMATE_ZONES.humid_subtropical; // Gulf Coast
    }
    
    if (lat < 36 && lng > -84) {
      return CLIMATE_ZONES.humid_subtropical; // Southeast
    }
    
    if (lat > 45 && lng < -90) {
      return CLIMATE_ZONES.continental; // Northern Plains/Great Lakes
    }
    
    if (lng < -100 && lat > 35) {
      return CLIMATE_ZONES.arid; // Southwest/Desert
    }
    
    if (lng < -120) {
      return CLIMATE_ZONES.oceanic; // West Coast
    }
    
    // Default for most of eastern/central US
    return CLIMATE_ZONES.humid_continental;
  }

  /**
   * Generate demographic data based on city characteristics
   */
  private generateDemographics(baseData: BaseCityData): DemographicData {
    const citySize = getCitySize(baseData.population);
    const region = getRegion(baseData.stateCode);
    
    // Base demographics vary by region and city size
    const baseIncome = this.getBaseIncome(region, citySize);
    const baseHomeValue = this.getBaseHomeValue(region, citySize);
    
    return {
      medianAge: this.getMedianAge(citySize, region),
      medianIncome: baseIncome,
      homeOwnershipRate: this.getHomeOwnershipRate(citySize),
      medianHomeValue: baseHomeValue,
      educationLevel: this.getEducationLevel(citySize, region),
      primaryIndustries: this.getPrimaryIndustries(baseData.stateCode, citySize)
    };
  }

  /**
   * Generate architecture data based on location and characteristics
   */
  private generateArchitecture(baseData: BaseCityData): ArchitectureData {
    const citySize = getCitySize(baseData.population);
    const region = getRegion(baseData.stateCode);
    const isHistoric = Boolean(baseData.founded && baseData.founded < 1950);
    
    return {
      predominantStyles: this.getArchitecturalStyles(region, isHistoric),
      constructionEra: this.getConstructionEra(baseData.founded),
      housingTypes: this.getHousingTypes(citySize),
      historicDistricts: isHistoric && baseData.population > 10000,
      newConstruction: this.getNewConstructionLevel(citySize, region)
    };
  }

  /**
   * Generate lifestyle data based on demographics and location
   */
  private generateLifestyle(baseData: BaseCityData, demographics: DemographicData): LifestyleData {
    const citySize = getCitySize(baseData.population);
    const region = getRegion(baseData.stateCode);
    
    return {
      pace: this.getLifestylePace(citySize),
      primaryActivities: this.getPrimaryActivities(region, baseData.coordinates),
      familyOriented: demographics.medianAge < 40 && citySize !== 'major_metro',
      outdoorCulture: this.hasOutdoorCulture(region, baseData.coordinates),
      culturalScene: this.getCulturalScene(citySize),
      entertainingStyle: this.getEntertainingStyle(demographics.medianIncome, region)
    };
  }

  /**
   * Convert PSEO data to legacy CityData format
   */
  private convertToLegacyCityData(pseoData: PSEOCityData): CityData {
    const climateText = this.generateClimateText(pseoData);
    const architectureText = this.generateArchitectureText(pseoData);
    const lifestyleText = this.generateLifestyleText(pseoData);
    
    return {
      city: pseoData.name,
      state: pseoData.state,
      climate: {
        challenge: pseoData.climateZone.challenge,
        impact: pseoData.climateZone.impact,
        solutions: pseoData.climateZone.solutions,
        specialFocus: this.generateSpecialFocus(pseoData)
      },
      architecture: {
        styles: pseoData.architecture.predominantStyles,
        considerations: architectureText,
        trends: this.generateArchitectureTrends(pseoData)
      },
      lifestyle: {
        pace: lifestyleText,
        priorities: this.generateLifestylePriorities(pseoData),
        preferences: this.generatePreferences(pseoData)
      },
      // Optional sections based on city size/importance
      ...(getCitySize(pseoData.population) !== 'rural' && {
        neighborhoods: this.generateNeighborhoods(pseoData)
      }),
      ...(pseoData.population > 50000 && {
        successStories: this.generateSuccessStories(pseoData)
      })
    };
  }

  // Helper methods for data generation
  private getBaseIncome(region: string, citySize: CitySize): number {
    const baseIncomes = {
      northeast: { rural: 45000, small_town: 55000, suburban: 75000, small_city: 65000, medium_city: 70000, large_city: 80000, major_metro: 85000 },
      west: { rural: 50000, small_town: 60000, suburban: 85000, small_city: 70000, medium_city: 75000, large_city: 90000, major_metro: 95000 },
      southeast: { rural: 40000, small_town: 50000, suburban: 65000, small_city: 55000, medium_city: 60000, large_city: 70000, major_metro: 75000 },
      midwest: { rural: 45000, small_town: 55000, suburban: 70000, small_city: 60000, medium_city: 65000, large_city: 75000, major_metro: 80000 },
      southwest: { rural: 42000, small_town: 52000, suburban: 68000, small_city: 58000, medium_city: 63000, large_city: 73000, major_metro: 78000 },
      other: { rural: 50000, small_town: 60000, suburban: 80000, small_city: 70000, medium_city: 75000, large_city: 85000, major_metro: 90000 }
    };
    
    return baseIncomes[region as keyof typeof baseIncomes]?.[citySize] || 60000;
  }

  private getBaseHomeValue(region: string, citySize: CitySize): number {
    const income = this.getBaseIncome(region, citySize);
    const multipliers = {
      northeast: 4.5, west: 5.0, southeast: 3.0, midwest: 3.2, southwest: 3.5, other: 4.0
    };
    return income * (multipliers[region as keyof typeof multipliers] || 3.5);
  }

  private getMedianAge(citySize: CitySize, region: string): number {
    const baseAges = {
      rural: 42, small_town: 40, suburban: 38, small_city: 36, medium_city: 35, large_city: 34, major_metro: 33
    };
    return baseAges[citySize];
  }

  private getHomeOwnershipRate(citySize: CitySize): number {
    const rates = {
      rural: 0.85, small_town: 0.80, suburban: 0.75, small_city: 0.65, medium_city: 0.60, large_city: 0.55, major_metro: 0.50
    };
    return rates[citySize];
  }

  private getEducationLevel(citySize: CitySize, region: string): DemographicData['educationLevel'] {
    if (citySize === 'major_metro' || citySize === 'large_city') return 'college';
    if (region === 'northeast' || region === 'west') return 'some_college';
    return 'high_school';
  }

  private getPrimaryIndustries(stateCode: string, citySize: CitySize): string[] {
    const stateIndustries: Record<string, string[]> = {
      'FL': ['Tourism', 'Agriculture', 'Aerospace', 'International Trade'],
      'GA': ['Agriculture', 'Manufacturing', 'Logistics', 'Film Production'],
      'NC': ['Technology', 'Banking', 'Textiles', 'Agriculture'],
      'SC': ['Manufacturing', 'Tourism', 'Agriculture', 'Automotive'],
      'TN': ['Music Industry', 'Healthcare', 'Manufacturing', 'Agriculture'],
      'TX': ['Energy', 'Technology', 'Agriculture', 'Aerospace'],
      'CA': ['Technology', 'Entertainment', 'Agriculture', 'Tourism'],
      'NY': ['Finance', 'Media', 'Real Estate', 'Technology']
    };

    const industries = stateIndustries[stateCode] || ['Manufacturing', 'Service', 'Agriculture', 'Retail'];
    
    // Adjust based on city size
    if (citySize === 'rural' || citySize === 'small_town') {
      return industries.filter(i => ['Agriculture', 'Manufacturing', 'Service'].includes(i));
    }
    
    return industries.slice(0, 3);
  }

  private getArchitecturalStyles(region: string, isHistoric?: boolean): string[] {
    const regionalStyles: Record<string, string[]> = {
      southeast: ['Southern Colonial', 'Craftsman', 'Ranch', 'Contemporary'],
      northeast: ['Colonial', 'Victorian', 'Cape Cod', 'Modern'],
      midwest: ['Prairie', 'Tudor', 'Craftsman', 'Ranch'],
      southwest: ['Spanish Colonial', 'Adobe', 'Ranch', 'Contemporary'],
      west: ['Spanish Colonial', 'Mid-Century Modern', 'Craftsman', 'Contemporary'],
      other: ['Regional Traditional', 'Modern', 'Contemporary']
    };

    let styles = regionalStyles[region] || regionalStyles.other;
    
    if (isHistoric) {
      styles = styles.slice(0, 2); // Emphasize historic styles
    }
    
    return styles;
  }

  private getConstructionEra(founded?: number): string {
    if (!founded) return 'Mixed Era';
    if (founded < 1900) return 'Historic (Pre-1900)';
    if (founded < 1950) return 'Early 20th Century';
    if (founded < 1980) return 'Mid-Century';
    return 'Modern Era';
  }

  private getHousingTypes(citySize: CitySize): ArchitectureData['housingTypes'] {
    switch (citySize) {
      case 'rural':
      case 'small_town':
        return ['single_family'];
      case 'suburban':
        return ['single_family', 'townhome'];
      case 'small_city':
      case 'medium_city':
        return ['single_family', 'townhome', 'condo'];
      default:
        return ['single_family', 'townhome', 'condo', 'apartment'];
    }
  }

  private getNewConstructionLevel(citySize: CitySize, region: string): ArchitectureData['newConstruction'] {
    if (region === 'southeast' || region === 'southwest') return 'high';
    if (citySize === 'suburban' || citySize === 'small_city') return 'moderate';
    return 'low';
  }

  private getLifestylePace(citySize: CitySize): LifestyleData['pace'] {
    if (citySize === 'major_metro' || citySize === 'large_city') return 'fast';
    if (citySize === 'rural' || citySize === 'small_town') return 'relaxed';
    return 'moderate';
  }

  private getPrimaryActivities(region: string, coords: { lat: number; lng: number }): string[] {
    const baseActivities = ['Family gatherings', 'Home entertaining', 'Community events'];
    
    // Add region-specific activities
    if (region === 'southeast' && coords.lat < 32) {
      baseActivities.push('Beach activities', 'Water sports');
    }
    if (region === 'west') {
      baseActivities.push('Outdoor recreation', 'Hiking');
    }
    if (region === 'northeast') {
      baseActivities.push('Cultural events', 'Historic tours');
    }
    
    return baseActivities;
  }

  private hasOutdoorCulture(region: string, coords: { lat: number; lng: number }): boolean {
    return region === 'west' || region === 'southwest' || 
           (region === 'southeast' && coords.lat < 32); // Coastal areas
  }

  private getCulturalScene(citySize: CitySize): LifestyleData['culturalScene'] {
    if (citySize === 'major_metro' || citySize === 'large_city') return 'vibrant';
    if (citySize === 'medium_city' || citySize === 'small_city') return 'moderate';
    return 'limited';
  }

  private getEntertainingStyle(income: number, region: string): LifestyleData['entertainingStyle'] {
    if (income > 100000 && (region === 'northeast' || region === 'west')) return 'formal';
    if (region === 'southeast' || region === 'southwest') return 'casual';
    return 'mixed';
  }

  // Content generation methods
  private generateSpecialFocus(pseoData: PSEOCityData): string {
    const citySize = getCitySize(pseoData.population);
    const region = getRegion(pseoData.stateCode);
    
    if (citySize === 'major_metro') {
      return `From urban sophistication to suburban comfort, find fabrics that match ${pseoData.name}'s diverse lifestyle.`;
    }
    
    if (region === 'southeast' && pseoData.coordinates.lat < 32) {
      return `Coastal living in ${pseoData.name} requires fabrics that handle salt air and humidity while maintaining elegance.`;
    }
    
    return `Discover fabrics perfect for ${pseoData.name}'s unique ${pseoData.climateZone.name.toLowerCase()} climate and community character.`;
  }

  private generateClimateText(pseoData: PSEOCityData): string {
    const season = pseoData.climateZone.seasonality;
    const climate = pseoData.climateZone.name;
    
    return `${pseoData.name}'s ${climate.toLowerCase()} climate ${season === 'high' ? 'with significant seasonal changes' : 'provides consistent conditions'} for fabric selection.`;
  }

  private generateArchitectureText(pseoData: PSEOCityData): string {
    const styles = pseoData.architecture.predominantStyles.slice(0, 2).join(' and ');
    const era = pseoData.architecture.constructionEra;
    
    return `${era} homes featuring ${styles} architecture influence fabric and design choices throughout ${pseoData.name}.`;
  }

  private generateLifestyleText(pseoData: PSEOCityData): string {
    const pace = pseoData.lifestyle.pace;
    const activities = pseoData.lifestyle.primaryActivities.slice(0, 2).join(' and ');
    
    return `${pace.charAt(0).toUpperCase() + pace.slice(1)}-paced lifestyle focused on ${activities.toLowerCase()}`;
  }

  private generateLifestylePriorities(pseoData: PSEOCityData): string[] {
    const priorities = ['Durable family-friendly materials'];
    
    if (pseoData.demographics.homeOwnershipRate > 0.7) {
      priorities.push('Long-term investment quality');
    }
    
    if (pseoData.lifestyle.entertainingStyle === 'formal') {
      priorities.push('Sophisticated entertaining spaces');
    } else {
      priorities.push('Comfortable everyday living');
    }
    
    return priorities;
  }

  private generatePreferences(pseoData: PSEOCityData): string {
    const income = pseoData.demographics.medianIncome;
    
    if (income > 80000) {
      return 'Premium materials with superior craftsmanship and lasting beauty';
    } else if (income > 60000) {
      return 'Quality materials that balance style, durability, and value';
    } else {
      return 'Practical, beautiful fabrics that provide excellent value and performance';
    }
  }

  private generateArchitectureTrends(pseoData: PSEOCityData): string {
    const construction = pseoData.architecture.newConstruction;
    const size = getCitySize(pseoData.population);
    
    if (construction === 'high') {
      return 'Modern performance meets traditional comfort in new construction';
    } else if (size === 'major_metro') {
      return 'Urban renewal bringing contemporary style to established neighborhoods';
    } else {
      return 'Preserving character while updating for modern family needs';
    }
  }

  private generateNeighborhoods(pseoData: PSEOCityData): CityData['neighborhoods'] {
    const citySize = getCitySize(pseoData.population);
    
    if (citySize === 'rural' || citySize === 'small_town') return undefined;
    
    // Generate 2-3 neighborhoods based on city characteristics
    return [
      {
        area: 'Historic Downtown',
        style: 'Traditional Renovation',
        description: `${pseoData.name}'s historic core with renovated period homes`,
        fabricChoices: ['Heritage-inspired textiles', 'Classic patterns', 'Durable traditional'],
        approach: 'Preserve character while adding modern performance'
      },
      {
        area: 'New Development',
        style: 'Contemporary Family',
        description: 'Growing residential areas with modern family homes',
        fabricChoices: ['Performance family fabrics', 'Easy-care materials', 'Kid-friendly luxury'],
        approach: 'Modern convenience with lasting style'
      }
    ];
  }

  private generateSuccessStories(pseoData: PSEOCityData): CityData['successStories'] {
    const region = getRegion(pseoData.stateCode);
    
    return [
      {
        name: `${pseoData.name} Resident Sarah M.`,
        location: 'Historic District',
        project: `Period home restoration with climate-appropriate fabrics`,
        result: `Beautiful ${pseoData.climateZone.name.toLowerCase()} climate performance with authentic style`
      },
      {
        name: `Local Family David K.`,
        location: 'Suburban Area', 
        project: 'Complete living room refresh for busy family lifestyle',
        result: `Durable, beautiful fabrics perfect for ${pseoData.name} family life`
      }
    ];
  }

  private findNearbyMajorCity(baseData: BaseCityData): string | undefined {
    // Simple implementation - in reality would calculate distances to major metros
    const majorCities: Record<string, string[]> = {
      'FL': ['Orlando', 'Miami', 'Tampa', 'Jacksonville'],
      'GA': ['Atlanta', 'Savannah', 'Augusta'],
      'NC': ['Charlotte', 'Raleigh', 'Greensboro'],
      'SC': ['Charleston', 'Columbia', 'Greenville'],
      'TN': ['Nashville', 'Memphis', 'Knoxville'],
    };

    const stateCities = majorCities[baseData.stateCode];
    if (!stateCities) return undefined;

    // Return the first major city that's not the same as this city
    return stateCities.find(city => city.toLowerCase() !== baseData.name.toLowerCase());
  }
}