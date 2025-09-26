"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Send, Award, Globe, Users, GraduationCap } from "lucide-react"

export function EnhancedFooter() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  const offices = [
    {
      location: "Nepal",
      address: "Kathmandu, Nepal",
      phone: "+977-9805869216",
      email: "nepal@theofficials.com",
    },
    {
      location: "London",
      address: "London, United Kingdom",
      phone: "+44-20-XXXXXXX",
      email: "london@theofficials.com",
    },
    {
      location: "Dubai",
      address: "Dubai, UAE",
      phone: "+971-4-XXXXXXX",
      email: "dubai@theofficials.com",
    },
  ]

  const certifications = [
    { name: "British Council", logo: "/placeholder.svg?height=40&width=120&text=British+Council" },
    { name: "ICEF", logo: "/placeholder.svg?height=40&width=120&text=ICEF" },
    { name: "PIER", logo: "/placeholder.svg?height=40&width=120&text=PIER" },
    { name: "AIRC", logo: "/placeholder.svg?height=40&width=120&text=AIRC" },
  ]

  const universityLogos = [
    "/placeholder.svg?height=30&width=100&text=Oxford",
    "/placeholder.svg?height=30&width=100&text=Cambridge",
    "/placeholder.svg?height=30&width=100&text=Imperial",
    "/placeholder.svg?height=30&width=100&text=UCL",
    "/placeholder.svg?height=30&width=100&text=Kings",
    "/placeholder.svg?height=30&width=100&text=Edinburgh",
    "/placeholder.svg?height=30&width=100&text=Manchester",
    "/placeholder.svg?height=30&width=100&text=Warwick",
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Newsletter Signup Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Stay Connected with THE OFFICIALS</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get exclusive insights on global education trends, university partnerships, and recruitment opportunities.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button
                type="submit"
                className="bg-accent text-accent-foreground hover:bg-accent/90 px-6"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <Award className="w-4 h-4 mr-2" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Subscribe
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" />
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about#leadership"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Leadership
                </Link>
              </li>
              <li>
                <Link
                  href="/about#values"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Values
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Our Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/partner#universities"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  For Universities
                </Link>
              </li>
              <li>
                <Link
                  href="/partner#agents"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  For Agents
                </Link>
              </li>
              <li>
                <Link
                  href="/services/technology"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Technology Support
                </Link>
              </li>
              <li>
                <Link
                  href="/services/compliance"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Compliance Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              Destinations
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/destinations?country=uk"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  United Kingdom
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations?country=canada"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Canada
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations?country=australia"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Australia
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations?country=usa"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  United States
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-lg mb-4 flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Global Offices
            </h4>
            <div className="space-y-4">
              {offices.map((office, index) => (
                <div key={index} className="text-sm">
                  <p className="font-medium text-accent">{office.location}</p>
                  <p className="text-primary-foreground/80 text-xs">{office.address}</p>
                  {office.location === "Nepal" && <p className="text-primary-foreground/80 text-xs">{office.phone}</p>}
                </div>
              ))}
              <Link
                href="/contact"
                className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-accent/90 transition-colors mt-4"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Trust & Credibility Section */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-8">
          {/* Certifications */}
          <div className="mb-8">
            <h5 className="text-center text-sm font-medium text-primary-foreground/80 mb-4">Certified & Trusted By</h5>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-primary-foreground/10 p-3 rounded-lg">
                  <Image
                    src={cert.logo || "/placeholder.svg"}
                    alt={cert.name}
                    width={120}
                    height={40}
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* University Partners Carousel */}
          <div className="mb-8">
            <h5 className="text-center text-sm font-medium text-primary-foreground/80 mb-4">
              Trusted University Partners
            </h5>
            <div className="overflow-hidden">
              <div className="flex animate-scroll gap-8 items-center">
                {[...universityLogos, ...universityLogos].map((logo, index) => (
                  <div key={index} className="flex-shrink-0">
                    <Image
                      src={logo || "/placeholder.svg"}
                      alt={`University partner ${index + 1}`}
                      width={100}
                      height={30}
                      className="opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright and Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-primary-foreground/20 text-sm text-primary-foreground/60">
            <p>&copy; 2025 THE OFFICIALS. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary-foreground transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/cookies" className="hover:text-primary-foreground transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
