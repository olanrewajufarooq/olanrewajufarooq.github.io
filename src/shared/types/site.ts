export interface Site {
  name: string;
  title: string;
  description: string;
  url: string;
  author: string;
  email: string;
  keywords: string[];
}

export interface Profile {
  name: string;
  title: string;
  institution: string;
  department?: string;
  photo: string;
  researchFocus: string;
  currentAffiliationLabel: string;
  cvPath: string;
  email: string;
  location?: string;
  bio?: string;
}
