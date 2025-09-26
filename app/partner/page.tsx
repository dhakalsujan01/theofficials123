import { Navigation } from "@/components/navigation"
import { PartnerBenefits } from "@/components/partner-benefits"
import { PartnerForm } from "@/components/partner-form"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Badge } from "@/components/ui/badge"
import { Handshake, Star } from "lucide-react"

export default function PartnerPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 hero-gradient relative overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float"></div>
        <div
          className="absolute bottom-32 right-16 w-16 h-16 bg-accent/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation animation="fade-up">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 text-white border-white/30 bg-white/10">
                <Handshake className="w-4 h-4 mr-2" />
                Exclusive Partnership Program
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Partner With Us</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty leading-relaxed">
                Join our exclusive network of trusted recruitment partners and unlock premium opportunities in
                international education. Let's work together and grow together.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="flex items-center text-white/80">
                  <Star className="w-5 h-5 mr-2 text-accent" />
                  <span>Exclusive Territory Rights</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Star className="w-5 h-5 mr-2 text-accent" />
                  <span>High Commission Rates</span>
                </div>
                <div className="flex items-center text-white/80">
                  <Star className="w-5 h-5 mr-2 text-accent" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <PartnerBenefits />
      <PartnerForm />
      <EnhancedFooter />
    </main>
  )
}
