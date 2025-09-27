"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { AppointmentModal } from "@/components/appointment-modal"
import { usePageTransition } from "./scroll-animations"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAppointmentModal, setShowAppointmentModal] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isTransitioning } = usePageTransition()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    if (isOpen) setIsOpen(false)

    // Add page transition effect
    document.body.classList.add("page-transition")
    setTimeout(() => {
      window.location.href = href
    }, 150)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md border-b border-border shadow-lg"
            : "bg-card/80 backdrop-blur-sm border-b border-border/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3" onClick={() => handleNavClick("/")}>
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-primary rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">T</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">O</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary font-bold text-xl leading-tight">THE OFFICIALS</span>
                  <span className="text-accent font-semibold text-sm">Global Education Partners</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium nav-link">
                Home
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium nav-link">
                About Us
              </Link>
              <Link
                href="/partner"
                className="text-foreground hover:text-primary transition-colors font-medium nav-link"
              >
                Partner With Us
              </Link>
              <Link
                href="/destinations"
                className="text-foreground hover:text-primary transition-colors font-medium nav-link"
              >
                Destinations
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium nav-link"
              >
                Contact
              </Link>
              <Button
                onClick={() => setShowAppointmentModal(true)}
                className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 btn-hover btn-press"
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className="hover:bg-primary/10 btn-press"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden animate-in slide-in-from-top-2 duration-300">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card/95 backdrop-blur-md border-t border-border rounded-b-lg shadow-lg">
                <Link
                  href="/"
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                >
                  About Us
                </Link>
                <Link
                  href="/partner"
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                >
                  Partner With Us
                </Link>
                <Link
                  href="/destinations"
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                >
                  Destinations
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                >
                  Contact
                </Link>
                <div className="px-3 py-2">
                  <Button
                    onClick={() => setShowAppointmentModal(true)}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground btn-hover btn-press"
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      <AppointmentModal isOpen={showAppointmentModal} onClose={() => setShowAppointmentModal(false)} />
    </>
  )
}
