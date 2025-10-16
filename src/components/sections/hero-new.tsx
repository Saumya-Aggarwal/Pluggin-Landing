"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Fade overlay from right to left */}
      <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--bg-dark))] via-[rgb(var(--bg-dark))]/60 to-transparent pointer-events-none z-10" />
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-60">
        <Image
          src="/hero-section.webp"
          alt="EV Charging"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="container max-w-[1200px] mx-auto px-8 relative z-20">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="md:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[rgb(var(--white))] leading-[1.02] tracking-tight drop-shadow-2xl"
              style={{ fontSize: 'clamp(36px, 4vw + 1rem, 64px)' }}
            >
              WE&apos;VE GOT YOUR BACK.
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-[rgb(var(--muted))] leading-relaxed max-w-xl drop-shadow-lg">
              Verified local chargers. Transparent pricing. Book in seconds.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="btn-primary bg-[rgb(var(--mint))] text-[rgb(var(--bg-dark))] hover:bg-[rgb(var(--mint-dark))] rounded-full px-8 py-6 text-base font-bold uppercase shadow-lg"
                size="lg"
              >
                FIND A CHARGER
              </Button>
              <Button 
                variant="outline"
                className="btn-outline border-2 border-[rgb(var(--outline-mint))] text-[rgb(var(--mint))] hover:bg-[rgb(var(--mint))] hover:text-[rgb(var(--bg-dark))] rounded-full px-8 py-6 text-base font-semibold"
                size="lg"
              >
                EXPLORE HOST PROGRAM
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Spacer for Image */}
          <div className="md:col-span-5"></div>
        </div>
      </div>
    </section>
  )
}
