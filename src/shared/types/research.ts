export type ResearchThemeStatus = 'ongoing' | 'completed' | 'planned';

export interface ResearchThemeSummary {
  slug: string;
  title: string;
  summary: string;
  period: string;
  status: ResearchThemeStatus;
  featured: boolean;
  keywords: string[];
  coverImage?: string | null;
  projectIds: string[];
  publicationIds: string[];
  order: number;
}

export interface ResearchThemesData {
  themes: ResearchThemeSummary[];
}

export interface ResearchCollaborator {
  name: string;
  affiliation?: string;
  url?: string | null;
}

export interface ResearchRepository {
  label: string;
  url: string;
  visibility: 'public' | 'private';
}

export interface ResearchVideo {
  title: string;
  url: string;
}
