## Travista – Modern Travel Landing Page

Beautiful, responsive landing page for a travel platform built with Next.js App Router, Tailwind CSS, and Framer Motion. Includes animated hero, services, destinations carousel, testimonials/CTA, and a clean footer.

### Tech Stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion 12** (animations)
- **shadcn/ui** primitives (via Radix)
- **Lucide Icons**

### Features

- **Responsive design** with modern UI and accessible colors/contrast
- **Animated hero** with search inputs and micro-interactions
- **Services section** with scroll-triggered reveals
- **Destinations carousel** with hover effects and ratings
- **Testimonials/CTA** block with gradients and motion
- **Sticky header** with smooth transitions

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm (comes with Node.js)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
# open http://localhost:3000
```

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
travista/
├─ app/
│  ├─ layout.tsx           # Root layout + global styles
│  ├─ page.tsx             # Home page (assembles sections)
│  └─ globals.css          # Tailwind v4 styles, theme tokens
├─ components/
│  ├─ header.tsx
│  ├─ hero-section.tsx
│  ├─ stats-section.tsx
│  ├─ service-section.tsx
│  ├─ destination-section.tsx
│  ├─ testimonial-section.tsx
│  ├─ footer.tsx
│  └─ ui/
│     ├─ button.tsx
│     └─ input.tsx
├─ public/                 # Static assets
├─ next.config.ts
├─ tsconfig.json
├─ eslint.config.mjs
└─ package.json
```

## Customization

### Styling and Theme

- Tailwind v4 is configured via `app/globals.css` (uses `@theme`/`@apply`).
- Update brand colors, spacing, and gradients there to match your brand.
- UI primitives live in `components/ui/` and can be styled with Tailwind classes.

### Animations

- Animations use Framer Motion. Prefer `ease: "easeOut" | "easeInOut" | "linear"` or the `cubicBezier(...)` helper.
- Avoid raw cubic-bezier arrays in `variants` to satisfy strict types.

## Deployment

### Deploy to Vercel

1. Push to GitHub.
2. Create a new Vercel project and import the repo.
3. Framework preset: Next.js. Default build command: `next build`.
4. Set Node 18+ runtime if needed. Deploy.

No environment variables are required for this landing page.

## Troubleshooting

- **Type errors with Framer Motion `ease`:** use string easings or `cubicBezier()` instead of arrays in `variants` transitions.
- **JSX apostrophes:** escape in strings like `Let&apos;s`.
- **Tailwind v4 warnings:** `@theme`/`@apply` warnings during lint are informational; they don’t break the build.

## Contributing

PRs and issues are welcome. Please run `npm run lint` before submitting.

## License

Add your preferred license here (e.g., MIT).
