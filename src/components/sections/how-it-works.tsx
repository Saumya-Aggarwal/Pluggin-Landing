"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserPlus, Home, Zap, LineChart } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account in under 2 minutes. No credit card required to get started.",
    icon: UserPlus,
  },
  {
    number: "02",
    title: "Connect Your Home",
    description: "Link your smart meter or install our IoT device for seamless energy monitoring.",
    icon: Home,
  },
  {
    number: "03",
    title: "Start Sharing",
    description: "Join your community grid and begin sharing renewable energy with neighbors.",
    icon: Zap,
  },
  {
    number: "04",
    title: "Track & Save",
    description: "Monitor your savings, impact, and contribution through our intuitive dashboard.",
    icon: LineChart,
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-br from-[#F4FAF7] to-white">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-[#1E824C]/10 text-[#1E824C] hover:bg-[#1E824C]/20">
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#191E23]">
            Get Started in{" "}
            <span className="bg-gradient-to-r from-[#1E824C] to-[#21A6FE] bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Join the energy revolution in minutes, not days
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`flex flex-col md:flex-row gap-8 items-center mb-12 ${isEven ? "" : "md:flex-row-reverse"}`}>
                  {/* Step Number and Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#1E824C] to-[#21A6FE] flex items-center justify-center shadow-lg">
                        <Icon className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-[#1E824C] flex items-center justify-center text-white font-bold shadow-md">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <Card className="flex-1 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 bg-white">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-3 text-[#191E23]">{step.title}</h3>
                      <p className="text-[#6B7280] text-lg">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Connecting Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 w-0.5 h-12 bg-gradient-to-b from-[#1E824C] to-[#21A6FE] opacity-30" />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* CTA at the bottom */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to make a difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#21A6FE] hover:bg-[#1E96E8] text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
            <button className="px-8 py-4 border-2 border-[#1E824C] text-[#1E824C] hover:bg-[#1E824C]/5 rounded-lg font-semibold transition-colors">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
