import Link from 'next/link'
import { SITE_CONFIG, GEOGRAPHIC_MARKETS, FABRIC_CATEGORIES } from '@/lib/constants'
import { StructuredLinks } from '@/components/seo/structured-links'

interface FooterLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

function FooterLink({ href, children, className = "" }: FooterLinkProps) {
  const isExternal = href.startsWith('http')
  return (
    <Link 
      href={href}
      className={`text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm ${className}`}
      {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const majorCities = GEOGRAPHIC_MARKETS.tier1.slice(0, 8) // Top 8 cities
  const fabricTypes = FABRIC_CATEGORIES.slice(0, 8) // Top 8 fabric types

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BU</span>
              </div>
              <span className="text-xl font-semibold text-white">{SITE_CONFIG.name}</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Southeast US's premier fabric-first upholstery authority. Expert guidance, 
              premium fabric selection, and educational resources for perfect upholstery projects.
            </p>
          </div>

          {/* Services & Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services & Resources</h3>
            <div className="space-y-2">
              <FooterLink href="/fabric-guide">Complete Fabric Guide</FooterLink>
              <FooterLink href="/services">Professional Services</FooterLink>
              <FooterLink href="/fabric-selection">Expert Fabric Selection</FooterLink>
              <FooterLink href="/fabric-availability-guide">Fabric Availability Strategy</FooterLink>
              <FooterLink href="/compare">Fabric Comparisons</FooterLink>
              <FooterLink href="/best">Best Fabric Rankings</FooterLink>
              <FooterLink href="/examples">Before & After Gallery</FooterLink>
              <FooterLink href="/tools/yardage-calculator">Fabric Calculator</FooterLink>
              <FooterLink href="/upholstery-services">Upholstery Services</FooterLink>
            </div>
          </div>

          {/* Geographic Coverage */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Major Service Areas</h3>
            <div className="space-y-2">
              {majorCities.map((location, index) => (
                <FooterLink 
                  key={index}
                  href={`/locations/${location.city.toLowerCase().replace(' ', '-')}-${location.state.toLowerCase()}`}
                  className="block"
                >
                  {location.city}, {location.state}
                </FooterLink>
              ))}
              <FooterLink href="/locations" className="font-medium text-blue-400 block">
                View All Locations →
              </FooterLink>
            </div>
          </div>

          {/* Fabric Types */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Fabric Specializations</h3>
            <div className="space-y-2">
              {fabricTypes.map((fabric, index) => (
                <FooterLink 
                  key={index}
                  href={`/fabric-guide/${fabric}`}
                >
                  {fabric.charAt(0).toUpperCase() + fabric.slice(1)} Fabric
                </FooterLink>
              ))}
              <FooterLink href="/fabric-guide" className="font-medium text-blue-400">
                All Fabric Types →
              </FooterLink>
            </div>
          </div>
        </div>

        {/* Comprehensive SEO Interlinking */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="text-white">
            <StructuredLinks 
              maxLinks={8}
              showCategories={true}
              showCities={true}
              showServices={true}
              className="[&_h3]:text-white [&_h3]:text-md [&_h3]:font-medium [&_h3]:mb-3 [&_a]:text-gray-400 [&_a:hover]:text-blue-400 [&_a]:text-sm [&_a]:transition-colors"
            />
          </div>
        </div>

        {/* Secondary Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Connected Resources */}
            <div>
              <h4 className="text-md font-medium text-white mb-3">Partner Resources</h4>
              <div className="grid grid-cols-1 gap-1">
                <FooterLink href={SITE_CONFIG.connectedSites.fabricStore}>
                  Best Upholstery Fabric Store
                </FooterLink>
                <FooterLink href={SITE_CONFIG.connectedSites.fabricByYard}>
                  Upholstery Fabric By The Yard
                </FooterLink>
                <FooterLink href="/blog">Educational Content Hub</FooterLink>
                <FooterLink href="/about">About Our Process</FooterLink>
                <FooterLink href="/contact">Contact & Consultation</FooterLink>
                <FooterLink href="/service-areas">Complete Service Areas</FooterLink>
              </div>
            </div>

            {/* Business Information */}
            <div>
              <h4 className="text-md font-medium text-white mb-3">Service Information</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>
                  <span className="font-medium">Service Areas:</span>
                  <div className="mt-1 space-y-1">
                    <div>Florida: Orlando, Tampa, Miami, Jacksonville</div>
                    <div>Georgia: Atlanta metro area</div>
                    <div>North Carolina: Charlotte, Raleigh</div>
                    <div>Tennessee: Nashville metro area</div>
                  </div>
                </div>
                <div className="pt-2">
                  <span className="font-medium">Business Hours:</span>
                  <div className="mt-1">
                    <div>Monday - Friday: 9:00 AM - 6:00 PM</div>
                    <div>Saturday: 10:00 AM - 4:00 PM</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h4 className="text-md font-medium text-white mb-3">Quick Actions</h4>
              <div className="space-y-2">
                <Link 
                  href="/tools/yardage-calculator"
                  className="flex items-center space-x-2 text-sm text-green-400 hover:text-green-300 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span>Calculate Fabric Needs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-sm text-gray-500">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
              <FooterLink href="/sitemap">Sitemap</FooterLink>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href={`https://twitter.com/${SITE_CONFIG.social.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a 
                href={`https://facebook.com/${SITE_CONFIG.social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href={`https://instagram.com/${SITE_CONFIG.social.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm3.5 6h-7C5.672 6 5 6.672 5 7.5v5c0 .828.672 1.5 1.5 1.5h7c.828 0 1.5-.672 1.5-1.5v-5C15 6.672 14.328 6 13.5 6z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}