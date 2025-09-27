"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Users, Building } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "./scroll-animations"

export function CoreValues() {
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

  const services = [
    {
      category: "For Universities",
      icon: Building,
      color: "from-primary to-primary/80",
      bgColor: "bg-primary/5",
      borderColor: "border-primary/20",
      services: [
        "Global Agent Network Access",
        "Student Recruitment Campaigns",
        "Market Intelligence & Analytics",
        "Compliance & Quality Assurance",
        "Brand Positioning Support",
      ],
      cta: "Partner With Us",
      href: "/partner",
    },
    {
      category: "For Agents",
      icon: Users,
      color: "from-accent to-accent/80",
      bgColor: "bg-accent/5",
      borderColor: "border-accent/20",
      services: [
        "University Partnership Access",
        "Training & Certification Programs",
        "Marketing Materials & Support",
        "Commission Management",
        "Technology Platform Access",
      ],
      cta: "Join Network",
      href: "/partner",
    },
    {
      category: "For Students",
      icon: GraduationCap,
      color: "from-destructive to-destructive/80",
      bgColor: "bg-destructive/5",
      borderColor: "border-destructive/20",
      services: [
        "University Matching Service",
        "Application Support",
        "Visa Guidance",
        "Scholarship Information",
        "Pre-departure Orientation",
      ],
      cta: "Get Started",
      href: "/contact",
    },
  ]

  return (
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation animation="choreographed" className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Comprehensive Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Tailored services designed to meet the unique needs of universities, agents, and students in the global
            education ecosystem.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="choreographed" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-2xl border-2 ${service.borderColor} p-8 card-lift group hover:border-primary/30 transition-all duration-500`}
            >
              {/* Icon and Category */}
              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{service.category}</h3>
              </div>

              {/* Services List */}
              <div className="space-y-4 mb-8">
                {service.services.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3 group/item">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform`}
                    ></div>
                    <span className="text-muted-foreground leading-relaxed group-hover/item:text-foreground transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link href={service.href}>
                  <Button
                    className={`bg-gradient-to-r ${service.color} hover:shadow-lg text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 btn-hover btn-press`}
                  >
                    {service.cta}
                  </Button>
                </Link>
              </div>

              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-all duration-500 group-hover:rotate-12">
                <service.icon className="w-16 h-16 text-foreground" />
              </div>
            </div>
          ))}
        </ScrollAnimation>

        <ScrollAnimation
          animation="staggered"
          staggerDelay={200}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="group cursor-pointer">
            <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
              98%
            </div>
            <div className="text-muted-foreground group-hover:text-foreground transition-colors">
              University Satisfaction Rate
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
              24/7
            </div>
            <div className="text-muted-foreground group-hover:text-foreground transition-colors">
              Global Support Coverage
            </div>
          </div>
          <div className="group cursor-pointer">
            <div className="text-4xl font-bold text-destructive mb-2 group-hover:scale-110 transition-transform duration-300">
              15+
            </div>
            <div className="text-muted-foreground group-hover:text-foreground transition-colors">
              Years of Excellence
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
