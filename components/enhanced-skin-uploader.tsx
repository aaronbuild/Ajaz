"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, Camera, X, Loader2, FileText, AlertTriangle, ExternalLink, Brain, Eye, Microscope } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AnalysisResult {
  condition: string
  risk: "low" | "medium" | "high"
  confidence: number
  reasoning: {
    visualFeatures: string[]
    riskFactors: string[]
    aiAnalysis: string
    recommendations: string[]
  }
  falsePositiveWarning?: string
  consultationLinks: {
    name: string
    url: string
    type: "insurance" | "telehealth" | "clinic"
  }[]
}

export default function EnhancedSkinUploader() {
  const [image, setImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setImage(e.target.result as string)
          setResult(null)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = async () => {
    if (!image) return

    setIsAnalyzing(true)

    // Simulate AI analysis with detailed reasoning
    setTimeout(() => {
      setIsAnalyzing(false)
      setResult({
        condition: "Melanocytic Nevus (Common Mole)",
        risk: "low",
        confidence: 92.7,
        reasoning: {
          visualFeatures: [
            "Symmetrical shape with regular borders",
            "Uniform brown coloration",
            "Diameter approximately 4mm",
            "Smooth surface texture",
            "No irregular pigmentation patterns",
          ],
          riskFactors: [
            "Size within normal range (<6mm)",
            "No asymmetry detected",
            "Borders appear well-defined",
            "Color distribution is even",
            "No recent changes reported",
          ],
          aiAnalysis:
            "The AI model analyzed 847 visual features using deep learning algorithms trained on over 2.3 million dermatological images. The lesion exhibits characteristics consistent with a benign melanocytic nevus. Key indicators include symmetrical morphology, uniform pigmentation, and well-defined borders. No malignant features such as asymmetry, border irregularity, color variation, or concerning diameter were detected.",
          recommendations: [
            "Continue routine self-examination monthly",
            "Monitor for any changes in size, shape, or color",
            "Use broad-spectrum sunscreen daily",
            "Schedule annual dermatological check-up",
            "Take photos for comparison tracking",
          ],
        },
        falsePositiveWarning:
          "AI analysis is for screening purposes only. This assessment has a 7.3% chance of false positive. Always consult a dermatologist for definitive diagnosis.",
        consultationLinks: [
          {
            name: "Kaiser Permanente Dermatology",
            url: "https://healthy.kaiserpermanente.org/northern-california/health-wellness/dermatology",
            type: "insurance",
          },
          {
            name: "UCSF Dermatology Clinic",
            url: "https://www.ucsfhealth.org/clinics/dermatology",
            type: "clinic",
          },
          {
            name: "Teladoc Dermatology",
            url: "https://www.teladoc.com/dermatology/",
            type: "telehealth",
          },
          {
            name: "MDLive Dermatology",
            url: "https://www.mdlive.com/dermatology",
            type: "telehealth",
          },
        ],
      })
    }, 3000)
  }

  const handleReset = () => {
    setImage(null)
    setResult(null)
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "low":
        return "text-green-600 bg-green-50 border-green-200"
      case "medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200"
      case "high":
        return "text-red-600 bg-red-50 border-red-200"
      default:
        return "text-gray-600 bg-gray-50 border-gray-200"
    }
  }

  const getConsultationIcon = (type: string) => {
    switch (type) {
      case "insurance":
        return "🏥"
      case "telehealth":
        return "💻"
      case "clinic":
        return "🏢"
      default:
        return "🩺"
    }
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-dashed border-gray-200 hover:border-teal-300 transition-colors">
        <CardContent className="p-6">
          {!image ? (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="bg-teal-100 rounded-full p-4 mb-4">
                <Upload className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Upload a skin photo</h3>
              <p className="text-gray-500 text-center mb-6 max-w-xs">
                Take a clear, well-lit photo of the skin area you're concerned about
              </p>
              <div className="flex gap-4">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  <label className="cursor-pointer flex items-center">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Image
                    <input type="file" className="hidden" accept="image/*" onChange={handleUpload} />
                  </label>
                </Button>
                <Button variant="outline">
                  <Camera className="mr-2 h-4 w-4" />
                  Take Photo
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative">
                <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg">
                  <Image src={image || "/placeholder.svg"} alt="Uploaded skin image" fill className="object-cover" />
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  onClick={handleReset}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {!result && !isAnalyzing && (
                <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={handleAnalyze}>
                  Analyze with AI
                </Button>
              )}

              {isAnalyzing && (
                <div className="flex flex-col items-center py-8">
                  <Loader2 className="h-8 w-8 text-teal-600 animate-spin mb-4" />
                  <p className="text-gray-600 mb-2">Analyzing your image...</p>
                  <p className="text-sm text-gray-500">Processing 847 visual features</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {result && (
        <div className="space-y-6">
          {/* Main Results */}
          <Card className="border-teal-200 bg-teal-50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-medium text-gray-800">Analysis Results</h3>
                <Badge className={cn("px-3 py-1 rounded-full text-sm font-medium", getRiskColor(result.risk))}>
                  {result.risk.charAt(0).toUpperCase() + result.risk.slice(1)} Risk
                </Badge>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Detected Condition</p>
                  <p className="font-medium text-gray-900">{result.condition}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">AI Confidence</p>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                      <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: `${result.confidence}%` }}></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{result.confidence}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Analysis */}
          <Card>
            <CardContent className="p-6">
              <h4 className="text-lg font-medium mb-4 flex items-center">
                <Brain className="h-5 w-5 text-purple-600 mr-2" />
                AI Analysis Breakdown
              </h4>

              <div className="space-y-6">
                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <Eye className="h-4 w-4 text-blue-600 mr-2" />
                    Visual Features Detected
                  </h5>
                  <ul className="space-y-1">
                    {result.reasoning.visualFeatures.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <Microscope className="h-4 w-4 text-teal-600 mr-2" />
                    Risk Assessment Factors
                  </h5>
                  <ul className="space-y-1">
                    {result.reasoning.riskFactors.map((factor, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Detailed AI Analysis</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">{result.reasoning.aiAnalysis}</p>
                </div>

                <div>
                  <h5 className="font-medium mb-2">Recommendations</h5>
                  <ul className="space-y-1">
                    {result.reasoning.recommendations.map((rec, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* False Positive Warning */}
          {result.falsePositiveWarning && (
            <Card className="border-yellow-200 bg-yellow-50">
              <CardContent className="p-4">
                <div className="flex items-start">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
                  <div>
                    <h5 className="font-medium text-yellow-800 mb-1">Important Notice</h5>
                    <p className="text-sm text-yellow-700">{result.falsePositiveWarning}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Consultation Links */}
          <Card>
            <CardContent className="p-6">
              <h4 className="text-lg font-medium mb-4">Consult a Doctor</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.consultationLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-2xl mr-3">{getConsultationIcon(link.type)}</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{link.name}</p>
                      <p className="text-sm text-gray-500 capitalize">{link.type}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Download Report */}
          <div className="pt-2">
            <Button className="w-full bg-teal-600 hover:bg-teal-700">
              <FileText className="mr-2 h-4 w-4" />
              Download Detailed PDF Report
            </Button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <h3 className="font-medium text-gray-800">Tips for better results:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Take photos in good lighting</li>
          <li>• Keep the camera steady and focused</li>
          <li>• Include only the affected skin area</li>
          <li>• Take multiple angles if possible</li>
        </ul>
      </div>
    </div>
  )
}
