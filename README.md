## Overview

This project is a Next.js application built with a modern, type-safe frontend stack. It prioritizes performance, maintainability, and a clean developer experience.

## Why Next.js

Next.js is used for its server-rendering capabilities and SEO-first architecture. Server-side rendering and static generation help search engines crawl pages effectively, while the framework's metadata handling and performance optimizations support strong organic visibility.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- ESLint

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open http://localhost:3000 in your browser. You can start editing the page by modifying `app/page.tsx`.

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run linting

## Assumptions and Notes

- This project targets a modern Node.js runtime (Node 20+ recommended).
- Styling is handled with Tailwind CSS v4; global styles live in `app/globals.css`.
- The App Router is used, so routes and layouts are defined under `app/`.
