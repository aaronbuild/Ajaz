import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DatasetSection() {
  return (
    <div className="my-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Datasets</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Our research leverages established, publicly available datasets for comprehensive analysis
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-orange-100 dark:bg-orange-900/20 text-orange-500 p-1 rounded mr-2 text-xs font-bold">
                SKIN CANCER
              </span>
              ISIC 2018 & MIDAS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Large collections of dermoscopic and clinical images with rich annotations for skin cancer detection.
            </p>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">ISIC 2018</span>
                <span className="text-sm text-muted-foreground">10,015 images</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-3">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: "85%" }}></div>
              </div>

              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">MIDAS</span>
                <span className="text-sm text-muted-foreground">5,842 images</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-pink-500 h-2 rounded-full" style={{ width: "65%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-purple-100 dark:bg-purple-900/20 text-purple-500 p-1 rounded mr-2 text-xs font-bold">
                AUTOIMMUNE
              </span>
              MIMIC-III
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              De-identified clinical data including lab results and patient demographics, suitable for modeling
              autoimmune disease risk.
            </p>
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Patient Records</span>
                <span className="text-sm text-muted-foreground">46,520 patients</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2 mb-3">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "92%" }}></div>
              </div>

              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Lab Measurements</span>
                <span className="text-sm text-muted-foreground">~27M measurements</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: "78%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="bg-blue-100 dark:bg-blue-900/20 text-blue-500 p-1 rounded mr-2 text-xs font-bold">
                DRUG REACTIONS
              </span>
              SIDER Database
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-muted-foreground">
              Comprehensive records of drug–adverse reaction pairs, enabling the modeling of severe cutaneous adverse
              reactions with tabular ML approaches.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Drugs</span>
                  <span className="text-sm text-muted-foreground">1,430 drugs</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mb-3">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Adverse Effects</span>
                  <span className="text-sm text-muted-foreground">5,868 side effects</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
