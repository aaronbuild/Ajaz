import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Database, FileText, Users, Zap } from "lucide-react"

export default function SystemOverview() {
  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">SOLVIA System Overview</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Systematic, Omnidirectional, Learning-based, Vision-Integrated Assessment for early detection of serious
          health conditions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <div className="bg-teal-100 dark:bg-teal-900/20 p-3 rounded-md w-fit mb-3">
              <Brain className="h-6 w-6 text-teal-500" />
            </div>
            <CardTitle>Multimodal AI Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Combines CNNs for image analysis, MLPs for clinical data, and advanced multimodal fusion techniques for
              integrated prediction.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="bg-cyan-100 dark:bg-cyan-900/20 p-3 rounded-md w-fit mb-3">
              <Database className="h-6 w-6 text-cyan-500" />
            </div>
            <CardTitle>Comprehensive Datasets</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Leverages ISIC 2018, MIDAS, MIMIC-III, and SIDER databases for robust training and validation of our
              models.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="bg-teal-100 dark:bg-teal-900/20 p-3 rounded-md w-fit mb-3">
              <FileText className="h-6 w-6 text-teal-500" />
            </div>
            <CardTitle>Multilabel Classification</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Optimized for simultaneous risk assessment of skin cancer, autoimmune disorders, and adverse drug
              reactions in a single patient profile.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="bg-cyan-100 dark:bg-cyan-900/20 p-3 rounded-md w-fit mb-3">
              <Users className="h-6 w-6 text-cyan-500" />
            </div>
            <CardTitle>Healthcare Equity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Designed to improve diagnostic accessibility and equity, especially in resource-limited settings, reducing
              healthcare disparities.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="bg-teal-100 dark:bg-teal-900/20 p-3 rounded-md w-fit mb-3">
              <Zap className="h-6 w-6 text-teal-500" />
            </div>
            <CardTitle>Early Detection Focus</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Enables early identification of serious conditions, potentially improving treatment outcomes and reducing
              healthcare costs.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="bg-cyan-100 dark:bg-cyan-900/20 p-3 rounded-md w-fit mb-3">
              <FileText className="h-6 w-6 text-cyan-500" />
            </div>
            <CardTitle>Report-Based Research</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Strictly report-based using retrospective, publicly available datasets, with potential for clinical
              deployment with future funding.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
