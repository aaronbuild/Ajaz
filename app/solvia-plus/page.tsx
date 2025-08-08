"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Brain, Clock, Shield, Star, Zap } from "lucide-react"
import SkinAnalysisChat from "@/components/skin-analysis-chat"

export default function SolviaPlusPage() {
  const [hasUploadedContent, setHasUploadedContent] = useState(false)
  const [analysisHistory] = useState([
    {
      date: "2024-12-15",
      condition: "Melanocytic Nevus",
      risk: "Low",
      confidence: 92.7,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      date: "2024-12-10",
      condition: "Seborrheic Keratosis",
      risk: "Low",
      confidence: 88.3,
      image: "/placeholder.svg?height=100&width=100",
    },
  ])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-purple-100 text-purple-800 mb-4" variant="outline">
              Premium AI Assistant
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              SOLVIA<span className="text-purple-600">+</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your intelligent skin health companion with memory-based analysis, personalized insights, and continuous
              learning from your scan history.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg rounded-full"
              >
                Start Conversation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg rounded-full"
              >
                View Features
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">SOLVIA+ Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 rounded-lg p-3 w-fit mb-3">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Memory-Based Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  SOLVIA+ remembers your previous scans and provides personalized insights based on your skin health
                  history and patterns.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 rounded-lg p-3 w-fit mb-3">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Intelligent Conversations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ask detailed questions about your skin conditions and get contextual answers based on your specific
                  analysis results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-green-100 rounded-lg p-3 w-fit mb-3">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Progress Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monitor changes over time with intelligent tracking that identifies improvements or concerns in your
                  skin health.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 rounded-lg p-3 w-fit mb-3">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Instant Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get immediate explanations about your scan results, risk factors, and personalized recommendations for
                  skin care.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-teal-100 rounded-lg p-3 w-fit mb-3">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Privacy First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your conversation history and analysis data are encrypted and stored securely with full privacy
                  protection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-yellow-100 rounded-lg p-3 w-fit mb-3">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Premium Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access to priority support and advanced features for comprehensive skin health management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Analysis History Sidebar */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-600" />
                    Your Analysis History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {analysisHistory.length > 0 ? (
                    <div className="space-y-4">
                      {analysisHistory.map((analysis, index) => (
                        <div key={index} className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <img
                              src={analysis.image || "/placeholder.svg"}
                              alt="Analysis"
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                            <div className="flex-1">
                              <p className="font-medium text-sm">{analysis.condition}</p>
                              <p className="text-xs text-gray-500">{analysis.date}</p>
                              <Badge
                                variant="outline"
                                className={`text-xs ${
                                  analysis.risk === "Low"
                                    ? "text-green-600 border-green-200"
                                    : analysis.risk === "Medium"
                                      ? "text-yellow-600 border-yellow-200"
                                      : "text-red-600 border-red-200"
                                }`}
                              >
                                {analysis.risk} Risk
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">No analysis history yet</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-purple-600 border-purple-200 hover:bg-purple-50"
                      >
                        Take Your First Scan
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <SkinAnalysisChat />
            </div>
          </div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Upgrade to SOLVIA+ Today</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get personalized AI insights, memory-based analysis, and premium features for comprehensive skin health
              management.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-12 py-4 text-lg rounded-full"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg rounded-full"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
