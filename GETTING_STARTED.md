# Getting Started Guide

Complete guide to the newly implemented personal website components and features.

## Quick Start

### Installation & Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Building for Production

```bash
# Build static site
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages (automatic via GitHub Actions)
git push origin main
```

## 📖 Understanding the Project Structure

### Core Directories

**`src/components/`**
- Reusable UI components used across the site
- Layout components for page structure
- MobileDrawer.tsx for responsive mobile navigation

**`src/features/`**
- Domain-specific modules (about, publications, teaching, etc.)
- Each feature has `components/` and `styles/` subdirectories
- Self-contained with own data and styling

**`src/pages/`**
- Auto-routed pages (each .astro file becomes a URL)
- Page-level composition and layout
- Meta data and SEO configuration

**`src/shared/`**
- Shared across all components
- Constants (site configuration)
- Types (TypeScript definitions)
- Utils (helper functions, SEO tools)
- Content (metadata building, data helpers)

**`src/data/`**
- JSON data files for all content
- Organized by feature
- Imported directly into components

**`src/styles/`**
- Global styles and design tokens
- Theme configuration
- CSS modules for features

## 🎨 Adding Content

### Add a Publication

1. Edit `src/data/publications/publications.json`
2. Add entry with required fields:
   ```json
   {
     "id": "unique-id",
     "title": "Paper Title",
     "authors": "Author Name, et al.",
     "venue": "Conference/Journal",
     "year": 2024,
     "status": "published",
     "url": "https://...",
     "description": "Optional description"
   }
   ```
3. Status values: `"published"`, `"accepted"`, `"review"`
4. Rebuild and verify

### Add Education Entry

1. Edit `src/data/about/education.json`
2. Add degree object with all fields
3. Optional thesis fields: `thesisTitle`, `thesisAdvisor`, `thesisLab`
4. Optional: `logo` field for institution logos
5. Rebuild to see changes

### Add Teaching Experience

1. Edit `src/data/teaching/teaching.json`
2. Add entry with `title`, `institution`, `role`, `year`
3. Optional: `description`, `url`
4. Currently displays empty state if no entries

### Add Awards

1. Edit `src/data/about/awards.json`
2. Add award object with `name`, `organization`, `year`
3. Optional: `description`, `url`

### Add Certificates

1. Edit `src/data/about/certificates.json`
2. Add certificate object with `name`, `provider`
3. Optional: `issueDate`, `credentialUrl`, `icon`

## 🔧 Customization

### Update Site Configuration

Edit `src/shared/constants/site.ts`:
- `name` - Site owner name
- `title` - Site title
- `url` - Site URL (important for canonical URLs)
- `description` - Site description
- `author` - Author name
- `email` - Contact email

### Update Profile Data

Edit `src/data/profile.json`:
- Personal information
- Navigation links
- Social media profiles

### Update Theme Colors

Edit `src/styles/tokens.css`:
- `--color-primary` - Primary accent color
- `--color-text` - Main text color
- `--color-bg-*` - Background colors

Edit `src/styles/theme.css` for theme variables.

## 📱 Responsive Design

The site is fully responsive using:
- Mobile-first approach
- CSS Grid for layouts
- Breakpoints defined in `src/styles/tokens.css`:
  - `--breakpoint-sm: 640px`
  - `--breakpoint-md: 768px`
  - `--breakpoint-lg: 1024px`

Mobile drawer automatically appears on smaller screens.

## 🔍 SEO Best Practices

### Page Metadata

Every page should have metadata:

```astro
import { buildMetadata } from '../shared/content/metadata';

const meta = buildMetadata({
  title: 'Page Title',
  description: 'Page description',
  canonical: '/page-path',
  keywords: ['keyword1', 'keyword2']
});

<ContentLayout {...meta}>
  <!-- Content -->
</ContentLayout>
```

### URL Structure

- Always use absolute paths starting with `/`
- Canonical URLs are automatically generated
- Sitemap is generated from page routes
- Robots.txt controls crawler access

## ♿ Accessibility Features

### Implemented Standards

- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Responsive at all zoom levels
- Reduced motion support

### Testing Accessibility

1. Use Lighthouse in Chrome DevTools
2. Test with keyboard (Tab, Enter, Escape)
3. Test with screen reader
4. Check colors with contrast analyzer
5. Verify mobile touch targets (44x44px minimum)

Refer to `ACCESSIBILITY_CHECKLIST.md` for complete standards.

## 🚀 Deployment

### Automatic Deployment

Push to main branch and GitHub Actions automatically:
1. Builds the site
2. Runs tests
3. Deploys to GitHub Pages

### Deployment Verification

After deployment, verify:
1. Site is live at configured URL
2. All pages load correctly
3. Images display properly
4. Links work (internal and external)
5. Responsive design works on mobile
6. Search console updated

See `DEPLOYMENT_CHECKLIST.md` for complete steps.

## 🐛 Common Issues & Solutions

### Build fails with TypeScript errors
```bash
# Check types
tsc --noEmit

# Fix errors in the files indicated
```

### Changes don't appear after deployment
1. Clear browser cache (Ctrl+Shift+Delete)
2. Hard refresh (Ctrl+Shift+R)
3. Check GitHub Actions completed successfully
4. Verify deployment to main branch

### Mobile drawer doesn't work
1. Ensure `client:load` directive is present
2. Check browser console for JavaScript errors
3. Verify MobileDrawer.tsx is properly imported
4. Test on actual mobile device

### Styling issues
1. Check CSS Module is imported correctly
2. Verify class names match
3. Check for CSS conflicts
4. Test in different browsers

## 📚 Important Files

- **IMPLEMENTATION_SUMMARY.md** - What was built
- **ACCESSIBILITY_CHECKLIST.md** - A11y requirements
- **DEPLOYMENT_CHECKLIST.md** - Deployment guide
- **src/README.md** - Project architecture
- **src/shared/README.md** - Shared utilities guide
- **src/features/*/README.md** - Feature-specific documentation

## 🎓 Code Examples

### Creating a New Component

```astro
---
// src/features/myfeature/components/MyComponent.astro
import type { MyType } from '../../../shared/types';

interface Props {
  items: MyType[];
  title?: string;
}

const { items, title = 'Default Title' } = Astro.props;
---

<section class="my-section">
  <h2>{title}</h2>
  {items.map((item) => (
    <div key={item.id}>{item.name}</div>
  ))}
</section>

<style>
  .my-section {
    padding: var(--space-4);
    margin-bottom: var(--space-8);
  }
</style>
```

### Using Metadata in Pages

```astro
---
import ContentLayout from '../layouts/ContentLayout.astro';
import { buildMetadata } from '../shared/content/metadata';

const meta = buildMetadata({
  title: 'My Page',
  description: 'Page description',
  canonical: '/my-page',
  keywords: ['keyword1', 'keyword2']
});
---

<ContentLayout {...meta}>
  <main>
    <!-- Page content -->
  </main>
</ContentLayout>
```

### Type-Safe Data Usage

```typescript
import type { Publication } from '../shared/types';
import publicationsData from '../data/publications/publications.json';

const publications = (publicationsData as any).publications as Publication[];
```

## 🔗 Useful Resources

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)
- [MDN Web Docs](https://developer.mozilla.org)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## ✅ Next Steps

1. ✅ Understand the project structure
2. ✅ Review README files in each directory
3. ✅ Customize site configuration
4. ✅ Add your content (education, publications, etc.)
5. ✅ Test accessibility and responsiveness
6. ✅ Deploy to GitHub Pages
7. ✅ Monitor and maintain

## 🤝 Contributing

When adding new features:
1. Follow existing patterns
2. Create proper TypeScript types
3. Use design tokens for styling
4. Add documentation
5. Test on mobile and desktop
6. Run full build before committing

---

**Ready to customize and deploy your personal website!**

For questions, refer to the comprehensive README files throughout the codebase and the accessibility/deployment checklists.
