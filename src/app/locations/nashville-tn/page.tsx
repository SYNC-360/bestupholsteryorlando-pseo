import { CityPageTemplate } from "@/components/templates/city-page"
import { getCityData } from "@/lib/city-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Fabric-First Upholstery in Nashville | Tennessee Music City Expert",
  description: "Professional fabric selection for Nashville's creative energy. Expert guidance on fabrics that support both artistic spaces and Southern hospitality.",
  keywords: ["upholstery Nashville", "fabric selection Nashville TN", "music city fabrics", "Nashville interior design"],
}

export default function NashvillePage() {
  const cityData = getCityData('nashville')
  
  if (!cityData) {
    notFound()
  }

  return <CityPageTemplate cityData={cityData} />
}