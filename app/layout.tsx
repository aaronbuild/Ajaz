import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SOLVIA - AI-Powered Skin Health Analysis",
  description:
    "SOLVIA uses advanced AI to analyze skin conditions, detect early signs of skin cancer, and provide personalized health insights.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Navbar />
          <main>{children}</main>
          <footer className="bg-muted/50 border-t py-12">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-8 md:mb-0">
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-8 rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold mr-2">
                      S
                    </div>
                    <span className="font-bold text-xl">SOLVIA</span>
                  </div>
                  <p className="text-muted-foreground max-w-md">
                    Advanced AI for early detection of skin conditions, providing accessible healthcare insights.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-medium text-foreground mb-3">Product</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/demo" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400">
                          Demo
                        </a>
                      </li>
                      <li>
                        <a href="/docs" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400">
                          Documentation
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400">
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-foreground mb-3">Resources</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/docs" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400">
                          Research
                        </a>
                      </li>
                      <li>
                        <a href="/docs" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400">
                          Publications
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-foreground mb-3">Company</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="/about" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400">
                          About
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400">
                          Contact
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-teal-600 dark:hover:text-teal-400">
                          Privacy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-muted-foreground text-sm">© 2025 SOLVIA. All rights reserved.</p>
                <p className="text-muted-foreground text-sm mt-4 md:mt-0">
                  * SOLVIA is not a diagnostic tool. Always consult healthcare professionals.
                </p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
