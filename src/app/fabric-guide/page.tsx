import Link from "next/link"
import { ArrowRight, Calculator, CheckCircle, Palette, Ruler, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/sections/header"
import { SITE_CONFIG, FABRIC_CATEGORIES } from "@/lib/constants"

export const metadata = {
  title: "Complete Fabric Selection Guide | Fabric-First Upholstery",
  description: "Master the art of fabric selection with our comprehensive guide. Learn fabric types, durability ratings, yardage calculations, and professional selection techniques used by interior designers.",
  keywords: ["fabric selection guide", "upholstery fabric types", "fabric durability", "yardage calculator", "fabric-first upholstery"],
}

export default function FabricGuidePage() {
  const fabricTypes = [
    {
      name: "Performance Fabrics",
      icon: "⚡",
      description: "Stain-resistant, durable fabrics perfect for high-traffic areas and families with kids or pets.",
      durability: 5,
      bestFor: ["Living rooms", "Family rooms", "Commercial spaces"],
      priceRange: "$$-$$$"
    },
    {
      name: "Natural Linens",
      icon: "🌿", 
      description: "Breathable, elegant natural fibers that age beautifully and bring organic luxury to any space.",
      durability: 3,
      bestFor: ["Bedrooms", "Dining rooms", "Sophisticated living areas"],
      priceRange: "$$$"
    },
    {
      name: "Luxury Velvets",
      icon: "✨",
      description: "Rich, tactile fabrics that add depth and glamour. Modern velvets offer improved durability.",
      durability: 4,
      bestFor: ["Accent pieces", "Formal spaces", "Statement furniture"],
      priceRange: "$$$-$$$$"
    },
    {
      name: "Classic Cottons",
      icon: "🏠",
      description: "Versatile, breathable, and budget-friendly options that work in traditional and casual settings.",
      durability: 3,
      bestFor: ["Guest rooms", "Casual spaces", "Traditional décor"],
      priceRange: "$-$$"
    }
  ]

  const selectionSteps = [
    {
      step: 1,
      title: "Define Your Lifestyle",
      description: "Consider traffic levels, pets, children, and usage patterns.",
      details: ["High, medium, or low traffic area?", "Pets or young children?", "Formal or casual usage?", "Direct sunlight exposure?"]
    },
    {
      step: 2, 
      title: "Choose Your Color Palette",
      description: "Select colors that complement your existing décor and lighting.",
      details: ["Test samples in your actual lighting", "Consider room size and natural light", "Think about long-term flexibility", "Account for existing furniture"]
    },
    {
      step: 3,
      title: "Evaluate Durability Needs",
      description: "Match fabric performance to your specific requirements.",
      details: ["Check Wyzenbeek double rub ratings", "Consider stain resistance needs", "Evaluate fade resistance", "Assess maintenance requirements"]
    },
    {
      step: 4,
      title: "Calculate Precise Yardage",
      description: "Determine exact fabric requirements including pattern matching.",
      details: ["Measure furniture dimensions", "Account for pattern repeats", "Add 10% for waste and mistakes", "Consider fabric width variations"]
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-hero font-display font-bold tracking-tight text-gray-900">
                The Complete Fabric Selection Guide
              </h1>
              <p className="mt-6 text-large leading-8 text-gray-700">
                Master the professional approach to fabric selection. From understanding durability ratings to calculating precise yardage, learn the techniques interior designers use to create stunning, functional spaces.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>
                    Order Sample Set
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="/tools/yardage-calculator">
                    Use Yardage Calculator
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Fabric Types Overview */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Understanding Fabric Types
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Each fabric type serves different needs. Choose based on your lifestyle, aesthetic preferences, and performance requirements.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {fabricTypes.map((fabric) => (
                <div key={fabric.name} className="rounded-2xl bg-gray-50 p-8 hover:bg-amber-50 transition-all duration-300">
                  <div className="flex items-start gap-x-4">
                    <div className="text-3xl">{fabric.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{fabric.name}</h3>
                      <p className="text-gray-700 mb-4">{fabric.description}</p>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-x-2">
                          <span className="text-sm font-medium text-gray-600">Durability:</span>
                          <div className="flex">
                            {[1,2,3,4,5].map((star) => (
                              <div key={star} className={`w-3 h-3 rounded-full ${star <= fabric.durability ? 'bg-amber-400' : 'bg-gray-200'}`}></div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-sm font-medium text-gray-600 block mb-1">Best for:</span>
                          <div className="flex flex-wrap gap-1">
                            {fabric.bestFor.map((use) => (
                              <span key={use} className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                                {use}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-x-2">
                          <span className="text-sm font-medium text-gray-600">Price Range:</span>
                          <span className="text-sm font-semibold text-amber-600">{fabric.priceRange}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selection Process */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Professional Selection Process
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Follow this proven 4-step process to make confident fabric decisions that you'll love for years to come.
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                {selectionSteps.map((step, index) => (
                  <div key={step.step} className="relative">
                    <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-600 text-white font-semibold">
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-700 mb-4">{step.description}</p>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-center gap-x-2">
                                <CheckCircle className="h-4 w-4 text-amber-600 flex-shrink-0" />
                                <span className="text-sm text-gray-600">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {index < selectionSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-amber-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Tools Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Essential Fabric Tools
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Professional calculators and guides to make your fabric selection process precise and confident.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 p-8 text-center hover:border-amber-200 hover:bg-amber-50 transition-all">
                <Calculator className="mx-auto h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Yardage Calculator</h3>
                <p className="text-gray-600 mb-6">Calculate exact fabric requirements including pattern matching and waste.</p>
                <Button variant="outline" asChild className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/tools/yardage-calculator">Use Calculator</Link>
                </Button>
              </div>
              
              <div className="rounded-2xl border border-gray-200 p-8 text-center hover:border-amber-200 hover:bg-amber-50 transition-all">
                <Palette className="mx-auto h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Color Matching Guide</h3>
                <p className="text-gray-600 mb-6">Learn to coordinate fabrics with existing décor and lighting conditions.</p>
                <Button variant="outline" asChild className="border-amber-600 text-amber-600 hover:bg-amber-50">
                  <Link href="/guides/color-matching">Learn Matching</Link>
                </Button>
              </div>
              
              <div className="rounded-2xl border border-gray-200 p-8 text-center hover:border-amber-200 hover:bg-amber-50 transition-all">
                <ShoppingBag className="mx-auto h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sample Ordering</h3>
                <p className="text-gray-600 mb-6">Order curated fabric samples to test in your actual space and lighting.</p>
                <Button variant="fabric" asChild>
                  <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>Order Samples</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="py-24 sm:py-32 bg-amber-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Avoid These Common Mistakes
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Learn from the mistakes we see most often so you can make confident decisions the first time.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {[
                {
                  mistake: "Choosing fabric based on small samples only",
                  solution: "Always order larger samples and test them in your actual space with your lighting."
                },
                {
                  mistake: "Ignoring durability ratings for high-traffic pieces", 
                  solution: "Check Wyzenbeek ratings and choose fabrics rated for your usage level."
                },
                {
                  mistake: "Not accounting for pattern repeats in yardage",
                  solution: "Add extra yardage for pattern matching - typically 1-2 additional yards."
                },
                {
                  mistake: "Selecting fabric before considering the whole room",
                  solution: "Think about how the fabric will work with existing furniture, lighting, and décor."
                }
              ].map((item, index) => (
                <div key={index} className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full mb-2">
                      Common Mistake
                    </span>
                    <p className="font-medium text-gray-900">{item.mistake}</p>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-2">
                      Professional Solution
                    </span>
                    <p className="text-gray-700">{item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 sm:py-32 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-white">
                Ready to Choose Your Perfect Fabric?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-large leading-8 text-gray-300">
                Start with professional fabric samples to experience quality, texture, and color in your own space.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>
                    Order Fabric Samples
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-gray-300 text-gray-300 hover:bg-gray-800" asChild>
                  <Link href={SITE_CONFIG.connectedSites.fabricStore}>
                    Browse All Fabrics
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
              © 2024 {SITE_CONFIG.name}. Professional Fabric Selection Authority.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}