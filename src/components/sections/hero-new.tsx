"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="md:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[rgb(var(--white))] leading-[1.02] tracking-tight"
              style={{ fontSize: 'clamp(36px, 4vw + 1rem, 64px)' }}
            >
              WE'VE GOT YOUR BACK.
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-[rgb(var(--muted))] leading-relaxed max-w-xl">
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

          {/* Right Column - Hero Image */}
          <motion.div
            className="md:col-span-6 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder - Replace with actual hero image */}
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[rgb(var(--panel))] to-[rgb(var(--bg-dark))] flex items-center justify-center">
                {/* Animated ring overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full border-4 border-[rgb(var(--mint))]/30 ring-animation"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-[rgb(var(--mint))]/30 ring-animation" style={{ animationDelay: '0.8s' }}></div>
                    <div className="absolute inset-0 rounded-full border-4 border-[rgb(var(--mint))]/30 ring-animation" style={{ animationDelay: '1.6s' }}></div>
                  </div>
                </div>
                
                {/* Car charging icon placeholder */}
                <svg 
                  className="w-32 h-32 text-[rgb(var(--mint))] relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              {/* Uncomment when you have the actual image */}
              {/* <Image 
                src="/hero-charger.jpg" 
                alt="Home charger and parked electric car"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                priority
              /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
