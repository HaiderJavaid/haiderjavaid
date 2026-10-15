# Project

## Purpose
Build a memorable, truthful portfolio for Haider that demonstrates UI craft and communicates verified professional value quickly.

## Audience
- Recruiters and hiring managers validating fit.
- Engineering and product leads evaluating taste, execution, and technical range.
- Founders or collaborators looking for product-minded web delivery.

## Product Shape
- Active experience: retro terminal/Pip-Boy developer portfolio in `DevView`.
- Dormant concept: business-facing `MarketingView`, currently not mounted.
- MVP delivery model: static single-page app.

## Current Progress
Built:
- React + Vite + Tailwind scaffold.
- Full-screen `DevView` shell with boot sequence, matrix background, CRT overlay, and slot-machine navigation.
- Work, about, experience, contact, resume, and project-detail screens.
- Unmounted `MarketingView` slide concept.
- Netlify-ready static build config via `netlify.toml`.
- Unified filtered Recent Work list led by Replenish Beauty and Hackbox, then Stonecode, Anonymail, BikeBaju, KasiJobs, and Yello Skincare.
- App Store-style product galleries with 26 verified screens; latest changes are local, not deployed.
- Software and digital marketing positioning across the home, About, and metadata surfaces.
- Broader home copy spanning learning products, privacy tools, marketplaces, e-commerce, frontend delivery, and growth systems.

Missing:
- CI gate for install, lint, and build.

## Publish Readiness
Status: **approved for the October 2026 portfolio refresh**.

Blockers:
- CI remains a maintenance task. The existing production site uses the replacement Vite build on branch `replace-portfolio`.

## Next Priority
Publish and verify the approved project refresh on the existing site; then add CI and a short manual QA checklist.
