# Components

Reusable UI components used across the site.

## Layout Components

Components that define page structure:

- **SiteShell.astro**: Top-level wrapper with sidebar/main content structure
- **Sidebar.astro**: Left sidebar for profile/navigation
- **Footer.astro**: Site footer
- **PageHero.astro**: Page header with title and subtitle
- **MobileDrawer.tsx**: Mobile navigation drawer (React)

## UI Components

Small, focused UI components:

- **SectionHeading.astro**: Section heading with consistent styling
- **StatusBadge.astro**: Status indicator badge
- **EmptyState.astro**: Empty state placeholder
- **Breadcrumbs.astro**: Breadcrumb navigation

## Usage

```astro
import SectionHeading from '../components/ui/SectionHeading.astro';

<SectionHeading>My Section</SectionHeading>
```

## Adding New Components

1. Create `.astro` or `.tsx` file in appropriate subdirectory
2. Export default component/slot
3. Type all props with TypeScript interfaces
4. Include inline styles or reference global classes
5. Add documentation comment

## Mobile Drawer

The MobileDrawer is a React component that:
- Slides in from the right on mobile
- Shows overlay behind it
- Closes on Escape key or overlay click
- Contains navigation links and social links
- Has download CV button

Usage:
```tsx
<MobileDrawer client:load />
```
