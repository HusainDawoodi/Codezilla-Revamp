---
name: Codezilla Content & Copywriting
description: Brand voice, tone, and content conventions for all copy on the Codezilla website
---

# Codezilla Content & Copywriting

Follow this skill when writing any text content — headings, descriptions, CTAs, labels, or any copy — for the Codezilla website.

---

## Brand Voice

| Attribute | Description |
|---|---|
| **Tone** | Authoritative, confident, precise — like a senior engineer briefing a C-suite |
| **Register** | Professional but not corporate-stiff; direct but not casual |
| **Energy** | Bold, high-conviction, action-oriented |
| **Perspective** | First-person plural ("We architect...", "We deploy...") |

### Voice Principles
1. **Lead with authority:** "We don't just build software. We architect AI-driven systems that define the next decade of efficiency."
2. **Be precise:** Use specific numbers (98%, 350+, 72 hours) over vague claims
3. **Be concise:** No filler words. Every sentence earns its place.
4. **Use action verbs:** Architect, Deploy, Scale, Build, Engineer, Transform
5. **Avoid:** Flowery language, buzzword-only sentences, passive voice, hedging ("might", "could", "we think")

---

## Heading Conventions

### Style Rules
- **ALL CAPS** — headings render in uppercase via CSS (`uppercase` class), but write them in **Title Case** in source code for readability
- **Short and punchy** — 2-5 words ideally
- **Primary accent word** — one key word in the heading wraps in `<span className="text-primary">` 

### Examples
```jsx
// Hero heading with accent
<h1>
  <span className="text-primary">Intelligence </span>
  at the core.
</h1>

// CTA heading with accent
<h2>
  Ready to<br />build <span className="text-primary">what's next?</span>
</h2>

// Section heading (simple)
<h2>What We Do</h2>
<h2>How We Work</h2>
```

---

## Eyebrow Labels

Small labels above headings that categorize or number the section:

### Patterns
| Pattern | Example |
|---|---|
| Category label | `Capabilities` |
| Numbered tag | `The Intelligence First // 001` |
| Act label | `Act 2: The Philosophy` |
| Type badge  | `Type A` |

### CSS Pattern
```jsx
<span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
  Capabilities
</span>
```

For numbered tags with decorative square:
```jsx
<div className="flex items-center gap-4 mb-6">
  <span className="w-4 h-4 bg-primary"></span>
  <span className="text-white text-sm font-bold tracking-widest uppercase">
    The Intelligence First // 001
  </span>
</div>
```

---

## Body Copy

### Descriptions
- **Length:** 1-2 sentences max per description block
- **Tone:** Precise, benefit-focused, action-oriented
- **Structure:** What we do → What it means for the client

### Examples
| ❌ Too vague | ✅ Codezilla style |
|---|---|
| "We provide great cloud services" | "Building the invisible backbone of your enterprise. Scalable, secure, and resilient infrastructure." |
| "Our team is experienced" | "This ain't our first rodeo. Our team has unbeatable experience." |
| "We do software testing" | "Ensure quality with comprehensive testing and QA." |

### Quote / Philosophy Text
For longer text blocks, use the left-border pattern:
```jsx
<p className="text-base lg:text-xl text-gray-400 font-medium leading-relaxed border-l-4 border-primary pl-6">
  We don't just build software. We architect AI-driven systems that
  define the next decade of efficiency.
</p>
```

---

## CTA Language

### Primary CTAs
- **"Schedule a Discovery Call"** — main conversion CTA
- **"Schedule Call"** — short navbar CTA

### Secondary CTAs
- **"Full Service List"** — links to service overview
- **"View all work"** — links to portfolio
- **"View Culture"** — links to culture page
- **"Read Blog"** — links to insights

### CTA Pattern
Always pair text with a trailing arrow icon:
```jsx
<span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 text-primary">
  Full Service List
  <span className="material-symbols-outlined text-lg">arrow_forward</span>
</span>
```

---

## Stats Display

Stats are prominent and always follow this pattern:
```jsx
<span className="block text-5xl lg:text-6xl font-display font-bold text-primary mb-2">
  98<span className="text-3xl align-top text-white">%</span>
</span>
<span className="text-xs uppercase tracking-widest text-white font-bold">
  Deployment Success
</span>
```

### Rules
- **Number** is large, `text-primary`, `font-display`
- **Unit/suffix** (%, +, x) is smaller and `text-white`
- **Label** below is tiny uppercase tracking-widest
- Use real, specific numbers (98%, 350+, 99.9%, +20%)

---

## Card / Service Item Copy

### Title
- 2-3 words, uppercase, bold
- Examples: "AI & Data Strategy", "Cloud Architecture", "Product Engineering"

### Description
- 1-2 sentences, `text-sm`, precise
- Pattern: "{What it is}. {What it delivers}."
- Examples:
  - "Deploying predictive models directly into your business logic. From black box to clear ROI."
  - "Full-cycle development. We don't just write code; we engineer outcomes through precise execution."

### Action Label
- Single word or short phrase: "Analyze", "Scale", "Build"
- Shown on hover with a small orange square indicator

---

## Navigation Labels

- **ALL CAPS** via CSS
- **Short:** 2-3 words max
- Examples: "Who we are", "What we do", "Case studies", "What we think", "Career"
- Sub-menu category headers: "Digital Product Development", "Dedicated Teams", "Codezilla Accelerators"

---

## Company Messaging Pillars

Use these when writing about the company:

| Pillar | Key Message |
|---|---|
| **Intelligence** | "Where Ideas Turn Into Intelligent Solutions" |
| **Partnership** | "Partners, Not Vendors" |
| **Precision** | "Detail-Driven — Excellence in every detail" |
| **Reach** | "Global Yet Local" |
| **Integrity** | "Transparent & Trusted" |
| **Agility** | "Built to Adapt" |

### Company Description (Short)
> "We architect the future. A rigorous, engineering-first approach to complex digital transformation and AI integration."

### Company Description (Long)
> "The AI-powered partner for enterprise product evolution. We don't just build software. We architect AI-driven systems that define the next decade of efficiency."

---

## Testimonial Format

```jsx
<blockquote>
  "Codezilla transformed our vision into reality. Their technical expertise is unmatched in the industry."
</blockquote>
<cite>
  <strong>Khalil Halilu</strong>
  <span>Tech Founder</span>
</cite>
```

- Quotes are short (1-2 sentences)
- Attribution includes name and role/title
- Tone is professional, emphasizing results and trust

---

## Content Don'ts

1. ❌ Don't use casual language ("Hey there!", "Check it out!", "Awesome")
2. ❌ Don't use passive voice ("Services are provided by us")
3. ❌ Don't use vague superlatives without proof ("best in class", "world-leading")
4. ❌ Don't write paragraphs longer than 3 sentences in body copy
5. ❌ Don't use emojis in any website copy
6. ❌ Don't capitalize random words — use the `uppercase` CSS class for visual caps
7. ❌ Don't start descriptions with "Our" repeatedly — vary sentence structure
