"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { AppointmentModal } from "@/components/appointment-modal"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAppointmentModal, setShowAppointmentModal] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary via-accent to-primary rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">F</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">E</span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary font-bold text-xl leading-tight">Franklin Education</span>
                  <span className="text-accent font-semibold text-sm">Consultancy</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/partner"
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                Partner With Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/destinations"
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                Destinations
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
              <Button
                onClick={() => setShowAppointmentModal(true)}
                className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
              >
                Book Appointment
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="hover:bg-primary/10">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200/20 rounded-b-lg shadow-lg">
                <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary">
                  Home
                </Link>
                <Link href="/about" className="block px-3 py-2 text-foreground hover:text-primary">
                  About Us
                </Link>
                <Link href="/partner" className="block px-3 py-2 text-foreground hover:text-primary">
                  Partner With Us
                </Link>
                <Link href="/destinations" className="block px-3 py-2 text-foreground hover:text-primary">
                  Destinations
                </Link>
                <Link href="/contact" className="block px-3 py-2 text-foreground hover:text-primary">
                  Contact
                </Link>
                <div className="px-3 py-2">
                  <Button
                    onClick={() => setShowAppointmentModal(true)}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Book Appointment
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
