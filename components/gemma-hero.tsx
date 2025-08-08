import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"

interface GemmaHeroProps {
  title: string
  subtitle: string
  primaryAction?: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
}

export default function GemmaHero({ title, subtitle, primaryAction, secondaryAction }: GemmaHeroProps) {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {subtitle}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryAction && (
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium"
                  asChild
                >
                  <a href={primaryAction.href}>
                    {primaryAction.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              )}
              {secondaryAction && (
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg font-medium"
                  asChild
                >
                  <a href={secondaryAction.href}>
                    {secondaryAction.text}
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
