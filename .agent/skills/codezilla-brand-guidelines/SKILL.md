---
name: Codezilla Brand Guidelines
description: Complete brand identity, design system, and visual language for the Codezilla website
---

# Codezilla Brand Guidelines

Use this skill whenever creating or modifying UI elements, pages, or visual content for the Codezilla website. Every design decision must align with these guidelines.

---

## Brand Identity

- **Brand Name:** Codezilla
- **Tagline:** Executive Precision
- **Positioning:** AI-powered engineering partner for enterprise product evolution
- **Brand Voice:** Engineering-first, bold, authoritative, precision-focused
- **Personality:** Technical, confident, no-nonsense, premium

---

## Color Palette

### Primary Colors
| Token | Hex | Usage |
|---|---|---|
| `primary` | `#FF6D00` | CTAs, accents, active states, highlights, icons |
| `primary-hover` | `#FF9100` | Hover state for primary elements |

### Dark Theme Colors
| Token | Hex | Usage |
|---|---|---|
| `charcoal` | `#0F1218` | Primary dark background (hero, footer, services) |
| `obsidian` | `#060606` | Deepest dark background |
| `background-dark` | `#111827` | Secondary dark background |
| `border-dark` | `#1F2937` | Dark mode borders |
| `dark-accent` | `#111111` | Dark accent surfaces |

### Light Theme Colors
| Token | Hex | Usage |
|---|---|---|
| `background-light` | `#F3F4F6` | Default page background (body) |
| `paper` | `#F9FAFB` | Card/surface backgrounds |

### Accent Colors
| Token | Hex | Usage |
|---|---|---|
| `cyan-accent` | `#00E5FF` | Secondary accent for tech/AI emphasis |

### Semantic Usage Rules
- **Text on dark:** `text-white` for headings, `text-gray-300` for body, `text-gray-400` for secondary, `text-gray-500` for tertiary
- **Text on light:** `text-black` for headings, `text-gray-600` for body
- **Primary text is ALWAYS `text-primary`** — never use raw `#FF6D00` inline for text
- **Primary with opacity:** Use `rgba(255,109,0,X)` for glows, shadows, gradients
- **Never** use plain red, blue, or green as standalone UI colors

---

## Typography

### Font Families
| Token | Font | Usage |
|---|---|---|
| `font-display` | **Space Grotesk** (`var(--font-space-grotesk)`) | Headings, hero text, stats, navigation |
| `font-sans` | **Manrope** (`var(--font-manrope)`) | Body text, descriptions, paragraphs |
| `font-mono` | System monospace | Labels, badges, tiny metadata |

### Heading Styles
- **All headings are UPPERCASE** with `font-display`, `font-bold`, `tracking-tighter`
- Hero h1: `text-5xl lg:text-6xl xl:text-7xl`, leading `1.05`
- Section h2: `text-4xl md:text-4xl`, uppercase
- Card h3: `text-xl lg:text-2xl` or `lg:text-3xl`, uppercase
- CTA h2: `text-5xl md:text-8xl lg:text-9xl`, uppercase

### Label / Eyebrow Styles
- `text-xs font-bold uppercase tracking-widest text-primary` (standard eyebrow)
- `text-xs font-bold uppercase tracking-[0.2em]` (mega-menu section headers)
- `text-xs font-bold uppercase tracking-[0.4em]` (SectionHeader eyebrow)

### Body Text Styles
- Standard body: `text-base leading-relaxed` or `text-sm leading-relaxed`
- Secondary text: `text-gray-400` on dark, `text-gray-600` on light
- Small metadata: `text-xs font-bold uppercase tracking-widest`

### Text Outline Utility
For decorative large numbers or outlined heading text:
```
text-outline-white    → -webkit-text-stroke: 1px rgba(255,255,255,0.4); color: transparent
text-outline-primary  → -webkit-text-stroke: 1.5px #FF6D00; color: transparent
text-outline-black    → -webkit-text-stroke: 1px rgba(0,0,0,0.2); color: transparent
```

---

## Borders & Shadows (Brutalist System)

### Border System
- **Primary division borders:** `border-2 border-black` (between major sections, around cards)
- **Subtle dark borders:** `border border-white/10` (inside dark sections)
- **Active indicator:** `border-b-2 border-primary` (active nav links)
- **Card left accent:** `border-l-2 border-primary` (library items on hover, quote blocks)

### Shadow System (Neo-Brutalist)
- **Black card shadow:** `shadow-[8px_8px_0px_0px_#000000]` → class `card-shadow-black`
- **Orange card shadow:** `shadow-[8px_8px_0px_0px_#FF6D00]` → class `card-shadow-orange`
- **Badge shadow (hero):** `shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]` or `shadow-[4px_4px_0px_0px_rgba(255,109,0,1)]`
- **CTA glow:** `shadow-[0_0_0_8px_rgba(255,109,0,0.3)]` with hover: `shadow-[0_0_0_12px_rgba(255,255,255,0.2)]`
- **Button shadow:** `shadow-[0_4px_12px_rgba(255,109,0,0.3)]`

---

## Glassmorphism & Overlays

### Glass Morphism (Dark Nav / Panels)
```css
.glass-morphism {
  background: rgba(15, 18, 24, 0.96);
  backdrop-filter: blur(40px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
```

### Grain Overlay
Use `bg-grain-overlay` for subtle texture on surfaces (SVG-based noise pattern).

### Energy Gradients
- **Light mode:** `bg-energy-gradient` → 135deg from `rgba(255,109,0,0.15)` to transparent
- **Dark mode:** `bg-energy-gradient-dark` → 135deg from `rgba(255,109,0,0.1)` to `rgba(15,18,24,1)`

### Image Overlays (Dark Sections)
Always layer gradients over images:
```jsx
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
<div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
```

---

## Icon System

- **Library:** Google Material Symbols Outlined
- **CDN:** Loaded via `<link>` in `layout.js`:
  ```
  https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap
  ```
- **Usage:** `<span className="material-symbols-outlined">icon_name</span>`
- **Sizes:** Default (24px), `!text-4xl` for cards, `text-sm` for inline, `text-5xl` for feature blocks
- **Filled variant:** Add class `filled` → `font-variation-settings: "FILL" 1`
- **Icon color:** Usually `text-primary` with `opacity-80`

### Common Icons Used
`psychology`, `cloud_sync`, `terminal`, `rocket_launch`, `group_add`, `saved_search`, `monitoring`, `lightbulb`, `design_services`, `javascript`, `devices`, `bug_report`, `hub`, `cloud`, `verified`, `verified_user`, `groups`, `settings_suggest`, `public`, `shield`, `bolt`, `handshake`, `trending_up`, `arrow_forward`, `expand_more`, `menu`, `close`, `play_arrow`, `pause`, `volume_up`, `volume_off`

---

## Animations

### GSAP (for complex interactions)
- Used for modal open/close (scale, opacity, rotateX, translateY)
- Import: `import gsap from "gsap"`
- Pattern: Create `gsap.timeline({ paused: true })` in `useEffect`, play on state change

### CSS Animations (for persistent effects)
| Name | Duration | Use |
|---|---|---|
| `animate-entrance-fade` | 1s ease-out | Section entrance (staggered with `animationDelay`) |
| `animate-depth-zoom` | 12s infinite | Background image parallax zoom |
| `animate-marquee` | 40s linear infinite | Logo/text marquee scroll |
| `animate-spin-slow` | 12s linear infinite | Slow-spinning decorative elements |
| `animate-float` | 4s ease-in-out infinite | Floating elements |
| `animate-pulse-slow` | 6s cubic-bezier infinite | Subtle pulsing |

### Entrance Stagger Pattern
Each section on a page gets an incremented `animationDelay`:
```jsx
style={{ animationDelay: "0.2s" }}  // Section 1
style={{ animationDelay: "0.4s" }}  // Section 2
style={{ animationDelay: "0.6s" }}  // Section 3
// ...increment by 0.2s
```

### Hover Transitions
- Standard transition: `transition-all duration-300` or `transition-colors`
- Image reveal on hover: `opacity-0 group-hover:opacity-100 transition-opacity duration-700`
- Scale on hover: `hover:scale-105 transition-transform duration-700`
- Color inversion: `hover:bg-black hover:text-white` (ProcessGrid cards)

---

## Layout Grid

- **12-column CSS grid** for major layouts: `grid grid-cols-12`
- **Max container width:** `max-w-7xl mx-auto px-6 lg:px-8`
- **Section borders:** Every major section ends with `border-b-2 border-black`
- **Responsive breakpoints:** Mobile-first, `md:` (768px), `lg:` (1024px), `xl:` (1280px)
- **Full-bleed sections:** Services, Hero span full viewport width
- **Content sections:** Wrapped in `max-w-7xl mx-auto`

---

## Logo Usage

- **Dark logo:** `/images/codezilla.svg` (used in navbar on white bg)
- **Light logo:** `/images/white-logo.svg` (used in footer and mobile menu on dark bg)
- **Sizes:** Navbar: `w-35 lg:w-40`, Footer: `w-35 lg:w-52`, Mobile: `w-40`

---

## Do's & Don'ts

### Do
- Use `font-display` + `uppercase` + `font-bold` + `tracking-tighter` for ALL headings
- Use `text-primary` (#FF6D00) as the only accent color
- Add `border-2 border-black` between major page sections
- Use `Material Symbols Outlined` for all icons
- Stagger entrance animations with 0.2s increments
- Use energy gradients as subtle background enhancement
- Keep body text `text-sm` or `text-base` with `leading-relaxed`

### Don't
- Never use rounded corners larger than `rounded-lg` (the design is angular/brutalist)
- Never introduce new accent colors without a design decision
- Never skip the 2px black border between sections
- Never use system fonts — always use Space Grotesk or Manrope
- Never add heavy animations that compete with GSAP interactions
- Never use inline styles for colors — always use Tailwind tokens
