import Link from "next/link"
import { ArrowRight, Check, MapPin, Palette, Sparkles, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/sections/header"
import { SITE_CONFIG, GEOGRAPHIC_MARKETS } from "@/lib/constants"
import { generateLocationUrl } from "@/lib/utils"

export default function HomePage() {
  const topMarkets = GEOGRAPHIC_MARKETS.tier1.slice(0, 6)

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
          <div className="absolute inset-0 bg-[url('/images/fabric-texture.jpg')] bg-cover bg-center opacity-5"></div>
          <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-2 xl:grid-rows-1 xl:gap-x-8">
              <h1 className="max-w-2xl text-hero font-display font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                Choose Your <span className="text-amber-600">Fabric First</span>,
                <br />
                Transform Everything
              </h1>
              <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                <p className="text-large leading-8 text-gray-700">
                  The secret interior designers know: selecting the perfect fabric before finding an upholsterer transforms ordinary furniture into extraordinary statements. Discover why fabric-first thinking creates stunning results.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button variant="luxury" size="xl" asChild>
                    <Link href={SITE_CONFIG.connectedSites.fabricStore}>
                      Explore Premium Fabrics
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <Link href="/fabric-guide">
                      Learn the Process
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mt-14 sm:mt-16 lg:mt-0 xl:row-span-2 xl:row-end-2">
                <img
                  className="aspect-[4/5] w-full max-w-lg rounded-2xl bg-gray-50 object-cover shadow-2xl luxury-shadow lg:max-w-none"
                  src="/images/hero-fabric-selection.jpg"
                  alt="Luxury fabric swatches arranged beautifully showing the art of fabric selection"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Fabric First Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Why Interior Designers Always Choose Fabric First
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Professional designers understand that fabric drives every other decision in upholstery. 
                Color, texture, durability, and style all flow from this single, crucial choice.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-amber-600/10 p-2 ring-1 ring-amber-600/20">
                    <Palette className="h-6 w-6 text-amber-600" />
                  </div>
                  <dt className="mt-4 font-semibold text-gray-900 text-lg">Perfect Color Harmony</dt>
                  <dd className="mt-2 leading-7 text-gray-600">
                    When fabric leads, every other element—from thread color to furniture style—creates perfect visual harmony instead of fighting for attention.
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-amber-600/10 p-2 ring-1 ring-amber-600/20">
                    <Sparkles className="h-6 w-6 text-amber-600" />
                  </div>
                  <dt className="mt-4 font-semibold text-gray-900 text-lg">Premium Quality Control</dt>
                  <dd className="mt-2 leading-7 text-gray-600">
                    Selecting fabric first ensures you get exactly the quality and characteristics you want, without settling for whatever the upholsterer has in stock.
                  </dd>
                </div>
                <div className="flex flex-col items-start">
                  <div className="rounded-md bg-amber-600/10 p-2 ring-1 ring-amber-600/20">
                    <Users className="h-6 w-6 text-amber-600" />
                  </div>
                  <dt className="mt-4 font-semibold text-gray-900 text-lg">Professional Credibility</dt>
                  <dd className="mt-2 leading-7 text-gray-600">
                    Upholsterers respect clients who understand fabric. You'll receive better service, pricing, and craftsmanship when you speak their language.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Process Preview Section */}
        <section className="py-24 sm:py-32 bg-gray-50 fabric-texture">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-amber-600">The Professional Approach</p>
                    <h2 className="mt-2 text-section font-display font-bold tracking-tight text-gray-900">
                      Your Fabric-First Journey
                    </h2>
                    <p className="mt-6 text-large leading-8 text-gray-700">
                      Follow the same process interior designers use to create stunning, cohesive spaces that reflect your style and meet your lifestyle needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                    <div className="space-y-8">
                      <div className="flex gap-x-3">
                        <div className="mt-1 flex h-5 w-5 flex-none items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">1. Define Your Vision</h3>
                          <p className="mt-1 text-gray-600">Clarify your style, color preferences, and functional needs before looking at specific fabrics.</p>
                        </div>
                      </div>
                      <div className="flex gap-x-3">
                        <div className="mt-1 flex h-5 w-5 flex-none items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">2. Order Fabric Samples</h3>
                          <p className="mt-1 text-gray-600">Experience fabrics in your actual space with proper lighting before making decisions.</p>
                        </div>
                      </div>
                      <div className="flex gap-x-3">
                        <div className="mt-1 flex h-5 w-5 flex-none items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">3. Calculate Exact Yardage</h3>
                          <p className="mt-1 text-gray-600">Determine precise fabric requirements based on furniture size and pattern considerations.</p>
                        </div>
                      </div>
                      <div className="flex gap-x-3">
                        <div className="mt-1 flex h-5 w-5 flex-none items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-amber-600"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">4. Purchase & Coordinate</h3>
                          <p className="mt-1 text-gray-600">Buy your fabric and coordinate delivery with your chosen upholsterer for seamless execution.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-10">
                      <Button variant="fabric" size="lg" asChild>
                        <Link href="/fabric-guide">
                          Start Your Fabric Journey
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="pt-8 lg:pt-0">
                  <img
                    className="aspect-[3/4] w-full max-w-lg rounded-2xl bg-gray-50 object-cover shadow-xl luxury-shadow lg:max-w-none"
                    src="/images/fabric-process-elegant.jpg"
                    alt="Elegant fabric selection process showing professional approach to upholstery planning"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Geographic Markets */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Fabric-First Authority Across the Southeast
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Serving design-conscious homeowners from Orlando to Atlanta, bringing professional fabric-first approaches to every major metropolitan market.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {topMarkets.map((market) => (
                <Link
                  key={market.city}
                  href={generateLocationUrl(market.city, market.state)}
                  className="group relative rounded-2xl bg-gray-50 p-6 hover:bg-amber-50 transition-all duration-300 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center gap-x-3">
                      <MapPin className="h-5 w-5 text-amber-600" />
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition-colors">
                        {market.city}, {market.state}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Fabric-first upholstery guidance for {market.city} homeowners and designers
                    </p>
                    <div className="mt-4 flex items-center text-amber-600 group-hover:text-amber-700 transition-colors">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mx-auto mt-12 text-center">
              <Button variant="outline" size="lg" asChild>
                <Link href="/locations">
                  View All Locations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-24 sm:py-32 bg-amber-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                Why Homeowners Love the Fabric-First Approach
              </h2>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
              <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:p-8 sm:shadow-lg xl:col-start-2 xl:row-end-1">
                <blockquote className="text-lg font-semibold leading-8 text-gray-900 sm:text-xl sm:leading-9">
                  <p>"Choosing our fabric first completely changed our upholstery experience. Instead of settling for what the upholsterer had available, we got exactly what we envisioned. The process was so much more professional."</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4 text-base">
                  <img className="h-10 w-10 rounded-full bg-gray-50" src="/images/testimonial-1.jpg" alt="Sarah Mitchell" />
                  <div>
                    <div className="font-semibold">Sarah Mitchell</div>
                    <div className="text-gray-600">Interior Designer, Atlanta</div>
                  </div>
                </figcaption>
              </figure>
              <figure className="rounded-2xl bg-white p-8 shadow-lg">
                <blockquote className="text-gray-900">
                  <p>"The fabric-first approach saved us money and stress. We knew exactly what we wanted before meeting with upholsterers."</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4 text-xs">
                  <img className="h-10 w-10 rounded-full bg-gray-50" src="/images/testimonial-2.jpg" alt="David Chen" />
                  <div>
                    <div className="font-semibold">David Chen</div>
                    <div className="text-gray-600">Charlotte, NC</div>
                  </div>
                </figcaption>
              </figure>
              <figure className="rounded-2xl bg-white p-8 shadow-lg">
                <blockquote className="text-gray-900">
                  <p>"Professional upholsterers respect clients who understand fabric quality. The service level was completely different."</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4 text-xs">
                  <img className="h-10 w-10 rounded-full bg-gray-50" src="/images/testimonial-3.jpg" alt="Maria Rodriguez" />
                  <div>
                    <div className="font-semibold">Maria Rodriguez</div>
                    <div className="text-gray-600">Miami, FL</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 sm:py-32 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-white">
                Ready to Transform Your Furniture?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-large leading-8 text-gray-300">
                Join thousands of homeowners who've discovered the professional secret: fabric-first upholstery creates results that exceed expectations.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>
                    Order Fabric Samples
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-gray-300 text-gray-300 hover:bg-gray-800" asChild>
                  <Link href="/fabric-guide">
                    Learn the Process
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
              © 2024 {SITE_CONFIG.name}. Fabric-First Upholstery Authority.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}