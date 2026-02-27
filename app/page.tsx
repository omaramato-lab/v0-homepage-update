import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { HeroGrid } from "@/components/hero-grid"
import { LookingForSection } from "@/components/looking-for-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ExperienceSection } from "@/components/experience-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="relative z-10">
      <HeroGrid />
      <Navbar />
      <HeroSection />
      <LookingForSection />
      <ServicesSection />
      <PortfolioSection />
      <ExperienceSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
