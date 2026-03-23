# Zosemax — Project Architecture Reference

This file documents the architecture, conventions, and structure of the Zosemax website project.
It serves as context for Claude Code sessions in this repository.

---

## Project Overview

**Zosemax** is a marketing website for a fireplace installation and chimney services company.

- **Type**: React Single Page Application (SPA)
- **Framework**: React 19 + TypeScript (strict mode)
- **Build Tool**: Vite 6.2.0 (dev server on port 3030)
- **Package Manager**: pnpm

---

## Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| UI | React | 19.0.0 |
| Language | TypeScript (strict) | ~5.7.2 |
| Routing | React Router DOM | 7.5.0 |
| Styling | SCSS Modules + Tailwind CSS | Tailwind 4.1.3 |
| Component variants | Class Variance Authority (CVA) | 0.7.1 |
| Accessibility primitives | Radix UI (Slot, Separator) | latest |
| Icons | lucide-react | 0.487.0 |
| className utils | clsx + tailwind-merge → `cn()` | — |
| SVG as components | vite-plugin-svgr | 4.3.0 |
| Build / bundler | Vite | 6.2.0 |

---

## Directory Structure

```
src/
├── assets/                        # SVG images and icons as React components
│   ├── Logos/                     # 5 Zosemax logo variants
│   └── pages/
│       ├── HomePage/
│       │   ├── header/            # Hero section image
│       │   ├── ChooseUs/          # 3 fireplace images for benefits section
│       │   └── icons/             # DoorIcon, FireplaceIcon, HouseIcon
│       └── ContactsPage/          # Contact page illustration
├── components/
│   ├── ui/                        # Reusable, generic UI primitives
│   │   ├── Button/                # CVA-based button with 7+ variants
│   │   ├── Card/                  # Compound component (Card, CardHeader, etc.)
│   │   └── CardList/              # Grid of cards (icon + title + description)
│   ├── Navigation/                # Site header with logo and nav links
│   ├── Footer/                    # Site footer with copyright and links
│   └── Services/
│       ├── OurServices.tsx        # Services data + section composition
│       └── Sections/
│           └── ServiceSection.tsx # Single service category display
├── pages/
│   ├── HomePage/                  # Main landing page
│   ├── ServicesPage/              # Services catalog (in progress)
│   └── ContactPage/               # Not yet implemented
├── styles/
│   ├── _variables.scss            # SCSS tokens: colors, spacing, fonts, breakpoints
│   └── global.scss                # Base styles, typography, container utility
├── lib/
│   └── utils.ts                   # cn() = clsx + tailwind-merge
├── App.tsx                        # Router setup + layout shell
└── index.tsx                      # ReactDOM entry (StrictMode)
```

---

## Routing

Defined in [src/App.tsx](src/App.tsx). Navigation and Footer are global layout wrappers rendered on every route.

| Path | Component | Status |
|------|-----------|--------|
| `/` | `HomePage` | Done |
| `/services` | `ServicesPage` | In progress |
| `/contact` | `ContactPage` | Not implemented |

---

## Styling Conventions

**Hybrid approach** — both SCSS Modules and Tailwind are used together:

1. **SCSS Modules** (`*.module.scss`) — component-scoped styles for layout, complex selectors, and page structure.
2. **Tailwind CSS v4** (`tailwind.css`) — utility classes for spacing, color tokens, radius, etc.
3. **Global SCSS** (`src/styles/global.scss`) — base resets, typography, container class.
4. **SCSS Variables** (`src/styles/_variables.scss`) — single source of truth for design tokens.

### Design Tokens

| Token | Value |
|-------|-------|
| Primary black | `#080501` |
| Secondary black | `#212326` |
| Primary orange (accent) | `#E4962E` |
| Body font | Inter (sans-serif) |
| Spacing scale | xs=8px, sm=12px, md=16px, lg=24px, xl=32px, 2xl=48px, 3xl=64px, 4xl=96px |
| Breakpoints | sm=640px, md=768px, lg=1024px, xl=1280px, 2xl=1440px |

---

## Component Patterns

- **CVA + Radix Slot** on Button — supports `asChild` for polymorphic rendering.
- **Compound components** on Card — export `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter` from a single file.
- **forwardRef** on components that expose DOM refs.
- **SCSS module + Tailwind** co-located in the same component folder.
- All SVGs live in `src/assets/` and are imported as React components via `vite-plugin-svgr`.

---

## State Management

None currently. All data is hardcoded in component files (services array, benefits list). No Redux, Zustand, or Context API in use.

---

## Configuration

| File | Purpose |
|------|---------|
| `vite.config.ts` | React + SVGR plugins, path alias `@` → `src/`, dev port 3030 |
| `tsconfig.app.json` | Strict TypeScript, ESNext modules, path alias `@/*` → `src/*` |
| `tailwind.css` | Tailwind v4 directives, CSS custom properties, dark mode tokens |
| `eslint.config.js` | TS-ESLint strict, react-hooks, react-refresh |

---

## Current Branch

`build-services-page` — building out the `/services` route with `OurServices`, `ServiceSection`, `Card`, and `CardList` components.

---

## Services Data Structure

Four service categories defined in `src/components/Services/OurServices.tsx`:

1. **Fireplace Installations** (3 items)
2. **Repair & Upgrade** (7 items)
3. **Contemporary Gas Fireplaces** (3 items — placeholder)
4. **Chimney Services** (3 items — placeholder)
