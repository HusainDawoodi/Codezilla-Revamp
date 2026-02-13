---
name: Codezilla Product Page Development
description: Standardized pattern for building high-conversion product landing pages (like Tawkwise), focusing on data-driven architecture and modular components.
---

# Codezilla Product Page Development

Use this skill when building or refactoring product landing pages (e.g., Tawkwise, Reviewly, Skyguard). The architecture separates content (data) from presentation (components) to ensure maintainability and consistency.

## Core Architecture

### 1. Data-First Approach (`constants/{product}.js`)
All text content, configuration, and static data must be defined in a dedicated constants file. **Do not hardcode text in components.**

**Required Data Constants:**
*   `NAV_LINKS`: Array of anchor links (Solutions, Industries, Pricing, etc).
*   `HERO_STATS`: High-impact numbers for the hero section (e.g., "99.9% Uptime").
*   `INDUSTRIES` (or `USE_CASES`): Detailed array of industry-specific applications with icons, emojis, and conversation scripts/examples.
*   `PLATFORM_CAPABILITIES`: Grid of core features with icons.
*   `ROI_STATS`: Quantitative benefits (e.g., "30% Cost Reduction").
*   `INTEGRATIONS`: List of supported integrations (logos/names).
*   `FOOTER_COLUMNS`: Navigation structure for the product-specific footer.

### 2. Component Structure
Pages are assembled from a standard set of modular components located in `components/{product}/`.

**Standard Modules:**
1.  **Hero**: Impactful headline, value prop, CTA, and dynamic visual (e.g., audio visualization or dashboard mockup).
2.  **TrustedBy**: Strip of partner/client logos to establish immediate trust.
3.  **IndustryUseCases**: Interactive tabs or grid showing specific applications (e.g., Healthcare, Finance).
4.  **AudioDemo / InteractiveDemo**: A "Show, Don't Tell" section. For voice AI, use audio players; for SaaS, use interactive mockups.
5.  **PlatformCapabilities**: Bento-grid or card layout of technical features.
6.  **ROIMetrics**: Large typography emphasizing quantitative results.
7.  **IntegrationEcosystem**: proof of compatibility with existing enterprise stacks.
8.  **CTA**: Final conversion block ("Ready to build?").
9.  **Footer**: Product-specific footer (distinct from global site footer if the product has its own sub-brand identity).

### 3. Page Assembly (`app/{product}/page.js`)
The page file should be a clean composition of these components, wrapped in `<main>`.

**SEO Requirements:**
*   **Metadata**: Define specific `title`, `description`, `keywords`, and `openGraph`.
*   **JSON-LD**: Inject `SoftwareApplication` structured data script.

## Example File Structure
```
app/
  tawkwise/
    page.js        # Page assembly & Metadata
components/
  tawkwise/        # Product-specific components
    TawkwiseHero.jsx
    IndustryUseCases.jsx
    ...
constants/
  tawkwise.js      # Single source of truth for content
```

## Styling Guidelines
*   **Palette**: Define product-specific accent colors in `tailwind.config.js` or use arbitrary values if unique to the product.
*   **Typography**: Use `font-display` (Space Grotesk) for headings and `font-sans` (Manrope) for body.
*   **Gradients**: Use dark, sophisticated gradients (Charcoal/Black bases) with vibrant accents (Neon Orange, Emerald, etc.) for "Enterprise Tech" feel.

## Anti-Patterns
*   ❌ Hardcoding marketing copy inside JSX.
*   ❌ importing global components that don't fit the product's specific visual identity (unless they are truly generic).
*   ❌ Skipping JSON-LD structured data for the software product.
