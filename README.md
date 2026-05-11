# Caucasus Voyage

A multilingual marketing and booking landing page for a boutique private 4×4 tour operator based in Georgia (the country). Built with React + TypeScript on the Lovable platform.

---

## Overview

The site lets travellers browse curated tours of the Georgian Caucasus, explore day-by-day itineraries, and send an inquiry directly via WhatsApp or Telegram. Content is available in English, Georgian, and Russian — language preference is stored in `localStorage` so it persists across visits.

Key user flows:
- Browse tour cards on the landing page
- Open a tour detail page to read the full itinerary accordion, inclusions, and departure schedule
- Tap the mobile sticky bar or floating contact widget to inquire on WhatsApp or Telegram

---

## Features

- **Hero slideshow** — four rotating landscape images with a primary CTA
- **Tour cards** — three signature routes with pricing, duration, and detail links
- **Day-by-day itinerary accordion** — collapsible steps on each tour detail page
- **Why Choose Us section** — trust signals with icons (Local Experts, Modern 4×4s, Transparent Pricing)
- **Mobile-sticky WhatsApp bar** — full-width fixed CTA visible only on mobile (≤768 px)
- **Floating contact widget** — WhatsApp + Telegram quick-contact, visible on all pages
- **Three-language support** — EN / KA (Georgian) / RU, toggled from the navbar
- **Dark mode** — Tailwind `class` strategy with CSS custom property theming

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18.3 + TypeScript 5.8 |
| Build tool | Vite 5.4 (SWC compiler) |
| Routing | React Router DOM 6.30 |
| Styling | Tailwind CSS 3.4 + CSS custom properties |
| UI primitives | Radix UI (full suite) + shadcn/ui |
| Icons | Lucide React 0.462 |
| Server state | TanStack React Query 5.83 |
| Forms | React Hook Form 7 + Zod 3 |
| i18n | Custom `LanguageContext` — all strings in `src/lib/i18n.ts` |
| Testing | Vitest 3 + Testing Library |
| Platform | Lovable |

---

## Project Structure

```
src/
├── assets/                  # Tour and fleet images
├── components/
│   ├── ui/                  # 51 shadcn / Radix UI primitives
│   ├── Hero.tsx             # Full-screen slideshow hero
│   ├── Navbar.tsx           # Fixed top nav with language toggle
│   ├── Tours.tsx            # Tour card grid
│   ├── WhyChooseUs.tsx      # Trust section (3 icon cards)
│   ├── Fleet.tsx            # Vehicle showcase
│   ├── Footer.tsx           # Contact info and social links
│   ├── FloatingContact.tsx  # WhatsApp + Telegram FAB
│   ├── MobileStickyWhatsApp.tsx  # Mobile-only sticky bottom CTA
│   ├── ItineraryAccordion.tsx    # Day-by-day accordion for tour pages
│   ├── LanguageToggle.tsx   # EN / KA / RU switcher
│   └── NavLink.tsx          # Router-aware nav link wrapper
├── lib/
│   ├── i18n.ts              # All translations for en, ka, ru
│   ├── LanguageContext.tsx  # Language state provider
│   └── utils.ts             # Tailwind class merge utility
├── pages/
│   ├── Index.tsx            # Landing page
│   ├── TourDetails.tsx      # Individual tour detail page
│   └── NotFound.tsx         # 404 catch-all
└── hooks/
    ├── use-mobile.tsx
    └── use-toast.ts
```

---

## Routes

| Path | Page |
|---|---|
| `/` | Landing page: Hero → Tours → Why Choose Us → Fleet → Footer |
| `/tours/abudelauri` | Abudelauri Lakes detail |
| `/tours/gergeti` | Gergeti Trinity detail |
| `/tours/tsalka` | Tsalka Canyon detail |
| `*` | 404 Not Found |

---

## Internationalization

All UI strings are defined in `src/lib/i18n.ts` as a single `translations` TypeScript constant with three top-level language keys: `en`, `ka`, `ru`. Each key contains identical nested structure covering navigation, hero, tours (including per-tour itinerary, inclusions, and schedule arrays), fleet, trust section, mobile CTA, and contact copy.

The active language is stored in `localStorage` under the key `lang` and read on app boot via `LanguageContext`.

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev

# Production build → dist/
npm run build

# Preview the production build locally
npm run preview

# Run the Vitest test suite
npm run test
```

No `.env` file is required for base functionality.

---

## Configuration Notes

- **Path alias** — `@` resolves to `src/` in both TypeScript and Vite
- **Dev server** — port `8080`, host `::` (all interfaces)
- **WhatsApp number** — `+995 500 000 000` hardcoded in `FloatingContact.tsx` and `MobileStickyWhatsApp.tsx`
- **Telegram handle** — `@caucasusvoyage` hardcoded in `FloatingContact.tsx`
- **HMR overlay** — disabled in `vite.config.ts`
