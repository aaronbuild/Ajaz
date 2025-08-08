import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, X, Star, Zap, Crown } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for individual practitioners and small clinics",
      icon: <Star className="h-6 w-6" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        { name: "Up to 100 scans per month", included: true },
        { name: "Basic AI analysis", included: true },
        { name: "PDF reports", included: true },
        { name: "Email support", included: true },
        { name: "Mobile app access", included: true },
        { name: "Advanced analytics", included: false },
        { name: "API access", included: false },
        { name: "Custom integrations", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing practices and dermatology clinics",
      icon: <Zap className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      features: [
        { name: "Up to 500 scans per month", included: true },
        { name: "Advanced AI analysis", included: true },
        { name: "Detailed PDF reports", included: true },
        { name: "Priority email & chat support", included: true },
        { name: "Mobile & web app access", included: true },
        { name: "Advanced analytics dashboard", included: true },
        { name: "Basic API access", included: true },
        { name: "EHR integrations", included: true },
        { name: "Custom integrations", included: false },
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For hospitals, health systems, and research institutions",
      icon: <Crown className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      features: [
        { name: "Unlimited scans", included: true },
        { name: "SOLVIA+ advanced platform", included: true },
        { name: "Custom reporting suite", included: true },
        { name: "24/7 dedicated support", included: true },
        { name: "Multi-platform access", included: true },
        { name: "Real-time analytics", included: true },
        { name: "Full API access", included: true },
        { name: "Custom integrations", included: true },
        { name: "On-premise deployment", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
              Simple, Transparent{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-500">
                Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your practice. All plans include our core AI analysis features with no hidden
              fees.
            </p>
            <div className="flex justify-center items-center gap-4 mb-8">
              <Badge className="bg-green-100 text-green-800 px-4 py-2">✨ 14-day free trial on all plans</Badge>
              <Badge className="bg-blue-100 text-blue-800 px-4 py-2">🔒 No setup fees</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-none shadow-xl hover:shadow-2xl transition-all duration-300 ${
                plan.popular ? "ring-2 ring-orange-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 text-sm font-medium">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} text-white mb-4 mx-auto`}
                >
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-xl text-gray-500 ml-1">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <Button
                  className={`w-full mb-8 py-3 text-lg font-medium rounded-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                      : "bg-gray-900 hover:bg-gray-800 text-white"
                  }`}
                >
                  {plan.cta}
                </Button>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Can I change plans anytime?</h3>
                <p className="text-gray-600 mb-6">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                  prorate any billing differences.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-gray-900">What happens if I exceed my scan limit?</h3>
                <p className="text-gray-600 mb-6">
                  We'll notify you when you're approaching your limit. You can either upgrade your plan or purchase
                  additional scans at $0.50 per scan.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-gray-900">Is there a setup fee?</h3>
                <p className="text-gray-600">
                  No setup fees for Basic and Professional plans. Enterprise plans may include implementation services
                  based on your requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Do you offer discounts for annual billing?</h3>
                <p className="text-gray-600 mb-6">
                  Yes! Save 20% when you pay annually. Contact our sales team for multi-year discounts on Enterprise
                  plans.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-gray-900">What integrations are included?</h3>
                <p className="text-gray-600 mb-6">
                  Professional plans include popular EHR integrations. Enterprise plans include custom integrations and
                  dedicated API support.
                </p>

                <h3 className="text-lg font-semibold mb-3 text-gray-900">Is my data secure?</h3>
                <p className="text-gray-600">
                  Absolutely. All plans include enterprise-grade security, HIPAA compliance, and encrypted data
                  transmission and storage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of healthcare professionals using SOLVIA to improve patient outcomes.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
