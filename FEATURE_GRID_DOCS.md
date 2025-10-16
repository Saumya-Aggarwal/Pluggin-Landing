# FeatureGrid Component

A modern, responsive asymmetric feature grid designed for the PlugInn sustainable EV platform. Built with Next.js 15, Tailwind CSS v4, Framer Motion, and shadcn/ui.

## Features

✨ **Asymmetric Grid Layout** - Diagonal emphasis with large cards spanning 2 rows
🎨 **PlugInn Brand Colors** - Green (#1E824C), Blue (#21A6FE), Teal (#009CD1)
🎬 **Interactive Hover Effects** - GIF animations, lift effects, gradient accents
📱 **Fully Responsive** - Single column on mobile, 2x2 grid on desktop
♿ **Accessible** - WCAG AA contrast, semantic HTML, descriptive alt text
🎭 **Smooth Animations** - Framer Motion scroll-triggered reveals with stagger

## Layout Structure

```
┌─────────────────┬─────────────────┐
│                 │                 │
│  Charging       │  Global         │
│  Stations       │  Network        │
│  (Large)        │  (Small)        │
│                 ├─────────────────┤
│                 │                 │
│                 │  Smart Pricing  │
├─────────────────┤  (Small)        │
│                 ├─────────────────┘
│  Community      │
│  Powered        │
│  (Large)        │
│                 │
└─────────────────┘
```

## Usage

### Basic Import

```tsx
import { FeatureGrid } from "@/components/sections/feature-grid"

export default function Page() {
  return <FeatureGrid />
}
```

### Component Props

#### FeatureCard Props

```typescript
type FeatureCardProps = {
  title: string                    // Card title
  description: string              // Descriptive text
  variant: "large" | "small"       // Size variant
  image?: string                   // Static image path
  staticImage?: string             // Static version for hover swap
  gifImage?: string                // Animated GIF for hover
  ctaLabel?: string                // Button text
  ctaHref?: string                 // Button link
  icon?: React.ReactNode           // Fallback icon if no image
  index: number                    // Stagger animation delay
  badge?: string                   // Optional badge label
}
```

## Customization

### Modifying Colors

Update the brand colors in the component:

```tsx
// Primary Green
className="bg-[#1E824C]"

// Power Blue
className="bg-[#21A6FE]"

// Energy Teal
className="bg-[#009CD1]"
```

### Adjusting Grid Dimensions

```tsx
// Desktop card height (260px base unit)
md:auto-rows-[260px]

// Large cards span 2 rows = 540px
md:min-h-[540px]

// Small cards = 260px
min-h-[260px]
```

### Changing Animation Timing

```tsx
transition: {
  duration: 0.6,        // Animation speed
  delay: index * 0.1,   // Stagger delay per card
  ease: [0.23, 1, 0.32, 1] as const  // Cubic bezier easing
}
```

## Accessibility

- ✅ Semantic HTML with proper heading hierarchy
- ✅ Descriptive alt text for all images
- ✅ WCAG AA contrast ratios (4.5:1 minimum)
- ✅ Keyboard navigation for buttons
- ✅ Focus visible states
- ✅ Reduced motion support via `prefers-reduced-motion`

## Performance

- 🚀 Next.js Image optimization
- 🎬 GIFs load only on hover (unoptimized flag)
- 📦 Tree-shakable imports
- ⚡ Viewport-based animation triggers
- 🎯 CSS-only hover states where possible

## Dependencies

```json
{
  "next": "^15.0.0",
  "react": "^19.0.0",
  "framer-motion": "^11.x",
  "tailwindcss": "^4.x",
  "@radix-ui/react-*": "shadcn/ui components",
  "lucide-react": "^0.x"
}
```

## File Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── feature-grid.tsx       ← This component
│   │   └── ecosystem-grid.tsx     ← Alternative grid
│   └── ui/
│       ├── button.tsx             ← shadcn/ui
│       └── badge.tsx              ← shadcn/ui
└── app/
    └── page.tsx                   ← Import here
```

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Chrome 90+

## Examples

### Adding a New Feature Card

```tsx
const features: FeatureCardProps[] = [
  // ... existing cards
  {
    title: "Fleet Management",
    description: "Manage teams, access control, and unified billing from one console.",
    variant: "small",
    staticImage: "/grid/fleet-static.png",
    gifImage: "/grid/fleet.gif",
    badge: "Enterprise",
    index: 4
  }
]
```

### Custom Button Styles

```tsx
<Button
  size="lg"
  className="bg-[#1E824C] hover:bg-[#1E824C]/90 text-white shadow-lg"
>
  Custom CTA
</Button>
```

## Troubleshooting

### Images Not Displaying
- Ensure images are in `public/grid/` folder
- Check file names match exactly (case-sensitive)
- Verify image formats (PNG, GIF, WebP supported)

### Animations Not Working
- Ensure Framer Motion is installed: `npm install framer-motion`
- Check for CSS conflicts with global styles
- Verify `"use client"` directive is present

### Grid Layout Issues
- Mobile: Cards stack in single column automatically
- Desktop: Requires `md:` breakpoint (768px+)
- Check parent container width constraints

## Design Tokens

```css
/* Background */
--soft-cloud: #F8FAFC;

/* Text */
--charcoal-trust: #191E23;
--gray-600: #4B5563;

/* Accent Colors */
--pluginn-green: #1E824C;
--power-blue: #21A6FE;
--energy-teal: #009CD1;

/* Spacing */
--container-max: 1280px (7xl);
--gap-mobile: 1.5rem (gap-6);
--gap-desktop: 2rem (gap-8);
```

## License

Built for PlugInn platform. Internal use only.

---

**Created with:** Next.js 15, Tailwind CSS v4, Framer Motion, shadcn/ui
**Last Updated:** October 2025
