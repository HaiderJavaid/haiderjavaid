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
- Work, experience, contact, resume, and project-detail screens.
- Unmounted `MarketingView` slide concept.

Missing:
- Real project data, links, screenshots, outcomes, and case-study proof.
- Working `View Work` content that matches the chosen positioning.
- Production title, description, favicon, and social metadata.
- CI gate for install, lint, and build.
- Any public proof assets for case studies beyond the resume itself.

## Publish Readiness
Status: **not ready**.

Blockers:
- `DevView.jsx` still contains placeholder project cards and placeholder project links in `View Work`.
- `View Work` still includes `https://example.com` and generic GitHub URLs.
- Project screenshots and case-study proof are still missing.
- `index.html` still uses starter Vite favicon/title-level metadata.
- CI is still missing.

## Next Priority
Finish the publish-readiness pass by replacing or hiding placeholder project content in `View Work`, then update metadata and add CI.
