"use client"

import { motion } from "framer-motion"
import { Battery, MapPin, Clock } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-[rgb(var(--bg-dark))]">
      <div className="container max-w-[1200px] mx-auto px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-[rgb(var(--mint))] uppercase tracking-wider mb-4 block">
            About PlugInn
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(var(--white))] mb-6">
            Say Goodbye to Range Anxiety
          </h2>
          <p className="text-lg text-[rgb(var(--muted))] max-w-3xl mx-auto leading-relaxed">
            We understand the worry of running out of charge. That's why PlugInn connects you to a vast network of verified local chargers, 
            ensuring you're never far from a reliable charging point. Drive with confidence, knowing your next charge is always nearby.
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgb(var(--mint))]/10 mb-4">
              <MapPin className="w-8 h-8 text-[rgb(var(--mint))]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-[rgb(var(--white))] mb-2">1000+</h3>
            <p className="text-[rgb(var(--muted))]">Charging Points</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgb(var(--mint))]/10 mb-4">
              <Clock className="w-8 h-8 text-[rgb(var(--mint))]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-[rgb(var(--white))] mb-2">&lt; 2 min</h3>
            <p className="text-[rgb(var(--muted))]">Average Booking Time</p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[rgb(var(--mint))]/10 mb-4">
              <Battery className="w-8 h-8 text-[rgb(var(--mint))]" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-bold text-[rgb(var(--white))] mb-2">24/7</h3>
            <p className="text-[rgb(var(--muted))]">Availability</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
