"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Globe, Shield, Zap, Users, TrendingDown } from "lucide-react"

const features = [
  {
    title: "Save Money",
    description: "Reduce your energy costs by up to 85% through intelligent community sharing and optimal energy distribution.",
    icon: DollarSign,
    color: "text-[#1E824C]",
    bgColor: "bg-[#1E824C]/10",
  },
  {
    title: "Save the Planet",
    description: "Lower your carbon footprint with renewable energy sources and contribute to a sustainable future for all.",
    icon: Globe,
    color: "text-[#21A6FE]",
    bgColor: "bg-[#21A6FE]/10",
  },
  {
    title: "Safe & Simple",
    description: "Bank-level security with an intuitive interface. Start sharing energy in minutes, not hours.",
    icon: Shield,
    color: "text-[#1E824C]",
    bgColor: "bg-[#1E824C]/10",
  },
  {
    title: "Real-Time Monitoring",
    description: "Track your energy consumption, savings, and environmental impact with live dashboards and insights.",
    icon: Zap,
    color: "text-[#21A6FE]",
    bgColor: "bg-[#21A6FE]/10",
  },
  {
    title: "Community Power",
    description: "Connect with neighbors and build a sustainable local energy network that benefits everyone.",
    icon: Users,
    color: "text-[#1E824C]",
    bgColor: "bg-[#1E824C]/10",
  },
  {
    title: "Smart Distribution",
    description: "AI-powered algorithms ensure optimal energy distribution and maximum efficiency for your community.",
    icon: TrendingDown,
    color: "text-[#21A6FE]",
    bgColor: "bg-[#21A6FE]/10",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-[#21A6FE]/10 text-[#21A6FE] hover:bg-[#21A6FE]/20">
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#191E23]">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-[#1E824C] to-[#21A6FE] bg-clip-text text-transparent">
              PlugInn?
            </span>
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Everything you need to join the sustainable energy revolution
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-white">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-xl text-[#191E23]">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-[#6B7280]">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Additional trust indicators */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground mb-6">Trusted by leading organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {/* Placeholder for partner logos */}
            <div className="text-2xl font-bold">Energy Corp</div>
            <div className="text-2xl font-bold">GreenTech</div>
            <div className="text-2xl font-bold">EcoSolutions</div>
            <div className="text-2xl font-bold">PowerGrid+</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
