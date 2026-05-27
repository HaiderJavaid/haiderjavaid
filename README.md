# Haider Web Portfolio

Static React + Vite portfolio with a retro terminal/Pip-Boy inspired developer interface.

## Status
Not publish-ready. The interface is built, but the public proof points are still placeholders.

## Stack
- React 19, Vite 7, Tailwind CSS 3
- Lucide React icons
- Local React state only
- No router, backend, auth, database, CMS, or CI

## Run
```bash
npm install
npm run dev
```

## Validate
```bash
npm run lint
npm run build
```

Current lint status: failing because `src/pages/MarketingView.jsx` defines unused state (`direction`, `isAnimating`).

## Project Map
- `src/App.jsx` renders the active portfolio view.
- `src/pages/DevView.jsx` owns the mounted UI and hardcoded portfolio content.
- `src/pages/MarketingView.jsx` is an unmounted alternate concept.
- `src/components/dev/` contains boot, matrix, and slot navigation UI.
- `docs/` contains the active project memory.
- `agents/` contains role-specific guidance for future AI agents.

## Next Priority
Replace placeholders with verified resume-backed content, real project links/assets, real contact details, and a working resume download.
