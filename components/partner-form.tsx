"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronRight, ChevronLeft } from "lucide-react"

export function PartnerForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
    studentsPerYear: "",
    agreement: false,
  })

  const totalSteps = 3

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Partner Onboarding</h2>
          <p className="text-lg text-muted-foreground">Join our exclusive network in just 3 simple steps</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                    step <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && <div className={`w-16 h-1 mx-2 ${step < currentStep ? "bg-primary" : "bg-muted"}`} />}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4 space-x-8">
            <span className="text-sm text-muted-foreground">Company Details</span>
            <span className="text-sm text-muted-foreground">Contact Info</span>
            <span className="text-sm text-muted-foreground">Agreement</span>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 shadow-sm border">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Company Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Company Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="companyName">Company Name *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="Enter your company name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, country: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nepal">Nepal</SelectItem>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="bangladesh">Bangladesh</SelectItem>
                        <SelectItem value="pakistan">Pakistan</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, experience: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-2">0-2 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="6-10">6-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="studentsPerYear">Students Placed Per Year</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, studentsPerYear: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-50">0-50 students</SelectItem>
                        <SelectItem value="51-100">51-100 students</SelectItem>
                        <SelectItem value="101-200">101-200 students</SelectItem>
                        <SelectItem value="200+">200+ students</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Contact Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contactPerson">Contact Person *</Label>
                    <Input
                      id="contactPerson"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="Enter contact person name"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Enter phone number with country code"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea id="message" placeholder="Tell us more about your company and goals..." rows={4} />
                </div>
              </div>
            )}

            {/* Step 3: Agreement */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-foreground mb-6">Partnership Agreement</h3>

                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold text-foreground mb-4">Partnership Terms & Conditions</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>• Exclusive representation rights in your designated region</p>
                    <p>• Competitive commission structure with transparent payment terms</p>
                    <p>• Full compliance support and regulatory guidance</p>
                    <p>• Access to marketing materials and training resources</p>
                    <p>• Dedicated account management and support</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreement}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreement: checked as boolean })}
                  />
                  <Label htmlFor="agreement" className="text-sm">
                    I agree to the partnership terms and conditions and authorize Franklin Education Consultancy to
                    process my application.
                  </Label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button type="button" variant="outline" onClick={prevStep} disabled={currentStep === 1}>
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button type="button" onClick={nextStep}>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={!formData.agreement}
                >
                  Submit Partnership Application
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
