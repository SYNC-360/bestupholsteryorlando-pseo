import { CityPageTemplate } from "@/components/templates/city-page"
import { getCityData } from "@/lib/city-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Fabric-First Upholstery in Sarasota | Florida Cultural Capital Expert",
  description: "Professional fabric selection for Sarasota's cultural sophistication. Expert guidance on gallery-quality fabrics for arts district elegance and Gulf Coast luxury.",
  keywords: ["upholstery Sarasota", "fabric selection Sarasota FL", "cultural fabrics", "Sarasota interior design", "Siesta Key fabric"],
}

export default function SarasotaPage() {
  const cityData = getCityData('sarasota')
  
  if (!cityData) {
    notFound()
  }

  return <CityPageTemplate cityData={cityData} />
}