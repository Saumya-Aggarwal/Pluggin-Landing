"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner, Seattle",
    content: "PlugInn has transformed how I think about energy. I'm saving $200/month and helping the planet. It's a win-win!",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Small Business Owner, Portland",
    content: "The real-time monitoring and community aspect are game-changers. Our office's energy costs dropped by 75%.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emma Rodriguez",
    role: "Environmental Activist, San Francisco",
    content: "Finally, a platform that makes sustainable energy accessible to everyone. The setup was incredibly easy!",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Park",
    role: "Apartment Resident, Los Angeles",
    content: "I thought solar was only for homeowners. PlugInn proved me wrong. Now my apartment complex shares clean energy!",
    rating: 5,
    avatar: "DP",
  },
  {
    name: "Lisa Thompson",
    role: "Retiree, Austin",
    content: "At my age, I appreciate simplicity. PlugInn is intuitive, and the customer support is outstanding.",
    rating: 5,
    avatar: "LT",
  },
  {
    name: "James Wilson",
    role: "Tech Professional, Boston",
    content: "The AI-powered distribution is impressive. PlugInn optimizes energy usage better than any system I've seen.",
    rating: 5,
    avatar: "JW",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#F8FAFC]">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-[#21A6FE]/10 text-[#21A6FE] hover:bg-[#21A6FE]/20">
            Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#191E23]">
            Loved by{" "}
            <span className="bg-gradient-to-r from-[#1E824C] to-[#21A6FE] bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            See what our community members are saying about their PlugInn experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 relative overflow-hidden bg-white">
                {/* Quote decoration */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-16 h-16 text-primary" />
                </div>

                <CardContent className="p-6 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#1E824C] text-[#1E824C]" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <p className="text-[#6B7280] mb-6 text-base leading-relaxed">
                    &quot;{testimonial.content}&quot;
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E824C] to-[#21A6FE] flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-[#191E23]">{testimonial.name}</div>
                      <div className="text-sm text-[#6B7280]">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <motion.div
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-[#1E824C]/10 to-[#21A6FE]/10 border-2 border-primary/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-[#1E824C] mb-2">4.9/5</div>
              <div className="text-[#6B7280]">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#21A6FE] mb-2">12,000+</div>
              <div className="text-[#6B7280]">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1E824C] mb-2">98%</div>
              <div className="text-[#6B7280]">Would Recommend</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
