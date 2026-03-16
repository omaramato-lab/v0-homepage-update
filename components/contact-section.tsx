"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Mail, Linkedin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function ContactSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useIntersectionObserver()

  // Safety check for translations
  if (!t || !t.contact) {
    return null
  }

  return (
    <section id="contatti" className="py-24 bg-gradient-to-br from-[#2d1f52] via-[#1f1438] to-[#2d1f52]" ref={ref}>
      <div
        className={`container mx-auto px-4 text-center transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">{t.contact.title}</h2>
        <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-12">{t.contact.subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="bg-white text-gray-900 hover:bg-white/90 gap-2" asChild>
            <a href="https://cal.com/omar-amato-uhcc2g/30min" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-5 h-5" />
              {t.contact.ctaCalendly}
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 gap-2 bg-transparent"
            asChild
          >
            <a href="mailto:info@omaramato.com">
              <Mail className="w-5 h-5" />
              {t.contact.ctaEmail}
            </a>
          </Button>
        </div>
        <div className="flex justify-center">
          <Button variant="link" className="text-white hover:text-accent gap-2" asChild>
            <a href="https://www.linkedin.com/in/omaramato" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              {t.contact.linkedin}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
