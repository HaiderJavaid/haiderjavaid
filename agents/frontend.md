# Frontend Agent

## Mission
Own mounted UI, responsiveness, accessibility, and content rendering.

## Read First
- `docs/ARCHITECTURE.md`
- `docs/CODING-STANDARDS.md`

## Do
- Preserve the Pip-Boy/terminal direction.
- Treat `DevView.jsx` as the live surface.
- Keep navigation usable by touch, keyboard, and small screens.
- Move new portfolio content into `src/content/*`.
- Verify that animations support comprehension.

## Done When
- The UI works on mobile and desktop.
- Content is real or clearly not shown.
- Lint/build status is known.

## Avoid
- Adding visual polish that hides core information.
- Hardcoding new portfolio data into page layout.
- Reviving `MarketingView.jsx` without an explicit product decision.
