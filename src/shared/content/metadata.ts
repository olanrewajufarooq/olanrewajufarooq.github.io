import { SITE } from '../constants/site';

export interface MetadataOptions {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image';
  keywords?: string[];
  noindex?: boolean;
}

export function buildMetadata(options: MetadataOptions = {}) {
  const {
    title = SITE.title,
    description = SITE.description,
    image = SITE.defaultOgImage,
    canonical,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    keywords = [],
    noindex = false,
  } = options;

  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const imageUrl = new URL(image, SITE.url).href;
  const canonicalUrl = canonical ? new URL(canonical, SITE.url).href : undefined;

  return {
    title: fullTitle,
    description,
    canonical: canonicalUrl,
    openGraph: {
      title: fullTitle,
      description,
      type: ogType,
      url: canonicalUrl || SITE.url,
      image: imageUrl,
      site_name: SITE.name,
    },
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      image: imageUrl,
      creator: '@olanrewajufarooq',
    },
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
    keywords: keywords.join(', '),
  };
}

export function getCanonicalUrl(path: string): string {
  return new URL(path, SITE.url).href;
}
