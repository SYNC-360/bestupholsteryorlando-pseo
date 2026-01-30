import { CityPageTemplate } from "@/components/templates/city-page"
import { getCityData } from "@/lib/city-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Fabric-First Upholstery in Miami | Florida Coastal Fabric Expert",
  description: "Professional fabric selection for Miami's tropical climate. Expert guidance on fade-resistant, humidity-resistant fabrics for South Beach, Coral Gables, and beyond.",
  keywords: ["upholstery Miami", "fabric selection Miami FL", "tropical climate fabrics", "Miami interior design"],
}

export default function MiamiPage() {
  const cityData = getCityData('miami')
  
  if (!cityData) {
    notFound()
  }

  return <CityPageTemplate cityData={cityData} />
}