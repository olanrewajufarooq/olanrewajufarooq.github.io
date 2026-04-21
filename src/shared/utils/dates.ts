export function formatDate(date: string | Date, format: 'short' | 'long' = 'long'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (format === 'short') {
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  }
  
  return d.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

export function formatYear(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.getFullYear().toString();
}

export function parseDate(dateString: string): Date {
  return new Date(dateString);
}

export function isRecent(date: string | Date, daysAgo: number = 90): boolean {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diff = now.getTime() - d.getTime();
  const days = diff / (1000 * 60 * 60 * 24);
  return days < daysAgo;
}

export function sortByDate(items: Array<{ date?: string | Date }>, ascending = false) {
  return [...items].sort((a, b) => {
    const aDate = a.date ? new Date(a.date).getTime() : 0;
    const bDate = b.date ? new Date(b.date).getTime() : 0;
    return ascending ? aDate - bDate : bDate - aDate;
  });
}
