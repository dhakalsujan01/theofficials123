import { Navigation } from "@/components/navigation"
import { ContactForm } from "@/components/contact-form"
import { GlobalMap } from "@/components/global-map"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Clock, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-24 h-24 bg-primary rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-16 h-16 bg-accent rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-primary rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation animation="fade-up">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                <MessageCircle className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Have questions about studying abroad or interested in partnering with us? Our expert team is here to
                help you every step of the way.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-8">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2 text-accent" />
                  <span>24/7 Support Available</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-2 text-accent" />
                  <span>3 Global Offices</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-5 h-5 mr-2 text-accent" />
                  <span>Free Consultation</span>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <ContactForm />
      <GlobalMap />
      <EnhancedFooter />
    </main>
  )
}
