"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide
        setIsVisible(false)
      } else {
        // Scrolling up - show
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  const navItems = [
    { label: "How it works", href: "#how-it-works" },
    { label: "Become a host", href: "#features" },
    { label: "Support", href: "#faq" },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-[rgb(var(--bg-dark))]/95 backdrop-blur-sm border-b border-[rgb(var(--muted))]/20 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container max-w-[1200px] mx-auto flex h-20 items-center justify-between px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <Image 
            src="/logo.webp" 
            alt="PlugInn Logo" 
            width={48} 
            height={48}
            className="w-12 h-12"
          />
          <span className="text-2xl font-bold text-[rgb(var(--white))] tracking-tight">
            PLUG INN
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[rgb(var(--white))] hover:text-[rgb(var(--mint))] transition-colors font-medium text-sm tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            className="hidden md:inline-flex btn-outline border-2 border-[rgb(var(--outline-mint))] text-[rgb(var(--mint))] hover:bg-[rgb(var(--mint))] hover:text-[rgb(var(--bg-dark))] rounded-full px-5 py-2 text-sm font-semibold"
          >
            Log in
          </Button>
          <Button className="btn-primary bg-[rgb(var(--mint))] text-[rgb(var(--bg-dark))] hover:bg-[rgb(var(--mint-dark))] rounded-full px-6 py-3 text-sm font-bold uppercase shadow-lg">
            BOOK QUICK SLOT
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-[rgb(var(--white))]">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-[rgb(var(--panel))] border-[rgb(var(--muted))]/20">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-[rgb(var(--white))] hover:text-[rgb(var(--mint))] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full border-[rgb(var(--outline-mint))] text-[rgb(var(--mint))] hover:bg-[rgb(var(--mint))] hover:text-[rgb(var(--bg-dark))]"
                  >
                    Log in
                  </Button>
                  <Button className="w-full bg-[rgb(var(--mint))] text-[rgb(var(--bg-dark))] hover:bg-[rgb(var(--mint-dark))] font-bold uppercase">
                    BOOK QUICK SLOT
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
