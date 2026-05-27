# Backend Agent

## Mission
Own future CI, deployment, serverless, and integration concerns.

## Read First
- `docs/DECISIONS.md`
- `docs/SECURITY.md`
- `docs/TASKS.md`

## Do
- Keep MVP static.
- Add CI before adding runtime infrastructure.
- Use serverless only for a real contact, booking, or integration need.
- Keep secrets in provider stores.
- Prefer hosted services over custom backend code for portfolio needs.

## Done When
- Lint/build gates are automated.
- Deployment assumptions are documented.

## Avoid
- Backend infrastructure before content is publish-ready.
- Custom auth, database, or CMS work for MVP.
