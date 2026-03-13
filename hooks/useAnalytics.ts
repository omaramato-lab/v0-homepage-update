"use client"

// Custom React hook for Google Analytics tracking
// Easy-to-use interface for tracking events throughout the app

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import * as analytics from "@/lib/analytics"

export function useAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  // Track page views
  useEffect(() => {
    if (pathname) {
      analytics.pageview(pathname)
    }
  }, [pathname, searchParams])

  return {
    // Track language switch
    trackLanguageSwitch: (language: "it" | "en") => {
      analytics.trackLanguageSwitch(language)
    },

    // Track CTA clicks
    trackCalendlyClick: (location: string) => {
      analytics.trackCTAClick("calendly", location)
    },

    trackEmailClick: (location: string) => {
      analytics.trackCTAClick("email", location)
    },

    // Track portfolio engagement
    trackPortfolioView: (projectName: string) => {
      analytics.trackPortfolioView(projectName)
    },

    // Track service page visits
    trackServicePageVisit: (serviceName: string) => {
      analytics.trackServicePageVisit(serviceName)
    },

    // Track form submissions
    trackFormSubmit: (formType: string) => {
      analytics.trackFormSubmit(formType)
    },

    // Track scroll depth
    trackScrollDepth: (depth: number) => {
      analytics.trackScrollDepth(depth)
    },

    // Track section views
    trackSectionView: (sectionName: string) => {
      analytics.trackSectionView(sectionName)
    },

    // Generic event tracking
    trackEvent: (action: string, category: string, label?: string, value?: number) => {
      analytics.event({ action, category, label, value })
    },
  }
}

// Hook for scroll depth tracking
export function useScrollDepthTracking() {
  useEffect(() => {
    const depths = [25, 50, 75, 100]
    const tracked = new Set<number>()

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
      )

      depths.forEach((depth) => {
        if (scrollPercent >= depth && !tracked.has(depth)) {
          analytics.trackScrollDepth(depth)
          tracked.add(depth)
        }
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
}
