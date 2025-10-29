# LinkVision AI Surveillance - Design Guidelines

## Brand Identity

**Color Palette:**
- Primary: #C800FF (vibrant magenta) - main brand color for CTAs, highlights, and interactive elements
- Accent: #B100FF (electric purple) - secondary accent for gradients and emphasis
- Background: #182863 (deep navy) - primary background for header, footer, and cards
- Text: #FFFFFF (white) - all text content
- Gradient: linear-gradient(135deg, #C800FF, #B100FF) - use for buttons, hero accents, and feature borders

**Typography:**
- Display/Headings: Outfit (bold) - all h1, h2, h3 elements
- Body Text: Inter (regular) - paragraphs, form labels, navigation

**Brand Assets:**
- Logo: /public/linkvision-logo.svg (full wordmark with symbol)
- Symbol: /public/linkvision-symbol.svg (icon-only version)

## Layout Structure

**Site Pages:**
- / (Home) - video hero, features grid, mini-pricing preview, contact form
- /products - product showcase
- /pricing - full pricing tiers
- /solutions - solution categories
- /about - company story
- /case-studies - customer success stories
- /contact - dedicated contact page
- /legal/privacy - privacy policy
- /legal/terms - terms of service

## Component Design System

**Header/Navigation:**
- Deep navy (#182863) background
- White text (#FFFFFF)
- Magenta (#C800FF) hover states on links
- LinkVision logo (full wordmark) on left
- Horizontal navigation menu
- Mobile: hamburger menu with same color treatment

**Hero Section:**
- Video background or dark gradient background
- Deep navy (#182863) base
- Subtle magenta glow/overlay effect under logo
- Large Outfit heading in white
- Supporting text in Inter
- Gradient CTA button (magenta to purple)

**Buttons:**
- Primary: gradient background (linear-gradient(135deg, #C800FF, #B100FF))
- White text
- Slight glow effect on hover (magenta)
- Rounded corners
- If placed over images: add blur backdrop

**Feature Cards:**
- Gradient borders (magenta to purple)
- Magenta/purple gradient icons
- White headings (Outfit)
- White body text (Inter)
- Navy background or transparent with border

**Pricing Cards:**
- Navy (#182863) background
- Three-tier layout
- Middle "Popular" tier: magenta highlight border and magenta badge
- White text throughout
- Gradient CTA buttons
- Feature lists with checkmarks

**Contact/Lead Forms:**
- White input fields with navy text
- Labels in white
- Navy background container
- Gradient magenta submit button
- Form validation states use magenta accents

**Footer:**
- Deep navy (#182863) background
- White text
- Magenta hover states on links
- Multi-column layout with site navigation
- Social media icons in white with magenta hover
- Copyright and legal links

## Visual Treatment

**Spacing & Rhythm:**
- Generous whitespace between sections
- Consistent padding using Tailwind spacing scale (p-8, p-12, p-16, p-20)
- Section vertical spacing: py-16 to py-24

**Borders & Effects:**
- Subtle gradient borders on cards and features
- Soft glow effects on interactive elements (magenta)
- Rounded corners: rounded-lg to rounded-xl
- Shadow hierarchy for depth

**Icons:**
- Use gradient-colored icons (magenta to purple)
- Heroicons or similar modern icon set
- Consistent sizing across components

## Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Single column on mobile
- Multi-column grids on tablet/desktop
- Hamburger menu for mobile navigation
- Touch-friendly button sizing

## SEO & Metadata

- Site Title: "LinkVision — AI Surveillance"
- Meta Description: "AI-ready solar CCTV and surveillance systems built for Australia."
- OpenGraph color: #C800FF
- Favicon using linkvision-symbol.svg

## Images

**Hero Section:**
- Large background video or image showing surveillance/security context
- Fallback: gradient overlay (#182863 base with magenta light overlay)
- Professional, high-tech aesthetic
- 1920x1080 minimum resolution

**Supporting Images:**
- Product photography with navy/magenta color grading
- Case study featured images
- Team photos for about page (if applicable)
- All images should complement the magenta/navy color scheme