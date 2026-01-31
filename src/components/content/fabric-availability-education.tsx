import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface FabricAvailabilityEducationProps {
  variant?: 'inline' | 'section' | 'sidebar'
  cityName?: string
  fabricType?: string
  className?: string
}

export function FabricAvailabilityEducation({ 
  variant = 'section',
  cityName,
  fabricType,
  className = ""
}: FabricAvailabilityEducationProps) {
  
  if (variant === 'inline') {
    return (
      <div className={`bg-amber-50 border-l-4 border-amber-400 p-4 my-6 ${className}`}>
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-amber-700">
              <span className="font-medium">Fabric Availability Note:</span> {fabricType ? `${fabricType} patterns` : 'Fabric patterns'} can be discontinued without notice. 
              Consider ordering extra samples and calculating total yardage needs upfront to avoid availability issues.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'sidebar') {
    return (
      <div className={`bg-blue-50 rounded-lg p-6 ${className}`}>
        <h3 className="text-lg font-semibold text-blue-900 mb-3">
          📋 Smart Fabric Ordering Tips
        </h3>
        <div className="space-y-3 text-sm text-blue-800">
          <p><strong>Order Multiple Samples:</strong> Patterns can be discontinued suddenly. Order 3-5 similar options.</p>
          <p><strong>Calculate Full Yardage:</strong> Order everything at once to ensure consistent dye lots.</p>
          <p><strong>Keep Backup Choices:</strong> Have 2-3 loved patterns ready in case your first choice becomes unavailable.</p>
        </div>
      </div>
    )
  }

  // Default: Full section variant
  return (
    <section className={`py-16 bg-gradient-to-br from-amber-50 to-orange-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Smart Fabric Selection Strategy{cityName ? ` for ${cityName}` : ''}
          </h2>
          <p className="text-lg text-gray-600">
            Professional insights on fabric availability and ordering best practices
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Pattern Discontinuation Reality */}
          <div className="bg-white rounded-lg p-6 border border-amber-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 ml-4">Pattern Discontinuation Reality</h3>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>Fabric manufacturers regularly discontinue patterns with little to no advance notice. Popular patterns can vanish from availability within weeks.</p>
              <p className="font-medium text-amber-700">
                Professional Tip: When you find "the perfect" fabric, treat it as potentially limited availability.
              </p>
            </div>
          </div>

          {/* Dye Lot Consistency */}
          <div className="bg-white rounded-lg p-6 border border-blue-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 ml-4">Dye Lot Consistency</h3>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>Even when patterns remain available, dye lots can vary significantly between production runs, creating noticeable color differences.</p>
              <p className="font-medium text-blue-700">
                Professional Tip: Order your complete yardage requirement in a single purchase to ensure color consistency.
              </p>
            </div>
          </div>

          {/* Strategic Sampling */}
          <div className="bg-white rounded-lg p-6 border border-green-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m0-8h10a2 2 0 012 2v6a2 2 0 01-2 2H9m-2 0a2 2 0 01-2-2V7a2 2 0 012-2m0 0h10a2 2 0 012 2v6a2 2 0 01-2 2H9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 ml-4">Strategic Sampling</h3>
            </div>
            <div className="space-y-3 text-gray-600">
              <p>Instead of ordering one "perfect" sample, order 3-5 patterns you love. This gives you immediate backup options when discontinuations happen.</p>
              <p className="font-medium text-green-700">
                Professional Tip: Sample costs are minimal compared to project delays from unavailable fabrics.
              </p>
            </div>
          </div>
        </div>

        {/* Professional Fabric Ordering Protocol */}
        <div className="mt-12 bg-white rounded-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Professional Fabric Ordering Protocol
          </h3>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Sample Strategy
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Order 3-5 similar patterns you genuinely love
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Test samples in your actual lighting conditions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Keep backup samples until project completion
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Yardage Calculation
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Calculate total needs before ordering anything
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Add 10% extra for pattern matching and waste
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Order all fabric in one purchase for consistency
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">
              Why This Matters{cityName ? ` in ${cityName}` : ''}
            </h4>
            <p className="text-gray-700 mb-4">
              We've seen countless projects delayed or compromised because customers fell in love with a fabric, 
              started the project, then discovered they needed more yardage from a pattern that was no longer available. 
              The replacement fabric, even if "similar," creates visible inconsistencies that compromise the final result.
            </p>
            <p className="text-gray-700">
              Our fabric-first approach means we help you navigate availability challenges before they become project problems. 
              Smart ordering strategy is just as important as choosing the right pattern.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Get Professional Fabric Selection Guidance
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our fabric selection process includes availability strategy, backup pattern identification, and accurate yardage calculation to ensure your project success.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/tools/yardage-calculator">Calculate Yardage</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Quick inline warning for use within existing content
export function FabricAvailabilityAlert({ 
  message = "Popular fabric patterns can be discontinued without notice. Consider ordering multiple samples and calculating full yardage needs early in your project planning.",
  type = 'info' 
}: {
  message?: string
  type?: 'info' | 'warning' | 'tip'
}) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800', 
    tip: 'bg-green-50 border-green-200 text-green-800'
  }

  const icons = {
    info: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ),
    tip: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    )
  }

  return (
    <div className={`rounded-lg border p-4 ${styles[type]}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          {icons[type]}
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium">
            {message}
          </p>
        </div>
      </div>
    </div>
  )
}