"use client"

import { motion } from "framer-motion"
import { Shield, Activity, Zap } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Trust & Safety",
    description: "Verified hosts. Insurance cover up ₹1,00,000. Pilot partners: RWA DELHI",
  },
  {
    icon: Activity,
    title: "Transparent Pricing",
    description: "Per-kWH meter reading. Detailed breakdown.",
  },
  {
    icon: Zap,
    title: "Seamless Booking",
    description: "3 taps: Find, Book, Charge. Confirmed.",
  },
]

export function FeatureCardsSection() {
  return (
    <section className="py-20 md:py-28 bg-[rgb(var(--bg-dark))]">
      <div className="container max-w-[1200px] mx-auto px-8">
        {/* Feature Panel Container */}
        <motion.div
          className="bg-[rgb(var(--panel))] rounded-xl p-12 md:p-16 shadow-[0_8px_24px_rgba(11,13,16,0.35)] border border-[rgb(var(--muted))]/10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              
              return (
                <motion.div
                  key={index}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <div>
                    <Icon className="w-12 h-12 text-[rgb(var(--mint))]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-[rgb(var(--white))]">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[rgb(var(--muted))] leading-relaxed text-base">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
