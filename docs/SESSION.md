# Session Memory

## Latest Update — 2026-10-15
- Owner explicitly approved deployment on 2026-10-15. Code commit `3980dda` is live at `https://haiderjavaid.netlify.app/` on the existing `replace-portfolio` branch/site.
- Netlify deploy `6ad09dc38f5b8b573c5ef4ba` is ready. Live checks pass: new project order, 5 Replenish and 6 Hackbox screens, desktop/mobile viewer, keyboard navigation, zero page errors/overflow, complete metadata, exact 1200×630 PNG, and all 20 new screenshot files byte-matched.
- Release clone tracked files are clean after the documentation commit; the pre-existing job-lead note remains untracked. Local bootstrap repository is preserved.
- Release quota observed 3%→3% weekly used (below one rounded percentage point); five-hour usage unavailable.
- Release metadata now highlights Replenish Beauty and Hackbox, with the new `public/og-portfolio-2026-10.png` 1200×630 preview.
- Replenish Beauty is first (5 screens), Hackbox second (6); Dead Fit remains excluded until finished.
- Added verified descriptions, roles, features, stacks, production links, Game filter, and Hackbox mobile-play note.
- Added 20 optimized WebP captures (~0.8 MB total) across six projects. Counts: Replenish 5, Hackbox 6, Stonecode 4, Anonymail 3, BikeBaju 3, KasiJobs 4, Yello 1.
- `ProjectScreenshots.jsx` owns horizontal desktop/mobile rails and a native dialog with full-size images, thumbnails, previous/next, arrow keys, Escape, backdrop close, focus containment/restoration, and reduced-motion support.
- Replenish source: `/Users/kinghaider/Documents/Codex/2026-08-09/yeah-i`; verified project/handoff, package, and live public storefront. Its Codex chat “Migrate ShopeeGo to WooCommerce” provided migration context.
- Hackbox source: `/Users/kinghaider/Desktop/Coding/blackbox`; architecture, current handoff/package, live landing, and existing app QA captures (`access-fullapp-gsl-home`, `player-flow-probe-final`, `desktop-KALI-hackhub`, `open-circuit-KALI-progress`, `ux-KALI-hardware`). “Build OS-Aware Game Landing Page” confirmed the current name and mobile installation direction.
- Stonecode additions use existing local assessment/workspace QA captures; workspace explicitly labeled as a demo session. Other new screens are public-page captures from 2026-10-15 under `output/playwright/`.
- No private CRM/customer records were captured. Yello retains its original supplied image; no additional verified source media found.
- Functional browser checks passed all 26 images across seven projects, Game filtering, mobile rail navigation, thumbnail selection, arrow keys, Escape, and focus restoration; no page errors or mobile horizontal overflow. Desktop 1440×960 and mobile 390×844 screenshots recorded under `output/playwright/portfolio-*`.
- Mechanical design scan flagged six existing decorative terminal border classes in DevView; preserved per the project’s pinned visual identity. New gallery component had no findings.
- Final verification: `npm run lint` and `npm run build` pass. Focus containment, backdrop close, and reduced-motion viewer checks pass after focused fixes.
- Quota observed 1%→2% weekly used, rounded account-wide; five-hour usage unavailable.

## Previous Audit
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
- `src/content/projects.js` stores verified content for Replenish Beauty, Hackbox, Stonecode, Anonymail, BikeBaju, KasiJobs, and Yello Skincare, plus unified gallery filters.
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
- Stonecode follows the two newest projects and retains its WIP/private-beta case study.
- Project details use compact horizontal screenshot galleries; current media counts and source evidence are recorded in Latest Update above.
- Project identity appears above the screenshot. Overview and My Role use the original always-visible left-border blocks; Outcome, Key Features, and Tech Specs use a single-open accordion.
- Overview and My Role headings are white, bold, and more prominent.
- Header/footer system labels, battery, signal, breadcrumbs, and status text were restored; `SYS.INIT()` and work-stepper clutter remain removed from content.
- Home/About positioning now reads `Software & Digital Marketing Specialist`; the home shows three tags: AI Software, Digital Marketing, and Product Systems.
- Home copy now reflects the wider portfolio across learning, privacy, marketplaces, e-commerce, frontend delivery, and growth.
- Unified work ordering is Replenish Beauty, Hackbox, Stonecode, Anonymail, BikeBaju, KasiJobs, then Yello Skincare.
- Stonecode now links to the verified live preview at `https://stonecoded.netlify.app/` and uses the supplied landing-page screenshot in its expandable detail preview.
- Anonymail uses verified local product content and media from `/Users/kinghaider/Desktop/anonymail`; BikeBaju uses its live storefront, official logo, and a captured homepage preview.
- The home screen retains the original teal Pip-Boy palette and CRT treatment.
- Recent Work cards use one responsive image-card size with native vertical scroll snapping and center-band active-card detection.
- Project preview images have no grayscale, color-treatment, or grain overlay. Desktop and mobile use a horizontal snap carousel with partially visible neighboring screens.
- Selecting a project image opens a dimmed, App Store-style modal with a short scale-in transition, an explicit close control, backdrop close, and Escape-key support.
- Returning from a project detail view restores its project card to the center of the filtered listing. Detail content is ordered Key Features, Tech Stack, My Role, then Outcome; Key Features and Tech Stack begin expanded and can be independently toggled.
- Project details omit the redundant Overview block, retain My Role, and style Live Site as the primary filled action.
- Replacement branch work was pushed from `/Users/kinghaider/Desktop/Coding/projects/web-portfolio-release` to `HaiderJavaid/haiderjavaid` on branch `replace-portfolio`.
- The verified Netlify production URL is `https://haiderjavaid.netlify.app/`.
- Production was re-verified on 2026-08-24 after commit `6d1c379`: the unified gallery bundle, complete Open Graph/Twitter metadata, and 1200×630 preview image are live.
- Latest deployed portfolio code commit is `3980dda` (`Publish Replenish Beauty and Hackbox portfolio galleries`) on pushed branch `replace-portfolio`.
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
