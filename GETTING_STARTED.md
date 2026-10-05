# Getting started

## Local development

Use Node.js `>=22.12.0` for Astro 7.

```bash
npm ci
npm run dev
```

The site is built with Astro and outputs static HTML. Use `npm run preview` to inspect the production build locally.

## Before opening a content change

1. Edit the relevant Markdown or typed data record.
2. Run `npm test`.
3. Run `npm run check`.
4. Run `npm run build`.
5. Check the changed route at narrow mobile, tablet, and desktop widths.

## Publication synchronization

The scheduled GitHub Action runs weekly and can be dispatched manually. It reads ORCID works, normalizes provider metadata, and opens a proposal pull request when data changes.

The sync workflow is intentionally proposal-only. It does not overwrite research narratives, publication summaries, theme relationships, or display decisions.

## Responsive expectations

Every route must remain usable at 320px and 360px mobile widths, tablet widths, and desktop widths. Check keyboard focus, 200% zoom, reduced motion, contrast, touch target size, menu operation, and horizontal overflow before merging UI changes.
