// Google Analytics 4 Configuration
// This file contains GA4 setup and configuration

export const GA4_CONFIG = {
  trackingId: "G-E75LV405L0",

  // Cookie settings
  cookieFlags: "SameSite=None;Secure",
  cookieDomain: "auto",
  cookieExpires: 63072000, // 2 years

  // Privacy settings
  anonymizeIp: true,
  allowAdFeatures: false,
  allowGoogleSignals: false,

  // Performance settings
  sampleRate: 100,
  siteSpeedSampleRate: 10,

  // Debug mode (only in development)
  debug: process.env.NODE_ENV === "development",
}

// Enhanced measurement events (automatically tracked by GA4)
export const AUTO_TRACKED_EVENTS = [
  "page_view",
  "scroll",
  "click",
  "file_download",
  "video_start",
  "video_progress",
  "video_complete",
]

// Custom events configuration for Omar Amato Portfolio
export const CUSTOM_EVENTS = {
  // Language interactions
  LANGUAGE_SWITCH: {
    name: "language_switch",
    category: "User Interaction",
    description: "User switches between IT and EN",
  },

  // CTA interactions
  CALENDLY_CLICK: {
    name: "calendly_click",
    category: "Conversion",
    description: "User clicks Calendly booking link",
  },

  EMAIL_CLICK: {
    name: "email_click",
    category: "Conversion",
    description: "User clicks email contact button",
  },

  // Portfolio engagement
  PORTFOLIO_VIEW: {
    name: "portfolio_view",
    category: "Engagement",
    description: "User views portfolio case study",
  },

  SERVICE_PAGE_VISIT: {
    name: "service_page_visit",
    category: "Engagement",
    description: "User visits service detail page",
  },

  // Form interactions
  FORM_SUBMIT: {
    name: "form_submit",
    category: "Conversion",
    description: "User submits contact form",
  },

  // Engagement metrics
  SCROLL_DEPTH: {
    name: "scroll_depth",
    category: "Engagement",
    description: "User scrolls to specific depth",
  },

  SECTION_VIEW: {
    name: "section_view",
    category: "Engagement",
    description: "User views specific section",
  },
}

// Conversion goals configuration
export const CONVERSION_GOALS = [
  {
    name: "Book a Call",
    eventName: "calendly_click",
    value: 100,
    description: "User clicks Calendly link to book consultation",
  },
  {
    name: "Email Contact",
    eventName: "email_click",
    value: 50,
    description: "User clicks email button to contact",
  },
  {
    name: "Portfolio Engagement",
    eventName: "portfolio_view",
    value: 10,
    description: "User engages with portfolio case studies",
  },
  {
    name: "Service Page Visit",
    eventName: "service_page_visit",
    value: 25,
    description: "User visits detailed service page",
  },
]

// Keywords to track (for GSC integration)
export const TARGET_KEYWORDS = {
  italian: [
    "fractional head of design",
    "ux designer freelance",
    "designer prodotti digitali",
    "ux audit",
    "landing page design",
    "design system consulenza",
    "designer b2b",
    "designer prodotti complessi",
  ],
  english: [
    "fractional head of design",
    "freelance ux designer",
    "b2b product designer",
    "ux audit service",
    "landing page designer",
    "design system consultant",
    "complex product designer",
  ],
}
