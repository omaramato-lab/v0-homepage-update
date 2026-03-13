// Analytics wrapper component for tracking CTA buttons and links
"use client"

import { useAnalytics } from "@/hooks/useAnalytics"
import type { ReactNode } from "react"

interface AnalyticsWrapperProps {
  children: ReactNode
  eventType: "calendly" | "email" | "portfolio" | "service" | "section"
  eventData: string
  className?: string
}

export function AnalyticsWrapper({ children, eventType, eventData, className }: AnalyticsWrapperProps) {
  const analytics = useAnalytics()

  const handleClick = () => {
    switch (eventType) {
      case "calendly":
        analytics.trackCalendlyClick(eventData)
        break
      case "email":
        analytics.trackEmailClick(eventData)
        break
      case "portfolio":
        analytics.trackPortfolioView(eventData)
        break
      case "service":
        analytics.trackServicePageVisit(eventData)
        break
      case "section":
        analytics.trackSectionView(eventData)
        break
    }
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}
