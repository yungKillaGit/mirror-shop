# Next.js Template

Minimal template for starting new Next.js projects quickly.

This repository is intentionally lightweight. It provides solid defaults but avoids heavy framework decisions, so downstream projects can adapt it easily.

## What is included

- Next.js App Router with TypeScript
- ESLint + Prettier setup
- Vitest + Testing Library infrastructure (no sample tests)
- Basic SEO setup: metadata, robots, sitemap
- Husky + lint-staged pre-commit checks

## What is intentionally not included

- Tailwind or UI framework lock-in
- Storybook
- Complex multi-stage CI/CD pipelines
- Opinionated enterprise architecture layers

## Quick start

1. Install dependencies.

```bash
npm install
```

2. Start development server.

```bash
npm run dev
```

3. Run checks.

```bash
npm run lint
npm run test
npm run build
```

## Environment variables

All app environment variables should be declared, validated, and exported from [src/shared/config/env-config.ts](src/shared/config/env-config.ts).

This template keeps only two public env variables:

- `NEXT_PUBLIC_URL`
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

They are validated and exported as a single `config` object.

## Constitution

Project governance is defined in `.specify/memory/constitution.md`.

All feature work is expected to pass constitution checks in planning and implementation,
including module boundary discipline, centralized env validation, anti-scam safeguards,
explicit trade terms in user flows, mobile-responsive UX, accessibility expectations,
performance/bundle control, and mandatory lint/test/build gates before merge.

## Main scripts

- `npm run dev` - start local development
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run lint checks
- `npm run test` - run tests
- `npm run preview` - clean cache, build, and run

## Project structure

```text
app/                  # Next.js app routes and layout
src/app-pages/        # Route-level page modules
src/shared/           # Shared config and reusable code
public/               # Static assets
```

## Template maintenance guideline

When adding new features to this template, prefer changes that are:

- easy to remove in downstream projects
- low maintenance over time
- useful in both pet and team/commercial projects

If a change is highly opinionated, keep it out of the template and document it as an optional extension instead.