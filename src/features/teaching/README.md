# Teaching Feature

Displays teaching experience, courses, and mentoring activities.

## Components

- **TeachingIntro.astro**: Feature introduction
- **TeachingList.astro**: List of teaching experiences

## Data

Uses `src/data/teaching/teaching.json`:

```json
{
  "id": "unique-id",
  "title": "Course or Activity Title",
  "institution": "Institution Name",
  "role": "Teaching Assistant / Instructor",
  "year": "2024",
  "description": "Description of the course/activity",
  "url": "https://..."
}
```

## Styles

`teaching.module.css` contains styles for:
- Teaching list items
- Item headers with year badges
- Institution and role styling
- Responsive adjustments

## Adding Teaching Experience

1. Edit `src/data/teaching/teaching.json`
2. Add entry with required fields
3. Optional fields: description, url, year

Currently, the teaching section shows an empty state. Add teaching items to populate it.

## Empty State

When no teaching experiences exist, displays:
- "No teaching experience to display at this time"
- "Updates coming soon!"

This appears as a dashed border box with centered text.
