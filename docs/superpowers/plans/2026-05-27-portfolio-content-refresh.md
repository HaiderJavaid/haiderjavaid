# Portfolio Content Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace fictional mounted portfolio content with resume-backed identity content and wire the real resume asset without changing the current Pip-Boy experience or touching `View Work`.

**Architecture:** Keep `src/pages/DevView.jsx` as the mounted controller and extract truthful profile and experience data into `src/content/*` so layout and content are separated. Limit UI changes to the hero, experience, contact, and resume panels, then clean up the dormant lint issue in `MarketingView.jsx` and refresh project docs.

**Tech Stack:** React 19, Vite, Tailwind CSS, ESLint

---

### Task 1: Extract Resume-Backed Content

**Files:**
- Create: `src/content/profile.js`
- Create: `src/content/experience.js`
- Modify: `src/pages/DevView.jsx`

- [ ] Add profile and experience content modules for hero copy, contact details, core skills, and real experience entries.
- [ ] Update `DevView.jsx` to consume extracted content for the mounted hero and experience panels only.

### Task 2: Refresh Contact And Resume Panels

**Files:**
- Modify: `src/pages/DevView.jsx`
- Read: `src/assets/resume.pdf`

- [ ] Replace placeholder contact output with real email, phone, and location using the existing terminal styling language.
- [ ] Import `src/assets/resume.pdf` and wire the resume panel to open and download the asset truthfully.

### Task 3: Remove The Current Lint Blocker

**Files:**
- Modify: `src/pages/MarketingView.jsx`

- [ ] Remove the unused `direction` and `isAnimating` state so the dormant marketing concept no longer fails ESLint.

### Task 4: Refresh Project Docs

**Files:**
- Modify: `docs/PROJECT.md`
- Modify: `docs/TASKS.md`
- Modify: `docs/DECISIONS.md`
- Modify: `docs/SESSION.md`

- [ ] Record the approved public positioning and the new truthful-content state.
- [ ] Update release blockers to reflect that `View Work`, metadata, and CI remain the primary gaps.

### Task 5: Verify

**Files:**
- Verify: `src/pages/DevView.jsx`
- Verify: `src/pages/MarketingView.jsx`
- Verify: `docs/PROJECT.md`
- Verify: `docs/TASKS.md`
- Verify: `docs/DECISIONS.md`
- Verify: `docs/SESSION.md`

- [ ] Run `npm run lint` and confirm ESLint exits cleanly.
- [ ] Run `npm run build` and confirm the production build succeeds.
