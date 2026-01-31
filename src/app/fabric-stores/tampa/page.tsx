import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/constants'
import { FabricAvailabilityEducation, FabricAvailabilityAlert } from '@/components/content/fabric-availability-education'

export const metadata: Metadata = {
  title: 'Best Fabric Stores in Tampa, FL | Performance & Upholstery Fabrics',
  description: 'Find the best fabric stores in Tampa for upholstery, performance fabrics, and interior design. Expert selection + professional installation services. Climate-optimized for Tampa Bay.',
  keywords: 'fabric stores tampa, upholstery fabric florida, performance fabric stores, fabric stores near me tampa, fabric shops westshore, marine upholstery tampa bay',
  openGraph: {
    title: 'Best Fabric Stores in Tampa, FL | Performance & Upholstery Fabrics',
    description: 'Find the best fabric stores in Tampa for upholstery, performance fabrics, and interior design. Expert selection + professional installation services.',
    url: 'https://bestupholsteryorlando.com/fabric-stores/tampa',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bestupholsteryorlando.com/fabric-stores/tampa',
  },
}

const tampaFabricStores = [
  {
    name: "Tampa Bay Fabric Source",
    address: "4201 W Kennedy Blvd, Tampa, FL 33609",
    specialties: ["Upholstery Fabrics", "Performance Materials", "Outdoor Textiles"],
    features: "Wide selection of tropical-resistant fabrics",
    phone: "(813) 876-5432",
    neighborhood: "Westshore"
  },
  {
    name: "Hyde Park Textile Gallery", 
    address: "1702 S Howard Ave, Tampa, FL 33606",
    specialties: ["Designer Fabrics", "Custom Patterns", "Historic Reproductions"],
    features: "Specializes in humidity-resistant traditional patterns",
    phone: "(813) 251-7890",
    neighborhood: "Hyde Park"
  },
  {
    name: "Marine Canvas & Fabric Center",
    address: "3115 W Hillsborough Ave, Tampa, FL 33614", 
    specialties: ["Marine Upholstery", "Boat Canvas", "Outdoor Performance"],
    features: "Salt-air resistant materials for Tampa Bay boats",
    phone: "(813) 879-3456",
    neighborhood: "Westshore Marine"
  },
  {
    name: "Davis Islands Design Center",
    address: "260 S Davis Blvd, Tampa, FL 33606",
    specialties: ["Luxury Textiles", "Waterfront Fabrics", "Custom Design"],
    features: "High-end fabrics for waterfront living",
    phone: "(813) 251-4567",
    neighborhood: "Davis Islands"
  },
  {
    name: "Ybor Historic Fabrics",
    address: "1823 E 7th Ave, Tampa, FL 33605",
    specialties: ["Historic Patterns", "Traditional Textiles", "Restoration Materials"],
    features: "Period-appropriate fabrics for historic homes",
    phone: "(813) 247-8901",
    neighborhood: "Ybor City"
  },
  {
    name: "South Tampa Upholstery Supply",
    address: "3801 S Dale Mabry Hwy, Tampa, FL 33611",
    specialties: ["Professional Materials", "Trade Discounts", "Bulk Orders"],
    features: "Commercial-grade fabrics for professionals",
    phone: "(813) 837-2345",
    neighborhood: "South Tampa"
  }
]

const tampaClimateFactors = [
  {
    factor: "High Humidity (70-90%)",
    impact: "Fabrics must resist moisture absorption and mold growth",
    solution: "Moisture-wicking synthetics and antimicrobial treatments"
  },
  {
    factor: "Frequent Afternoon Storms",
    impact: "Quick-drying materials essential for humid recovery",
    solution: "Performance outdoor fabrics that shed water rapidly"
  },
  {
    factor: "Salt Air from Tampa Bay",
    impact: "Coastal corrosion can fade and damage untreated fabrics",
    solution: "Salt-air resistant treatments and marine-grade materials"
  },
  {
    factor: "Year-round Heat (avg 73°F)",
    impact: "Breathable fabrics needed for comfort in constant warmth",
    solution: "Open-weave patterns and temperature-regulating fibers"
  }
]

const tampaNeighborhoods = [
  {
    name: "Westshore Business District",
    style: "Executive Professional",
    needs: "Professional sophistication adapted for Tampa humidity",
    recommended: ["Performance leather", "Executive synthetics", "Climate-resistant luxury"]
  },
  {
    name: "Hyde Park Historic",
    style: "Turn-of-Century Elegance", 
    needs: "Traditional patterns with modern climate performance",
    recommended: ["Historic reproductions", "Treated natural fibers", "Period-appropriate performance"]
  },
  {
    name: "Davis Islands Waterfront",
    style: "Exclusive Island Living",
    needs: "Luxury materials built for waterfront exposure",
    recommended: ["Marine-grade luxury", "Water-resistant elegance", "Bay-proof sophistication"]
  },
  {
    name: "Ybor City Historic",
    style: "Cultural Heritage",
    needs: "Authentic period fabrics with tropical durability",
    recommended: ["Vintage patterns", "Humidity-resistant classics", "Cultural authenticity"]
  },
  {
    name: "South Tampa Family",
    style: "Upscale Suburban", 
    needs: "Family-friendly luxury that handles Tampa lifestyle",
    recommended: ["Performance luxury", "Kid-proof elegance", "Entertainment-ready"]
  },
  {
    name: "Channelside Urban",
    style: "High-rise Contemporary",
    needs: "Modern city living with waterfront influences",
    recommended: ["Urban synthetics", "Easy-care luxury", "Contemporary performance"]
  }
]

export default function TampaFabricStoresPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Best Upholstery Orlando - Tampa Fabric Services",
    "description": "Professional fabric stores and upholstery services in Tampa, Florida. Climate-optimized fabric selection for Tampa Bay's humid subtropical environment.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tampa", 
      "addressRegion": "FL",
      "addressCountry": "US"
    },
    "serviceArea": [
      "Tampa, Florida",
      "Hillsborough County",
      "Westshore", 
      "Hyde Park",
      "Davis Islands",
      "Ybor City",
      "South Tampa",
      "Channelside"
    ],
    "serviceType": ["Upholstery Services", "Fabric Selection", "Marine Upholstery"],
    "telephone": SITE_CONFIG.phone,
    "url": "https://bestupholsteryorlando.com/fabric-stores/tampa"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Best Fabric Stores in Tampa, Florida
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
                Find premium upholstery and performance fabrics in Tampa Bay. Professional fabric selection 
                optimized for Tampa's humid subtropical climate with expert installation services.
              </p>
              <div className="mt-10 flex gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact">Free Tampa Consultation</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/fabric-guide">Climate Guide</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Fabric Stores Directory */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Tampa Area Fabric Stores & Suppliers
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Local fabric retailers specializing in Tampa Bay's climate requirements
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tampaFabricStores.map((store, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {store.name}
                    </h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {store.neighborhood}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Address:</span> {store.address}
                  </p>
                  
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-medium">Phone:</span>{' '}
                    <a href={`tel:${store.phone}`} className="text-blue-600 hover:text-blue-800">
                      {store.phone}
                    </a>
                  </p>
                  
                  <div className="mb-3">
                    <span className="text-sm font-medium text-gray-900 block mb-1">Specialties:</span>
                    <div className="flex flex-wrap gap-1">
                      {store.specialties.map((specialty, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 italic">
                    {store.features}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-4xl mx-auto">
                <h3 className="text-lg font-semibold text-amber-800 mb-2">
                  🌟 Professional Fabric Selection Service
                </h3>
                <p className="text-amber-700 mb-4">
                  While these local stores provide excellent materials, our professional fabric selection service 
                  combines the best local sources with expert climate knowledge and guaranteed installation. 
                  We know which Tampa stores have the best options for your specific project needs.
                </p>
              </div>
              
              <div className="mt-6">
                <FabricAvailabilityAlert 
                  message="Tampa Fabric Tip: Popular outdoor and performance fabrics suitable for Tampa's climate can be discontinued frequently due to high demand. Consider ordering samples of 2-3 backup patterns you love to avoid project delays."
                  type="tip"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tampa Climate Considerations */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Tampa Climate & Fabric Selection
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Understanding Tampa Bay's unique environmental challenges for optimal fabric choices
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              {tampaClimateFactors.map((factor, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {factor.factor}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium text-red-600">Impact:</span> {factor.impact}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium text-green-600">Solution:</span> {factor.solution}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-blue-50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Why Tampa-Specific Fabric Knowledge Matters
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Local Expertise</h4>
                  <p className="text-blue-700 text-sm">
                    We understand how Tampa's Westshore business district humidity affects office fabrics differently 
                    than Hyde Park's historic home requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Climate Testing</h4>
                  <p className="text-blue-700 text-sm">
                    All our fabric recommendations are tested for Tampa Bay's specific combination of heat, 
                    humidity, salt air, and frequent storms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood-Specific Fabric Needs */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Tampa Neighborhood Fabric Specializations
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Different Tampa areas have unique style requirements and environmental needs
              </p>
            </div>
            
            <div className="grid gap-6 lg:grid-cols-2">
              {tampaNeighborhoods.map((neighborhood, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {neighborhood.name}
                    </h3>
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      {neighborhood.style}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {neighborhood.needs}
                  </p>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-900 block mb-2">Recommended Fabrics:</span>
                    <div className="flex flex-wrap gap-2">
                      {neighborhood.recommended.map((fabric, idx) => (
                        <span key={idx} className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">
                          {fabric}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Services */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Professional Fabric Services in Tampa?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Tampa's climate demands expert fabric selection beyond what standard stores offer
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Climate Expertise</h3>
                <p className="text-green-100 text-sm">Fabrics tested for Tampa Bay's specific humidity and salt air conditions</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Local Knowledge</h3>
                <p className="text-green-100 text-sm">Understanding how Westshore business needs differ from Hyde Park historic requirements</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold text-white mb-2">Guaranteed Results</h3>
                <p className="text-green-100 text-sm">Professional installation with warranty coverage specific to Tampa climate</p>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get Tampa Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
                <Link href="/fabric-selection">View Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Fabric Availability Education */}
        <FabricAvailabilityEducation cityName="Tampa" />

        {/* FAQ Section for AI Platforms */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Tampa Fabric Store FAQ
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What are the best fabric stores in Tampa for upholstery projects?
                </h3>
                <p className="text-gray-700">
                  Tampa has excellent fabric stores including Tampa Bay Fabric Source on Kennedy Boulevard, 
                  Hyde Park Textile Gallery on Howard Avenue, and Marine Canvas & Fabric Center for boat upholstery. 
                  Each specializes in different aspects of Tampa's unique climate requirements.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Which fabrics work best for Tampa's humid climate?
                </h3>
                <p className="text-gray-700">
                  For Tampa's 70-90% humidity, choose performance synthetics like solution-dyed acrylics, 
                  Sunbrella outdoor fabrics, or Crypton performance materials. These resist mold, dry quickly after storms, 
                  and handle the salt air from Tampa Bay.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Do Tampa fabric stores offer marine upholstery materials?
                </h3>
                <p className="text-gray-700">
                  Yes, several Tampa stores specialize in marine upholstery including Marine Canvas & Fabric Center 
                  and waterfront suppliers near Davis Islands. These offer salt-air resistant materials perfect for 
                  Tampa Bay boats and waterfront homes.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What's the difference between Tampa fabric stores and professional fabric services?
                </h3>
                <p className="text-gray-700">
                  Tampa fabric stores provide materials, while professional services combine local store sourcing 
                  with climate expertise, proper installation, and warranty coverage. We know which Tampa stores 
                  have the best options for specific Tampa neighborhood needs and climate challenges.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Are there fabric stores in Tampa that specialize in historic home restoration?
                </h3>
                <p className="text-gray-700">
                  Yes, Ybor Historic Fabrics specializes in period-appropriate materials for Tampa's historic neighborhoods 
                  like Hyde Park and Ybor City. They offer traditional patterns adapted with modern climate-resistance 
                  treatments for Tampa's humidity.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What should I know about fabric availability when shopping Tampa stores?
                </h3>
                <p className="text-gray-700">
                  Fabric availability is a real concern - popular patterns can be discontinued without notice, especially 
                  performance fabrics suited for Tampa's climate. We recommend ordering multiple samples of patterns you love 
                  and calculating your complete yardage needs upfront. Order everything in one purchase to ensure consistent 
                  dye lots, as even small delays can result in color variations between production runs.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  How much extra fabric should I order for Tampa upholstery projects?
                </h3>
                <p className="text-gray-700">
                  For Tampa's humid climate, order 10-15% extra fabric beyond your calculated needs. This accounts for 
                  pattern matching, waste, and potential future repairs. Tampa's humidity and salt air can be hard on fabrics, 
                  so having extra material from the same dye lot ensures you can handle wear spots or damage without 
                  color-matching issues down the road.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}