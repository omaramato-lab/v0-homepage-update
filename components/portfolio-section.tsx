"use client"

import type React from "react"
import { useState } from "react"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { PortfolioDownloadModal } from "./portfolio-download-modal"
import { FileText } from "lucide-react"

export function PortfolioSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useIntersectionObserver()
  const [showDownloadModal, setShowDownloadModal] = useState(false)

  // Safety check for translations
  if (!t || !t.portfolio) {
    return null
  }

  return (
    <section id="portfolio" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold">{t.portfolio.title}</h2>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {t.portfolio.featuredItems.map((project, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-card to-card/80 border border-border/50 p-6 md:p-8 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  ...({
                    "--accent-color": project.accentColor,
                  } as React.CSSProperties),
                  transitionDelay: isVisible ? `${(index + 2) * 100}ms` : "0ms",
                  transitionDuration: "700ms",
                }}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: project.accentColor }}
                />

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${project.accentColor}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                      {project.company}
                    </h4>
                    <p className="text-xs text-accent italic">{project.role}</p>
                  </div>

                  <h3
                    className="text-lg md:text-2xl font-bold mb-3 group-hover:text-[var(--accent-color)] transition-colors duration-300 line-clamp-2"
                    style={{ color: "inherit" }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-xs md:text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-4 flex-grow">
                    {project.description}
                  </p>

                  <div className="mb-4 flex items-start gap-2">
                    <span className="text-accent mt-0.5 flex-shrink-0 text-lg md:text-base">◆</span>
                    <p className="text-xs md:text-sm text-foreground/80 leading-relaxed">{project.metric}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 md:px-3 py-1 md:py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3
            className={`text-2xl font-bold mb-8 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}
          >
            {t.portfolio.mainProjects}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {t.portfolio.otherProducts.items.map((project, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-card to-card/60 border border-border/30 p-4 md:p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg group relative overflow-hidden flex flex-col ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${((index % 4) + 1) * 100}ms` : "0ms",
                  transitionDuration: "700ms",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <div className="relative z-10 flex flex-col h-full">
                  <h4 className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
                    {project.company}
                  </h4>
                  <h3 className="text-base md:text-lg font-bold mb-3 text-foreground line-clamp-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4 flex-grow items-center">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowDownloadModal(true)}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              <FileText className="w-5 md:w-6 h-5 md:h-6" />
              Download my portfolio
            </button>
          </div>
        </div>
      </div>

      <PortfolioDownloadModal
        open={showDownloadModal}
        onOpenChange={setShowDownloadModal}
        fileName="Portfolio.pdf"
        filePath="/Portfolio-ENG.pdf"
      />
    </section>
  )
}
