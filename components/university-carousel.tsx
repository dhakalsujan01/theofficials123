"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ScrollAnimation } from "@/components/scroll-animations"

const universities = [
  {
    name: "University of Oxford",
    logo: "/university-of-oxford-logo.jpg",
  },
  {
    name: "University of Cambridge",
    logo: "/cambridge-university-logo.png",
  },
  {
    name: "Imperial College London",
    logo: "/imperial-college-london-logo.jpg",
  },
  {
    name: "University College London",
    logo: "/ucl-logo.jpg",
  },
  {
    name: "King's College London",
    logo: "/king-s-college-london-logo.jpg",
  },
  {
    name: "University of Edinburgh",
    logo: "/university-of-edinburgh-logo.png",
  },
  {
    name: "University of Manchester",
    logo: "/university-of-manchester-logo.png",
  },
  {
    name: "University of Warwick",
    logo: "/university-of-warwick-logo.jpg",
  },
]

export function UniversityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % universities.length)
    }, 4000) // Slower transition for better readability

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Leading Universities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We partner with prestigious institutions across the UK to provide students with world-class education
              opportunities.
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 4)}%)` }}
            >
              {universities.concat(universities).map((university, index) => (
                <div key={index} className="flex-shrink-0 w-1/4 px-4">
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 text-center h-32 flex flex-col items-center justify-center card-hover group">
                    <div className="mb-3 opacity-80 group-hover:opacity-100 transition-opacity">
                      <Image
                        src={university.logo || "/placeholder.svg"}
                        alt={university.name}
                        width={120}
                        height={40}
                        className="max-h-10 w-auto object-contain"
                      />
                    </div>
                    <span className="font-medium text-foreground text-xs leading-tight group-hover:text-primary transition-colors">
                      {university.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {universities.slice(0, 4).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    Math.floor(currentIndex / 2) === index
                      ? "bg-accent w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
