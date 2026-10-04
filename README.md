# Farooq Olanrewaju — Research Atlas

A responsive, static academic website for Farooq Olanrewaju’s work in robotics, control, and autonomous systems.

## Quick start

Requires Node.js `>=22.12.0`.

```bash
npm ci
npm run dev
```

Useful checks:

```bash
npm test
npm run check
npm run build
```

## Content model

- `src/content/research/` contains authored research records in Markdown.
- `src/content/publications/` contains canonical publication records in Markdown frontmatter.
- `src/data/` contains supporting profile, education, project, and social metadata.
- `public/assets/` contains static media and the downloadable CV.

The repository is the source of truth for published content. Components render content; they do not own authored claims.

## Publication proposals

GitHub Actions checks the configured ORCID profile weekly and through manual dispatch. The workflow normalizes provider metadata, compares it with the local provider snapshot, and opens a pull request only when it detects a meaningful change.

Run the check locally with:

```bash
npm run sync:orcid
```

Provider proposals are not published automatically. Review the generated proposal, promote approved records into `src/content/publications/`, and preserve editorial summaries and research relationships manually.

See [CONTEXT.md](./CONTEXT.md) and [ADR-0001](./docs/adr/0001-static-publication-proposals.md) for the content vocabulary and publishing boundary.

## Site routes

- `/` — research introduction and current work
- `/research` — research atlas
- `/research/<slug>` — detailed research record
- `/publications` — publication record
- `/about` — profile and education
- `/contact` — collaboration and scholarly links

The site is static at runtime. Theme switching and other small interactions operate only on data bundled into the build.

## Deployment

Pushes to `main` build and deploy the static output to GitHub Pages through `.github/workflows/deploy.yml`.
