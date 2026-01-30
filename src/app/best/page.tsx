import Link from "next/link"
import { ArrowRight, Star, Award, TrendingUp, Users, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/sections/header"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata = {
  title: "Best Upholstery Fabrics 2024 | Expert Curated Rankings",
  description: "Discover the best upholstery fabrics chosen by interior designers. Expert rankings for performance, style, durability, and value across all categories.",
  keywords: ["best upholstery fabric", "top fabric brands", "designer recommended fabrics", "fabric rankings 2024"],
}

export default function BestPage() {
  const featuredCollections = [
    {
      title: "Best Performance Fabrics",
      subtitle: "Top-rated for families and high-traffic spaces",
      description: "Stain-resistant, durable fabrics that look great and perform beautifully.",
      href: "/best/performance-fabrics",
      icon: <Award className="h-8 w-8" />,
      badge: "Most Popular",
      stats: "98% stain resistance"
    },
    {
      title: "Best Luxury Fabrics", 
      subtitle: "Designer-grade materials for sophisticated spaces",
      description: "Premium fabrics that bring elegance and refinement to any interior.",
      href: "/best/luxury-fabrics",
      icon: <Star className="h-8 w-8" />,
      badge: "Editor's Choice",
      stats: "5-star quality rating"
    },
    {
      title: "Best Value Fabrics",
      subtitle: "Quality fabrics that don't break the budget",
      description: "Beautiful, durable fabrics that deliver professional results at fair prices.",
      href: "/best/value-fabrics", 
      icon: <TrendingUp className="h-8 w-8" />,
      badge: "Best Value",
      stats: "Under $50/yard"
    },
    {
      title: "Best Eco-Friendly Fabrics",
      subtitle: "Sustainable choices for conscious decorating",
      description: "Environmentally responsible fabrics without compromising on style or quality.",
      href: "/best/eco-friendly-fabrics",
      icon: <Home className="h-8 w-8" />,
      badge: "Trending",
      stats: "100% sustainable"
    }
  ]

  const categories = [
    {
      category: "By Room Type",
      collections: [
        { name: "Best Living Room Fabrics", count: 12, popular: true },
        { name: "Best Bedroom Fabrics", count: 8, popular: false },
        { name: "Best Dining Room Fabrics", count: 10, popular: true },
        { name: "Best Office Fabrics", count: 6, popular: false },
        { name: "Best Outdoor Fabrics", count: 15, popular: false }
      ]
    },
    {
      category: "By Fabric Type",
      collections: [
        { name: "Best Velvet Fabrics", count: 18, popular: true },
        { name: "Best Linen Fabrics", count: 22, popular: true },
        { name: "Best Cotton Fabrics", count: 16, popular: false },
        { name: "Best Silk Fabrics", count: 12, popular: false },
        { name: "Best Wool Fabrics", count: 9, popular: false }
      ]
    },
    {
      category: "By Use Case",
      collections: [
        { name: "Best Pet-Friendly Fabrics", count: 14, popular: true },
        { name: "Best Child-Safe Fabrics", count: 11, popular: true },
        { name: "Best Allergy-Friendly Fabrics", count: 8, popular: false },
        { name: "Best Commercial Fabrics", count: 20, popular: false },
        { name: "Best Marine Fabrics", count: 7, popular: false }
      ]
    },
    {
      category: "By Style",
      collections: [
        { name: "Best Modern Fabrics", count: 25, popular: true },
        { name: "Best Traditional Fabrics", count: 30, popular: false },
        { name: "Best Transitional Fabrics", count: 18, popular: true },
        { name: "Best Bohemian Fabrics", count: 12, popular: false },
        { name: "Best Minimalist Fabrics", count: 8, popular: false }
      ]
    }
  ]

  const rankingCriteria = [
    {
      factor: "Performance Testing",
      description: "Wyzenbeek durability, stain resistance, fade resistance, and abrasion testing results."
    },
    {
      factor: "Design Professional Reviews", 
      description: "Evaluations from certified interior designers and upholstery professionals."
    },
    {
      factor: "Customer Satisfaction",
      description: "Real user reviews, repeat purchase rates, and long-term satisfaction scores."
    },
    {
      factor: "Value Analysis",
      description: "Performance-to-price ratio, longevity, and total cost of ownership evaluation."
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-hero font-display font-bold tracking-tight text-gray-900">
                Best Upholstery Fabrics 2024
              </h1>
              <p className="mt-6 text-large leading-8 text-gray-700">
                Expert-curated rankings of the finest upholstery fabrics. Tested by professionals, loved by homeowners, and proven in real-world applications.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href="#featured">
                    View Top Picks
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="#methodology">
                    How We Rank
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section id="featured" className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Featured Collections
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Our most popular and highly-rated fabric collections, chosen by design professionals.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {featuredCollections.map((collection) => (
                <Link
                  key={collection.title}
                  href={collection.href}
                  className="group relative rounded-2xl bg-gray-50 p-8 hover:bg-purple-50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="absolute top-6 right-6">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {collection.badge}
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-x-4">
                    <div className="rounded-md bg-purple-600/10 p-3 text-purple-600 group-hover:bg-purple-600/20 transition-colors">
                      {collection.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-700 transition-colors">
                        {collection.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">{collection.subtitle}</p>
                      <p className="mt-3 text-gray-700">{collection.description}</p>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <span className="inline-flex items-center text-sm font-medium text-purple-600">
                          {collection.stats}
                        </span>
                        <div className="flex items-center text-purple-600 group-hover:text-purple-700 transition-colors">
                          <span className="text-sm font-medium">View rankings</span>
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Categories */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Complete Rankings by Category
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Find the best fabrics for your specific needs with our comprehensive category rankings.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {categories.map((category) => (
                <div key={category.category} className="rounded-2xl bg-white p-8 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.category}</h3>
                  
                  <div className="space-y-3">
                    {category.collections.map((collection) => (
                      <Link
                        key={collection.name}
                        href={`/best/${collection.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-3 rounded-lg bg-gray-50 hover:bg-purple-50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-x-3">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-purple-700">
                              {collection.name}
                            </span>
                            {collection.popular && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                                Popular
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs text-gray-500">{collection.count} items</span>
                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ranking Methodology */}
        <section id="methodology" className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-purple-600">Our Process</p>
                    <h2 className="mt-2 text-section font-display font-bold tracking-tight text-gray-900">
                      How We Rank the Best Fabrics
                    </h2>
                    <p className="mt-6 text-large leading-8 text-gray-700">
                      Our rankings combine rigorous testing, professional expertise, and real-world performance to identify the truly best fabrics.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <div className="space-y-8">
                      {rankingCriteria.map((criteria, index) => (
                        <div key={criteria.factor} className="flex gap-x-3">
                          <div className="mt-1 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-purple-600 text-white text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{criteria.factor}</h3>
                            <p className="mt-1 text-gray-600">{criteria.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 space-y-4">
                      <p className="text-sm text-gray-600">
                        <strong>Updated quarterly:</strong> Our rankings reflect the latest products, testing data, and market changes.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Independent testing:</strong> All fabrics undergo standardized performance testing at certified facilities.
                      </p>
                    </div>

                    <div className="mt-10">
                      <Button variant="fabric" size="lg" asChild>
                        <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>
                          Order Top-Ranked Samples
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="pt-8 lg:pt-0">
                  <img
                    className="aspect-[3/4] w-full max-w-lg rounded-2xl bg-gray-50 object-cover shadow-xl lg:max-w-none"
                    src="/images/fabric-testing-laboratory.jpg"
                    alt="Professional fabric testing laboratory showing quality control and performance evaluation"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-24 sm:py-32 bg-purple-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Trusted by Design Professionals
              </h2>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">500+ Designers</h3>
                <p className="mt-2 text-sm text-gray-600">Certified interior designers contribute to our rankings</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">10,000+ Tests</h3>
                <p className="mt-2 text-sm text-gray-600">Performance tests conducted annually</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-600">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">50,000+ Reviews</h3>
                <p className="mt-2 text-sm text-gray-600">Real customer experiences analyzed</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 sm:py-32 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-white">
                Experience the Best Fabrics Yourself
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-large leading-8 text-gray-300">
                Our rankings help you choose, but samples let you experience the quality and beauty firsthand.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>
                    Order Best-Rated Samples
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-gray-300 text-gray-300 hover:bg-gray-800" asChild>
                  <Link href={SITE_CONFIG.connectedSites.fabricStore}>
                    Shop All Fabrics
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
              © 2024 {SITE_CONFIG.name}. Expert Fabric Authority and Rankings.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}