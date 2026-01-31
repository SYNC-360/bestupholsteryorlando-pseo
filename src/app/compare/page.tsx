import Link from "next/link"
import { ArrowRight, Check, X, Star, DollarSign, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button" 
import { Header } from "@/components/sections/header"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata = {
  title: "Fabric Comparisons | Compare Upholstery Fabric Types",
  description: "Compare upholstery fabrics side-by-side. See durability, price, maintenance, and best use cases for velvet, linen, performance fabrics, and more.",
  keywords: ["fabric comparison", "upholstery fabric types", "velvet vs linen", "performance fabric comparison", "fabric durability"],
}

export default function ComparePage() {
  const popularComparisons = [
    {
      title: "Performance Fabric vs Natural Linen",
      subtitle: "Modern durability vs classic elegance",
      href: "/fabric-guide#performance-vs-natural",
      winner: "Depends on lifestyle",
      summary: "Performance fabrics win for families; natural linen wins for sophisticated, low-traffic spaces."
    },
    {
      title: "Velvet vs Chenille",
      subtitle: "Luxury texture showdown", 
      href: "/fabric-guide#velvet-vs-chenille",
      winner: "Velvet",
      summary: "Modern velvets offer superior durability and style versatility compared to traditional chenille."
    },
    {
      title: "Cotton vs Polyester Blends",
      subtitle: "Natural vs synthetic performance",
      href: "/fabric-guide#cotton-vs-blends", 
      winner: "Blends",
      summary: "Blends combine cotton's comfort with synthetic durability for best overall performance."
    },
    {
      title: "Leather vs Fabric",
      subtitle: "Classic luxury vs fabric flexibility",
      href: "/fabric-guide#leather-vs-fabric",
      winner: "Tie",
      summary: "Leather wins for durability and style; fabric wins for comfort and color options."
    }
  ]

  const comparisonCategories = [
    {
      category: "Durability Focused",
      icon: <Shield className="h-6 w-6" />,
      comparisons: [
        "Performance Fabric vs Natural Fiber",
        "Microfiber vs Cotton", 
        "Outdoor Fabric vs Indoor Fabric",
        "Commercial Grade vs Residential"
      ]
    },
    {
      category: "Style & Aesthetics", 
      icon: <Star className="h-6 w-6" />,
      comparisons: [
        "Velvet vs Silk",
        "Linen vs Cotton",
        "Textured vs Smooth Fabrics",
        "Solid vs Patterned Fabrics"
      ]
    },
    {
      category: "Budget Considerations",
      icon: <DollarSign className="h-6 w-6" />,
      comparisons: [
        "Luxury vs Budget Fabrics",
        "Natural vs Synthetic Pricing",
        "Designer vs Standard Grades",
        "Custom vs Ready-Made Options"
      ]
    },
    {
      category: "Maintenance Needs",
      icon: <Clock className="h-6 w-6" />,
      comparisons: [
        "Easy Care vs High Maintenance", 
        "Machine Washable vs Dry Clean Only",
        "Stain Resistant vs Traditional",
        "Fade Resistant vs Standard Dyes"
      ]
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-hero font-display font-bold tracking-tight text-gray-900">
                Fabric Comparisons
              </h1>
              <p className="mt-6 text-large leading-8 text-gray-700">
                Make confident fabric decisions with side-by-side comparisons. See how different fabrics perform in durability, style, maintenance, and value.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href="#popular">
                    View Top Comparisons
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="/fabric-guide">
                    Fabric Selection Guide
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Comparisons */}
        <section id="popular" className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Most Popular Comparisons
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                The fabric decisions that matter most to homeowners and designers.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {popularComparisons.map((comparison) => (
                <Link
                  key={comparison.title}
                  href={comparison.href}
                  className="group relative rounded-2xl bg-gray-50 p-8 hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
                >
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {comparison.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{comparison.subtitle}</p>
                    
                    <div className="mt-4 flex items-center gap-x-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Winner: {comparison.winner}
                      </span>
                    </div>
                    
                    <p className="mt-4 text-sm text-gray-700">{comparison.summary}</p>
                    
                    <div className="mt-6 flex items-center text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="text-sm font-medium">Read full comparison</span>
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Categories */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Compare by Category
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Find the right comparison based on what matters most for your project.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {comparisonCategories.map((category) => (
                <div key={category.category} className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-x-3 mb-6">
                    <div className="rounded-md bg-blue-600/10 p-2 text-blue-600">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.comparisons.map((comparison) => (
                      <Link
                        key={comparison}
                        href={`/fabric-guide#${comparison.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'vs')}`}
                        className="block px-4 py-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700">
                            {comparison}
                          </span>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Use Comparisons */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-blue-600">Smart Shopping</p>
                    <h2 className="mt-2 text-section font-display font-bold tracking-tight text-gray-900">
                      How to Use These Comparisons
                    </h2>
                    <p className="mt-6 text-large leading-8 text-gray-700">
                      Our comparisons help you understand trade-offs between different fabric options so you can choose what works best for your specific situation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <div className="space-y-6">
                      <div className="flex gap-x-3">
                        <div className="mt-1 flex h-5 w-5 flex-none items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Start with your priorities</h3>
                          <p className="mt-1 text-gray-600">Identify what matters most: durability, style, budget, or maintenance ease.</p>
                        </div>
                      </div>
                      <div className="flex gap-x-3">
                        <div className="mt-1 flex h-5 w-5 flex-none items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Review the trade-offs</h3>
                          <p className="mt-1 text-gray-600">Understand what you gain and lose with each option.</p>
                        </div>
                      </div>
                      <div className="flex gap-x-3">
                        <div className="mt-1 flex h-5 w-5 flex-none items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Order samples</h3>
                          <p className="mt-1 text-gray-600">Test your top choices in your actual space before deciding.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <Button variant="fabric" size="lg" asChild>
                        <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>
                          Order Comparison Samples
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="pt-8 lg:pt-0">
                  <img
                    className="aspect-[3/4] w-full max-w-lg rounded-2xl bg-gray-50 object-cover shadow-xl lg:max-w-none"
                    src="https://picsum.photos/500/400?random=30"
                    alt="Fabric samples arranged for comparison showing different textures and qualities"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 sm:py-32 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-white">
                Ready to Compare and Choose?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-large leading-8 text-gray-300">
                Use our comparisons to narrow your choices, then order samples to experience the fabrics yourself.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>
                    Order Sample Set
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-gray-300 text-gray-300 hover:bg-gray-800" asChild>
                  <Link href="/fabric-guide">
                    Back to Guide
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
              © 2024 {SITE_CONFIG.name}. Professional Fabric Comparison Authority.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}