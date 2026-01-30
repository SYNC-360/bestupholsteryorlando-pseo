import { CityPageTemplate } from "@/components/templates/city-page"
import { getCityData } from "@/lib/city-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Fabric-First Upholstery in Charlotte | North Carolina Fabric Expert", 
  description: "Professional fabric selection for Charlotte's dynamic growth. Expert guidance on fabrics that blend Southern sophistication with modern urban living.",
  keywords: ["upholstery Charlotte", "fabric selection Charlotte NC", "transitional fabrics", "Charlotte interior design"],
}

export default function CharlottePage() {
  const cityData = getCityData('charlotte')
  
  if (!cityData) {
    notFound()
  }

  return <CityPageTemplate cityData={cityData} />
}