# Publications Feature

Displays research publications with search and filtering capabilities.

## Components

- **PublicationsIntro.astro**: Feature introduction and description
- **PublicationsList.tsx**: React component with search and status filtering

## Features

The PublicationsList component provides:
- Full-text search across title, authors, venue, description
- Filter by publication status (published, accepted, under review)
- Year-based grouping
- Responsive layout

## Data

Uses `src/data/publications/publications.json`:

```json
{
  "id": "unique-id",
  "title": "Paper Title",
  "authors": "Author Name, et al.",
  "venue": "Conference/Journal Name",
  "year": 2024,
  "status": "published",
  "url": "https://...",
  "description": "Brief description"
}
```

## Styles

`publications.module.css` contains styles for:
- Search box and filters
- Publication list items
- Year headings
- Status badges
- Responsive adjustments

## Adding Publications

1. Edit `src/data/publications/publications.json`
2. Add entry with required fields (id, title, authors, venue, year, status)
3. Optional: add url and description
4. Status values: "published", "accepted", "review"

## Publication Types

- **published**: Peer-reviewed articles in journals/conferences
- **accepted**: Accepted but not yet published
- **review**: Currently under review

The status determines the badge color and display order.
