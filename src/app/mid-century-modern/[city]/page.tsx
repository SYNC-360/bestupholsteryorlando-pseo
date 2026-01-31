import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'
import { loadCityData } from '@/lib/city-data-loader'
import type { CityData } from '@/lib/city-data-loader'

type PageProps = {
  params: Promise<{ city: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params
  const cityData = await loadCityData(city)
  
  if (!cityData) {
    return {
      title: 'City Not Found',
      description: 'The requested city could not be found.',
    }
  }

  const title = `Mid Century Modern Furniture in ${cityData.displayName}, ${cityData.state} | MCM Restoration & Upholstery`
  const description = `Mid century modern furniture specialists in ${cityData.displayName}. Expert MCM restoration, reupholstery, and custom pieces. Authentic 1950s-1960s style with modern performance.`
  
  return {
    title,
    description,
    keywords: `mid century modern ${cityData.displayName.toLowerCase()}, mcm furniture ${cityData.state.toLowerCase()}, mid century furniture restoration, vintage furniture ${cityData.displayName.toLowerCase()}, retro furniture upholstery`,
    openGraph: {
      title,
      description,
      url: `https://bestupholsteryorlando.com/mid-century-modern/${city}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://bestupholsteryorlando.com/mid-century-modern/${city}`,
    },
  }
}

export async function generateStaticParams() {
  const { cityLookup } = await import('@/lib/city-data-loader')
  return Object.keys(cityLookup).map((city) => ({
    city: city,
  }))
}

const mcmServices = [
  {
    title: 'MCM Furniture Restoration',
    description: 'Complete restoration of authentic mid-century modern pieces to original glory.',
    features: ['Frame restoration', 'Period-accurate techniques', 'Original design preservation', 'Quality materials'],
    pieces: ['Eames lounge chairs', 'Danish modern sofas', 'Teak dining sets', 'Vintage accent chairs'],
    price: 'Starting at $400',
  },
  {
    title: 'Mid Century Reupholstery',
    description: 'Expert reupholstery maintaining authentic MCM aesthetic with modern performance.',
    features: ['Period-appropriate fabrics', 'Original profile preservation', 'Performance upgrades', 'Color authenticity'],
    pieces: ['Sectional sofas', 'Lounge chairs', 'Dining chairs', 'Ottoman sets'],
    price: 'Starting at $350',
  },
  {
    title: 'Custom MCM Pieces',
    description: 'New furniture created in authentic mid-century modern style and craftsmanship.',
    features: ['Custom designs', 'Period styling', 'Modern materials', 'Quality construction'],
    pieces: ['Custom sofas', 'Dining furniture', 'Built-in seating', 'Reception areas'],
    price: 'Starting at $1,200',
  },
  {
    title: 'MCM Design Consultation',
    description: 'Professional guidance for creating cohesive mid-century modern interiors.',
    features: ['Style authentication', 'Period coordination', 'Color schemes', 'Layout planning'],
    pieces: ['Living rooms', 'Dining areas', 'Home offices', 'Commercial spaces'],
    price: 'Starting at $150',
  },
]

const mcmStyles = [
  {
    era: 'Early Mid Century (1950s)',
    characteristics: 'Clean lines, organic curves, natural materials, and functional design',
    colors: ['Warm wood tones', 'Mustard yellow', 'Burnt orange', 'Teal blue'],
    fabrics: ['Wool boucle', 'Herringbone', 'Solid colors', 'Geometric patterns'],
    designers: 'Eames, Nelson, Noguchi',
  },
  {
    era: 'Classic Mid Century (1960s)',
    characteristics: 'Bold geometric forms, vibrant colors, space-age influences',
    colors: ['Bright orange', 'Avocado green', 'Electric blue', 'Hot pink'],
    fabrics: ['Vinyl', 'Bold patterns', 'Textured weaves', 'Mod graphics'],
    designers: 'Saarinen, Bertoia, Knoll',
  },
  {
    era: 'Late Mid Century (1970s)',
    characteristics: 'Earth tones, natural textures, organic shapes, comfort focus',
    colors: ['Brown', 'Rust', 'Harvest gold', 'Olive green'],
    fabrics: ['Corduroy', 'Velvet', 'Natural fibers', 'Earth tone patterns'],
    designers: 'Herman Miller, Knoll International',
  },
  {
    era: 'Modern MCM Revival',
    characteristics: 'Contemporary interpretation with original aesthetic and modern performance',
    colors: ['Updated neutrals', 'Contemporary grays', 'Modern blues', 'Refined earth tones'],
    fabrics: ['Performance materials', 'Modern synthetics', 'Updated classics', 'Climate-optimized'],
    designers: 'Contemporary interpretations',
  },
]

const furnitureTypes = [
  {
    type: 'Lounge Seating',
    description: 'Iconic MCM lounge chairs and sofas with signature low profiles and clean lines.',
    examples: ['Eames lounge chair', 'Barcelona chair', 'Womb chair', 'Tulip chair'],
    restoration: 'Frame refinishing, cushion replacement, period-accurate upholstery',
  },
  {
    type: 'Dining Furniture',
    description: 'Sleek dining sets with characteristic tapered legs and minimal ornamentation.',
    examples: ['Tulip table sets', 'Danish teak dining', 'Wire dining chairs', 'Parsons tables'],
    restoration: 'Wood restoration, seat reupholstery, structural reinforcement',
  },
  {
    type: 'Sectional Sofas',
    description: 'Modular seating systems that defined casual mid-century living.',
    examples: ['Pit groups', 'Modular systems', 'Built-in seating', 'Platform sofas'],
    restoration: 'Complete reupholstery, foam replacement, frame restoration',
  },
  {
    type: 'Storage & Tables',
    description: 'Functional pieces combining storage with distinctive MCM styling.',
    examples: ['Credenzas', 'Room dividers', 'Coffee tables', 'Side tables'],
    restoration: 'Wood refinishing, hardware restoration, structural repairs',
  },
]

export default async function MidCenturyModernPage({ params }: PageProps) {
  const { city } = await params
  const cityData = await loadCityData(city)
  
  if (!cityData) {
    notFound()
  }

  const climateInfo = getClimateInfo(cityData)
  const nearbyAreas = getNearbyAreas(cityData)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Mid Century Modern Furniture in {cityData.displayName}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
              Expert mid-century modern furniture restoration and reupholstery in {cityData.displayName}, {cityData.state}. 
              Authentic MCM styling with modern performance fabrics optimized for {climateInfo.description} conditions.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get MCM Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/examples">View MCM Projects</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* MCM Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Mid Century Modern Services in {cityData.displayName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Specialized MCM restoration and custom furniture services
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {mcmServices.map((service) => (
              <div key={service.title} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <span className="text-orange-600 font-semibold">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 text-sm mb-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-700">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Popular Pieces:</h4>
                    <ul className="space-y-1">
                      {service.pieces.map((piece) => (
                        <li key={piece} className="flex items-center text-gray-700">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></div>
                          {piece}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MCM Style Periods */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Mid Century Modern Style Periods
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Understanding authentic MCM aesthetics across different eras
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {mcmStyles.map((style) => (
              <div key={style.era} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {style.era}
                </h3>
                <p className="text-gray-600 mb-4">
                  {style.characteristics}
                </p>
                
                <div className="grid gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Signature Colors:</h4>
                    <div className="flex flex-wrap gap-2">
                      {style.colors.map((color) => (
                        <span key={color} className="px-2 py-1 bg-orange-100 text-orange-700 rounded text-xs">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Typical Fabrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {style.fabrics.map((fabric) => (
                        <span key={fabric} className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs">
                          {fabric}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Notable Designers:</h4>
                    <p className="text-gray-700">{style.designers}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Furniture Types */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              MCM Furniture Types We Specialize In
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Expert restoration for iconic mid-century modern pieces
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {furnitureTypes.map((furniture) => (
              <div key={furniture.type} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {furniture.type}
                </h3>
                <p className="text-gray-600 mb-4">
                  {furniture.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Iconic Examples:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {furniture.examples.map((example) => (
                      <div key={example} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-1">Restoration Services:</h4>
                  <p className="text-sm text-gray-600">{furniture.restoration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Considerations for MCM */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              MCM Furniture for {cityData.displayName}'s Climate
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Adapting authentic mid-century style for {climateInfo.description} conditions
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {climateInfo.mcmConsiderations.map((consideration, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {consideration.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {consideration.description}
                </p>
                <ul className="space-y-1">
                  {consideration.solutions.map((solution) => (
                    <li key={solution} className="text-sm text-orange-600">
                      • {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication & Expertise */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our MCM Expertise</h2>
            <p className="mt-4 text-lg text-gray-600">
              Authentic mid-century modern knowledge and craftsmanship
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Period Authentication</h3>
              <p className="text-gray-600 mb-4">
                We authenticate genuine mid-century pieces and ensure restorations maintain 
                historical accuracy while incorporating modern performance improvements.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  Designer piece identification
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  Period-appropriate materials
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  Historical technique preservation
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Modern Performance</h3>
              <p className="text-gray-600 mb-4">
                Our restorations blend authentic aesthetics with modern comfort and durability, 
                perfect for contemporary Florida living while honoring original design.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  Performance fabric options
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  Climate-optimized materials
                </li>
                <li className="flex items-center text-sm text-gray-700">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-2"></div>
                  Enhanced comfort systems
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Related Services in {cityData.displayName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete mid-century modern and design services
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Link 
              href={`/interior-designer/${city}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                Interior Design
              </h3>
              <p className="text-gray-600">
                Complete mid-century modern interior design services in {cityData.displayName}
              </p>
            </Link>
            
            <Link 
              href={`/upholstery/${city}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 mb-2">
                Upholstery Services
              </h3>
              <p className="text-gray-600">
                Professional furniture reupholstery and restoration in {cityData.displayName}
              </p>
            </Link>
            
            <Link 
              href={`/fabric/${city}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                Fabric Selection
              </h3>
              <p className="text-gray-600">
                Period-appropriate and performance fabric selection in {cityData.displayName}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              MCM Services Near {cityData.displayName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Mid-century modern furniture services in nearby areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/mid-century-modern/${area.slug}`}
                className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900">{area.name}</div>
                <div className="text-sm text-orange-600 mt-1">MCM Services</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for AI Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Mid Century Modern FAQ - {cityData.displayName}
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What defines authentic mid-century modern furniture?
              </h3>
              <p className="text-gray-700">
                Authentic MCM furniture (1950s-1970s) features clean lines, minimal ornamentation, 
                functional design, and natural materials. Key elements include tapered legs, 
                geometric forms, and integration of indoor/outdoor living concepts.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can you restore vintage MCM pieces in {cityData.displayName}?
              </h3>
              <p className="text-gray-700">
                Yes, we specialize in authentic MCM restoration throughout {cityData.displayName}. 
                We maintain period accuracy while incorporating modern performance improvements 
                suitable for {climateInfo.description} conditions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you create new furniture in MCM style?
              </h3>
              <p className="text-gray-700">
                Absolutely! We create custom furniture pieces inspired by authentic mid-century 
                modern design, using period-appropriate styling with contemporary materials 
                and construction techniques for enhanced durability.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What fabrics work best for MCM furniture in Florida?
              </h3>
              <p className="text-gray-700">
                For {climateInfo.description} conditions, we recommend performance fabrics that 
                maintain MCM aesthetics while offering humidity resistance, UV protection, 
                and easy maintenance. Period-inspired colors with modern functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Restore Your MCM Furniture?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Expert mid-century modern restoration and custom services in {cityData.displayName}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get MCM Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600" asChild>
              <Link href="/examples">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function getClimateInfo(cityData: CityData) {
  const isCoastal = cityData.county?.includes('Beach') || 
                   cityData.displayName.includes('Beach') ||
                   ['Miami', 'Fort Lauderdale', 'West Palm Beach', 'Clearwater', 'St. Petersburg'].some(coastal => 
                     cityData.displayName.includes(coastal))
  
  if (isCoastal) {
    return {
      description: 'coastal humid subtropical',
      mcmConsiderations: [
        {
          title: 'Coastal Adaptation',
          description: 'MCM styling adapted for salt air and coastal humidity challenges',
          solutions: ['Marine-grade finishes', 'Salt-resistant hardware', 'Coastal color palettes']
        },
        {
          title: 'UV Protection',
          description: 'Preserving authentic MCM colors while protecting from coastal sun',
          solutions: ['Fade-resistant treatments', 'UV-stabilized materials', 'Period-accurate colors']
        },
        {
          title: 'Moisture Management',
          description: 'Maintaining MCM aesthetics while preventing humidity damage',
          solutions: ['Breathable constructions', 'Moisture barriers', 'Climate-controlled storage']
        }
      ]
    }
  }
  
  return {
    description: 'humid subtropical',
    mcmConsiderations: [
      {
        title: 'Humidity Resistance',
        description: 'Protecting MCM furniture from Florida\'s year-round humidity',
        solutions: ['Treated wood finishes', 'Moisture-resistant adhesives', 'Ventilation considerations']
      },
      {
        title: 'Performance Fabrics',
        description: 'Modern fabric technology maintaining authentic MCM appearance',
        solutions: ['Period-inspired performance materials', 'Stain resistance', 'Easy maintenance']
      },
      {
        title: 'Climate Control',
        description: 'Design solutions for consistent comfort in changing conditions',
        solutions: ['Breathable cushioning', 'Temperature regulation', 'Seasonal adaptability']
      }
    ]
  }
}

function getNearbyAreas(cityData: CityData) {
  const majorCities = [
    { name: 'Orlando', slug: 'orlando-fl' },
    { name: 'Tampa', slug: 'tampa-fl' },
    { name: 'Miami', slug: 'miami-fl' },
    { name: 'Jacksonville', slug: 'jacksonville-fl' },
    { name: 'Fort Lauderdale', slug: 'fort-lauderdale-fl' },
    { name: 'St. Petersburg', slug: 'st-petersburg-fl' },
    { name: 'Clearwater', slug: 'clearwater-fl' },
    { name: 'Sarasota', slug: 'sarasota-fl' },
  ]
  
  return majorCities
    .filter(city => city.name !== cityData.displayName)
    .slice(0, 8)
}