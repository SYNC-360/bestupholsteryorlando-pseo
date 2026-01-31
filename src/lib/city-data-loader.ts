// Compatibility layer for existing city pages
import { cityData, getCityData } from './city-data'

// Define the interface that matches what the pages expect
export interface CityData {
  displayName: string
  state: string
  county?: string
  population?: number
}

// Create cityLookup for generateStaticParams
const cityLookupMap: Record<string, CityData> = {}

// Populate cityLookup from our existing city data
Object.entries(cityData).forEach(([slug, data]) => {
  cityLookupMap[slug] = {
    displayName: data.city,
    state: data.state,
    county: undefined, // We don't have county in our current data structure
    population: undefined // We don't have population in our current data structure
  }
})

// Main function that existing pages are trying to use
export async function loadCityData(citySlug: string): Promise<CityData | null> {
  const data = getCityData(citySlug)
  
  if (!data) {
    return null
  }

  return {
    displayName: data.city,
    state: data.state,
    county: undefined,
    population: undefined
  }
}

// Export the lookup for generateStaticParams
export const cityLookup = cityLookupMap