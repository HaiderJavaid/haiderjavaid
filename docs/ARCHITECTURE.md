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
- `src/assets/resume.pdf` is the mounted resume asset.
- `src/assets/kasijob-review.png` and `src/assets/yelloskincare.png` are mounted project screenshots.
- `public/favicon.png` is the active favicon.
- `public/vite.svg` and `src/assets/react.svg` are unused starter assets.

## Technical Debt
1. `DevView.jsx` still mixes local state, rendering, and inline CSS in one large file.
2. Project image placeholders still imply assets that do not exist yet.
3. `MarketingView.jsx` is dormant but still part of the codebase surface.
4. Unused starter assets remain in `public/vite.svg` and `src/assets/react.svg`.
5. Wheel/touch handlers are global and can block normal page scrolling; verify carefully on mobile.
