import type { Project } from '../types/project';
import type { Publication } from '../types/publication';

export function getProjectsForTheme(projects: Project[], themeSlug: string): Project[] {
  return projects.filter((project) => project.themeSlug === themeSlug);
}

export function getThemePublicationCount(publications: Publication[], themeSlug: string): number {
  return publications.filter((publication) => publication.themeSlugs.includes(themeSlug)).length;
}
