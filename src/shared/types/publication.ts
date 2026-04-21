export type PublicationStatus =
  | 'published'
  | 'accepted'
  | 'submitted'
  | 'in-review'
  | 'in-draft';

export interface PublicationAuthor {
  name: string;
  isMe?: boolean;
}

export interface PublicationCitationMeta {
  pages?: string | null;
  volume?: string | null;
  issue?: string | null;
  doi?: string | null;
}

export interface Publication {
  id: string;
  title: string;
  authors: PublicationAuthor[];
  venue: string;
  year: number;
  status: PublicationStatus;
  publisherUrl?: string | null;
  themeSlugs: string[];
  projectIds: string[];
  citation?: PublicationCitationMeta;
  bibtexPath?: string | null;
}

export interface PublicationsData {
  publications: Publication[];
}
