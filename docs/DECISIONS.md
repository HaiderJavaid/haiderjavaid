# Decisions

## Accepted
- Use React + Vite + Tailwind.
- Keep `DevView` as the active/default experience.
- Preserve the Pip-Boy/terminal visual identity.
- Keep MVP static.
- Use local React state until routing or shared state pressure appears.
- Avoid new dependencies unless they solve an immediate problem.
- Treat placeholder public claims as blockers, not harmless demo content.
- Position the public portfolio around a software and digital marketing specialist profile spanning AI products, web applications, growth systems, and commercial strategy.
- Make `View Recent Work` the default home selection and separate Software projects from Marketing projects before showing project cards.
- Preserve decorative header/footer system labels as part of the retro identity; remove jargon only from portfolio content.
- Put project identity above one expandable image; keep Overview and My Role visible, with Outcome, Key Features, and Tech Specs in a single-open accordion.
- Use app logos in project listings, combine each title and category with an em dash, omit listing status, and use product/role tags instead of framework tags.
- Keep logo outline frames while preserving original logo colors; listing title and short suffix share one white font treatment and never wrap.
- Order Software projects as Stonecode, Anonymail, BikeBaju, then KasiJobs.
- Use Netlify as the intended production host for the replacement portfolio build.

## Pending
- Whether `MarketingView.jsx` should be removed, routed later, or kept as a concept.
- CI provider and final production branch strategy inside the existing Netlify site.

## Revisit Later
- Router adoption if project case studies need direct URLs.
- Contact/booking endpoint after static content is publish-ready.
- CMS only if manual content updates become a real bottleneck.
