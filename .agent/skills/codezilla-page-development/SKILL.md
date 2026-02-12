---
name: Codezilla Page Development
description: How to create and structure new pages in the Codezilla Next.js App Router website
---

# Codezilla Page Development

Follow this skill when creating new pages or modifying the routing structure of the Codezilla website.

---

## App Router Structure

```
app/
├── layout.js                  # Root layout (Navbar, Footer, fonts, globals.css)
├── page.js                    # Homepage (/)
├── globals.css                # Global styles + Tailwind theme
├── favicon.ico
├── who-we-are/
│   └── page.js                # /who-we-are
├── web-development/
│   └── page.js                # /web-development
├── mobile-app-development/
│   └── page.js                # /mobile-app-development
├── hire-front-end-engineers/
│   └── page.js                # /hire-front-end-engineers
├── hire-back-end-engineers/
│   └── page.js                # /hire-back-end-engineers
├── ui-ux/
│   └── page.js                # /ui-ux
└── software-testing/
    └── page.js                # /software-testing
```

### Rules
- Route directories use **kebab-case** matching the URL slug
- Each route has a single `page.js` (server component by default)
- The root `layout.js` provides `<Navbar />` and `<Footer />` globally — do NOT re-add them in page files
- Content padding: `pt-16 lg:pt-20` is applied in the layout to account for the fixed navbar height

---

## Page Composition Pattern

Every page is composed of **section components** stacked vertically. The homepage demonstrates the pattern:

```jsx
// app/page.js
import HeroSlider from '@/components/HeroSlider';
import LogoMarquee from '@/components/LogoMarquee';
import PhilosophyVideo from '@/components/PhilosophyVideo';
import ServicesGrid from '@/components/ServicesGrid';
import WorkCarousel from '@/components/WorkCarousel';
import ProcessGrid from '@/components/ProcessGrid';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ProductGrid from '@/components/ProductGrid';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSlider />
      <LogoMarquee />
      <PhilosophyVideo />
      <ServicesGrid />
      <WorkCarousel projects={projects} />
      <ProcessGrid />
      <TestimonialCarousel />
      <ProductGrid />
      <CTASection />
    </main>
  );
}
```

### Key Principles
1. Each section is a **self-contained component** that handles its own layout, padding, and styling
2. Sections are separated by `border-b-2 border-black` (applied by each section internally)
3. Data/content can be passed as props or imported from `constants/`
4. The page file itself should be minimal — just imports and composition

---

## Constants / Data Files

Static content (team members, values, journey steps, etc.) lives in `constants/`:

```
constants/
├── who-we-are.js      # SOLUTIONS, EXPERTS, CULTURE_GALLERY, SUCCESS_PILLARS, etc.
├── frontend.js        # Frontend service page data
├── backend.js         # Backend service page data
└── software-testing.js # Testing service page data
```

### Pattern
```js
// constants/page-name.js
export const SECTION_DATA = [
  {
    id: "01",
    icon: "psychology",
    title: "Section Title",
    description: "Description text...",
    stat: "98% SUCCESS",
  },
  // ...
];
```

- Use **SCREAMING_SNAKE_CASE** for exported arrays/objects
- Include `icon` field referencing Material Symbols names
- Include `id` as a formatted string (e.g., `"01"`, `"02"`)
- Keep text content in constants, not hardcoded in JSX (except short inline text)

---

## SEO Metadata

Every page should export metadata for SEO. In the root layout:

```js
export const metadata = {
  title: "Codezilla - Executive Precision",
  description: "Codezilla - Executive Precision",
};
```

For individual pages:
```js
// app/web-development/page.js
export const metadata = {
  title: "Web Development Services | Codezilla",
  description: "Build secure, scalable, high-performance web platforms with Codezilla.",
};
```

---

## Animation Stagger Pattern

Sections use `animate-entrance-fade` with incrementing delays:

```jsx
<Section1 />                              {/* delay: 0s (hero, no delay) */}
<Section2 style={{ animationDelay: "0.2s" }} />
<Section3 style={{ animationDelay: "0.4s" }} />
<Section4 style={{ animationDelay: "0.6s" }} />
<Section5 style={{ animationDelay: "0.8s" }} />
<Section6 style={{ animationDelay: "1.0s" }} />
```

Each section applies this internally in its root `<section>` tag:
```jsx
<section
  className="... animate-entrance-fade"
  style={{ animationDelay: "0.6s" }}
>
```

---

## Common Section Templates

### Hero Section (Full-Width)
- Split layout: `grid grid-cols-2` (image left, content right)
- Or full-bleed image with overlay text
- Always includes stats grid at bottom
- Background: `bg-charcoal` with `bg-energy-gradient-dark`

### Service/Feature Grid
- Full-bleed dark section: `bg-charcoal text-white`
- `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- First cell is intro block with eyebrow + heading + description + link
- Remaining cells are interactive cards with group-hover reveal

### Process/How-We-Work Grid
- Light background: `bg-gray-100` with `bg-energy-gradient`
- 3-column grid with `border-2 border-black bg-white`
- Cards invert colors on hover: `hover:bg-black hover:text-white`

### CTA Section
- Full-viewport dark section: `h-screen bg-charcoal`
- Centered oversized heading with primary accent word
- Single prominent CTA button (rounded-full, pulsing glow)
- Optional floating badge element

### Testimonials
- Horizontal scrolling carousel
- Cards with quote, name, role, and avatar

---

## Creating a New Page Checklist

1. Create directory `app/[route-name]/page.js`
2. Add metadata export for SEO
3. Create section components in `components/[route-name]/`
4. Create constants file in `constants/[route-name].js` if data-heavy
5. Compose sections in the page file with `<main className="min-h-screen">`
6. Apply `animate-entrance-fade` with staggered delays on each section
7. Ensure every section has `border-b-2 border-black`
8. Add navigation links in `Navbar.jsx` if the page should appear in nav
9. Test responsive layout at mobile, tablet, and desktop breakpoints
