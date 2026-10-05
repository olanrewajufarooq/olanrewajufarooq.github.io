import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const research = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/research' }),
  schema: z.object({
    slug: z.string().optional(),
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    status: z.enum(['ongoing', 'completed', 'planned']),
    featured: z.boolean().default(false),
    keywords: z.array(z.string()).default([]),
    coverImage: z.string().nullable().optional(),
    gallery: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          caption: z.string().optional(),
        }),
      )
      .default([]),
    videos: z.array(z.object({ title: z.string(), url: z.string() })).default([]),
    repositories: z
      .array(z.object({ label: z.string(), url: z.string(), visibility: z.enum(['public', 'private']) }))
      .default([]),
    collaborators: z
      .array(z.object({ name: z.string(), affiliation: z.string().optional(), url: z.string().nullable().optional() }))
      .default([]),
    advisor: z.string().optional(),
    projectIds: z.array(z.string()).default([]),
    publicationIds: z.array(z.string()).default([]),
    order: z.number().default(999),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/publications' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    authors: z.array(z.object({ name: z.string(), isMe: z.boolean().default(false) })),
    venue: z.string(),
    year: z.number(),
    status: z.enum(['published', 'accepted', 'submitted', 'in-review', 'in-draft']),
    publisherUrl: z.string().nullable().optional(),
    themeSlugs: z.array(z.string()).default([]),
    projectIds: z.array(z.string()).default([]),
    citation: z
      .object({
        pages: z.string().nullable().optional(),
        volume: z.string().nullable().optional(),
        issue: z.string().nullable().optional(),
        doi: z.string().nullable().optional(),
      })
      .default({}),
    bibtexPath: z.string().nullable().optional(),
    provider: z
      .object({
        orcidWorkId: z.string().nullable().optional(),
        doi: z.string().nullable().optional(),
        title: z.string().nullable().optional(),
        type: z.string().nullable().optional(),
        year: z.number().nullable().optional(),
      })
      .default({}),
  }),
});

export const collections = { research, publications };
