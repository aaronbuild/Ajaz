import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, FileText, BarChart, ImageIcon } from "lucide-react"

export default function DatasetsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Research Datasets</h1>
        <p className="text-xl text-muted-foreground">
          SOLVIA leverages established, publicly available datasets for comprehensive analysis and model development
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 mb-16">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-md">
                <ImageIcon className="h-6 w-6 text-orange-500" />
              </div>
              <div>
                <CardTitle>ISIC 2018 Challenge Dataset</CardTitle>
                <p className="text-sm text-muted-foreground">Skin Cancer Detection</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Dataset Overview</h3>
                <p className="text-sm text-muted-foreground">
                  The International Skin Imaging Collaboration (ISIC) 2018 Challenge dataset is a comprehensive
                  collection of dermoscopic images used for skin lesion analysis toward melanoma detection.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Key Statistics</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 10,015 dermoscopic images</li>
                  <li>• 7 disease categories</li>
                  <li>• Expert-annotated ground truth</li>
                  <li>• Diverse patient demographics</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Research Applications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Melanoma detection</li>
                  <li>• Lesion segmentation</li>
                  <li>• Attribute detection</li>
                  <li>• Disease classification</li>
                </ul>
              </div>
            </div>

            <div className="w-full bg-muted rounded-full h-2 mb-1">
              <div className="bg-orange-500 h-2 rounded-full" style={{ width: "85%" }}></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Dataset Utilization: 85%</span>
              <span>10,015 images</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-md">
                <ImageIcon className="h-6 w-6 text-pink-500" />
              </div>
              <div>
                <CardTitle>MIDAS Dataset</CardTitle>
                <p className="text-sm text-muted-foreground">Dermatology Images</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Dataset Overview</h3>
                <p className="text-sm text-muted-foreground">
                  The MIDAS dataset provides a diverse collection of clinical dermatology images with rich metadata,
                  enabling comprehensive analysis of skin conditions.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Key Statistics</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 5,842 clinical images</li>
                  <li>• Multiple imaging modalities</li>
                  <li>• Detailed patient metadata</li>
                  <li>• Biopsy-proven labels</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Research Applications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Skin disease classification</li>
                  <li>• Multimodal analysis</li>
                  <li>• Demographic impact studies</li>
                  <li>• Early detection research</li>
                </ul>
              </div>
            </div>

            <div className="w-full bg-muted rounded-full h-2 mb-1">
              <div className="bg-pink-500 h-2 rounded-full" style={{ width: "65%" }}></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Dataset Utilization: 65%</span>
              <span>5,842 images</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-md">
                <Database className="h-6 w-6 text-purple-500" />
              </div>
              <div>
                <CardTitle>MIMIC-III Clinical Database</CardTitle>
                <p className="text-sm text-muted-foreground">Autoimmune Disorders</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Dataset Overview</h3>
                <p className="text-sm text-muted-foreground">
                  MIMIC-III (Medical Information Mart for Intensive Care) is a large, freely-available database
                  comprising de-identified health-related data associated with patients who stayed in critical care
                  units.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Key Statistics</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 46,520 distinct patients</li>
                  <li>• 58,976 hospital admissions</li>
                  <li>• ~27 million lab measurements</li>
                  <li>• Comprehensive clinical notes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Research Applications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Autoimmune disease prediction</li>
                  <li>• Clinical pattern recognition</li>
                  <li>• Lab result trend analysis</li>
                  <li>• Risk factor identification</li>
                </ul>
              </div>
            </div>

            <div className="w-full bg-muted rounded-full h-2 mb-1">
              <div className="bg-purple-500 h-2 rounded-full" style={{ width: "92%" }}></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Dataset Utilization: 92%</span>
              <span>46,520 patients</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-md">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <CardTitle>SIDER Database</CardTitle>
                <p className="text-sm text-muted-foreground">Drug Reactions</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="text-sm font-medium mb-2">Dataset Overview</h3>
                <p className="text-sm text-muted-foreground">
                  SIDER (Side Effect Resource) contains information on marketed medicines and their recorded adverse
                  drug reactions, aggregated from public documents and package inserts.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Key Statistics</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 1,430 drugs</li>
                  <li>• 5,868 side effects</li>
                  <li>• 139,756 drug-side effect pairs</li>
                  <li>• Standardized MedDRA terminology</li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2">Research Applications</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Adverse reaction prediction</li>
                  <li>• Drug interaction analysis</li>
                  <li>• Cutaneous reaction modeling</li>
                  <li>• Patient risk stratification</li>
                </ul>
              </div>
            </div>

            <div className="w-full bg-muted rounded-full h-2 mb-1">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "78%" }}></div>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Dataset Utilization: 78%</span>
              <span>1,430 drugs</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-md">
              <BarChart className="h-6 w-6 text-green-500" />
            </div>
            <CardTitle>Data Processing Methodology</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-medium mb-3">Preprocessing Pipeline</h3>
              <ol className="space-y-2 text-sm text-muted-foreground list-decimal pl-5">
                <li>Data cleaning and normalization</li>
                <li>Missing value imputation</li>
                <li>Feature extraction and selection</li>
                <li>Data augmentation for imbalanced classes</li>
                <li>Train/validation/test splitting</li>
                <li>Standardization and scaling</li>
              </ol>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-3">Ethical Considerations</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• All datasets are publicly available and de-identified</li>
                <li>• Research is strictly report-based with no live data collection</li>
                <li>• Analysis follows ethical AI principles</li>
                <li>• Bias mitigation strategies are implemented</li>
                <li>• Privacy and security measures are maintained</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
