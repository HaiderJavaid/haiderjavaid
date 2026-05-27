# Coding Standards

## React
- Use functional components.
- Keep components in `UpperCamelCase`; keep state and handlers in `lowerCamelCase`.
- Clean up timers and global event listeners in `useEffect` returns.
- Avoid global state until there is real shared-state pressure.
- Keep mounted behavior in `DevView` unless a task explicitly changes the active experience.

## Content
- Do not add unverifiable claims.
- Do not hardcode new portfolio content into layout code; prefer `src/content/*`.
- Keep copy concise, factual, and recruiter-readable.
- Remove or hide UI affordances for assets that do not exist yet.

## Styling
- Preserve the Pip-Boy/terminal direction.
- Prefer Tailwind utilities for layout and spacing.
- Keep theme tokens in `tailwind.config.js`.
- Keep reusable global utilities in `src/index.css`.
- Use motion to support navigation, not hide information.
- Design mobile-first; verify small screens, keyboard flow, and reduced-motion implications.

## Dependencies
- Keep dependencies minimal.
- Add packages only when native React/CSS is insufficient.
- Re-run lint/build after dependency or config changes.

## Release Checks
```bash
npm run lint
npm run build
```

Manual QA: boot flow, home navigation, work list, project detail, experience, contact, resume, keyboard navigation, mobile touch navigation.
