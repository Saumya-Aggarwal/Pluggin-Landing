"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I track the status of my EV charging?",
    answer: "Track your charging session in real-time through our mobile app. You'll receive notifications when charging starts, updates on progress, and alerts when your vehicle is fully charged. View detailed analytics including charging speed, energy consumed, and estimated completion time."
  },
  {
    question: "How many EV charging stations are in India?",
    answer: "India has over 5,000+ public EV charging stations and growing rapidly. PlugInn connects you to verified local chargers including home chargers, making thousands more charging points accessible to drivers. Our network is expanding daily with new host partners joining across major cities and highways."
  },
  {
    question: "What are EV charging stations?",
    answer: "EV charging stations are infrastructure that supplies electric energy to recharge electric vehicles. They range from standard home chargers (3.3kW) to fast DC chargers (50kW+). PlugInn partners with verified hosts to provide access to reliable, safe, and transparent charging solutions."
  },
  {
    question: "How do EV charging stations work?",
    answer: "EV charging stations convert AC power to DC power to charge your vehicle's battery. You simply plug in your vehicle using the appropriate connector (Type 2, CCS, CHAdeMO), authenticate via the PlugInn app, and charging begins. Payment is based on per-kWh meter reading for complete transparency."
  },
  {
    question: "How do you build EV charging stations?",
    answer: "Become a host with PlugInn! If you have a parking space and power connection, you can install a charging station and start earning. We provide guidance on equipment selection, installation support, and insurance coverage up to ₹1,00,000. Our pilot program is active with RWA DELHI partners."
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-[rgb(var(--bg-dark))]">
      <div className="container max-w-[900px] mx-auto px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(var(--white))] mb-4">
            Got questions on EV?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[rgb(var(--panel))] border border-[rgb(var(--muted))]/10 rounded-lg px-6 hover:border-[rgb(var(--mint))]/20 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6 text-[rgb(var(--white))] font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[rgb(var(--muted))] pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
