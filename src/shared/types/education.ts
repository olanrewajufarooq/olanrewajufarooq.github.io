export interface Advisor {
  name: string;
  url?: string | null;
}

export interface Lab {
  name: string;
  url?: string | null;
}

export interface Thesis {
  title: string;
  advisor: Advisor[];
  lab?: Lab | null;
  relatedResearchSlug?: string | null;
}

export interface SingleDegreeEntry {
  id: string;
  type: 'single';
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  url?: string | null;
  logo?: string | null;
  thesis?: Thesis | null;
}

export interface JointDegreeSubEntry {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  url?: string | null;
  logo?: string | null;
}

export interface JointDegreeEntry {
  id: string;
  type: 'joint';
  programName: string;
  entries: JointDegreeSubEntry[];
  thesis?: Thesis | null;
}

export type DegreeEntry = SingleDegreeEntry | JointDegreeEntry;

export interface EducationData {
  degrees: DegreeEntry[];
}

export function isJointDegree(degree: DegreeEntry): degree is JointDegreeEntry {
  return degree.type === 'joint';
}
