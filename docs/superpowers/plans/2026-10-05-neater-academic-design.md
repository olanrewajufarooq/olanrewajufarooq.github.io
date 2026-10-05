# Neater academic research site redesign plan

## Status

Approved for implementation after visual audit and design grilling.

## Intent

Make the static research profile calmer, denser, and more useful to academic readers. The redesign should preserve the warm editorial identity while giving research evidence, publication metadata, and practical next steps visual priority.

## Audit evidence

The audit captured all 12 rendered routes as full-page desktop and mobile screenshots:

- `/`
- `/research/`
- all seven `/research/<slug>/` pages
- `/publications/`
- `/about/`
- `/contact/`

Representative captures are stored under `/tmp/personal-website-audit-desktop-*.png` and `/tmp/personal-website-audit-mobile-*.png`.

Observed problems:

1. Research detail titles render twice, both at display scale.
2. Long titles wrap into four or five large lines on desktop and mobile.
3. The same oversized hero treatment is repeated across unrelated page purposes.
4. Missing images reserve large empty blocks; some records expose broken image placeholders.
5. Public placeholder copy advertises future component work.
6. Large vertical gaps push actual research content below the fold.
7. Mobile detail pages become long, compressed reading columns after an oversized title treatment.

## Design model

### 1. Compact index pages

Applies to `/research/` and `/publications/`.

- Use a small page label and moderate title.
- Keep the introductory copy short.
- Start the record list earlier.
- Prefer compact cards/rows with stable metadata placement.
- Render images only when a real image exists.
- Let text-only records use the same visual weight as image-backed records.

### 2. Reading pages

Applies to `/research/<slug>/`.

- Render the research title once.
- Place the summary and metadata directly after the title.
- Use a readable text measure for Overview, Contributions, Methodology, and Applications.
- Keep metadata available without competing with the prose.
- Render Related Publications, Projects, and Collaborators only when populated.
- Treat the research question, methods, and evidence as the visual hierarchy.

### 3. Profile/action pages

Applies to `/about/` and `/contact/`.

- Reduce hero height and heading scale.
- Make the primary action visible earlier.
- Use compact, clearly labelled content blocks.
- Keep biography, education, email, and external profiles easy to scan.

### 4. Homepage

Applies to `/`.

- Reduce the hero's vertical footprint.
- Keep the current voice, but constrain the display headline to a shorter readable measure.
- Present research themes as a concise overview rather than a full catalogue.
- Show one lead image at most; use text-led records for the remaining themes.
- Keep current work and the publication preview compact.

## Responsive targets

- Desktop: display headings should establish hierarchy without occupying most of the first viewport; the first meaningful record group should appear sooner.
- Tablet: preserve two-column comparison where it remains readable, but avoid forcing long titles into narrow display columns.
- Mobile: use a single reading column, moderate heading sizes, no horizontal overflow, and no image placeholder space.
- All widths: body copy should remain comfortable to read, metadata should remain discoverable, and content should not be hidden behind decorative spacing.

## Implementation sequence

1. Remove duplicate research detail title rendering.
2. Remove empty/placeholder related sections from public output.
3. Make image rendering conditional and remove broken/empty image slots.
4. Introduce page-family typography and spacing tokens.
5. Rework research index cards and publication rows for compact scanning.
6. Rebalance homepage, About, and Contact vertical rhythm.
7. Verify every route at desktop, tablet, and mobile widths.
8. Re-run static build, type checks, tests, audit, and screenshot review.

## Acceptance criteria

- Every route has one clear primary heading.
- No research detail page repeats its title.
- No public page contains auto-population placeholder text.
- No missing image produces a broken icon or a reserved empty image block.
- The first meaningful content group appears earlier on homepage, index, About, Contact, and Publications pages.
- Research detail pages prioritize readable evidence over decorative display type.
- All routes remain horizontally contained at 390px, 768px, and 1440px viewport widths.
- The static build and existing content synchronization boundaries remain unchanged.
