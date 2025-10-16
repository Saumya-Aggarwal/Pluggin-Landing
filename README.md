# PlugInn Landing Page

A modern, responsive landing page for PlugInn - a sustainable energy sharing platform built with Next.js 15, Shadcn/UI, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router & Turbopack
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn/UI
- **Animations**: Framer Motion
- **Typography**: Geist Sans & Geist Mono
- **Icons**: Lucide React
- **Language**: TypeScript

## 📦 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with PlugInn brand colors
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Main landing page
│   └── providers.tsx         # Theme provider
├── components/
│   ├── layout/
│   │   ├── header.tsx        # Navigation header
│   │   └── footer.tsx        # Footer with links
│   ├── sections/
│   │   ├── hero.tsx          # Hero section with CTA
│   │   ├── features.tsx      # Key features grid
│   │   ├── how-it-works.tsx  # Step-by-step guide
│   │   ├── testimonials.tsx  # Customer testimonials
│   │   ├── community.tsx     # Impact statistics
│   │   ├── faq.tsx           # FAQ accordion
│   │   └── cta.tsx           # Final call-to-action
│   └── ui/                   # Shadcn UI components
└── lib/
    └── utils.ts              # Utility functions
```

## 🎨 Brand Colors

- **PlugInn Green**: Primary brand color
- **PlugInn Blue**: Secondary brand color
- **Soft Green**: Background accent
- **Sky Blue**: Background accent
- **Charcoal**: Text color

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📱 Landing Page Sections

1. **Hero Section** - Animated hero with gradient background, key stats, and CTA
2. **Features** - 6 feature cards highlighting platform benefits
3. **How It Works** - 4-step process with animations
4. **Testimonials** - Customer reviews with 5-star ratings
5. **Community Impact** - Real-time statistics and active communities
6. **FAQ** - Accordion-based frequently asked questions
7. **Final CTA** - Email signup with trust indicators

## 🎭 Key Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth scroll animations with Framer Motion
- ✅ Dark mode support with next-themes
- ✅ Accessible UI components from Shadcn/UI
- ✅ SEO optimized with Next.js metadata
- ✅ Fast development with Turbopack
- ✅ TypeScript for type safety

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub and import in Vercel
# Zero configuration needed
```

### Build for Production
```bash
npm run build
npm start
```

## 📝 Customization

Edit content in each section component:
- Hero stats: `src/components/sections/hero.tsx`
- Features: `src/components/sections/features.tsx`
- Testimonials: `src/components/sections/testimonials.tsx`
- Brand colors: `src/app/globals.css`

---

Built with 💚 for a sustainable future


This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
