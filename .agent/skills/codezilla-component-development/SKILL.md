---
name: Codezilla Component Development
description: Patterns and conventions for building React components in the Codezilla website
---

# Codezilla Component Development

Follow this skill when creating or modifying React components for the Codezilla website.

---

## Project Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.x |
| UI | React | 19.x |
| Styling | Tailwind CSS | 4.x |
| Animations | GSAP | 3.14.x |
| Icons | Material Symbols Outlined | CDN |

---

## File Structure & Naming

```
components/
├── Navbar.jsx              # Global layout components (PascalCase)
├── Footer.jsx
├── HeroSlider.jsx          # Page-specific sections (PascalCase)
├── ServicesGrid.jsx
├── ui/                     # Reusable UI primitives
│   ├── Button.jsx
│   ├── Badge.jsx
│   ├── Card.jsx
│   ├── SectionHeader.jsx
│   ├── Input.jsx
│   ├── Select.jsx
│   └── ...
├── web-development/        # Service-page-specific components
├── who-we-are/
└── ...
```

### Rules
- All component files use **PascalCase** with `.jsx` extension
- One default export per file, function name matches filename
- Sub-page components go in a directory matching the route name
- Reusable primitives go in `components/ui/`

---

## Client vs Server Components

- **Default is Server Component** — no directive needed
- Add `"use client";` at top of file ONLY when component uses:
  - `useState`, `useEffect`, `useRef` (React hooks)
  - Browser APIs (`window`, `document`)
  - Event handlers (`onClick`, `onMouseEnter`, etc.)
  - GSAP animations
- Examples of client components: `Navbar.jsx`, `HeroSlider.jsx`, `PhilosophyVideo.jsx`
- Examples of server components: `Footer.jsx`, `ServicesGrid.jsx`, `CTASection.jsx`, `ProcessGrid.jsx`

---

## Existing UI Primitives

Always check if these components solve your need before creating new ones.

### Button
```jsx
import Button from "@/components/ui/Button";

<Button variant="primary" size="sm" href="#" icon="arrow_forward">
  Schedule Call
</Button>
```
| Prop | Values | Default |
|---|---|---|
| `variant` | `"primary"`, `"secondary"`, `"outline"`, `"outline-white"` | `"primary"` |
| `size` | `"sm"`, `"md"`, `"lg"` | `"md"` |
| `href` | URL string (renders as `<Link>`) | — |
| `icon` | Material Symbols icon name | — |
| `iconPosition` | `"left"`, `"right"` | `"right"` |

### SectionHeader
```jsx
import SectionHeader from "@/components/ui/SectionHeader";

<SectionHeader
  eyebrow="Capabilities"
  title="What We Do"
  description="Our service matrix is designed for high-impact intervention."
  align="left"
  theme="dark"
/>
```
| Prop | Values | Default |
|---|---|---|
| `eyebrow` | String (small label above heading) | — |
| `title` | String (main heading, rendered uppercase) | — |
| `description` | String (body text below heading) | — |
| `align` | `"left"`, `"center"`, `"right"` | `"left"` |
| `theme` | `"light"`, `"dark"` | `"light"` |

### Other Primitives
- **Badge** — Small label/tag component
- **Card** — Generic card container
- **FeatureCard** — Icon + title + description card
- **FAQ** — Accordion-style FAQ item
- **Input** — Styled form input
- **Select** — Styled dropdown select
- **Marquee** — Scrolling marquee component
- **TechStackGrid** — Grid of technology icons
- **TrustBadges** — Row of trust/certification badges
- **WorkCard** — Portfolio/case study card

---

## Component Patterns

### Standard Section Component
```jsx
export default function SectionName() {
  return (
    <section
      className="bg-charcoal text-white border-b-2 border-black animate-entrance-fade"
      style={{ animationDelay: "0.6s" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        {/* Eyebrow label */}
        <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
          Label
        </span>
        {/* Heading */}
        <h2 className="font-display text-4xl md:text-4xl font-bold uppercase leading-none mb-6">
          Section Title
        </h2>
        {/* Divider */}
        <div className="w-12 h-1 bg-primary mb-6" />
        {/* Content */}
      </div>
    </section>
  );
}
```

### Group Hover Card Pattern
Used extensively in ServicesGrid and ProcessGrid:
```jsx
<div className="group hover:bg-black hover:text-white transition-all duration-500 relative overflow-hidden">
  {/* Background image (revealed on hover) */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
    <Image src="..." alt="..." fill className="object-cover" />
  </div>
  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

  {/* Content (stays above) */}
  <div className="z-10 relative">
    <h3 className="group-hover:text-primary transition-colors">Title</h3>
    <p className="opacity-60 group-hover:opacity-100 transition-opacity">Description</p>
    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
      Action Label
    </span>
  </div>
</div>
```

### Numbered Item Pattern
For ordered lists/cards:
```jsx
<span className="font-display text-6xl font-bold text-outline-white group-hover:text-primary transition-colors">
  01
</span>
```

### Icon + Title + Description Row
```jsx
<div className="flex items-center gap-2 mb-0.5">
  <span className="material-symbols-outlined text-sm text-primary opacity-80">
    icon_name
  </span>
  <span className="text-sm font-bold uppercase tracking-wide text-gray-300">
    Item Title
  </span>
</div>
<p className="text-xs text-gray-500 leading-tight">Description text</p>
```

---

## JSDoc Documentation

All reusable component props MUST be documented with JSDoc:
```jsx
/**
 * Reusable ComponentName
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'secondary'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {React.ReactNode} props.children - Content
 */
export default function ComponentName({ variant = "primary", size = "md", children }) {
```

---

## Import Conventions

```jsx
// Next.js imports first
import Link from "next/link";
import Image from "next/image";

// React hooks (client components only)
import { useState, useEffect, useRef } from "react";

// Next.js hooks (client components only)
import { usePathname } from "next/navigation";

// External libraries
import gsap from "gsap";

// Internal components
import Button from "@/components/ui/Button";

// Constants/data
import { SOLUTIONS } from "@/constants/who-we-are";
```

---

## Image Handling

- **Local images:** Place in `public/images/`, reference as `/images/filename.ext`
- **Next.js Image component:** Use for all local images with `width`/`height` or `fill`
- **Remote images:** Use native `<img>` tag OR configure domain in `next.config.mjs`
- **Priority loading:** Add `priority` prop to above-the-fold hero images
- **Common patterns:**
  - `fill` + `className="object-cover"` for background images
  - `object-top` for people/team photos
  - `contrast-125 brightness-90` for dramatic photo treatment

---

## Responsive Design Rules

1. **Mobile-first:** Write base styles for mobile, then add `md:` and `lg:` overrides
2. **Grid columns:** Use `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` pattern
3. **Hidden elements:** Use `hidden lg:flex` or `hidden lg:block` for desktop-only content
4. **Text sizing:** Usually `text-3xl md:text-4xl lg:text-7xl` for headings
5. **Padding:** `p-6 lg:p-12` or `px-6 lg:px-8` for sections
6. **`col-span`:** Use Tailwind's grid colspan for varying column widths
