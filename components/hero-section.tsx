"use client"

import { ArrowDown, Calendar, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroParticles } from "@/components/hero-particles"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Animated gradient background */}
      <div
        className="animate-gradient-shift pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.13 0.005 260) 0%, oklch(0.15 0.03 280) 25%, oklch(0.14 0.02 200) 50%, oklch(0.15 0.04 145) 75%, oklch(0.13 0.005 260) 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      {/* Floating particles */}
      <HeroParticles />

      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/3 size-[500px] rounded-full opacity-[0.08]"
        style={{
          background: "radial-gradient(circle, oklch(0.65 0.19 145) 0%, transparent 70%)",
          animation: "pulse-glow 6s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/3 size-[400px] rounded-full opacity-[0.06]"
        style={{
          background: "radial-gradient(circle, oklch(0.55 0.15 250) 0%, transparent 70%)",
          animation: "pulse-glow 8s ease-in-out infinite 2s",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Availability badge with pulse glow */}
        <div
          className="animate-badge-pulse mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-primary" />
          </span>
          Available for remote projects
        </div>

        {/* Subtitle - animated reveal */}
        <p
          className="animate-text-reveal mb-4 font-mono text-sm tracking-widest text-muted-foreground uppercase"
          style={{ animationDelay: "0.2s" }}
        >
          Antonino Omar Amato
        </p>

        {/* Headline - animated reveal */}
        <h1
          className="animate-text-reveal text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.4s" }}
        >
          Senior Product Designer for Complex B2B Systems
        </h1>

        {/* Subheading - animated reveal */}
        <p
          className="animate-text-reveal mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
          style={{ animationDelay: "0.6s" }}
        >
          I design dashboards, IoT tools, and regulated products for global B2B companies. 12+ years shipping usable systems for traffic control, manufacturing, fintech, and SaaS. Available for remote work worldwide.
        </p>

        {/* CTA Buttons - animated reveal */}
        <div
          className="animate-text-reveal mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.8s" }}
        >
          <Button asChild size="lg" className="btn-glow gap-2">
            <a href="#contact">
              <Calendar className="size-4" />
              Book a Call
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="btn-glow gap-2">
            <a href="#services">
              Discover Services
              <ArrowDown className="size-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="gap-2 text-muted-foreground">
            <a href="/portfolio">
              <Mail className="size-4" />
              View Portfolio
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
