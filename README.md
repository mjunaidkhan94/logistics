# 1st Link Logistics — Company Website

Production-grade static marketing website for **1st Link Logistics**, a freight forwarding company specializing in complex, high-risk shipments across the Middle East, Africa, and Asia.

---

## Tech Stack

- **React 18** — functional components + hooks
- **Vite** — build tool and dev server
- **CSS Modules** — scoped component styling
- **lucide-react** — icons
- **Google Fonts** — Syne (headings) + DM Sans (body)

No backend. No API calls. Fully static.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar/          # Fixed navbar, transparent → opaque on scroll, mobile menu
│   ├── Hero/            # Full-viewport hero with overlay, CTAs, trust strip
│   ├── Stats/
│   │   ├── Stats        # Animated gold marquee strip
│   │   └── NumbersBar   # Count-up stats bar (IntersectionObserver)
│   ├── About/           # Two-column layout with floating image card
│   ├── WhyChooseUs/     # Feature cards grid + navy emphasis card
│   ├── Services/        # Service cards with images + CTA card
│   ├── Portfolio/       # Filterable shipment case cards (All / Middle East / Africa / Asia)
│   ├── Coverage/        # Dark navy region cards, mobile horizontal scroll
│   ├── Testimonials/    # Three client testimonial cards
│   ├── Contact/         # Quote request form + WhatsApp CTA
│   └── Footer/          # Four-column footer
├── hooks/
│   └── useReveal.js     # IntersectionObserver scroll-reveal hook
├── App.jsx
├── App.css              # Design system (CSS custom properties) + global utilities
└── index.css            # Reset styles
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

---

## Design System

All design tokens are defined as CSS custom properties in `src/App.css`:

| Token | Value | Usage |
|---|---|---|
| `--color-navy` | `#0A1628` | Primary dark — navbar, footer, headings |
| `--color-azure` | `#1A73E8` | Primary CTA blue |
| `--color-gold` | `#C9882A` | Premium accent, highlights |
| `--color-off-white` | `#F7F8FA` | Alternating section backgrounds |
| `--font-display` | Syne | Headings and numbers |
| `--font-body` | DM Sans | Body text, labels |

---

## Key Features

- **Scroll reveal animations** — `useReveal` hook uses `IntersectionObserver` to fade-in sections as they enter the viewport, with configurable stagger delays
- **Count-up numbers** — `NumbersBar` animates stats (20+, 500+, 98%) on scroll using `requestAnimationFrame`
- **Filterable portfolio** — tabs filter shipment cases by region (All / Middle East / Africa / Asia) with live card counts
- **Responsive** — breakpoints at 1024px, 768px, and 480px; mobile nav collapses to hamburger, coverage cards scroll horizontally
- **Static contact form** — shows a success state on submit, no backend required
- **WhatsApp integration** — all WhatsApp buttons use `https://wa.me/923239255590` with a pre-filled message

---

## Contact Details

| | |
|---|---|
| WhatsApp | +92 323 9255590 |
| Email | inquiry@1stlinklogistics.com |
| Office | Karachi, Pakistan |
