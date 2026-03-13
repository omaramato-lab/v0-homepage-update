import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { Footer } from "@/components/footer"

// Lazy load sections below the fold for faster initial page load
const AboutSection = dynamic(() => import("@/components/about-section").then(m => ({ default: m.AboutSection })))
const PortfolioSection = dynamic(() => import("@/components/portfolio-section").then(m => ({ default: m.PortfolioSection })))
const ExperienceSection = dynamic(() => import("@/components/experience-section").then(m => ({ default: m.ExperienceSection })))
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then(m => ({ default: m.TestimonialsSection })))
const ContactSection = dynamic(() => import("@/components/contact-section").then(m => ({ default: m.ContactSection })))

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
