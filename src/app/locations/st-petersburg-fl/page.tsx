import { CityPageTemplate } from "@/components/templates/city-page"
import { getCityData } from "@/lib/city-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Fabric-First Upholstery in St. Petersburg | Florida Renaissance City Expert", 
  description: "Professional fabric selection for St. Petersburg's artistic renaissance. Expert guidance on cultural-grade fabrics for waterfront luxury and urban revival.",
  keywords: ["upholstery St Petersburg", "fabric selection St Pete FL", "waterfront fabrics", "St Petersburg interior design"],
}

export default function StPetersburgPage() {
  const cityData = getCityData('st-petersburg')
  
  if (!cityData) {
    notFound()
  }

  return <CityPageTemplate cityData={cityData} />
}