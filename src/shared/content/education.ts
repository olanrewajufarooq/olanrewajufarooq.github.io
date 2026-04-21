import { formatDate } from '../utils/dates';

export function formatEducationPeriod(period: string | string[]): string {
  if (Array.isArray(period)) {
    return period.join(' → ');
  }
  return period;
}

export function getDurationInYears(startDate: string, endDate: string): number {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365.25));
}

export function formatEducationLevel(degree: string): 'bachelor' | 'master' | 'phd' {
  const lower = degree.toLowerCase();
  if (lower.includes('phd') || lower.includes('doctor')) return 'phd';
  if (lower.includes('master')) return 'master';
  return 'bachelor';
}
