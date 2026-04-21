export type ProjectStatus = 'ongoing' | 'completed' | 'planned';

export type RepositoryVisibility = 'public' | 'private';

export interface Project {
  id: string;
  title: string;
  summary: string;
  period: string;
  status: ProjectStatus;
  themeSlug: string;
  url?: string | null;
  repositoryVisibility?: RepositoryVisibility | null;
  technologies: string[];
}

export interface ProjectsData {
  projects: Project[];
}
