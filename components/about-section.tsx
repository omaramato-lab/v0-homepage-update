"use client"

import { useLanguage } from "@/contexts/language-context"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function AboutSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useIntersectionObserver()

  // Safety check for translations
  if (!t || !t.about) {
    return null
  }

  return (
    <section id="chi-sono" className="py-16 md:py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.about.title}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <div
            className={`space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-foreground/90 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
            style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          >
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-sm md:text-base">{paragraph}</p>
            ))}
          </div>
          <div
            className={`grid grid-cols-2 gap-4 md:gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
            style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          >
            {t.about.stats.map((stat, index) => (
              <div key={index} className="border-l-4 border-primary pl-3 md:pl-4 py-2">
                <div className="text-2xl md:text-4xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm uppercase text-muted-foreground tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
