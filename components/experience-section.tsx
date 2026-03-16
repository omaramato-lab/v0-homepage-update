"use client"

import { useLanguage } from "@/contexts/language-context"
import { Briefcase, FileText } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Button } from "@/components/ui/button"

export function ExperienceSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useIntersectionObserver()

  // Safety check for translations
  if (!t || !t.experience) {
    return null
  }

  return (
    <section id="esperienza" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl font-bold mb-4 text-balance">{t.experience.title}</h2>
          <p className="text-xl text-muted-foreground text-balance">{t.experience.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-accent/50" />

            <div className="space-y-12">
              {t.experience.items.map((item, index) => (
                <div
                  key={index}
                  className={`relative pl-12 group transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                  style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
                >
                  {/* Year dot */}
                  <div className="absolute left-0 top-0 -translate-x-[7px] w-4 h-4 rounded-full bg-primary ring-4 ring-background transition-all group-hover:w-5 group-hover:h-5 group-hover:-translate-x-[9px] group-hover:shadow-lg group-hover:shadow-primary/50" />

                  {/* Content card */}
                  <div className="bg-card border border-border rounded-lg p-6 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:bg-card/80">
                    {/* Year badge */}
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      <Briefcase className="w-4 h-4" />
                      {item.year}
                    </div>

                    {/* Company and location */}
                    <h3 className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                      {item.company}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.location}</p>

                    {/* Role */}
                    <h4 className="text-lg font-semibold text-accent mb-3">{item.role}</h4>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="flex justify-center mt-16">
          <a
            href="/cv-omar-amato.pdf"
            download="CV-Omar-Amato.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border border-primary text-primary hover:bg-primary/10 bg-transparent font-semibold rounded-lg transition-colors duration-300"
          >
            <FileText className="w-5 md:w-6 h-5 md:h-6" />
            {t.experience.downloadCV}
          </a>
        </div>
      </div>
    </section>
  )
}
