import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const conditions = [
  {
    category: "Skin Cancer",
    conditions: [
      { name: "Melanoma", severity: "high", description: "Most serious form of skin cancer", link: "https://my.clevelandclinic.org/health/diseases/14391-melanoma" },
      { name: "Basal Cell Carcinoma", severity: "medium", description: "Most common type of skin cancer", link: "https://www.bidmc.org/conditions-and-treatments/cancers-tumors-and-blood/basal-cell-carcinoma" },
      { name: "Squamous Cell Carcinoma", severity: "medium", description: "Second most common skin cancer", link: "https://my.clevelandclinic.org/health/diseases/17480-squamous-cell-carcinoma" },
      { name: "Actinic Keratosis", severity: "medium", description: "Pre-cancerous skin lesions", link: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/actinic-keratosis" },
    ],
  },
  {
    category: "Acne & Pimples",
    conditions: [
      { name: "Comedonal Acne", severity: "low", description: "Blackheads and whiteheads", link: "https://blog.walgreens.com/health/skin-health-conditions/comedonal-acne.html" },
      { name: "Inflammatory Acne", severity: "medium", description: "Red, swollen pimples", link: "https://www.medicalnewstoday.com/articles/inflamed-acne" },
      { name: "Cystic Acne", severity: "high", description: "Deep, painful cysts", link: "https://www.medicalnewstoday.com/articles/103258" },
      { name: "Hormonal Acne", severity: "medium", description: "Acne caused by hormonal changes", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5015761/" },
    ],
  },
  {
    category: "HPV & Herpes",
    conditions: [
      { name: "Genital Warts", severity: "medium", description: "Caused by HPV infection", link: "https://www.nhs.uk/conditions/genital-warts/" },
      { name: "Common Warts", severity: "low", description: "Benign skin growths", link: "https://bestpractice.bmj.com/topics/en-us/615" },
      { name: "Herpes Simplex", severity: "medium", description: "Viral infection causing blisters", link: "https://www.encephalitis.info/types-of-encephalitis/infectious-encephalitis/herpes-simplex-virus-encephalitis/" },
      { name: "Molluscum Contagiosum", severity: "low", description: "Viral skin infection", link: "https://www.cdc.gov/poxvirus/molluscum-contagiosum/clinical_information.html" },
    ],
  },
  {
    category: "Eczema & Psoriasis",
    conditions: [
      { name: "Atopic Dermatitis", severity: "medium", description: "Most common form of eczema", link: "https://medlineplus.gov/atopicdermatitis.html" },
      { name: "Contact Dermatitis", severity: "low", description: "Skin reaction to irritants", link: "https://medlineplus.gov/contactdermatitis.html" },
      { name: "Plaque Psoriasis", severity: "medium", description: "Most common type of psoriasis", link: "https://www.cdc.gov/psoriasis/index.htm" },
      { name: "Seborrheic Dermatitis", severity: "low", description: "Scaly, itchy rash", link: "https://medlineplus.gov/ency/article/000963.htm" },
    ],
  },
  {
    category: "Skin Mycoses",
    conditions: [
      { name: "Athlete's Foot", severity: "low", description: "Fungal infection of feet", link: "https://www.cdc.gov/fungal/diseases/athletes-foot/index.html" },
      { name: "Ringworm", severity: "low", description: "Fungal skin infection", link: "https://www.cdc.gov/fungal/diseases/ringworm/index.html" },
      { name: "Nail Fungus", severity: "medium", description: "Fungal infection of nails", link: "https://www.cdc.gov/fungal/diseases/nail-infections.html" },
      { name: "Candidiasis", severity: "medium", description: "Yeast infection of skin", link: "https://www.cdc.gov/fungal/diseases/candidiasis/index.html" },
    ],
  },
  {
    category: "Other Conditions",
    conditions: [
      { name: "Rosacea", severity: "medium", description: "Chronic facial redness", link: "https://www.nhs.uk/conditions/rosacea/" },
      { name: "Vitiligo", severity: "low", description: "Loss of skin pigmentation", link: "https://www.nhs.uk/conditions/vitiligo/" },
      { name: "Age Spots", severity: "low", description: "Dark spots from sun exposure", link: "https://www.mayoclinic.org/diseases-conditions/age-spots/symptoms-causes/syc-20355859" },
      { name: "Skin Tags", severity: "low", description: "Small, benign growths", link: "https://www.nhs.uk/conditions/skin-tags/" },
    ],
  },
]

export default function ConditionsPage() {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
                <span className="text-teal-600">50+</span> Skin Conditions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                SOLVIA can detect and analyze a wide range of skin conditions using advanced AI technology. Get instant
                insights for better skin health management.
              </p>

              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                      type="text"
                      placeholder="Search conditions..."
                      className="pl-10 py-3 text-lg rounded-full border-2"
                  />
                </div>
                <Button
                    variant="outline"
                    className="px-6 py-3 rounded-full border-2 border-gray-300 hover:border-teal-600"
                >
                  <Filter className="mr-2 h-5 w-5" />
                  Filter
                </Button>
              </div>

              <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-300 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-full"
                  asChild
              >
                <Link href="/demo">Check Your Skin Now</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Conditions Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="space-y-12">
              {conditions.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900">{category.category}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {category.conditions.map((condition, conditionIndex) => (
                          <Card key={conditionIndex} className="hover:shadow-lg transition-shadow">
                            <CardHeader className="pb-3">
                              <div className="flex items-start justify-between">
                                <CardTitle className="text-lg">{condition.name}</CardTitle>
                                <Badge className={getSeverityColor(condition.severity)} variant="outline">
                                  {condition.severity}
                                </Badge>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 text-sm mb-4">{condition.description}</p>
                              <Button
                                  asChild
                                  variant="outline"
                                  size="sm"
                                  className="w-full text-teal-600 border-orange-500 hover:bg-red-500"
                              >
                                <a href={condition.link} target="_blank" rel="noopener noreferrer">
                                  Learn More
                                </a>
                              </Button>
                            </CardContent>
                          </Card>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">Detection Statistics</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI has been trained on millions of images to provide accurate detection across all condition types
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">74.2%</div>
                <div className="text-gray-600">Overall Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">5000+</div>
                <div className="text-gray-600">Images Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-600 mb-2">50+</div>
                <div className="text-gray-600">Conditions Detected</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-500 mb-2">24/7</div>
                <div className="text-gray-600">Availability</div>
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}
