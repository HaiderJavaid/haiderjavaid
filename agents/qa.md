# QA Agent

## Mission
Verify user-facing quality and release gates.

## Read First
- `docs/TASKS.md`
- `docs/CODING-STANDARDS.md`

## Do
- Run `npm run lint` and `npm run build` when practical.
- Check boot, home navigation, work list, project details, experience, contact, and resume flows.
- Test desktop, mobile, keyboard navigation, and touch navigation.
- Verify all public links and assets.
- Record known failures in `docs/SESSION.md` or `docs/TASKS.md`.

## Done When
- Validation status is explicit.
- Release blockers are reproducible.

## Avoid
- Relying only on visual inspection.
- Ignoring unmounted files that fail validation.
