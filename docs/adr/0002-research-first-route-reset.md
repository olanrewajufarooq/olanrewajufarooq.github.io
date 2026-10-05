# ADR-0002: Make the rewrite research-first and reset the route map

## Status

Accepted

## Context

The existing site is organized around a persistent sidebar and several broad sections, including an empty teaching page. The primary audience is research collaborators, faculty, labs, reviewers, and technically interested readers. The rewrite must prioritize responsive reading and a clear research narrative.

## Decision

The new public route map is `/`, `/research`, `/research/<slug>`, `/publications`, `/about`, and `/contact`, with the CV remaining directly downloadable. The empty teaching route is removed. The site uses a compact responsive header and menu rather than a persistent sidebar.

## Consequences

- The information architecture is simpler and research-led.
- Existing routes are intentionally not preserved by redirects.
- Deep research records become the primary unit of navigation and sharing.
- Responsive behavior is designed into the layout rather than added as a later adaptation.
