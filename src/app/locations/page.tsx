import Link from "next/link"
import { ArrowRight, MapPin, Users, TrendingUp, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/sections/header"
import { SITE_CONFIG, GEOGRAPHIC_MARKETS } from "@/lib/constants"
import { generateLocationUrl } from "@/lib/utils"

export const metadata = {
  title: "Fabric-First Upholstery Across the Southeast | Local Fabric Expertise",
  description: "Professional fabric selection guidance across the Southeast US. From Orlando to Atlanta, discover the fabric-first approach that transforms upholstery projects.",
  keywords: ["upholstery southeast", "fabric selection regional", "southeastern upholstery", "fabric first approach"],
}

export default function LocationsPage() {
  const allMarkets = [...GEOGRAPHIC_MARKETS.tier1, ...GEOGRAPHIC_MARKETS.tier2]
  
  const regionalInsights = [
    {
      region: "Florida Markets",
      insights: "Climate considerations for fade-resistant fabrics and humidity control",
      topFabrics: ["Performance Outdoor", "Fade-Resistant Linen", "Moisture-Wicking Synthetics"],
      markets: ["Orlando", "Miami", "Tampa", "Jacksonville", "Tallahassee", "Gainesville"]
    },
    {
      region: "Georgia Markets", 
      insights: "Traditional elegance meets modern performance for historic and contemporary homes",
      topFabrics: ["Natural Linen", "Performance Cotton", "Traditional Damask"],
      markets: ["Atlanta", "Savannah"]
    },
    {
      region: "Carolina Markets",
      insights: "Coastal and mountain influences create diverse style and durability needs", 
      topFabrics: ["Coastal Linen", "Mountain Wool", "Transitional Blends"],
      markets: ["Charlotte", "Raleigh", "Charleston"]
    },
    {
      region: "Tennessee & Alabama",
      insights: "Music city sophistication and southern comfort drive fabric preferences",
      topFabrics: ["Rich Velvets", "Comfort Cotton", "Classic Chenille"],
      markets: ["Nashville", "Birmingham"]
    }
  ]

  const serviceHighlights = [
    {
      title: "Local Climate Expertise",
      description: "Fabric recommendations based on your specific regional climate conditions",
      icon: <MapPin className="h-6 w-6" />
    },
    {
      title: "Regional Style Knowledge", 
      description: "Understanding of local architectural styles and design preferences",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Upholsterer Network",
      description: "Connections with quality upholsterers in your area who understand fabric-first approach",
      icon: <Users className="h-6 w-6" />
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-hero font-display font-bold tracking-tight text-gray-900">
                Fabric-First Expertise Across the Southeast
              </h1>
              <p className="mt-6 text-large leading-8 text-gray-700">
                From Orlando to Atlanta, discover how regional climate, style preferences, and architectural heritage influence the perfect fabric choices for your upholstery project.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href="#markets">
                    Find Your Market
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="#regional">
                    Regional Insights
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Map */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                1000-Mile Service Radius
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Professional fabric guidance across the Southeast, understanding local climate, style, and architectural considerations.
              </p>
            </div>
            
            <div className="mx-auto mt-16 bg-indigo-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {serviceHighlights.map((highlight) => (
                  <div key={highlight.title} className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 mb-4">
                      <div className="text-white">
                        {highlight.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Major Markets */}
        <section id="markets" className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Major Metropolitan Markets
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Specialized fabric-first guidance for major cities across the Southeast.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {GEOGRAPHIC_MARKETS.tier1.map((market) => (
                <Link
                  key={`${market.city}-${market.state}`}
                  href={generateLocationUrl(market.city, market.state)}
                  className="group relative rounded-2xl bg-white p-6 hover:bg-indigo-50 transition-all duration-300 hover:shadow-lg border border-gray-200 hover:border-indigo-200"
                >
                  <div>
                    <div className="flex items-center gap-x-3 mb-3">
                      <MapPin className="h-5 w-5 text-indigo-600" />
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-700 transition-colors">
                        {market.city}, {market.state}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      Fabric-first upholstery expertise for {market.city} homeowners and designers
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Population: {market.population?.toLocaleString()}
                      </span>
                      <div className="flex items-center text-indigo-600 group-hover:text-indigo-700 transition-colors">
                        <span className="text-sm font-medium">Learn more</span>
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="mx-auto mt-12 text-center">
              <p className="text-gray-600 mb-6">Plus dozens of secondary markets throughout the Southeast</p>
              <div className="flex flex-wrap justify-center gap-3">
                {GEOGRAPHIC_MARKETS.tier2.map((market) => (
                  <Link
                    key={`${market.city}-${market.state}`}
                    href={generateLocationUrl(market.city, market.state)}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 hover:bg-indigo-50 hover:border-indigo-200 hover:text-indigo-700 transition-colors"
                  >
                    {market.city}, {market.state}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Regional Insights */}
        <section id="regional" className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Regional Fabric Insights
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Climate, architecture, and local style preferences shape the best fabric choices for each region.
              </p>
            </div>
            
            <div className="mx-auto mt-16 space-y-12">
              {regionalInsights.map((region, index) => (
                <div key={region.region} className={`lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                  <div className={`lg:col-start-${index % 2 === 1 ? '2' : '1'}`}>
                    <div className="rounded-2xl bg-gray-50 p-8">
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-3">{region.region}</h3>
                      <p className="text-gray-700 mb-6">{region.insights}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Top Fabric Choices:</h4>
                        <div className="flex flex-wrap gap-2">
                          {region.topFabrics.map((fabric) => (
                            <span key={fabric} className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">
                              {fabric}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Button variant="outline" asChild className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                        <Link href={`#${region.region.toLowerCase().replace(/\s+/g, '-')}`}>
                          Explore Regional Fabrics
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className={`mt-8 lg:mt-0 lg:col-start-${index % 2 === 1 ? '1' : '2'}`}>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Markets Served:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {region.markets.map((market) => {
                          const marketData = allMarkets.find(m => m.city === market)
                          return (
                            <Link
                              key={market}
                              href={generateLocationUrl(market, marketData?.state || 'FL')}
                              className="flex items-center gap-x-2 p-3 bg-white rounded-lg border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50 transition-colors group"
                            >
                              <MapPin className="h-4 w-4 text-gray-400 group-hover:text-indigo-600 transition-colors" />
                              <span className="text-sm text-gray-700 group-hover:text-indigo-700 transition-colors">{market}</span>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Location Matters */}
        <section className="py-24 sm:py-32 bg-indigo-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-indigo-600">Local Expertise</p>
                    <h2 className="mt-2 text-section font-display font-bold tracking-tight text-gray-900">
                      Why Location Matters for Fabric Selection
                    </h2>
                    <p className="mt-6 text-large leading-8 text-gray-700">
                      Successful fabric selection considers more than just aesthetics - climate, local architecture, and regional style preferences all influence the best choices.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <div className="space-y-6">
                      <div className="flex gap-x-3">
                        <div className="mt-1 flex h-5 w-5 flex-none items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Climate Considerations</h3>
                          <p className="mt-1 text-gray-600">Humidity, UV exposure, and temperature fluctuations affect fabric performance and longevity.</p>
                        </div>
                      </div>
                      <div className="flex gap-x-3">
                        <div className="mt-1 flex h-5 w-5 flex-none items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Architectural Heritage</h3>
                          <p className="mt-1 text-gray-600">Local building styles and historical context influence appropriate fabric choices.</p>
                        </div>
                      </div>
                      <div className="flex gap-x-3">
                        <div className="mt-1 flex h-5 w-5 flex-none items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Regional Preferences</h3>
                          <p className="mt-1 text-gray-600">Local style trends and cultural preferences guide color and pattern selections.</p>
                        </div>
                      </div>
                      <div className="flex gap-x-3">
                        <div className="mt-1 flex h-5 w-5 flex-none items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Professional Network</h3>
                          <p className="mt-1 text-gray-600">Local upholsterers familiar with fabric-first approach and regional requirements.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <Button variant="fabric" size="lg" asChild>
                        <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>
                          Order Regional Samples
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="pt-8 lg:pt-0">
                  <img
                    className="aspect-[3/4] w-full max-w-lg rounded-2xl bg-gray-50 object-cover shadow-xl lg:max-w-none"
                    src="/images/regional-architecture-fabric.jpg"
                    alt="Regional architecture influencing fabric selection across the Southeast"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 sm:py-32 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-white">
                Find Your Local Fabric-First Guide
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-large leading-8 text-gray-300">
                Discover fabric recommendations specific to your region's climate, style, and architectural heritage.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href="#markets">
                    Explore Your Market
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
              © 2024 {SITE_CONFIG.name}. Southeast Regional Fabric Authority.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}