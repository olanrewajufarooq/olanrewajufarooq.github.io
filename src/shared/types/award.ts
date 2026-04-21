export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  url?: string | null;
}

export interface AwardsData {
  awards: AwardItem[];
}
