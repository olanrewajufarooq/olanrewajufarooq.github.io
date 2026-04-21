import type { Publication, PublicationStatus } from '../types/publication';

export function getPublicationsByStatus(
  publications: Publication[],
  status: PublicationStatus,
): Publication[] {
  return publications
    .filter((publication) => publication.status === status)
    .sort((a, b) => b.year - a.year);
}

export function getPublicationsForTheme(
  publications: Publication[],
  themeSlug: string,
): Publication[] {
  return publications
    .filter((publication) => publication.themeSlugs.includes(themeSlug))
    .sort((a, b) => b.year - a.year);
}
