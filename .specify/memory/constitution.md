<!--
Sync Impact Report
- Version change: 1.2.0 -> 1.3.0
- Modified principles:
	- II. App Router Module Boundaries -> II. FSD Boundaries with App Router Adapters
	- IV. Quality Gates Are Non-Negotiable -> IV. Quality, Performance, and Bundle Discipline
- Added sections:
	- Core Principle VI. Mobile-Responsive Accessible UX
	- Implementation Constraints
	- Delivery Workflow
- Removed sections:
	- None
- Templates requiring updates:
	- ✅ .specify/templates/plan-template.md
	- ✅ .specify/templates/spec-template.md
	- ✅ .specify/templates/tasks-template.md
	- ✅ README.md
	- ✅ .specify/templates/commands/*.md (no files present)
- Follow-up TODOs:
	- None
-->

# Mirror Shop Constitution

Mirror Shop is a platform for centralized and trusted trading of high-value mirror-tier
items in Path of Exile, including storefronts for trusted creators and communities.

## Core Principles

### I. Product-First Simplicity
The product MUST optimize for delivering a safe and usable trading workflow quickly. New
framework-level dependencies, architecture layers, or tooling gates are allowed only when
they deliver direct value to platform safety, marketplace operations, or delivery speed.
Simpler alternatives MUST be documented before adding complexity.

Rationale: The project is in its initial stage, so keeping complexity low makes iteration
faster and reduces rework risk.

### II. FSD Boundaries with App Router Adapters
Project structure MUST follow Feature-Sliced Design principles adapted for Next.js App Router.
Business and product code MUST live in explicit FSD-oriented segments under src/. The app/
directory is a framework adapter layer for routing and rendering entrypoints, and MUST stay
thin.

Import and dependency rules MUST enforce direction from higher-level slices to lower-level
ones, without reverse coupling. Cross-slice imports MUST go through public APIs and MUST NOT
use deep internal paths of another slice.

Rationale: FSD gives scalable boundaries for product growth, while App Router constraints are
handled through an explicit adapter layer instead of leaking framework details into domain code.

### III. Verified Environment Contract
All runtime environment variables MUST be declared, validated, and exported via
src/shared/config/env-config.ts using zod schemas. Application code MUST NOT read process.env
directly outside this module.

Rationale: A single validated configuration surface prevents runtime misconfiguration and makes
deployment behavior predictable.

### IV. Quality, Performance, and Bundle Discipline
Every merge candidate MUST pass npm run lint, npm run test, and npm run build. Behavior
changes MUST include automated tests at the most appropriate level (unit/integration).
Changes MUST NOT introduce unjustified performance regressions or uncontrolled JavaScript/CSS
bundle growth. Performance and bundle impact MUST be measured and documented for user-facing
changes.
Exceptions require written justification in the implementation plan complexity section.

Rationale: Consistent quality gates keep the template reliable as a starter for downstream
projects.

### V. Trusted Trading and Anti-Scam Defaults
Features that affect listing, communication, offer terms, fees, or settlement MUST include
anti-scam safeguards and an auditable trail of key actions. Every transaction flow MUST make
terms explicit (mirror fee, tax, and participant obligations) before confirmation.

Rationale: The primary product value is trust in high-value trades where user losses are
significant.

### VI. Mobile-Responsive Accessible UX
User experience is critical and MUST remain consistently strong across mobile and desktop.
All user-facing features MUST include responsive behavior for supported breakpoints,
accessibility checks (semantic structure, keyboard navigation, contrast, and clear states),
and UX acceptance criteria that validate clarity and perceived quality of primary flows.

Rationale: Users make high-value decisions in this product; poor UX or poor accessibility
directly reduces trust, completion rate, and safety.

## Implementation Constraints

- Primary stack MUST remain Next.js App Router + TypeScript + Supabase + CSS Modules unless
	an approved migration decision is documented.
- Architecture MUST follow Feature-Sliced Design with documented exceptions for framework
	required folders and naming in Next.js App Router.
- Testing MUST run with Vitest and Testing Library setup already present in the repository.
- Linting and formatting MUST use repository ESLint + Prettier configuration.
- Public configuration values MUST be surfaced through the config object from
	src/shared/config/env-config.ts.
- Supabase access MUST be wrapped in explicit service/repository modules to keep policies,
	auth, and query logic testable and reviewable.
- User-facing changes MUST include responsive verification on mobile breakpoints, and
	accessibility verification before merge.

## Delivery Workflow

1. Specifications MUST describe independent user stories and measurable success criteria.
2. Plans MUST include a Constitution Check section confirming compliance with all principles.
3. Tasks MUST be grouped by user story and include required quality, anti-scam,
	performance/bundle, accessibility, and configuration updates.
4. Pull requests MUST include evidence of lint, test, and build execution.
5. Deviations from any MUST rule require explicit approval and a documented mitigation plan.

## Governance

This constitution overrides informal practices for this repository.

- Amendment process: open a PR that includes (1) proposed text changes, (2) version bump
	rationale, (3) updates to impacted templates/docs, and (4) migration notes if needed.
- Versioning policy:
	- MAJOR: remove/redefine principles or governance rules in a backward-incompatible way.
	- MINOR: add a new principle/section or materially expand existing requirements.
	- PATCH: clarify wording, fix typos, or make non-semantic refinements.
- Compliance review expectations:
	- Every plan and PR review MUST verify principle compliance.
	- Compliance evidence MUST reference relevant artifacts (spec, plan, tasks, tests, checks).
	- Governance audits SHOULD be performed whenever process templates change.

**Version**: 1.3.0 | **Ratified**: 2026-03-29 | **Last Amended**: 2026-03-29
