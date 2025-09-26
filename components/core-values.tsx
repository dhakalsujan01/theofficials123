"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Users, Building } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
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
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
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
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Comprehensive Solutions
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            Tailored services designed to meet the unique needs of universities, agents, and students in the global
            education ecosystem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl border-2 ${service.borderColor} p-8 card-lift group ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${0.6 + index * 0.2}s` }}
            >
              {/* Icon and Category */}
              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.category}</h3>
              </div>

              {/* Services List */}
              <div className="space-y-4 mb-8">
                {service.services.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Link href={service.href}>
                  <Button
                    className={`bg-gradient-to-r ${service.color} hover:shadow-lg text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 btn-press`}
                  >
                    {service.cta}
                  </Button>
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <service.icon className="w-16 h-16 text-gray-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "1.2s" }}
        >
          <div className="group">
            <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">98%</div>
            <div className="text-gray-600">University Satisfaction Rate</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
              24/7
            </div>
            <div className="text-gray-600">Global Support Coverage</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
              15+
            </div>
            <div className="text-gray-600">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  )
}
