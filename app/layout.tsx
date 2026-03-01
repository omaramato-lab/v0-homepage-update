import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Omar Amato - Senior Product Designer for Complex B2B Systems',
  description: 'I design dashboards, IoT tools, and regulated products for global B2B companies. 12+ years shipping usable systems for traffic control, manufacturing, fintech, and SaaS.',
  generator: 'v0.app',
  applicationName: 'Omar Amato Portfolio',
  keywords: 'product design, UX design, B2B design, dashboard design, IoT design, fintech design',
  authors: [{ name: 'Omar Amato' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.omaramato.com',
    title: 'Omar Amato - Senior Product Designer for Complex B2B Systems',
    description: 'I design dashboards, IoT tools, and regulated products for global B2B companies. 12+ years shipping usable systems for traffic control, manufacturing, fintech, and SaaS.',
    siteName: 'Omar Amato',
  },
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
