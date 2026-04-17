# CrocoCrocsWorlds Design Guidelines

## Aesthetic
Cyberpunk retro inspired by skeleth.xyz. Dark, neon, intense. 80s/90s digital futurism meets modern web.

## Color Palette
- **Primary Background**: #0a0e27 (very dark blue-black)
- **Secondary Background**: #1a1f3a (slightly lighter, card backgrounds)
- **Neon Green**: #00ff41 (primary accent - CRT scan line vibes)
- **Neon Cyan**: #00ffff (secondary accent - highlights)
- **Neon Pink/Magenta**: #ff006e (tertiary accent - glitch effects)
- **Text Primary**: #ffffff (white)
- **Text Secondary**: #00ff41 (neon green, for labels)
- **Border**: #00ff41 (glowing neon borders)

CSS Variables:
```css
--bg-primary: #0a0e27;
--bg-secondary: #1a1f3a;
--accent-green: #00ff41;
--accent-cyan: #00ffff;
--accent-pink: #ff006e;
--text-primary: #ffffff;
--text-secondary: #00ff41;
```

## Typography
- **Display Font**: "Courier New", monospace (retro computer aesthetic)
- **Body Font**: "Courier New", monospace (consistent retro feel)
- **Sizes**: 
  - H1: 48px bold (hero title)
  - H2: 32px bold (section titles)
  - H3: 24px bold (card titles)
  - Body: 14px regular (descriptions)
  - Small: 12px (metadata, labels)

## Effects & Details
- **Scan Lines**: Subtle horizontal lines overlay on backgrounds (CSS repeating-linear-gradient)
- **Glow**: Text-shadow and box-shadow with neon colors for key elements
- **Borders**: 2px solid neon green borders, slight glow
- **Hover States**: Color shifts (green → cyan), text glow increases, subtle scale
- **Background Texture**: Noise/grain overlay, very subtle

## Layout
- **Hero Section**: Full viewport, centered text, neon title, glowing CTA buttons
- **Gallery Grid**: 3 columns on desktop (NFT cards), 2 on tablet, 1 on mobile
- **Cards**: 
  - Image area with neon border
  - Title (neon green)
  - Metadata (small text)
  - Subtle hover glow effect
- **Spacing**: Generous padding (16px-32px), clear separation

## Interactive Elements
- **Buttons**: Dark background + neon green border, green text, hover glow grows
- **Links**: Neon green underline, hover color shift to cyan
- **Cards**: Smooth border glow on hover

## Anti-patterns to Avoid
- No rounded corners (use sharp corners for retro feel)
- No soft shadows (only glows)
- No unnecessary animations (focus on one cohesive load animation)
- No modern UI trends (glassmorphism, etc.)

## Motion
- Page load: Staggered fade-in of hero elements (title → subtitle → CTA)
- Gallery: Cards fade in sequentially on scroll
- Hover: Smooth color/glow transitions (300ms)
