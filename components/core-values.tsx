import { Shield, Eye, Heart, Lightbulb } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"

const values = [
  {
    icon: Shield,
    title: "Compliance",
    description:
      "Adhering to the highest standards of regulatory compliance and ethical practices in international education.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear, honest communication and transparent processes in all our partnerships and student placements.",
  },
  {
    icon: Heart,
    title: "Trust",
    description: "Building lasting relationships based on reliability, integrity, and consistent delivery of promises.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Leveraging cutting-edge technology and innovative approaches to enhance the education experience.",
  },
]

export function CoreValues() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do in connecting students with their dream education.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
              <div className="text-center group card-hover p-6 rounded-xl bg-card border border-border/50">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full mb-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                  <value.icon className="h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">{value.description}</p>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  )
}
