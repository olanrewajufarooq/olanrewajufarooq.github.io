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
