"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

const offices = [
  {
    id: "nepal",
    name: "Nepal Office",
    address: "Kathmandu, Nepal",
    contact: "+977-1-4123456",
    email: "nepal@franklineducation.com",
    hours: "9:00 AM - 6:00 PM NPT",
    position: { top: "45%", left: "75%" },
  },
  {
    id: "london",
    name: "London Office",
    address: "London, United Kingdom",
    contact: "+44-20-7123-4567",
    email: "london@franklineducation.com",
    hours: "9:00 AM - 5:00 PM GMT",
    position: { top: "35%", left: "48%" },
  },
  {
    id: "dubai",
    name: "Dubai Office",
    address: "Dubai, United Arab Emirates",
    contact: "+971-4-123-4567",
    email: "dubai@franklineducation.com",
    hours: "9:00 AM - 6:00 PM GST",
    position: { top: "50%", left: "65%" },
  },
]

export function GlobalMap() {
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Global Presence</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With offices strategically located across three continents, we provide local expertise with global reach.
          </p>
        </div>

        <div className="relative">
          <div className="relative w-full h-[500px] bg-gradient-to-br from-primary/10 via-background to-accent/10 rounded-3xl overflow-hidden shadow-2xl border border-primary/10">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[url('/world-map-silhouette-minimalist.jpg')] bg-contain bg-center bg-no-repeat"></div>
            </div>

            {/* Animated grid overlay */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `
                  linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
                `,
                  backgroundSize: "50px 50px",
                }}
              ></div>
            </div>

            {/* Office Markers with enhanced animations */}
            {offices.map((office) => (
              <div
                key={office.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ top: office.position.top, left: office.position.left }}
                onMouseEnter={() => setSelectedOffice(office.id)}
                onMouseLeave={() => setSelectedOffice(null)}
              >
                <div className="relative">
                  {/* Pulsing ring animation */}
                  <div className="absolute inset-0 animate-ping">
                    <div className="w-8 h-8 bg-accent/30 rounded-full"></div>
                  </div>

                  {/* Main marker */}
                  <div className="relative z-10 w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>

                  {/* Enhanced Popup */}
                  {selectedOffice === office.id && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 bg-card/95 backdrop-blur-sm border border-primary/20 rounded-xl p-6 shadow-2xl min-w-72 z-20 animate-in slide-in-from-bottom-2">
                      <div className="space-y-3">
                        <h3 className="font-bold text-lg text-foreground flex items-center">
                          <MapPin className="w-5 h-5 text-accent mr-2" />
                          {office.name}
                        </h3>
                        <div className="space-y-2 text-sm">
                          <p className="text-muted-foreground flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-accent" />
                            {office.address}
                          </p>
                          <p className="text-primary flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-accent" />
                            {office.contact}
                          </p>
                          <p className="text-muted-foreground flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-accent" />
                            {office.email}
                          </p>
                          <p className="text-muted-foreground flex items-center">
                            <Clock className="w-4 h-4 mr-2 text-accent" />
                            {office.hours}
                          </p>
                        </div>
                      </div>
                      {/* Arrow pointer */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                        <div className="w-3 h-3 bg-card border-r border-b border-primary/20 transform rotate-45"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {offices.map((office, index) => (
              <div
                key={office.id}
                className="group bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-primary/10 hover:shadow-2xl hover:border-accent/30 transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
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
      </div>
    </section>
  )
}
