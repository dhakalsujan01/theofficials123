import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TrustSignals } from "@/components/trust-signals"
import { CoreValues } from "@/components/core-values"
import { DestinationsShowcase } from "@/components/destinations-showcase"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustSignals />
      <CoreValues />
      <DestinationsShowcase />
      <TestimonialsSlider />
      <EnhancedFooter />
      <WhatsAppChat />
    </main>
  )
}
