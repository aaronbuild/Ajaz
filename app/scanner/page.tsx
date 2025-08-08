import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Camera, Upload, Smartphone, Clock, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function ScannerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              AI Skin Check <span className="text-teal-700">Scanner</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advanced AI technology for instant skin analysis. Get professional-grade insights for moles, rashes, acne,
              and 50+ skin conditions in seconds.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-700 hover:to-teal-500 text-white px-8 py-4 text-lg rounded-full"
              asChild
            >
              <Link href="/demo">Start Skin Check Demo</Link>
            </Button>


          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-teal-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Camera className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Take a Photo</h3>
              <p className="text-gray-600">
                Use your smartphone camera to capture a clear image of the skin area you're concerned about
              </p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Upload className="h-10 w-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. AI Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI analyzes your image using deep learning models trained on millions of skin images
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-10 w-10 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Get Results</h3>
              <p className="text-gray-600">
                Receive instant analysis with risk assessment, condition identification, and next steps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Scanner Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="bg-teal-100 rounded-lg p-3 w-fit mb-3">
                  <Smartphone className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle>Real-time Camera Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Instant analysis using your device's camera with real-time feedback and guidance for optimal image
                  capture.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-orange-100 rounded-lg p-3 w-fit mb-3">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>3D Body Mapping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive full-body mole mapping with 3D visualization to track changes over time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-cyan-100 rounded-lg p-3 w-fit mb-3">
                  <Clock className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access professional-grade skin analysis anytime, anywhere, without waiting for appointments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
