"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale"
  delay?: number
}

export function ScrollAnimation({ children, className = "", animation = "fade-up", delay = 0 }: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("in-view")
          }, delay)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClass = {
    "fade-up": "scroll-animate",
    "slide-left": "scroll-animate-left",
    "slide-right": "scroll-animate-right",
    scale: "scroll-animate-scale",
  }[animation]

  return (
    <div ref={elementRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}

// Hook for manual scroll animations
export function useScrollAnimation() {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return elementRef
}
