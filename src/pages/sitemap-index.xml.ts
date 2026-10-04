import { SITE } from '../shared/constants/site';
import { getCollection } from 'astro:content';

export const prerender = true;

const staticPages = [
  { path: '/', priority: 1.0, lastMod: '2024-01-01' },
  { path: '/about', priority: 0.9, lastMod: '2024-01-01' },
  { path: '/publications', priority: 0.9, lastMod: '2024-01-01' },
  { path: '/research', priority: 0.9, lastMod: '2024-01-01' },
  { path: '/contact', priority: 0.8, lastMod: '2024-01-01' },
];

export async function GET() {
  const themes = await getCollection('research');
  const pages = [
    ...staticPages,
    ...themes.map((theme) => ({
      path: `/research/${theme.data.slug ?? theme.id.replace(/\.md$/, '')}`,
      priority: 0.8,
      lastMod: '2024-01-01',
    })),
  ];
  const sitemapEntries = pages
    .map((page) => {
      const url = new URL(page.path, SITE.url).href;
      return `  <url>
    <loc>${url}</loc>
    <lastmod>${page.lastMod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`;
    })
    .join('\n');

  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>`;

  return new Response(sitemapContent, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=604800',
    },
  });
}
