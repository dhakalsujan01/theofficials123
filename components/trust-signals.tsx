"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Users, GraduationCap, Globe, Award, TrendingUp, CheckCircle } from "lucide-react"

export function TrustSignals() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    agents: 0,
    universities: 0,
    students: 0,
    countries: 0,
  })
  const sectionRef = useRef<HTMLDivElement>(null)

  const finalCounts = {
    agents: 1500,
    universities: 35,
    students: 25000,
    countries: 15,
  }

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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounts({
          agents: Math.floor(finalCounts.agents * progress),
          universities: Math.floor(finalCounts.universities * progress),
          students: Math.floor(finalCounts.students * progress),
          countries: Math.floor(finalCounts.countries * progress),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounts(finalCounts)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const stats = [
    {
      icon: Users,
      count: counts.agents,
      suffix: "+",
      label: "Global Agents",
      description: "Trusted recruitment partners worldwide",
      color: "text-accent",
    },
    {
      icon: GraduationCap,
      count: counts.universities,
      suffix: "+",
      label: "UK Universities",
      description: "Premier institution partnerships",
      color: "text-primary",
    },
    {
      icon: TrendingUp,
      count: counts.students,
      suffix: "+",
      label: "Students Placed",
      description: "Successful placements annually",
      color: "text-accent",
    },
    {
      icon: Globe,
      count: counts.countries,
      suffix: "+",
      label: "Countries",
      description: "Global presence and reach",
      color: "text-primary",
    },
  ]

  const certifications = [
    {
      name: "British Council",
      logo: "/british-council-certification.jpg",
      description: "Certified Education Agent",
    },
    {
      name: "ICEF",
      logo: "/icef-membership-logo.jpg",
      description: "Quality Network Member",
    },
    {
      name: "PIER",
      logo: "/pier-certification.jpg",
      description: "Professional Standards",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Trust Statistics */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            <Award className="w-4 h-4 mr-2" />
            Trusted Globally
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Building Trust Through Excellence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself. Join thousands of satisfied partners in our global education network.
          </p>
        </div>

        {/* Animated Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className={`p-6 text-center card-hover border-2 border-transparent hover:border-accent/20 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 mb-4`}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.count.toLocaleString()}
                {stat.suffix}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>

        {/* Certifications and Memberships */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-primary mb-8">Certified & Accredited</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 card-hover bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="flex flex-col items-center">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.name}
                    width={120}
                    height={60}
                    className="mb-3 opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <h4 className="font-medium text-foreground mb-1">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground text-center">{cert.description}</p>
                  <CheckCircle className="w-4 h-4 text-accent mt-2" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
