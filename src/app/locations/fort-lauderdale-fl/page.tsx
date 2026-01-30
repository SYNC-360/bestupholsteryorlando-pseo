import { CityPageTemplate } from "@/components/templates/city-page"
import { getCityData } from "@/lib/city-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Fabric-First Upholstery in Fort Lauderdale | Florida Yachting Capital Expert",
  description: "Professional fabric selection for Fort Lauderdale's boating lifestyle. Expert guidance on marine-grade, luxury fabrics for Las Olas sophistication and coastal living.",
  keywords: ["upholstery Fort Lauderdale", "fabric selection Fort Lauderdale FL", "marine fabric", "Fort Lauderdale interior design"],
}

export default function FortLauderdalePage() {
  const cityData = getCityData('fort-lauderdale')
  
  if (!cityData) {
    notFound()
  }

  return <CityPageTemplate cityData={cityData} />
}