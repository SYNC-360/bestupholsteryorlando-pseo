import { CityPageTemplate } from "@/components/templates/city-page"
import { getCityData } from "@/lib/city-data"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Fabric-First Upholstery in Orlando | Florida Entertainment Capital Expert",
  description: "Professional fabric selection for Orlando's dynamic entertainment capital. Expert guidance on family-friendly, humidity-resistant fabrics for theme park life and urban sophistication.",
  keywords: ["upholstery Orlando", "fabric selection Orlando FL", "Orlando interior design", "Florida upholstery fabric", "Orlando furniture fabric"],
}

export default function OrlandoPage() {
  const cityData = getCityData('orlando')
  
  if (!cityData) {
    notFound()
  }

  return <CityPageTemplate cityData={cityData} />
}