import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/contexts/language-context"
import { CookieConsent } from "@/components/cookie-consent"
import "./globals.css"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a0a0a",
  colorScheme: "dark",
}

export const metadata: Metadata = {
  title: "Omar Amato - Product Design",
  description:
    "Product Designer with 12+ years of experience designing digital products for agencies and B2B companies. Fractional Head of Product Design, UX Audit, Design Systems, and Landing Page Design.",
  keywords: [
    "product design",
    "UX design",
    "UI design",
    "design systems",
    "fractional head of design",
    "UX audit",
    "landing page design",
    "B2B design",
    "design leadership",
    "design for agencies",
    "Omar Amato",
    "product designer",
  ],
  metadataBase: new URL("https://devicemonitoring.com"),
  formatDetection: {
    email: true,
    telephone: true,
    address: false,
  },
  authors: [{ name: "Omar Amato", url: "https://omaramato.com" }],
  creator: "Omar Amato",
  publisher: "Omar Amato",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    alternateLocale: ["en_US"],
    url: "https://omaramato.com/",
    siteName: "Omar Amato - Designer Freelance per Agenzie",
    title: "Omar Amato | Partner Design per Agenzie Digitali - Servizi White-Label B2B",
    description:
      "Designer freelance con 12+ anni di esperienza per agenzie digitali. Supporto white-label in Fractional Head of Product Design, UX Audit e Landing Page Design. Partner affidabile per progetti complessi B2B.",
    images: [
      {
        url: "https://omaramato.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Omar Amato - Designer Freelance per Agenzie Digitali",
        type: "image/png",
      },
      {
        url: "https://omaramato.com/og-image-square.png",
        width: 800,
        height: 800,
        alt: "Omar Amato - Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Amato | Designer per Agenzie - Servizi White-Label B2B",
    description:
      "Designer freelance specializzato nel supporto ad agenzie digitali. Fractional Head of Product Design, UX Audit, Landing Page Design",
    images: ["https://omaramato.com/og-image.png"],
    creator: "@omaramato",
  },
  alternates: {
    canonical: "https://omaramato.com/",
    languages: {
      "it-IT": "https://omaramato.com/",
      "en-US": "https://omaramato.com/en",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "your-google-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "Design Services",
  generator: "Next.js",
  referrer: "strict-origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://omaramato.com/#person",
        name: "Antonino Omar Amato",
        alternateName: "Omar Amato",
        jobTitle: "Fractional Head of Product Design per Agenzie Digitali",
        description:
          "Designer freelance con 12+ anni di esperienza specializzato nel supporto ad agenzie digitali. Servizi white-label: Fractional Head of Product Design, UX Audit, Landing Page Design per agenzie e startup B2B",
        url: "https://omaramato.com",
        email: "info@omaramato.com",
        image: "https://omaramato.com/omar-amato-photo.jpg",
        sameAs: ["https://linkedin.com/in/omaramato", "https://twitter.com/omaramato"],
        knowsAbout: [
          "UX Design per Agenzie",
          "UI Design B2B",
          "Product Design",
          "Design System Governance",
          "Fractional Head of Product Design",
          "White Label Design Services",
          "Design Partnership",
        ],
        hasOccupation: {
          "@type": "Occupation",
          name: "Fractional Head of Product Design per Agenzie Digitali",
          occupationLocation: {
            "@type": "Place",
            name: "Remote - Europa",
          },
          skills:
            "UX Design, UI Design, Design System, Fractional Head of Product Design, White Label Services, B2B Design, Design for Agencies",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://omaramato.com/#website",
        url: "https://omaramato.com",
        name: "Omar Amato - Designer Freelance per Agenzie",
        description:
          "Servizi di design freelance white-label per agenzie digitali: Fractional Head of Product Design, UX Audit, Landing Page Design",
        publisher: {
          "@id": "https://omaramato.com/#person",
        },
        inLanguage: ["it-IT", "en-US"],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://omaramato.com/#service",
        name: "Omar Amato Design Services per Agenzie",
        description:
          "Servizi di design white-label per agenzie digitali: Fractional Head of Product Design, UX Audit, Landing Page Design. Partner affidabile per progetti complessi B2B.",
        provider: {
          "@id": "https://omaramato.com/#person",
        },
        areaServed: {
          "@type": "Place",
          name: "Europa",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          reviewCount: "15",
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servizi Design per Agenzie",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                serviceType: "Fractional Head of Product Design",
                name: "Fractional Head of Product Design per Agenzie",
                description:
                  "Leadership strategica del design per agenzie digitali e team distribuiti. Gestione design system, mentoring team, governance qualità.",
                audience: {
                  "@type": "Audience",
                  audienceType: "Agenzie Digitali, Startup B2B",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                serviceType: "UX Audit",
                name: "UX Audit per Agenzie",
                description:
                  "Analisi UX approfondita di prodotti digitali per agenzie. Report dettagliato con redesign e raccomandazioni implementabili in 2 settimane.",
                audience: {
                  "@type": "Audience",
                  audienceType: "Agenzie Digitali, Clienti B2B",
                },
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                serviceType: "Landing Page Design",
                name: "Landing Page Design per Agenzie",
                description:
                  "Design di landing page high-converting dev-ready per agenzie. Pronte per development in 1 settimana.",
                audience: {
                  "@type": "Audience",
                  audienceType: "Agenzie Digitali, Marketing Teams",
                },
              },
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://omaramato.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://omaramato.com/",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://omaramato.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Lavori con agenzie digitali in modalità white-label?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sì, offro servizi white-label per agenzie digitali. Posso supportare i tuoi progetti come partner esterno invisibile ai tuoi clienti finali, oppure collaborare direttamente con loro come estensione del tuo team.",
            },
          },
          {
            "@type": "Question",
            name: "Quali servizi offri per le agenzie?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Offro tre servizi principali per agenzie: Fractional Head of Product Design (leadership strategica e governance design system), UX Audit (analisi approfondita di prodotti esistenti), e Landing Page Design (landing page high-converting dev-ready). Tutti i servizi sono pensati per essere facilmente integrati nei workflow delle agenzie.",
            },
          },
          {
            "@type": "Question",
            name: "Quanto tempo richiede una collaborazione?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "I tempi variano per servizio: UX Audit completo in 2 settimane, Landing Page Design in 1 settimana, Fractional Head of Product Design con commitment minimo di 3 mesi. Tutti i servizi sono flessibili e adattabili alle esigenze della tua agenzia.",
            },
          },
        ],
      },
    ],
  }

  return (
    <html lang="it">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="android-chrome" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="android-chrome" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <link rel="alternate" hrefLang="it" href="https://omaramato.com/" />
        <link rel="alternate" hrefLang="en" href="https://omaramato.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://omaramato.com/" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <CookieConsent />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
