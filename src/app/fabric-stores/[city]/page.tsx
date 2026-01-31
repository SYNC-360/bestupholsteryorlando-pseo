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

  const title = `Best Fabric Stores in ${cityData.displayName} | Upholstery & Performance Fabrics`
  const description = `Find the best fabric stores in ${cityData.displayName} for upholstery, performance fabrics, and interior design. Expert fabric selection with professional installation services.`
  
  return {
    title,
    description,
    keywords: `fabric stores ${cityData.displayName.toLowerCase()}, upholstery fabric ${cityData.state.toLowerCase()}, performance fabric stores, fabric stores near me, fabric shops ${cityData.displayName.toLowerCase()}`,
    openGraph: {
      title,
      description,
      url: `https://bestupholsteryorlando.com/fabric-stores/${city}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://bestupholsteryorlando.com/fabric-stores/${city}`,
    },
  }
}

export async function generateStaticParams() {
  const { cityLookup } = await import('@/lib/city-data-loader')
  return Object.keys(cityLookup).map((city) => ({
    city: city,
  }))
}

const fabricStoreTypes = [
  {
    type: 'Specialty Upholstery Fabric Stores',
    description: 'Professional-grade fabrics designed for furniture reupholstery',
    features: ['High durability ratings', 'Wide color selection', 'Professional installation', 'Warranty coverage'],
  },
  {
    type: 'Performance Fabric Retailers',
    description: 'Advanced synthetic fabrics for high-traffic areas and humid climates',
    features: ['Stain resistance', 'UV protection', 'Moisture wicking', 'Easy cleaning'],
  },
  {
    type: 'Marine & Outdoor Fabric Specialists',
    description: 'Weather-resistant fabrics for boats, patios, and outdoor furniture',
    features: ['Waterproof options', 'Fade resistance', 'Mold prevention', 'Salt water resistance'],
  },
  {
    type: 'Interior Design Fabric Showrooms',
    description: 'Designer fabrics for home decor and custom window treatments',
    features: ['Designer collections', 'Custom patterns', 'Color matching', 'Design consultation'],
  },
]

const ourServices = [
  'Professional fabric selection consultation',
  'In-home fabric sampling and testing',
  'Complete upholstery installation',
  'Frame repair and restoration',
  'Custom cushion creation',
  'Warranty and quality guarantee',
]

export default async function FabricStoresPage({ params }: PageProps) {
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
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Best Fabric Stores in {cityData.displayName}, {cityData.state}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
              Find premium upholstery and performance fabrics in {cityData.displayName}. 
              Professional fabric selection with expert installation services. 
              Specialized for {climateInfo.description} climate conditions.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Expert Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/fabric-guide">View Fabric Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Store Types */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Types of Fabric Stores in {cityData.displayName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Different fabric retailers for specific needs and applications
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {fabricStoreTypes.map((store) => (
              <div key={store.type} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {store.type}
                </h3>
                <p className="text-gray-600 mb-4">
                  {store.description}
                </p>
                <ul className="space-y-2">
                  {store.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Fabric Services in {cityData.displayName}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                While fabric stores provide materials, our professional services ensure 
                optimal fabric selection and expert installation. We combine the best 
                local fabric sources with specialized knowledge of {climateInfo.description} conditions.
              </p>
              <ul className="space-y-3">
                {ourServices.map((service) => (
                  <li key={service} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Why Choose Professional Services?
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Climate Expertise</h4>
                  <p className="text-sm text-gray-600">
                    Fabrics optimized for {climateInfo.description} conditions in {cityData.displayName}
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Quality Guarantee</h4>
                  <p className="text-sm text-gray-600">
                    Professional installation with warranty coverage
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Complete Service</h4>
                  <p className="text-sm text-gray-600">
                    From fabric selection to final installation and care instructions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Climate Considerations */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Fabric Selection for {cityData.displayName}'s Climate
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {climateInfo.description} conditions require specific fabric considerations
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {climateInfo.considerations.map((consideration, index) => (
              <div key={index} className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {consideration.title}
                </h3>
                <p className="text-gray-600">
                  {consideration.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Fabric Stores Near {cityData.displayName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Fabric stores and services in nearby areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/fabric-stores/${area.slug}`}
                className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900">{area.name}</div>
                <div className="text-sm text-green-600 mt-1">Fabric Stores</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Related Services in {cityData.displayName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete upholstery and interior design services
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
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
              href={`/interior-designer/${city}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                Interior Design
              </h3>
              <p className="text-gray-600">
                Complete interior design services and consultation in {cityData.displayName}
              </p>
            </Link>
            
            <Link 
              href={`/fabric/${city}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                Fabric Selection
              </h3>
              <p className="text-gray-600">
                Expert fabric consultation and selection services in {cityData.displayName}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section for AI Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fabric Store FAQ - {cityData.displayName}
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Where can I find upholstery fabric stores in {cityData.displayName}?
              </h3>
              <p className="text-gray-700">
                {cityData.displayName} has several fabric stores specializing in upholstery materials. 
                We work with local suppliers and provide professional fabric selection services 
                with installation throughout {cityData.state}.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What types of performance fabrics are available in {cityData.displayName}?
              </h3>
              <p className="text-gray-700">
                Performance fabrics ideal for {climateInfo.description} climate include Sunbrella, 
                Crypton, and Revolution brands. These offer stain resistance, UV protection, 
                and moisture management perfect for {cityData.displayName} conditions.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you provide fabric installation services in {cityData.displayName}?
              </h3>
              <p className="text-gray-700">
                Yes, we provide complete fabric installation and upholstery services throughout 
                {cityData.displayName} and surrounding areas. Professional installation ensures 
                optimal results and warranty coverage.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What fabrics work best for {cityData.displayName}'s climate?
              </h3>
              <p className="text-gray-700">
                For {climateInfo.description} conditions in {cityData.displayName}, we recommend 
                solution-dyed acrylics, performance synthetics, and treated natural fibers that 
                resist humidity, mold, and UV damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find the Perfect Fabric?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Expert fabric selection and professional installation in {cityData.displayName}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
              <Link href="/fabric-selection">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

function getClimateInfo(cityData: CityData) {
  // Climate information based on location
  const isCoastal = cityData.county?.includes('Beach') || 
                   cityData.displayName.includes('Beach') ||
                   ['Miami', 'Fort Lauderdale', 'West Palm Beach', 'Clearwater', 'St. Petersburg'].some(coastal => 
                     cityData.displayName.includes(coastal))
  
  if (isCoastal) {
    return {
      description: 'coastal humid subtropical',
      considerations: [
        {
          title: 'Salt Air Resistance',
          description: 'Fabrics treated to resist salt air corrosion and fading'
        },
        {
          title: 'High Humidity',
          description: 'Moisture-wicking and quick-dry materials for comfort'
        },
        {
          title: 'UV Protection',
          description: 'Enhanced fade resistance for intense coastal sun exposure'
        }
      ]
    }
  }
  
  return {
    description: 'humid subtropical',
    considerations: [
      {
        title: 'Humidity Resistance',
        description: 'Fabrics that resist moisture absorption and mold growth'
      },
      {
        title: 'Easy Maintenance',
        description: 'Stain-resistant and easy-care materials for active lifestyles'
      },
      {
        title: 'Temperature Regulation',
        description: 'Breathable fabrics for year-round comfort'
      }
    ]
  }
}

function getNearbyAreas(cityData: CityData) {
  // Return nearby areas based on major cities
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