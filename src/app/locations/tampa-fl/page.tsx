import { CityPageTemplate } from "@/components/templates/city-page"
import { getCityData } from "@/lib/city-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Fabric-First Upholstery in Tampa | Florida Gulf Coast Expert",
  description: "Professional fabric selection for Tampa Bay's subtropical climate. Expert guidance on humidity-resistant fabrics for business and coastal living.",
  keywords: ["upholstery Tampa", "fabric selection Tampa FL", "subtropical climate fabrics", "Tampa Bay interior design"],
}

export default function TampaPage() {
  const cityData = getCityData('tampa')
  
  if (!cityData) {
    notFound()
  }

  return <CityPageTemplate cityData={cityData} />
}