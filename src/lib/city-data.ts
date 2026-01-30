import { CityData } from '@/types'

export const cityData: Record<string, CityData> = {
  atlanta: {
    city: "Atlanta",
    state: "Georgia", 
    climate: {
      challenge: "Humid subtropical climate with hot summers and mild winters",
      impact: "High humidity requires moisture-resistant and mold-resistant fabrics",
      solutions: ["Performance synthetics", "Treated natural fibers", "Quick-dry outdoor fabrics"],
      specialFocus: "From Buckhead luxury to Inman Park charm, find the perfect fabrics for your Georgia home."
    },
    architecture: {
      styles: ["Historic Victorian", "Craftsman Bungalow", "Modern Contemporary", "Traditional Southern"],
      considerations: "Mix of historic charm and modern innovation influences fabric choices",
      trends: "Blending traditional elegance with contemporary performance"
    },
    lifestyle: {
      pace: "Dynamic metropolitan with Southern hospitality",
      priorities: ["Family-friendly durability", "Professional sophistication", "Entertainment-ready spaces"],
      preferences: "Quality that performs in real-world family settings"
    },
    neighborhoods: [
      {
        area: "Buckhead",
        style: "Sophisticated Luxury", 
        description: "High-end contemporary and traditional elegance",
        fabricChoices: ["Silk blends", "Luxury performance velvet", "Designer linen"],
        approach: "Investment pieces with lasting quality and style"
      },
      {
        area: "Virginia-Highland",
        style: "Historic Charm",
        description: "Early 1900s character with modern family living",
        fabricChoices: ["Classic cotton", "Traditional patterns", "Updated chenille"],
        approach: "Authentic character fabrics with modern performance"
      },
      {
        area: "Midtown",
        style: "Urban Contemporary",
        description: "Modern condos and lofts with city sophistication", 
        fabricChoices: ["Clean-line synthetics", "Textured neutrals", "Bold accent pieces"],
        approach: "Sleek aesthetics with easy urban maintenance"
      },
      {
        area: "Inman Park",
        style: "Creative Eclectic",
        description: "Artistic community with unique personal expression",
        fabricChoices: ["Natural fibers", "Artisan textiles", "Vintage-inspired patterns"],
        approach: "Character-rich fabrics supporting individual style"
      }
    ],
    successStories: [
      {
        name: "Sarah M.",
        location: "Buckhead",
        project: "Living room sectional in performance velvet",
        result: "Luxury look that handles family life perfectly"
      },
      {
        name: "David K.", 
        location: "Virginia-Highland",
        project: "Dining chairs in stain-resistant linen",
        result: "Classic elegance with modern practicality"
      },
      {
        name: "Jennifer L.",
        location: "Midtown",
        project: "Accent chairs in textured synthetics",
        result: "Urban sophistication with easy maintenance"
      }
    ]
  },

  miami: {
    city: "Miami",
    state: "Florida",
    climate: {
      challenge: "Tropical climate with year-round heat, humidity, and intense UV exposure",
      impact: "Constant humidity and salt air require fade-resistant, moisture-wicking fabrics",
      solutions: ["Marine-grade performance fabrics", "UV-resistant synthetics", "Antimicrobial treatments"],
      specialFocus: "From South Beach glamour to Coral Gables elegance, choose fabrics that thrive in Miami's tropical luxury lifestyle."
    },
    architecture: {
      styles: ["Art Deco", "Mediterranean Revival", "Modern Miami", "High-rise Contemporary"],
      considerations: "Coastal location demands fabrics that resist fading and salt air damage",
      trends: "Vibrant colors and patterns that complement Miami's tropical energy"
    },
    lifestyle: {
      pace: "International cosmopolitan with beach culture",
      priorities: ["UV fade resistance", "Easy cleaning for beach sand", "Entertaining spaces"],
      preferences: "Vibrant aesthetics that withstand tropical conditions"
    },
    seasonalConsiderations: [
      {
        season: "Year-Round Tropical",
        temp: "Consistently Hot & Humid",
        recommendations: [
          "Marine-grade outdoor fabrics for ultimate durability",
          "Quick-dry synthetics for easy cleaning",
          "Fade-resistant colors for constant sun exposure"
        ],
        colors: ["Ocean blues", "Coral pinks", "Tropical whites", "Sunset oranges"]
      }
    ],
    neighborhoods: [
      {
        area: "South Beach",
        style: "Art Deco Glamour",
        description: "Iconic beach culture with international flair",
        fabricChoices: ["Bold patterns", "Fade-resistant synthetics", "Easy-clean performance"],
        approach: "Statement fabrics that handle beach lifestyle"
      },
      {
        area: "Coral Gables",
        style: "Mediterranean Elegance",
        description: "Historic charm with refined tropical luxury",
        fabricChoices: ["Natural linen blends", "Classic stripes", "Subtle tropical patterns"],
        approach: "Timeless elegance adapted for Miami climate"
      },
      {
        area: "Brickell",
        style: "Urban Sophistication",
        description: "High-rise living with city energy",
        fabricChoices: ["Sleek synthetics", "Modern textures", "City-proof performance"],
        approach: "Contemporary style with Miami practicality"
      }
    ],
    successStories: [
      {
        name: "Carlos R.",
        location: "South Beach",
        project: "Outdoor sectional in marine-grade fabric",
        result: "Three years later, still looks brand new despite constant exposure"
      },
      {
        name: "Isabella M.",
        location: "Coral Gables", 
        project: "Dining room in fade-resistant linen",
        result: "Elegant formality that handles Miami entertaining"
      },
      {
        name: "Alex T.",
        location: "Brickell",
        project: "Living room in performance velvet",
        result: "Luxury texture with Miami durability"
      }
    ]
  },

  charlotte: {
    city: "Charlotte",
    state: "North Carolina",
    climate: {
      challenge: "Humid subtropical with hot summers and mild winters, seasonal variation",
      impact: "Seasonal changes require versatile fabrics for year-round comfort",
      solutions: ["Transitional-weight blends", "Season-adaptable textures", "Climate-balanced performance"],
      specialFocus: "From Uptown finance district to historic neighborhoods, find fabrics that match Charlotte's dynamic growth and Southern sophistication."
    },
    architecture: {
      styles: ["Southern Traditional", "Modern Urban", "Suburban Contemporary", "Historic Craftsman"],
      considerations: "Rapid growth blends traditional Southern style with modern urban living",
      trends: "Sophisticated transitional style balancing history and progress"
    },
    lifestyle: {
      pace: "Professional growth city with family values",
      priorities: ["Executive sophistication", "Family functionality", "Seasonal adaptability"],
      preferences: "Quality that reflects success while remaining livable"
    },
    seasonalConsiderations: [
      {
        season: "Spring/Summer",
        temp: "Warm & Humid",
        recommendations: [
          "Breathable natural blends for comfort",
          "Lighter colors to reflect Southern light",
          "Performance fabrics for family activities"
        ],
        colors: ["Soft blues", "Sage greens", "Warm whites", "Sunny yellows"]
      },
      {
        season: "Fall/Winter",
        temp: "Cool & Comfortable",
        recommendations: [
          "Rich textures for cozy elegance",
          "Deeper colors for seasonal warmth",
          "Wool blends for sophisticated comfort"
        ],
        colors: ["Deep burgundy", "Forest green", "Warm taupe", "Golden amber"]
      }
    ],
    neighborhoods: [
      {
        area: "Uptown",
        style: "Executive Modern",
        description: "Banking district energy with urban sophistication",
        fabricChoices: ["Professional synthetics", "Executive leather", "Clean contemporary"],
        approach: "Polished aesthetics reflecting career success"
      },
      {
        area: "Myers Park",
        style: "Southern Elegance",
        description: "Historic charm with refined family living",
        fabricChoices: ["Traditional patterns", "Quality natural fibers", "Timeless classics"],
        approach: "Enduring style that honors Charlotte's heritage"
      },
      {
        area: "Dilworth",
        style: "Trendy Traditional",
        description: "Historic trolley neighborhood with modern updates",
        fabricChoices: ["Updated classics", "Transitional blends", "Neighborhood-friendly"],
        approach: "Fresh takes on traditional Southern comfort"
      }
    ],
    successStories: [
      {
        name: "Michael B.",
        location: "Uptown",
        project: "Executive office chairs in performance leather",
        result: "Professional image with Charlotte durability"
      },
      {
        name: "Amanda S.",
        location: "Myers Park",
        project: "Family room in transitional fabric",
        result: "Southern elegance that handles real family life"
      },
      {
        name: "James W.",
        location: "Dilworth",
        project: "Dining set in updated traditional",
        result: "Perfect blend of history and modern practicality"
      }
    ]
  },

  nashville: {
    city: "Nashville",
    state: "Tennessee",
    climate: {
      challenge: "Humid subtropical with hot summers, mild winters, and seasonal variation",
      impact: "Four-season climate requires versatile fabrics for comfort year-round",
      solutions: ["All-season performance blends", "Music venue durability", "Southern comfort fabrics"],
      specialFocus: "From Music Row studios to Belle Meade mansions, choose fabrics that capture Nashville's creative energy and Southern sophistication."
    },
    architecture: {
      styles: ["Antebellum Southern", "Music Industry Modern", "Historic Nashville", "Contemporary Country"],
      considerations: "Music industry influence meets traditional Southern architecture",
      trends: "Creative expression balanced with Southern hospitality"
    },
    lifestyle: {
      pace: "Creative energy with Southern hospitality",
      priorities: ["Entertainment spaces", "Music industry sophistication", "Southern comfort"],
      preferences: "Fabrics that support both creative work and gracious living"
    },
    neighborhoods: [
      {
        area: "Music Row",
        style: "Creative Professional",
        description: "Industry hub with sophisticated creative energy",
        fabricChoices: ["Rich velvets", "Acoustic-friendly textures", "Professional comfort"],
        approach: "Spaces that inspire creativity while maintaining professionalism"
      },
      {
        area: "Belle Meade",
        style: "Southern Luxury",
        description: "Historic elegance with modern sophistication",
        fabricChoices: ["Luxury traditionals", "Estate-quality fabrics", "Timeless elegance"],
        approach: "Investment pieces reflecting Nashville's finest traditions"
      },
      {
        area: "The Gulch",
        style: "Urban Contemporary",
        description: "Modern city living with Nashville character",
        fabricChoices: ["Contemporary performance", "Urban-friendly maintenance", "Modern comfort"],
        approach: "City sophistication with Nashville warmth"
      },
      {
        area: "East Nashville",
        style: "Artistic Eclectic",
        description: "Creative community with authentic character",
        fabricChoices: ["Vintage-inspired", "Artisan textiles", "Creative expression"],
        approach: "Unique fabrics supporting individual artistic vision"
      }
    ],
    successStories: [
      {
        name: "Songwriter Jake M.",
        location: "Music Row",
        project: "Studio seating in acoustic velvet",
        result: "Perfect sound quality with Nashville style"
      },
      {
        name: "Sarah Beth K.",
        location: "Belle Meade",
        project: "Formal living room in estate linen",
        result: "Southern elegance for entertaining"
      },
      {
        name: "Creative Director Lisa R.",
        location: "East Nashville",
        project: "Home office in vintage-inspired patterns",
        result: "Creative space that inspires daily"
      }
    ]
  },

  tampa: {
    city: "Tampa",
    state: "Florida", 
    climate: {
      challenge: "Subtropical climate with hot, humid summers and warm winters",
      impact: "Year-round humidity and frequent rain require quick-dry, mold-resistant fabrics",
      solutions: ["Performance outdoor fabrics", "Moisture-wicking synthetics", "Antimicrobial treatments"],
      specialFocus: "From Westshore business district to historic Hyde Park, choose fabrics that thrive in Tampa Bay's humid subtropical environment."
    },
    architecture: {
      styles: ["Spanish Colonial Revival", "Contemporary Florida", "Historic Bungalow", "Waterfront Modern"],
      considerations: "Coastal proximity and historic Spanish influence shape fabric needs",
      trends: "Relaxed Florida lifestyle with professional business influence"
    },
    lifestyle: {
      pace: "Business hub with relaxed coastal living",
      priorities: ["Business professional image", "Coastal durability", "Year-round comfort"],
      preferences: "Professional quality that handles Florida's challenging climate"
    },
    neighborhoods: [
      {
        area: "Westshore",
        style: "Business Professional",
        description: "Corporate district with upscale coastal living",
        fabricChoices: ["Professional performance", "Humidity-resistant synthetics", "Executive comfort"],
        approach: "Business sophistication adapted for Tampa climate"
      },
      {
        area: "Hyde Park",
        style: "Historic Charm",
        description: "Turn-of-century elegance with modern updates",
        fabricChoices: ["Traditional patterns", "Climate-adapted classics", "Historic-inspired"],
        approach: "Preserving character while embracing performance"
      },
      {
        area: "Davis Islands",
        style: "Waterfront Luxury",
        description: "Exclusive island living with water views",
        fabricChoices: ["Marine-grade luxury", "Water-resistant elegance", "Coastal sophistication"],
        approach: "High-end materials built for waterfront life"
      }
    ],
    successStories: [
      {
        name: "Executive Maria L.",
        location: "Westshore",
        project: "Office furniture in performance leather",
        result: "Professional image that handles Tampa humidity"
      },
      {
        name: "Historic Homeowner Tom R.",
        location: "Hyde Park",
        project: "Period furniture in climate-adapted fabrics",
        result: "Authentic 1920s look with modern performance"
      },
      {
        name: "Waterfront Resident Anna P.",
        location: "Davis Islands",
        project: "Outdoor living in marine-grade fabrics",
        result: "Luxury outdoor living space that lasts"
      }
    ]
  },

  jacksonville: {
    city: "Jacksonville",
    state: "Florida",
    climate: {
      challenge: "Humid subtropical with hot summers, mild winters, and coastal influences",
      impact: "Coastal humidity and salt air require fade-resistant, durable fabrics",
      solutions: ["Coastal performance fabrics", "Salt-air resistant treatments", "UV protective finishes"],
      specialFocus: "From Riverside's historic charm to Ponte Vedra's coastal elegance, find fabrics that capture Jacksonville's unique blend of river city culture and Atlantic coast lifestyle."
    },
    architecture: {
      styles: ["River City Historic", "Coastal Contemporary", "Southern Colonial", "Beach House Modern"],
      considerations: "River and ocean proximity creates unique environmental challenges",
      trends: "Relaxed coastal living with historic river city character"
    },
    lifestyle: {
      pace: "Large city amenities with small town values",
      priorities: ["Family-friendly durability", "Coastal entertainment", "Historic preservation"],
      preferences: "Quality fabrics that honor both river heritage and coastal lifestyle"
    },
    neighborhoods: [
      {
        area: "Riverside/Avondale",
        style: "Historic Elegance",
        description: "Early 20th century charm along the St. Johns River",
        fabricChoices: ["Period-appropriate patterns", "Moisture-resistant classics", "Historic reproductions"],
        approach: "Authentic historic style with modern coastal performance"
      },
      {
        area: "Ponte Vedra",
        style: "Coastal Luxury",
        description: "Exclusive beachfront living with golf course elegance",
        fabricChoices: ["Marine-grade luxury", "Golf club sophistication", "Coastal-resistant elegance"],
        approach: "High-end coastal living with championship-level durability"
      },
      {
        area: "Atlantic Beach",
        style: "Beach House Casual",
        description: "Relaxed coastal living with family-friendly comfort",
        fabricChoices: ["Beach-house performance", "Sandy-feet friendly", "Coastal casual"],
        approach: "Comfortable coastal living that embraces beach life"
      }
    ],
    successStories: [
      {
        name: "River City Resident Kate H.",
        location: "Riverside",
        project: "Historic home renovation in period fabrics",
        result: "1920s authenticity with Jacksonville durability"
      },
      {
        name: "Beach House Owner Mike D.",
        location: "Ponte Vedra",
        project: "Coastal living room in marine-grade luxury",
        result: "Elegance that handles ocean air perfectly"
      },
      {
        name: "Family Home Patricia S.",
        location: "Atlantic Beach",
        project: "Family room in beach-proof performance",
        result: "Beautiful coastal style that loves beach life"
      }
    ]
  }
}

export function getCityData(cityState: string): CityData | null {
  return cityData[cityState] || null
}