"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, MapPin, Users, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DestinationsShowcase() {
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

  const destinations = [
    {
      country: "United Kingdom",
      flag: "🇬🇧",
      image: "/placeholder.svg?height=400&width=600&text=UK+Universities",
      universities: "35+",
      students: "12,000+",
      highlights: ["World-class education", "Rich cultural heritage", "Global recognition", "Research excellence"],
      description:
        "Home to some of the world's oldest and most prestigious universities, offering unparalleled academic excellence.",
    },
    {
      country: "Canada",
      flag: "🇨🇦",
      image: "/placeholder.svg?height=400&width=600&text=Canada+Universities",
      universities: "25+",
      students: "8,500+",
      highlights: ["Multicultural society", "High quality of life", "Post-study work options", "Affordable education"],
      description:
        "Known for its welcoming environment and high-quality education system with excellent post-graduation opportunities.",
    },
    {
      country: "Australia",
      flag: "🇦🇺",
      image: "/placeholder.svg?height=400&width=600&text=Australia+Universities",
      universities: "20+",
      students: "6,200+",
      highlights: ["Innovation hub", "Beautiful landscapes", "Strong economy", "Work-study balance"],
      description:
        "A leading destination for international students with world-renowned universities and vibrant student life.",
    },
    {
      country: "United States",
      flag: "🇺🇸",
      image: "/placeholder.svg?height=400&width=600&text=USA+Universities",
      universities: "15+",
      students: "4,800+",
      highlights: ["Ivy League institutions", "Research opportunities", "Diverse programs", "Career prospects"],
      description: "The global leader in higher education with unmatched research facilities and career opportunities.",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Global Destinations
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            Discover world-class education opportunities across our premium destination countries, each offering unique
            advantages for international students.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 card-lift ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Image with Hover Zoom Effect */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${destination.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Country Flag and Name Overlay */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center space-x-3 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <span className="text-2xl">{destination.flag}</span>
                    <span className="font-bold text-gray-900">{destination.country}</span>
                  </div>
                </div>

                {/* Stats Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex justify-between items-end">
                    <div className="flex space-x-6">
                      <div className="text-white">
                        <div className="flex items-center space-x-2 mb-1">
                          <GraduationCap className="w-4 h-4" />
                          <span className="text-sm opacity-90">Universities</span>
                        </div>
                        <div className="text-2xl font-bold">{destination.universities}</div>
                      </div>
                      <div className="text-white">
                        <div className="flex items-center space-x-2 mb-1">
                          <Users className="w-4 h-4" />
                          <span className="text-sm opacity-90">Students Placed</span>
                        </div>
                        <div className="text-2xl font-bold">{destination.students}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed">{destination.description}</p>

                {/* Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {destination.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link href={`/destinations/${destination.country.toLowerCase().replace(" ", "-")}`}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 bg-transparent"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Explore {destination.country}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "1.4s" }}
        >
          <Link href="/destinations">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              View All Destinations
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
