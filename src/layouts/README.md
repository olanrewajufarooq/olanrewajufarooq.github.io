# Layouts

Page layout templates that define the overall structure of pages.

## Available Layouts

- **BaseLayout.astro**: Base layout with minimal wrapper
- **ContentLayout.astro**: Main content layout with sidebar support (used by most pages)
- **MainLayout.astro**: Home page layout
- **ResearchDetailLayout.astro**: Individual research detail pages

## ContentLayout

The most commonly used layout. Features:

- Sidebar (left) for profile/navigation
- Main content area
- Footer
- Support for hero section
- Responsive grid layout

Usage:
```astro
import ContentLayout from '../layouts/ContentLayout.astro';

<ContentLayout title="Page Title" description="Page description">
  <PageHero slot="sidebar" title="Title" subtitle="Subtitle" />
  <Sidebar slot="sidebar">
    <!-- Sidebar content -->
  </Sidebar>

  <main>
    <!-- Main content -->
  </main>

  <Footer slot="footer">
    <!-- Footer content -->
  </Footer>
</ContentLayout>
```

## Props

### ContentLayout

- `title` (string): Page title
- `description` (string): Page description for metadata
- `canonical` (string, optional): Canonical URL
- `ogImage` (string, optional): Open Graph image URL

### Slots

- `sidebar`: Left sidebar content (profile, navigation)
- `default`: Main content area
- `footer`: Footer content

## Adding New Layouts

1. Create `.astro` file
2. Define named slots for content areas
3. Include responsive styling
4. Document props and slots
5. Export as default
