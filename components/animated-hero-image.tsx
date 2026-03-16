"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

const IMAGES = [
  "/images/hero-animated-1.png",
  "/images/hero-animated-2.png",
  "/images/hero-animated-3.png",
]

const IMAGE_DURATION = 4000
const TRANSITION_DURATION = 900

export function AnimatedHeroImage({ alt }: { alt: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length)
    }, IMAGE_DURATION + TRANSITION_DURATION)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [mounted])

  return (
    <div className="relative w-full h-full">
      <style>{`
        .hero-img-container {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        .hero-img-container.active {
          opacity: 1;
        }
        @media (min-width: 768px) {
          .hero-img-container {
            filter: blur(12px);
            transition: opacity ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1),
                        filter ${TRANSITION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1);
          }
          .hero-img-container.active {
            filter: blur(0px);
          }
        }
      `}</style>
      {IMAGES.map((src, index) => (
        <div
          key={index}
          className={`hero-img-container ${index === currentIndex ? "active" : ""}`}
        >
          <Image
            src={src}
            alt={`${alt} ${index + 1}`}
            fill
            className="object-contain"
            priority={index === 0}
            quality={85}
          />
        </div>
      ))}
    </div>
  )
}
