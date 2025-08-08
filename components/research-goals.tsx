import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function ResearchGoals() {
  const goals = [
    {
      title: "Develop a Multimodal AI Framework",
      description:
        "Create an integrated AI system that combines image analysis, clinical data processing, and patient metadata to enable comprehensive health risk assessment.",
    },
    {
      title: "Enable Simultaneous Detection",
      description:
        "Optimize the model for multilabel classification to simultaneously assess risk for skin cancer, autoimmune disorders, and adverse drug reactions.",
    },
    {
      title: "Validate on Public Datasets",
      description:
        "Rigorously test and validate the system using established, publicly available datasets to ensure reliability and reproducibility.",
    },
    {
      title: "Improve Healthcare Equity",
      description:
        "Design a system that can potentially improve diagnostic accessibility in resource-limited settings, addressing healthcare disparities.",
    },
    {
      title: "Establish a Foundation for Future Research",
      description:
        "Create a framework that can be expanded with future funding for clinical validation and potential deployment in healthcare settings.",
    },
    {
      title: "Contribute to Open Science",
      description: "Develop open-source components that contribute to the ethical, equitable AI in medicine community.",
    },
  ]

  return (
    <div className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Research Goals</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          SOLVIA aims to address critical challenges in early disease detection through innovative AI approaches
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {goals.map((goal, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
