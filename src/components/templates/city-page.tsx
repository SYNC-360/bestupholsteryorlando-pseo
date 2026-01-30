import Link from "next/link"
import { ArrowRight, MapPin, Star, Thermometer, Home, Users, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/sections/header"
import { SITE_CONFIG } from "@/lib/constants"
import type { CityData } from "@/types"

interface CityPageProps {
  cityData: CityData
}

export function CityPageTemplate({ cityData }: CityPageProps) {
  const {
    city,
    state,
    climate,
    architecture,
    lifestyle,
    seasonalConsiderations,
    neighborhoods,
    localResources,
    successStories
  } = cityData

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                  <MapPin className="w-4 h-4 mr-2" />
                  {city}, {state}
                </span>
              </div>
              <h1 className="text-hero font-display font-bold tracking-tight text-gray-900">
                Fabric-First Upholstery in {city}
              </h1>
              <p className="mt-6 text-large leading-8 text-gray-700">
                Professional fabric selection for {city}'s unique climate and diverse architectural character. 
                {climate.specialFocus && ` ${climate.specialFocus}`}
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples?location=${city.toLowerCase()}`}>
                    Order {city} Samples
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="#neighborhoods">
                    Explore {city} Styles
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* City Overview */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Why {city} Fabric Selection is Unique
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                {city}'s climate, architecture, and lifestyle create specific considerations for upholstery fabric selection.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="rounded-2xl bg-orange-50 p-8">
                <div className="mb-6">
                  <Thermometer className="h-8 w-8 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Climate Factors</h3>
                </div>
                <p className="text-gray-700 mb-4">{climate.challenge}</p>
                <p className="text-sm text-orange-700 font-medium mb-3">Impact: {climate.impact}</p>
                <div className="space-y-2">
                  {climate.solutions.map((solution) => (
                    <div key={solution} className="flex items-center gap-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-600"></div>
                      <span className="text-sm text-gray-700">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="rounded-2xl bg-blue-50 p-8">
                <div className="mb-6">
                  <Home className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">Architectural Character</h3>
                </div>
                <p className="text-gray-700 mb-4">{architecture.considerations}</p>
                <p className="text-sm text-blue-700 font-medium mb-3">Focus: {architecture.trends}</p>
                <div className="flex flex-wrap gap-2">
                  {architecture.styles.map((style) => (
                    <span key={style} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {style}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="rounded-2xl bg-green-50 p-8">
                <div className="mb-6">
                  <Users className="h-8 w-8 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900">{city} Lifestyle</h3>
                </div>
                <p className="text-gray-700 mb-4">{lifestyle.pace}</p>
                <p className="text-sm text-green-700 font-medium mb-3">Preference: {lifestyle.preferences}</p>
                <div className="space-y-2">
                  {lifestyle.priorities.map((priority) => (
                    <div key={priority} className="flex items-center gap-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-600"></div>
                      <span className="text-sm text-gray-700">{priority}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Fabric Guide */}
        {seasonalConsiderations && (
          <section className="py-24 sm:py-32 bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                  Seasonal Fabric Considerations for {city}
                </h2>
                <p className="mt-6 text-large leading-8 text-gray-600">
                  {city}'s climate variations require thoughtful fabric selection for year-round comfort and performance.
                </p>
              </div>
              
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {seasonalConsiderations.map((season) => (
                  <div key={season.season} className="rounded-2xl bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-x-3 mb-6">
                      <Calendar className="h-6 w-6 text-orange-600" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{season.season}</h3>
                        <p className="text-sm text-gray-600">{season.temp}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Fabric Recommendations:</h4>
                        <div className="space-y-2">
                          {season.recommendations.map((rec) => (
                            <div key={rec} className="flex items-start gap-x-2">
                              <div className="mt-2 h-1.5 w-1.5 rounded-full bg-orange-600 flex-shrink-0"></div>
                              <span className="text-sm text-gray-700">{rec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Popular Colors:</h4>
                        <div className="flex flex-wrap gap-2">
                          {season.colors.map((color) => (
                            <span key={color} className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">
                              {color}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Neighborhood Styles */}
        {neighborhoods && (
          <section id="neighborhoods" className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                  Fabric Styles by {city} Area
                </h2>
                <p className="mt-6 text-large leading-8 text-gray-600">
                  Each {city} neighborhood has distinct character that influences the best fabric choices.
                </p>
              </div>
              
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                {neighborhoods.map((neighborhood) => (
                  <div key={neighborhood.area} className="rounded-2xl border border-gray-200 p-8 hover:border-orange-200 hover:bg-orange-50/30 transition-all">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{neighborhood.area}</h3>
                      <p className="text-orange-600 font-medium mb-2">{neighborhood.style}</p>
                      <p className="text-gray-700">{neighborhood.description}</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Ideal Fabric Choices:</h4>
                        <div className="flex flex-wrap gap-2">
                          {neighborhood.fabricChoices.map((fabric) => (
                            <span key={fabric} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                              {fabric}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Design Approach:</h4>
                        <p className="text-sm text-gray-600">{neighborhood.approach}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Success Stories */}
        {successStories && (
          <section className="py-24 sm:py-32 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                  {city} Success Stories
                </h2>
                <p className="mt-6 text-large leading-8 text-gray-600">
                  Real {city} homeowners who chose fabric first and love their results.
                </p>
              </div>
              
              <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {successStories.map((story) => (
                  <div key={story.name} className="rounded-2xl bg-gray-50 p-6">
                    <div className="flex items-center gap-x-2 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{story.name}</h3>
                    <p className="text-sm text-orange-600 mb-2">{story.location}</p>
                    <p className="text-sm text-gray-700 mb-3">{story.project}</p>
                    <p className="text-sm text-gray-900 font-medium">"{story.result}"</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Call to Action */}
        <section className="py-24 sm:py-32 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-white">
                Start Your {city} Fabric Journey
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-large leading-8 text-gray-300">
                Experience the difference fabric-first selection makes with samples chosen specifically for {city} homes.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples?location=${city.toLowerCase()}`}>
                    Order {city} Sample Set
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-gray-300 text-gray-300 hover:bg-gray-800" asChild>
                  <Link href="/fabric-guide">
                    General Fabric Guide
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-sm text-gray-400">
              © 2024 {SITE_CONFIG.name}. {city} Fabric Selection Authority.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}