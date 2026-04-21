# Features

Domain-specific feature modules, each containing components and styles related to a specific area of the site.

## Feature Structure

Each feature directory follows this structure:

```
features/
├── about/
│   ├── components/       # Feature-specific components
│   └── styles/          # Feature-specific CSS modules
├── publications/
│   ├── components/
│   └── styles/
├── teaching/
│   ├── components/
│   └── styles/
└── ... (other features)
```

## Available Features

### about/
Displays education, certificates, awards, and CV.

**Components:**
- `AboutIntro.astro` - Introduction section
- `EducationSection.astro` - Education timeline
- `CertificatesSection.tsx` - Horizontal scrolling certificates
- `AwardsSection.astro` - Awards list
- `CvDownloadPanel.astro` - CV download section

### publications/
Lists research publications with search and filtering.

**Components:**
- `PublicationsIntro.astro` - Introduction
- `PublicationsList.tsx` - Searchable publications list with status filters

### teaching/
Displays teaching experience and courses.

**Components:**
- `TeachingIntro.astro` - Introduction
- `TeachingList.astro` - Teaching items list

### research/
Research projects and findings.

**Components:**
- `ResearchIntro.astro` - Introduction
- `ResearchTimeline.astro` - Research timeline

### home/
Home page specific components.

### profile/
Profile-related components (shared across features).

**Components:**
- `IdentityBlock.astro` - Profile name, title, affiliation
- `SocialLinks.astro` - Social media links
- `AffiliationMeta.astro` - Institutional affiliation

## Adding New Features

1. Create a new directory in `src/features/`
2. Add `components/` and `styles/` subdirectories
3. Create `.astro` or `.tsx` files for components
4. Add `.module.css` files for styles
5. Create a README.md explaining the feature
6. Import and use in page files

## Naming Conventions

- Component files: PascalCase (e.g., `AboutIntro.astro`)
- CSS Module files: kebab-case (e.g., `about.module.css`)
- CSS classes: camelCase (e.g., `.aboutContainer`)
