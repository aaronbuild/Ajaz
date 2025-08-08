"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Users,
  Activity,
  FileText,
  MessageSquare,
  Camera,
  Brain,
  Stethoscope,
  BarChart3,
  Search,
  Filter,
  Download,
  Phone,
  AlertCircle,
  Microscope,
  BookOpen,
} from "lucide-react"
import EnhancedSkinUploader from "@/components/enhanced-skin-uploader"
import SkinAnalysisChat from "@/components/skin-analysis-chat"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedPatient, setSelectedPatient] = useState(null)

  // Mock data for dashboard
  const dashboardStats = [
    { title: "Total Patients", value: "1,247", change: "+12%", icon: Users, color: "text-blue-600" },
    { title: "Scans Today", value: "89", change: "+8%", icon: Camera, color: "text-green-600" },
    { title: "High Risk Cases", value: "23", change: "-5%", icon: AlertCircle, color: "text-red-600" },
    { title: "Consultations", value: "156", change: "+15%", icon: Stethoscope, color: "text-purple-600" },
  ]

  const recentPatients = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 34,
      lastScan: "2024-12-19",
      condition: "Melanocytic Nevus",
      risk: "Low",
      status: "Reviewed",
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 45,
      lastScan: "2024-12-19",
      condition: "Seborrheic Keratosis",
      risk: "Low",
      status: "Pending",
    },
    {
      id: 3,
      name: "Emily Davis",
      age: 28,
      lastScan: "2024-12-18",
      condition: "Atypical Mole",
      risk: "Medium",
      status: "Follow-up",
    },
    {
      id: 4,
      name: "Robert Wilson",
      age: 52,
      lastScan: "2024-12-18",
      condition: "Basal Cell Carcinoma",
      risk: "High",
      status: "Urgent",
    },
  ]

  const medicalResources = [
    {
      title: "Melanoma Detection Guidelines",
      type: "Clinical Paper",
      source: "Journal of Dermatology",
      date: "2024",
      relevance: "High",
    },
    {
      title: "AI in Dermatological Diagnosis",
      type: "Research Study",
      source: "Nature Medicine",
      date: "2024",
      relevance: "High",
    },
    {
      title: "Skin Cancer Screening Protocols",
      type: "Medical Guidelines",
      source: "AAD Guidelines",
      date: "2024",
      relevance: "Medium",
    },
  ]

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
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

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "reviewed":
        return "text-green-600 bg-green-50"
      case "pending":
        return "text-yellow-600 bg-yellow-50"
      case "follow-up":
        return "text-blue-600 bg-blue-50"
      case "urgent":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Clinician Hub Dashboard</h1>
              <p className="text-gray-600">Comprehensive AI-powered skin analysis platform</p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-teal-200 text-teal-600 hover:bg-teal-50"
                onClick={() => setActiveTab("demo")}
              >
                Demo Access
              </Button>
              <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white">
                SOLVIA Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-6 w-full max-w-4xl mx-auto mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="analysis">AI Analysis</TabsTrigger>
            <TabsTrigger value="chat">AI Chat</TabsTrigger>
            <TabsTrigger value="research">Research</TabsTrigger>
            <TabsTrigger value="demo">Demo</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        <p className={`text-sm ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                          {stat.change} from last month
                        </p>
                      </div>
                      <div className={`p-3 rounded-full bg-gray-50`}>
                        <stat.icon className={`h-6 w-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5 text-blue-600" />
                    Recent Patient Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentPatients.slice(0, 4).map((patient) => (
                      <div key={patient.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{patient.name}</p>
                          <p className="text-sm text-gray-500">{patient.condition}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getRiskColor(patient.risk)} variant="outline">
                            {patient.risk}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{patient.lastScan}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                    Analytics Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Detection Accuracy</span>
                      <span className="font-medium">96.7%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Early Detection Rate</span>
                      <span className="font-medium">89.2%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Patient Satisfaction</span>
                      <span className="font-medium">4.8/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Response Time</span>
                      <span className="font-medium">&lt;&nbsp;2&nbsp;min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Patients Tab */}
          <TabsContent value="patients" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Patient Management</h2>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search patients..." className="pl-10 w-64" />
                </div>
                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Patient
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Last Scan
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Condition
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Risk Level
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentPatients.map((patient) => (
                        <tr key={patient.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">{patient.name}</div>
                              <div className="text-sm text-gray-500">Age: {patient.age}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{patient.lastScan}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{patient.condition}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={getRiskColor(patient.risk)} variant="outline">
                              {patient.risk}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <Badge className={getStatusColor(patient.status)} variant="outline">
                              {patient.status}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="outline">
                                <MessageSquare className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <Phone className="h-4 w-4" />
                              </Button>
                              <Button size="sm" variant="outline">
                                <FileText className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Analysis Tab */}
          <TabsContent value="analysis" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Camera className="h-5 w-5 text-teal-600" />
                    AI Skin Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <EnhancedSkinUploader />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-purple-600" />
                    Medical AI Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">Google Gemma Medical LLM</h4>
                      <p className="text-sm text-blue-700">
                        Advanced medical language model providing detailed analysis of dermatological conditions with
                        clinical context and treatment recommendations.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">Biomedical Literature Integration</h4>
                      <p className="text-sm text-green-700">
                        Real-time access to latest research papers and clinical guidelines for evidence-based analysis.
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-2">Clinical Decision Support</h4>
                      <p className="text-sm text-purple-700">
                        AI-powered recommendations based on patient history, symptoms, and current medical standards.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* AI Chat Tab */}
          <TabsContent value="chat" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                      Patient Communications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentPatients.slice(0, 3).map((patient) => (
                        <div
                          key={patient.id}
                          className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                          onClick={() => setSelectedPatient(patient)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-sm">{patient.name}</p>
                              <p className="text-xs text-gray-500">Last message: 2h ago</p>
                            </div>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2">
                <SkinAnalysisChat />
              </div>
            </div>
          </TabsContent>

          {/* Research Tab */}
          <TabsContent value="research" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-green-600" />
                    Medical Literature
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {medicalResources.map((resource, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 mb-1">{resource.title}</h4>
                            <p className="text-sm text-gray-600 mb-2">
                              {resource.type} • {resource.source} • {resource.date}
                            </p>
                            <Badge
                              variant="outline"
                              className={
                                resource.relevance === "High"
                                  ? "text-green-600 border-green-200"
                                  : "text-yellow-600 border-yellow-200"
                              }
                            >
                              {resource.relevance} Relevance
                            </Badge>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Microscope className="h-5 w-5 text-purple-600" />
                    Clinical Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2">ABCDE Rule for Melanoma</h4>
                      <p className="text-sm text-blue-700">
                        Asymmetry, Border irregularity, Color variation, Diameter &gt;6&nbsp;mm, Evolving
                        characteristics
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900 mb-2">Dermoscopy Guidelines</h4>
                      <p className="text-sm text-green-700">
                        Pattern analysis, color assessment, and structural evaluation protocols
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-medium text-purple-900 mb-2">Biopsy Recommendations</h4>
                      <p className="text-sm text-purple-700">
                        When to recommend biopsy based on AI analysis and clinical presentation
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Demo Tab */}
          <TabsContent value="demo" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="h-5 w-5 text-teal-600" />
                  SOLVIA Demo - AI Skin Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Try the AI Scanner</h3>
                    <EnhancedSkinUploader />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">AI Chat Assistant</h3>
                    <SkinAnalysisChat />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
