"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts"
import { TrendingUp, Users, Activity, CheckCircle, Clock } from "lucide-react"

const monthlyData = [
  { month: "Jan", scans: 12500, accuracy: 94.2 },
  { month: "Feb", scans: 15200, accuracy: 94.8 },
  { month: "Mar", scans: 18900, accuracy: 95.1 },
  { month: "Apr", scans: 22100, accuracy: 95.3 },
  { month: "May", scans: 25800, accuracy: 95.7 },
  { month: "Jun", scans: 28400, accuracy: 96.0 },
]

const conditionData = [
  { name: "Acne", value: 35, color: "#FF6B6B" },
  { name: "Eczema", value: 25, color: "#4ECDC4" },
  { name: "Psoriasis", value: 15, color: "#45B7D1" },
  { name: "Skin Cancer", value: 10, color: "#FFA07A" },
  { name: "Rosacea", value: 8, color: "#98D8C8" },
  { name: "Other", value: 7, color: "#F7DC6F" },
]

const riskLevels = [
  { level: "Low Risk", count: 15420, percentage: 68.2, color: "text-green-600" },
  { level: "Medium Risk", count: 5890, percentage: 26.1, color: "text-yellow-600" },
  { level: "High Risk", count: 1290, percentage: 5.7, color: "text-red-600" },
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
              <p className="text-xl text-gray-600">
                Real-time insights into skin health analysis and detection statistics
              </p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Button variant="outline" className="rounded-full">
                Export Report
              </Button>
              <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-full">
                Live Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Scans</p>
                    <p className="text-3xl font-bold text-gray-900">2.3M+</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +12.5% from last month
                    </p>
                  </div>
                  <div className="bg-blue-100 rounded-full p-3">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Users</p>
                    <p className="text-3xl font-bold text-gray-900">500K+</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +8.2% from last month
                    </p>
                  </div>
                  <div className="bg-teal-100 rounded-full p-3">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Accuracy Rate</p>
                    <p className="text-3xl font-bold text-gray-900">96.0%</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      +1.8% from last month
                    </p>
                  </div>
                  <div className="bg-green-100 rounded-full p-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
                    <p className="text-3xl font-bold text-gray-900">1.2s</p>
                    <p className="text-sm text-green-600 flex items-center mt-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      -0.3s from last month
                    </p>
                  </div>
                  <div className="bg-orange-100 rounded-full p-3">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Monthly Scans Chart */}
            <Card>
              <CardHeader>
                <CardTitle>Monthly Scan Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="scans" fill="#F97316" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Condition Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Condition Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={conditionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}%`}
                    >
                      {conditionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Assessment */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle>Risk Assessment Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {riskLevels.map((risk, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-4xl font-bold mb-2 ${risk.color}`}>{risk.count.toLocaleString()}</div>
                    <div className="text-lg font-medium text-gray-900 mb-1">{risk.level}</div>
                    <div className="text-gray-600">{risk.percentage}% of total scans</div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                      <div
                        className={`h-2 rounded-full ${
                          risk.level === "Low Risk"
                            ? "bg-green-500"
                            : risk.level === "Medium Risk"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }`}
                        style={{ width: `${risk.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Accuracy Trend */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Card>
            <CardHeader>
              <CardTitle>Accuracy Trend Over Time</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[93, 97]} />
                  <Tooltip />
                  <Line type="monotone" dataKey="accuracy" stroke="#14B8A6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
