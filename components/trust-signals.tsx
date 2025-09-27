"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function TrustSignals() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const partnerLogos = [
    { name: "University of Oxford", logo: "/university-of-oxford-logo-minimalist-professional.jpg" },
    { name: "University of Cambridge", logo: "/university-of-cambridge-logo-minimalist-profession.jpg" },
    { name: "Imperial College London", logo: "/imperial-college-london-logo-minimalist-profession.jpg" },
    { name: "University College London", logo: "/ucl-university-college-london-logo-minimalist-prof.jpg" },
    { name: "King's College London", logo: "/kings-college-london-logo-minimalist-professional.jpg" },
    { name: "University of Edinburgh", logo: "/university-of-edinburgh-logo-minimalist-profession.jpg" },
    { name: "University of Manchester", logo: "/university-of-manchester-logo-minimalist-professio.jpg" },
    { name: "University of Warwick", logo: "/university-of-warwick-logo-minimalist-professional.jpg" },
    { name: "BBC Education", logo: "/bbc-education-logo-minimalist-professional.jpg" },
    { name: "Times Higher Education", logo: "/placeholder.svg?height=60&width=120" },
    { name: "QS World Rankings", logo: "/placeholder.svg?height=60&width=120" },
    { name: "British Council", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University of Bristol", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University of Glasgow", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University of Birmingham", logo: "/placeholder.svg?height=60&width=120" },
    { name: "University of Leeds", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-secondary to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-foreground mb-6 ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Trusted By The Best
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            Leading universities and media organizations worldwide trust THE OFFICIALS for premium student recruitment
            services.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {partnerLogos.map((partner, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ minWidth: "160px" }}
              >
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 group">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partnerLogos.map((partner, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                style={{ minWidth: "160px" }}
              >
                <div className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 group">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={`mt-16 text-center ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm font-medium">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm font-medium">ICEF Quality Network</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-destructive rounded-full"></div>
              <span className="text-sm font-medium">British Council Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
