import { Navigation } from "@/components/navigation"
import { GlobalMap } from "@/components/global-map"
import { CoreValues } from "@/components/core-values"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Globe, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fade-up">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                <Award className="w-4 h-4 mr-2" />
                15+ Years of Excellence
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Franklin Education Consultancy
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                For over 15 years, we've been the trusted bridge connecting ambitious students with world-class
                universities, building futures through quality education partnerships.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a vision to democratize access to quality international education, Franklin Education
                    Consultancy has grown from a small consultancy to a global network spanning three continents.
                  </p>
                  <p>
                    We understand that education is not just about degrees—it's about transforming lives, opening minds,
                    and creating opportunities. Our team of experienced education consultants works tirelessly to match
                    students with the perfect academic environment for their goals.
                  </p>
                  <p>
                    Today, we proudly serve as the official representative for 35+ prestigious UK universities and work
                    with over 1,500 trusted recruitment agents worldwide.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">1500+</div>
                      <div className="text-sm text-muted-foreground">Global Agents</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">15+</div>
                      <div className="text-sm text-muted-foreground">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slide-right">
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden card-hover">
                  <div className="w-full h-full bg-[url('/education-consultation-meeting-professional.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
                  <TrendingUp className="w-4 h-4 inline mr-2" />
                  Growing Strong
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <GlobalMap />
      <CoreValues />
      <EnhancedFooter />
    </main>
  )
}
