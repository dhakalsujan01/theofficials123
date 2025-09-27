"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone, Mail, Clock, X } from "lucide-react"

const offices = [
  {
    id: "nepal",
    name: "Nepal Office",
    address: "Kathmandu, Nepal",
    contact: "+977 9805869216",
    email: "nepal@theofficials.com",
    hours: "9:00 AM - 6:00 PM NPT",
    coordinates: { lat: 27.7172, lng: 85.324 },
    position: { x: 75, y: 45 }, // Percentage positions on the globe
  },
  {
    id: "london",
    name: "London Office",
    address: "London, United Kingdom",
    contact: "+44-20-7123-4567",
    email: "london@theofficials.com",
    hours: "9:00 AM - 5:00 PM GMT",
    coordinates: { lat: 51.5074, lng: -0.1278 },
    position: { x: 48, y: 35 },
  },
  {
    id: "dubai",
    name: "Dubai Office",
    address: "Dubai, United Arab Emirates",
    contact: "+971-4-123-4567",
    email: "dubai@theofficials.com",
    hours: "9:00 AM - 6:00 PM GST",
    coordinates: { lat: 25.2048, lng: 55.2708 },
    position: { x: 65, y: 50 },
  },
]

export function Interactive3DGlobe() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null)
  const [autoRotate, setAutoRotate] = useState(true)
  const globeRef = useRef<HTMLDivElement>(null)
  const dragStart = useRef({ x: 0, y: 0 })
  const rotationStart = useRef({ x: 0, y: 0 })

  // Auto-rotation effect
  useEffect(() => {
    if (!autoRotate || isDragging) return

    const interval = setInterval(() => {
      setRotation((prev) => ({
        ...prev,
        y: prev.y + 0.5,
      }))
    }, 50)

    return () => clearInterval(interval)
  }, [autoRotate, isDragging])

  // Mouse interaction handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setAutoRotate(false)
    dragStart.current = { x: e.clientX, y: e.clientY }
    rotationStart.current = { ...rotation }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return

    const deltaX = e.clientX - dragStart.current.x
    const deltaY = e.clientY - dragStart.current.y

    setRotation({
      x: Math.max(-90, Math.min(90, rotationStart.current.x - deltaY * 0.5)),
      y: rotationStart.current.y + deltaX * 0.5,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    // Resume auto-rotation after 3 seconds of inactivity
    setTimeout(() => setAutoRotate(true), 3000)
  }

  // Office marker click handler
  const handleOfficeClick = (officeId: string) => {
    const office = offices.find((o) => o.id === officeId)
    if (!office) return

    setSelectedOffice(officeId)
    setAutoRotate(false)

    // Animate to center the office
    const targetRotation = {
      x: -(office.coordinates.lat - 20) * 0.8,
      y: -office.coordinates.lng * 0.8,
    }

    // Smooth animation to target rotation
    const animateToTarget = () => {
      setRotation((prev) => {
        const diffX = targetRotation.x - prev.x
        const diffY = targetRotation.y - prev.y

        if (Math.abs(diffX) < 1 && Math.abs(diffY) < 1) {
          return targetRotation
        }

        return {
          x: prev.x + diffX * 0.1,
          y: prev.y + diffY * 0.1,
        }
      })
    }

    const animationInterval = setInterval(() => {
      animateToTarget()
    }, 16)

    setTimeout(() => clearInterval(animationInterval), 1000)
  }

  const closeOfficeDetails = () => {
    setSelectedOffice(null)
    setTimeout(() => setAutoRotate(true), 1000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Global Presence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interact with our 3D globe to explore our offices worldwide. Click and drag to rotate, click markers to
            learn more.
          </p>
        </div>

        <div className="relative flex justify-center">
          {/* 3D Globe Container */}
          <div className="relative">
            <div
              ref={globeRef}
              className="relative w-96 h-96 mx-auto cursor-grab active:cursor-grabbing"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Globe Sphere */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 border-2 border-primary/20 shadow-2xl"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transformStyle: "preserve-3d",
                  transition: isDragging ? "none" : "transform 0.1s ease-out",
                  background: `
                    radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%),
                    conic-gradient(from 0deg, 
                      oklch(0.35 0.15 280 / 0.1) 0deg,
                      oklch(0.45 0.18 150 / 0.1) 90deg,
                      oklch(0.35 0.15 280 / 0.1) 180deg,
                      oklch(0.45 0.18 150 / 0.1) 270deg,
                      oklch(0.35 0.15 280 / 0.1) 360deg
                    )
                  `,
                }}
              >
                {/* Globe Grid Lines */}
                <div className="absolute inset-0 rounded-full opacity-20">
                  {/* Latitude lines */}
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={`lat-${i}`}
                      className="absolute left-0 right-0 border-t border-primary/30"
                      style={{
                        top: `${(i + 1) * 10}%`,
                        transform: `scaleX(${Math.cos((i + 1 - 5) * 0.314)})`,
                      }}
                    />
                  ))}
                  {/* Longitude lines */}
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={`lng-${i}`}
                      className="absolute top-0 bottom-0 border-l border-primary/30"
                      style={{
                        left: `${(i + 1) * 8.33}%`,
                        transform: `rotateY(${i * 30}deg) translateZ(0px)`,
                      }}
                    />
                  ))}
                </div>

                {/* Office Markers */}
                {offices.map((office) => (
                  <div
                    key={office.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10"
                    style={{
                      left: `${office.position.x}%`,
                      top: `${office.position.y}%`,
                      transform: `
                        translate(-50%, -50%) 
                        rotateX(${-rotation.x}deg) 
                        rotateY(${-rotation.y}deg)
                        scale(${1 + Math.sin(Date.now() * 0.003 + office.position.x) * 0.1})
                      `,
                    }}
                    onClick={() => handleOfficeClick(office.id)}
                  >
                    {/* Pulsing Ring Animation */}
                    <div className="absolute inset-0 animate-ping">
                      <div className="w-8 h-8 bg-accent/30 rounded-full"></div>
                    </div>
                    <div className="absolute inset-0 animate-pulse" style={{ animationDelay: "0.5s" }}>
                      <div className="w-6 h-6 bg-accent/20 rounded-full"></div>
                    </div>

                    {/* THE OFFICIALS Logo Marker */}
                    <div className="relative z-10 w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg hover:scale-125 transition-transform duration-300 border-2 border-white">
                      <div className="text-white font-bold text-[8px] text-center leading-tight">
                        THE
                        <br />
                        OFF
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="text-center mt-8 text-sm text-muted-foreground">
              <p>Click and drag to rotate • Click markers to view office details</p>
            </div>
          </div>

          {/* Office Details Slide-in Panel */}
          {selectedOffice && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div className="bg-card/95 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in slide-in-from-bottom-4">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-bold text-2xl text-foreground">
                    {offices.find((o) => o.id === selectedOffice)?.name}
                  </h3>
                  <button onClick={closeOfficeDetails} className="p-2 hover:bg-muted rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {offices.find((o) => o.id === selectedOffice) && (
                  <div className="space-y-4">
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-5 h-5 mr-3 text-accent" />
                      {offices.find((o) => o.id === selectedOffice)!.address}
                    </div>
                    <div className="flex items-center text-primary font-medium">
                      <Phone className="w-5 h-5 mr-3 text-accent" />
                      {offices.find((o) => o.id === selectedOffice)!.contact}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="w-5 h-5 mr-3 text-accent" />
                      {offices.find((o) => o.id === selectedOffice)!.email}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-5 h-5 mr-3 text-accent" />
                      {offices.find((o) => o.id === selectedOffice)!.hours}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {offices.map((office, index) => (
            <div
              key={office.id}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10 hover:shadow-2xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleOfficeClick(office.id)}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl text-foreground">{office.name}</h3>
              </div>
              <div className="space-y-3">
                <p className="text-muted-foreground flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-accent" />
                  {office.address}
                </p>
                <p className="text-primary font-medium flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-accent" />
                  {office.contact}
                </p>
                <p className="text-muted-foreground flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-accent" />
                  {office.email}
                </p>
                <p className="text-muted-foreground flex items-center">
                  <Clock className="w-4 h-4 mr-3 text-accent" />
                  {office.hours}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
