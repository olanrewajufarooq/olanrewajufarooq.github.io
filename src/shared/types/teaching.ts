export interface TeachingItem {
  id: string;
  title: string;
  institution: string;
  role: string;
  period: string;
  summary?: string;
  materialsUrl?: string | null;
}

export interface TeachingData {
  items: TeachingItem[];
}
