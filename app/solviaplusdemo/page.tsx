"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
    Camera,
    Upload,
    Zap,
    Brain,
    FileText,
    Microscope,
    Activity,
    AlertTriangle,
    CheckCircle,
    Clock,
    Eye,
    Layers,
    Target,
    TrendingUp,
    Users,
    Shield,
} from "lucide-react"

export default function SolviaPlusDemoPage() {
    const [analysisStep, setAnalysisStep] = useState(0)
    const [isAnalyzing, setIsAnalyzing] = useState(false)
    const [uploadedImage, setUploadedImage] = useState<string | null>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const analysisSteps = [
        { name: "Image Processing", progress: 100, icon: <Layers className="h-4 w-4" /> },
        { name: "Lesion Detection", progress: 100, icon: <Target className="h-4 w-4" /> },
        { name: "Feature Extraction", progress: 100, icon: <Brain className="h-4 w-4" /> },
        { name: "AI Classification", progress: 85, icon: <Zap className="h-4 w-4" /> },
        { name: "Risk Assessment", progress: 60, icon: <AlertTriangle className="h-4 w-4" /> },
        { name: "Report Generation", progress: 30, icon: <FileText className="h-4 w-4" /> },
    ]

    const mockResults = {
        primaryDiagnosis: "Seborrheic Keratosis",
        confidence: 94.7,
        riskLevel: "Low",
        recommendations: [
            "Monitor for changes in size, color, or texture",
            "Consider dermatoscopic follow-up in 6 months",
            "Patient education on self-examination techniques",
        ],
        differentialDiagnosis: [
            { condition: "Seborrheic Keratosis", probability: 94.7 },
            { condition: "Solar Lentigo", probability: 3.8 },
            { condition: "Melanoma in situ", probability: 1.2 },
            { condition: "Basal Cell Carcinoma", probability: 0.3 },
        ],
    }

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setUploadedImage(e.target?.result as string)
                startAnalysis()
            }
            reader.readAsDataURL(file)
        }
    }

    const startAnalysis = () => {
        setIsAnalyzing(true)
        setAnalysisStep(0)

        const interval = setInterval(() => {
            setAnalysisStep((prev) => {
                if (prev >= analysisSteps.length - 1) {
                    clearInterval(interval)
                    setIsAnalyzing(false)
                    return prev
                }
                return prev + 1
            })
        }, 800)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="bg-gradient-to-r from-orange-500 to-teal-500 rounded-lg p-2">
                                <Brain className="h-8 w-8 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">SOLVIA+ Enterprise</h1>
                                <p className="text-orange-600">Advanced AI Dermatological Analysis Platform</p>
                            </div>
                        </div>
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2">
                            <Activity className="h-4 w-4 mr-2" />
                            System Online
                        </Badge>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                    {/* Main Analysis Panel */}
                    <div className="xl:col-span-2 space-y-6">
                        {/* Upload Section */}
                        <Card className="bg-white shadow-lg border-0">
                            <CardHeader>
                                <CardTitle className="flex items-center text-2xl text-gray-900">
                                    <Camera className="h-6 w-6 mr-3 text-orange-500" />
                                    Advanced Image Analysis
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Upload Area */}
                                    <div>
                                        <div
                                            className="border-2 border-dashed border-orange-300 rounded-xl p-8 text-center hover:border-orange-400 transition-colors cursor-pointer bg-gradient-to-br from-orange-50 to-teal-50"
                                            onClick={() => fileInputRef.current?.click()}
                                        >
                                            <Upload className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                                            <h3 className="text-lg font-semibold mb-2 text-gray-900">Upload High-Resolution Image</h3>
                                            <p className="text-gray-600 mb-4">Supports DICOM, JPEG, PNG up to 50MP</p>
                                            <Button className="bg-gradient-to-r from-orange-600 to-teal-600 hover:from-orange-700 hover:to-teal-700 text-white">
                                                Select Image
                                            </Button>
                                        </div>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                    </div>

                                    {/* Preview */}
                                    <div>
                                        {uploadedImage ? (
                                            <div className="relative">
                                                <img
                                                    src={uploadedImage || "/placeholder.svg"}
                                                    alt="Uploaded skin lesion"
                                                    className="w-full h-64 object-cover rounded-xl border border-gray-200 shadow-md"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                                                <div className="absolute bottom-4 left-4 right-4">
                                                    <div className="flex items-center justify-between text-white">
                                                        <div>
                                                            <p className="text-sm opacity-90">Resolution</p>
                                                            <p className="font-semibold">2048 x 1536</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-sm opacity-90">Quality</p>
                                                            <p className="font-semibold text-green-300">Excellent</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full h-64 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center">
                                                <div className="text-center text-gray-500">
                                                    <Eye className="h-12 w-12 mx-auto mb-2 opacity-50" />
                                                    <p>Image preview will appear here</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Analysis Progress */}
                        {isAnalyzing && (
                            <Card className="bg-white shadow-lg border-0">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-gray-900">
                                        <Zap className="h-5 w-5 mr-2 text-yellow-500" />
                                        Real-time AI Analysis
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {analysisSteps.map((step, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center space-x-4 p-3 rounded-lg transition-all ${
                                                    index <= analysisStep ? "bg-orange-50 border border-orange-200" : "bg-gray-50"
                                                }`}
                                            >
                                                <div
                                                    className={`p-2 rounded-full ${
                                                        index <= analysisStep ? "bg-orange-500 text-white" : "bg-gray-300 text-gray-600"
                                                    }`}
                                                >
                                                    {step.icon}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="font-medium text-gray-900">{step.name}</span>
                                                        <span className="text-sm text-gray-600">{step.progress}%</span>
                                                    </div>
                                                    <Progress value={index <= analysisStep ? step.progress : 0} className="h-2" />
                                                </div>
                                                {index <= analysisStep && <CheckCircle className="h-5 w-5 text-green-500" />}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}

                        {/* Results */}
                        {!isAnalyzing && uploadedImage && (
                            <Card className="bg-white shadow-lg border-0">
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between text-gray-900">
                                        <div className="flex items-center">
                                            <Microscope className="h-6 w-6 mr-3 text-green-500" />
                                            Analysis Results
                                        </div>
                                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                                            Analysis Complete
                                        </Badge>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Tabs defaultValue="diagnosis" className="w-full">
                                        <TabsList className="grid w-full grid-cols-4 bg-gray-100">
                                            <TabsTrigger value="diagnosis">Diagnosis</TabsTrigger>
                                            <TabsTrigger value="features">Features</TabsTrigger>
                                            <TabsTrigger value="risk">Risk Assessment</TabsTrigger>
                                            <TabsTrigger value="recommendations">Actions</TabsTrigger>
                                        </TabsList>

                                        <TabsContent value="diagnosis" className="mt-6">
                                            <div className="space-y-6">
                                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h3 className="text-2xl font-bold text-green-600">{mockResults.primaryDiagnosis}</h3>
                                                        <div className="text-right">
                                                            <p className="text-sm text-gray-600">Confidence</p>
                                                            <p className="text-3xl font-bold text-green-600">{mockResults.confidence}%</p>
                                                        </div>
                                                    </div>
                                                    <Progress value={mockResults.confidence} className="h-3 mb-4" />
                                                    <p className="text-gray-700">
                                                        High confidence diagnosis based on morphological features, color patterns, and texture
                                                        analysis.
                                                    </p>
                                                </div>

                                                <div>
                                                    <h4 className="text-lg font-semibold mb-4 text-gray-900">Differential Diagnosis</h4>
                                                    <div className="space-y-3">
                                                        {mockResults.differentialDiagnosis.map((diagnosis, index) => (
                                                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                                <span className="text-gray-900">{diagnosis.condition}</span>
                                                                <div className="flex items-center space-x-3">
                                                                    <Progress value={diagnosis.probability} className="w-24 h-2" />
                                                                    <span className="text-sm font-medium w-12 text-gray-700">
                                    {diagnosis.probability}%
                                  </span>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="features" className="mt-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="space-y-4">
                                                    <h4 className="text-lg font-semibold text-gray-900">Morphological Features</h4>
                                                    <div className="space-y-3">
                                                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                                            <span className="text-gray-700">Asymmetry Score</span>
                                                            <span className="text-green-600 font-medium">Low (0.23)</span>
                                                        </div>
                                                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                                            <span className="text-gray-700">Border Irregularity</span>
                                                            <span className="text-yellow-600 font-medium">Moderate (0.45)</span>
                                                        </div>
                                                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                                            <span className="text-gray-700">Color Variation</span>
                                                            <span className="text-green-600 font-medium">Low (0.31)</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <h4 className="text-lg font-semibold text-gray-900">Texture Analysis</h4>
                                                    <div className="space-y-3">
                                                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                                            <span className="text-gray-700">Surface Texture</span>
                                                            <span className="text-blue-600 font-medium">Rough</span>
                                                        </div>
                                                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                                            <span className="text-gray-700">Pigment Network</span>
                                                            <span className="text-green-600 font-medium">Absent</span>
                                                        </div>
                                                        <div className="flex justify-between p-3 bg-gray-50 rounded-lg">
                                                            <span className="text-gray-700">Vascular Pattern</span>
                                                            <span className="text-yellow-600 font-medium">Minimal</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="risk" className="mt-6">
                                            <div className="space-y-6">
                                                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
                                                    <div className="flex items-center justify-between mb-4">
                                                        <h3 className="text-xl font-bold text-gray-900">Overall Risk Level</h3>
                                                        <Badge className="bg-green-500 text-white px-4 py-2 text-lg">{mockResults.riskLevel}</Badge>
                                                    </div>
                                                    <p className="text-gray-700 mb-4">
                                                        Based on AI analysis of morphological features, this lesion presents a low risk for
                                                        malignancy.
                                                    </p>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        <div className="text-center p-3 bg-white rounded-lg shadow-sm border">
                                                            <p className="text-2xl font-bold text-green-600">2%</p>
                                                            <p className="text-sm text-gray-600">Malignancy Risk</p>
                                                        </div>
                                                        <div className="text-center p-3 bg-white rounded-lg shadow-sm border">
                                                            <p className="text-2xl font-bold text-blue-600">6mo</p>
                                                            <p className="text-sm text-gray-600">Follow-up</p>
                                                        </div>
                                                        <div className="text-center p-3 bg-white rounded-lg shadow-sm border">
                                                            <p className="text-2xl font-bold text-orange-600">A</p>
                                                            <p className="text-sm text-gray-600">Priority Level</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </TabsContent>

                                        <TabsContent value="recommendations" className="mt-6">
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-gray-900">Clinical Recommendations</h4>
                                                {mockResults.recommendations.map((rec, index) => (
                                                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                                                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span className="text-gray-700">{rec}</span>
                                                    </div>
                                                ))}

                                                <div className="mt-6 flex space-x-4">
                                                    <Button className="bg-gradient-to-r from-orange-600 to-teal-600 hover:from-orange-700 hover:to-teal-700 text-white">
                                                        <FileText className="h-4 w-4 mr-2" />
                                                        Generate Report
                                                    </Button>
                                                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                                                        <Users className="h-4 w-4 mr-2" />
                                                        Share with Team
                                                    </Button>
                                                </div>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* System Status */}
                        <Card className="bg-white shadow-lg border-0">
                            <CardHeader>
                                <CardTitle className="flex items-center text-lg text-gray-900">
                                    <Shield className="h-5 w-5 mr-2 text-green-500" />
                                    System Status
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">AI Model Version</span>
                                    <Badge className="bg-orange-500 text-white">v3.2.1</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Processing Speed</span>
                                    <span className="text-green-600 font-medium">2.3s avg</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Accuracy Rate</span>
                                    <span className="text-green-600 font-medium">99.2%</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-600">Uptime</span>
                                    <span className="text-green-600 font-medium">99.9%</span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Activity */}
                        <Card className="bg-white shadow-lg border-0">
                            <CardHeader>
                                <CardTitle className="flex items-center text-lg text-gray-900">
                                    <Clock className="h-5 w-5 mr-2 text-blue-500" />
                                    Recent Analyses
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                {[
                                    { time: "2 min ago", diagnosis: "Melanocytic Nevus", confidence: 96.8 },
                                    { time: "15 min ago", diagnosis: "Basal Cell Carcinoma", confidence: 89.2 },
                                    { time: "1 hour ago", diagnosis: "Seborrheic Keratosis", confidence: 94.1 },
                                    { time: "2 hours ago", diagnosis: "Solar Lentigo", confidence: 91.7 },
                                ].map((item, index) => (
                                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-sm font-medium text-gray-900">{item.diagnosis}</span>
                                            <span className="text-xs text-gray-500">{item.time}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Progress value={item.confidence} className="flex-1 h-1" />
                                            <span className="text-xs text-green-600">{item.confidence}%</span>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Performance Metrics */}
                        <Card className="bg-white shadow-lg border-0">
                            <CardHeader>
                                <CardTitle className="flex items-center text-lg text-gray-900">
                                    <TrendingUp className="h-5 w-5 mr-2 text-orange-500" />
                                    Today's Metrics
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg border border-blue-200">
                                    <p className="text-3xl font-bold text-blue-600">247</p>
                                    <p className="text-sm text-gray-600">Analyses Completed</p>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                        <p className="text-xl font-bold text-green-600">94.2%</p>
                                        <p className="text-xs text-gray-600">Avg Confidence</p>
                                    </div>
                                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                                        <p className="text-xl font-bold text-orange-600">1.8s</p>
                                        <p className="text-xs text-gray-600">Avg Time</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
