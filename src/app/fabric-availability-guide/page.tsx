import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'
import { FabricAvailabilityEducation, FabricAvailabilityAlert } from '@/components/content/fabric-availability-education'

export const metadata: Metadata = {
  title: 'Fabric Availability Guide | Smart Ordering Strategy for Upholstery Projects',
  description: 'Essential guide to fabric availability, discontinuation patterns, and smart ordering strategies. Learn professional techniques to avoid project delays and ensure fabric consistency.',
  keywords: 'fabric availability, fabric discontinuation, upholstery fabric ordering, dye lot consistency, fabric sampling strategy, pattern availability',
  openGraph: {
    title: 'Fabric Availability Guide | Smart Ordering Strategy',
    description: 'Professional insights on fabric availability, discontinuation patterns, and smart ordering strategies to ensure upholstery project success.',
    url: 'https://bestupholsteryorlando.com/fabric-availability-guide',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bestupholsteryorlando.com/fabric-availability-guide',
  },
}

export default function FabricAvailabilityGuidePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Fabric Availability and Smart Ordering Strategy",
    "description": "Professional insights on fabric discontinuation patterns, dye lot consistency, and strategic ordering approaches for upholstery projects.",
    "author": {
      "@type": "Organization",
      "name": SITE_CONFIG.name
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_CONFIG.url}/images/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://bestupholsteryorlando.com/fabric-availability-guide"
    },
    "url": "https://bestupholsteryorlando.com/fabric-availability-guide"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Fabric Availability Guide
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
                Professional insights on fabric discontinuation patterns, dye lot consistency, and strategic ordering approaches 
                that prevent upholstery project delays and ensure perfect results.
              </p>
              <div className="mt-10 flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Professional Guidance</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/tools/yardage-calculator">Calculate Fabric Needs</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Reality Overview */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                The Reality of Fabric Industry Supply
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Understanding the dynamics behind fabric availability challenges
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">30%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Pattern Discontinuation Rate
                </h3>
                <p className="text-gray-600">
                  Approximately 30% of fabric patterns are discontinued annually without advance notice to consumers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-600">2-4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Weeks Notice (Average)
                </h3>
                <p className="text-gray-600">
                  Most popular patterns disappear within 2-4 weeks of initial availability decline.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">15%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Dye Lot Variation
                </h3>
                <p className="text-gray-600">
                  Up to 15% visible color variation can occur between different production runs of the same pattern.
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <FabricAvailabilityAlert 
                message="These aren't sales tactics - they're manufacturing realities. Smart fabric selection strategy protects your project investment and timeline."
                type="info"
              />
            </div>
          </div>
        </section>

        {/* Main Educational Content */}
        <FabricAvailabilityEducation variant="section" />

        {/* Advanced Strategies */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Advanced Fabric Availability Strategies
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Professional techniques used by interior designers and upholstery professionals
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              
              {/* Multiple Source Strategy */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h3M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Multiple Source Strategy
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Professional designers never rely on a single fabric source. They maintain relationships with 3-5 suppliers 
                    and cross-reference availability across multiple channels.
                  </p>
                  <div className="bg-blue-50 rounded p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Implementation Steps:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Check fabric availability at 3+ different retailers</li>
                      <li>• Verify stock levels and reorder timelines</li>
                      <li>• Identify alternate colorways of the same pattern</li>
                      <li>• Document supplier part numbers for reference</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Pattern Family Approach */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Pattern Family Approach
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Instead of falling in love with one specific pattern, identify a "family" of 3-4 patterns that achieve 
                    the same design goal. This gives you immediate alternatives when discontinuation strikes.
                  </p>
                  <div className="bg-green-50 rounded p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Family Selection Criteria:</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Similar color palette and intensity</li>
                      <li>• Comparable pattern scale and visual weight</li>
                      <li>• Same fabric performance characteristics</li>
                      <li>• Compatible with your design aesthetic</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Timing Strategy */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Strategic Timing
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Fabric manufacturers follow predictable discontinuation cycles. Understanding these patterns helps 
                    you time purchases strategically.
                  </p>
                  <div className="bg-purple-50 rounded p-4">
                    <h4 className="font-semibold text-purple-900 mb-2">Optimal Ordering Times:</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Avoid July-August (manufacturer inventory clearing)</li>
                      <li>• Spring launches: order by June for best selection</li>
                      <li>• Fall launches: order by November before holidays</li>
                      <li>• Monitor manufacturer "sale" periods (often clearing inventory)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Documentation System */}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 text-amber-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Professional Documentation
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Maintaining detailed records of fabric specifications, availability, and alternates ensures you can 
                    recreate successful combinations or pivot quickly when needed.
                  </p>
                  <div className="bg-amber-50 rounded p-4">
                    <h4 className="font-semibold text-amber-900 mb-2">Documentation Essentials:</h4>
                    <ul className="text-sm text-amber-800 space-y-1">
                      <li>• Manufacturer name, pattern name, and color number</li>
                      <li>• Purchase date, source, and dye lot information</li>
                      <li>• Digital photos of actual fabric in your lighting</li>
                      <li>• Performance specifications and care instructions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes to Avoid */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Common Fabric Availability Mistakes
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Learn from these frequent project pitfalls to protect your investment
              </p>
            </div>
            
            <div className="space-y-8">
              
              {/* Mistake 1 */}
              <div className="bg-red-50 border-l-4 border-red-400 p-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-red-800">
                      "I'll order more later if needed"
                    </h3>
                    <p className="text-red-700 mt-2">
                      This approach fails 40% of the time. Popular patterns often disappear before projects are complete, 
                      and dye lot variations make it impossible to match later purchases perfectly.
                    </p>
                    <p className="text-red-600 font-medium mt-2">
                      Solution: Calculate complete needs upfront and order 10-15% extra in the same purchase.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 2 */}
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-orange-800">
                      "This sample is enough to decide"
                    </h3>
                    <p className="text-orange-700 mt-2">
                      Single samples don't show how patterns work in large applications, don't reveal dye lot variations, 
                      and provide no backup options when the pattern becomes unavailable.
                    </p>
                    <p className="text-orange-600 font-medium mt-2">
                      Solution: Order 3-5 samples of patterns you genuinely love, including close alternates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mistake 3 */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-yellow-800">
                      "The store said they can reorder it"
                    </h3>
                    <p className="text-yellow-700 mt-2">
                      Store staff often don't know manufacturer discontinuation schedules. "Available for reorder" 
                      can change overnight, leaving your project in limbo.
                    </p>
                    <p className="text-yellow-600 font-medium mt-2">
                      Solution: Verify availability directly with manufacturers when possible, and always have backup options ready.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Fabric Availability FAQ
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How can I tell if a fabric pattern is likely to be discontinued soon?
                </h3>
                <p className="text-gray-700">
                  Warning signs include: clearance pricing, limited colorway availability, long lead times, or when sales staff 
                  mention "limited quantities." Additionally, patterns that have been on the market for 2+ years are at higher 
                  discontinuation risk. When in doubt, order everything you need immediately.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What's the difference between "discontinued" and "temporarily out of stock"?
                </h3>
                <p className="text-gray-700">
                  "Temporarily out of stock" means the manufacturer plans to produce more of the pattern, usually within 6-12 weeks. 
                  "Discontinued" means production has ended permanently. However, retailers sometimes don't know which situation applies, 
                  so treat any unavailability as potentially permanent and activate backup plan options.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Is it worth paying more to secure fabric availability?
                </h3>
                <p className="text-gray-700">
                  Absolutely. The cost difference between regular pricing and rush/premium pricing is typically 10-20%, 
                  but starting over with a different fabric can cost 100%+ in labor, delays, and design compromises. 
                  Secure availability of your preferred pattern first, then negotiate pricing.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How do professional designers handle fabric availability challenges?
                </h3>
                <p className="text-gray-700">
                  Professional designers build relationships with fabric reps who provide advance discontinuation notices, 
                  maintain sample libraries of proven patterns, and always present clients with 3-4 options instead of one "perfect" choice. 
                  They also calculate and purchase complete project needs immediately upon approval rather than ordering in phases.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Service CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Professional Fabric Selection Strategy
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Our fabric-first approach includes availability strategy, backup pattern identification, and precise ordering guidance 
              to ensure your project succeeds without delays or compromises.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Availability Assessment</h3>
                <p className="text-blue-100 text-sm">Complete market analysis of your preferred patterns and viable alternatives</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Strategic Ordering</h3>
                <p className="text-blue-100 text-sm">Precise yardage calculations with optimal ordering timing and backup plans</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Project Protection</h3>
                <p className="text-blue-100 text-sm">Guaranteed fabric consistency and professional installation with warranty coverage</p>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Availability Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/fabric-selection">View Fabric Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}