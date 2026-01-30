import { CityPageTemplate } from "@/components/templates/city-page"
import { getCityData } from "@/lib/city-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Fabric-First Upholstery in Jacksonville | Florida River City Expert",
  description: "Professional fabric selection for Jacksonville's unique river and coastal environment. Expert guidance on fabrics that handle both historic charm and coastal living.",
  keywords: ["upholstery Jacksonville", "fabric selection Jacksonville FL", "coastal climate fabrics", "Jacksonville interior design"],
}

export default function JacksonvillePage() {
  const cityData = getCityData('jacksonville')
  
  if (!cityData) {
    notFound()
  }

  return <CityPageTemplate cityData={cityData} />
}