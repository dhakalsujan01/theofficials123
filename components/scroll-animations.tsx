"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fade-up" | "slide-left" | "slide-right" | "scale" | "staggered" | "choreographed"
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
            } else if (animation === "choreographed") {
              const children = entry.target.children
              Array.from(children).forEach((child, index) => {
                child.classList.add("choreographed-entrance")
                ;(child as HTMLElement).style.animationDelay = `${index * 0.1}s`
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
    choreographed: "scroll-animate-choreographed", // Added choreographed animation class
  }[animation]

  return (
    <div ref={elementRef} className={`${animationClass} ${className}`}>
      {children}
    </div>
  )
}

export function useScrollAnimation(options?: { threshold?: number; rootMargin?: string }) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view")
        }
      },
      {
        threshold: options?.threshold || 0.1,
        rootMargin: options?.rootMargin || "0px 0px -50px 0px",
      },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [options])

  return elementRef
}

export function usePageTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setIsTransitioning(true)
      document.body.classList.add("page-transition")
    }

    const handleRouteChangeComplete = () => {
      setTimeout(() => {
        setIsTransitioning(false)
        document.body.classList.remove("page-transition")
        document.body.classList.add("page-enter")

        // Remove page-enter class after animation
        setTimeout(() => {
          document.body.classList.remove("page-enter")
        }, 300)
      }, 150)
    }

    // Listen for navigation events
    window.addEventListener("beforeunload", handleRouteChangeStart)
    window.addEventListener("load", handleRouteChangeComplete)

    return () => {
      window.removeEventListener("beforeunload", handleRouteChangeStart)
      window.removeEventListener("load", handleRouteChangeComplete)
    }
  }, [])

  return { isTransitioning }
}

export function useMicrointeractions() {
  const addButtonPress = (element: HTMLElement) => {
    element.classList.add("btn-press")
    element.addEventListener("mousedown", () => {
      element.style.transform = "scale(0.98)"
    })
    element.addEventListener("mouseup", () => {
      element.style.transform = "scale(1)"
    })
    element.addEventListener("mouseleave", () => {
      element.style.transform = "scale(1)"
    })
  }

  const addCardLift = (element: HTMLElement) => {
    element.classList.add("card-lift")
  }

  const addHoverGlow = (element: HTMLElement) => {
    element.addEventListener("mouseenter", () => {
      element.style.boxShadow = "0 8px 25px oklch(0.35 0.15 280 / 0.15)"
    })
    element.addEventListener("mouseleave", () => {
      element.style.boxShadow = ""
    })
  }

  return { addButtonPress, addCardLift, addHoverGlow }
}

export function useParallaxScroll(intensity = 0.5) {
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const scrolled = window.pageYOffset
      const parallax = scrolled * intensity

      elementRef.current.style.transform = `translateY(${parallax}px)`
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [intensity])

  return elementRef
}
