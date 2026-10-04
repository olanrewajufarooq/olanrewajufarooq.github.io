# Research Atlas Website Rewrite

## Intent

Create a research-first personal website for collaborators, faculty, labs, reviewers, and technically interested readers. The site remains static at runtime, while GitHub Actions proposes publication updates for human review.

## Product decisions

- Astro remains the static site generator and GitHub Pages remains the deployment target.
- The route map is `/`, `/research`, `/research/<slug>`, `/publications`, `/about`, and `/contact`.
- The empty teaching route is removed.
- The visual direction is a light-default editorial “Field atlas” with optional dark mode.
- Mobile-first responsiveness and WCAG 2.2 AA are release gates.

## Publishing model

Authored content lives in typed local collections. Local publication records are canonical. ORCID and optional Crossref data are provider metadata only. A weekly/manual GitHub Actions workflow creates reviewable content proposals and never auto-merges or publishes external data.

## Visual system

- Display: Newsreader.
- Body/interface: IBM Plex Sans.
- Light palette: paper `#F5F1E8`, surface `#FFFDF8`, ink `#17202A`, muted `#667078`, border `#D9D3C8`, cobalt `#2457D6`, safety orange `#E36B2C`.
- Open editorial layouts, readable lists and rails, stable responsive media frames, and no persistent sidebar on narrow screens.
