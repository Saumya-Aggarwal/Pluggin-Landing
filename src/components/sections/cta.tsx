"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setEmail("")
    }, 3000)
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#1E824C] to-[#21A6FE] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready to Transform Your Energy Future?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 50,000+ members already saving money and the planet. Get started in just 2 minutes.
          </p>

          {/* Email Signup Form */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-6 text-lg bg-white/95 text-gray-900 border-0 focus:ring-2 focus:ring-white"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-white text-[#1E824C] hover:bg-gray-100 px-8 py-6 text-lg font-semibold group"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            ) : (
              <motion.div
                className="flex items-center justify-center gap-2 text-xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <CheckCircle2 className="w-6 h-6" />
                <span>Thanks! Check your email for next steps.</span>
              </motion.div>
            )}
          </motion.div>

          <p className="text-sm opacity-75 mb-8">
            No credit card required • Free setup • Cancel anytime
          </p>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto pt-8 border-t border-white/20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">2 min</div>
              <div className="text-sm opacity-75">Quick Setup</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">$0</div>
              <div className="text-sm opacity-75">Upfront Cost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm opacity-75">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-75">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Alternative CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-sm opacity-75 mb-4">Prefer to talk to someone first?</p>
          <Button
            variant="outline"
            size="lg"
            className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E824C] transition-colors"
          >
            Schedule a Free Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
