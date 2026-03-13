"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function ServicesSection() {
  const { t, language } = useLanguage()
  const { ref, isVisible } = useIntersectionObserver()

  // Safety check for translations
  if (!t || !t.services) {
    return null
  }

  const handleServiceClick = (serviceLink: string) => {
    const htmlFile = language === "en" ? serviceLink.replace(".html", "-en.html") : serviceLink
    window.location.href = htmlFile
  }

  const serviceColors = ["#6c5ce7", "#00b4d8", "#fd79a8"]

  return (
    <section id="servizi" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.services.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {t.services.items.map((service, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br from-card to-card/80 border border-border/50 p-6 md:p-8 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden flex flex-col ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                ...({
                  "--accent-color": serviceColors[index],
                } as React.CSSProperties),
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                transitionDuration: "700ms",
              }}
            >
              <div
                className="absolute top-0 right-0 w-24 h-1 opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: serviceColors[index] }}
              />

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${serviceColors[index]}, transparent 70%)`,
                }}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[var(--accent-color)] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-2 md:space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 md:w-5 h-4 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs md:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-6 border-t border-border">
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-accent hover:bg-transparent text-sm md:text-base w-full sm:w-auto"
                    onClick={() => handleServiceClick(service.link)}
                  >
                    {t.services.learnMore}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
