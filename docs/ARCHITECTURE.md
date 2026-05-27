# Architecture

## App Model
Static single-page React app. There is no router, backend, database, auth, CMS, or global state layer.

## Runtime Flow
`src/main.jsx` mounts React in `StrictMode`; `src/App.jsx` renders `DevView`; `DevView` owns the portfolio state machine locally.

## Active Surface
- `src/pages/DevView.jsx` - mounted portfolio UI, local navigation state, transition state, hardcoded menu/project/experience content, project-detail rendering.
- `src/components/dev/BootScreen.jsx` - simulated boot progress before the portfolio appears.
- `src/components/dev/MatrixRain.jsx` - canvas background animation shown on the home view after boot.
- `src/components/dev/SlotMachineNav.jsx` - wheel, keyboard, click, and touch navigation for top-level menu selection.
- `src/index.css` - Tailwind layers, global page locking, CRT overlay, scrollbar utility, flicker animation.
- `tailwind.config.js` - Pip-Boy color tokens and animation definitions.

## Dormant Surface
- `src/pages/MarketingView.jsx` - unmounted slide-based marketing/sales concept.
- It is not imported by `App.jsx`, but still participates in lint and dependency health.
- `src/components/marketing/` exists as an empty directory.

## Content Model
Current content lives inside `DevView.jsx`:
- `MENU_ITEMS`
- `PROJECTS`
- `EXPERIENCES`

When real content is added, extract data without redesigning the view:
```text
src/content/profile.js
src/content/projects.js
src/content/experience.js
```

## Assets
- `public/vite.svg` and `src/assets/react.svg` are starter assets.
- No resume PDF exists.
- No project screenshots exist.

## Technical Debt
1. `DevView.jsx` mixes content, local state, rendering, links, and inline CSS.
2. Placeholder public claims are the largest trust risk.
3. `MarketingView.jsx` is dormant but causes current lint failure via unused state.
4. The resume and project image UI implies assets that do not exist.
5. Starter assets and metadata remain.
6. Wheel/touch handlers are global and can block normal page scrolling; verify carefully on mobile.
