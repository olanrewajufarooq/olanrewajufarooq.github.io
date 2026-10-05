# Project Context

## Canonical vocabulary

- **Research theme**: a sustained area of inquiry that groups related work, projects, and publications.
- **Research record**: the authored public explanation of a research theme, including its question, context, methods, status, and evidence.
- **Project**: a concrete implementation, experiment, thesis, or engineering effort that belongs to a research theme.
- **Publication record**: the locally curated public representation of a scholarly work, including its citation, links, status, and relationships to research themes and projects.
- **Provider metadata**: factual metadata observed from an external source such as ORCID or Crossref.
- **Editorial metadata**: locally authored decisions about summaries, themes, display priority, project relationships, and publication language.
- **Content proposal**: a reviewable change suggested by an external provider or synchronization process; it is not public until promoted into the canonical content.
- **Index page**: a compact navigation surface that helps a reader compare and choose among research themes or publication records.
- **Reading page**: a research detail page whose primary purpose is sustained reading of a single research record and its evidence.
- **Profile/action page**: an About or Contact page whose primary purpose is establishing context or enabling a next action.
- **Evidence-led content**: authored explanations, methods, contributions, applications, publications, and links that substantiate the research narrative.

## Boundaries

The repository is the source of truth for everything published by the site. External providers can suggest publication facts, but they do not own the site's editorial narrative or publish directly.

The website is a static research profile. Runtime interactions may operate on build-time data, but published content is not fetched from an API in the browser.

The presentation model follows the content's purpose: index pages are compact and scannable, reading pages are calm and text-led, and profile/action pages foreground context and next steps. Display typography should support the evidence-led content rather than compete with it.
