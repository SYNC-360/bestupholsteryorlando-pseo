"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Fabric Selection Guide", href: "/fabric-guide" },
  { name: "Best Fabrics", href: "/best" },
  { name: "Compare Fabrics", href: "/compare" },
  { name: "Examples", href: "/examples" },
  { name: "Locations", href: "/locations" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar with contact info */}
        <div className="hidden sm:flex items-center justify-end py-2 text-sm text-gray-600 border-b border-gray-50">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center space-x-1 hover:text-amber-600 transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span>{SITE_CONFIG.phone}</span>
            </a>
            <a 
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center space-x-1 hover:text-amber-600 transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{SITE_CONFIG.name}</span>
              <div className="text-xl font-display font-bold text-gray-900">
                Best Upholstery <span className="text-amber-600">Orlando</span>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 text-gray-700 hover:text-amber-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            <Button 
              variant="outline" 
              asChild
              className="border-amber-600 text-amber-600 hover:bg-amber-50"
            >
              <Link href={SITE_CONFIG.connectedSites.fabricStore}>
                View Fabrics
              </Link>
            </Button>
            <Button 
              variant="fabric"
              asChild
            >
              <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>
                Order Samples
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-50 bg-white",
        mobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">{SITE_CONFIG.name}</span>
              <div className="text-lg font-display font-bold text-gray-900">
                Best Upholstery <span className="text-amber-600">Orlando</span>
              </div>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-4">
                <Button 
                  variant="outline" 
                  asChild
                  className="w-full border-amber-600 text-amber-600 hover:bg-amber-50"
                >
                  <Link href={SITE_CONFIG.connectedSites.fabricStore}>
                    View Fabrics
                  </Link>
                </Button>
                <Button 
                  variant="fabric"
                  asChild
                  className="w-full"
                >
                  <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples`}>
                    Order Samples
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}