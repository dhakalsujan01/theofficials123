import { Crown, TrendingUp, Shield, Users, Globe, Award } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"

const benefits = [
  {
    icon: Crown,
    title: "Exclusive Representation",
    description: "Become the exclusive representative for premium UK universities in your region.",
  },
  {
    icon: TrendingUp,
    title: "High Commission & Transparency",
    description: "Competitive commission rates with complete transparency in all transactions.",
  },
  {
    icon: Shield,
    title: "Compliance Support",
    description: "Full regulatory compliance support and guidance for all international requirements.",
  },
  {
    icon: Users,
    title: "Dedicated Support Team",
    description: "Personal account manager and 24/7 support for all your partnership needs.",
  },
  {
    icon: Globe,
    title: "Global Network Access",
    description: "Connect with our worldwide network of 1,500+ trusted recruitment partners.",
  },
  {
    icon: Award,
    title: "Training & Certification",
    description: "Comprehensive training programs and official certification for your team.",
  },
]

export function PartnerBenefits() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Partnership Benefits</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join our exclusive network and unlock premium benefits designed to grow your business.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 card-hover group">
                <div className="flex items-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mr-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                    <benefit.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-pretty leading-relaxed">{benefit.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
