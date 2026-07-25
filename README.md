# Atharva Metals & Engineering — Corporate Website

A premium, statically-exported corporate website for **Atharva Metals & Engineering Pvt. Ltd.**, an IATF 16949:2016 certified precision metal stamping and welded-assembly manufacturer serving global OEMs.

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | Next.js 15 (App Router)             |
| Language     | TypeScript                          |
| Styling      | Tailwind CSS v4                     |
| Components   | Shadcn-style primitives             |
| Animations   | Framer Motion                       |
| Icons        | Lucide React                        |
| Data         | JSON files (`/data`)                |
| Backend / DB | None                                |
| Hosting      | Static export (Vercel / any static) |

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (Static Export)

```bash
npm run build    # outputs to ./out
```

The site is configured with `output: "export"` in `next.config.ts`, producing a fully
static site in the `out/` directory that can be deployed to any static host.

## Project Structure

```
atharva-metals/
├── app/                # App Router entry (layout, page, globals.css)
├── components/         # Section + UI components
│   └── ui/             # Reusable primitives (Button, Reveal, Counter, ...)
├── data/               # All company content as JSON (source of truth)
│   ├── company.json
│   ├── capabilities.json
│   ├── plants.json
│   ├── products.json
│   ├── customers.json
│   └── certifications.json
└── public/images/      # Imagery organised by section
```

## Content

All copy and structured data live in `/data` as JSON, extracted from the official
**AME Company Profile** deck. Update the JSON to update the site — no code changes needed.

## Design System

- **Background** `#050816` · **Primary** `#0F172A` · **Accent** `#F97316`
- **Secondary** `#334155` · **Text** `#F8FAFC`
- Glassmorphism cards, large display typography (Space Grotesk + Inter),
  scroll-triggered reveals, animated counters and a sticky navbar.
