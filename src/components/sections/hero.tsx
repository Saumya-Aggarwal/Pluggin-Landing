"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#F4FAF7] to-[#DFF6FF]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#1E824C]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#21A6FE]/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 px-4 mx-auto pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-[#1E824C]/10 text-[#1E824C] hover:bg-[#1E824C]/20 border-[#1E824C]/20">
              <Sparkles className="w-3 h-3 mr-1" />
              Sustainable Energy, Real Community
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[#191E23] dark:text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
         
            <span className="bg-gradient-to-r from-[#1E824C] to-[#21A6FE] bg-clip-text text-transparent">
                 Plug into a{" "}cleaner future
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-[#6B7280] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hassle-free, secure, and connected energy sharing for your community.
            Join thousands making a real impact on the planet.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-[#21A6FE] hover:bg-[#1E96E8] text-white px-8 py-6 text-lg group"
            >
              Get PlugInn
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-2 border-[#1E824C] text-[#1E824C] hover:bg-[#1E824C]/5"
            >
              Learn More
            </Button>
          </motion.div>

          <motion.div
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1E824C]">
                50K+
              </div>
              <div className="text-sm text-[#6B7280] mt-1">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1E824C]">
                2M kWh
              </div>
              <div className="text-sm text-[#6B7280] mt-1">Energy Shared</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[#1E824C]">
                85%
              </div>
              <div className="text-sm text-[#6B7280] mt-1">Cost Savings</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex flex-col items-center">
          <div className="text-sm text-[#6B7280] mb-2">Scroll to explore</div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg
              className="w-6 h-6 text-[#6B7280]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
