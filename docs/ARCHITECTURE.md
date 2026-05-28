# Architecture

## App Model
Static single-page React app. There is no router, backend, database, auth, CMS, or global state layer.

## Runtime Flow
`src/main.jsx` mounts React in `StrictMode`; `src/App.jsx` renders `DevView`; `DevView` owns the portfolio state machine locally.

## Active Surface
- `src/pages/DevView.jsx` - mounted portfolio UI, local navigation state, transition state, and project-detail rendering.
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
Current content is split between view code and data modules:
- `src/pages/DevView.jsx` - `MENU_ITEMS` and the view state machine
- `src/content/profile.js`
- `src/content/projects.js`
- `src/content/experience.js`

## Assets
- `public/vite.svg` and `src/assets/react.svg` are starter assets.
- `src/assets/resume.pdf` is the mounted resume asset.
- No project screenshots exist yet.

## Technical Debt
1. `DevView.jsx` still mixes local state, rendering, and inline CSS in one large file.
2. Project image placeholders still imply assets that do not exist yet.
3. `MarketingView.jsx` is dormant but still part of the codebase surface.
4. Starter metadata and favicon remain in `index.html` and `public/vite.svg`.
5. Wheel/touch handlers are global and can block normal page scrolling; verify carefully on mobile.
