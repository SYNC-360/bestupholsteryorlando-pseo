import Link from "next/link"
import { ArrowRight, Eye, Heart, TrendingUp, Home, Sparkles, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/sections/header"
import { SITE_CONFIG } from "@/lib/constants"

export const metadata = {
  title: "Fabric Upholstery Examples & Transformations | Before & After",
  description: "See stunning upholstery transformations with the right fabric choices. Real examples of how fabric-first selection creates beautiful, functional spaces.",
  keywords: ["upholstery examples", "fabric transformations", "before after upholstery", "fabric selection examples", "upholstery inspiration"],
}

export default function ExamplesPage() {
  const featuredExamples = [
    {
      title: "Performance Fabric Family Room",
      category: "Living Room",
      style: "Modern Casual",
      fabric: "Crypton Performance Velvet",
      challenge: "High-traffic family space with pets and children",
      solution: "Stain-resistant luxury velvet that maintains elegance",
      beforeImage: "/images/examples/family-room-before.jpg",
      afterImage: "/images/examples/family-room-after.jpg",
      results: ["100% stain resistance", "Maintains luxury appearance", "Easy daily maintenance"],
      featured: true
    },
    {
      title: "Linen Living Room Revival", 
      category: "Living Room",
      style: "Sophisticated Traditional",
      fabric: "Belgian Natural Linen",
      challenge: "Dated formal living room needing fresh elegance",
      solution: "Natural linen in warm neutral with texture variation",
      beforeImage: "/images/examples/linen-living-before.jpg", 
      afterImage: "/images/examples/linen-living-after.jpg",
      results: ["Timeless elegance", "Natural texture depth", "Light and airy feeling"],
      featured: true
    },
    {
      title: "Velvet Dining Room Drama",
      category: "Dining Room", 
      style: "Contemporary Luxury",
      fabric: "Cut Velvet with Metallic Accents",
      challenge: "Boring dining chairs lacking personality",
      solution: "Rich jewel-tone velvet with subtle metallic threading",
      beforeImage: "/images/examples/velvet-dining-before.jpg",
      afterImage: "/images/examples/velvet-dining-after.jpg", 
      results: ["Dramatic visual impact", "Sophisticated color depth", "Entertainment-ready elegance"],
      featured: true
    }
  ]

  const exampleCategories = [
    {
      category: "By Room",
      icon: <Home className="h-6 w-6" />,
      examples: [
        { name: "Living Room Transformations", count: 24, trending: true },
        { name: "Bedroom Fabric Updates", count: 18, trending: false },
        { name: "Dining Room Makeovers", count: 15, trending: true }, 
        { name: "Home Office Upgrades", count: 12, trending: false },
        { name: "Outdoor Space Renewals", count: 9, trending: false }
      ]
    },
    {
      category: "By Style",
      icon: <Palette className="h-6 w-6" />,
      examples: [
        { name: "Modern Minimalist", count: 20, trending: true },
        { name: "Traditional Elegance", count: 22, trending: false },
        { name: "Transitional Comfort", count: 18, trending: true },
        { name: "Bohemian Luxury", count: 14, trending: false },
        { name: "Industrial Chic", count: 8, trending: false }
      ]
    },
    {
      category: "By Challenge",
      icon: <Sparkles className="h-6 w-6" />,
      examples: [
        { name: "Pet-Friendly Solutions", count: 16, trending: true },
        { name: "Child-Safe Choices", count: 14, trending: true },
        { name: "Budget-Conscious Updates", count: 12, trending: false },
        { name: "Small Space Solutions", count: 10, trending: false },
        { name: "Allergy-Friendly Options", count: 8, trending: false }
      ]
    }
  ]

  const inspirationBoards = [
    {
      title: "Coastal Casual",
      description: "Light linens and natural textures for relaxed seaside living",
      fabrics: ["Natural Linen", "Cotton Canvas", "Outdoor Performance"],
      colors: ["Ocean Blue", "Sand Beige", "Crisp White"],
      mood: "Relaxed & Breezy"
    },
    {
      title: "Urban Sophistication", 
      description: "Rich velvets and performance fabrics for city living",
      fabrics: ["Cut Velvet", "Performance Wool", "Textured Linen"],
      colors: ["Charcoal Gray", "Navy Blue", "Warm Bronze"],
      mood: "Polished & Professional"
    },
    {
      title: "Country Comfort",
      description: "Durable cottons and warm plaids for family-centered homes", 
      fabrics: ["Cotton Twill", "Wool Plaid", "Canvas Duck"],
      colors: ["Warm Red", "Forest Green", "Cream"],
      mood: "Welcoming & Timeless"
    },
    {
      title: "Maximalist Luxury",
      description: "Bold patterns and rich textures for dramatic impact",
      fabrics: ["Silk Jacquard", "Mohair Velvet", "Embroidered Linen"],
      colors: ["Emerald Green", "Royal Purple", "Gold Accent"],
      mood: "Dramatic & Opulent"
    }
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 via-white to-emerald-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-hero font-display font-bold tracking-tight text-gray-900">
                Fabric Transformation Examples
              </h1>
              <p className="mt-6 text-large leading-8 text-gray-700">
                See how the right fabric choice transforms ordinary furniture into extraordinary pieces. Real projects, real results, real inspiration.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href="#featured">
                    View Transformations
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <Link href="#inspiration">
                    Inspiration Boards
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Transformations */}
        <section id="featured" className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Featured Transformations
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Dramatic before-and-after examples showing the power of fabric-first thinking.
              </p>
            </div>
            
            <div className="mx-auto mt-16 space-y-20 lg:space-y-24">
              {featuredExamples.map((example, index) => (
                <div key={example.title} className={`lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center ${index % 2 === 1 ? 'lg:grid-flow-row-dense' : ''}`}>
                  <div className={`lg:col-start-${index % 2 === 1 ? '2' : '1'}`}>
                    <div className="rounded-2xl bg-gray-50 p-8">
                      <div className="flex items-center gap-x-3 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {example.category}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {example.style}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">{example.title}</h3>
                      
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">The Challenge:</h4>
                          <p className="text-gray-700">{example.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">The Solution:</h4>
                          <p className="text-gray-700">{example.solution}</p>
                          <p className="text-sm text-green-600 font-medium mt-1">Fabric: {example.fabric}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Results:</h4>
                          <ul className="space-y-1">
                            {example.results.map((result) => (
                              <li key={result} className="flex items-center gap-x-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-green-600"></div>
                                <span className="text-sm text-gray-700">{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <Button variant="outline" size="lg" asChild className="border-green-600 text-green-600 hover:bg-green-50">
                        <Link href={`/examples/${example.title.toLowerCase().replace(/\s+/g, '-')}`}>
                          View Full Case Study
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className={`mt-8 lg:mt-0 lg:col-start-${index % 2 === 1 ? '1' : '2'}`}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">Before</p>
                        <img
                          className="aspect-[4/3] w-full rounded-lg bg-gray-100 object-cover shadow-md"
                          src={example.beforeImage}
                          alt={`Before transformation: ${example.title}`}
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">After</p>
                        <img
                          className="aspect-[4/3] w-full rounded-lg bg-gray-100 object-cover shadow-lg ring-2 ring-green-200"
                          src={example.afterImage}
                          alt={`After transformation: ${example.title}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Browse by Category */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Browse Examples by Category
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Find inspiration specific to your room, style, or challenge.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {exampleCategories.map((category) => (
                <div key={category.category} className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-x-3 mb-6">
                    <div className="rounded-md bg-green-600/10 p-2 text-green-600">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.examples.map((example) => (
                      <Link
                        key={example.name}
                        href={`/examples/${example.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block px-4 py-3 rounded-lg bg-gray-50 hover:bg-green-50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-x-3">
                            <span className="text-sm font-medium text-gray-900 group-hover:text-green-700">
                              {example.name}
                            </span>
                            {example.trending && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs text-gray-500">{example.count} examples</span>
                            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
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

        {/* Inspiration Boards */}
        <section id="inspiration" className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Style Inspiration Boards
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Curated fabric combinations and color palettes for popular design styles.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              {inspirationBoards.map((board) => (
                <div key={board.title} className="rounded-2xl border border-gray-200 p-8 hover:border-green-200 hover:bg-green-50/30 transition-all">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{board.title}</h3>
                  <p className="text-gray-700 mb-6">{board.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Key Fabrics:</h4>
                      <div className="flex flex-wrap gap-2">
                        {board.fabrics.map((fabric) => (
                          <span key={fabric} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                            {fabric}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Color Palette:</h4>
                      <div className="flex flex-wrap gap-2">
                        {board.colors.map((color) => (
                          <span key={color} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                            {color}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-x-2 pt-2">
                      <Eye className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-green-600">Mood: {board.mood}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Button variant="outline" size="sm" asChild className="border-green-600 text-green-600 hover:bg-green-50">
                      <Link href={`/inspiration/${board.title.toLowerCase().replace(/\s+/g, '-')}`}>
                        Explore This Style
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Impact Stats */}
        <section className="py-24 sm:py-32 bg-green-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                The Power of the Right Fabric Choice
              </h2>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">94%</h3>
                <p className="mt-2 text-sm text-gray-600">Of clients love their fabric-first results</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">3.2x</h3>
                <p className="mt-2 text-sm text-gray-600">Average increase in room satisfaction scores</p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">85%</h3>
                <p className="mt-2 text-sm text-gray-600">Report the result exceeded expectations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 sm:py-32 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-white">
                Create Your Own Transformation
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-large leading-8 text-gray-300">
                Start your fabric-first journey with professional samples and see the difference quality makes.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>
                    Order Inspiration Samples
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-gray-300 text-gray-300 hover:bg-gray-800" asChild>
                  <Link href="/fabric-guide">
                    Start with the Guide
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
              © 2024 {SITE_CONFIG.name}. Fabric Transformation Inspiration Authority.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}