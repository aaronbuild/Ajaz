"use client"

import { Button } from "@/components/ui/button"
import { Play, TrendingUp, Shield, Smartphone, Camera, FileText, Bot } from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
      <div className="min-h-screen bg-white">
        {/* Hero Section with Hexagonal Background */}
        <section className="relative py-20 overflow-hidden" style={{ position: "relative" }}>
          <iframe
              src="https://a-singh15.github.io/sdf/"
              className="absolute inset-0 w-full h-full border-none opacity-80 pointer-events-none z-0"
              title="SOLVIA Interactive Background"
          />

          <div className="absolute inset-0 bg-white/60"></div>
          <motion.div
              className="container mx-auto px-4 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
          >
            <div className="max-w-4xl">
              <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900" variants={itemVariants}>
                SOLVIA
                <br />
                <span className="text-teal-600 bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
                Multimodal AI for Early Disease Detection
              </span>
              </motion.h1>
              <motion.p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl" variants={itemVariants}>
                24/7 Online Analyze: Mole, Rash, Acne
                <br />& 50+ skin conditions
              </motion.p>

              <motion.div className="flex flex-wrap gap-4 mb-12" variants={itemVariants}>

                <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    asChild
                >
                  <Link href="/demo" className="flex items-center">
                    <Play className="mr-2 h-5 w-5" />
                    DEMO
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
                How{" "}
                <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                SOLVIA
              </span>{" "}
                Works
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Get professional-grade skin analysis in 4 simple steps
              </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              {[
                {
                  icon: Camera,
                  title: "1. Take a Photo",
                  description: "Capture a clear image of your skin concern using your smartphone camera",
                  color: "teal",
                },
                {
                  icon: Smartphone,
                  title: "2. AI Analysis",
                  description:
                      "Our advanced AI analyzes your image using deep learning models trained on millions of cases",
                  color: "orange",
                },
                {
                  icon: FileText,
                  title: "3. Get Results",
                  description:
                      "Receive detailed analysis with risk assessment, condition identification, and recommendations",
                  color: "cyan",
                },
                {
                  icon: Bot,
                  title: "4. Consult Doctor",
                  description: "Connect with healthcare providers through our integrated consultation platform",
                  color: "teal",
                },
              ].map((step, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                      <CardContent className="p-8 text-center">
                        <div
                            className={`bg-${step.color}-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <step.icon className={`h-8 w-8 text-${step.color}-600`} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
              {[
                {
                  icon: Smartphone,
                  title: "AI-Powered Analysis",
                  description:
                      "Advanced computer vision technology analyzes your skin with 96% accuracy using deep learning",
                  color: "teal",
                },
                {
                  icon: Shield,
                  title: "Comprehensive Tracking",
                  description:
                      "Monitor changes over time with detailed analytics and progress tracking for better health outcomes",
                  color: "orange",
                },
                {
                  icon: TrendingUp,
                  title: "Doctor Integration",
                  description:
                      "Seamlessly connect with healthcare providers and share your analysis results for professional consultation",
                  color: "cyan",
                },
              ].map((feature, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                      <CardContent className="p-8 text-center">
                        <div
                            className={`bg-${feature.color}-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <feature.icon className={`h-8 w-8 text-${feature.color}-600`} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
              ))}
            </motion.div>

            {/* CTA Section */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-4 text-gray-900">Ready to check your skin?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of users who trust SOLVIA for their skin health monitoring
              </p>
              <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  asChild
              >
                <Link href="/scanner">Start Your Skin Check</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
  )
}
