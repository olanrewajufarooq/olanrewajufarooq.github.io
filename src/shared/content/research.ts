import type { CollectionEntry } from 'astro:content';

export const researchPlaceholder = '/assets/images/research/research-placeholder.svg';

export function sortResearchLatestFirst(
  a: CollectionEntry<'research'>,
  b: CollectionEntry<'research'>,
) {
  const years = (period: string) => period.match(/\d{4}/g)?.map(Number) ?? [0];
  const endYear = (period: string) => (/present/i.test(period) ? Number.POSITIVE_INFINITY : years(period).at(-1) ?? 0);
  const startYear = (period: string) => years(period)[0];
  const aEndYear = endYear(a.data.period);
  const bEndYear = endYear(b.data.period);

  if (aEndYear !== bEndYear) {
    if (aEndYear === Number.POSITIVE_INFINITY) return 1;
    if (bEndYear === Number.POSITIVE_INFINITY) return -1;
    return bEndYear - aEndYear;
  }

  return startYear(b.data.period) - startYear(a.data.period) || a.data.title.localeCompare(b.data.title);
}
