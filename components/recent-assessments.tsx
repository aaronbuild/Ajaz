"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Filter } from "lucide-react"

type Assessment = {
  id: string
  patientId: string
  date: string
  assessmentType: string
  skinCancerRisk: number
  autoimmuneDiseaseRisk: number
  adverseDrugReactionRisk: number
  status: "high" | "medium" | "low"
}

export default function RecentAssessments() {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const assessments: Assessment[] = [
    {
      id: "A-1234",
      patientId: "P-5678",
      date: "2025-04-24",
      assessmentType: "Comprehensive",
      skinCancerRisk: 0.82,
      autoimmuneDiseaseRisk: 0.35,
      adverseDrugReactionRisk: 0.12,
      status: "high",
    },
    {
      id: "A-1235",
      patientId: "P-5679",
      date: "2025-04-23",
      assessmentType: "Skin Only",
      skinCancerRisk: 0.21,
      autoimmuneDiseaseRisk: 0.15,
      adverseDrugReactionRisk: 0.08,
      status: "low",
    },
    {
      id: "A-1236",
      patientId: "P-5680",
      date: "2025-04-23",
      assessmentType: "Comprehensive",
      skinCancerRisk: 0.45,
      autoimmuneDiseaseRisk: 0.68,
      adverseDrugReactionRisk: 0.22,
      status: "medium",
    },
    {
      id: "A-1237",
      patientId: "P-5681",
      date: "2025-04-22",
      assessmentType: "Drug Reaction",
      skinCancerRisk: 0.05,
      autoimmuneDiseaseRisk: 0.12,
      adverseDrugReactionRisk: 0.75,
      status: "high",
    },
    {
      id: "A-1238",
      patientId: "P-5682",
      date: "2025-04-22",
      assessmentType: "Comprehensive",
      skinCancerRisk: 0.18,
      autoimmuneDiseaseRisk: 0.25,
      adverseDrugReactionRisk: 0.15,
      status: "low",
    },
  ]

  const sortedAssessments = [...assessments].sort((a, b) => {
    const dateA = new Date(a.date).getTime()
    const dateB = new Date(b.date).getTime()
    return sortDirection === "asc" ? dateA - dateB : dateB - dateA
  })

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
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
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Recent Assessments</CardTitle>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="h-8 gap-1" onClick={toggleSortDirection}>
            {sortDirection === "asc" ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            Date
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-sm">Assessment ID</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Patient ID</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Date</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Type</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Skin Cancer Risk</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Autoimmune Risk</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Drug Reaction Risk</th>
                <th className="text-left py-3 px-4 font-medium text-sm">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedAssessments.map((assessment) => (
                <tr key={assessment.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">{assessment.id}</td>
                  <td className="py-3 px-4">{assessment.patientId}</td>
                  <td className="py-3 px-4">{assessment.date}</td>
                  <td className="py-3 px-4">{assessment.assessmentType}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: `${assessment.skinCancerRisk * 100}%` }}
                        ></div>
                      </div>
                      <span>{(assessment.skinCancerRisk * 100).toFixed(0)}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-purple-500 h-2 rounded-full"
                          style={{ width: `${assessment.autoimmuneDiseaseRisk * 100}%` }}
                        ></div>
                      </div>
                      <span>{(assessment.autoimmuneDiseaseRisk * 100).toFixed(0)}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full"
                          style={{ width: `${assessment.adverseDrugReactionRisk * 100}%` }}
                        ></div>
                      </div>
                      <span>{(assessment.adverseDrugReactionRisk * 100).toFixed(0)}%</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <Badge className={`${getStatusColor(assessment.status)}`}>
                      {assessment.status.charAt(0).toUpperCase() + assessment.status.slice(1)}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
