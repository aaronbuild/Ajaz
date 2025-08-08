"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Camera, X, Loader2, FileText } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function SkinUploader() {
  const [image, setImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<null | {
    condition: string
    risk: "low" | "medium" | "high"
    confidence: number
  }>(null)

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

  const handleAnalyze = () => {
    if (!image) return

    setIsAnalyzing(true)

    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false)
      setResult({
        condition: "Melanocytic Nevus",
        risk: "low",
        confidence: 92.7,
      })
    }, 2000)
  }

  const handleReset = () => {
    setImage(null)
    setResult(null)
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
                  Analyze Image
                </Button>
              )}

              {isAnalyzing && (
                <div className="flex flex-col items-center py-4">
                  <Loader2 className="h-8 w-8 text-teal-600 animate-spin mb-2" />
                  <p className="text-gray-600">Analyzing your image...</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {result && (
        <Card className="border-teal-200 bg-teal-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-medium text-gray-800">Analysis Results</h3>
              <div
                className={cn(
                  "px-3 py-1 rounded-full text-sm font-medium",
                  result.risk === "low"
                    ? "bg-green-100 text-green-800"
                    : result.risk === "medium"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800",
                )}
              >
                {result.risk.charAt(0).toUpperCase() + result.risk.slice(1)} Risk
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Detected Condition</p>
                <p className="font-medium text-gray-900">{result.condition}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Confidence</p>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: `${result.confidence}%` }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{result.confidence}%</span>
                </div>
              </div>

              <div className="pt-2">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <FileText className="mr-2 h-4 w-4" />
                  Download PDF Report
                </Button>
              </div>

              <div className="text-xs text-gray-500 pt-2">
                * This is not a medical diagnosis. Please consult with a healthcare professional for proper evaluation.
              </div>
            </div>
          </CardContent>
        </Card>
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
