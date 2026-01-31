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

  const title = `Interior Designer in ${cityData.displayName}, ${cityData.state} | Custom Upholstery & Design`
  const description = `Professional interior designer in ${cityData.displayName} specializing in custom upholstery, furniture selection, and design consultation. Transform your space with expert guidance.`
  
  return {
    title,
    description,
    keywords: `interior designer ${cityData.displayName.toLowerCase()}, home decorator ${cityData.state.toLowerCase()}, interior design ${cityData.displayName.toLowerCase()}, custom upholstery designer, furniture design`,
    openGraph: {
      title,
      description,
      url: `https://bestupholsteryorlando.com/interior-designer/${city}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://bestupholsteryorlando.com/interior-designer/${city}`,
    },
  }
}

export async function generateStaticParams() {
  const { cityLookup } = await import('@/lib/city-data-loader')
  return Object.keys(cityLookup).map((city) => ({
    city: city,
  }))
}

const designServices = [
  {
    title: 'Custom Upholstery Design',
    description: 'Transform existing furniture with professional reupholstery and custom fabric selection.',
    features: ['Fabric selection consultation', 'Color coordination', 'Pattern matching', 'Style optimization'],
    projects: ['Sofa reupholstery', 'Dining room chairs', 'Accent furniture', 'Window treatments'],
  },
  {
    title: 'Furniture Selection & Layout',
    description: 'Expert guidance on furniture selection, placement, and room layout optimization.',
    features: ['Space planning', 'Traffic flow analysis', 'Furniture recommendations', 'Custom pieces'],
    projects: ['Living room design', 'Bedroom layouts', 'Dining areas', 'Home office spaces'],
  },
  {
    title: 'Color Scheme Development',
    description: 'Professional color consultation and palette development for cohesive interior design.',
    features: ['Color psychology', 'Lighting considerations', 'Fabric coordination', 'Paint selection'],
    projects: ['Whole home palettes', 'Room-specific schemes', 'Accent coordination', 'Seasonal updates'],
  },
  {
    title: 'Style Consultation',
    description: 'Identify and develop your personal design style with professional guidance.',
    features: ['Style assessment', 'Trend integration', 'Personal preference analysis', 'Budget planning'],
    projects: ['Modern contemporary', 'Traditional classic', 'Coastal casual', 'Mid-century modern'],
  },
]

const designStyles = [
  {
    style: 'Coastal Contemporary',
    description: 'Light, airy designs perfect for Florida\'s beachside lifestyle',
    elements: ['Natural fibers', 'Coastal colors', 'Relaxed layouts', 'Outdoor integration'],
    ideal: 'Beach homes, waterfront properties, casual living',
  },
  {
    style: 'Modern Tropical',
    description: 'Clean lines with tropical influences and climate-conscious choices',
    elements: ['Performance fabrics', 'Bold patterns', 'Natural textures', 'Indoor plants'],
    ideal: 'Contemporary homes, urban condos, modern lifestyles',
  },
  {
    style: 'Traditional Elegance',
    description: 'Classic sophistication adapted for Florida\'s climate and lifestyle',
    elements: ['Quality fabrics', 'Timeless patterns', 'Formal layouts', 'Rich textures'],
    ideal: 'Formal homes, traditional architecture, elegant spaces',
  },
  {
    style: 'Casual Comfort',
    description: 'Family-friendly designs emphasizing comfort and durability',
    elements: ['Performance materials', 'Easy-care fabrics', 'Flexible layouts', 'Kid-friendly options'],
    ideal: 'Family homes, high-traffic areas, active lifestyles',
  },
]

const designProcess = [
  {
    step: '1',
    title: 'Initial Consultation',
    description: 'Discuss your vision, lifestyle, budget, and design preferences in detail.',
    duration: '1-2 hours',
  },
  {
    step: '2',
    title: 'Design Development',
    description: 'Create comprehensive design plan with fabric selections and furniture recommendations.',
    duration: '1-2 weeks',
  },
  {
    step: '3',
    title: 'Implementation Planning',
    description: 'Coordinate timelines, ordering, and installation schedules for seamless execution.',
    duration: '1 week',
  },
  {
    step: '4',
    title: 'Project Completion',
    description: 'Professional installation and styling with final adjustments and care instructions.',
    duration: '2-4 weeks',
  },
]

export default async function InteriorDesignerPage({ params }: PageProps) {
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
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Interior Designer in {cityData.displayName}, {cityData.state}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
              Professional interior design services specializing in custom upholstery and furniture design. 
              Transform your {cityData.displayName} home with expert design consultation optimized for {climateInfo.description} living.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Design Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/fabric-selection">View Fabric Options</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Interior Design Services in {cityData.displayName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive design services from concept to completion
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {designServices.map((service) => (
              <div key={service.title} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 text-sm">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-gray-700">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Project Types:</h4>
                    <ul className="space-y-1">
                      {service.projects.map((project) => (
                        <li key={project} className="flex items-center text-gray-700">
                          <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></div>
                          {project}
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

      {/* Design Styles */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Popular Design Styles in {cityData.displayName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Design styles perfectly suited for Florida living
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {designStyles.map((style) => (
              <div key={style.style} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {style.style}
                </h3>
                <p className="text-gray-600 mb-4">
                  {style.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Elements:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {style.elements.map((element) => (
                      <div key={element} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {element}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-medium text-gray-900 mb-1">Ideal For:</h4>
                  <p className="text-sm text-gray-600">{style.ideal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Design Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              Systematic approach ensuring exceptional results
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {designProcess.map((step) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {step.description}
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  Timeline: {step.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Design Considerations */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Designing for {cityData.displayName}'s Climate
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Expert design solutions for {climateInfo.description} conditions
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {climateInfo.designConsiderations.map((consideration, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {consideration.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {consideration.description}
                </p>
                <ul className="space-y-1">
                  {consideration.solutions.map((solution) => (
                    <li key={solution} className="text-sm text-blue-600">
                      • {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Design Specializations</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Upholstery</h3>
              <p className="text-gray-600">Specializing in custom furniture reupholstery with design coordination.</p>
              <Link href="/custom-upholstery" className="text-blue-600 hover:underline text-sm mt-2 block">
                Learn More
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Performance Fabrics</h3>
              <p className="text-gray-600">Expert selection of performance materials for Florida's climate.</p>
              <Link href="/fabric-selection" className="text-blue-600 hover:underline text-sm mt-2 block">
                Learn More
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mid-Century Modern</h3>
              <p className="text-gray-600">Specializing in MCM furniture restoration and styling.</p>
              <Link href={`/mid-century-modern/${city}`} className="text-blue-600 hover:underline text-sm mt-2 block">
                Learn More
              </Link>
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
              Complete interior design and upholstery solutions
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
                Professional furniture reupholstery with design coordination in {cityData.displayName}
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
                Expert fabric consultation and selection services in {cityData.displayName}
              </p>
            </Link>
            
            <Link 
              href={`/home-decorator/${city}`}
              className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow group"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 mb-2">
                Home Decorator
              </h3>
              <p className="text-gray-600">
                Complete home decoration and styling services in {cityData.displayName}
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
              Interior Design Near {cityData.displayName}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional interior design services in nearby areas
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/interior-designer/${area.slug}`}
                className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900">{area.name}</div>
                <div className="text-sm text-blue-600 mt-1">Interior Design</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section for AI Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Interior Design FAQ - {cityData.displayName}
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What interior design services do you offer in {cityData.displayName}?
              </h3>
              <p className="text-gray-700">
                We offer comprehensive interior design services including custom upholstery, 
                furniture selection, color consultation, space planning, and style development. 
                Our specialty is integrating custom upholstery into complete design schemes.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do you design for Florida's climate?
              </h3>
              <p className="text-gray-700">
                We specialize in {climateInfo.description} design considerations including 
                performance fabrics, UV protection, humidity resistance, and easy maintenance. 
                Our designs balance style with Florida's unique environmental challenges.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you work with existing furniture?
              </h3>
              <p className="text-gray-700">
                Absolutely! Our custom upholstery services can transform existing furniture 
                to fit your new design scheme. We assess pieces for reupholstery potential 
                and integrate them seamlessly into your overall design.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What's your design process timeline?
              </h3>
              <p className="text-gray-700">
                Our typical process takes 4-8 weeks from initial consultation to completion. 
                This includes 1-2 weeks for design development, 1 week for planning, 
                and 2-4 weeks for implementation depending on project scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Professional interior design services in {cityData.displayName} with custom upholstery expertise
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Design Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
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
      designConsiderations: [
        {
          title: 'Coastal Elements',
          description: 'Design elements that embrace coastal living while providing durability',
          solutions: ['Marine-grade materials', 'Salt-air resistant finishes', 'Beach-inspired colors']
        },
        {
          title: 'Indoor/Outdoor Flow',
          description: 'Seamless transitions between interior and outdoor living spaces',
          solutions: ['Weather-resistant fabrics', 'Flexible layouts', 'Natural materials']
        },
        {
          title: 'Light Management',
          description: 'Controlling intense coastal sun while maximizing natural light',
          solutions: ['UV protection treatments', 'Light-filtering solutions', 'Reflective surfaces']
        }
      ]
    }
  }
  
  return {
    description: 'humid subtropical',
    designConsiderations: [
      {
        title: 'Climate Control',
        description: 'Design solutions that work with Florida\'s year-round warmth and humidity',
        solutions: ['Breathable fabrics', 'Moisture management', 'Easy-care materials']
      },
      {
        title: 'Lifestyle Integration',
        description: 'Designs that support active Florida lifestyles and entertaining',
        solutions: ['Performance materials', 'Flexible spaces', 'Low-maintenance options']
      },
      {
        title: 'Natural Elements',
        description: 'Incorporating Florida\'s natural beauty into interior design',
        solutions: ['Natural textures', 'Tropical influences', 'Outdoor connections']
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