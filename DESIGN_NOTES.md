# DESIGN_NOTES

## Direction

This v1 is designed to feel **minimal, polished, and premium** with an Airbnb/Apple-inspired approach:

- Soft neutral palette with deep accent contrast
- Spacious sections and restrained card styling
- High legibility typography and compact copy blocks
- Subtle motion (fade-up and light hover lift), not distracting

## UX choices

- Mobile-first layout with responsive breakpoints at ~760px
- Sticky top bar keeps email contact visible
- Repeated, clear CTAs (hero + pricing + final block)
- Section rhythm keeps scanning easy for busy local operators

## Accessibility and performance

- Semantic landmarks (`header`, `main`, `section`, `article`)
- Skip link for keyboard/screen-reader users
- Visible focus states on interactive elements
- `prefers-reduced-motion` support
- No heavy UI frameworks or animation libraries

## Branding tweaks (quick edits)

- **Colors:** update CSS variables in `src/styles.css` under `:root`
- **Typography:** change `body` font-family in `src/styles.css`
- **Voice/tone copy:** edit arrays and section text in `src/App.jsx`
- **Contact/domain/SEO:** edit `index.html` meta tags and links in `src/App.jsx`

## Expansion ideas for v2

- Add brand photography or product imagery
- Add real case-study metrics and testimonials
- Add analytics + event tracking on CTA clicks
- Add lightweight CMS-fed content blocks if needed
