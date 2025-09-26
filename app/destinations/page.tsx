import { Navigation } from "@/components/navigation"
import { DestinationTabs } from "@/components/destination-tabs"
import { EnhancedFooter } from "@/components/enhanced-footer"
import { ScrollAnimation } from "@/components/scroll-animations"
import { Badge } from "@/components/ui/badge"
import { Globe, MapPin } from "lucide-react"

export default function DestinationsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-accent rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ScrollAnimation animation="fade-up">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 text-primary border-primary/20">
                <Globe className="w-4 h-4 mr-2" />
                Global Education Opportunities
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Study Destinations</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Discover world-class education opportunities across the globe. From prestigious UK universities to
                innovative programs in Australia and Canada.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Badge variant="secondary" className="px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  🇬🇧 United Kingdom
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  🇦🇺 Australia
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  🇨🇦 Canada
                </Badge>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <DestinationTabs />
      <EnhancedFooter />
    </main>
  )
}
