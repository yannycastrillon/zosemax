---
name: build_architect_spec
description: Invoke the architect agent to produce an architecture spec. Use with a feature description (e.g. "/build_architect_spec add a testimonials carousel") or without arguments for a general audit.
user_invocable: true
---

# Generate Architecture Spec

Follow these steps exactly:

## 1. Determine the next spec number

Look at existing files in the `spec/` directory. Find the highest `XX` prefix and increment by 1. If no specs exist, start at `00`.

## 2. Determine the mode

Check whether the user provided arguments after `/spec`:

- **With arguments** → Feature mode. The arguments describe a specific feature or change to architect.
- **No arguments** → Audit mode. The architect picks the highest-impact improvement.

## 3. Invoke the architect agent

Launch the **architect** subagent with the appropriate prompt below.

---

### Feature mode prompt (user provided a feature description)

> The user wants to implement the following feature:
>
> **"{user's arguments}"**
>
> Your job is to produce a complete architecture spec for this feature. Analyze the current codebase to understand existing patterns, then design the feature to integrate cleanly.
>
> ### Analysis steps
>
> 1. **Discover**: Read the relevant existing files — components, data layer, routes, styles — to understand the current architecture and patterns.
> 2. **Design**: Propose a solution that follows the project's established conventions (component structure, data layer patterns, styling approach, naming conventions).
> 3. **Specify**: Define every new file, interface, component prop contract, and data shape. Specify which existing files need modification and what changes are needed.
> 4. **Plan**: Break the implementation into ordered, unambiguous steps a developer can follow without guessing.
>
> ### Constraints
>
> - Follow existing patterns in the codebase — do not introduce new paradigms unless the feature absolutely requires it (and justify why).
> - Keep the scope tight. If the feature implies multiple phases, spec only the first deliverable phase and note future phases separately.
> - Do NOT write implementation code. Produce only the architecture spec.
>
> ### Output format
>
> Use the Technical Analysis Format:
>
> ```
> # Technical Analysis: [Feature Name]
>
> ## Problem
> [What user need or business goal this feature addresses]
>
> ## Architectural Impact
> - Components: [new or modified components, prop contracts, composition]
> - Data layer: [new interfaces, data files, or shape changes]
> - Routing: [new routes, params, lazy-load boundaries]
> - Styling: [new SCSS modules, variable usage, responsive considerations]
> - Performance: [bundle size, render cost, lazy loading]
>
> ## Proposed Solution
> [Technical design with concrete file paths and interface definitions]
>
> ## Implementation Plan
> 1. [Step 1 — specific file, specific change]
> 2. [Step 2]
> ...
>
> ## Trade-offs & Risks
> [Costs, alternatives considered, what could go wrong]
> ```
>
> Include concrete file paths, line numbers, and evidence for every claim.

---

### Audit mode prompt (no arguments provided)

> Perform a systematic audit of this codebase. Your goal is to identify and propose **one high-impact architectural improvement** that builds on patterns already established in the project.
>
> ### Audit checklist
>
> 1. **Data consistency**: Scan for business data (contact info, copy, labels, URLs) duplicated across multiple files. Flag any inconsistencies.
> 2. **Pattern adherence**: Identify where the codebase deviates from its own established patterns (component structure, data layer conventions, styling approach).
> 3. **Missing abstractions**: Look for repeated logic or structures that should be extracted but haven't been yet.
> 4. **Structural gaps**: Check for incomplete implementations, dead code, or files that exist but aren't wired up.
>
> ### Constraints
>
> - Propose exactly **one** improvement — the one with the highest impact-to-effort ratio.
> - It must build naturally on existing patterns in the codebase (don't introduce new paradigms).
> - It must be scoped to a single focused implementation session.
> - Do NOT write any code. This is purely analysis and design.
>
> ### Output format
>
> Use the Technical Analysis Format:
>
> ```
> # Technical Analysis: [Feature Name]
>
> ## Problem
> ## Architectural Impact
> ## Proposed Solution
> ## Implementation Plan
> ## Trade-offs & Risks
> ```
>
> Include concrete file paths, line numbers, and evidence for every claim. The implementation plan must be step-by-step with no ambiguity.

---

## 4. Save the spec

Take the architect's output and save it to a file in the `spec/` directory at the project root:

- **Path**: `spec/{XX}_{snake_case_name}_spec.md`
- **Name**: Derive `snake_case_name` from the Technical Analysis title (e.g., "Testimonials Carousel" → `testimonials_carousel`)
- **Header**: Prepend a metadata block before the architect's content:

```markdown
# Technical Analysis: [Title from architect]

**Date**: {today's date, YYYY-MM-DD}
**Status**: Proposed
**Branch**: `{current git branch}`

---
```

Then include the full Technical Analysis body from the architect.

## 5. Confirm

Tell the user the spec file path and give a 2-3 sentence summary of what was proposed.
