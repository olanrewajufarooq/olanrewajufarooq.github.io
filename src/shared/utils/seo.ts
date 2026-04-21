import { SITE } from '../constants/site';

export function getCanonicalUrl(path: string): string {
  // Remove trailing slash and ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return new URL(cleanPath, SITE.url).href;
}

export function createStructuredData(data: Record<string, any>): string {
  return JSON.stringify(data);
}

export function createBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>
): string {
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return JSON.stringify(breadcrumbs);
}

export function createPersonStructuredData(): string {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    jobTitle: 'PhD Student in Systems and Control Engineering',
    affiliation: {
      '@type': 'Organization',
      name: 'King Fahd University of Petroleum & Minerals',
      url: 'https://www.kfupm.edu.sa',
    },
    sameAs: [
      'https://github.com/olanrewajufarooq',
      'https://www.linkedin.com/in/olanrewajufarooq/',
      'https://orcid.org/0000-0002-8953-4564',
      'https://scholar.google.com/citations?user=olanrewajufarooq',
    ],
  };
  return JSON.stringify(person);
}

export function createOrganizationStructuredData(): string {
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
  };
  return JSON.stringify(org);
}

export function generateSitemap(
  pages: Array<{ path: string; lastModified?: string; priority?: number }>
): string {
  const entries = pages
    .map((page) => {
      const url = getCanonicalUrl(page.path);
      const lastMod = page.lastModified || new Date().toISOString().split('T')[0];
      const priority = page.priority ?? 0.8;

      return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;
}

export function robotsTxt(): string {
  return `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

Sitemap: ${new URL('/sitemap-index.xml', SITE.url).href}

# Comment: Disallow crawling of specific paths if needed
# Disallow: /admin/
# Disallow: /private/`;
}
