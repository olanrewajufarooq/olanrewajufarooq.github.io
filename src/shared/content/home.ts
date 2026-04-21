import themesData from '../../data/research/themes.json';
import publicationsData from '../../data/publications/publications.json';
import projectsData from '../../data/research/projects.json';
import type { ResearchThemeSummary, Publication, Project } from '../types';

export function getFeaturedThemes(): ResearchThemeSummary[] {
  return (themesData.themes as ResearchThemeSummary[])
    .filter((theme) => theme.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);
}

export function getLatestAcceptedOrPublishedPublication(): Publication | null {
  return (publicationsData.publications as Publication[])
    .filter((publication) =>
      publication.status === 'accepted' || publication.status === 'published'
    )
    .sort((a, b) => b.year - a.year)[0] ?? null;
}

export function getCurrentProjects(): Project[] {
  return (projectsData.projects as Project[])
    .filter((project) => project.status === 'ongoing')
    .slice(0, 2);
}