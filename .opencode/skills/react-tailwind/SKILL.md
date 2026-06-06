---
name: react-tailwind
description: Use when working with React components, Tailwind CSS styling, or building UI with @tanstack/react-router, @tanstack/react-start, or Tailwind CSS. Covers component patterns, Tailwind v4 theming, state management, and UI best practices.
---

# React + Tailwind Frontend Skill

## Tech Stack

- **Framework**: React 19 + @tanstack/react-start (SSR)
- **Routing**: @tanstack/react-router (file-based routing via `createFileRoute`)
- **Styling**: Tailwind CSS v4 (CSS-first configuration with `@theme`)
- **Icons**: lucide-react + @iconify/react
- **Fonts**: Google Fonts (Poppins) via @font-sans in Tailwind theme

## Project Conventions

### File Structure

```
src/
├── components/       # Reusable UI components
├── routes/           # File-based routes (TanStack Router)
├── styles.css        # Tailwind @theme configuration
└── lib/              # Utilities and helpers
```

### Component Pattern

Always use **props-driven** components, not static hardcoded values:

```tsx
// Good
interface AvatarProps {
  user: { name: string; avatar: string };
}
function Avatar({ user }: AvatarProps) { ... }

// Avoid (hardcoded)
function Avatar() {
  const name = "Steve Jobs"; // hardcoded
  ...
}
```

### Tailwind CSS v4 Theme Setup

Theme is configured in `src/styles.css` using `@theme` directive:

```css
@import "tailwindcss";

@theme {
  --color-primary: #0a1527;
  --color-secondary: #32d7c4;
  --color-on-primary: #fff;
  --color-on-secondary: #0a1527;

  --font-sans: "Poppins", sans-serif;

  --gradient-primary: linear-gradient(to right, #02bda7, #53d7c8, #a7fff5);
  --gradient-secondary: linear-gradient(to right, #02bda7, #a7fff5);
}

.gradient-primary {
  background: var(--gradient-primary);
}
```

### Custom Class Utilities

Use `twMerge` from `tailwind-merge` for conditional classes:

```tsx
import { twMerge } from "tailwind-merge";

function Card({ className = "", children }) {
  return (
    <div className={twMerge("rounded-2xl bg-slate-800", className)}>
      {children}
    </div>
  );
}

// Usage - can override or extend base classes
<Card className="p-6 hover:bg-slate-700" />
```

### Google Fonts Setup

Fonts loaded in `src/routes/__root.tsx` via TanStack Router's head:

```tsx
links: [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" },
]
```

### Icon Usage

Two icon libraries in use:

```tsx
// lucide-react - for simple icons
import { BookOpen, Sun, Moon } from "lucide-react";
<BookOpen className="text-white" fill="#ffffff" />

// @iconify/react - for brand icons
import { Icon } from "@iconify/react";
<Icon icon="material-symbols:home-rounded" fontSize={32} />
```

### Navigation Pattern

For tab/section switching within a page (SPA style), use `useState`:

```tsx
// Parent component
const [currentSection, setCurrentSection] = useState<"home" | "journal" | "account">("home");

<BottomNavbar currentSection={currentSection} onChangeSection={setCurrentSection} />

// BottomNavbar receives
interface BottomNavbarProps {
  currentSection: string;
  onChangeSection: (section: string) => void;
}
```

### Common Tailwind Patterns

```tsx
// Scrollable container with bottom padding for fixed nav
<div className="flex-1 overflow-y-auto pb-24">

// Fixed centered navbar
<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 ...">

// Gradient background
<div className="gradient-primary">

// Gradient with arbitrary value
<div className="bg-[linear-gradient(to_right,#02bda7,#a7fff5)]">

// Absolute positioning for overflow effects
<div className="absolute -bottom-4 -right-2">

// Grid layouts
<div className="grid grid-cols-2 grid-rows-3 gap-4">
```

### Button Press Feedback

```tsx
<button
  className="transition-all duration-150 active:scale-95 active:brightness-90 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-secondary/50"
>
  Click me
</button>
```

### Component Extraction Checklist

When refactoring components:

1. [ ] Identify data that changes - make these props
2. [ ] Static UI elements - can stay hardcoded in component
3. [ ] Extract to `src/components/ComponentName.tsx`
4. [ ] Export as named export `export function ComponentName()`
5. [ ] Import in parent route file
6. [ ] Use `twMerge` for optional className prop

## TanStack Router

File-based routing: `src/routes/index.tsx` → route `/`

```tsx
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });
```

## Scripts

```bash
pnpm dev          # Start dev server
pnpm build        # Production build
pnpm test         # Run vitest
pnpm lint         # Biome lint
pnpm format       # Biome format
pnpm check        # Biome check
pnpm db:generate  # Prisma generate
pnpm db:push      # Push schema to DB
pnpm db:migrate   # Run migrations
```

## Dependencies

Key packages:

- `@tanstack/react-start` - SSR framework
- `@tanstack/react-router` - File-based routing
- `@tanstack/react-router-devtools` - Dev tools panel
- `@prisma/client` + `better-auth` - Database & auth
- `tailwindcss` v4 + `@tailwindcss/vite` - CSS
- `lucide-react` - Simple icons
- `@iconify/react` - Brand/complex icons
- `tailwind-merge` - Class merging utility