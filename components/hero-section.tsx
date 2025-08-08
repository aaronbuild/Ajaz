import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="flex w-full h-screen bg-black overflow-hidden">
      {/* Left: Text Content */}
      <div className="flex flex-col justify-center w-full md:w-1/2 px-6 md:px-16 lg:px-24 z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          <span className="text-orange-500">SOLVIA</span>: Multimodal<br />
          AI for<br />
          Early Disease<br />
          Detection
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl">
          A groundbreaking approach to early detection of skin cancer, autoimmune
          disorders, and severe drug reactions through multimodal AI analysis.
        </p>
        <div className="flex gap-4">
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white flex items-center px-6 py-3 text-base font-semibold rounded-md shadow">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white/10 px-6 py-3 text-base font-semibold rounded-md"
          >
            View Publications
          </Button>
        </div>
      </div>

      {/* Right: Spline Animation */}
      <div className="relative w-1/2 h-full hidden md:block">
        {/* Container with layering */}
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://my.spline.design/particleaibrain-E7TuisUJFIFlijJEjSmWINJJ/"
            frameBorder="0"
            className="w-full h-full object-cover"
            style={{
              filter: "brightness(0.9)",
              background: "transparent",
            }}
            title="SOLVIA Spline Animation"
          ></iframe>
        </div>

        {/* Overlay to hide Spline badge */}
        <div className="absolute bottom-4 right-4 w-36 h-10 bg-black z-10 rounded-md" />
      </div>
    </section>
  );
}
