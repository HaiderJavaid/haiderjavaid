# Portfolio Content Refresh Design

## Goal
Replace the mounted portfolio's fictional identity content with resume-backed content while preserving the current Pip-Boy terminal presentation and leaving the existing `View Work` section untouched.

## Scope
- Update the home hero copy to position Haider as a digital solutions specialist.
- Replace the fictional experience timeline with real roles from the provided resume HTML.
- Replace placeholder contact details with real email, phone, and location.
- Wire the mounted resume section to the existing [resume.pdf](/Users/kinghaider/Desktop/Coding/projects/web-portfolio/src/assets/resume.pdf) asset.
- Fix the dormant `MarketingView.jsx` lint issue.

## Non-Goals
- No redesign of the active Pip-Boy layout.
- No changes to `View Work`, including its placeholder projects and links.
- No new backend, CMS, router, or project case-study system.

## Content Mapping
- Home hero uses the resume headline and role framing: Digital Solutions Specialist blending sales, marketing, and front-end web development.
- Experience uses the four real roles from Luminous Labs, Omnia / Media Prima Berhad, Digital Craft Solution, and SocialGrooves / Digitally Asia.
- Contact uses the real email, phone number, and Subang Jaya location from the resume HTML.
- Resume section becomes a truthful download/open surface for the existing PDF asset.

## Implementation Shape
- Extract the new profile and experience content into `src/content/*` instead of hardcoding more text inside `DevView.jsx`.
- Keep the current view state machine and mounted layout structure in `DevView.jsx`.
- Make only small presentational changes needed to fit the real content cleanly.

## Validation
- Run `npm run lint`.
- Run `npm run build`.
- Perform a quick manual check of hero, experience, contact, and resume views.
