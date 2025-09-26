"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Play, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const heroImages = [
  "/students-studying-abroad.png",
  "/university-campus-with-international-students.jpg",
  "/graduation-ceremony-with-diverse-students.jpg",
  "/modern-university-library.png",
]

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [showVideo, setShowVideo] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setMounted(true)
    // Auto-advance carousel
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        {showVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setShowVideo(false)}
          >
            <source src="/videos/education-hero.mp4" type="video/mp4" />
            <source src="/videos/education-hero.webm" type="video/webm" />
          </video>
        ) : (
          <div className="relative w-full h-full">
            {/* Image Carousel */}
            <div className="absolute inset-0">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url('${image}')` }}
                />
              ))}
            </div>

            {/* Carousel Controls */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-accent/80"></div>
      </div>

      {!showVideo && (
        <button
          onClick={() => setShowVideo(true)}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all duration-300 hover:scale-110 group"
        >
          <Play className="w-12 h-12 text-white ml-1 group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Auto-start video after 3 seconds */}
      {!showVideo && mounted && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="animate-ping absolute inline-flex h-32 w-32 rounded-full bg-white/20"></div>
        </div>
      )}

      {/* Floating Elements with enhanced animations */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
      <div
        className="absolute bottom-32 right-16 w-16 h-16 bg-accent/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/3 right-20 w-12 h-12 bg-accent/40 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
      <div
        className="absolute top-1/4 left-1/4 w-8 h-8 bg-primary-foreground/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-accent/25 rounded-full animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 text-balance leading-tight">
              Let's Work Together
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-balance leading-tight">
              Your Journey to{" "}
              <span className="text-accent bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent animate-pulse">
                Global Education
              </span>{" "}
              Starts Here
            </h2>
          </div>

          {/* Enhanced subtitle with better spacing */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-12 max-w-4xl mx-auto text-pretty font-light leading-relaxed">
            And grow together. Connecting universities with trusted recruitment agents worldwide for educational
            excellence.
          </p>

          {/* Enhanced CTA buttons with better styling and spacing */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/partner">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white text-xl px-10 py-6 font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 rounded-full"
              >
                Partner With Us
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/destinations">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-2 border-white/80 hover:bg-white hover:text-primary text-xl px-10 py-6 bg-white/10 backdrop-blur-sm font-bold rounded-full transition-all duration-300 hover:scale-105"
              >
                Explore Destinations
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:bg-white/20 text-xl px-10 py-6 font-bold backdrop-blur-sm rounded-full transition-all duration-300 hover:scale-105"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Free Consultation
              </Button>
            </Link>
          </div>

          {/* Enhanced Quick Stats with better visual hierarchy */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                35+
              </div>
              <div className="text-white/90 text-base md:text-lg font-medium">UK Universities</div>
            </div>
            <div className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                1500+
              </div>
              <div className="text-white/90 text-base md:text-lg font-medium">Global Agents</div>
            </div>
            <div className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                25K+
              </div>
              <div className="text-white/90 text-base md:text-lg font-medium">Students Placed</div>
            </div>
            <div className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                15+
              </div>
              <div className="text-white/90 text-base md:text-lg font-medium">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
