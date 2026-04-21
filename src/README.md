# Farooq Olanrewaju's Personal Website

A modern, responsive academic personal website built with Astro, React, and TypeScript.

## Project Structure

```
src/
├── components/        # Reusable UI components
├── features/          # Feature-specific components and styles
├── layouts/           # Page layout templates
├── pages/             # Site pages (auto-routed)
├── data/              # JSON data files
├── shared/            # Shared utilities, types, and constants
└── styles/            # Global styles
```

## Architecture Overview

This website follows a modular architecture:

- **Pages**: Each `.astro` file in `src/pages/` becomes a route
- **Features**: Domain-specific components grouped by feature (about, publications, etc.)
- **Components**: Shared, reusable UI components
- **Layouts**: Page template layouts
- **Data**: JSON data sources for content
- **Shared**: Cross-cutting concerns (types, utilities, constants)

## Key Technologies

- **Astro**: Static site generation framework
- **React**: Interactive components (with partial hydration)
- **TypeScript**: Type safety across the codebase
- **CSS Modules**: Scoped styling

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Adding New Content

### New Page
1. Create a file in `src/pages/` (e.g., `src/pages/blog.astro`)
2. Import layouts and components
3. The route is auto-generated from the file path

### New Feature
1. Create a directory in `src/features/` (e.g., `src/features/blog/`)
2. Add subdirectories: `components/`, `styles/`
3. Create components in the `components/` folder
4. Add CSS modules in the `styles/` folder

### New Data
1. Add JSON file to `src/data/`
2. Create a TypeScript type definition in `src/shared/types/`
3. Import and use in components

## Conventions

- Use `.astro` for static components
- Use `.tsx` for interactive components requiring state
- Use TypeScript interfaces for all props
- Import types from `src/shared/types/`
- Follow kebab-case for file names (except TypeScript interfaces)
- Use CSS Modules for component-scoped styles
- Use global variables from `src/styles/tokens.css` for consistent spacing, colors, etc.

## SEO & Metadata

All pages should include metadata:
- `buildMetadata()` function in components for consistent metadata
- Canonical URLs automatically set
- Open Graph and Twitter card support
- Structured data via `createPersonStructuredData()`, `createOrganizationStructuredData()`

## Performance

- Static site generation for fast load times
- Partial hydration of React components (only when needed with `client:load`)
- Optimized images in `assets/`
- CSS modules prevent style conflicts
- Responsive design with mobile-first approach
