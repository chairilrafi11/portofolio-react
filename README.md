# Chairil Rafi Purnama — Portfolio

Personal portfolio website for **Chairil Rafi Purnama**, Senior Full Stack Developer.

Built as a lightweight **React + Vite** project with **TypeScript** and **Tailwind CSS v4**, implementing the "Portfolio Home (V3)" screen from Stitch.

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/postcss`)
- [Oxlint](https://oxc.rs/) for linting
- [pnpm](https://pnpm.io/) as package manager

## Getting Started

```bash
# Install dependencies
pnpm install

# Start the dev server
pnpm dev

# Typecheck
pnpm typecheck

# Lint
pnpm lint

# Production build
pnpm build

# Preview production build
pnpm preview
```

## Project Structure

```
src/
├── assets/          # Local images (portrait, project screenshots)
├── components/      # Section components (Hero, SelectedWork, etc.)
├── App.tsx          # Root component assembling all sections
├── index.css        # Tailwind import + design tokens
├── main.tsx         # React entry point
└── vite-env.d.ts    # Vite client type references
```

## Design System

The design tokens (colors, typography, spacing) are defined in `src/index.css` via Tailwind CSS v4's `@theme` directive, matching the original Stitch design — a dark, editorial, architectural-minimalist aesthetic with IBM Plex Sans.
