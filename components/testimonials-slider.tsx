"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSlider() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const testimonials = [
    {
      type: "University",
      name: "Dr. Sarah Mitchell",
      position: "International Admissions Director",
      institution: "University of Edinburgh",
      image: "/placeholder.svg?height=80&width=80&text=SM",
      rating: 5,
      quote:
        "THE OFFICIALS has transformed our international recruitment strategy. Their professional approach and extensive agent network have helped us achieve a 40% increase in quality applications from diverse markets.",
    },
    {
      type: "Agent",
      name: "Rajesh Sharma",
      position: "Senior Education Consultant",
      institution: "Global Education Partners, India",
      image: "/placeholder.svg?height=80&width=80&text=RS",
      rating: 5,
      quote:
        "Working with THE OFFICIALS has been exceptional. Their comprehensive support, training programs, and university partnerships have enabled us to provide the best guidance to our students while growing our business significantly.",
    },
    {
      type: "University",
      name: "Prof. James Wilson",
      position: "Vice-Chancellor",
      institution: "Manchester Metropolitan University",
      image: "/placeholder.svg?height=80&width=80&text=JW",
      rating: 5,
      quote:
        "The quality of students and the professionalism of THE OFFICIALS team is outstanding. They understand our requirements and consistently deliver results that exceed our expectations.",
    },
    {
      type: "Agent",
      name: "Maria Rodriguez",
      position: "Director",
      institution: "StudyAbroad Solutions, Mexico",
      image: "/placeholder.svg?height=80&width=80&text=MR",
      rating: 5,
      quote:
        "THE OFFICIALS provides unmatched support and resources. Their technology platform and dedicated account management have streamlined our operations and improved our success rates dramatically.",
    },
    {
      type: "University",
      name: "Dr. Emily Chen",
      position: "Head of International Relations",
      institution: "Imperial College London",
      image: "/placeholder.svg?height=80&width=80&text=EC",
      rating: 5,
      quote:
        "Their deep understanding of global markets and commitment to quality has made THE OFFICIALS our preferred recruitment partner. The results speak for themselves - consistent growth year over year.",
    },
    {
      type: "Agent",
      name: "Ahmed Al-Rashid",
      position: "Managing Director",
      institution: "Middle East Education Hub, UAE",
      image: "/placeholder.svg?height=80&width=80&text=AR",
      rating: 5,
      quote:
        "The partnership with THE OFFICIALS has been transformative for our business. Their comprehensive training, marketing support, and university relationships have positioned us as market leaders.",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            Success Stories
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.4s" }}
          >
            Hear from our trusted university partners and successful agents who have grown their businesses with THE
            OFFICIALS.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 max-w-4xl mx-auto">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8 font-light">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Rating */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <div
                        className="w-16 h-16 rounded-full bg-cover bg-center border-4 border-white shadow-lg"
                        style={{ backgroundImage: `url('${testimonial.image}')` }}
                      />
                      <div className="text-center">
                        <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.position}</div>
                        <div className="text-blue-600 font-medium">{testimonial.institution}</div>
                        <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mt-2">
                          {testimonial.type}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg rounded-full w-12 h-12 p-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg rounded-full w-12 h-12 p-0"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div
          className={`mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center ${isVisible ? "animate-staggered-fade-in" : "opacity-0"}`}
          style={{ animationDelay: "0.8s" }}
        >
          <div className="group">
            <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">98%</div>
            <div className="text-gray-600">Partner Satisfaction Rate</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform">
              4.9/5
            </div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:scale-110 transition-transform">
              500+
            </div>
            <div className="text-gray-600">Success Stories</div>
          </div>
        </div>
      </div>
    </section>
  )
}
