# About Feature

Displays comprehensive information about Farooq's education, certificates, awards, and CV.

## Components

- **AboutIntro.astro**: Biographical introduction
- **EducationSection.astro**: Education timeline (handles both single and joint degrees)
- **CertificatesSection.tsx**: React component with horizontal scrolling certificates
- **AwardsSection.astro**: Awards and honors list
- **CvDownloadPanel.astro**: Featured CV download section

## Data

Uses data from `src/data/about/`:
- `education.json` - Degree information
- `certificates.json` - Professional certificates
- `awards.json` - Awards and honors

## Styles

`about.module.css` contains styles for:
- Education timeline entries
- Joint degree groups
- Thesis sections
- Certificate cards
- Award items
- CV download panel

## Adding New Education

Edit `src/data/about/education.json`:

```json
{
  "degree": "Bachelor of Engineering",
  "field": "Mechanical Engineering",
  "institution": "University Name",
  "location": "City, Country",
  "period": "Sep 2015 - Jun 2019",
  "url": "https://university.edu",
  "logo": "/assets/images/logos/university.jpg",
  "thesisTitle": "Thesis Title",
  "thesisAdvisor": "Prof. Name",
  "thesisAdvisorLink": "https://..."
}
```

## Adding Certificates

Edit `src/data/about/certificates.json`:

```json
{
  "name": "Certificate Name",
  "provider": "Provider Name",
  "issueDate": "2024-01-01",
  "credentialUrl": "https://...",
  "icon": "/assets/images/certs/icon.png"
}
```
