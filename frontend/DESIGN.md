---
name: Emerald Terminal
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394e'
  surface-container-lowest: '#060d20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3e'
  surface-container-highest: '#2d3449'
  on-surface: '#dbe2fd'
  on-surface-variant: '#bbcac0'
  inverse-surface: '#dbe2fd'
  inverse-on-surface: '#283044'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#6ffbbe'
  on-primary: '#003824'
  primary-container: '#4edea3'
  on-primary-container: '#005f40'
  inverse-primary: '#006c4a'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#d8e2ff'
  on-tertiary: '#002e6a'
  tertiary-container: '#adc6ff'
  on-tertiary-container: '#004fab'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d8e2ff'
  tertiary-fixed-dim: '#adc6ff'
  on-tertiary-fixed: '#001a42'
  on-tertiary-fixed-variant: '#004395'
  background: '#0b1326'
  on-background: '#dbe2fd'
  surface-variant: '#2d3449'
  surface-card: '#0f172a'
  surface-border: '#1e293b'
  text-on-surface: '#dae2fd'
  text-variant: '#bbcabf'
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
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
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 32px
  bento-gap: 16px
  section-gap: 128px
  container-max: 1200px
---

## Brand & Style

Emerald Terminal is a high-performance design system for engineering portfolios and technical SaaS products. It blends **Corporate Modernism** with **Technical Minimalism**, evoking the focused environment of a code editor while maintaining the professional polish required for enterprise-level visibility.

The brand personality is authoritative, precise, and sophisticated. It targets a technical audience that values clean architecture, speed, and data density. The aesthetic utilizes "Deep Space" backgrounds paired with high-energy "Electric Emerald" accents to create a high-contrast, legible interface that feels both futuristic and grounded in engineering reality. Key visual motifs include Bento-box layouts for skill density and glassmorphism in headers to maintain context during scroll.

## Colors

The palette is rooted in a **Dark Mode** foundation designed for long-form technical reading.

- **Primary (#4edea3):** A vibrant "Electric Emerald" used for critical actions, highlights, and status indicators. It should be used sparingly but intentionally to guide the eye.
- **Secondary (#10b981):** A deeper "Jungle Green" used for containers and backgrounds where the primary color would be too loud.
- **Neutral (#0b1326):** A "Deep Space" navy that provides better contrast and depth than pure black.
- **Surface Strategy:** Layers are built using progressively lighter shades of navy (#0f172a) to create a sense of physical stacking. Borders use a muted slate (#1e293b) to define boundaries without adding visual noise.

## Typography

The typography system is dual-pronged: **Inter** handles all structural and reading tasks for its exceptional legibility and neutral tone, while **JetBrains Mono** is used for "metadata" and technical labels to reinforce the engineering brand.

Headlines use tight tracking and heavy weights to create a strong visual hierarchy. The `label-caps` role is essential for categorizing content (e.g., "EXPERTISE", "CASE STUDIES"), providing a structural rhythm to the layout. Code-like snippets and technical tags must always use `label-code` to differentiate data from prose.

## Layout & Spacing

Emerald Terminal uses a **Fixed Grid** system centered within a 1200px container.

- **Grid Model:** A 12-column structure is used for the "Bento Grid" sections, allowing for modular layouts where cards can span 4, 8, or 12 columns.
- **Rhythm:** A base 4px unit scales all spacing. Section transitions are aggressive (128px) to provide clear mental breaks between content types.
- **Mobile Adaptation:** On mobile, the 12-column grid collapses into a single-column stack. Horizontal padding (gutter) reduces from 32px to 16px to maximize screen real estate. The top navigation transforms into a bottom-anchored tab bar for improved thumb reachability.

## Elevation & Depth

Elevation is achieved through **Tonal Layers** and **Low-Contrast Outlines** rather than traditional shadows.

1.  **Level 0 (Background):** Deepest navy (#0b1326).
2.  **Level 1 (Cards/Containers):** Slightly lighter navy (#0f172a) with a 1px solid border (#1e293b).
3.  **Interaction Depth:** Upon hover, elements transition their border color to the primary emerald (#4edea3) and utilize a subtle vertical translation (-2px) to signify "lift."
4.  **Glassmorphism:** The Global Header uses a `backdrop-blur(12px)` with a semi-transparent background (80% opacity) to create a "floating" effect that maintains awareness of the content beneath.
5.  **Glow Effects:** Small, high-priority elements (like the "Impact Dot") may use a subtle emerald outer glow (`box-shadow: 0 0 10px #4edea3`) to simulate a powered-on status LED.

## Shapes

The shape language is primarily **Soft (Sharp-leaning)**.

- **Primary Components:** Buttons and Cards use a minimal 0.25rem (4px) radius to maintain a precise, technical feel.
- **Specialty Shapes:** Pill-shaped elements (Full Rounded) are reserved exclusively for "Status Badges" or "Tag" containers to distinguish them from actionable buttons.
- **Dividers:** Vertical lines in timelines and horizontal section dividers should be 1px or 2px thick, utilizing the surface-border color (#1e293b).

## Components

- **Buttons:** 
    - *Primary:* Solid Emerald (#4edea3) background with background-navy text. High-contrast, no border.
    - *Secondary/Outline:* 1px border using the neutral-outline color, text-on-surface color.
- **Bento Cards:** Integrated containers with Level 1 elevation. Must include internal padding (typically 40px) and a transition property for border-color on hover.
- **Status Badges:** Small, pill-shaped containers with `label-code` typography. Use a background-surface-container and a primary emerald border/text.
- **Timelines:** A 2px vertical line with "Impact Dots" (#4edea3). The dots act as visual anchors for chronological data.
- **Navigation:** Fixed header with glassmorphism. Desktop uses text-link style; Mobile uses a persistent bottom bar with Material Symbols (outlined) and 10px labels.
- **Interactive Links:** Subtle horizontal movement (gap-increase) on hover when accompanied by an arrow icon to signal directionality.