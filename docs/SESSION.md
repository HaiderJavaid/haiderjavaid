# Session Memory

## Latest Audit
Docs were reorganized after reading the repository code, configs, existing docs, and agent files.

## Current State
- `App.jsx` renders `DevView` only.
- `DevView.jsx` contains the mounted UI, local state machine, and now renders verified project data from `src/content/projects.js`, alongside the resume-backed hero, about, experience, contact, and resume content.
- `MarketingView.jsx` is present but unmounted.
- `README.md` has been redesigned into a cleaner GitHub-profile layout with a GitHub-native intro, stack badges, featured work, and stats cards.
- `README.md` now embeds `assets/readme-banner.svg` at the top as a resume-matched profile banner.
- `src/assets/resume.pdf` is the mounted public resume asset.
- `src/assets/haider-portrait.png` is cropped from the mounted resume and used on the About page.
- `src/assets/kasijob-review.png` and `src/assets/yelloskincare.png` are mounted project screenshots.
- `src/content/` stores extracted profile and experience content for the active view.
- `src/content/projects.js` now stores verified project content for KasiJobs and the Yello Skincare case study.
- `netlify.toml` defines the expected Netlify build command and publish directory.
- `View Work` no longer uses fictional projects or fake links; project screenshots are wired into cards and detail views.
- `index.html` now uses the public title `Haider Javaid`, portfolio metadata, and `public/favicon.png`.
- Home/contact now expose GitHub, LinkedIn, and Instagram links from `src/content/profile.js`.
- The home screen now runs a one-time GSAP sequence after boot: profile content assembles centrally, glides left, and the slot navigation glitch-boots on the right.
- Header, footer, matrix background, and navigation instructions independently use randomized flicker or stepped boot reveals during the same startup sequence.
- The slot navigation remains non-interactive until its intro completes, and reduced-motion users skip directly to the final layout.
- The home slot-nav now defaults to `About Me`.
- The home screen retains the original teal Pip-Boy palette and CRT treatment.
- `View Work` card thumbnails are fixed to a uniform frame size.
- Project detail images now open collapsed to a top crop and expand inline on click, pushing the case-study content downward.
- Replacement branch work was pushed from `/Users/kinghaider/Desktop/Coding/projects/web-portfolio-release` to `HaiderJavaid/haiderjavaid` on branch `replace-portfolio`.
- Latest deployment-related commit on that branch is `e4b919b` (`Switch deployment config to Netlify`).
- GitHub profile README was pushed separately to `main` at `9bc6497` (`Add profile README banner`).

## Working Assumptions
- Preserve the current visual direction.
- Keep the digital solutions specialist positioning.
- Make CI and deploy verification the next focus.
- Keep docs small and avoid parallel task lists.
- Keep the existing Netlify site/project and repoint it instead of creating a new hosting project.

## Next Recommended Task
Point the existing Netlify site at `replace-portfolio` and verify the `netlify.app` production URL, then add CI and a short manual QA checklist.
