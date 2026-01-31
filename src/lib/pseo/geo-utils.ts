// Geographic utilities for PSEO city generation

export interface Coordinates {
  lat: number;
  lng: number;
}

// Orlando, FL coordinates
const ORLANDO_COORDS: Coordinates = {
  lat: 28.5383,
  lng: -81.3792
};

/**
 * Calculate distance between two points using Haversine formula
 * Returns distance in miles
 */
export function calculateDistance(coord1: Coordinates, coord2: Coordinates): number {
  const R = 3959; // Earth's radius in miles
  const dLat = toRadians(coord2.lat - coord1.lat);
  const dLng = toRadians(coord2.lng - coord1.lng);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(coord1.lat)) * Math.cos(toRadians(coord2.lat)) * 
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  return R * c;
}

/**
 * Get distance from Orlando, FL
 */
export function getDistanceFromOrlando(coordinates: Coordinates): number {
  return Math.round(calculateDistance(ORLANDO_COORDS, coordinates));
}

/**
 * Convert degrees to radians
 */
function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

/**
 * Generate a bounding box around Orlando for a given radius
 */
export function getOrlandoBounds(radiusMiles: number): {
  north: number;
  south: number;
  east: number;
  west: number;
} {
  // Approximate: 1 degree lat = 69 miles, 1 degree lng = 54.6 miles (at Orlando's latitude)
  const latDelta = radiusMiles / 69;
  const lngDelta = radiusMiles / 54.6;
  
  return {
    north: ORLANDO_COORDS.lat + latDelta,
    south: ORLANDO_COORDS.lat - latDelta,
    east: ORLANDO_COORDS.lng + lngDelta,
    west: ORLANDO_COORDS.lng - lngDelta
  };
}

/**
 * Check if coordinates are within radius of Orlando
 */
export function isWithinOrlandoRadius(coordinates: Coordinates, radiusMiles: number): boolean {
  return getDistanceFromOrlando(coordinates) <= radiusMiles;
}

/**
 * Generate coordinates for cities within expansion zones
 */
export interface ExpansionZone {
  name: string;
  radiusMiles: number;
  priority: 'high' | 'medium' | 'low';
}

export const EXPANSION_ZONES: ExpansionZone[] = [
  { name: 'Core Service Area', radiusMiles: 300, priority: 'high' },
  { name: 'Extended Southeast', radiusMiles: 600, priority: 'high' },
  { name: '1000-Mile Expansion', radiusMiles: 1000, priority: 'medium' },
  { name: 'National Footprint', radiusMiles: 2500, priority: 'low' }
];

/**
 * Get expansion zone for a given distance from Orlando
 */
export function getExpansionZone(distanceFromOrlando: number): ExpansionZone | undefined {
  return EXPANSION_ZONES.find(zone => distanceFromOrlando <= zone.radiusMiles);
}

/**
 * US State boundaries (approximate center coordinates)
 */
export const STATE_CENTERS: Record<string, Coordinates> = {
  // Southeast (Priority 1)
  'FL': { lat: 27.7663, lng: -81.6868 },
  'GA': { lat: 33.0406, lng: -83.6431 },
  'AL': { lat: 32.3617, lng: -86.2792 },
  'SC': { lat: 33.8569, lng: -80.9450 },
  'NC': { lat: 35.6301, lng: -79.8064 },
  'TN': { lat: 35.7478, lng: -86.6923 },
  'KY': { lat: 37.6681, lng: -84.6701 },
  'MS': { lat: 32.7419, lng: -89.6726 },
  'LA': { lat: 31.1695, lng: -91.8678 },
  
  // 1000-Mile Expansion (Priority 2)
  'VA': { lat: 37.7693, lng: -78.1700 },
  'WV': { lat: 38.4912, lng: -80.9540 },
  'MD': { lat: 39.0639, lng: -76.8021 },
  'DE': { lat: 39.3185, lng: -75.5071 },
  'PA': { lat: 40.5908, lng: -77.2098 },
  'NJ': { lat: 40.2989, lng: -74.5210 },
  'NY': { lat: 42.1657, lng: -74.9481 },
  'CT': { lat: 41.5978, lng: -72.7554 },
  'RI': { lat: 41.6809, lng: -71.5118 },
  'MA': { lat: 42.2352, lng: -71.0275 },
  'TX': { lat: 31.0545, lng: -97.5635 },
  'AR': { lat: 34.9697, lng: -92.3731 },
  'OK': { lat: 35.5653, lng: -96.9289 },
  'KS': { lat: 38.5266, lng: -96.7265 },
  'MO': { lat: 38.4561, lng: -92.2884 },
  'IA': { lat: 42.0115, lng: -93.2105 },
  'IL': { lat: 40.3363, lng: -89.0022 },
  'IN': { lat: 39.8647, lng: -86.2604 },
  'OH': { lat: 40.3888, lng: -82.7649 },
  'MI': { lat: 43.3266, lng: -84.5361 },
  
  // National Expansion (Priority 3)
  'WI': { lat: 44.2619, lng: -89.6165 },
  'MN': { lat: 45.7326, lng: -93.9196 },
  'ND': { lat: 47.5289, lng: -99.7840 },
  'SD': { lat: 44.2998, lng: -99.4388 },
  'NE': { lat: 41.1254, lng: -98.2681 },
  'CO': { lat: 39.0598, lng: -105.3111 },
  'NM': { lat: 34.8405, lng: -106.2485 },
  'AZ': { lat: 33.7298, lng: -111.4312 },
  'UT': { lat: 40.1135, lng: -111.8535 },
  'ID': { lat: 44.2405, lng: -114.4788 },
  'WY': { lat: 42.7559, lng: -107.3025 },
  'MT': { lat: 47.0527, lng: -110.2148 },
  'CA': { lat: 36.1162, lng: -119.6816 },
  'NV': { lat: 38.3135, lng: -117.0554 },
  'OR': { lat: 44.9778, lng: -120.7378 },
  'WA': { lat: 47.3511, lng: -121.5512 },
  'AK': { lat: 61.0700, lng: -165.4048 },
  'HI': { lat: 21.0943, lng: -157.4983 },
  'ME': { lat: 44.6939, lng: -69.3819 },
  'NH': { lat: 43.4525, lng: -71.5639 },
  'VT': { lat: 44.0459, lng: -72.7107 }
};

/**
 * Get state priority based on distance from Orlando
 */
export function getStatePriority(stateCode: string): 'high' | 'medium' | 'low' {
  const coords = STATE_CENTERS[stateCode];
  if (!coords) return 'low';
  
  const distance = getDistanceFromOrlando(coords);
  
  if (distance <= 600) return 'high';
  if (distance <= 1000) return 'medium';
  return 'low';
}

/**
 * Generate cities within radius for PSEO expansion
 */
export function getCitiesInRadius(radiusMiles: number): string[] {
  const states = Object.entries(STATE_CENTERS)
    .filter(([_, coords]) => getDistanceFromOrlando(coords) <= radiusMiles)
    .map(([state]) => state);
  
  return states;
}

/**
 * Estimate city coordinates based on state and relative position
 */
export function estimateCityCoordinates(
  cityName: string, 
  stateCode: string,
  population: number
): Coordinates {
  const stateCenter = STATE_CENTERS[stateCode];
  if (!stateCenter) {
    return { lat: 39.0, lng: -95.0 }; // Default US center
  }
  
  // Add some variation based on city name and population
  const nameHash = cityName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const latOffset = ((nameHash % 200) - 100) / 100 * 2; // ±2 degrees
  const lngOffset = ((nameHash % 300) - 150) / 100 * 3; // ±3 degrees
  
  // Larger cities tend to be closer to state centers
  const populationFactor = Math.min(population / 100000, 1);
  const adjustedLatOffset = latOffset * (1 - populationFactor * 0.5);
  const adjustedLngOffset = lngOffset * (1 - populationFactor * 0.5);
  
  return {
    lat: stateCenter.lat + adjustedLatOffset,
    lng: stateCenter.lng + adjustedLngOffset
  };
}

/**
 * Climate zone helpers based on geography
 */
export function getClimateZoneFromCoords(coords: Coordinates): string {
  const { lat, lng } = coords;
  
  // Simplified climate classification
  if (lat < 25.5) return 'tropical';
  if (lat < 32 && lng > -84) return 'humid_subtropical';
  if (lat < 36 && lng > -84) return 'humid_subtropical';
  if (lat > 45 && lng < -90) return 'continental';
  if (lng < -100 && lat > 35) return 'arid';
  if (lng < -120) return 'oceanic';
  
  return 'humid_continental';
}

/**
 * Check if coordinates are near coast
 */
export function isNearCoast(coords: Coordinates): boolean {
  const { lat, lng } = coords;
  
  // Atlantic Coast
  if (lng > -85 && lat > 24 && lat < 45) return true;
  
  // Gulf Coast  
  if (lng > -98 && lng < -80 && lat > 25 && lat < 32) return true;
  
  // Pacific Coast
  if (lng < -115 && lat > 32 && lat < 49) return true;
  
  // Great Lakes (approximate)
  if (lng > -95 && lng < -75 && lat > 41 && lat < 49) return true;
  
  return false;
}

/**
 * Get time zone based on coordinates
 */
export function getTimezone(coords: Coordinates): string {
  const { lng } = coords;
  
  if (lng > -75) return 'America/New_York';
  if (lng > -90) return 'America/New_York';
  if (lng > -105) return 'America/Chicago';
  if (lng > -120) return 'America/Denver';
  return 'America/Los_Angeles';
}