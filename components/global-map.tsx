"use client"
import { Interactive3DGlobe } from "./interactive-3d-globe"

const offices = [
  {
    id: "nepal",
    name: "Nepal Office",
    address: "Kathmandu, Nepal",
    contact: "+977 9805869216",
    email: "nepal@theofficials.com",
    hours: "9:00 AM - 6:00 PM NPT",
    position: { top: "45%", left: "75%" },
  },
  {
    id: "london",
    name: "London Office",
    address: "London, United Kingdom",
    contact: "+44-20-7123-4567",
    email: "london@theofficials.com",
    hours: "9:00 AM - 5:00 PM GMT",
    position: { top: "35%", left: "48%" },
  },
  {
    id: "dubai",
    name: "Dubai Office",
    address: "Dubai, United Arab Emirates",
    contact: "+971-4-123-4567",
    email: "dubai@theofficials.com",
    hours: "9:00 AM - 6:00 PM GST",
    position: { top: "50%", left: "65%" },
  },
]

export function GlobalMap() {
  return <Interactive3DGlobe />
}
