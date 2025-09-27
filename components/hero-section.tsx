"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plane } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [animationStarted, setAnimationStarted] = useState(false)
  const [countersStarted, setCountersStarted] = useState(false)
  const [universityCount, setUniversityCount] = useState(0)
  const [agentCount, setAgentCount] = useState(0)
  const [officeCount, setOfficeCount] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)
  const planeRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    setMounted(true)
    // Start animation sequence after component mounts
    const timer = setTimeout(() => {
      setAnimationStarted(true)
    }, 500)

    const counterTimer = setTimeout(() => {
      setCountersStarted(true)
    }, 6000)

    return () => {
      clearTimeout(timer)
      clearTimeout(counterTimer)
    }
  }, [])

  useEffect(() => {
    if (!countersStarted) return

    // Animate university count to 35
    const universityInterval = setInterval(() => {
      setUniversityCount((prev) => {
        if (prev >= 35) {
          clearInterval(universityInterval)
          return 35
        }
        return prev + 1
      })
    }, 50)

    // Animate agent count to 1500
    const agentInterval = setInterval(() => {
      setAgentCount((prev) => {
        if (prev >= 1500) {
          clearInterval(agentInterval)
          return 1500
        }
        return prev + 50
      })
    }, 30)

    // Animate office count to 3
    const officeInterval = setInterval(() => {
      setOfficeCount((prev) => {
        if (prev >= 3) {
          clearInterval(officeInterval)
          return 3
        }
        return prev + 1
      })
    }, 200)

    return () => {
      clearInterval(universityInterval)
      clearInterval(agentInterval)
      clearInterval(officeInterval)
    }
  }, [countersStarted])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove)
      return () => heroElement.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const getParallaxTransform = (intensity: number) => {
    const x = (mousePosition.x - 0.5) * intensity
    const y = (mousePosition.y - 0.5) * intensity
    return `translate(${x}px, ${y}px)`
  }

  const getWorldMapTransform = () => {
    const x = (mousePosition.x - 0.5) * -8
    const y = (mousePosition.y - 0.5) * -8
    const rotateX = (mousePosition.y - 0.5) * 5
    const rotateY = (mousePosition.x - 0.5) * -5
    return `translate(${x}px, ${y}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Multi-layered Background */}
      <div className="absolute inset-0">
        {/* Base Layer: University Architecture Photo */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `url('/modern-iconic-university-architecture-professional.jpg')`,
            transform: getParallaxTransform(10),
          }}
        />

        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />

        <div
          className="absolute inset-0 opacity-30 transition-all duration-500 ease-out"
          style={{
            backgroundImage: `url('/stylized-world-map-semi-transparent-overlay.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: getWorldMapTransform(),
            transformStyle: "preserve-3d",
          }}
        />

        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full animate-pulse"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
              animation: "parallaxFloat 12s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Enhanced Animated Flight Path */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <path id="flightPath" d="M 200,800 Q 600,200 1000,400 T 1720,300" fill="none" />
            <linearGradient id="flightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
            </linearGradient>
          </defs>

          <path
            ref={pathRef}
            d="M 200,800 Q 600,200 1000,400 T 1720,300"
            fill="none"
            stroke="url(#flightGradient)"
            strokeWidth="4"
            strokeDasharray="15,10"
            className={animationStarted ? "animate-draw-line" : "opacity-0"}
          />
        </svg>

        {/* Enhanced Animated Airplane */}
        <div
          ref={planeRef}
          className={`absolute ${animationStarted ? "animate-fly-plane" : "opacity-0"}`}
          style={{
            offsetPath: "path('M 200,800 Q 600,200 1000,400 T 1720,300')",
            offsetRotate: "auto",
          }}
        >
          <div className="w-10 h-10 text-white drop-shadow-lg">
            <Plane className="w-full h-full" />
          </div>
        </div>
      </div>

      <div
        className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-parallax-float"
        style={{ transform: getParallaxTransform(15) }}
      />
      <div
        className="absolute bottom-32 right-16 w-16 h-16 bg-accent/30 rounded-full animate-parallax-float"
        style={{
          transform: getParallaxTransform(-10),
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute top-1/3 right-20 w-12 h-12 bg-primary/40 rounded-full animate-parallax-float"
        style={{
          transform: getParallaxTransform(8),
          animationDelay: "4s",
        }}
      />
      <div
        className="absolute top-1/4 left-1/4 w-8 h-8 bg-accent/25 rounded-full animate-parallax-float"
        style={{
          transform: getParallaxTransform(12),
          animationDelay: "1s",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-primary/30 rounded-full animate-parallax-float"
        style={{
          transform: getParallaxTransform(-6),
          animationDelay: "3s",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Main Headline */}
          <div className="mb-8">
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance leading-tight ${animationStarted ? "animate-staggered-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "3.5s" }}
            >
              Let's Work Together
            </h1>
            <h2
              className={`text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-8 text-balance leading-tight ${animationStarted ? "animate-staggered-fade-in" : "opacity-0"}`}
              style={{ animationDelay: "4s" }}
            >
              And <span className="text-shimmer">Grow Together</span>
            </h2>
          </div>

          {/* Enhanced subtitle */}
          <p
            className={`text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-4xl mx-auto text-pretty font-light leading-relaxed ${animationStarted ? "animate-staggered-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "4.5s" }}
          >
            Premium B2B student recruitment platform connecting universities with trusted agents worldwide for
            educational excellence.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 ${animationStarted ? "animate-staggered-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "5s" }}
          >
            <Link href="/partner">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white text-xl px-10 py-6 font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-full btn-hover btn-press"
              >
                Partner With Us
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/destinations">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-2 border-white/80 hover:bg-white hover:text-primary text-xl px-10 py-6 bg-white/10 backdrop-blur-sm font-bold rounded-full transition-all duration-300 hover:scale-105 btn-press"
              >
                Explore Destinations
              </Button>
            </Link>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto ${animationStarted ? "animate-staggered-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "5.5s" }}
          >
            <div className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 card-lift">
              <div
                className={`text-5xl md:text-6xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform ${countersStarted ? "animate-counter-up" : "opacity-0"}`}
                style={{ animationDelay: "6s" }}
              >
                {universityCount}+
              </div>
              <div className="text-white/90 text-lg md:text-xl font-medium">UK Universities</div>
            </div>

            <div className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 card-lift">
              <div
                className={`text-5xl md:text-6xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform ${countersStarted ? "animate-counter-up" : "opacity-0"}`}
                style={{ animationDelay: "6.2s" }}
              >
                {agentCount.toLocaleString()}+
              </div>
              <div className="text-white/90 text-lg md:text-xl font-medium">Agents Globally</div>
            </div>

            <div className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 card-lift">
              <div
                className={`text-5xl md:text-6xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform ${countersStarted ? "animate-counter-up" : "opacity-0"}`}
                style={{ animationDelay: "6.4s" }}
              >
                {officeCount}
              </div>
              <div className="text-white/90 text-lg md:text-xl font-medium">Global Offices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
