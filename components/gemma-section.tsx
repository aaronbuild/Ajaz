import type React from "react"
interface GemmaSectionProps {
  title: string
  subtitle?: string
  children: React.ReactNode
  className?: string
  dark?: boolean
}

export default function GemmaSection({ title, subtitle, children, className, dark = true }: GemmaSectionProps) {
  return (
    <section className={`py-16 ${dark ? "bg-[#0a0a0a]" : "bg-white"} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-light mb-4 ${dark ? "text-white" : "text-gray-900"}`}>{title}</h2>
          {subtitle && (
            <p className={`text-xl ${dark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto leading-relaxed`}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  )
}
