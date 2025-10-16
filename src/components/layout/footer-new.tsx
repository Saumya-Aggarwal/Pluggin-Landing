import Link from "next/link"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export function FooterNew() {
  return (
    <footer className="w-full border-t border-[rgb(var(--muted))]/20 bg-[rgb(var(--bg-dark))]">
      <div className="container max-w-[1200px] mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left - Logo & Tagline */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <Image 
                src="/logo.webp" 
                alt="PlugInn Logo" 
                width={100} 
                height={100}
                className="w-16 h-16"
              />
              <span className="text-xl font-bold text-[rgb(var(--white))] tracking-tight">
                PLUG INN
              </span>
            </Link>
            <p className="text-sm text-[rgb(var(--muted))] max-w-xs">
              Verified local chargers for your EV. Book in seconds.
            </p>
          </div>

          {/* Right - Links & Social */}
          <div className="flex items-center gap-8">
            <Link 
              href="#privacy" 
              className="text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--mint))] transition-colors"
            >
              Privacy
            </Link>
            <Link 
              href="#terms" 
              className="text-sm text-[rgb(var(--muted))] hover:text-[rgb(var(--mint))] transition-colors"
            >
              Terms
            </Link>
            
            {/* LinkedIn Icon */}
            <Link 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--muted))] hover:text-[rgb(var(--mint))] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>
        </div>

        <Separator className="my-8 bg-[rgb(var(--muted))]/20" />

        <div className="text-center text-sm text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} PlugInn. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
