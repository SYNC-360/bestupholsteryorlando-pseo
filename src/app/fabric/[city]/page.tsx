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

  const title = `Fabric Services in ${cityData.displayName}, ${cityData.state} | Professional Upholstery Fabrics`
  const description = `Expert fabric services in ${cityData.displayName} - selection, consultation, and installation. Performance fabrics, designer options, and climate-optimized materials.`
  
  return {
    title,
    description,
    keywords: `fabric ${cityData.displayName.toLowerCase()}, upholstery fabric ${cityData.state.toLowerCase()}, fabric selection ${cityData.displayName.toLowerCase()}, performance fabric, designer fabric`,
    openGraph: {
      title,
      description,
      url: `https://bestupholsteryorlando.com/fabric/${city}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://bestupholsteryorlando.com/fabric/${city}`,
    },
  }
}

export async function generateStaticParams() {
  const { cityLookup } = await import('@/lib/city-data-loader')
  return Object.keys(cityLookup).map((city) => ({
    city: city,
  }))
}

const fabricCategories = [
  {
    title: 'Performance Fabrics',
    description: 'Advanced synthetic materials engineered for durability and easy maintenance',
    benefits: ['Stain resistant', 'UV protection', 'Easy cleaning', 'Long-lasting'],
    applications: ['High-traffic furniture', 'Family rooms', 'Commercial spaces', 'Outdoor areas'],
    popular: 'Sunbrella, Crypton, Revolution',
  },
  {
    title: 'Designer Fabrics',
    description: 'Premium decorator fabrics from leading interior design brands',
    benefits: ['Unique patterns', 'Luxury feel', 'Color coordination', 'Professional quality'],
    applications: ['Formal living rooms', 'Custom furniture', 'Window treatments', 'Accent pieces'],
    popular: 'Kravet, Lee Jofa, Scalamandré',
  },
  {
    title: 'Natural Fiber Fabrics',
    description: 'Traditional cotton, linen, and wool with modern performance treatments',
    benefits: ['Natural breathability', 'Classic appeal', 'Comfort', 'Eco-friendly options'],
    applications: ['Traditional decor', 'Bedrooms', 'Reading chairs', 'Classic furniture'],
    popular: 'Treated cotton, performance linen, wool blends',
  },
  {
    title: 'Specialty Fabrics',
    description: 'Unique materials for specific needs and design requirements',
    benefits: ['Specific properties', 'Unique textures', 'Custom solutions', 'Specialty applications'],
    applications: ['Marine environments', 'Healthcare', 'Hospitality', 'Custom projects'],
    popular: 'Vinyl, microfiber, antimicrobial, flame-retardant',
  },
]

const fabricServices = [
  {
    service: 'Professional Fabric Selection',
    description: 'Expert consultation to choose optimal fabrics for your specific needs and climate.',
    process: ['Lifestyle assessment', 'Climate considerations', 'Performance requirements', 'Style coordination'],
  },
  {
    service: 'In-Home Fabric Consultation',
    description: 'Bring fabric samples to your home for accurate color and texture evaluation.',
    process: ['Sample collection', 'Lighting assessment', 'Color coordination', 'Final recommendations'],
  },
  {
    service: 'Custom Fabric Sourcing',
    description: 'Access to trade-only fabrics and custom-order materials for unique projects.',
    process: ['Design consultation', 'Fabric sourcing', 'Sample approval', 'Custom ordering'],
  },
  {
    service: 'Fabric Installation',
    description: 'Professional upholstery installation with quality guarantee and warranty.',
    process: ['Pattern matching', 'Expert installation', 'Quality inspection', 'Care instructions'],
  },
]

export default async function FabricPage({ params }: PageProps) {
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
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Professional Fabric Services in {cityData.displayName}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
              Expert fabric selection, consultation, and installation in {cityData.displayName}, {cityData.state}. 
              Performance fabrics, designer options, and climate-optimized materials for {climateInfo.description} conditions.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Fabric Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/fabric-guide">View Fabric Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Fabric Categories Available in {cityData.displayName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive selection of fabrics for every application and style
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {fabricCategories.map((category) => (
              <div key={category.title} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {category.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center text-gray-700">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Best For:</h4>
                    <ul className="space-y-1">
                      {category.applications.map((app) => (
                        <li key={app} className="flex items-center text-gray-700">
                          <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mr-2"></div>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-1">Popular Brands:</h4>
                  <p className="text-sm text-purple-600">{category.popular}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fabric Services */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Fabric Services in {cityData.displayName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete fabric solutions from selection to installation
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {fabricServices.map((service) => (
              <div key={service.service} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.service}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Process:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.process.map((step, index) => (
                      <div key={step} className="flex items-center text-sm text-gray-700">
                        <span className="inline-flex items-center justify-center w-6 h-6 bg-purple-100 text-purple-600 rounded-full text-xs font-medium mr-2">
                          {index + 1}
                        </span>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Optimization */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Fabrics Optimized for {cityData.displayName}'s Climate
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Expert selection considering {climateInfo.description} conditions
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {climateInfo.considerations.map((consideration, index) => (
              <div key={index} className="text-center bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {consideration.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {consideration.description}
                </p>
                <ul className="space-y-2">
                  {consideration.recommendations.map((rec) => (
                    <li key={rec} className="text-sm text-gray-700">
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools and Resources */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Fabric Tools & Resources</h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional tools to help with your fabric selection
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Yardage Calculator</h3>
              <p className="text-gray-600 mb-4">Calculate exact fabric requirements for your furniture pieces.</p>
              <Button variant="outline" asChild>
                <Link href="/tools/yardage-calculator">Calculate Yardage</Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fabric Guide</h3>
              <p className="text-gray-600 mb-4">Comprehensive guide to fabric types, properties, and care.</p>
              <Button variant="outline" asChild>
                <Link href="/fabric-guide">View Guide</Link>
              </Button>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sample Order</h3>
              <p className="text-gray-600 mb-4">Order fabric samples to test colors and textures at home.</p>
              <Button variant="outline" asChild>
                <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>Order Samples</Link>
              </Button>
            </div>
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
              Complete interior design and upholstery services
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Link 
              href={`/fabric-stores/${city}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                Fabric Stores
              </h3>
              <p className="text-gray-600">
                Find the best fabric stores and retailers in {cityData.displayName}
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
              href={`/interior-designer/${city}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                Interior Design
              </h3>
              <p className="text-gray-600">
                Complete interior design consultation and services in {cityData.displayName}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Fabric Services Near {cityData.displayName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional fabric services in nearby areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/fabric/${area.slug}`}
                className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900">{area.name}</div>
                <div className="text-sm text-purple-600 mt-1">Fabric Services</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for AI Platforms */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fabric FAQ - {cityData.displayName}
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What fabric types are best for {cityData.displayName}'s climate?
              </h3>
              <p className="text-gray-700">
                For {climateInfo.description} conditions in {cityData.displayName}, performance fabrics 
                like Sunbrella and Crypton work exceptionally well. These resist humidity, mold, 
                and UV damage while maintaining comfort and durability.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do I choose the right fabric for my furniture?
              </h3>
              <p className="text-gray-700">
                Consider your lifestyle, climate, and usage patterns. High-traffic areas benefit 
                from performance fabrics, while formal spaces can use designer materials. 
                Our consultation service helps match fabrics to your specific needs.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you provide fabric installation in {cityData.displayName}?
              </h3>
              <p className="text-gray-700">
                Yes, we provide complete fabric installation and upholstery services throughout 
                {cityData.displayName} and surrounding areas. Professional installation ensures 
                optimal results and warranty coverage.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I order fabric samples for {cityData.displayName} delivery?
              </h3>
              <p className="text-gray-700">
                Absolutely! We provide fabric samples for evaluation in your home environment. 
                This ensures accurate color and texture assessment under your specific lighting 
                conditions before final selection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Fabric?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Expert fabric consultation and installation services in {cityData.displayName}
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600" asChild>
              <Link href="/fabric-selection">View Services</Link>
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
      considerations: [
        {
          title: 'Salt Air Resistance',
          description: 'Marine-grade fabrics that resist salt air corrosion and maintain color integrity',
          recommendations: ['Solution-dyed acrylics', 'Marine vinyl', 'Treated polyester']
        },
        {
          title: 'High Humidity',
          description: 'Quick-dry and moisture-wicking materials for optimal comfort',
          recommendations: ['Performance synthetics', 'Treated natural fibers', 'Mesh backing']
        },
        {
          title: 'Intense UV',
          description: 'Maximum fade resistance for bright coastal sun exposure',
          recommendations: ['UV-stabilized fabrics', 'Solution-dyed materials', 'Fade warranties']
        }
      ]
    }
  }
  
  return {
    description: 'humid subtropical',
    considerations: [
      {
        title: 'Humidity Control',
        description: 'Fabrics that resist moisture absorption and promote air circulation',
        recommendations: ['Performance blends', 'Breathable weaves', 'Anti-microbial treatments']
      },
      {
        title: 'Easy Maintenance',
        description: 'Low-maintenance materials suitable for busy Florida lifestyles',
        recommendations: ['Stain-resistant treatments', 'Machine washable options', 'Spot-clean capability']
      },
      {
        title: 'Year-round Comfort',
        description: 'Temperature-regulating fabrics for consistent comfort',
        recommendations: ['Moisture-wicking fibers', 'Breathable constructions', 'Quick-dry properties']
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