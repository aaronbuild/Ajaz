"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, FileText, Bot, ImageIcon, MessageSquare } from "lucide-react"
import SkinAnalysisChat from "@/components/skin-analysis-chat"
import SkinUploader from "@/components/skin-uploader"

export default function DemoPage() {
  const [activeTab, setActiveTab] = useState("analysis")

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-cyan-600 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Check your skin with SOLVIA</h1>
              <p className="text-xl text-white/90 mb-8">
                Our AI-powered tool analyzes skin conditions and provides instant feedback to help you understand your
                skin health.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-teal-600 hover:bg-white/90"
                  onClick={() => setActiveTab("analysis")}
                >
                  Try Skin Analysis
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                  onClick={() => setActiveTab("chat")}
                >
                  Chat with SOLVIA
                </Button>
              </div>
            </div>
            <div className="relative w-full max-w-md">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Camera className="h-8 w-8 text-white" />,
                      title: "Take a photo",
                      description: "Capture your skin concern",
                    },
                    {
                      icon: <ImageIcon className="h-8 w-8 text-white" />,
                      title: "AI Analysis",
                      description: "Get instant feedback",
                    },
                    {
                      icon: <FileText className="h-8 w-8 text-white" />,
                      title: "PDF Report",
                      description: "Detailed assessment",
                    },
                    {
                      icon: <Bot className="h-8 w-8 text-white" />,
                      title: "AI Consultant",
                      description: "Explains your results",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center text-center p-3">
                      <div className="bg-white/20 rounded-full p-3 mb-3">{item.icon}</div>
                      <h3 className="font-medium text-white">{item.title}</h3>
                      <p className="text-xs text-white/80">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 container mx-auto px-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="analysis" className="text-base">
              Skin Analysis
            </TabsTrigger>
            <TabsTrigger value="chat" className="text-base">
              Chat with SOLVIA
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analysis" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Analyze Your Skin</h2>
                <p className="text-gray-600 mb-6">
                  Upload a photo of your skin concern and our AI will analyze it instantly. Get a detailed assessment
                  and recommendations.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-medium text-gray-800 mb-4">How It Works</h3>

                  <div className="space-y-6">
                    {[
                      {
                        step: "Step 1",
                        title: "Take a photo of a skin problem",
                        icon: <Camera className="h-6 w-6 text-teal-500" />,
                        description: "Use your phone or upload an existing photo",
                      },
                      {
                        step: "Step 2",
                        title: "AI instantly analyzes your photo",
                        icon: <ImageIcon className="h-6 w-6 text-teal-500" />,
                        description: "Our advanced AI examines visual patterns",
                      },
                      {
                        step: "Step 3",
                        title: "Get a personalized PDF report",
                        icon: <FileText className="h-6 w-6 text-teal-500" />,
                        description: "Detailed assessment of your skin condition",
                      },
                      {
                        step: "Step 4",
                        title: "AI Consultant explains your result",
                        icon: <Bot className="h-6 w-6 text-teal-500" />,
                        description: "Get answers to your questions about the results",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start">
                        <div className="bg-teal-100 rounded-full p-3 mr-4">{item.icon}</div>
                        <div>
                          <div className="text-xs font-medium text-teal-600 mb-1">{item.step}</div>
                          <h4 className="font-medium text-gray-800">{item.title}</h4>
                          <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-xs text-gray-500">
                    * The scan result is not a diagnosis. To obtain an accurate diagnosis and a recommendation for
                    treatment - consult your doctor.
                  </div>
                </div>
              </div>

              <div>
                <SkinUploader />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="chat" className="mt-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Chat with SOLVIA</h2>
                <p className="text-gray-600 mb-6">
                  Have questions about skin conditions? Our AI assistant can help provide information and guidance.
                </p>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-medium text-gray-800 mb-4">What you can ask:</h3>

                    <div className="space-y-3">
                      {[
                        "Information about common skin conditions",
                        "Understanding skin cancer risk factors",
                        "General skincare recommendations",
                        "Explanation of dermatological terms",
                        "Questions about your analysis results",
                      ].map((item, i) => (
                        <div key={i} className="flex items-center">
                          <div className="bg-teal-100 rounded-full p-1 mr-3">
                            <MessageSquare className="h-4 w-4 text-teal-600" />
                          </div>
                          <p className="text-sm text-gray-600">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-xs text-gray-500">
                      * SOLVIA provides information, not medical advice. Always consult healthcare professionals for
                      diagnosis and treatment.
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <SkinAnalysisChat />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose SOLVIA</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced AI Technology",
                description:
                  "Powered by state-of-the-art computer vision and deep learning models trained on extensive dermatological datasets.",
                icon: (
                  <div className="bg-teal-100 p-3 rounded-full">
                    <ImageIcon className="h-6 w-6 text-teal-600" />
                  </div>
                ),
              },
              {
                title: "Quick & Convenient",
                description:
                  "Get instant analysis of your skin concerns from the comfort of your home, without waiting for appointments.",
                icon: (
                  <div className="bg-cyan-100 p-3 rounded-full">
                    <Camera className="h-6 w-6 text-cyan-600" />
                  </div>
                ),
              },
              {
                title: "Privacy Focused",
                description:
                  "Your data is processed securely. We prioritize your privacy and adhere to strict data protection standards.",
                icon: (
                  <div className="bg-teal-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-teal-600" />
                  </div>
                ),
              },
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Users Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "SOLVIA helped me identify a concerning mole that turned out to be early-stage melanoma. Early detection saved my life.",
              author: "Sarah T.",
              role: "Skin Cancer Survivor",
            },
            {
              quote:
                "As a dermatologist, I'm impressed with SOLVIA's accuracy. It's a valuable tool for preliminary assessments and patient education.",
              author: "Dr. Michael Chen",
              role: "Board Certified Dermatologist",
            },
            {
              quote:
                "Living in a rural area, specialist care is hours away. SOLVIA gives me peace of mind about skin changes between doctor visits.",
              author: "Robert J.",
              role: "Rural Community Member",
            },
          ].map((testimonial, i) => (
            <Card key={i} className="bg-gradient-to-br from-teal-50 to-cyan-50 border-none">
              <CardContent className="p-6">
                <div className="text-teal-600 mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10 11L8 17H5L7 11H4V5H11V11H10ZM20 11L18 17H15L17 11H14V5H21V11H20Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-500 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to check your skin?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get instant AI-powered analysis and take a proactive approach to your skin health.
          </p>
          <Button
            size="lg"
            className="bg-white text-teal-600 hover:bg-white/90"
            onClick={() => setActiveTab("analysis")}
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  )
}
