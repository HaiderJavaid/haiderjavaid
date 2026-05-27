# Security And Trust

## Current Surface
Static client-side portfolio. No backend, auth, database, cookies, forms, or secrets are required for MVP.

## Main Risks
- Publishing fake or unverifiable work claims.
- Broken, generic, or malicious external links.
- Missing or unintended resume asset.
- Accidental secrets if future integrations are added.
- Dependency vulnerabilities.
- Resume/contact data exposing information that was not meant to be public.

## Rules
- Verify every public claim and URL before release.
- Do not commit API keys, tokens, private PDFs, or credentials.
- Use deploy/CI secret stores for any future credentials.
- Validate and sanitize input if a contact endpoint is ever added.
- Prefer provider-managed auth for any future admin/CMS flow.

## Release Checklist
- [ ] No placeholder project or experience claims.
- [ ] No `example.com` links.
- [ ] Resume file exists and is intentionally public.
- [ ] Contact details are intentional.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Dependency audit has no critical unresolved issues.
