"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { PortfolioDownloadModal } from "./portfolio-download-modal"
import { WavyLinesBackground } from "./wavy-lines-background"
import { FileText } from "lucide-react"

export function HeroSection() {
  const { t, language } = useLanguage()
  const [showDownloadModal, setShowDownloadModal] = useState(false)

  const handleDownloadClick = () => {
    setShowDownloadModal(true)
  }

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-16 md:pt-20 bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
        {/* Glowing orbs - hidden on mobile for performance */}
        <div className="hidden md:block absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none z-0" />
        <div className="hidden md:block absolute bottom-1/4 -right-32 w-[450px] h-[450px] rounded-full bg-teal-400/20 blur-[120px] pointer-events-none z-0" />

        {/* Animated diagonal wavy lines background */}
        <div className="absolute inset-0 z-0">
          <WavyLinesBackground />
        </div>

        {/* Hero content container */}
        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2 animate-fade-in">
                <h2 className="text-xs md:text-sm font-bold uppercase tracking-[2px] text-primary">
                  {t.hero.name}
                </h2>
              </div>

              <h1
                className="font-bold leading-[1.2] tracking-tight text-primary animate-fade-in-delay-1 mb-0 -mt-2"
                style={{
                  fontSize: "clamp(1.8rem, 6vw, 3.8rem)",
                  letterSpacing: "-0.5px",
                }}
              >
                Product Designer
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-[1.7] font-normal max-w-[600px] animate-fade-in-delay-2">
                {t.hero.subtitle}
              </p>

              <div className="flex flex-col md:flex-row gap-3 md:gap-4 pt-2 animate-fade-in-delay-3">
                <Button size="lg" asChild className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white text-sm md:text-base">
                  <a href="#contatti">{t.hero.ctaPrimary}</a>
                </Button>
                <Button
                  size="lg"
                  onClick={() => setShowDownloadModal(true)}
                  variant="outline"
                  className="w-full md:w-auto border-primary text-primary hover:bg-primary/10 bg-transparent text-sm md:text-base inline-flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 md:w-5 h-4 md:h-5" />
                  Download portfolio
                </Button>
                <Button
                  size="lg"
                  asChild
                  variant="outline"
                  className="w-full md:w-auto border-primary text-primary hover:bg-primary/10 bg-transparent text-sm md:text-base inline-flex items-center justify-center gap-2"
                >
                  <a href="/cv-omar-amato.pdf" download="CV-Omar-Amato.pdf">
                    <FileText className="w-4 md:w-5 h-4 md:h-5" />
                    Download my CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[600px] hero-glow-container z-10 animate-float">
              <Image src="/images/hero-animated-1.png" alt={t.hero.imageAlt} fill className="object-contain" priority />
            </div>
          </div>
        </div>
      </section>

      <PortfolioDownloadModal
        open={showDownloadModal}
        onOpenChange={setShowDownloadModal}
        fileName="Portfolio.pdf"
        filePath="/Portfolio-ENG.pdf"
      />
    </>
  )
}
