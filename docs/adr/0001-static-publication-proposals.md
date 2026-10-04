# ADR-0001: Use static publication proposals from provider metadata

## Status

Accepted

## Context

The site must remain fully static while publication information may change in ORCID or DOI registries. Provider data is useful for detecting new or changed works, but provider metadata does not contain the site's authored research summaries, theme relationships, or display decisions.

## Decision

GitHub Actions will periodically fetch ORCID works and optionally enrich DOI-bearing records through Crossref. The workflow will normalize and validate provider metadata, compare it with local canonical publication records, and open a pull request containing proposals only when meaningful changes exist.

The workflow will not auto-merge, publish directly, or overwrite editorial metadata. A maintainer promotes an approved proposal into the canonical publication collection.

## Consequences

- Published pages remain build-time static and reviewable.
- External API changes require human review before publication.
- The repository carries a small amount of synchronization metadata and proposal output.
- A provider outage does not block normal site deployment.
