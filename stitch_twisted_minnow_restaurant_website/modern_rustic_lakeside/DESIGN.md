---
name: Modern Rustic Lakeside
colors:
  surface: '#15130d'
  surface-dim: '#15130d'
  surface-bright: '#3b3931'
  surface-container-lowest: '#0f0e08'
  surface-container-low: '#1d1c15'
  surface-container: '#212018'
  surface-container-high: '#2c2a22'
  surface-container-highest: '#36352d'
  on-surface: '#e7e2d6'
  on-surface-variant: '#d2c4bc'
  inverse-surface: '#e7e2d6'
  inverse-on-surface: '#323029'
  outline: '#9b8e87'
  outline-variant: '#4f453f'
  surface-tint: '#dec1af'
  primary: '#dec1af'
  on-primary: '#3f2c20'
  primary-container: '#3d2b1f'
  on-primary-container: '#ac9181'
  inverse-primary: '#705a4c'
  secondary: '#ffb4a8'
  on-secondary: '#690000'
  secondary-container: '#920703'
  on-secondary-container: '#ff9a8a'
  tertiary: '#e9c349'
  on-tertiary: '#3c2f00'
  tertiary-container: '#cca72f'
  on-tertiary-container: '#4e3d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fbddca'
  primary-fixed-dim: '#dec1af'
  on-primary-fixed: '#28180d'
  on-primary-fixed-variant: '#574335'
  secondary-fixed: '#ffdad4'
  secondary-fixed-dim: '#ffb4a8'
  on-secondary-fixed: '#410000'
  on-secondary-fixed-variant: '#920703'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#15130d'
  on-background: '#e7e2d6'
  surface-variant: '#36352d'
typography:
  display-lg:
    fontFamily: Arvo
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Arvo
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Arvo
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 34px
  headline-md:
    fontFamily: Arvo
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is rooted in the "Modern Rustic" aesthetic, blending the rugged, outdoor spirit of Lake Tenkiller with a polished, high-end dining experience. The brand personality is hospitable and authentic, evoking the warmth of a hearth and the reliability of a well-worn leather saddle.

The visual style leans into **Tactile Skeuomorphism**, utilizing realistic wood-grain textures as background layers and subtle gold-rimmed elements to create a sense of physical craftsmanship. High-quality food photography should feature shallow depth-of-field and warm, amber-toned lighting to emphasize freshness and a "family-table" atmosphere. Interface elements should feel heavy and grounded, avoiding the airy floatiness of traditional SaaS designs in favor of a structured, anchored layout that feels as permanent as a lakeside cabin.

## Colors

The palette is inspired by natural lakeside elements at dusk. The primary color, **Dark Wood Brown (#3D2B1F)**, serves as the structural foundation, used for headers, footers, and card backgrounds. **Deep Crimson Red (#8B0000)** is the "action" color, reserved for primary calls-to-action, alerts, and highlighting special menu items.

**Warm Gold (#D4AF37)** provides the "polished" edge, used sparingly for borders, iconography, and decorative accents to elevate the brand from a simple grill to a premium destination. For text and readability, a custom **Off-White/Cream (#F9F4E8)** is utilized to prevent the harsh contrast of pure white, maintaining the warm, vintage feel while ensuring accessibility against dark backgrounds.

## Typography

This design system employs a high-contrast typographic pairing. Headlines use **Arvo** (a sturdy, slab-serif available via common web font providers), which provides a vintage Western character that feels both bold and established. These should be set with tight tracking to mimic traditional letterpress printing.

For all functional and body text, **Work Sans** is used. Its grounded, architectural proportions ensure maximum legibility for menu descriptions and reservation forms, even on mobile devices. Labels and navigation items should utilize the uppercase weight of Work Sans with increased letter spacing to provide a clear hierarchy against the heavy decorative headlines.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy on desktop to maintain the "contained" feel of a physical menu, while transitioning to a fluid stack on mobile. A 12-column grid is used for desktop layouts, with generous 24px gutters to allow the wood-grain textures to breathe between content blocks.

Vertical rhythm is strictly managed in increments of 8px. Sections should be separated by clear, gold-tinted horizontal dividers or shifts in background texture. On mobile, margins are tightened to 16px to maximize screen real estate for food imagery, while maintaining the same 8px base unit for component internal padding.

## Elevation & Depth

Hierarchy in this design system is achieved through **Tonal Layering** and physical metaphors rather than intense shadows. 
- **The Canvas:** A deep, textured wood-grain background.
- **The Surfaces:** Cards and containers use a slightly lighter brown (#3D2B1F) with a subtle 1px inner gold stroke to simulate an inset or "carved" look.
- **Shadows:** Use "Burnt" shadows—low-spread, high-opacity (#000000 at 40%)—to make elements look like they are sitting directly on a wooden table. 
- **Interactive Depth:** Buttons should have a slight "pressed" state effect (inner shadow) to mimic tactile physical buttons found in vintage bars.

## Shapes

The design system uses **Soft (0.25rem)** corners to balance the line between rugged and refined. Completely sharp corners feel too aggressive for a family-friendly establishment, while fully rounded or pill-shaped buttons feel too digital/modern. The subtle radius mimics the sanded edges of handcrafted wooden furniture. 

Gold-rimmed borders on buttons and cards should maintain a consistent 1px to 2px thickness to ensure they look like delicate metal inlays rather than heavy strokes.

## Components

### Buttons
Primary buttons are Deep Crimson (#8B0000) with a 1px Gold (#D4AF37) rim and Cream (#F9F4E8) text. They should feature a very subtle gradient that is darker at the bottom to provide a tactile, "pressable" feel.

### Cards
Menu items and feature cards use the Surface Brown (#3D2B1F). They should include a "burnt-in" header style where the Arvo headline is set in Gold. Images within cards should have a slight 2px inner-shadow to appear recessed into the wooden frame.

### Input Fields
Inputs use a dark, desaturated version of the background with a Cream border. When focused, the border transitions to Gold. Labels sit above the field in uppercase Work Sans.

### Chips/Tags
Used for dietary labels (e.g., "Gluten-Free," "Spicy"). These should look like small leather or brass tags, using Gold text on a slightly darker brown background.

### Navigation
The navigation bar should be sticky and feature a "header-board" texture, using a subtle wood-grain overlay that spans the full width of the viewport, grounding the user as they scroll.