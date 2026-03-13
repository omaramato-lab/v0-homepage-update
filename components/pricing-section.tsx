"use client"

import { useLanguage } from "@/contexts/language-context"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function PricingSection() {
  const { t } = useLanguage()
  const { ref, isVisible } = useIntersectionObserver()

  // Safety check for translations
  if (!t || !t.pricing) {
    return null
  }

  return (
    <section id="pricing" className="py-16 md:py-24 bg-card" ref={ref}>
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.pricing.title}</h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">{t.pricing.subtitle}</p>
        </div>
        <div
          className={`max-w-6xl mx-auto overflow-x-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          <table className="w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-3 md:py-4 px-3 md:px-6 text-left font-semibold">{t.pricing.tableHeaders.service}</th>
                <th className="py-3 md:py-4 px-3 md:px-6 text-left font-semibold hidden md:table-cell">{t.pricing.tableHeaders.description}</th>
                <th className="py-3 md:py-4 px-3 md:px-6 text-left font-semibold hidden sm:table-cell">{t.pricing.tableHeaders.time}</th>
              </tr>
            </thead>
            <tbody>
              {t.pricing.items.map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-primary/5 transition-colors">
                  <td className="py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-base">{row.service}</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-muted-foreground hidden md:table-cell text-xs md:text-sm">{row.description}</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-muted-foreground hidden sm:table-cell text-xs md:text-sm">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {t.pricing.promoNote && (
            <div className="mt-6 text-center">
              <p className="text-primary font-medium text-xs md:text-sm" style={{ fontWeight: 500 }}>
                {t.pricing.promoNote}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
