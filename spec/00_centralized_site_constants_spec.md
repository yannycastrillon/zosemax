# Technical Analysis: Centralized Site Constants Data Layer

**Date**: 2026-03-22
**Status**: Proposed
**Branch**: `build-services-page`

---

## Problem

Business-critical data — phone numbers, email addresses, service area lists, and marketing copy fragments — is duplicated across **at least five separate files** with no single source of truth. This has already produced real inconsistencies in production content.

### Evidence of existing bugs

**Phone number** appears in three files with inconsistent formatting:

| File | Value | Format |
|------|-------|--------|
| `Navigation.tsx` | `(908) 400-2723` | `display` key |
| `Footer.tsx` | `(908) 400-2723` | `phone` key |
| `ContactPage.tsx` | `(908)-400-2723` | `phone` key, **extra hyphen** |

**Service areas** are stated in six files with conflicting information:

| File | States Listed | Count |
|------|---------------|-------|
| `Footer.tsx` | NJ, PA, Upstate New York | 3 |
| `ContactPage.tsx` | NJ, PA, NY | 3 |
| `HomePage.tsx` (line 105) | NJ . PA . NY | 3 |
| `TrustBar.tsx` (line 13) | NJ . PA . NY | 3 |
| `ServicesPage.tsx` (line 19) | New Jersey, Pennsylvania, New York, **and Maryland** | **4** |
| `ServiceDetailPage.tsx` (line 180) | New Jersey, Pennsylvania, New York **& Maryland** | **4** |

**Email** is declared independently in `Footer.tsx` and `ContactPage.tsx`.

These are not theoretical risks — they are bugs that exist right now.

---

## Architectural Impact

- **Components affected**: `Navigation.tsx`, `Footer.tsx`, `ContactPage.tsx`, `ServiceDetailPage.tsx`, `ServicesPage.tsx`, `HomePage.tsx`, `TrustBar.tsx` — essentially every component that renders business information.
- **Data layer**: New file `src/data/site.ts` in the existing `src/data/` directory. No new patterns needed — this follows the exact same approach as `services.ts`.
- **Routing**: No changes.
- **Styling**: No changes.
- **Performance**: Zero impact. Static constants are tree-shaken and inlined at build time. No additional bundle cost.

---

## Proposed Solution

Create a centralized site constants module at `src/data/site.ts` that becomes the single source of truth for all business identity data. Then refactor every component that currently declares its own `CONTACT`, `PHONE`, `SERVICE_AREAS`, or similar constant to import from this module instead.

### Interface Design

The module should export typed constants organized by domain:

**Contact info** — a single `CONTACT` object with canonical fields:
- `phone.display` — formatted for humans: `(908) 400-2723`
- `phone.tel` — for `tel:` links: `9084002723`
- `email` — canonical email address
- `location` — primary base text

**Service areas** — a single `SERVICE_AREAS` array of objects:
- `code` — abbreviated: `NJ`, `PA`, `NY`
- `name` — full: `New Jersey`, `Pennsylvania`, `New York`

**Business hours** — a single `HOURS` object:
- `weekday` — text
- `weekend` — text

**Social links** — a `SOCIALS` array:
- `platform`, `url`, `label`

**Company identity** — a `COMPANY` object:
- `name` — `Zosemax`
- `legalName` — `Zosemax Fireplaces`
- `tagline` — the footer tagline
- `foundedYear` — for "since 2012" calculations

### What it resolves immediately

1. **The phone formatting bug**: `ContactPage.tsx` uses `(908)-400-2723` while the other two files use `(908) 400-2723`. One import fixes this everywhere.
2. **The Maryland discrepancy**: A single `SERVICE_AREAS` array forces a decision — does the company serve Maryland or not? Right now the website contradicts itself.
3. **Future-proofing**: When the phone number, email, or service area list changes (and for a growing business, it will), the change is made in one file, not hunted across seven.

---

## Implementation Plan

### Step 1 — Create `src/data/site.ts`

Define the `ContactInfo`, `ServiceArea`, `BusinessHours`, and `CompanyInfo` interfaces. Export the canonical constants. This file sits alongside `services.ts` in the existing `src/data/` directory — no new directories needed.

### Step 2 — Resolve the Maryland question

> **Blocker**: Before writing the constants, determine whether Maryland is an active service area. The answer must come from the business, not a developer's guess. If unclear, standardize to 3 states (NJ, PA, NY) to match the majority of pages, and add a code comment marking it as a decision to confirm.

### Step 3 — Refactor `Navigation.tsx`

Remove the local `PHONE` constant (line 7). Import `CONTACT` from `@/data/site`. Replace `PHONE.display` and `PHONE.tel` with `CONTACT.phone.display` and `CONTACT.phone.tel`.

### Step 4 — Refactor `Footer.tsx`

Remove the local `CONTACT` constant (lines 7–11) and `SERVICE_AREAS` array (line 13). Import both from `@/data/site`.

### Step 5 — Refactor `ContactPage.tsx`

Remove the local `CONTACT` constant (lines 7–14) and `SERVICE_AREAS` array (lines 16–20). Import from `@/data/site`. This file has the most inconsistencies and needs the most careful attention during refactor.

### Step 6 — Refactor `ServiceDetailPage.tsx`

Replace the hardcoded "Serving New Jersey, Pennsylvania, New York & Maryland" string (line 180) with a dynamically generated string from the `SERVICE_AREAS` array — e.g., `SERVICE_AREAS.map(a => a.name).join(', ')` or a pre-composed `serviceAreaText` export from `site.ts`.

### Step 7 — Refactor `ServicesPage.tsx`

Same treatment for line 19's hardcoded state list in the hero subtitle.

### Step 8 — Refactor `TrustBar.tsx` and `HomePage.tsx`

These use abbreviated forms ("NJ . PA . NY"). They should derive from the same `SERVICE_AREAS` array using the `code` field, so if a state is added or removed, these update automatically.

### Step 9 — Verify

Run `pnpm dev` and visually check each page to confirm no regressions. Grep the codebase for any remaining hardcoded phone numbers, emails, or state lists that were missed.

> **Note**: Steps 3–8 are independent of each other and can be done in any order after Steps 1–2.

---

## Trade-offs & Risks

### Costs

- Adds one new file and one new import per consuming component. This is minimal overhead — it is a net reduction in total lines of code once the duplicated constants are removed.
- Requires a decision on the Maryland question, which is a business decision not a technical one. This is a feature, not a bug — the architecture is surfacing a real inconsistency that should be resolved.

### What this gives up

- **Component self-containment**: Today, you can read `Footer.tsx` and see all the data it renders without following imports. After this change, the contact info comes from an import. However, this is exactly the same trade-off already accepted for `services.ts`, and the project is better for it.

### Alternatives considered

| Alternative | Verdict |
|-------------|---------|
| **Environment variables for business data** | Over-engineered. This is a static site with no backend. The data does not change per environment — it changes per business decision. |
| **CMS or headless content layer** | Dramatically over-scoped for a marketing site with fewer than 20 pages of content. The `src/data/*.ts` pattern is the right level of abstraction for this project's scale. Revisit if the site grows significantly. |
| **Fix individual bugs without centralizing** | Fixes today's symptoms but guarantees the same class of bug will recur with every new page or component. |

### Why this is the highest-impact single improvement

- Fixes existing production bugs (phone format, state list inconsistency)
- Prevents an entire category of future bugs
- Follows a pattern already established and proven in the codebase (`services.ts`)
- Achievable in a single focused session
- Touches no styling, no routing, no build config — zero risk of visual regression beyond the intentional corrections
