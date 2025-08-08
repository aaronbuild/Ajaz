import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, FileText, Microscope, FlaskRoundIcon as Flask, Lightbulb, BarChart } from "lucide-react"

export default function ResearchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Research Methodology</h1>
        <p className="text-xl text-muted-foreground">
          Our approach to developing SOLVIA combines advanced AI techniques with rigorous medical research standards
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <Card>
          <CardHeader>
            <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-md w-fit mb-3">
              <Brain className="h-6 w-6 text-orange-500" />
            </div>
            <CardTitle>AI Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              SOLVIA employs a sophisticated multimodal architecture that processes different types of medical data:
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="bg-orange-100 dark:bg-orange-900/20 text-orange-500 p-1 rounded text-xs font-bold mt-0.5">
                  CNN
                </span>
                <span>Convolutional Neural Networks for dermoscopic and clinical image analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-pink-100 dark:bg-pink-900/20 text-pink-500 p-1 rounded text-xs font-bold mt-0.5">
                  MLP
                </span>
                <span>Multilayer Perceptrons for processing clinical laboratory results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-purple-100 dark:bg-purple-900/20 text-purple-500 p-1 rounded text-xs font-bold mt-0.5">
                  FUSION
                </span>
                <span>Advanced multimodal fusion techniques to integrate diverse data types</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-500 p-1 rounded text-xs font-bold mt-0.5">
                  MULTI
                </span>
                <span>Multilabel classification for simultaneous risk assessment</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-md w-fit mb-3">
              <Microscope className="h-6 w-6 text-green-500" />
            </div>
            <CardTitle>Research Process</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our research follows a structured, rigorous process to ensure scientific validity:
            </p>
            <ol className="space-y-2 text-sm list-decimal pl-5">
              <li>Dataset curation and preprocessing from public sources</li>
              <li>Model architecture design and implementation</li>
              <li>Training on diverse patient populations</li>
              <li>Validation using cross-validation techniques</li>
              <li>Performance evaluation using standard metrics</li>
              <li>Error analysis and model refinement</li>
              <li>Documentation and reporting of findings</li>
              <li>Preparation for peer review and publication</li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Research Areas</h2>
        <p className="text-xl text-muted-foreground">SOLVIA focuses on three critical healthcare challenges</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Card>
          <CardHeader>
            <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-md w-fit mb-3">
              <FileText className="h-6 w-6 text-orange-500" />
            </div>
            <CardTitle>Skin Cancer Detection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Using dermoscopic images to identify malignant skin lesions at early stages, potentially improving
              treatment outcomes and survival rates.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-md w-fit mb-3">
              <Flask className="h-6 w-6 text-pink-500" />
            </div>
            <CardTitle>Autoimmune Disorder Forecasting</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Analyzing clinical data patterns to predict the onset of autoimmune diseases before traditional diagnostic
              criteria are met.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-md w-fit mb-3">
              <Lightbulb className="h-6 w-6 text-purple-500" />
            </div>
            <CardTitle>Adverse Drug Reaction Prediction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Identifying patients at risk for severe cutaneous adverse reactions to medications based on their clinical
              profile.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-md w-fit mb-3">
            <BarChart className="h-6 w-6 text-blue-500" />
          </div>
          <CardTitle>Expected Outcomes</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            By the conclusion of this research initiative, we expect to deliver:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 dark:bg-green-900/20 text-green-500 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-sm">Validated AI Prototype</h3>
                  <p className="text-xs text-muted-foreground">
                    A fully functional SOLVIA prototype with documented performance metrics
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 dark:bg-green-900/20 text-green-500 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-sm">Research Poster</h3>
                  <p className="text-xs text-muted-foreground">
                    A comprehensive visual presentation of our methodology and findings
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 dark:bg-green-900/20 text-green-500 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-sm">Final Report</h3>
                  <p className="text-xs text-muted-foreground">
                    Detailed documentation suitable for showcase and potential publication
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-green-100 dark:bg-green-900/20 text-green-500 p-1 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-sm">Future Research Roadmap</h3>
                  <p className="text-xs text-muted-foreground">
                    A plan for expanding the research with additional funding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
