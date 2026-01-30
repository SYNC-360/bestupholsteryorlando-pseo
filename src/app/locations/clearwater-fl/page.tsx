import { CityPageTemplate } from "@/components/templates/city-page"
import { getCityData } from "@/lib/city-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Fabric-First Upholstery in Clearwater | Florida Beach Paradise Expert",
  description: "Professional fabric selection for Clearwater's beach lifestyle. Expert guidance on beach-proof, family-friendly fabrics for Gulf Coast paradise living.",
  keywords: ["upholstery Clearwater", "fabric selection Clearwater FL", "beach fabrics", "Clearwater Beach interior design"],
}

export default function ClearwaterPage() {
  const cityData = getCityData('clearwater')
  
  if (!cityData) {
    notFound()
  }

  return <CityPageTemplate cityData={cityData} />
}