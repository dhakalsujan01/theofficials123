"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plane } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [animationStarted, setAnimationStarted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const planeRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    setMounted(true)
    // Start animation sequence after component mounts
    const timer = setTimeout(() => {
      setAnimationStarted(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

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

  // Parallax transform calculations
  const getParallaxTransform = (intensity: number) => {
    const x = (mousePosition.x - 0.5) * intensity
    const y = (mousePosition.y - 0.5) * intensity
    return `translate(${x}px, ${y}px)`
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

        {/* Mid Layer: Stylized World Map */}
        <div
          className="absolute inset-0 opacity-20 transition-transform duration-300 ease-out"
          style={{
            backgroundImage: `url('/stylized-world-map-semi-transparent-overlay.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: getParallaxTransform(-5),
          }}
        />
      </div>

      {/* Animated Flight Path */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          <defs>
            <path id="flightPath" d="M 200,800 Q 600,200 1000,400 T 1720,300" fill="none" />
          </defs>

          {/* Animated Dotted Line */}
          <path
            ref={pathRef}
            d="M 200,800 Q 600,200 1000,400 T 1720,300"
            fill="none"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="3"
            strokeDasharray="10,10"
            className={animationStarted ? "animate-draw-line" : "opacity-0"}
          />
        </svg>

        {/* Animated Airplane */}
        <div
          ref={planeRef}
          className={`absolute ${animationStarted ? "animate-fly-plane" : "opacity-0"}`}
          style={{
            offsetPath: "path('M 200,800 Q 600,200 1000,400 T 1720,300')",
            offsetRotate: "auto",
          }}
        >
          <div className="w-8 h-8 text-white">
            <Plane className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Floating Parallax Elements */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full animate-parallax-float"
        style={{ transform: getParallaxTransform(15) }}
      />
      <div
        className="absolute bottom-32 right-16 w-16 h-16 bg-green-500/30 rounded-full animate-parallax-float"
        style={{
          transform: getParallaxTransform(-10),
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute top-1/3 right-20 w-12 h-12 bg-blue-400/40 rounded-full animate-parallax-float"
        style={{
          transform: getParallaxTransform(8),
          animationDelay: "4s",
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
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xl px-10 py-6 font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-full btn-hover btn-press"
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

          {/* Quick Stats with Counter Animation */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto ${animationStarted ? "animate-staggered-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "5.5s" }}
          >
            <div className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 card-lift">
              <div
                className={`text-5xl md:text-6xl font-bold text-green-400 mb-3 group-hover:scale-110 transition-transform ${animationStarted ? "animate-counter-up" : "opacity-0"}`}
                style={{ animationDelay: "6s" }}
              >
                35+
              </div>
              <div className="text-white/90 text-lg md:text-xl font-medium">UK Universities</div>
            </div>

            <div className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 card-lift">
              <div
                className={`text-5xl md:text-6xl font-bold text-green-400 mb-3 group-hover:scale-110 transition-transform ${animationStarted ? "animate-counter-up" : "opacity-0"}`}
                style={{ animationDelay: "6.2s" }}
              >
                1500+
              </div>
              <div className="text-white/90 text-lg md:text-xl font-medium">Agents Globally</div>
            </div>

            <div className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 card-lift">
              <div
                className={`text-5xl md:text-6xl font-bold text-green-400 mb-3 group-hover:scale-110 transition-transform ${animationStarted ? "animate-counter-up" : "opacity-0"}`}
                style={{ animationDelay: "6.4s" }}
              >
                3
              </div>
              <div className="text-white/90 text-lg md:text-xl font-medium">Global Offices</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
