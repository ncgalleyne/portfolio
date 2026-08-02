---
name: Technical Precision
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#adc6ff'
  on-secondary: '#002e6a'
  secondary-container: '#0566d9'
  on-secondary-container: '#e6ecff'
  tertiary: '#ffb3af'
  on-tertiary: '#650911'
  tertiary-container: '#fc7c78'
  on-tertiary-container: '#711419'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3af'
  on-tertiary-fixed: '#410005'
  on-tertiary-fixed-variant: '#842225'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
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
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.02em
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
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
  gutter: 32px
  section-gap: 128px
  bento-gap: 16px
---

## Brand & Style
The design system is centered on the identity of a high-impact senior engineer: authoritative, precise, and results-driven. The brand personality is one of "Quiet Confidence"—avoiding flashy gimmicks in favor of exceptional craft and technical clarity. 

The aesthetic is a hybrid of **Minimalism** and **Modern Corporate**, utilizing a dark-mode foundation to evoke a focused, integrated development environment (IDE) feel. It prioritizes information density without clutter, using ample whitespace to separate high-level narratives from granular technical details. The emotional response should be one of immediate trust and the recognition of "seniority" through refined execution and structural integrity.

## Colors
The palette is built on a "Deep Slate" foundation to provide a sophisticated, low-strain reading environment. 

- **Primary (Emerald):** Used exclusively for success metrics, "impact" highlights, and active status indicators. This reinforces a narrative of growth and delivery.
- **Secondary (Electric Blue):** Used for interactive elements, links, and technical category tags.
- **Neutrals:** A range of slates (from `#020617` to `#1E293B`) creates hierarchical depth without relying on traditional drop shadows. 
- **Accents:** Use primary and secondary colors at 10-15% opacity for subtle background washes behind "Proof Point" chips to maintain a high-fidelity look.

## Typography
This design system utilizes **Inter** for all narrative and structural text to ensure maximum readability and a modern, systematic feel. **JetBrains Mono** is introduced as a secondary label font to represent technical metadata, snippets, and "built-with" stacks, signaling the engineer's technical fluency.

Tight letter-spacing on display headings creates a high-impact, editorial look. Body text uses a generous line-height (1.6) to ensure long-form case studies remain accessible and professional.

## Layout & Spacing
The system employs a **Fixed Grid** model for desktop (12 columns, 1200px max-width) and a fluid single-column model for mobile.

- **The Bento Logic:** For the "What I Build" section, use a grid with 16px gaps. Elements should span 4, 8, or 12 columns to maintain alignment.
- **Vertical Rhythm:** Sections are separated by a substantial 128px gap to emphasize the transition between the Hero, Experience, and Portfolio.
- **Impact Margins:** Use wide internal padding (min 48px) within cards to allow content to "breathe," signaling premium quality.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines** rather than shadows.

- **Level 0 (Background):** `#020617` - The base of the canvas.
- **Level 1 (Cards/Bento):** `#0F172A` - Raised surfaces.
- **Level 2 (Active/Hover):** `#1E293B` - Surfaces reacting to interaction.

Borders are critical: use a subtle `1px` solid stroke (`#1E293B`) on all container elements. For a "High-Fidelity" touch, apply a 0.5px inner border of a lighter slate to simulate a "beveled edge" on primary action cards.

## Shapes
The design system adopts a **Soft** shape language (4px - 12px radii). 

- Standard components (Inputs, Chips) use a **4px** radius to maintain a crisp, professional edge.
- Main layout containers and Bento cards use a **12px** (rounded-xl) radius to soften the overall technical look and provide a contemporary feel.
- Avoid pill-shaped elements; they are too "consumer-friendly" and detract from the serious, technical tone of the portfolio.

## Components

### Case Study Cards
Cards feature a header with a "Tech Stack" label using the `label-code` style. Hover states should trigger a subtle border-color shift to `secondary_color_hex` and a 2px vertical lift.

### Experience Timelines
A vertical 2px line in `#1E293B`. Impact points are denoted by a `5px` Emerald circle. Use `label-caps` for dates. Bullet points must be "Impact Bullets," where the first 3-4 words are highlighted in `text_primary_hex` and the remaining text in `text_secondary_hex`.

### Impact Metrics (Proof Points)
Large-format numbers using `headline-lg` in `primary_color_hex`. These should be housed in small, outlined containers within the Bento grid or Case Study cards to act as visual anchors.

### Buttons
- **Primary:** Background `text_primary_hex`, Text `background_hex`. No rounded corners (0px) or minimal (2px) to signify "Industrial" strength.
- **Ghost:** Border `border_hex`, Text `text_primary_hex`. Hover state adds a subtle background of `#1E293B`.

### Bento Grid
A modular container system. Use varied heights (e.g., 200px vs 416px) to create visual interest. Each "cell" should represent a specific engineering competency or a featured project.