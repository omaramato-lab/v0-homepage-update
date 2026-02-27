"use client"

import { Calendar, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations"

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-2xl text-center">
        {/* Section header */}
        <FadeIn>
          <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
            Contact
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            {"Let's get started?"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Book a 30 min call to discuss your project with no commitment
          </p>
        </FadeIn>

        {/* Availability note */}
        <FadeIn delay={150}>
          <div className="mx-auto mt-8 max-w-xl rounded-xl border border-primary/20 bg-primary/5 p-5 text-left">
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {"I'm currently taking on new projects and available to start immediately. Whether you need fractional support or a full engagement, let's discuss how I can help."}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="btn-glow gap-2">
              <a href="https://calendly.com/omaramato-info/30min" target="_blank" rel="noopener noreferrer">
                <Calendar className="size-4" />
                Book Calendly Call
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-glow gap-2">
              <a href="mailto:info@omaramato.com">
                <Mail className="size-4" />
                Send me an Email
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="btn-glow gap-2">
              <a href="https://www.linkedin.com/in/omaramato" target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
