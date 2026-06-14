# Home Intro Animation Design

## Goal
Add a one-time post-boot home animation that stages the profile content in the center, moves it into its existing left-column position, then starts the slot navigation with a terminal-style glitch reveal.

## Sequence
1. The boot screen completes and the home shell mounts.
2. Header, footer, and matrix background remain available as environmental context.
3. The profile group starts centered across the home content area while the slot navigation is hidden.
4. Name, role, system summary, tags, and social links reveal top-to-bottom using the original intro flicker timing.
5. The centered composition holds for 0.6 seconds.
6. The complete profile group smoothly changes from centered alignment into its existing left-column layout.
7. The navigation appears on the right through horizontal clipping, brief x-axis displacement, contrast flashes, and a final teal lock-on pulse.
8. Navigation input becomes available when the timeline completes.

## Behavior
- The sequence runs once per mounted app session, immediately after boot.
- Returning to the home view does not replay it.
- Existing layout, typography, content, colors, and navigation behavior remain unchanged after the animation.
- Desktop uses the center-to-left movement.
- Mobile avoids forced sideways movement and uses a shorter vertical settle before the nav glitch reveal.
- `prefers-reduced-motion: reduce` skips the cinematic sequence and shows the final interactive layout immediately.

## Implementation
- Add GSAP as the animation dependency.
- Keep timeline ownership inside `DevView`.
- Use refs for the profile group, profile children, and navigation group.
- Use `gsap.context()` for scoped setup and cleanup.
- Disable nav pointer events during the intro and restore them when complete.
- Remove the overlapping CSS intro flicker from home elements while retaining existing transition effects elsewhere.

## Verification
- Run lint and production build.
- Confirm the intro runs once after boot.
- Confirm returning home does not replay it.
- Confirm keyboard, wheel, click, and touch navigation work after the timeline.
- Confirm reduced-motion users see the final layout without delayed interaction.
