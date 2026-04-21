# Farooq Olanrewaju - Academic Portfolio

A modern, type-safe academic portfolio website built with Astro, showcasing research, publications, teaching, and professional background.

## Quick Start

### Prerequisites
- Node.js 18+ (verify with `node --version`)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then visit `http://localhost:3000`

### Building

```bash
npm run build
```

### Type Checking

```bash
npx astro check
```

## Project Structure

```
src/
├── layouts/          # Page layouts
│  ├── BaseLayout.astro       # Master HTML boilerplate + CSS imports
│  └── ContentLayout.astro    # Content wrapper with sidebar
├── pages/            # Route files
│  ├── index.astro            # Homepage
│  ├── about.astro            # About/Education page
│  ├── publications.astro     # Publications list
│  ├── research/              # Research pages
│  │  ├── index.astro         # Research overview
│  │  └── [slug].astro        # Individual research theme
│  ├── teaching.astro         # Teaching activities
│  └── 404.astro              # Not found page
├── features/         # Feature modules (organized by page)
│  ├── home/          # Homepage sections & styles
│  ├── about/         # About page components & styles
│  ├── research/      # Research components & styles
│  ├── publications/  # Publications components & styles
│  └── teaching/      # Teaching components & styles
├── components/       # Reusable components
│  ├── layout/        # Layout components (Sidebar, Footer, etc)
│  └── ui/            # UI components (Button, Badge, etc)
├── shared/           # Shared utilities
│  ├── types/         # TypeScript types
│  ├── constants/     # Constants
│  ├── content/       # Data helpers
│  └── utils/         # Helper functions
├── styles/           # Global CSS
│  ├── tokens.css           # Design tokens (colors, spacing)
│  ├── theme.css            # Light/dark theme
│  ├── typography.css       # Font styles
│  ├── globals.css          # Global resets
│  ├── utilities.css        # Utility classes
│  └── shell.css            # Layout shell + mobile drawer
└── data/             # JSON data files
   ├── site/          # Site config
   ├── about/         # Education, certificates, awards
   ├── publications/  # Publication list
   ├── research/      # Research themes, projects
   └── teaching/      # Teaching activities

content/
└── research/         # Markdown files for research detail pages
```

## Key Technologies

- **Astro** - Static site generation
- **React** - Interactive islands (search, filters, theme toggle)
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **Markdown** - Research content

## Data Structure

### Types

All data is validated against TypeScript interfaces in `src/shared/types/`:

- `site.ts` - Profile, navigation, social
- `education.ts` - Degrees (single/joint), thesis, advisors
- `publication.ts` - Publications with author lists
- `research.ts` - Research themes, collaborators
- And more...

### Data Files

JSON files in `src/data/` drive the site content:

- `site/profile.json` - Name, title, institution, photo
- `about/education.json` - Degrees and thesis info
- `publications/publications.json` - All publications
- `research/themes.json` - Research theme metadata
- etc.

**Always update data, never hardcode content in components.**

## Component Conventions

### Astro Components

Use for static, SSR-able content:

```astro
---
import SectionHeading from '../ui/SectionHeading.astro';
import styles from '../styles/feature.module.css';
---

<section class={styles.section}>
  <SectionHeading eyebrow="Label" title="Section Title" />
  <!-- content -->
</section>
```

### React Components

Use only for interactive features (search, filters, theme toggle):

```tsx
export default function SearchBox() {
  const [query, setQuery] = useState('');
  // interactive logic
}
```

**Must add `client:load` directive when including in Astro pages.**

## Styling

### Global Styles

Applied in `BaseLayout.astro` in order:

1. `tokens.css` - CSS variables
2. `theme.css` - Light/dark mode
3. `typography.css` - Font styles
4. `globals.css` - Resets
5. `utilities.css` - Component classes + utility helpers
6. `shell.css` - Layout + mobile drawer

### Module Styles

Feature-specific CSS in `src/features/*/styles/*.module.css`:

```css
.section {
  padding: var(--space-7) 0;
}

.item {
  background: var(--color-surface);
}
```

Import and use in components:

```astro
import styles from '../styles/feature.module.css';
<div class={styles.section}>
```

### CSS Variables (Tokens)

From `src/styles/tokens.css`:

**Colors:**
- `--color-bg` - Background
- `--color-surface` - Card background
- `--color-text` - Text
- `--color-text-muted` - Muted text
- `--color-border` - Borders
- `--color-accent` - Primary color

**Spacing:** `--space-1` through `--space-8`

**Radius:** `--radius-sm`, `--radius-md`, `--radius-lg`

**Transitions:** `--transition-fast`, `--transition-base`

## Metadata & SEO

Each page uses `buildMetadata()` from `src/shared/content/metadata.ts`:

```astro
import { buildMetadata } from '../shared/content/metadata';

const meta = buildMetadata({
  title: 'Page Title',
  description: 'Page description',
  path: '/about',
  image: '/custom-og-image.jpg'
});
```

This generates:
- `<title>`
- `<meta name="description">`
- `<link rel="canonical">`
- Open Graph tags
- Twitter Card tags

## Deployment

### GitHub Pages

The site deploys automatically on push via GitHub Actions.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full setup.

Key points:
- Static output
- Repository: `olanrewajufarooq.github.io`
- Build output: `dist/`
- Workflow: `.github/workflows/deploy.yml`

### Local Testing Before Deploy

```bash
npm run build
npx astro check  # verify no type errors
```

Then test the `dist/` folder in a local server.

## Development Workflow

### Adding a New Page

1. Create `src/pages/newpage.astro`
2. Import layouts and components
3. Use `buildMetadata()` for SEO
4. Pass `activePath="/newpage"` to `ContentLayout`

### Adding a New Feature Section

1. Create folder under `src/features/featurename/`
2. Add components in `components/` subfolder
3. Add styles in `styles/featurename.module.css`
4. Add data to `src/data/` if needed

### Updating Data

1. Edit JSON files in `src/data/`
2. Verify against TypeScript types in `src/shared/types/`
3. Components will automatically reflect changes on rebuild

## Common Tasks

### Update Profile Information

Edit `src/data/site/profile.json`:

```json
{
  "name": "Your Name",
  "title": "PhD Student",
  "institution": "Your University",
  "department": "Your Department"
}
```

### Add a Publication

Add to `src/data/publications/publications.json`:

```json
{
  "id": "unique-id",
  "title": "Paper Title",
  "authors": [
    { "name": "You", "isMe": true },
    { "name": "Coauthor", "isMe": false }
  ],
  "venue": "Conference/Journal",
  "year": 2024,
  "status": "published",
  "publisherUrl": "https://..."
}
```

### Add a Research Theme

1. Add to `src/data/research/themes.json`
2. Create markdown file at `src/content/research/slug-name.md`
3. Add cover image to `public/assets/images/research/slug-name/`

### Manage Certificates

Certificates are organized by provider in `src/data/about/certificates.json`. Edit provider sections or add new ones as needed.

## Accessibility

The site includes:

- Semantic HTML
- ARIA labels on interactive components
- Keyboard navigation (Tab, Escape)
- Skip-to-content link
- Theme toggle accessible button
- Reduced motion support

See [CONTRIBUTING.md](./CONTRIBUTING.md) for accessibility guidelines.

## Troubleshooting

### Build Fails with Type Errors

Run: `npx astro check`

Check for:
- Missing required fields in data files
- Wrong type names in frontmatter
- Prop mismatches in components

### Styles Not Applying

Ensure:
- CSS file is imported in component
- Class name uses module syntax: `class={styles.className}`
- CSS variables are valid (from `tokens.css`)

### Mobile Drawer Not Working

Check:
- `MobileDrawer.tsx` has `client:load` directive
- CSS in `src/styles/shell.css` for `.mobile-drawer*` classes
- Navigation data in `src/data/site/navigation.json`

## Performance

- Static site generation (no runtime overhead)
- CSS modules for scoped styling
- Lazy loading for images
- Minimal JavaScript (React only where needed)
- Automatic sitemap generation

## License

See LICENSE file for details.

## Support

For issues or questions, check the [CONTRIBUTING.md](./CONTRIBUTING.md) guide.
