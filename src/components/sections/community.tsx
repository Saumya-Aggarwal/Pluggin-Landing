"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, Zap, TrendingUp } from "lucide-react"

const impactStats = [
  {
    icon: Zap,
    value: "2.5M",
    unit: "kWh",
    label: "Clean Energy Shared",
    description: "Equivalent to powering 230 homes for a year",
    color: "text-[#21A6FE]",
    bgColor: "bg-[#21A6FE]/10",
  },
  {
    icon: Leaf,
    value: "1,200",
    unit: "tons",
    label: "CO₂ Emissions Reduced",
    description: "Same as planting 56,000 trees",
    color: "text-[#1E824C]",
    bgColor: "bg-[#1E824C]/10",
  },
  {
    icon: Users,
    value: "50K+",
    unit: "members",
    label: "Active Community",
    description: "Growing by 1,000+ every month",
    color: "text-[#21A6FE]",
    bgColor: "bg-[#21A6FE]/10",
  },
  {
    icon: TrendingUp,
    value: "$8.5M",
    unit: "saved",
    label: "Community Savings",
    description: "Average $170 saved per member",
    color: "text-[#1E824C]",
    bgColor: "bg-[#1E824C]/10",
  },
]

const communityStories = [
  {
    location: "Seattle, WA",
    members: "2,500+",
    savings: "82%",
    image: "🏙️",
  },
  {
    location: "Portland, OR",
    members: "1,800+",
    savings: "78%",
    image: "🌲",
  },
  {
    location: "San Francisco, CA",
    members: "3,200+",
    savings: "85%",
    image: "🌉",
  },
  {
    location: "Austin, TX",
    members: "1,500+",
    savings: "76%",
    image: "🎸",
  },
]

export function CommunityImpactSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-white via-[#F4FAF7] to-[#DFF6FF]">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge className="mb-4 bg-[#1E824C]/10 text-[#1E824C] hover:bg-[#1E824C]/20">
            Our Impact
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#191E23]">
            Together, We're Making{" "}
            <span className="bg-gradient-to-r from-[#1E824C] to-[#21A6FE] bg-clip-text text-transparent">
              Real Change
            </span>
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Our community's collective impact on the planet and their wallets
          </p>
        </motion.div>

        {/* Impact Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/20 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${stat.bgColor} flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                    <div className="mb-2">
                      <span className={`text-4xl font-bold ${stat.color}`}>{stat.value}</span>
                      <span className="text-lg text-[#6B7280] ml-1">{stat.unit}</span>
                    </div>
                    <div className="font-semibold mb-2 text-[#191E23]">{stat.label}</div>
                    <div className="text-sm text-[#6B7280]">{stat.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Community Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Active Communities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityStories.map((community, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4">{community.image}</div>
                    <h4 className="font-bold text-lg mb-2 text-[#191E23]">{community.location}</h4>
                    <div className="space-y-1 text-sm text-[#6B7280]">
                      <div>{community.members} members</div>
                      <div className="text-[#1E824C] font-semibold">
                        {community.savings} avg. savings
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-16 text-center bg-gradient-to-r from-[#1E824C] to-[#21A6FE] rounded-2xl p-12 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Be Part of Something Bigger
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of community members making a real difference in the fight against climate change
          </p>
          <button className="px-8 py-4 bg-white text-[#1E824C] hover:bg-gray-100 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl">
            Join Your Community
          </button>
        </motion.div>
      </div>
    </section>
  )
}
