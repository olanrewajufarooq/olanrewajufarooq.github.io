import type { CollectionEntry } from 'astro:content';

export const researchPlaceholder = '/assets/images/research/research-placeholder.svg';

export function sortResearchLatestFirst(
  a: CollectionEntry<'research'>,
  b: CollectionEntry<'research'>,
) {
  const years = (period: string) => period.match(/\d{4}/g)?.map(Number) ?? [0];
  const endYear = (period: string) => (/present/i.test(period) ? Number.POSITIVE_INFINITY : years(period).at(-1) ?? 0);
  const startYear = (period: string) => years(period)[0];
  const endYearDifference = endYear(b.data.period) - endYear(a.data.period);

  if (endYearDifference !== 0) return endYearDifference;

  return startYear(b.data.period) - startYear(a.data.period) || a.data.title.localeCompare(b.data.title);
}
