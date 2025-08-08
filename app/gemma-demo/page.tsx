import GemmaNav from "@/components/gemma-nav"
import GemmaHero from "@/components/gemma-hero"
import GemmaSection from "@/components/gemma-section"
import GemmaCard from "@/components/gemma-card"
import GemmaGrid from "@/components/gemma-grid"
import { Download, ExternalLink, Code, FileText } from "lucide-react"

export default function GemmaDemoPage() {
  const models = [
    {
      title: "SOLVIA-7B",
      description: "A 7-billion parameter model optimized for skin cancer detection with high accuracy and efficiency.",
      tags: ["7B", "Skin Cancer", "Medical"],
      metrics: [
        { label: "Accuracy", value: "87.4%" },
        { label: "Parameters", value: "7B" },
      ],
      actions: [
        {
          label: "Try Model",
          href: "#",
          variant: "default" as const,
          icon: <ExternalLink className="mr-2 h-4 w-4" />,
        },
        {
          label: "Download",
          href: "#",
          variant: "outline" as const,
          icon: <Download className="mr-2 h-4 w-4" />,
        },
      ],
    },
    {
      title: "SOLVIA-2B",
      description:
        "A lightweight 2-billion parameter model for autoimmune disorder prediction in resource-limited settings.",
      tags: ["2B", "Autoimmune", "Lightweight"],
      metrics: [
        { label: "Accuracy", value: "79.2%" },
        { label: "Parameters", value: "2B" },
      ],
      actions: [
        {
          label: "Try Model",
          href: "#",
          variant: "default" as const,
          icon: <ExternalLink className="mr-2 h-4 w-4" />,
        },
        {
          label: "Code",
          href: "#",
          variant: "outline" as const,
          icon: <Code className="mr-2 h-4 w-4" />,
        },
      ],
    },
    {
      title: "SOLVIA-ADR",
      description: "Specialized model for adverse drug reaction prediction using clinical data and patient profiles.",
      tags: ["ADR", "Clinical", "Specialized"],
      metrics: [
        { label: "Accuracy", value: "83.7%" },
        { label: "F1 Score", value: "83.6%" },
      ],
      actions: [
        {
          label: "Research Paper",
          href: "#",
          variant: "outline" as const,
          icon: <FileText className="mr-2 h-4 w-4" />,
        },
        {
          label: "Dataset",
          href: "#",
          variant: "outline" as const,
          icon: <Download className="mr-2 h-4 w-4" />,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <GemmaNav />

      <GemmaHero
        title="SOLVIA"
        subtitle="A collection of multimodal AI models for early detection of skin cancer, autoimmune disorders, and adverse drug reactions"
        primaryAction={{
          text: "Try SOLVIA Demo",
          href: "#models",
        }}
        secondaryAction={{
          text: "View Research",
          href: "/research",
        }}
      />

      <GemmaSection
        title="Available Models"
        subtitle="Choose from our collection of specialized AI models, each optimized for different medical detection tasks"
      >
        <GemmaGrid columns={3}>
          {models.map((model, index) => (
            <GemmaCard key={index} {...model} />
          ))}
        </GemmaGrid>
      </GemmaSection>

      <GemmaSection
        title="Research Impact"
        subtitle="Our models are designed to improve healthcare accessibility and early disease detection"
      >
        <GemmaGrid columns={2}>
          <GemmaCard
            title="Healthcare Equity"
            description="Designed to work in resource-limited settings, reducing healthcare disparities and improving access to early disease detection."
            tags={["Accessibility", "Global Health"]}
          />
          <GemmaCard
            title="Clinical Integration"
            description="Built for seamless integration into existing clinical workflows with minimal computational requirements."
            tags={["Clinical", "Workflow"]}
          />
        </GemmaGrid>
      </GemmaSection>
    </div>
  )
}
