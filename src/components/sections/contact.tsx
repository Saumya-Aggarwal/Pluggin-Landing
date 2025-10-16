"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, Phone, MapPin, Clock, Send, Loader2, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useToast } from "@/hooks/use-toast"

// ============================================
// 📋 VALIDATION SCHEMA
// ============================================

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  topic: z.string().min(1, "Please select a topic"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy to continue",
  }),
  // Honeypot field for spam prevention
  website: z.string().max(0).optional(),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

// ============================================
// 📊 DATA & CONSTANTS
// ============================================

const CONTACT_INFO = {
  email: "support@pluginn.com",
  phone: "+1 (555) 123-4567",
  address: "123 Green Energy Blvd, San Francisco, CA 94105",
  hours: "Monday - Friday, 9 AM - 6 PM PST",
  responseTime: "We typically reply within 24 hours",
}

const TOPICS = [
  { value: "charging", label: "Charging Stations & Availability" },
  { value: "hosting", label: "Host a Charger" },
  { value: "pricing", label: "Pricing & Billing" },
  { value: "technical", label: "Technical Support" },
  { value: "partnership", label: "Business & Partnerships" },
  { value: "other", label: "Other Questions" },
]

const QUICK_LINKS = [
  { label: "Help Center", href: "/help", icon: ExternalLink },
  { label: "FAQ", href: "#faq", icon: ExternalLink },
]

const FAQ_ITEMS = [
  {
    question: "How do I find charging stations near me?",
    answer: "Use our mobile app or web platform to view real-time availability of charging stations in your area. Filter by connector type, charging speed, and price.",
  },
  {
    question: "What does it cost to host a charger?",
    answer: "Hosting is free! We provide the equipment, installation, and maintenance. You earn revenue from every charging session at your location.",
  },
  {
    question: "How long does it take to get support?",
    answer: "Our support team responds to all inquiries within 24 hours during business days. For urgent technical issues, call our hotline at +1 (555) 123-4567.",
  },
  {
    question: "Can I use PlugInn chargers with any EV?",
    answer: "Yes! Our network supports all major EV models with multiple connector types (CCS, CHAdeMO, Type 2). Check the app for specific charger compatibility.",
  },
]

// ============================================
// 🎨 ANIMATION CONFIGS
// ============================================

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

// ============================================
// 🔧 SUB-COMPONENTS
// ============================================

function ContactInfo() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Header */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[rgb(var(--white))] mb-3">
          Let's Plug In
        </h2>
        <p className="text-lg text-[rgb(var(--muted))] leading-relaxed">
          Questions about charging, hosting, or pricing? We're here to help.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgb(var(--mint))]/10 flex items-center justify-center">
            <Clock className="w-5 h-5 text-[rgb(var(--mint))]" />
          </div>
          <div>
            <h3 className="font-semibold text-[rgb(var(--white))] mb-1">Support Hours</h3>
            <p className="text-[rgb(var(--muted))] text-sm">{CONTACT_INFO.hours}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgb(var(--mint))]/10 flex items-center justify-center">
            <Mail className="w-5 h-5 text-[rgb(var(--mint))]" />
          </div>
          <div>
            <h3 className="font-semibold text-[rgb(var(--white))] mb-1">Email</h3>
            <a 
              href={`mailto:${CONTACT_INFO.email}`}
              className="text-[rgb(var(--mint))] text-sm hover:underline"
            >
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgb(var(--mint))]/10 flex items-center justify-center">
            <Phone className="w-5 h-5 text-[rgb(var(--mint))]" />
          </div>
          <div>
            <h3 className="font-semibold text-[rgb(var(--white))] mb-1">Phone</h3>
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}
              className="text-[rgb(var(--mint))] text-sm hover:underline"
            >
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgb(var(--mint))]/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-[rgb(var(--mint))]" />
          </div>
          <div>
            <h3 className="font-semibold text-[rgb(var(--white))] mb-1">Location</h3>
            <p className="text-[rgb(var(--muted))] text-sm">{CONTACT_INFO.address}</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="pt-6 border-t border-[rgb(var(--mint))]/20">
        <h3 className="font-semibold text-[rgb(var(--white))] mb-4">Quick Links</h3>
        <div className="flex flex-wrap gap-3">
          {QUICK_LINKS.map((link) => (
            <Button
              key={link.href}
              variant="outline"
              size="sm"
              className="border-[rgb(var(--mint))]/30 text-[rgb(var(--mint))] hover:bg-[rgb(var(--mint))]/10"
              asChild
            >
              <a href={link.href}>
                {link.label}
                <link.icon className="ml-2 h-3 w-3" />
              </a>
            </Button>
          ))}
        </div>
      </div>

      {/* Response Time */}
      <div className="p-4 rounded-lg bg-[rgb(var(--mint))]/5 border border-[rgb(var(--mint))]/20">
        <p className="text-sm text-[rgb(var(--muted))]">
          ⏱️ {CONTACT_INFO.responseTime}
        </p>
      </div>
    </motion.div>
  )
}

function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const { toast } = useToast()

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      topic: "",
      message: "",
      consent: false,
      website: "", // Honeypot
    },
  })

  async function onSubmit(data: ContactFormValues) {
    // Check honeypot
    if (data.website) {
      console.log("Spam detected")
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call (replace with actual Server Action or API route)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Success handling
      setShowSuccess(true)
      toast({
        title: "Message sent successfully! ✅",
        description: "We'll get back to you within 24 hours.",
      })

      form.reset()

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000)
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="bg-[rgb(var(--panel))] rounded-2xl border border-[rgb(var(--mint))]/20 p-6 md:p-8">
        {/* Success Message */}
        {showSuccess && (
          <div
            role="status"
            aria-live="polite"
            className="mb-6 p-4 rounded-lg bg-[rgb(var(--mint))]/10 border border-[rgb(var(--mint))]/30"
          >
            <p className="text-sm text-[rgb(var(--mint))] font-medium">
              ✅ Thank you! Your message has been sent successfully.
            </p>
            <p className="text-xs text-[rgb(var(--muted))] mt-1">
              We'll respond within 24 hours during business days.
            </p>
          </div>
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-[rgb(var(--white))]">
                    Name <span className="text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John Doe"
                      className="bg-[rgb(var(--bg-dark))] border-[rgb(var(--mint))]/20 text-[rgb(var(--white))] placeholder:text-[rgb(var(--muted))] focus:border-[rgb(var(--mint))] min-h-[44px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Email Field */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-[rgb(var(--white))]">
                    Email <span className="text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-[rgb(var(--bg-dark))] border-[rgb(var(--mint))]/20 text-[rgb(var(--white))] placeholder:text-[rgb(var(--muted))] focus:border-[rgb(var(--mint))] min-h-[44px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-[rgb(var(--muted))] text-xs">
                    We'll never share your email with anyone else.
                  </FormDescription>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Topic Select */}
            <FormField
              control={form.control}
              name="topic"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-[rgb(var(--white))]">
                    Topic <span className="text-red-400">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-[rgb(var(--bg-dark))] border-[rgb(var(--mint))]/20 text-[rgb(var(--white))] focus:border-[rgb(var(--mint))] min-h-[44px]">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[rgb(var(--panel))] border-[rgb(var(--mint))]/20">
                      {TOPICS.map((topic) => (
                        <SelectItem 
                          key={topic.value} 
                          value={topic.value}
                          className="text-[rgb(var(--white))] focus:bg-[rgb(var(--mint))]/10 focus:text-[rgb(var(--mint))]"
                        >
                          {topic.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription className="text-[rgb(var(--muted))] text-xs">
                    Help us route your message to the right team.
                  </FormDescription>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Message Textarea */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="text-[rgb(var(--white))]">
                    Message <span className="text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us how we can help..."
                      className="bg-[rgb(var(--bg-dark))] border-[rgb(var(--mint))]/20 text-[rgb(var(--white))] placeholder:text-[rgb(var(--muted))] focus:border-[rgb(var(--mint))] min-h-[120px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-[rgb(var(--muted))] text-xs">
                    {field.value.length}/1000 characters
                  </FormDescription>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            {/* Honeypot Field (hidden) */}
            <FormField
              control={form.control}
              name="website"
              render={({ field }: { field: any }) => (
                <FormItem className="hidden" aria-hidden="true">
                  <FormControl>
                    <Input tabIndex={-1} autoComplete="off" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Privacy Consent */}
            <FormField
              control={form.control}
              name="consent"
              render={({ field }: { field: any }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border border-[rgb(var(--mint))]/20 p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="border-[rgb(var(--mint))]/40 data-[state=checked]:bg-[rgb(var(--mint))] data-[state=checked]:border-[rgb(var(--mint))]"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-[rgb(var(--white))] cursor-pointer">
                      I agree to the{" "}
                      <a
                        href="/privacy"
                        className="text-[rgb(var(--mint))] hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Privacy Policy
                      </a>{" "}
                      <span className="text-red-400">*</span>
                    </FormLabel>
                    <FormDescription className="text-xs text-[rgb(var(--muted))]">
                      We'll store your data securely and only use it to respond to your inquiry. Data is retained for 90 days.
                    </FormDescription>
                    <FormMessage className="text-red-400" />
                  </div>
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[rgb(var(--mint))] hover:bg-[rgb(var(--mint-dark))] text-[rgb(var(--bg-dark))] font-semibold min-h-[44px] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  )
}

function FAQAccordion() {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-12"
    >
      <h3 className="text-2xl font-bold text-[rgb(var(--white))] mb-6">
        Frequently Asked Questions
      </h3>
      <Accordion type="single" collapsible className="space-y-4">
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="bg-[rgb(var(--panel))] border border-[rgb(var(--mint))]/20 rounded-lg px-6 data-[state=open]:border-[rgb(var(--mint))]/40"
          >
            <AccordionTrigger className="text-[rgb(var(--white))] hover:text-[rgb(var(--mint))] text-left py-4">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-[rgb(var(--muted))] pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}

// ============================================
// 🏗️ MAIN COMPONENT
// ============================================

export function ContactSection() {
  return (
    <section 
      id="contact" 
      className="py-20 md:py-28 bg-[rgb(var(--bg-dark))]"
      itemScope 
      itemType="https://schema.org/ContactPoint"
    >
      {/* Structured Data (hidden) */}
      <meta itemProp="contactType" content="customer support" />
      <meta itemProp="availableLanguage" content="en" />
      <meta itemProp="email" content={CONTACT_INFO.email} />
      <meta itemProp="telephone" content={CONTACT_INFO.phone} />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Contact Info */}
          <ContactInfo />

          {/* Right Column: Contact Form */}
          <ContactFormSection />
        </div>

        {/* Secondary CTA */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-2xl bg-[rgb(var(--panel))] border border-[rgb(var(--mint))]/20"
        >
          <h3 className="text-xl font-bold text-[rgb(var(--white))] mb-2">
            Looking for more resources?
          </h3>
          <p className="text-[rgb(var(--muted))] mb-6">
            Check out our documentation or join our community forums for instant answers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="outline"
              className="border-[rgb(var(--mint))] text-[rgb(var(--mint))] hover:bg-[rgb(var(--mint))]/10"
              asChild
            >
              <a href="/docs">
                View Documentation
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-[rgb(var(--mint))] text-[rgb(var(--mint))] hover:bg-[rgb(var(--mint))]/10"
              asChild
            >
              <a href="/community">
                Join Community
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
