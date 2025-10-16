"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

// ============================================
// 📋 TYPE DEFINITIONS
// ============================================

type FeatureCardProps = {
  title: string
  description: string
  variant: "large" | "small"
  staticImage: string
  gifImage: string
  ctaLabel?: string
  ctaHref?: string
  index: number
}

// ============================================
// 🎨 STYLE CONFIGURATIONS
// ============================================

const CARD_STYLES = {
  large: {
    minHeight: "min-h-[400px] md:min-h-[450px]",
    imageHeight: "h-[70%]", // 70% of card height
    contentHeight: "h-[30%]"
  },
  small: {
    minHeight: "min-h-[400px]", // Increased for better proportions
    imageHeight: "h-[70%]", // 70% of card height
    contentHeight: "h-[30%]"
  }
}

const ANIMATION_CONFIG = {
  container: {
    hidden: { opacity: 0, y: 30 },
    show: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1] as const
      }
    })
  },
  header: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }
}

// ============================================
// 🎬 SUB-COMPONENTS
// ============================================

/**
 * CardImage Component
 * Handles image display with hover GIF animation
 */
function CardImage({ 
  staticImage, 
  gifImage, 
  title, 
  isHovered, 
  variant 
}: { 
  staticImage: string
  gifImage: string
  title: string
  isHovered: boolean
  variant: "large" | "small"
}) {
  const heightClass = CARD_STYLES[variant].imageHeight

  return (
    <div className={`relative w-full overflow-hidden bg-gradient-to-br from-[rgb(var(--panel))] to-[rgb(var(--bg-dark))] ${heightClass}`}>
      <Image
        src={isHovered ? gifImage : staticImage}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        unoptimized={isHovered}
      />
      {/* Mint overlay on hover */}
      <div className="absolute inset-0 bg-[rgb(var(--mint))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Blending gradient overlay - fades image to dark panel at bottom - 80% shorter */}
      <div className="absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-[rgb(var(--panel))] via-[rgb(var(--panel))]/80 to-transparent pointer-events-none" />
    </div>
  )
}

/**
 * CardContent Component
 * Displays title, description, and optional CTA button
 */
function CardContent({ 
  title, 
  description, 
  ctaLabel, 
  ctaHref, 
  variant 
}: { 
  title: string
  description: string
  ctaLabel?: string
  ctaHref?: string
  variant: "large" | "small"
}) {
  const heightClass = CARD_STYLES[variant].contentHeight

  return (
    <div className={`relative p-6 md:p-8 flex justify-between bg-[rgb(var(--panel))] ${heightClass}`}>
      {/* Text Content */}
      <div className="relative z-10 flex-col">
        <h3 className="text-lg md:text-xl font-bold text-[rgb(var(--white))] mb-2 leading-tight group-hover:text-[rgb(var(--mint))] transition-colors">
          {title}
        </h3>
        
        <p className="text-xs md:text-sm text-[rgb(var(--muted))] leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>

      {/* CTA Button (optional) */}
      {ctaLabel && (
        <div className="mt-4 relative z-10">
          <Button
            variant="outline"
            size="sm"
            className="group/btn border-[rgb(var(--mint))] text-[rgb(var(--mint))] hover:bg-[rgb(var(--mint))] hover:text-[rgb(var(--bg-dark))] transition-all duration-300"
            asChild
          >
            <a href={ctaHref || "#"}>
              {ctaLabel}
              <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </Button>
        </div>
      )}

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgb(var(--mint))] to-[rgb(var(--accent-teal))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  )
}

/**
 * FeatureCard Component
 * Main card component that combines image and content
 */
function FeatureCard(props: FeatureCardProps) {
  const { variant, index } = props
  const [isHovered, setIsHovered] = useState(false)

  const minHeightClass = CARD_STYLES[variant].minHeight

  return (
    <motion.div
      custom={index}
      variants={ANIMATION_CONFIG.container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        group relative rounded-2xl bg-[rgb(var(--panel))] 
        border border-[rgb(var(--mint))]/20 shadow-lg 
        overflow-hidden transition-all duration-300 
        hover:shadow-[0_0_30px_rgba(143,226,214,0.2)] hover:border-[rgb(var(--mint))]/40
        ${variant === "large" ? "md:col-span-2" : ""} ${minHeightClass}
      `}
    >
      <CardImage 
        staticImage={props.staticImage}
        gifImage={props.gifImage}
        title={props.title}
        isHovered={isHovered}
        variant={variant}
      />
      
      <CardContent 
        title={props.title}
        description={props.description}
        ctaLabel={props.ctaLabel}
        ctaHref={props.ctaHref}
        variant={variant}
      />
    </motion.div>
  )
}

/**
 * SectionHeader Component
 * Displays the grid section title and subtitle
 */
function SectionHeader() {
  return (
    <motion.div
      className="text-center mb-12 md:mb-16"
      initial={ANIMATION_CONFIG.header.initial}
      whileInView={ANIMATION_CONFIG.header.animate}
      viewport={{ once: true }}
      transition={ANIMATION_CONFIG.header.transition}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[rgb(var(--white))] mb-4">
        Powering a Smarter EV Ecosystem
      </h2>
      <p className="text-lg text-[rgb(var(--muted))] max-w-3xl mx-auto">
        The Decharge Network connects drivers, businesses, and communities with reliable charging infrastructure 
        built for the future of mobility.
      </p>
    </motion.div>
  )
}

// ============================================
// 📊 FEATURE DATA
// ============================================

const FEATURES_DATA: FeatureCardProps[] = [
  {
    title: "Charging Stations",
    description: "Smart, fully managed hubs with scalable, multi-tier capacity.",
    variant: "large",
    staticImage: "/grid/chargingPoint.png",
    gifImage: "/grid/chargingPoint.gif",
    ctaLabel: "Find a station",
    ctaHref: "#stations",
    index: 0
  },
  {
    title: "Global Network",
    description: "One app, nationwide access with live availability and routes.",
    variant: "small",
    staticImage: "/grid/map.gif",
    gifImage: "/grid/map.gif",
    index: 1
  },
  {
    title: "Smart Pricing & Wallet",
    description: "See rates upfront, pay instantly, and track your spend.",
    variant: "small",
    staticImage: "/grid/TokenizedImg.png",
    gifImage: "/grid/Tokenized-yMkdY9My.gif",
    index: 2
  },
  {
    title: "Community Powered",
    description: "Host a charger or share access—earn while fueling the future.",
    variant: "large",
    staticImage: "/grid/CommunityImg.png",
    gifImage: "/grid/Communitygif.gif",
    ctaLabel: "Join the network",
    ctaHref: "#community",
    index: 3
  }
]

// ============================================
// 🏗️ MAIN COMPONENT
// ============================================

/**
 * FeatureGrid Component
 * Asymmetric grid layout showcasing EV platform features
 * 
 * Layout (Desktop):
 * ┌─────────────────────────────────┬──────────────┐
 * │ Charging Stations (LARGE)       │ Global       │
 * │                                 │ Network      │
 * ├─────────────────────────────────┼──────────────┤
 * │ Smart Pricing (small)           │ Community    │
 * │                                 │ Powered      │
 * └─────────────────────────────────┴──────────────┘
 * 
 * Large cards: Span 2 columns (horizontally wide)
 * Small cards: 1 column, 20% taller, narrower width
 */
export function FeatureGrid() {
  return (
    <section className="py-20 md:py-28 bg-[rgb(var(--bg-dark))]">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <SectionHeader />

        {/* Asymmetric Grid Layout - 3 columns for better proportions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {FEATURES_DATA.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
        
      </div>
    </section>
  )
}
