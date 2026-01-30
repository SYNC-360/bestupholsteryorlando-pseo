'use client'

import { useState } from 'react'
import Link from "next/link"
import { ArrowRight, Calculator, Info, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/sections/header"
import { SITE_CONFIG } from "@/lib/constants"

const furnitureTypes = [
  { id: 'chair', name: 'Accent Chair', baseYards: 3.5, description: 'Standard accent or dining chair' },
  { id: 'armchair', name: 'Armchair', baseYards: 5, description: 'Upholstered armchair or recliner' },
  { id: 'loveseat', name: 'Loveseat', baseYards: 8, description: '2-seat sofa or loveseat' },
  { id: 'sofa', name: '3-Seat Sofa', baseYards: 12, description: 'Standard 3-cushion sofa' },
  { id: 'sectional-small', name: 'Small Sectional', baseYards: 16, description: 'L-shaped or small sectional' },
  { id: 'sectional-large', name: 'Large Sectional', baseYards: 22, description: 'Large or U-shaped sectional' },
  { id: 'ottoman', name: 'Ottoman', baseYards: 2, description: 'Standard ottoman or bench' },
  { id: 'headboard-twin', name: 'Twin Headboard', baseYards: 2.5, description: 'Twin size headboard' },
  { id: 'headboard-queen', name: 'Queen Headboard', baseYards: 4, description: 'Queen size headboard' },
  { id: 'headboard-king', name: 'King Headboard', baseYards: 5, description: 'King size headboard' }
]

const fabricWidths = [
  { value: 54, label: '54 inches (Standard)' },
  { value: 58, label: '58 inches (Wide)' },
  { value: 60, label: '60 inches (Extra Wide)' },
  { value: 45, label: '45 inches (Narrow)' }
]

export default function YardageCalculatorPage() {
  const [selectedFurniture, setSelectedFurniture] = useState('')
  const [fabricWidth, setFabricWidth] = useState(54)
  const [hasPattern, setHasPattern] = useState(false)
  const [patternRepeat, setPatternRepeat] = useState(12)
  const [extraCushions, setExtraCushions] = useState(0)
  const [welting, setWelting] = useState(false)
  
  const calculateYardage = () => {
    const furniture = furnitureTypes.find(f => f.id === selectedFurniture)
    if (!furniture) return 0
    
    let baseYards = furniture.baseYards
    
    // Adjust for fabric width
    if (fabricWidth < 54) {
      baseYards *= 1.2 // 20% more for narrow fabric
    } else if (fabricWidth >= 60) {
      baseYards *= 0.9 // 10% less for wide fabric
    }
    
    // Add extra cushions
    baseYards += extraCushions * 0.75
    
    // Add pattern matching waste
    if (hasPattern) {
      const patternWaste = (patternRepeat / 36) * 0.25 // 25% of pattern repeat per yard
      baseYards += baseYards * patternWaste
    }
    
    // Add welting/piping
    if (welting) {
      baseYards += 0.5
    }
    
    // Add safety margin (10%)
    baseYards *= 1.1
    
    // Round up to nearest quarter yard
    return Math.ceil(baseYards * 4) / 4
  }

  const result = calculateYardage()
  const selectedFurnitureData = furnitureTypes.find(f => f.id === selectedFurniture)

  const tips = [
    "Always buy 10-15% extra fabric for repairs and future touch-ups",
    "Consider fabric direction - some patterns require more yardage",
    "Leather and vinyl calculations may differ from fabric",
    "Consult your upholsterer before ordering - they may need different amounts"
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  <Calculator className="w-4 h-4 mr-2" />
                  Professional Tool
                </span>
              </div>
              <h1 className="text-hero font-display font-bold tracking-tight text-gray-900">
                Fabric Yardage Calculator
              </h1>
              <p className="mt-6 text-large leading-8 text-gray-700">
                Calculate exactly how much fabric you need for your upholstery project. Get professional-grade estimates with pattern matching and waste factors included.
              </p>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-24 sm:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-x-16">
              
              {/* Calculator Form */}
              <div>
                <h2 className="text-section font-display font-bold tracking-tight text-gray-900 mb-8">
                  Project Details
                </h2>
                
                <div className="space-y-6">
                  {/* Furniture Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Furniture Type
                    </label>
                    <select 
                      value={selectedFurniture}
                      onChange={(e) => setSelectedFurniture(e.target.value)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                    >
                      <option value="">Select furniture type...</option>
                      {furnitureTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.name} - {type.description}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Fabric Width */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Fabric Width
                    </label>
                    <select 
                      value={fabricWidth}
                      onChange={(e) => setFabricWidth(parseInt(e.target.value))}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                    >
                      {fabricWidths.map((width) => (
                        <option key={width.value} value={width.value}>
                          {width.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Pattern Repeat */}
                  <div>
                    <div className="flex items-center mb-3">
                      <input
                        id="pattern"
                        type="checkbox"
                        checked={hasPattern}
                        onChange={(e) => setHasPattern(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="pattern" className="ml-2 block text-sm font-medium text-gray-900">
                        Fabric has a pattern that needs matching
                      </label>
                    </div>
                    {hasPattern && (
                      <div>
                        <label className="block text-sm text-gray-600 mb-2">
                          Pattern repeat (inches)
                        </label>
                        <input
                          type="number"
                          value={patternRepeat}
                          onChange={(e) => setPatternRepeat(parseInt(e.target.value) || 12)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                          min="1"
                          max="48"
                        />
                      </div>
                    )}
                  </div>

                  {/* Extra Cushions */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-3">
                      Extra Cushions/Pillows
                    </label>
                    <input
                      type="number"
                      value={extraCushions}
                      onChange={(e) => setExtraCushions(parseInt(e.target.value) || 0)}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-3 border"
                      min="0"
                      max="20"
                    />
                  </div>

                  {/* Welting/Piping */}
                  <div>
                    <div className="flex items-center">
                      <input
                        id="welting"
                        type="checkbox"
                        checked={welting}
                        onChange={(e) => setWelting(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="welting" className="ml-2 block text-sm font-medium text-gray-900">
                        Add welting/piping trim
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-section font-display font-bold tracking-tight text-gray-900 mb-8">
                  Yardage Estimate
                </h2>
                
                {selectedFurniture ? (
                  <div className="rounded-2xl bg-blue-50 p-8 mb-8">
                    <div className="text-center mb-6">
                      <div className="text-6xl font-bold text-blue-600 mb-2">{result}</div>
                      <div className="text-xl text-blue-800">yards needed</div>
                    </div>
                    
                    <div className="border-t border-blue-200 pt-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Breakdown:</h4>
                      <div className="space-y-2 text-sm text-blue-800">
                        <div className="flex justify-between">
                          <span>Base yardage ({selectedFurnitureData?.name}):</span>
                          <span>{selectedFurnitureData?.baseYards} yards</span>
                        </div>
                        {extraCushions > 0 && (
                          <div className="flex justify-between">
                            <span>Extra cushions (+{extraCushions}):</span>
                            <span>+{(extraCushions * 0.75).toFixed(1)} yards</span>
                          </div>
                        )}
                        {hasPattern && (
                          <div className="flex justify-between">
                            <span>Pattern matching:</span>
                            <span>+{((patternRepeat / 36) * 0.25 * 100).toFixed(0)}% extra</span>
                          </div>
                        )}
                        {welting && (
                          <div className="flex justify-between">
                            <span>Welting/piping:</span>
                            <span>+0.5 yards</span>
                          </div>
                        )}
                        <div className="flex justify-between font-medium">
                          <span>Safety margin:</span>
                          <span>+10%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-blue-200">
                      <Button variant="luxury" size="lg" asChild className="w-full">
                        <Link href={`${SITE_CONFIG.connectedSites.fabricStore}/samples?yardage=${result}`}>
                          Order {result} Yards of Fabric
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border-2 border-dashed border-gray-300 p-8 text-center">
                    <Calculator className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-600">Select furniture type to see yardage estimate</p>
                  </div>
                )}

                {/* Professional Tips */}
                <div className="rounded-2xl bg-amber-50 p-6">
                  <div className="flex items-center gap-x-3 mb-4">
                    <Info className="h-6 w-6 text-amber-600" />
                    <h4 className="font-semibold text-amber-900">Professional Tips</h4>
                  </div>
                  <ul className="space-y-2">
                    {tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-x-2">
                        <CheckCircle className="h-4 w-4 text-amber-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-amber-800">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 sm:py-32 bg-gray-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-gray-900">
                How the Calculator Works
              </h2>
              <p className="mt-6 text-large leading-8 text-gray-600">
                Our professional-grade calculator uses industry-standard formulas developed by expert upholsterers.
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100 p-4 mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Base Measurements</h3>
                <p className="text-gray-600">Starts with furniture-specific base yardage requirements from professional upholstery guides.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100 p-4 mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Adjustments</h3>
                <p className="text-gray-600">Factors in fabric width, pattern repeats, extra cushions, and welting requirements.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100 p-4 mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Safety Buffer</h3>
                <p className="text-gray-600">Adds professional-recommended safety margin for cutting waste and future repairs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 sm:py-32 bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-section font-display font-bold tracking-tight text-white">
                Ready to Order Your Fabric?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-large leading-8 text-gray-300">
                Now that you know exactly how much fabric you need, browse our premium selection or order samples to see quality firsthand.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button variant="luxury" size="xl" asChild>
                  <Link href={SITE_CONFIG.connectedSites.fabricStore}>
                    Browse Fabric Collection
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" className="border-gray-300 text-gray-300 hover:bg-gray-800" asChild>
                  <Link href="/fabric-guide">
                    Fabric Selection Guide
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
              © 2024 {SITE_CONFIG.name}. Professional Yardage Calculator.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}