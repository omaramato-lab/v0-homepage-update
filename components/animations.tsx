"use client"

import { useInView } from "@/hooks/use-animations"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 700,
}: FadeInProps) {
  const { ref, isInView } = useInView()

  const directionStyles = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isInView ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${directionStyles[direction]}`,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

interface StaggerChildrenProps {
  children: React.ReactNode[]
  className?: string
  childClassName?: string
  delay?: number
  staggerDelay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function StaggerChildren({
  children,
  className,
  childClassName,
  delay = 0,
  staggerDelay = 120,
  direction = "up",
}: StaggerChildrenProps) {
  const { ref, isInView } = useInView()

  const directionStyles = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <div
          key={i}
          className={cn(
            "transition-all duration-700 ease-out",
            isInView ? "translate-x-0 translate-y-0 opacity-100" : `opacity-0 ${directionStyles[direction]}`,
            childClassName
          )}
          style={{
            transitionDelay: `${delay + i * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
