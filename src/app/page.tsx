import { Header } from "@/components/layout/header"
import { FooterNew } from "@/components/layout/footer-new"
import { HeroSection } from "@/components/sections/hero-new"
import { FeatureCardsSection } from "@/components/sections/feature-cards"
import { HowItWorksRow } from "@/components/sections/how-it-works-row"
import { AboutSection } from "@/components/sections/about"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { FAQSection } from "@/components/sections/faq-new"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <HeroSection />
        
        <div className="flex justify-center py-8">
          <Separator className="max-w-6xl bg-[rgb(var(--mint))] opacity-50" />
        </div>
        
        <AboutSection />
        
        <div className="flex justify-center py-8">
          <Separator className="max-w-6xl bg-[rgb(var(--mint))] opacity-50" />
        </div>
        
        <FeatureCardsSection />
        
        <div className="flex justify-center py-8">
          <Separator className="max-w-6xl bg-[rgb(var(--mint))] opacity-50" />
        </div>
        
        <HowItWorksRow />
        
        <div className="flex justify-center py-8">
          <Separator className="max-w-6xl bg-[rgb(var(--mint))] opacity-50" />
        </div>
        
        <FeatureGrid />
        
        <div className="flex justify-center py-8">
          <Separator className="max-w-6xl bg-[rgb(var(--mint))] opacity-50" />
        </div>
        
        <FAQSection />
      </main>
      <FooterNew />
    </div>
  )
}
