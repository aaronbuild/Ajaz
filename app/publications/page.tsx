import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, BookOpen, Award, Calendar } from "lucide-react"

export default function PublicationsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Publications & Resources</h1>
        <p className="text-xl text-muted-foreground">
          Research outputs, presentations, and educational materials from the SOLVIA project
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-md">
                <FileText className="h-6 w-6 text-orange-500" />
              </div>
              <CardTitle>Research Papers</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-1">SOLVIA: A Multimodal Approach to Early Disease Detection</h3>
                <p className="text-sm text-muted-foreground mb-2">Singh A., Mahmoodi H. (2025) - In preparation</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="bg-orange-100 dark:bg-orange-900/20 text-orange-500 px-2 py-0.5 rounded">
                    Preprint
                  </span>
                  <span>Expected submission: June 2025</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-1">Fusion Techniques for Medical Image and Clinical Data Integration</h3>
                <p className="text-sm text-muted-foreground mb-2">Singh A., Mahmoodi H. (2025) - In preparation</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="bg-orange-100 dark:bg-orange-900/20 text-orange-500 px-2 py-0.5 rounded">
                    Preprint
                  </span>
                  <span>Expected submission: July 2025</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-1">Early Detection of Adverse Drug Reactions Using Multimodal AI</h3>
                <p className="text-sm text-muted-foreground mb-2">Singh A., Mahmoodi H. (2025) - In preparation</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="bg-orange-100 dark:bg-orange-900/20 text-orange-500 px-2 py-0.5 rounded">
                    Preprint
                  </span>
                  <span>Expected submission: August 2025</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-md">
                <BookOpen className="h-6 w-6 text-pink-500" />
              </div>
              <CardTitle>Presentations & Posters</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-1">SOLVIA: Multimodal AI for Early Disease Detection</h3>
                <p className="text-sm text-muted-foreground mb-2">Gilead Innovation Initiative Showcase (2025)</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="bg-pink-100 dark:bg-pink-900/20 text-pink-500 px-2 py-0.5 rounded">Poster</span>
                  <span>August 2025</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-1">Advancing Healthcare Equity Through AI</h3>
                <p className="text-sm text-muted-foreground mb-2">EE/CE Department Research Symposium (2025)</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="bg-pink-100 dark:bg-pink-900/20 text-pink-500 px-2 py-0.5 rounded">
                    Oral Presentation
                  </span>
                  <span>July 2025</span>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-1">Multimodal Fusion for Medical AI Applications</h3>
                <p className="text-sm text-muted-foreground mb-2">Student Research Showcase (2025)</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="bg-pink-100 dark:bg-pink-900/20 text-pink-500 px-2 py-0.5 rounded">
                    Lightning Talk
                  </span>
                  <span>June 2025</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader className="pb-2">
            <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-md w-fit mb-3">
              <Award className="h-6 w-6 text-purple-500" />
            </div>
            <CardTitle className="text-lg">Achievements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="bg-purple-100 dark:bg-purple-900/20 text-purple-500 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="text-sm">Gilead Innovation Initiative Grant (2025)</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-purple-100 dark:bg-purple-900/20 text-purple-500 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="text-sm">EE/CE Department Research Excellence Award (Expected)</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-purple-100 dark:bg-purple-900/20 text-purple-500 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="text-sm">Student Innovation in Healthcare AI Recognition</div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-md w-fit mb-3">
              <Calendar className="h-6 w-6 text-blue-500" />
            </div>
            <CardTitle className="text-lg">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-500 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 22h14"></path>
                    <path d="M5 2h14"></path>
                    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
                  </svg>
                </div>
                <div className="text-sm">Final Project Presentation (August 2025)</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-500 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 22h14"></path>
                    <path d="M5 2h14"></path>
                    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
                  </svg>
                </div>
                <div className="text-sm">Research Poster Session (July 2025)</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-blue-100 dark:bg-blue-900/20 text-blue-500 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 22h14"></path>
                    <path d="M5 2h14"></path>
                    <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                    <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
                  </svg>
                </div>
                <div className="text-sm">AI in Healthcare Workshop (June 2025)</div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-md w-fit mb-3">
              <FileText className="h-6 w-6 text-green-500" />
            </div>
            <CardTitle className="text-lg">Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="bg-green-100 dark:bg-green-900/20 text-green-500 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <div className="text-sm">Project Summary (PDF)</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 dark:bg-green-900/20 text-green-500 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <div className="text-sm">Research Methodology (PDF)</div>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-green-100 dark:bg-green-900/20 text-green-500 p-1 rounded-full mt-0.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <div className="text-sm">Preliminary Results (PDF)</div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

    
    </div>
  )
}
