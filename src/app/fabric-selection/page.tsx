import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Fabric Selection Services | Upholstery Fabric Orlando FL',
  description: 'Expert fabric selection for Florida climate. Performance fabrics, humidity-resistant materials, UV protection. Professional consultation for optimal durability and style.',
  keywords: 'fabric selection orlando, upholstery fabric consultation, performance fabrics florida, humidity resistant fabric, UV protection fabric',
  openGraph: {
    title: 'Professional Fabric Selection Services | Orlando FL',
    description: 'Expert fabric selection for Florida climate with performance and style',
    url: 'https://bestupholsteryorlando.com/fabric-selection',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bestupholsteryorlando.com/fabric-selection',
  },
}

const fabricCategories = [
  {
    title: 'Performance Fabrics',
    description: 'Advanced synthetic fabrics designed for high-traffic and humid environments.',
    features: ['Stain resistant', 'Moisture wicking', 'Easy cleaning', 'Color retention'],
    ideal: 'High-traffic areas, families with kids/pets, humid climates',
    examples: 'Crypton, Sunbrella, Revolution',
  },
  {
    title: 'Natural Fibers',
    description: 'Traditional cotton, linen, and wool fabrics with modern treatments.',
    features: ['Breathable', 'Classic feel', 'Natural beauty', 'Treatment options'],
    ideal: 'Traditional decor, low-traffic areas, climate-controlled spaces',
    examples: 'Treated cotton, performance linen, wool blends',
  },
  {
    title: 'Leather & Faux Leather',
    description: 'Premium leather and high-quality synthetic alternatives.',
    features: ['Durable', 'Easy care', 'Luxury feel', 'Age beautifully'],
    ideal: 'Modern decor, easy maintenance, long-term investment',
    examples: 'Top-grain leather, bonded leather, polyurethane',
  },
  {
    title: 'Specialty Fabrics',
    description: 'Unique materials for specific needs and style preferences.',
    features: ['Unique textures', 'Specialized properties', 'Design flexibility', 'Custom options'],
    ideal: 'Accent pieces, specific functional needs, design statements',
    examples: 'Velvet, microfiber, outdoor fabrics, antimicrobial',
  },
]

const climateFactors = [
  {
    factor: 'Humidity Resistance',
    description: 'Fabrics that resist moisture absorption and mold growth in Florida\'s humid climate.',
    recommendations: ['Solution-dyed acrylics', 'Synthetic blends', 'Treated natural fibers'],
  },
  {
    factor: 'UV Protection',
    description: 'Fade-resistant materials that withstand intense Florida sunshine.',
    recommendations: ['Solution-dyed fabrics', 'UV-treated materials', 'Indoor/outdoor options'],
  },
  {
    factor: 'Air Circulation',
    description: 'Breathable fabrics that allow airflow and prevent moisture buildup.',
    recommendations: ['Loosely woven materials', 'Performance mesh', 'Moisture-wicking fibers'],
  },
  {
    factor: 'Easy Maintenance',
    description: 'Low-maintenance fabrics ideal for busy Florida lifestyles.',
    recommendations: ['Stain-resistant treatments', 'Machine washable options', 'Quick-dry materials'],
  },
]

const selectionProcess = [
  {
    step: '1',
    title: 'Lifestyle Assessment',
    description: 'We evaluate how you use your furniture, who uses it, and your maintenance preferences.',
  },
  {
    step: '2',
    title: 'Climate Considerations',
    description: 'Florida\'s humidity, UV exposure, and temperature changes guide our recommendations.',
  },
  {
    step: '3',
    title: 'Style Coordination',
    description: 'Color, pattern, and texture selection to complement your existing decor perfectly.',
  },
  {
    step: '4',
    title: 'Performance Testing',
    description: 'We test fabric samples for durability, colorfastness, and suitability for your needs.',
  },
]

const serviceAreas = [
  { name: 'Orlando Fabric Selection', slug: 'orlando-fl' },
  { name: 'Tampa Fabric Consultation', slug: 'tampa-fl' },
  { name: 'Miami Fabric Services', slug: 'miami-fl' },
  { name: 'Jacksonville Fabric Selection', slug: 'jacksonville-fl' },
]

export default function FabricSelectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Professional Fabric Selection
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
              Expert fabric consultation for Florida's unique climate. Performance fabrics, 
              style coordination, and durability testing ensure perfect results for your furniture.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/fabric-guide">Fabric Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Fabric Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Fabric Categories</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive selection of fabrics for every need and style
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
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-1">Ideal For:</h4>
                  <p className="text-sm text-gray-600">{category.ideal}</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Examples:</h4>
                  <p className="text-sm text-blue-600">{category.examples}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Climate Considerations */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Florida Climate Considerations</h2>
            <p className="mt-4 text-lg text-gray-600">
              Specialized fabric selection for humid, coastal environments
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {climateFactors.map((factor) => (
              <div key={factor.factor} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {factor.factor}
                </h3>
                <p className="text-gray-600 mb-4">
                  {factor.description}
                </p>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Recommended Fabrics:</h4>
                  <ul className="space-y-1">
                    {factor.recommendations.map((rec) => (
                      <li key={rec} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></div>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Selection Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              Systematic approach ensuring perfect fabric choice for your needs
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {selectionProcess.map((step) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fabric Selection Tools</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Yardage Calculator</h3>
              <p className="text-gray-600 mb-4">Calculate exact fabric requirements for your furniture.</p>
              <Button variant="outline" asChild>
                <Link href="/tools/yardage-calculator">Calculate</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fabric Guide</h3>
              <p className="text-gray-600 mb-4">Comprehensive guide to fabric types and properties.</p>
              <Button variant="outline" asChild>
                <Link href="/fabric-guide">View Guide</Link>
              </Button>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Sample Order</h3>
              <p className="text-gray-600 mb-4">Order fabric samples to test at home.</p>
              <Button variant="outline" asChild>
                <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>Order Samples</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Fabric Consultation Areas</h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional fabric selection services throughout Florida
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/fabric/${area.slug}`}
                className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900">{area.name}</div>
                <div className="text-sm text-blue-600 mt-1">View Services</div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/locations">View All Service Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section for AI Platforms */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Fabric Selection FAQ
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What fabrics work best in Florida's humid climate?
              </h3>
              <p className="text-gray-700">
                Solution-dyed acrylics, performance synthetics, and treated natural fibers 
                work best in Florida. These resist humidity, mold, and fading while 
                maintaining comfort and durability.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How do I choose between natural and synthetic fabrics?
              </h3>
              <p className="text-gray-700">
                Consider your lifestyle and climate. Synthetics offer superior performance 
                and easy care, while treated natural fibers provide traditional feel with 
                modern protection. We help you find the perfect balance.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Can I bring my own fabric for upholstery?
              </h3>
              <p className="text-gray-700">
                Yes, we work with customer-provided fabrics. However, we recommend our 
                professional selection for optimal results in Florida's climate. 
                We'll assess your fabric for suitability.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much fabric do I need for my furniture?
              </h3>
              <p className="text-gray-700">
                Fabric requirements vary by furniture size and style. Use our yardage 
                calculator for estimates, or schedule a consultation for precise 
                measurements and professional recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Your Perfect Fabric?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a consultation with our fabric selection experts
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>Order Samples</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}