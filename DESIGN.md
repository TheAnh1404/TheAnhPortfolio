---
name: Technical Precision System
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b23'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fb'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#4b41e1'
  on-secondary: '#ffffff'
  secondary-container: '#645efb'
  on-secondary-container: '#fffbff'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#e2dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#0f0069'
  on-secondary-fixed-variant: '#3323cc'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#faf8ff'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
typography:
  display:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: -0.01em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 80px
  grid-columns: '12'
---

## Brand & Style

The design system is engineered for high-density information environments, specifically tailored for a technical engineering portfolio. The brand personality is rooted in **Architectural Clarity** and **Functional Utility**, prioritizing content structure and technical narrative over decorative elements.

The aesthetic follows a **Premium SaaS Minimalist** approach. It draws inspiration from high-end developer tools, utilizing a strict monochromatic foundation punctuated by high-precision blue accents. The visual language conveys reliability and technical expertise through obsessive alignment, generous whitespace, and a "code-first" presentation style. The goal is to evoke a sense of calm, focused intelligence that appeals to technical recruiters and engineering leaders.

## Colors

The color palette is a "Strict Light" scheme designed to maximize legibility and minimize cognitive load. 

- **Foundation:** The background uses a subtle off-white (`#FAFAFA`) to reduce screen glare, while surfaces sit on pure white (`#FFFFFF`) to create clear hierarchical separation.
- **Typography:** Primary content uses a deep ink black (`#09090B`) for maximum contrast, while secondary metadata uses a neutral zinc gray (`#71717A`).
- **Accents:** A high-vibrancy Blue (`#2563EB`) is reserved for primary actions and technical highlights. Indigo (`#4F46E5`) is used sparingly for secondary interactive states or to differentiate between logic-heavy and design-heavy project sections.
- **Lines:** Borders are extremely faint, using a semi-transparent zinc to create structure without visual noise.

## Typography

This design system utilizes a tri-font strategy to differentiate between intent, content, and data.

- **Geist Sans** is used for headlines and display text. Its geometric precision and tight tracking reflect modern engineering standards.
- **Inter** serves as the workhorse for body copy, providing exceptional readability for long-form case studies and technical explanations.
- **JetBrains Mono** is essential for all technical metadata, labels, code snippets, and "stats." This monospaced font signals a "developer-at-work" environment.

Scale is managed strictly; display type uses tight leading and negative letter-spacing for a modern "tech-brochure" look, while body copy remains open and accessible.

## Layout & Spacing

The layout is governed by a **Rigid Grid System**. 

- **Grid:** A 12-column fluid grid on desktop, shifting to a single column on mobile. Gaps are strictly enforced at 24px (6 units).
- **Rhythm:** All spacing (padding, margins, gaps) must be a multiple of 4px. 
- **Bento Logic:** Project galleries use a "Bento-box" layout model—modular rectangles of varying spans (e.g., a 2/3 width main card paired with 1/3 width stats cards) that maintain a unified external footprint.
- **Verticality:** A centered vertical "spine" or timeline is used for the experience section, anchoring the narrative chronologically.

## Elevation & Depth

In line with the premium SaaS aesthetic, depth is created through **Tonal Layering** and **Subtle Blurs** rather than traditional heavy shadows.

- **Surface Levels:** The background is the lowest level. Surface cards are white with a 1px border. On hover, cards transition to a slightly higher elevation using a very soft, diffused ambient shadow (0px 8px 30px rgba(0,0,0,0.04)).
- **Glassmorphism:** Navigation bars and sticky headers must use a backdrop-filter blur (20px) with a semi-transparent white fill (80% opacity). This maintains context of the scroll position while keeping the UI feeling "light" and airy.
- **Inlaid Depth:** Form inputs and code blocks use a subtle "inset" look—achieved with a light gray background (`#F4F4F5`) and no shadow—to appear etched into the surface.

## Shapes

The design system adopts a **Soft-Edge** philosophy. 

Corner radii are kept small (4px to 8px) to maintain a professional, slightly technical "hardware" feel. High-radius or pill shapes are exclusively reserved for "Status Badges" or "Tags" to differentiate them from functional UI components like cards or buttons.

- **Small elements (Checkboxes, Small Buttons):** 4px.
- **Large elements (Cards, Hero Images):** 8px.
- **Badges/Chips:** Full round (Pill).

## Components

### Buttons
- **Primary:** Solid `#09090B` with white text. No gradient. 
- **Secondary:** White background with a 1px border. 
- **Interaction:** On hover, primary buttons shift to `#27272A`; secondary buttons gain a subtle light gray fill.

### Technical Badges
Small, high-contrast labels used for tech stacks (e.g., "React", "Rust"). Use `label-mono` typography, a light zinc background, and a subtle border.

### Bento-style Cards
The primary container for projects. Must include a subtle border, 8px rounded corners, and internal padding of 32px. Titles should be `headline-md`.

### Vertical Timeline
A 2px wide vertical line in `border_hex`. Milestones are represented by 12px circles. Current or active roles use the Primary Accent blue for the circle highlight.

### Input Fields
Minimalist styling. 1px border that transitions to the Primary Accent blue on focus. Use `label-mono` for placeholder text to maintain the technical aesthetic.

### Navigation
A floating "Island" style or a top-fixed bar using the Glassmorphic effect. Use `label-mono` for links to emphasize the "System" feel.