# Roadmap

## Phase 1: Truthful Static Portfolio
Goal: make the existing UI safe to show publicly.

Deliver:
- Verified positioning and hero copy.
- Resume-backed experience content.
- Real project cards, links, screenshots, and outcomes.
- Working resume download.
- Real contact details.
- Production metadata.
- Passing lint/build.

Exit:
- No fake claims, `example.com` links, placeholder email, or missing resume path.
- `npm run lint` and `npm run build` pass locally.

## Phase 2: Maintainable Portfolio
Goal: make content updates low-risk.

Deliver:
- `src/content/*` data modules for profile, projects, and experience.
- Optional project asset folder structure.
- CI workflow for install, lint, and build.
- Decision on `MarketingView.jsx`.

Exit:
- Portfolio content can be updated without editing page rendering logic.
- CI catches lint/build regressions.

## Phase 3: Conversion Polish
Goal: improve clarity and contact flow after the portfolio is truthful.

Consider:
- Stronger CTAs for LinkedIn, GitHub, email, or booking.
- Direct project/case-study URLs if sharing becomes important.
- Accessibility and motion review.
- Privacy-safe analytics only if there is a clear reason.

## Not For MVP
- CMS.
- Auth.
- Full backend.
- Complex routing.
- More animation before content is credible.
