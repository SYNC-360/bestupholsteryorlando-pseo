import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Upholstery Services | Best Upholstery Orlando',
  description: 'Comprehensive upholstery services in Orlando, FL. Custom furniture reupholstery, fabric selection, marine upholstery, and commercial services. Expert craftsmanship since 1970.',
  keywords: 'upholstery services orlando, furniture reupholstery, custom upholstery, fabric selection, marine upholstery, commercial upholstery',
  openGraph: {
    title: 'Professional Upholstery Services | Best Upholstery Orlando',
    description: 'Comprehensive upholstery services in Orlando, FL. Expert craftsmanship since 1970.',
    url: 'https://bestupholsteryorlando.com/services',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bestupholsteryorlando.com/services',
  },
}

const services = [
  {
    title: 'Upholstery Services',
    href: '/upholstery-services',
    description: 'Complete furniture reupholstery with premium fabrics and expert craftsmanship.',
    features: ['Custom fabric selection', 'Frame repair', 'Cushion replacement', 'Springs & padding'],
  },
  {
    title: 'Fabric Selection',
    href: '/fabric-selection',
    description: 'Professional fabric consultation and selection for optimal durability and style.',
    features: ['Climate considerations', 'Usage analysis', 'Color coordination', 'Performance fabrics'],
  },
  {
    title: 'Custom Upholstery',
    href: '/custom-upholstery',
    description: 'Bespoke furniture creation and customization to your exact specifications.',
    features: ['Design consultation', 'Custom sizing', 'Style matching', 'Premium materials'],
  },
  {
    title: 'Furniture Repair',
    href: '/furniture-repair',
    description: 'Expert furniture restoration and repair services for antiques and modern pieces.',
    features: ['Frame restoration', 'Joint reinforcement', 'Structural repair', 'Refinishing'],
  },
  {
    title: 'Marine Upholstery',
    href: '/marine-upholstery',
    description: 'Specialized marine upholstery with weather-resistant fabrics and marine hardware.',
    features: ['UV-resistant fabrics', 'Waterproof materials', 'Corrosion-resistant hardware', 'Custom fitting'],
  },
  {
    title: 'Commercial Services',
    href: '/commercial-upholstery',
    description: 'Large-scale commercial upholstery for restaurants, hotels, and offices.',
    features: ['Volume pricing', 'Contract fabrics', 'Quick turnaround', 'Maintenance programs'],
  },
  {
    title: 'Restoration Services',
    href: '/restoration-services',
    description: 'Complete furniture restoration bringing antiques and vintage pieces back to life.',
    features: ['Period-appropriate fabrics', 'Historical techniques', 'Antique preservation', 'Expert refinishing'],
  },
]

const serviceAreas = [
  'Orlando', 'Tampa', 'Miami', 'Jacksonville', 'Fort Lauderdale',
  'St. Petersburg', 'Clearwater', 'Sarasota', 'Gainesville', 'Ocala'
]

export default function ServicesPage() {
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
              Expert furniture upholstery and restoration services across Florida. 
              Over 50 years of craftsmanship, premium fabrics, and guaranteed quality.
            </p>
            <div className="mt-10 flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/fabric-guide">View Fabric Guide</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comprehensive upholstery solutions for every need
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="w-full">
                  <Link href={service.href}>Learn More</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Service Areas</h2>
            <p className="mt-4 text-lg text-gray-600">
              Professional upholstery services throughout Florida
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {serviceAreas.map((city) => (
              <Link
                key={city}
                href={`/upholstery/${city.toLowerCase().replace(' ', '-')}-fl`}
                className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:border-amber-300 hover:shadow-md transition-all"
              >
                <div className="font-semibold text-gray-900">{city}</div>
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
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What upholstery services do you offer?
              </h3>
              <p className="text-gray-700">
                We offer comprehensive upholstery services including furniture reupholstery, 
                custom upholstery, fabric selection, furniture repair, marine upholstery, 
                commercial services, and antique restoration across Florida.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                How long does upholstery work take?
              </h3>
              <p className="text-gray-700">
                Typical upholstery projects take 2-4 weeks depending on complexity. 
                Rush jobs available for additional fee. We provide estimated completion 
                dates with every quote.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Do you provide fabric or do I need to bring my own?
              </h3>
              <p className="text-gray-700">
                We offer both options. Our showroom features hundreds of premium fabrics, 
                or you can bring your own fabric. We provide professional fabric 
                consultation to ensure optimal results.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                What areas in Florida do you serve?
              </h3>
              <p className="text-gray-700">
                We serve Orlando, Tampa, Miami, Jacksonville, Fort Lauderdale, and 
                surrounding areas throughout Florida. Free pickup and delivery 
                available within our service areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Furniture?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get a free quote for professional upholstery services
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-amber-600" asChild>
              <Link href={`tel:${SITE_CONFIG.phone}`}>Call {SITE_CONFIG.phone}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}