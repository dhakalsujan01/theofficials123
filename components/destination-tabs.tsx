"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, GraduationCap, MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animations"

const destinations = {
  uk: {
    name: "United Kingdom",
    flag: "🇬🇧",
    requirements: [
      "IELTS 6.0-7.5 (depending on course)",
      "Academic transcripts and certificates",
      "Statement of Purpose",
      "Letters of Recommendation",
      "Financial proof (£15,000-£40,000)",
      "Valid passport",
    ],
    process: [
      "University application submission",
      "Conditional offer letter",
      "IELTS/English proficiency test",
      "Visa application (Student Route)",
      "Biometric appointment",
      "Visa decision and travel",
    ],
    universities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "London School of Economics",
      "University College London",
    ],
    duration: "3-4 years (Bachelor), 1-2 years (Master)",
    intakes: "September, January, May",
  },
  australia: {
    name: "Australia",
    flag: "🇦🇺",
    requirements: [
      "IELTS 6.0-7.0 (depending on course)",
      "Academic transcripts and certificates",
      "Statement of Purpose",
      "CV/Resume",
      "Financial proof (AUD 20,000-50,000)",
      "Health insurance (OSHC)",
    ],
    process: [
      "University application submission",
      "Conditional offer letter",
      "English proficiency test",
      "Student visa application (500)",
      "Health examination",
      "Visa grant and travel",
    ],
    universities: [
      "University of Melbourne",
      "Australian National University",
      "University of Sydney",
      "University of Queensland",
      "Monash University",
    ],
    duration: "3-4 years (Bachelor), 1.5-2 years (Master)",
    intakes: "February, July, November",
  },
  canada: {
    name: "Canada",
    flag: "🇨🇦",
    requirements: [
      "IELTS 6.0-7.0 (depending on course)",
      "Academic transcripts (WES evaluation)",
      "Statement of Purpose",
      "Letters of Recommendation",
      "Financial proof (CAD 15,000-35,000)",
      "Medical examination",
    ],
    process: [
      "University application submission",
      "Letter of acceptance",
      "Study permit application",
      "Biometric data collection",
      "Medical examination (if required)",
      "Study permit approval and travel",
    ],
    universities: [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
      "University of Alberta",
      "McMaster University",
    ],
    duration: "4 years (Bachelor), 1-2 years (Master)",
    intakes: "September, January, May",
  },
}

export function DestinationTabs() {
  const [activeTab, setActiveTab] = useState("uk")

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Study Destinations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore world-class education opportunities across top destinations
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-secondary/50">
              {Object.entries(destinations).map(([key, destination]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className={`text-sm tab-underline ${activeTab === key ? "active" : ""} hover:bg-accent/10 transition-all`}
                >
                  <span className="mr-2 text-lg">{destination.flag}</span>
                  {destination.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(destinations).map(([key, destination]) => (
              <TabsContent key={key} value={key}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <ScrollAnimation animation="slide-left" delay={100}>
                    <Card className="card-hover">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <FileText className="mr-2 h-5 w-5 text-primary" />
                          Entry Requirements
                        </CardTitle>
                        <CardDescription>Essential requirements for studying in {destination.name}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {destination.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slide-right" delay={200}>
                    <Card className="card-hover">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Clock className="mr-2 h-5 w-5 text-primary" />
                          Admission & Visa Process
                        </CardTitle>
                        <CardDescription>Step-by-step process for {destination.name}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ol className="space-y-3">
                          {destination.process.map((step, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-6 h-6 bg-accent/20 text-accent rounded-full flex items-center justify-center text-xs font-semibold mr-3 flex-shrink-0">
                                {index + 1}
                              </div>
                              <span className="text-sm text-muted-foreground">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slide-left" delay={300}>
                    <Card className="card-hover">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <GraduationCap className="mr-2 h-5 w-5 text-primary" />
                          Top Universities
                        </CardTitle>
                        <CardDescription>Leading institutions in {destination.name}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {destination.universities.map((university, index) => (
                            <Badge
                              key={index}
                              variant="secondary"
                              className="mr-2 mb-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              {university}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>

                  <ScrollAnimation animation="slide-right" delay={400}>
                    <Card className="card-hover">
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <MapPin className="mr-2 h-5 w-5 text-primary" />
                          Quick Information
                        </CardTitle>
                        <CardDescription>Key details about studying in {destination.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Duration</h4>
                          <p className="text-sm text-muted-foreground">{destination.duration}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Intakes</h4>
                          <p className="text-sm text-muted-foreground">{destination.intakes}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollAnimation>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </ScrollAnimation>
      </div>
    </section>
  )
}
