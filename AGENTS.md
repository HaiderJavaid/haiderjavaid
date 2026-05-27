# AGENTS.md

## Project Contract
`haider-web-portfolio` is a static React + Vite personal portfolio. The live product is a retro terminal/Pip-Boy developer interface.

## Current Reality
- `src/App.jsx` renders `src/pages/DevView.jsx` only.
- `src/pages/MarketingView.jsx` is an unmounted alternate concept and still affects lint health.
- Portfolio content is hardcoded in `DevView.jsx`.
- Public content currently includes fictional projects, fictional experience, a placeholder email, missing resume download behavior, generic links, and starter metadata.
- The project has no CI workflow.

## Source Of Truth
Read in this order before changing behavior:
1. `docs/PROJECT.md` - product state, audience, readiness, and next priority.
2. `docs/ARCHITECTURE.md` - inferred code structure and active surfaces.
3. `docs/TASKS.md` - current backlog and release blockers.
4. `docs/DECISIONS.md` - accepted constraints and pending choices.
5. `docs/CODING-STANDARDS.md` - local implementation rules.

## Operating Rules
- Preserve the current Pip-Boy/terminal direction unless explicitly asked to redesign.
- Work one feature at a time.
- Keep the MVP static until a real backend need exists.
- Prefer small refactors and data extraction over rewrites.
- Treat fake claims, placeholder links, placeholder contact data, and unavailable assets as release blockers.
- Keep mobile, keyboard, reduced-motion, and readability concerns visible during UI work.
- Run `npm run lint` and `npm run build` before release-facing changes when practical.
- Update `docs/TASKS.md` and `docs/SESSION.md` after meaningful project-state changes.

## Agent Workflow
1. Inspect the relevant code and active docs first.
2. Infer the smallest change that moves the project toward publish readiness.
3. Implement using existing patterns.
4. Validate with lint/build or document why validation could not pass.
5. Keep docs concise; do not create parallel backlogs or duplicate status notes.
