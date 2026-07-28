# Session Memory

## Latest Audit
Project memory was refreshed on 2026-07-28 after the latest portfolio UI pass.

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
- `src/content/projects.js` stores verified project content for Stonecode, Anonymail, BikeBaju, KasiJobs, and the Yello Skincare case study, grouped into Software and Marketing directories.
- `netlify.toml` defines the expected Netlify build command and publish directory.
- `View Work` no longer uses fictional projects or fake links; project screenshots are wired into cards and detail views.
- `index.html` now uses the public title `Haider Javaid`, portfolio metadata, and `public/favicon.png`.
- Home/contact now expose GitHub, LinkedIn, and Instagram links from `src/content/profile.js`.
- The home screen now runs a one-time GSAP sequence after boot: profile content assembles centrally, glides left, and the slot navigation glitch-boots on the right.
- Header, footer, matrix background, and navigation instructions independently use randomized flicker or stepped boot reveals during the same startup sequence.
- The slot navigation remains non-interactive until its intro completes, and reduced-motion users skip directly to the final layout.
- The home slot-nav now defaults to `View Recent Work`.
- `View Recent Work` opens with a two-step Software/Marketing chooser before showing filtered project cards.
- Stonecode is the first Software project and is labeled as the latest WIP/private beta with a real product screenshot.
- Stonecode uses one expandable product screenshot; the discarded gallery assets were removed.
- Project identity appears above the screenshot. Overview and My Role use the original always-visible left-border blocks; Outcome, Key Features, and Tech Specs use a single-open accordion.
- Overview and My Role headings are white, bold, and more prominent.
- Header/footer system labels, battery, signal, breadcrumbs, and status text were restored; `SYS.INIT()` and work-stepper clutter remain removed from content.
- Work-type cards now include a compact `Click to view` indicator.
- Home/About positioning now reads `Software & Digital Marketing Specialist`; the home shows three tags: AI Software, Digital Marketing, and Product Systems.
- Home copy now reflects the wider portfolio across learning, privacy, marketplaces, e-commerce, frontend delivery, and growth.
- Software listings are ordered Stonecode, Anonymail, BikeBaju, then KasiJobs. Cards use product logos, combined title/category headings, and three product/role tags without status labels.
- Anonymail uses verified local product content and media from `/Users/kinghaider/Desktop/anonymail`; BikeBaju uses its live storefront, official logo, and a captured homepage preview.
- The home screen retains the original teal Pip-Boy palette and CRT treatment.
- `View Work` card thumbnails are fixed to a uniform frame size.
- Project detail images now open collapsed to a top crop and expand inline on click, pushing the case-study content downward.
- Replacement branch work was pushed from `/Users/kinghaider/Desktop/Coding/projects/web-portfolio-release` to `HaiderJavaid/haiderjavaid` on branch `replace-portfolio`.
- Latest portfolio code commit is `8ca674f` (`Add Stonecode portfolio work flow`) on pushed branch `replace-portfolio`.
- Remote branch head is `5ec2d8e` (`Update handoff after portfolio push`). The Anonymail, BikeBaju, logo-listing, and broad home-copy update remains local and unpushed.
- Wrap-up verification passed with `npm run lint` and `npm run build` on 2026-07-28.
- GitHub profile README was pushed separately to `main` at `9bc6497` (`Add profile README banner`).

## Working Assumptions
- Preserve the current visual direction.
- Keep the digital solutions specialist positioning.
- Make CI and deploy verification the next focus.
- Keep docs small and avoid parallel task lists.
- Keep the existing Netlify site/project and repoint it instead of creating a new hosting project.

## Next Recommended Task
Point the existing Netlify site at `replace-portfolio` and verify the `netlify.app` production URL, then add CI and a short manual QA checklist.
