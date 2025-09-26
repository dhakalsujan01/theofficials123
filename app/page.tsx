import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { TrustSignals } from "@/components/trust-signals"
import { UniversityCarousel } from "@/components/university-carousel"
import { CoreValues } from "@/components/core-values"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustSignals />
      <UniversityCarousel />
      <CoreValues />
      <EnhancedFooter />
      <WhatsAppChat />
    </main>
  )
}
