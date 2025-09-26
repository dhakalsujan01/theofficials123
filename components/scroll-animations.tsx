"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale" | "staggered"
  delay?: number
  staggerDelay?: number
}

export function ScrollAnimation({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  staggerDelay = 100,
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            if (animation === "staggered") {
              const children = entry.target.children
              Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add("in-view")
                }, index * staggerDelay)
              })
            } else {
              entry.target.classList.add("in-view")
            }
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
  }, [delay, animation, staggerDelay])

  const animationClass = {
    "fade-up": "scroll-animate",
    "slide-left": "scroll-animate-left",
    "slide-right": "scroll-animate-right",
    scale: "scroll-animate-scale",
    staggered: "scroll-animate-staggered",
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

export function usePageTransition() {
  useEffect(() => {
    const handleRouteChange = () => {
      document.body.classList.add("page-transition")
      setTimeout(() => {
        document.body.classList.remove("page-transition")
      }, 300)
    }

    // Listen for navigation events
    window.addEventListener("beforeunload", handleRouteChange)

    return () => {
      window.removeEventListener("beforeunload", handleRouteChange)
    }
  }, [])
}
