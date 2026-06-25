# AI DM Agent Experts

A high-converting, production-grade landing page for **Sharnga** — an AI DM automation service that helps personal brands convert flooded inboxes into booked calls on autopilot.

## What This Is

Sharnga replaces manual DM follow-ups with custom AI agents that diagnose needs, qualify leads, and route qualified prospects to your calendar 24/7. This repo is the marketing site that sells that service.

## Built With

| Layer | Stack |
|-------|-------|
| Framework | React 19 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Animations | Motion (Framer Motion) |
| Icons | Lucide React |
| Booking | Cal.com Embed SDK |
| AI Backend | Google Generative AI (Gemini) |
| Server | Express.js |

## Sections

- **Hero** — Immersive video background with animated headline reveal
- **Pain Section** — Identifies the DM bottleneck for personal brands
- **How It Works** — 3-step process (Audit → Prescription → Integration)
- **Value Props** — Smart qualification, brand alignment, 24/7 uptime
- **Pricing** — $650–$1,200/mo packages with Cal.com booking embed
- **FAQ** — Objection handling (Instagram compliance, guardrails, vs. auto-responders)
- **Wall of Love** — Social proof from 40+ brands
- **Footer** — Brand closure

## Key Engineering Decisions

- **Code-splitting via `React.lazy`** — Heavy sections load on demand for faster first paint
- **CSS-first theming** — Tailwind v4 `@theme` block defines custom fonts (Instrument Serif + Inter) and colors; no `tailwind.config.js`
- **Custom animation primitives** — `LetterReveal` (character-level stagger) and `BlurReveal` (opacity + blur transitions) wrap every section heading
- **Path aliases** — `@/` maps to project root via `tsconfig.json` + `vite.config.ts`
- **AI Studio ready** — `DISABLE_HMR` env var disables file watching during agent edits; `metadata.json` declares `MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API`

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server on port 3000
npm run dev

# Type-check (no emit)
npm run lint

# Production build
npm run build
```

## Environment Variables

| Variable | Purpose |
|----------|---------|
| `GEMINI_API_KEY` | Google AI Studio API key (injected at runtime by AI Studio) |
| `APP_URL` | Hosted service URL for self-referential links and API endpoints |

Copy `.env.example` to `.env` and fill in values, or configure via the **Secrets** panel in AI Studio.

## Deployment

This project is designed to run inside **Google AI Studio** as an applet. The `metadata.json` declares required capabilities:

```json
"majorCapabilities": ["MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API"]
```

For self-hosting, deploy the Vite build output behind the bundled Express server (see `package.json` `clean` script).

## License

Apache-2.0 (`@license` block in `App.tsx`)
