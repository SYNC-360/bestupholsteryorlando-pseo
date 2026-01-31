import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Upholstery Services | Furniture Reupholstery | Orlando FL',
  description: 'Expert furniture upholstery services in Orlando. Custom reupholstery, fabric selection, frame repair, and cushion replacement. 50+ years of craftsmanship.',
  keywords: 'upholstery services orlando, furniture reupholstery, custom upholstery, upholstery repair, furniture restoration orlando',
  openGraph: {
    title: 'Professional Upholstery Services | Orlando FL',
    description: 'Expert furniture upholstery services with 50+ years of craftsmanship',
    url: 'https://bestupholsteryorlando.com/upholstery-services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bestupholsteryorlando.com/upholstery-services',
  },
}

const upholsteryServices = [
  {
    title: 'Sofa Reupholstery',
    description: 'Transform your tired sofa with premium fabrics and expert craftsmanship.',
    features: ['Frame inspection & repair', 'Spring system restoration', 'Custom cushion creation', 'Professional fabric installation'],
    price: 'Starting at $800',
  },
  {
    title: 'Chair Upholstery',
    description: 'Restore dining chairs, accent chairs, and office furniture to like-new condition.',
    features: ['Structural reinforcement', 'Padding replacement', 'Fabric selection guidance', 'Quick turnaround available'],
    price: 'Starting at $150',
  },
  {
    title: 'Sectional Reupholstery',
    description: 'Complete sectional restoration with color coordination and pattern matching.',
    features: ['Multi-piece coordination', 'Corner piece specialization', 'Pattern alignment', 'Modular component service'],
    price: 'Starting at $1,200',
  },
  {
    title: 'Ottoman & Bench Upholstery',
    description: 'Perfect finishing touches with ottoman and bench reupholstery services.',
    features: ['Storage ottoman service', 'Custom bench creation', 'Coordinated fabric matching', 'Quick completion'],
    price: 'Starting at $120',
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Free Consultation',
    description: 'In-home assessment of your furniture with honest recommendations and detailed quote.',
  },
  {
    step: '2',
    title: 'Fabric Selection',
    description: 'Professional guidance choosing the perfect fabric for your lifestyle and climate.',
  },
  {
    step: '3',
    title: 'Expert Craftsmanship',
    description: 'Skilled artisans restore your furniture using time-tested techniques.',
  },
  {
    step: '4',
    title: 'Quality Delivery',
    description: 'White-glove delivery and setup with care instructions for lasting beauty.',
  },
]

const serviceAreas = [
  { name: 'Orlando Upholstery', slug: 'orlando-fl' },
  { name: 'Tampa Upholstery', slug: 'tampa-fl' },
  { name: 'Miami Upholstery', slug: 'miami-fl' },
  { name: 'Jacksonville Upholstery', slug: 'jacksonville-fl' },
  { name: 'Fort Lauderdale Upholstery', slug: 'fort-lauderdale-fl' },
  { name: 'St. Petersburg Upholstery', slug: 'st-petersburg-fl' },
]

export default function UpholsteryServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Professional Upholstery Services
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
              Expert furniture reupholstery in Orlando, FL. Transform your favorite pieces 
              with premium fabrics and 50+ years of craftsmanship. Florida's humidity-resistant specialists.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tools/yardage-calculator">Calculate Fabric Needed</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Upholstery Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete furniture restoration for every piece in your home
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {upholsteryServices.map((service) => (
              <div key={service.title} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <span className="text-amber-600 font-semibold">{service.price}</span>
                </div>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional upholstery process ensuring quality results
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-600 text-white rounded-full text-xl font-bold mb-4">
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

      {/* Climate Specialization */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Florida Climate Expertise</h2>
            <p className="mt-4 text-lg text-gray-600">
              Specialized knowledge for humid, coastal conditions
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Humidity Resistance</h3>
              <p className="text-gray-600">Fabrics and treatments specifically chosen for Florida's humid climate.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">UV Protection</h3>
              <p className="text-gray-600">Fade-resistant fabrics and treatments for intense Florida sunshine.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mold Prevention</h3>
              <p className="text-gray-600">Anti-microbial treatments and breathable fabrics prevent mold growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Upholstery Service Areas</h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional upholstery services throughout Florida
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/upholstery/${area.slug}`}
                className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900">{area.name}</div>
                <div className="text-sm text-amber-600 mt-1">View Services</div>
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
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Upholstery FAQ
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How much does furniture reupholstery cost?
              </h3>
              <p className="text-gray-700">
                Upholstery costs vary by piece size and fabric choice. Chairs start at $150, 
                sofas at $800, and sectionals at $1,200. We provide free estimates with 
                detailed pricing breakdown.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How long does upholstery work take?
              </h3>
              <p className="text-gray-700">
                Most upholstery projects take 2-4 weeks. Chairs typically 1-2 weeks, 
                sofas 2-3 weeks, and large sectionals up to 4 weeks. Rush service 
                available for additional fee.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What fabrics work best in Florida's climate?
              </h3>
              <p className="text-gray-700">
                For Florida's humid climate, we recommend performance fabrics, solution-dyed 
                acrylics, and treated cottons. These resist humidity, mold, and fading while 
                maintaining comfort and style.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you repair furniture frames?
              </h3>
              <p className="text-gray-700">
                Yes, we provide complete frame repair including joint reinforcement, 
                spring replacement, and structural restoration. We'll assess your 
                piece and recommend the most cost-effective approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Restore Your Furniture?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get a free consultation and quote for professional upholstery services
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600" asChild>
              <Link href="/fabric-selection">Choose Your Fabric</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}