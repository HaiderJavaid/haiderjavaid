# Session Memory

## Latest Audit
Docs were reorganized after reading the repository code, configs, existing docs, and agent files.

## Current State
- `App.jsx` renders `DevView` only.
- `DevView.jsx` contains the mounted UI, local state machine, placeholder project data, and now resume-backed hero, about, experience, contact, and resume content, including an about-image placeholder.
- `MarketingView.jsx` is present but unmounted.
- `src/assets/resume.pdf` is the mounted public resume asset.
- `src/content/` stores extracted profile and experience content for the active view.
- Placeholder `View Work` content remains the largest truth gap.

## Working Assumptions
- Preserve the current visual direction.
- Keep the digital solutions specialist positioning.
- Make project proof and release safety the next focus.
- Keep docs small and avoid parallel task lists.

## Next Recommended Task
Replace or hide the placeholder `View Work` projects with verified case studies, then update metadata and add CI.
