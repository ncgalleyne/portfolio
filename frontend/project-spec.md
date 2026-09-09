# Developer Trading Card Portfolio — Project Specification

## 1. Project Overview

Build a personal developer portfolio as a **digital football trading card pack experience** rather than a conventional portfolio website.

The portfolio should feel like opening and collecting a premium vintage football trading card set:

> **Open Pack → Explore Collection → Focus a Card → Flip Card → Discover More**

The portfolio itself is the collection.

There should be no traditional portfolio structure with a navbar, hero section, project grid, about page, and contact page. Instead, personal information, projects, experience, skills, and contact information are represented through a collection of interactive trading cards.

The visual language combines:

* Vintage football trading cards
* 80s/90s sports print design
* Retro arcade football games
* Physical paper/card textures
* Modern editorial design
* Tactile interaction
* Subtle animation and depth
* Modern frontend polish

Football is the **visual and storytelling language**, not the literal subject of every screen.

The design should feel like:

> **A developer collectible card set that happens to use the visual language of football cards.**

It should **not** feel like:

> A football website with a developer profile placed inside it.

---

# 2. Core Experience

The primary user journey is:

```text
Sealed Pack
     ↓
Open Pack
     ↓
Pack Opening Animation
     ↓
Cards Reveal
     ↓
Explore Collection
     ↓
Focus Card
     ↓
Flip Card
     ↓
Discover Information
     ↓
Navigate Collection
```

The experience should progress emotionally through:

```text
Curiosity
    ↓
Reveal
    ↓
Discovery
    ↓
Interaction
    ↓
Personality
    ↓
Professional Credibility
```

---

# 3. Technology Stack

## Core

* Vite
* React
* TypeScript

## Styling

* Tailwind CSS v4
* Custom CSS

Tailwind should primarily handle:

* Layout
* Spacing
* Responsive behavior
* Utility styling
* Design tokens
* Basic typography
* Positioning

Custom CSS should handle:

* Card construction
* Physical appearance
* Paper textures
* Print artifacts
* Double borders
* Card faces
* 3D perspective
* Flip mechanics
* Pack styling
* Vintage effects

## Animation

Use **Motion for React** as the primary animation library.

Motion should handle:

* Hover interactions
* Focus transitions
* Card movement
* Card stacking
* Staggered reveals
* Dragging
* Layout animation
* Collection transitions
* Pack opening sequencing

CSS should handle:

* Card flip
* Simple transitions
* Material effects
* Static transforms

GSAP should **not** be introduced initially.

It can be added later if the pack-opening animation becomes complex enough to require a detailed timeline.

## Icons

Use `lucide-react`.

Lucide should be used primarily for functional UI:

* Arrow navigation
* External links
* Email
* Location
* GitHub
* LinkedIn
* Flip indicators
* Navigation controls

Lucide should **not** be used for decorative football/card artwork.

Decorative visual elements should use:

* Custom SVG
* CSS
* Images
* Text
* Print effects

---

# 4. Design Direction

## Overall Style

The site should feel:

* Warm
* Nostalgic
* Tactile
* Collectible
* Premium
* Editorial
* Playful
* Slightly imperfect
* Modern underneath the vintage aesthetic

Avoid making the design excessively retro.

The goal is:

```text
Vintage sports collectible
        +
Modern product design
        +
Interactive digital object
```

---

# 5. Color System

The overall theme is light.

Avoid dark green/black as the primary background.

The main environment should feel like aged paper or a vintage tabletop.

## Primary Palette

| Token         | Color     | Usage                 |
| ------------- | --------- | --------------------- |
| `paper`       | `#F4EBDD` | Main background       |
| `paper-light` | `#F8F1E6` | Highlights / surfaces |
| `paper-dark`  | `#E6D5BD` | Secondary surfaces    |
| `ink`         | `#1E211B` | Primary text          |
| `ink-soft`    | `#45463D` | Secondary text        |
| `forest`      | `#164A32` | Primary brand color   |
| `green`       | `#246B45` | Accent                |
| `green-light` | `#5F8F62` | Secondary accent      |
| `yellow`      | `#D8B75A` | Vintage highlight     |
| `orange`      | `#C97945` | Secondary highlight   |
| `red`         | `#A64B3C` | Occasional accent     |
| `card`        | `#F7F0E3` | Card surface          |
| `border`      | `#B9A98F` | Card borders          |

Green is the dominant brand/accent color.

It should appear in:

* Card borders
* Statistics
* Labels
* Pack details
* Buttons
* Navigation
* Small graphic accents

Do not use green everywhere.

---

# 6. Typography

Use three complementary typefaces.

## Display

**Barlow Condensed**

Use for:

* Developer name
* Project names
* Card numbers
* Large labels
* Statistics
* Major headings
* Sports-style typography

Characteristics:

* Bold
* Condensed
* Athletic
* Editorial
* High visual impact

## Body

**DM Sans**

Use for:

* Descriptions
* About content
* Project details
* Supporting copy
* General UI

Characteristics:

* Modern
* Highly readable
* Neutral
* Clean

## Technical / Metadata

**IBM Plex Mono**

Use for:

* Years
* Card numbers
* Position
* Collection numbers
* Technology lists
* Small metadata
* URLs
* Technical information

The combination should establish:

```text
Barlow Condensed
    ↓
Sports / personality

DM Sans
    ↓
Modern readability

IBM Plex Mono
    ↓
Technical / collectible metadata
```

---

# 7. Font Import

Initial implementation may use Google Fonts:

```css
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap");
```

Self-hosting fonts can be considered later for production performance and reliability.

---

# 8. Tailwind Theme

Tailwind CSS v4 should use the CSS-first theme approach.

`src/index.css`:

```css
@import "tailwindcss";

@theme {
  --color-paper: #f4ebdd;
  --color-paper-light: #f8f1e6;
  --color-paper-dark: #e6d5bd;

  --color-ink: #1e211b;
  --color-ink-soft: #45463d;

  --color-forest: #164a32;
  --color-green: #246b45;
  --color-green-light: #5f8f62;

  --color-yellow: #d8b75a;
  --color-orange: #c97945;
  --color-red: #a64b3c;

  --color-card: #f7f0e3;
  --color-border: #b9a98f;

  --font-display: "Barlow Condensed", sans-serif;
  --font-body: "DM Sans", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  --radius-card: 14px;
  --radius-pack: 8px;

  --shadow-card:
    0 18px 40px rgba(54, 43, 29, 0.16),
    0 4px 12px rgba(54, 43, 29, 0.1);

  --shadow-card-hover:
    0 28px 60px rgba(54, 43, 29, 0.22),
    0 8px 20px rgba(54, 43, 29, 0.14);

  --shadow-pack:
    0 30px 80px rgba(40, 30, 20, 0.22);

  --ease-spring:
    linear(
      0,
      0.0942,
      0.2989,
      0.527,
      0.73,
      0.8839,
      0.9858,
      1.0425,
      1.0666,
      1.0558,
      1.0255,
      0.9999,
      1
    );
}
```

---


# 10. Main Application States

The application consists primarily of three major states.

## State 1 — Sealed Pack

The initial viewport contains a single sealed trading card pack.

The pack is centered and visually dominant.

The background is warm cream/off-white.

Example pack content:

```text
[YOUR NAME]

DEVELOPER COLLECTION

2026 EDITION

5 CARDS INSIDE

PROJECTS · EXPERIENCE · SKILLS
```

Primary CTA:

```text
OPEN PACK
```

The CTA should feel integrated into the packaging.

It should **not** look like a generic web button.

---

# 11. Pack Design

The pack should feel like a physical vintage football collectible.

Visual characteristics:

* Paper/foil material
* Printed typography
* Slight imperfections
* Vintage borders
* Green accents
* Subtle shadows
* Small legal/collector copy
* Slight texture
* Slight rotation
* Physical depth

Avoid explicit:

* NFL logos
* Eagles logos
* Team trademarks
* Player likenesses
* Real league branding

The pack should be inspired by the visual language of sports collectibles without copying an existing brand.

---

# 12. Pack Opening Animation

The pack opening is the most complex animation in the application.

Sequence:

```text
Idle Pack
    ↓
Hover / Interaction
    ↓
Press OPEN PACK
    ↓
Pack reacts
    ↓
Seal breaks
    ↓
Pack tears open
    ↓
Cards emerge
    ↓
Cards separate
    ↓
Cards fan out
    ↓
Homebase card moves forward
    ↓
Collection state
```

Desired visual effects:

* Slight scale
* Rotation
* Depth
* Motion blur
* Shadows
* Layered cards
* Paper movement
* Green accent flashes
* Small texture movement
* Staggered card emergence

The animation should feel physical rather than cinematic.

Avoid:

* Excessive particle effects
* Explosions
* Huge light effects
* Overly dramatic 3D
* Game-like VFX

---

# 13. Collection State

After opening, the portfolio becomes a physical-looking card collection.

Cards should be arranged horizontally and overlap.

Example:

```text
       ┌─────────┐
       │ HOMEBASE │
       └─────────┘
          ┌─────────┐
          │ PROJECT │
          └─────────┘
             ┌─────────┐
             │ PROJECT │
             └─────────┘
```

The cards should feel like they are sitting on a tabletop.

Do not use a conventional CSS grid.

The collection should feel:

* Layered
* Physical
* Slightly messy
* Intentional
* Collectible

---

# 14. Card Interaction

Users should be able to:

* Hover a card
* Focus a card
* Enlarge a card
* Flip a card
* Navigate between cards
* Slightly drag cards
* Return to the collection
* Move between cards using controls
* Swipe between cards on mobile

When a card is focused:

```text
Focused Card
    ↓
Moves toward front
    ↓
Scales up
    ↓
Other cards recede
    ↓
Focused card receives stronger shadow
```

Surrounding cards remain visible.

They should not disappear completely.

---

# 15. Card Dimensions

Base desktop card:

```text
~310 × 434
```

Focused desktop card:

```text
~400 × 560
```

Base aspect ratio:

```css
aspect-ratio: 2.5 / 3.5;
```

Responsive width:

```css
--card-width: clamp(260px, 22vw, 400px);
```

The exact dimensions should remain flexible enough to support responsive layouts.

---

# 16. Reusable Card Architecture

All cards should share a reusable base component.

Recommended hierarchy:

```text
TradingCard
├── CardFrame
├── CardInner
│   ├── CardFront
│   └── CardBack
└── CardEffects
```

The goal is to create one consistent physical card system rather than designing each card independently.

---

# 17. Card Design System

Every card should share:

* Consistent dimensions
* Vintage border
* Double frame
* Paper texture
* Typography system
* Metadata system
* Numbering
* Green accents
* Front/back structure
* Hover state
* Focus state
* Flip state
* Shadow/depth

Individual cards can have slight variation.

The variation should make the collection feel authentic without breaking the design system.

---

# 18. Base Card CSS

```css
.card {
  position: relative;
  aspect-ratio: 2.5 / 3.5;
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  overflow: hidden;
  transform-style: preserve-3d;
  isolation: isolate;
}

.card::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: url("/textures/card-noise.png");
  opacity: 0.14;
  mix-blend-mode: multiply;
  z-index: 20;
}

.card::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(
      circle,
      rgba(30, 33, 27, 0.08) 1px,
      transparent 1px
    );
  background-size: 4px 4px;
  opacity: 0.12;
  mix-blend-mode: multiply;
  z-index: 21;
}
```

---

# 19. Card Frame

Reusable double-border treatment:

```css
.card-frame {
  position: absolute;
  inset: 8px;
  border: 1px solid rgba(22, 74, 50, 0.45);
  border-radius: 9px;
  pointer-events: none;
}

.card-frame::after {
  content: "";
  position: absolute;
  inset: 4px;
  border: 1px solid rgba(22, 74, 50, 0.16);
  border-radius: 6px;
}
```

---

# 20. Card Flip

Use CSS for the actual card flip.

React should control the state.

```css
.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 700ms var(--ease-spring);
}

.card-inner.is-flipped {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}
```

React:

```tsx
const [flipped, setFlipped] = useState(false);

<div className={cn("card-inner", flipped && "is-flipped")}>
```

The flip should feel like a physical card.

Avoid excessive 3D perspective distortion.

---

# 21. Homebase Player Card

The Homebase card represents the developer.

It is the primary personal card in the collection.

## Front

Include:

```text
[PORTRAIT]

[YOUR NAME]

DEVELOPER

PHILADELPHIA, PA

#01
```

Stats:

```text
FRONTEND        94
BACKEND         88
DESIGN          91
PROBLEM SOLVING 97
```

Additional metadata:

```text
PROJECTS
EXPERIENCE
SPECIALTY
```

Classification:

```text
HOMEBASE / 01
```

or:

```text
PLAYER 001
```

Avoid oversized labels such as:

```text
LEGENDARY
```

The design should be confident without becoming cheesy.

---

# 22. Homebase Card Back

The back should contain the developer's deeper information.

Sections:

```text
ABOUT

[ABOUT CONTENT]
```

Skills:

```text
JAVASCRIPT
REACT
TYPESCRIPT
NODE.JS
PYTHON
SQL
UI / UX
...
```

Skills can be presented as vintage player attributes.

Contact information should live on this card.

```text
EMAIL      [EMAIL]
LINKEDIN   [LINK]
GITHUB     [LINK]

LOCATION   PHILADELPHIA, PA
```

Links must be clickable.

There should be **no separate contact card**.

---

# 23. Project Cards

Each project gets its own collectible card.

## Project Card Front

Include:

```text
PROJECT 02

[PROJECT IMAGE]

PROJECT NAME

WEB APPLICATION

2026

REACT · TYPESCRIPT · NODE
```

Also include:

* Short description
* Project number
* Category
* Year
* Technology indicators
* Subtle rarity/classification

Example:

```text
PROJECT 02
PROJECT NAME
WEB APPLICATION
2026
REACT · TYPESCRIPT · NODE
```

---

# 24. Project Card Back

The back should contain enough information to understand the project without navigating to a separate project page.

Sections:

```text
PROJECT OVERVIEW

THE PROBLEM

MY ROLE

BUILT WITH

OUTCOME
```

Actions:

```text
VIEW PROJECT ↗
VIEW SOURCE ↗
```

External links should be clearly interactive.

---

# 25. Awards & Trophies / Roster Availability Card

Front has a section for records/stats table

and a section that lists certifications etc

---

# 26. Awards & Trophies / Roster Availability Card Back

Roster Availability - badge that says Open for work

text: "Currently open to roles ..."
email

CTA button for resume download

---

# 27. Paper Surface

The application background should resemble warm paper.

Example:

```css
.paper-surface {
  background:
    radial-gradient(
      circle at 20% 20%,
      rgba(36, 107, 69, 0.035),
      transparent 30%
    ),
    radial-gradient(
      circle at 80% 70%,
      rgba(201, 121, 69, 0.035),
      transparent 35%
    ),
    #f4ebdd;
}

.paper-surface::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: 0.18;
  background-image: url("/textures/paper-noise.png");
  mix-blend-mode: multiply;
}
```

---

# 28. Physical Print Effects

Use subtle visual artifacts:

* Paper grain
* Halftone
* Faint registration imperfections
* Slight color variation
* Thin rules
* Vintage borders
* Printed texture
* Slight opacity variation

Potential reusable CSS classes:

```text
.paper-surface
.paper-texture
.card
.card-frame
.card-inner
.card-face
.card-front
.card-back
.card-label
.card-number
.card-title
.card-meta
.card-stat
.card-stat-value
.pack
.pack-seal
.pack-tear
.print-halftone
.print-grain
.print-rule
```

These should remain reusable rather than becoming one-off styles.

---

# 29. Motion Design

Motion should communicate physicality.

## Card Hover

Example:

```tsx
<motion.div
  whileHover={{
    y: -12,
    rotate: 0,
    scale: 1.03,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20,
  }}
>
```

The interaction should feel like picking up a physical card.

---

# 30. Focused Card Animation

When a card is selected:

```text
Selected card:
    scale ↑
    y ↑
    z-index ↑
    shadow ↑

Surrounding cards:
    scale ↓
    depth ↓
    opacity slightly ↓
    position shifts
```

Motion's layout animation should be used where appropriate.

The focused card should become substantially larger while remaining part of the collection.

---

# 31. Drag Interaction

Cards may support subtle dragging.

Dragging should feel constrained.

Avoid allowing cards to fly freely around the screen.

Potential interaction:

```text
Pointer down
    ↓
Card lifts
    ↓
Small rotation follows pointer
    ↓
Release
    ↓
Card springs back
```

Dragging is an enhancement rather than a core requirement.

---

# 32. Mobile Experience

The desktop collection is horizontal.

Mobile should transform into a vertical/stacked deck.

Desktop:

```text
[01] [02] [03] [04] [05]
```

Mobile:

```text
       [03]
   [02][03][04]
       [05]
```

or a vertically centered focused card with surrounding cards peeking from behind.

Interactions:

* Swipe between cards
* Tap to focus
* Tap to flip
* Preserve card proportions
* Keep focused card large
* Maintain tactile behavior

The mobile experience should remain recognizably the same concept.

It should not become a generic mobile portfolio.

---

# 33. Responsive Principles

## Desktop

Target:

```text
1440 × 900
```

The collection should occupy most of the viewport.

The focused card should be large enough to inspect comfortably.

## Tablet

Reduce:

* Card dimensions
* Overlap
* Spacing
* Navigation footprint

## Mobile

Prioritize:

1. Focused card
2. Swipe navigation
3. Flip interaction
4. Small card previews
5. Collector controls

Avoid trying to preserve the desktop fan literally at all costs.

---

# 34. Icons

Install:

```bash
npm install lucide-react
```

Recommended icons:

```tsx
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Rotate3D,
  MousePointer2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
```

Use icons for:

* External links
* Email
* Location
* GitHub
* LinkedIn
* Previous/next
* Flip hints
* Interaction cues

Do not use Lucide for:

* Footballs
* Jerseys
* Trophy graphics
* Card artwork
* Decorative sports marks
* Vintage illustrations

Those should be custom assets.

---

# 35. Data Architecture

Portfolio content should be data-driven.

Projects should not be hardcoded directly into card components.

Example:

```ts
export const projects = [
  {
    id: "02",
    name: "Project Name",
    category: "Web Application",
    year: "2026",
    description: "...",
    image: "/projects/project-01.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
    ],
    role: "...",
    outcome: "...",
    liveUrl: "...",
    sourceUrl: "...",
  },
];
```

This allows the card system to remain reusable.

---

# 36. Profile Data

The Homebase card should also be driven by data.

Example conceptual structure:

```ts
export const profile = {
  name: "...",
  title: "Developer",
  location: "Philadelphia, PA",
  number: "01",

  stats: {
    frontend: 94,
    backend: 88,
    design: 91,
    problemSolving: 97,
  },

  skills: [
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "SQL",
    "UI / UX",
  ],

  links: {
    email: "...",
    github: "...",
    linkedin: "...",
    resume: "...",
  },
};
```

---

# 37. Recommended Project Structure

```text
src/
├── components/
│   ├── cards/
│   │   ├── TradingCard.tsx
│   │   ├── PlayerCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── CardFront.tsx
│   │   ├── CardBack.tsx
│   │   └── CardFrame.tsx
│   │
│   ├── collection/
│   │   ├── Collection.tsx
│   │   ├── CollectionControls.tsx
│   │   └── CardCounter.tsx
│   │
│   ├── pack/
│   │   ├── Pack.tsx
│   │   ├── PackOpening.tsx
│   │   └── PackReveal.tsx
│   │
│   └── ui/
│       ├── Stat.tsx
│       ├── Metadata.tsx
│       └── ExternalLink.tsx
│
├── data/
│   ├── projects.ts
│   └── profile.ts
│
├── styles/
│   ├── cards.css
│   ├── pack.css
│   └── textures.css
│
├── App.tsx
├── index.css
└── main.tsx
```

---

# 38. Component Responsibilities

## `TradingCard`

Responsible for:

* Card shell
* Front/back mechanics
* Focus state
* Flip state
* Hover behavior
* Shared animation behavior

## `PlayerCard`

Responsible for:

* Developer-specific front
* Developer-specific back
* Stats
* Profile
* Skills
* Contact

## `ProjectCard`

Responsible for:

* Project front
* Project back
* Project metadata
* Project links
* Technology indicators

## `CardFrame`

Responsible for:

* Borders
* Double border
* Decorative frame
* Shared card structure

## `Collection`

Responsible for:

* Card positioning
* Focused card
* Collection state
* Navigation
* Responsive behavior

## `CollectionControls`

Responsible for:

* Previous
* Next
* Collection count
* Minimal utility navigation

## `Pack`

Responsible for:

* Sealed pack
* Initial interaction
* Pack appearance

## `PackOpening`

Responsible for:

* Opening sequence
* Tear animation
* Card emergence
* Transition into collection

---

# 39. Application State

The application only needs a small amount of core state.

Conceptually:

```ts
type AppState =
  | "sealed"
  | "opening"
  | "collection";
```

Collection state:

```ts
type CollectionState = {
  activeCardId: string;
  flipped: boolean;
};
```

Potential additional state:

```ts
isDragging
```

but this should only be introduced if needed.

Keep the state model intentionally simple.

The functionality is straightforward compared with the visual/animation system.

---

# 40. Accessibility

The visual experience should not compromise basic accessibility.

Requirements:

* Keyboard navigation
* Visible focus states
* Buttons must have accessible labels
* External links should communicate that they open externally where appropriate
* Flip interaction must be keyboard accessible
* Cards should have meaningful accessible names
* Images require appropriate alt text
* Respect `prefers-reduced-motion`

For reduced motion:

```text
Pack animation → simplified reveal
Card hover → minimal movement
Card transitions → reduced duration
Flip → simple transition
```

The experience should remain functional without animation.

---

# 41. Interaction Priorities

Prioritize the following in order:

### 1. Pack opening

This establishes the entire concept.

### 2. Card focus

The collection must feel tactile and interactive.

### 3. Card flip

This reveals the deeper portfolio information.

### 4. Collection navigation

Users must easily move between cards.

### 5. Hover / subtle physicality

Enhances the experience.

### 6. Dragging

Optional enhancement.

Do not over-engineer interaction before the primary experience feels good.

---

# 42. What Should Be CSS vs Motion

## Tailwind

Use for:

* Layout
* Flex/grid
* Positioning
* Spacing
* Responsive rules
* Typography utilities
* Basic colors
* Sizing

## Custom CSS

Use for:

* Card construction
* Card texture
* Paper texture
* Print effects
* Borders
* Double frames
* 3D card faces
* Flip mechanics
* Pack appearance
* Physical material effects

## Motion

Use for:

* Card focus
* Hover
* Stagger
* Layout movement
* Collection transitions
* Dragging
* Pack animation
* Spring physics

## SVG

Use for:

* Custom football graphics
* Formation diagrams
* Decorative marks
* Vintage illustrations
* Custom logos/monograms

## Images

Use for:

* Developer portrait
* Project imagery
* Texture assets
* Optional artwork

---

# 43. Installation

Initial dependencies:

```bash
npm install tailwindcss @tailwindcss/vite
npm install motion lucide-react
```

Optional later:

```bash
npm install gsap
```

GSAP should only be added if Motion proves insufficient for the pack opening timeline.

---

# 44. Design Constraints

The following should be actively avoided.

## No Conventional Portfolio Layout

Avoid:

```text
Navbar
Hero
About
Projects Grid
Skills
Contact
Footer
```

The collection replaces all of these.

## No Generic UI

Avoid:

* Generic pill buttons
* Generic cards
* SaaS dashboard aesthetics
* Excessive rounded containers
* Standard carousel controls
* Huge modern gradients

## No Excessive Football Branding

Avoid:

* NFL branding
* Eagles branding
* Team logos
* Real player imagery
* Overuse of football illustrations
* Literal football backgrounds

Football should primarily appear through:

* Typography
* Statistics
* Numbering
* Player-card layouts
* Scouting terminology
* Formation-inspired layouts
* Match-day visual language
* Vintage print design

## No Excessive 3D

The cards should feel physical, but not like a 3D product configurator.

---

# 45. Visual Hierarchy

The hierarchy should generally be:

```text
Focused Card
     ↓
Card Identity
     ↓
Primary Information
     ↓
Supporting Metadata
     ↓
Navigation
     ↓
Decorative Details
```

Decorative elements should never compete with the card content.

---