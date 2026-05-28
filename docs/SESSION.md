# Session Memory

## Latest Audit
Docs were reorganized after reading the repository code, configs, existing docs, and agent files.

## Current State
- `App.jsx` renders `DevView` only.
- `DevView.jsx` contains the mounted UI, local state machine, and now renders verified project data from `src/content/projects.js`, alongside the resume-backed hero, about, experience, contact, and resume content.
- `MarketingView.jsx` is present but unmounted.
- `README.md` has been converted from a repo setup README into a GitHub-profile-facing terminal/Pip-Boy profile README using verified resume-backed content.
- `src/assets/resume.pdf` is the mounted public resume asset.
- `src/content/` stores extracted profile and experience content for the active view.
- `src/content/projects.js` now stores verified project content for KasiJobs and the Yello Skincare case study.
- `netlify.toml` defines the expected Netlify build command and publish directory.
- `View Work` no longer uses fictional projects or fake links; screenshots/assets are still pending.
- Current session changed only `README.md` and project memory docs; no app runtime files changed.
- Replacement branch work was pushed from `/Users/kinghaider/Desktop/Coding/projects/web-portfolio-release` to `HaiderJavaid/haiderjavaid` on branch `replace-portfolio`.
- Latest deployment-related commit on that branch is `e4b919b` (`Switch deployment config to Netlify`).

## Working Assumptions
- Preserve the current visual direction.
- Keep the digital solutions specialist positioning.
- Make metadata, CI, and deploy verification the next focus.
- Keep docs small and avoid parallel task lists.
- Keep the existing Netlify site/project and repoint it instead of creating a new hosting project.

## Next Recommended Task
Point the existing Netlify site at `replace-portfolio` and verify the `netlify.app` production URL, then update metadata, add CI, and replace image placeholders with real project assets.
