"use client"

import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function TestimonialsSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useIntersectionObserver()

  // Safety check for translations
  if (!t || !t.testimonials) {
    return null
  }

  return (
    <section id="testimonial" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.testimonials.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.testimonials.items.map((testimonial, index) => (
            <Card
              key={index}
              className={`bg-gradient-to-br from-card to-card/70 border border-accent/30 p-6 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${((index % 4) + 1) * 100}ms` : "0ms",
                transitionDuration: "700ms",
              }}
            >
              <p className="text-sm italic mb-6 leading-relaxed text-foreground/90">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="pt-4 border-t border-border">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
