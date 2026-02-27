"use client"

import { ArrowRight, Quote } from "lucide-react"
import Link from "next/link"
import { FadeIn, StaggerChildren } from "@/components/animations"

const testimonials = [
  {
    quote:
      "I worked with Omar for years back in Italy and I\u2019ve been inspired and motivated many times by his outstanding creativity and his expertise across the whole design process and thinking. Was a pleasure to work with and learn from him.",
    name: "Fabio Laneri",
    role: "Principal Designer at Viator",
  },
  {
    quote:
      "He designs with clear logic that makes the hand-off to development incredibly smooth. Great attention to detail and strong communication skills. I highly recommend him to any team looking for a top-tier designer.",
    name: "Nicola Cortesi",
    role: "Front End Developer at Advepa",
  },
  {
    quote:
      "Working with Omar was a great joy. His understanding of user experience is well above average. He knew what questions to ask and how to set up a process and see it through to the end.",
    name: "Nathan McDonald",
    role: "UX/UI Designer at Volopa",
  },
  {
    quote:
      "Omar is a hard working and very serious team player with a very impressive background in the UI/UX field. His ability to deal with multiple projects and produce creative and smart designs was unlike any I\u2019ve seen before.",
    name: "Antonio Di Mariano",
    role: "Senior Python Developer at SoftwareOne",
  },
  {
    quote:
      "A true artist with great ideas: can turn a bunch of lines of code into a true piece of art. Really funny to work with and we formed a great team together.",
    name: "Alessandro Scuderi",
    role: "Storyteller & Copywriter",
  },
  {
    quote:
      "Excellent skills in UI/UX design and great taste in graphics and logo design. Built high quality Photoshop & Illustrator templates with HTML, CSS & Javascript.",
    name: "Enrico Tuttobene",
    role: "Full Stack Developer at Automattic",
  },
]

export function TestimonialsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
              Testimonials
            </p>
            <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
              What professionals I worked with say about me
            </h2>
          </div>
        </FadeIn>

        {/* Testimonials grid */}
        <StaggerChildren
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          staggerDelay={100}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-lift flex flex-col rounded-xl border border-border bg-card p-6"
            >
              <Quote className="mb-4 size-5 text-primary/40" />
              <blockquote className="mb-6 flex-1 leading-relaxed text-muted-foreground italic">
                {`"${t.quote}"`}
              </blockquote>
              <div>
                <p className="font-semibold text-card-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </StaggerChildren>

        {/* Subtle reference link */}
        <FadeIn delay={300}>
          <div className="mt-12 text-center">
            <Link
              href="/references"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Share your experience working with me
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
