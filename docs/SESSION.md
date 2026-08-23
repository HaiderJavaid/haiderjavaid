# Session Memory

## Latest Audit
Project memory was refreshed on 2026-08-24 after the unified Recent Work gallery pass.

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
- `src/content/projects.js` stores verified project content for Stonecode, Anonymail, BikeBaju, KasiJobs, and the Yello Skincare case study, plus the filters used by the unified gallery.
- `netlify.toml` defines the expected Netlify build command and publish directory.
- `View Work` no longer uses fictional projects or fake links; project screenshots are wired into cards and detail views.
- `index.html` now uses the public title `Haider Javaid`, canonical production URL, complete Open Graph/Twitter large-card metadata, and `public/favicon.png`.
- `public/og-image.png` is the 1200×630 portfolio share card used by WhatsApp, X, Threads, and other Open Graph clients.
- Home/contact now expose GitHub, LinkedIn, and Instagram links from `src/content/profile.js`.
- The home screen now runs a one-time GSAP sequence after boot: profile content assembles centrally, glides left, and the slot navigation glitch-boots on the right.
- Header, footer, matrix background, and navigation instructions independently use randomized flicker or stepped boot reveals during the same startup sequence.
- The slot navigation remains non-interactive until its intro completes, and reduced-motion users skip directly to the final layout.
- The home slot-nav now defaults to `View Recent Work`.
- `View Recent Work` opens directly into one scroll-snap project stack with filters for the project types that exist: AI App, Web App, Chrome Extension, E-Commerce, Marketplace, and Marketing System.
- Project filters use an infinite horizontal slot carousel: the selected filter stays centered while neighboring filters fade and blur.
- Filter changes use a short glitch mask confined to the project-card viewport. The surrounding Pip-Boy shell remains stable.
- Wheel input is locked to one project per gesture; snap spacers keep the active project mathematically centered at every viewport height.
- The active project card is centered and full-strength; its adjacent cards stay scaled down and faded. Cards use verified screenshots with project text overlaid inside the image.
- Stonecode is the first Software project and is labeled as the latest WIP/private beta with a real product screenshot.
- Stonecode uses one expandable product screenshot; the discarded gallery assets were removed.
- Project identity appears above the screenshot. Overview and My Role use the original always-visible left-border blocks; Outcome, Key Features, and Tech Specs use a single-open accordion.
- Overview and My Role headings are white, bold, and more prominent.
- Header/footer system labels, battery, signal, breadcrumbs, and status text were restored; `SYS.INIT()` and work-stepper clutter remain removed from content.
- Home/About positioning now reads `Software & Digital Marketing Specialist`; the home shows three tags: AI Software, Digital Marketing, and Product Systems.
- Home copy now reflects the wider portfolio across learning, privacy, marketplaces, e-commerce, frontend delivery, and growth.
- Unified work ordering is Stonecode, Anonymail, BikeBaju, KasiJobs, then Yello Skincare.
- Stonecode now links to the verified live preview at `https://stonecoded.netlify.app/` and uses the supplied landing-page screenshot in its expandable detail preview.
- Anonymail uses verified local product content and media from `/Users/kinghaider/Desktop/anonymail`; BikeBaju uses its live storefront, official logo, and a captured homepage preview.
- The home screen retains the original teal Pip-Boy palette and CRT treatment.
- Recent Work cards use one responsive image-card size with native vertical scroll snapping and center-band active-card detection.
- Project detail images now open collapsed to a top crop and expand inline on click, pushing the case-study content downward.
- Project details omit the redundant Overview block, retain My Role, and style Live Site as the primary filled action.
- Replacement branch work was pushed from `/Users/kinghaider/Desktop/Coding/projects/web-portfolio-release` to `HaiderJavaid/haiderjavaid` on branch `replace-portfolio`.
- The verified Netlify production URL is `https://haiderjavaid.netlify.app/`.
- Production was re-verified on 2026-08-24 after commit `6d1c379`: the unified gallery bundle, complete Open Graph/Twitter metadata, and 1200×630 preview image are live.
- Latest portfolio code commit is `e48c364` (`Add Stonecode live preview`) on pushed branch `replace-portfolio`.
- Wrap-up verification passed with `npm run lint` and `npm run build` on 2026-07-28.
- GitHub profile README was pushed separately to `main` at `9bc6497` (`Add profile README banner`).

## Working Assumptions
- Preserve the current visual direction.
- Keep the digital solutions specialist positioning.
- Make CI and deploy verification the next focus.
- Keep docs small and avoid parallel task lists.
- Keep the existing Netlify site/project and repoint it instead of creating a new hosting project.

## Next Recommended Task
Add CI and a short manual QA checklist.
