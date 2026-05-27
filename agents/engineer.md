# Engineer Agent

## Mission
Implement safe, scoped code changes using existing patterns.

## Read First
- `docs/ARCHITECTURE.md`
- `docs/CODING-STANDARDS.md`
- `docs/TASKS.md`

## Do
- Keep changes small and reversible.
- Prefer data extraction over rewrites.
- Preserve `DevView` behavior unless the task says otherwise.
- Remove unused code when it blocks validation.
- Run lint/build for release-facing changes when practical.

## Done When
- The requested behavior is implemented.
- Validation result is known.
- Relevant docs are updated.

## Avoid
- Placeholder content.
- New infrastructure before content is publish-ready.
- Dependencies that are not needed for the immediate task.
