import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Database, BookOpen, Download, ExternalLink } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-500 to-cyan-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Documentation & Resources</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive information about SOLVIA research, datasets, and publications
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 container mx-auto px-4">
        <Tabs defaultValue="research" className="w-full">
          <TabsList className="grid grid-cols-3 w-full max-w-2xl mx-auto mb-8">
            <TabsTrigger value="research" className="text-base">
              Research
            </TabsTrigger>
            <TabsTrigger value="datasets" className="text-base">
              Datasets
            </TabsTrigger>
            <TabsTrigger value="publications" className="text-base">
              Publications
            </TabsTrigger>
          </TabsList>

          <TabsContent value="research" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Research Methodology</h2>
                <p className="text-gray-600 mb-6">
                  SOLVIA employs a sophisticated multimodal architecture that processes different types of medical data
                  to provide comprehensive skin health analysis.
                </p>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle>AI Architecture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="bg-teal-100 text-teal-600 p-1 rounded text-xs font-bold mt-0.5">CNN</span>
                        <span>Convolutional Neural Networks for dermoscopic and clinical image analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-cyan-100 text-cyan-600 p-1 rounded text-xs font-bold mt-0.5">MLP</span>
                        <span>Multilayer Perceptrons for processing clinical laboratory results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-teal-100 text-teal-600 p-1 rounded text-xs font-bold mt-0.5">FUSION</span>
                        <span>Advanced multimodal fusion techniques to integrate diverse data types</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-cyan-100 text-cyan-600 p-1 rounded text-xs font-bold mt-0.5">MULTI</span>
                        <span>Multilabel classification for simultaneous risk assessment</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Research Process</CardTitle>
                  </CardHeader>
                  <CardContent>
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

              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Research Areas</h2>
                <p className="text-gray-600 mb-6">
                  SOLVIA focuses on three critical healthcare challenges related to skin health and early disease
                  detection.
                </p>

                <div className="grid grid-cols-1 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="bg-teal-100 p-3 rounded-md w-fit mb-3">
                        <FileText className="h-6 w-6 text-teal-600" />
                      </div>
                      <CardTitle>Skin Cancer Detection</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Using dermoscopic images to identify malignant skin lesions at early stages, potentially
                        improving treatment outcomes and survival rates.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="bg-cyan-100 p-3 rounded-md w-fit mb-3">
                        <FileText className="h-6 w-6 text-cyan-600" />
                      </div>
                      <CardTitle>Autoimmune Disorder Forecasting</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Analyzing clinical data patterns to predict the onset of autoimmune diseases before traditional
                        diagnostic criteria are met.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="bg-teal-100 p-3 rounded-md w-fit mb-3">
                        <FileText className="h-6 w-6 text-teal-600" />
                      </div>
                      <CardTitle>Adverse Drug Reaction Prediction</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        Identifying patients at risk for severe cutaneous adverse reactions to medications based on
                        their clinical profile.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="datasets" className="mt-0">
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Research Datasets</h2>
                <p className="text-gray-600 mb-6">
                  SOLVIA leverages established, publicly available datasets for comprehensive analysis and model
                  development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-teal-100 p-3 rounded-md">
                          <Database className="h-6 w-6 text-teal-600" />
                        </div>
                        <div>
                          <CardTitle>ISIC 2018 Challenge Dataset</CardTitle>
                          <p className="text-sm text-gray-500">Skin Cancer Detection</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h3 className="text-sm font-medium mb-2">Dataset Overview</h3>
                        <p className="text-sm text-gray-600">
                          The International Skin Imaging Collaboration (ISIC) 2018 Challenge dataset is a comprehensive
                          collection of dermoscopic images used for skin lesion analysis toward melanoma detection.
                        </p>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-sm font-medium mb-2">Key Statistics</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• 10,015 dermoscopic images</li>
                          <li>• 7 disease categories</li>
                          <li>• Expert-annotated ground truth</li>
                          <li>• Diverse patient demographics</li>
                        </ul>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Dataset Utilization: 85%</span>
                        <span>10,015 images</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-cyan-100 p-3 rounded-md">
                          <Database className="h-6 w-6 text-cyan-600" />
                        </div>
                        <div>
                          <CardTitle>MIDAS Dataset</CardTitle>
                          <p className="text-sm text-gray-500">Dermatology Images</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h3 className="text-sm font-medium mb-2">Dataset Overview</h3>
                        <p className="text-sm text-gray-600">
                          The MIDAS dataset provides a diverse collection of clinical dermatology images with rich
                          metadata, enabling comprehensive analysis of skin conditions.
                        </p>
                      </div>

                      <div className="mb-4">
                        <h3 className="text-sm font-medium mb-2">Key Statistics</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li>• 5,842 clinical images</li>
                          <li>• Multiple imaging modalities</li>
                          <li>• Detailed patient metadata</li>
                          <li>• Biopsy-proven labels</li>
                        </ul>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                        <div className="bg-cyan-600 h-2 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Dataset Utilization: 65%</span>
                        <span>5,842 images</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-teal-100 p-3 rounded-md">
                          <Database className="h-6 w-6 text-teal-600" />
                        </div>
                        <div>
                          <CardTitle>MIMIC-III Clinical Database</CardTitle>
                          <p className="text-sm text-gray-500">Autoimmune Disorders</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Dataset Overview</h3>
                          <p className="text-sm text-gray-600">
                            MIMIC-III (Medical Information Mart for Intensive Care) is a large, freely-available
                            database comprising de-identified health-related data associated with patients who stayed in
                            critical care units.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium mb-2">Key Statistics</h3>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• 46,520 distinct patients</li>
                            <li>• 58,976 hospital admissions</li>
                            <li>• ~27 million lab measurements</li>
                            <li>• Comprehensive clinical notes</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium mb-2">Research Applications</h3>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Autoimmune disease prediction</li>
                            <li>• Clinical pattern recognition</li>
                            <li>• Lab result trend analysis</li>
                            <li>• Risk factor identification</li>
                          </ul>
                        </div>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                        <div className="bg-teal-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Dataset Utilization: 92%</span>
                        <span>46,520 patients</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-cyan-100 p-3 rounded-md">
                          <Database className="h-6 w-6 text-cyan-600" />
                        </div>
                        <div>
                          <CardTitle>SIDER Database</CardTitle>
                          <p className="text-sm text-gray-500">Drug Reactions</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <h3 className="text-sm font-medium mb-2">Dataset Overview</h3>
                          <p className="text-sm text-gray-600">
                            SIDER (Side Effect Resource) contains information on marketed medicines and their recorded
                            adverse drug reactions, aggregated from public documents and package inserts.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium mb-2">Key Statistics</h3>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• 1,430 drugs</li>
                            <li>• 5,868 side effects</li>
                            <li>• 139,756 drug-side effect pairs</li>
                            <li>• Standardized MedDRA terminology</li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-sm font-medium mb-2">Research Applications</h3>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Adverse reaction prediction</li>
                            <li>• Drug interaction analysis</li>
                            <li>• Cutaneous reaction modeling</li>
                            <li>• Patient risk stratification</li>
                          </ul>
                        </div>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                        <div className="bg-cyan-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Dataset Utilization: 78%</span>
                        <span>1,430 drugs</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="publications" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Publications</h2>
                <p className="text-gray-600 mb-6">
                  Research papers, presentations, and educational materials from the SOLVIA project.
                </p>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-teal-600" />
                      <span>Categories</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="ghost" className="w-full justify-start">
                        All Publications
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        Research Papers
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        Conference Proceedings
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        Posters & Presentations
                      </Button>
                      <Button variant="ghost" className="w-full justify-start">
                        Technical Reports
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Download className="h-5 w-5 text-teal-600" />
                      <span>Resources</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Project Summary (PDF)
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Research Methodology (PDF)
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <FileText className="mr-2 h-4 w-4" />
                        Preliminary Results (PDF)
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Latest Publications</h2>
                <p className="text-gray-600 mb-6">
                  Our most recent research papers and publications related to the SOLVIA project.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "SOLVIA: A Multimodal Approach to Early Disease Detection",
                      authors: "Singh A., Mahmoodi H.",
                      date: "2025 (In preparation)",
                      abstract:
                        "This paper presents SOLVIA, a novel multimodal AI system for early detection of skin cancer, autoimmune disorders, and adverse drug reactions. We demonstrate how combining visual analysis of dermoscopic images with clinical data can improve early detection rates and reduce false positives compared to single-modality approaches.",
                      tags: ["Multimodal AI", "Early Detection", "Skin Cancer"],
                    },
                    {
                      title: "Fusion Techniques for Medical Image and Clinical Data Integration",
                      authors: "Singh A., Mahmoodi H.",
                      date: "2025 (In preparation)",
                      abstract:
                        "This research explores advanced fusion techniques for integrating medical imaging data with clinical records. We propose a novel architecture that preserves modality-specific information while enabling cross-modal learning, resulting in more robust predictions for complex medical conditions.",
                      tags: ["Data Fusion", "Medical Imaging", "Clinical Data"],
                    },
                    {
                      title: "Early Detection of Adverse Drug Reactions Using Multimodal AI",
                      authors: "Singh A., Mahmoodi H.",
                      date: "2025 (In preparation)",
                      abstract:
                        "This study focuses on predicting severe cutaneous adverse reactions (SCARs) to medications using a combination of patient history, genetic markers, and skin imaging. Our approach demonstrates significant improvements in early warning capabilities compared to traditional pharmacovigilance methods.",
                      tags: ["Adverse Drug Reactions", "Pharmacovigilance", "AI"],
                    },
                  ].map((paper, i) => (
                    <Card key={i}>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-medium text-gray-800 mb-1">{paper.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          {paper.authors} • {paper.date}
                        </p>

                        <p className="text-gray-600 mb-4">{paper.abstract}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {paper.tags.map((tag, j) => (
                            <span key={j} className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-3">
                          <Button variant="outline" size="sm" className="text-teal-600 border-teal-200">
                            <FileText className="mr-2 h-4 w-4" />
                            Preprint
                          </Button>
                          <Button variant="outline" size="sm" className="text-teal-600 border-teal-200">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            DOI
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
