"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion } from "framer-motion"

type Researcher = {
  name: string
  image: string
  role: string
  department: string
  focus: string
  expertise: string
  education: string
  publications: string[]
  isHighlighted?: boolean
}

const researchers: Researcher[] = [
  {
    name: "Dr. Hamid Mahmoodi",
    image: "https://necrl.github.io/NECRL/design/Hamid_1x1.jpg",
    role: "PHD Faculty Embedded Researcher",
    department: "SFSU COSE - EE/CE Department",
    focus:
        "Providing guidance on system architecture, technical review, and publication preparation for the SOLVIA project funded by Gilead Sciences Innovation Grant",
    expertise: "VLSI Design, Low-Power High-Performance Circuits, Nanoelectronics, AI Hardware Acceleration",
    education: "Ph.D. in Electrical Engineering, M.S. in Computer Engineering",
    publications: [
      "Hardware Acceleration for Medical AI Applications (2024)",
      "Energy-Efficient Computing for Healthcare AI (2023)",
      "VLSI Design Optimization for Machine Learning Workloads (2022)",
    ],
    isHighlighted: true,

  },
  {
    name: "Aaron S",
    image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaron-2wg4bfQzNBBg97pkJNWn0XUSZncxMG.png",
    role: "Graduate Researcher – Embedded & AI/ML Systems",
    department: "SFSU COSE - EE/CE Department",
    focus:
        "Multimodal AI for early disease detection, focusing on skin cancer, autoimmune disorders, and adverse drug reactions. Research supported by Gilead Sciences Innovation Grant.",
    expertise: "Deep Learning, Computer Vision, Medical Image Analysis, Multimodal Fusion",
    education: "M.S. in Computer Engineering, B.S. in Electrical Engineering",
    publications: [
      "SOLVIA: A Multimodal Approach to Early Disease Detection (In preparation)",
      "Fusion Techniques for Medical Image and Clinical Data Integration (In preparation)",
      "Early Detection of Adverse Drug Reactions Using Multimodal AI (In preparation)",
    ],
    isHighlighted: true,
  },
]

export default function AboutPage() {
  const [selectedResearcher, setSelectedResearcher] = useState<Researcher | null>(null)

  return (
      <div className="container relative">
        {/* Animated background */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[100vw] h-[100vw] bg-gradient-to-r from-teal-500/10 to-cyan-600/10 blur-[120px] rounded-full z-0 pointer-events-none animate-pulse" />

        <section className="flex flex-col items-center justify-center gap-10 py-8 md:py-12 relative z-10">
          <motion.div
              className="text-center space-y-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tighter md:text-5xl bg-gradient-to-r from-teal-500 to-cyan-600 text-transparent bg-clip-text">
              Meet the SOLVIA Team
            </h1>
            <p className="text-muted-foreground md:text-lg max-w-xl mx-auto">
              A research initiative pioneering multimodal AI for early detection of skin cancer, autoimmune diseases, and
              adverse drug reactions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl w-full">
            {researchers.map((researcher, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    className={`flex flex-col items-center text-center cursor-pointer ${
                        researcher.isHighlighted ? "relative" : ""
                    }`}
                    onClick={() => setSelectedResearcher(researcher)}
                >
                  {researcher.isHighlighted && (
                      <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-cyan-600/20 rounded-2xl blur-xl animate-pulse"></div>
                  )}
                  <div className="relative">
                    <img
                        src={researcher.image || "/placeholder.svg"}
                        alt={researcher.name}
                        className={`${
                            researcher.isHighlighted ? "w-80 h-80" : "w-56 h-56"
                        } rounded-xl border border-muted shadow-lg object-cover transition-all duration-300 hover:shadow-2xl ${
                            researcher.isHighlighted ? "ring-4 ring-teal-500/50" : ""
                        }`}
                    />
                    {researcher.isHighlighted && (
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-bounce">
                          +
                        </div>
                    )}
                  </div>
                  <p
                      className={`mt-4 font-bold ${researcher.isHighlighted ? "text-2xl" : "text-xl"} ${
                          researcher.isHighlighted
                              ? "bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent"
                              : ""
                      }`}
                  >
                    {researcher.name}
                  </p>
                  <p className="text-base text-muted-foreground font-medium tracking-wide mt-1">{researcher.role}</p>
                  <button className="mt-2 text-sm underline hover:text-teal-600 transition-colors duration-300">
                    View More
                  </button>
                </motion.div>
            ))}
          </div>

          <Dialog open={!!selectedResearcher} onOpenChange={(open) => !open && setSelectedResearcher(null)}>
            <DialogContent className="sm:max-w-lg">
              {selectedResearcher && (
                  <>
                    <DialogHeader>
                      <DialogTitle>{selectedResearcher.name}</DialogTitle>
                    </DialogHeader>
                    <img
                        src={selectedResearcher.image || "/placeholder.svg"}
                        alt={selectedResearcher.name}
                        className="w-60 h-60 mx-auto rounded-xl object-cover mb-4"
                    />
                    <p className="text-sm text-muted-foreground mb-2">{selectedResearcher.role}</p>
                    <p className="text-sm mb-2">
                      <strong>Department:</strong> {selectedResearcher.department}
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Focus:</strong> {selectedResearcher.focus}
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Expertise:</strong> {selectedResearcher.expertise}
                    </p>
                    <p className="text-sm mb-2">
                      <strong>Education:</strong> {selectedResearcher.education}
                    </p>
                    <p className="text-sm">
                      <strong>Publications:</strong>
                      <ul className="list-disc list-inside mt-1">
                        {selectedResearcher.publications.map((pub, idx) => (
                            <li key={idx}>{pub}</li>
                        ))}
                      </ul>
                    </p>
                  </>
              )}
            </DialogContent>
          </Dialog>
        </section>

        {/* Updated funding section with modern animations */}
        <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Our Sponsors & Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card className="hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-white rounded-2xl p-6 mb-3 shadow-sm border border-gray-100 mx-auto w-fit group-hover:shadow-lg transition-shadow duration-300">
                    <img
                        src="https://brandlogos.net/wp-content/uploads/2022/07/gilead_sciences-logo_brandlogos.net_x59i8.png"
                        alt="Gilead Sciences Logo"
                        className="h-28 w-auto mx-auto transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Gilead Sciences</h3>
                  <p className="text-sm text-gray-600">
                    Innovation Grant recipient for advancing AI in healthcare and early disease detection research
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card className="hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="bg-white rounded-2xl p-6 mb-3 shadow-sm border border-gray-100 mx-auto w-fit group-hover:shadow-lg transition-shadow duration-300">
                    <img
                        src="https://idp.sfsu.edu/idp/images/SFState_Logo.png"
                        alt="SFSU Logo"
                        className="h-28 w-auto mx-auto transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">SFSU College of Science & Engineering (CoSE)</h3>
                  <p className="text-sm text-gray-600">
                    San Francisco State University College of Science & Engineering - Department of Electrical & Computer
                    Engineering
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
  )
}
