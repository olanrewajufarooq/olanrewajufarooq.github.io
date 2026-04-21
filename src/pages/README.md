# Pages

Routed pages that become URLs on the website.

## File Structure

Each `.astro` file in this directory automatically becomes a route:

- `index.astro` → `/`
- `about.astro` → `/about`
- `publications.astro` → `/publications`
- `teaching.astro` → `/teaching`
- `research.astro` → `/research`
- `404.astro` → Custom 404 page

## Page Anatomy

```astro
---
import ContentLayout from '../layouts/ContentLayout.astro';
import { buildMetadata } from '../shared/content/metadata';

// Build metadata for SEO
const meta = buildMetadata({
  title: 'Page Title',
  description: 'Page description',
  canonical: '/path',
});
---

<ContentLayout {...meta}>
  <!-- Page content -->
</ContentLayout>
```

## Adding New Pages

1. Create `.astro` file in `src/pages/`
2. File name becomes the route (use kebab-case)
3. Import layout and components
4. Add metadata with buildMetadata()
5. Build the page content

## Special Pages

- **404.astro**: Custom 404 error page
- **[dynamic].astro**: Dynamic routes (e.g., research/[slug].astro)

## Best Practices

- Always include metadata
- Use layouts for consistent structure
- Compose pages from smaller components
- Keep page files focused on layout/composition
- Move business logic to components or utils
