# Shared

Shared utilities, types, constants, and helpers used across the site.

## Structure

```
shared/
├── constants/          # Shared constants
├── content/           # Content utilities and helpers
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## Modules

### constants/
- `site.ts`: Site configuration (SITE object with url, name, description)
- `seo.ts`: SEO configuration
- `theme.ts`: Theme-related constants
- `navigation.ts`: Navigation constants
- `publication-status.ts`: Publication status enum

### content/
- `metadata.ts`: SEO metadata building utilities
- `publications.ts`: Publication-related content helpers

### types/
- `site.ts`: Site and Profile types
- `education.ts`: Education degree types
- `publication.ts`: Publication and Author types
- `certificate.ts`: Certificate type
- `award.ts`: Award type
- `teaching.ts`: Teaching experience type
- `navigation.ts`: Navigation types
- `social.ts`: Social link types
- `research.ts`: Research-related types
- `theme.ts`: Theme system types

### utils/
- `seo.ts`: SEO utilities (canonical URLs, structured data, sitemaps)
- Other utility functions organized by purpose

## Usage Examples

### Metadata
```astro
import { buildMetadata } from '../shared/content/metadata';

const meta = buildMetadata({
  title: 'My Page',
  description: 'Page description',
  canonical: '/my-page'
});
```

### Types
```typescript
import type { Publication, Degree } from '../shared/types';
```

### Constants
```typescript
import { SITE } from '../shared/constants/site';
```

### SEO Utils
```typescript
import { getCanonicalUrl, createPersonStructuredData } from '../shared/utils/seo';
```
