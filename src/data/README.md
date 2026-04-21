# Data

JSON data files for site content.

## Structure

```
data/
├── profile.json           # Site-wide profile data
├── publications.json      # Publications
├── about/
│   ├── education.json     # Education history
│   ├── certificates.json  # Certificates
│   └── awards.json        # Awards and honors
├── research/              # Research-related data
├── teaching/
│   └── teaching.json      # Teaching experiences
└── site/                  # Site configuration
    └── seo.json          # SEO settings
```

## profile.json

Global profile information:
- Name, title, affiliation
- Bio and photo
- Navigation links
- Social media links

## Feature Data

Each feature has dedicated data files in subdirectories.

## Adding New Data

1. Create JSON file in appropriate directory
2. Create TypeScript type in `src/shared/types/`
3. Import and use in components
4. Validate JSON structure

## Data Best Practices

- Keep data files in JSON format
- Use consistent key naming (camelCase)
- Include ID fields for list items
- Provide URL fields for external links
- Use ISO 8601 dates (YYYY-MM-DD)
- Keep descriptions concise but informative
