"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"

const faqs = [
  {
    question: "How does PlugInn work?",
    answer: "PlugInn connects your home or business to a community energy grid. Through our platform, excess renewable energy from solar panels, wind, or other sources is shared with neighbors who need it. Our smart system automatically manages distribution, billing, and monitoring.",
  },
  {
    question: "Do I need solar panels to join?",
    answer: "No! You can join as either an energy producer (if you have solar panels or other renewable sources) or as a consumer. Many of our members don't have their own renewable energy systems but benefit from shared community resources.",
  },
  {
    question: "How much can I actually save?",
    answer: "On average, our members save 60-85% on their energy bills. The exact amount depends on your location, energy consumption, and community participation. Most members see significant savings within the first month.",
  },
  {
    question: "Is my data and payment information secure?",
    answer: "Absolutely. We use bank-level encryption (256-bit SSL) for all transactions and data storage. We're SOC 2 Type II certified and comply with all energy industry security standards. Your data is never sold to third parties.",
  },
  {
    question: "What equipment do I need?",
    answer: "For most users, our free smart monitoring device is all you need. It connects to your existing meter or electrical panel. If you have solar panels or renewable sources, we'll help you integrate them seamlessly. Installation takes about 30 minutes.",
  },
  {
    question: "Can I leave at any time?",
    answer: "Yes! We believe in flexibility. There are no long-term contracts or cancellation fees. You can leave PlugInn at any time with just 30 days notice. We'll even help you transition smoothly.",
  },
  {
    question: "How does billing work?",
    answer: "You'll receive one simple monthly bill from PlugInn that includes all your energy costs. We handle everything with your utility provider in the background. You can view detailed usage and cost breakdowns in your dashboard 24/7.",
  },
  {
    question: "What if my community doesn't have many members yet?",
    answer: "We're constantly expanding! Even in new communities, you'll be connected to our regional grid, ensuring access to clean energy and savings from day one. As your local community grows, your benefits increase.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-[#21A6FE]/10 text-[#21A6FE] hover:bg-[#21A6FE]/20">
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#191E23]">
            Got{" "}
            <span className="bg-gradient-to-r from-[#1E824C] to-[#21A6FE] bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          <p className="text-xl text-[#6B7280]">
            We've got answers. Here are the most common questions about PlugInn.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 hover:border-primary/20 transition-colors bg-white"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-lg pr-4 text-[#191E23]">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280] pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still have questions CTA */}
        <motion.div
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-[#F4FAF7] to-[#DFF6FF] border-2 border-primary/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4 text-[#191E23]">Still have questions?</h3>
          <p className="text-[#6B7280] mb-6">
            Our friendly support team is here to help 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-[#21A6FE] hover:bg-[#1E96E8] text-white rounded-lg font-semibold transition-colors">
              Contact Support
            </button>
            <button className="px-6 py-3 border-2 border-[#1E824C] text-[#1E824C] hover:bg-[#1E824C]/5 rounded-lg font-semibold transition-colors">
              Schedule a Call
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
