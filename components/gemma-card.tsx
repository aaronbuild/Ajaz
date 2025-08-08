import type React from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface GemmaCardProps {
  title: string
  description: string
  tags?: string[]
  metrics?: {
    label: string
    value: string
  }[]
  actions?: {
    label: string
    href: string
    variant?: "default" | "outline" | "ghost"
    icon?: React.ReactNode
  }[]
  className?: string
}

export default function GemmaCard({ title, description, tags, metrics, actions, className }: GemmaCardProps) {
  return (
    <Card className={`bg-gray-900 border-gray-800 hover:border-gray-700 transition-colors ${className}`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          {tags && (
            <div className="flex gap-2 flex-wrap">
              {tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-gray-800 text-gray-300 hover:bg-gray-700">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </CardHeader>

      <CardContent className="pt-0">
        {metrics && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        {actions && (
          <div className="flex gap-2 flex-wrap">
            {actions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant || "outline"}
                size="sm"
                className={
                  action.variant === "default"
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
                }
                asChild
              >
                <a href={action.href} className="flex items-center">
                  {action.icon}
                  {action.label}
                </a>
              </Button>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
