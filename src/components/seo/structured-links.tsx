import Link from 'next/link'
import { GEOGRAPHIC_MARKETS, FABRIC_CATEGORIES } from '@/lib/constants'

interface StructuredLinksProps {
  currentPath?: string
  maxLinks?: number
  showCategories?: boolean
  showCities?: boolean
  showServices?: boolean
  className?: string
}

export function StructuredLinks({ 
  currentPath = '',
  maxLinks = 12,
  showCategories = true,
  showCities = true, 
  showServices = true,
  className = ""
}: StructuredLinksProps) {
  
  // Core service pages for internal linking
  const servicePages = [
    { href: '/upholstery-services', label: 'Professional Upholstery' },
    { href: '/fabric-selection', label: 'Expert Fabric Selection' },
    { href: '/fabric-guide', label: 'Complete Fabric Guide' },
    { href: '/fabric-availability-guide', label: 'Fabric Availability Strategy' },
    { href: '/compare', label: 'Fabric Comparisons' },
    { href: '/best', label: 'Best Fabric Rankings' },
    { href: '/examples', label: 'Before & After Gallery' },
    { href: '/tools/yardage-calculator', label: 'Fabric Calculator' },
    { href: '/locations', label: 'Service Areas' }
  ]

  // Top fabric categories for SEO
  const topFabricCategories = FABRIC_CATEGORIES.slice(0, 6).map(fabric => ({
    href: `/fabric-guide/${fabric}`,
    label: `${fabric.charAt(0).toUpperCase() + fabric.slice(1)} Fabric Guide`
  }))

  // Major cities for geographic SEO
  const majorCities = GEOGRAPHIC_MARKETS.tier1.slice(0, 8).map(city => ({
    href: `/fabric-stores/${city.city.toLowerCase().replace(' ', '-')}-${city.state.toLowerCase()}`,
    label: `${city.city} Fabric Stores`,
    state: city.state
  }))

  // Regional service combinations for long-tail SEO
  const regionalServices = [
    { href: '/fabric-stores/tampa', label: 'Tampa Fabric Stores' },
    { href: '/fabric/orlando', label: 'Orlando Fabric Authority' },
    { href: '/fabric-stores/miami', label: 'Miami Luxury Fabrics' },
    { href: '/mid-century-modern/atlanta', label: 'Atlanta MCM Specialists' },
    { href: '/interior-designer/charlotte', label: 'Charlotte Interior Design' },
    { href: '/upholstery/jacksonville', label: 'Jacksonville Upholstery' },
    { href: '/marine-upholstery/fort-lauderdale', label: 'Fort Lauderdale Marine' },
    { href: '/fabric-stores/nashville', label: 'Nashville Fabric Selection' }
  ]

  // Filter out current page to avoid self-linking
  const filterCurrentPage = (links: any[]) => 
    links.filter(link => link.href !== currentPath)

  return (
    <div className={`space-y-8 ${className}`}>
      {showServices && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Professional Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {filterCurrentPage(servicePages).slice(0, maxLinks).map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                title={service.label}
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {showCategories && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Fabric Types & Guides
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {filterCurrentPage(topFabricCategories).slice(0, maxLinks).map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="text-sm text-green-600 hover:text-green-800 hover:underline transition-colors"
                title={category.label}
              >
                {category.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {showCities && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            City-Specific Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {filterCurrentPage(majorCities).slice(0, maxLinks).map((city, index) => (
              <Link
                key={index}
                href={city.href}
                className="text-sm text-purple-600 hover:text-purple-800 hover:underline transition-colors"
                title={`Fabric stores and services in ${city.label.replace(' Fabric Stores', '')}, ${city.state}`}
              >
                {city.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Specialized Regional Services */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Specialized Regional Services
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {filterCurrentPage(regionalServices).slice(0, maxLinks).map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="text-sm text-amber-600 hover:text-amber-800 hover:underline transition-colors"
              title={service.label}
            >
              {service.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

// Component for breadcrumb navigation
export function BreadcrumbLinks({ currentPage, category, city }: {
  currentPage: string
  category?: string
  city?: string
}) {
  const breadcrumbs = [
    { href: '/', label: 'Home' }
  ]

  if (category) {
    breadcrumbs.push({
      href: `/${category}`,
      label: category.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    })
  }

  if (city) {
    breadcrumbs.push({
      href: `/${category}/${city}`,
      label: city.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ')
    })
  }

  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-gray-400">/</span>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-600 font-medium">{crumb.label}</span>
            ) : (
              <Link 
                href={crumb.href}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Related services component for end of pages
export function RelatedServices({ currentService, city }: {
  currentService: string
  city?: string
}) {
  const baseCity = city || 'orlando-fl'
  
  const relatedServices = [
    { 
      service: 'upholstery', 
      title: 'Professional Upholstery',
      description: 'Complete furniture reupholstery and restoration services'
    },
    { 
      service: 'fabric-stores', 
      title: 'Fabric Stores',
      description: 'Local fabric retailers and specialty suppliers'
    },
    { 
      service: 'fabric', 
      title: 'Fabric Selection',
      description: 'Expert fabric consultation and selection services'
    },
    { 
      service: 'interior-designer', 
      title: 'Interior Design',
      description: 'Professional interior design consultation'
    },
    { 
      service: 'mid-century-modern', 
      title: 'Mid-Century Modern',
      description: 'Specialized MCM furniture restoration and upholstery'
    }
  ].filter(service => service.service !== currentService)

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Related Services in {city ? city.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ') : 'Your Area'}
      </h3>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relatedServices.slice(0, 3).map((service, index) => (
          <Link
            key={index}
            href={`/${service.service}/${baseCity}`}
            className="block p-4 bg-white rounded border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
          >
            <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
              {service.title}
            </h4>
            <p className="text-sm text-gray-600">
              {service.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}