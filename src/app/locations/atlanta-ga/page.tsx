import { CityPageTemplate } from "@/components/templates/city-page"
import { getCityData } from "@/lib/city-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Fabric-First Upholstery in Atlanta | Georgia Fabric Selection Expert",
  description: "Professional fabric selection for Atlanta upholstery projects. Expert guidance on climate-appropriate fabrics that complement Atlanta's diverse architectural styles.",
  keywords: ["upholstery Atlanta", "fabric selection Atlanta GA", "Atlanta interior design", "Georgia upholstery fabric"],
}

export default function AtlantaPage() {
  const cityData = getCityData('atlanta')
  
  if (!cityData) {
    notFound()
  }

  return <CityPageTemplate cityData={cityData} />
}