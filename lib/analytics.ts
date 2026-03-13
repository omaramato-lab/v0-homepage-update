// Google Analytics 4 tracking functions for Omar Amato Portfolio
// Production-ready analytics implementation

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ""

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Specific tracking functions for portfolio

export const trackLanguageSwitch = (language: string) => {
  event({
    action: "language_switch",
    category: "User Interaction",
    label: language,
  })
}

export const trackCTAClick = (ctaType: "calendly" | "email", location: string) => {
  event({
    action: "cta_click",
    category: "Conversion",
    label: `${ctaType}_${location}`,
  })
}

export const trackPortfolioView = (projectName: string) => {
  event({
    action: "portfolio_view",
    category: "Engagement",
    label: projectName,
  })
}

export const trackServicePageVisit = (serviceName: string) => {
  event({
    action: "service_page_visit",
    category: "Engagement",
    label: serviceName,
  })
}

export const trackFormSubmit = (formType: string) => {
  event({
    action: "form_submit",
    category: "Conversion",
    label: formType,
  })
}

export const trackScrollDepth = (depth: number) => {
  event({
    action: "scroll_depth",
    category: "Engagement",
    label: `${depth}%`,
    value: depth,
  })
}

export const trackSectionView = (sectionName: string) => {
  event({
    action: "section_view",
    category: "Engagement",
    label: sectionName,
  })
}

// Initialize GA4
export const initGA = () => {
  if (typeof window !== "undefined" && GA_TRACKING_ID) {
    window.dataLayer = window.dataLayer || []
    function gtag(...args: any[]) {
      window.dataLayer.push(args)
    }
    gtag("js", new Date())
    gtag("config", GA_TRACKING_ID, {
      page_path: window.location.pathname,
    })
  }
}

// Type definitions
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}
