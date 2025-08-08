import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, Brain, Database, Users, CheckCircle, ArrowRight, Microscope, Activity } from "lucide-react"

export default function SolviaPlusPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white mb-6 px-4 py-2 text-lg"
              variant="outline"
            >
              Enterprise Medical AI Platform
            </Badge>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-white">
              SOLVIA
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">+</span>
            </h1>
            <p className="text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              The most advanced AI-powered dermatological analysis platform designed for healthcare institutions,
              research facilities, and enterprise medical practices.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl"
              >
                Request Enterprise Demo
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-12 py-6 text-xl rounded-full"
              >
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-gray-900">Enterprise-Grade Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              SOLVIA+ delivers unparalleled accuracy, scalability, and integration capabilities for professional medical
              environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-purple-50">
              <CardHeader>
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-4 w-fit mb-4">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Advanced AI Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-lg">
                  Proprietary deep learning models trained on 10M+ clinical images with 99.2% diagnostic accuracy.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Multi-modal analysis (dermoscopy, clinical, histology)
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Real-time lesion segmentation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Predictive risk assessment
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-blue-50">
              <CardHeader>
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl p-4 w-fit mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Clinical Data Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-lg">
                  Comprehensive patient data management with longitudinal tracking and population health analytics.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    HL7 FHIR R4 compliance
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Epic, Cerner, Allscripts integration
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Custom API endpoints
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-teal-50">
              <CardHeader>
                <div className="bg-gradient-to-r from-teal-500 to-green-500 rounded-xl p-4 w-fit mb-4">
                  <Microscope className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Research Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-lg">
                  Advanced research capabilities for clinical trials, population studies, and AI model development.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Cohort analysis tools
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Custom model training
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Statistical reporting suite
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-orange-50">
              <CardHeader>
                <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-4 w-fit mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-lg">
                  Military-grade security with comprehensive compliance for healthcare data protection.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    SOC 2 Type II certified
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    HIPAA & GDPR compliant
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Zero-trust architecture
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-indigo-50">
              <CardHeader>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl p-4 w-fit mb-4">
                  <Activity className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-lg">
                  Live dashboards and analytics for operational insights and clinical decision support.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Custom dashboard builder
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Automated reporting
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Predictive analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-cyan-50">
              <CardHeader>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-4 w-fit mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Multi-tenant Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-lg">
                  Scalable architecture supporting multiple departments, locations, and user roles.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Role-based access control
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Department isolation
                  </li>
                  <li className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    Unlimited user scaling
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">Proven Performance</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              SOLVIA+ delivers measurable improvements in diagnostic accuracy, workflow efficiency, and patient
              outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                99.2%
              </div>
              <div className="text-white text-xl font-medium mb-2">Diagnostic Accuracy</div>
              <div className="text-gray-400">Validated across 50+ skin conditions</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400 mb-4">
                65%
              </div>
              <div className="text-white text-xl font-medium mb-2">Time Reduction</div>
              <div className="text-gray-400">Average diagnostic workflow time</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400 mb-4">
                10M+
              </div>
              <div className="text-white text-xl font-medium mb-2">Training Images</div>
              <div className="text-gray-400">Diverse, clinically validated dataset</div>
            </div>
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
                99.9%
              </div>
              <div className="text-white text-xl font-medium mb-2">Uptime SLA</div>
              <div className="text-gray-400">Enterprise-grade reliability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-8 text-gray-900">Ready to Transform Your Practice?</h2>
          <p className="text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
            Join leading healthcare institutions worldwide using SOLVIA+ to deliver better patient outcomes through
            AI-powered dermatological analysis.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl"
            >
              Schedule Enterprise Demo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-12 py-6 text-xl rounded-full"
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
