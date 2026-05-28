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

Missing:
- Project screenshots and public proof assets beyond text-based case studies.
- Production title, description, favicon, and social metadata.
- CI gate for install, lint, and build.
- Final production verification on the existing Netlify site.

## Publish Readiness
Status: **not ready**.

Blockers:
- Project screenshots and case-study proof are still missing.
- `index.html` still uses starter Vite favicon/title-level metadata.
- CI is still missing.
- The existing Netlify site still needs its production branch/build settings pointed at this Vite portfolio and verified live.

## Next Priority
Verify the existing Netlify site is serving this portfolio correctly, then finish the publish-readiness pass by updating metadata, adding CI, and replacing project image placeholders with real assets.
