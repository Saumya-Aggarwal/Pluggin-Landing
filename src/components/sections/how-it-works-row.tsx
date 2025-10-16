"use client"

import { motion } from "framer-motion"
import { Search, Calendar, Zap } from "lucide-react"

const steps = [
  {
    icon: Search,
    label: "Search",
  },
  {
    icon: Calendar,
    label: "Book",
  },
  {
    icon: Zap,
    label: "Charge",
  },
]

export function HowItWorksRow() {
  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-[1200px] mx-auto px-8">
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0">
          {steps.map((step, index) => {
            const Icon = step.icon
            
            return (
              <div key={index} className="relative flex items-center">
                {/* Step Item */}
                <motion.div
                  className="flex flex-col items-center text-center group cursor-pointer z-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {/* Icon Circle */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[rgb(var(--panel))] border-2 border-[rgb(var(--mint))]/40 flex items-center justify-center mb-4 group-hover:border-[rgb(var(--mint))] group-hover:shadow-[0_0_20px_rgba(143,226,214,0.3)] transition-all duration-300">
                    <Icon className="w-10 h-10 md:w-12 md:h-12 text-[rgb(var(--mint))]" strokeWidth={2} />
                  </div>

                  {/* Label */}
                  <span className="text-[rgb(var(--white))] font-semibold text-lg md:text-xl tracking-wide">
                    {step.label}
                  </span>
                </motion.div>

                {/* Pulsating Connector Line (except last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden sm:block relative mx-8 md:mx-12">
                    {/* Base line */}
                    <div className="w-24 md:w-32 h-0.5 bg-[rgb(var(--mint))]/20"></div>
                    
                    {/* Pulsating line */}
                    <motion.div
                      className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-[rgb(var(--mint))] to-transparent"
                      initial={{ width: "0%", opacity: 0.6 }}
                      animate={{ 
                        width: ["0%", "100%", "0%"],
                        opacity: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ width: "24rem" }}
                    />
                    
                    {/* Pulsating dot */}
                    <motion.div
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[rgb(var(--mint))] shadow-[0_0_8px_rgba(143,226,214,0.6)]"
                      initial={{ left: "0%" }}
                      animate={{ 
                        left: ["0%", "100%", "0%"],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        delay: index * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
