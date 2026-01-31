// PSEO (Programmatic SEO) types for location-based pages
export interface BaseCityData {
  name: string;
  state: string;
  stateCode: string;
  county: string;
  population: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  timezone: string;
  elevation?: number;
  founded?: number;
}

export interface ClimateZone {
  id: string;
  name: string;
  description: string;
  challenge: string;
  impact: string;
  solutions: string[];
  seasonality: 'low' | 'moderate' | 'high';
}

export interface DemographicData {
  medianAge: number;
  medianIncome: number;
  homeOwnershipRate: number;
  medianHomeValue: number;
  educationLevel: 'high_school' | 'some_college' | 'college' | 'graduate';
  primaryIndustries: string[];
}

export interface ArchitectureData {
  predominantStyles: string[];
  constructionEra: string;
  housingTypes: ('single_family' | 'townhome' | 'condo' | 'apartment')[];
  historicDistricts: boolean;
  newConstruction: 'low' | 'moderate' | 'high';
}

export interface LifestyleData {
  pace: 'relaxed' | 'moderate' | 'fast';
  primaryActivities: string[];
  familyOriented: boolean;
  outdoorCulture: boolean;
  culturalScene: 'limited' | 'moderate' | 'vibrant';
  entertainingStyle: 'casual' | 'mixed' | 'formal';
}

export interface PSEOCityData extends BaseCityData {
  climateZone: ClimateZone;
  demographics: DemographicData;
  architecture: ArchitectureData;
  lifestyle: LifestyleData;
  nearbyMajorCity?: string;
  distanceFromOrlando: number;
  lastUpdated: string;
}

export interface ContentTemplate {
  id: string;
  name: string;
  populationMin?: number;
  populationMax?: number;
  climateZones?: string[];
  regions?: string[];
  hero: {
    title: string;
    description: string;
  };
  sections: {
    climate: string;
    architecture: string;
    lifestyle: string;
    serviceArea: string;
  };
}

export interface SEOTemplate {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  h2s: string[];
}

// Climate zone definitions
export const CLIMATE_ZONES: Record<string, ClimateZone> = {
  humid_subtropical: {
    id: 'humid_subtropical',
    name: 'Humid Subtropical',
    description: 'Hot, humid summers with mild winters',
    challenge: 'High humidity and temperature variations require moisture-resistant materials',
    impact: 'Fabrics must handle humidity, prevent mold, and resist fading from intense sun',
    solutions: [
      'Performance synthetic blends',
      'Moisture-wicking treatments', 
      'UV-resistant materials',
      'Quick-dry outdoor fabrics'
    ],
    seasonality: 'moderate'
  },
  
  humid_continental: {
    id: 'humid_continental',
    name: 'Humid Continental',
    description: 'Hot summers and cold winters with significant seasonal variation',
    challenge: 'Extreme temperature swings and varying humidity levels',
    impact: 'Fabrics need versatility for heating/cooling cycles and seasonal use patterns',
    solutions: [
      'All-season performance materials',
      'Temperature-adaptive fibers',
      'Durable synthetic blends',
      'Multi-climate treatments'
    ],
    seasonality: 'high'
  },
  
  oceanic: {
    id: 'oceanic',
    name: 'Oceanic/Marine',
    description: 'Moderate temperatures with high humidity and salt air exposure',
    challenge: 'Coastal conditions with salt air, humidity, and UV exposure',
    impact: 'Materials must resist salt corrosion, handle moisture, and prevent UV damage',
    solutions: [
      'Marine-grade fabrics',
      'Salt-resistant treatments',
      'UV-protective coatings',
      'Moisture-barrier materials'
    ],
    seasonality: 'low'
  },
  
  arid: {
    id: 'arid',
    name: 'Arid/Desert',
    description: 'Hot, dry conditions with intense UV exposure and temperature extremes',
    challenge: 'Extreme heat, low humidity, and intense UV radiation',
    impact: 'Fabrics need UV protection, heat resistance, and dust/sand resistance',
    solutions: [
      'UV-blocking materials',
      'Heat-resistant synthetics',
      'Dust-resistant weaves',
      'Fade-resistant treatments'
    ],
    seasonality: 'moderate'
  },
  
  continental: {
    id: 'continental',
    name: 'Continental',
    description: 'Wide temperature range with dry conditions',
    challenge: 'Large temperature variations and low humidity',
    impact: 'Materials need flexibility for temperature extremes and low moisture resistance',
    solutions: [
      'Temperature-stable fibers',
      'Flexible synthetic blends',
      'All-weather performance',
      'Thermal-adaptive materials'
    ],
    seasonality: 'high'
  }
};

// Population-based city classifications
export type CitySize = 'rural' | 'small_town' | 'suburban' | 'small_city' | 'medium_city' | 'large_city' | 'major_metro';

export const getCitySize = (population: number): CitySize => {
  if (population < 2500) return 'rural';
  if (population < 10000) return 'small_town';
  if (population < 50000) return 'suburban';
  if (population < 100000) return 'small_city';
  if (population < 300000) return 'medium_city';
  if (population < 1000000) return 'large_city';
  return 'major_metro';
};

// State groupings for regional content
export const REGIONS = {
  southeast: ['FL', 'GA', 'AL', 'SC', 'NC', 'TN', 'KY', 'MS'],
  northeast: ['NY', 'NJ', 'PA', 'CT', 'MA', 'RI', 'VT', 'NH', 'ME', 'MD', 'DE'],
  midwest: ['OH', 'IN', 'IL', 'MI', 'WI', 'MN', 'IA', 'MO', 'ND', 'SD', 'NE', 'KS'],
  southwest: ['TX', 'OK', 'AR', 'LA', 'NM', 'AZ'],
  west: ['CA', 'NV', 'OR', 'WA', 'ID', 'UT', 'CO', 'WY', 'MT'],
  other: ['AK', 'HI']
};

export const getRegion = (stateCode: string): keyof typeof REGIONS => {
  for (const [region, states] of Object.entries(REGIONS)) {
    if (states.includes(stateCode)) {
      return region as keyof typeof REGIONS;
    }
  }
  return 'other';
};