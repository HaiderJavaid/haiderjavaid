# Home Intro Animation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a one-time GSAP home intro that assembles the profile centrally, glides it left, and glitch-boots the slot navigation.

**Architecture:** `DevView` owns one scoped GSAP timeline using DOM refs. The final DOM and Tailwind layout remain unchanged; GSAP applies temporary transforms, opacity, clipping, and filters, then clears them. Reduced-motion skips directly to the completed state.

**Tech Stack:** React 19, GSAP, Tailwind CSS, Vite

---

### Task 1: Add GSAP

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] Install GSAP with `npm install gsap`.
- [ ] Confirm `gsap` is listed under dependencies.

### Task 2: Implement the Post-Boot Timeline

**Files:**
- Modify: `src/pages/DevView.jsx`

- [ ] Import GSAP and add refs for the home layout, profile group, staged profile children, and navigation group.
- [ ] Replace the timer-based home intro flicker with a scoped `gsap.context()` timeline triggered after `isBooting` becomes false.
- [ ] Start the profile group centered on desktop using its measured offset from the viewport center.
- [ ] Stagger profile children from low opacity, slight vertical offset, and blur.
- [ ] Animate the profile group into its existing left-column position.
- [ ] Reveal the navigation with clipped horizontal slices, short x-axis jumps, contrast/brightness flashes, and a final teal glow.
- [ ] Disable nav pointer events until the timeline completes.
- [ ] Skip animation and restore interaction immediately when reduced motion is preferred.
- [ ] Clean up the GSAP context on unmount.

### Task 3: Add Reusable Glitch Styling

**Files:**
- Modify: `src/index.css`

- [ ] Add a lightweight pseudo-element/static treatment used only during the nav boot phase.
- [ ] Keep the styling compatible with the existing CRT overlay and teal theme.

### Task 4: Validate and Record State

**Files:**
- Modify: `docs/TASKS.md`
- Modify: `docs/SESSION.md`

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Verify the dev server renders without console/build errors.
- [ ] Record the completed one-time intro behavior and reduced-motion fallback in project docs.
