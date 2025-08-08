import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function About() {
  return (
    <div className="py-12 border-t">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4">About the SOLVIA Project</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mb-8">
            SOLVIA is a groundbreaking research initiative led by Aaron Singh and Professor Hamid Mahmoodi from the
            EE/CE department, focused on multimodal AI for early disease detection.
          </p>
          <Link href="/about">
            <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700">
              Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
