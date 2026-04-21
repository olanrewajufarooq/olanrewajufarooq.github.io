import { defineCollection, z } from 'astro:content';

const researchCollection = defineCollection({
  type: 'content',
  schema: z.object({
    slug: z.string().optional(),
    title: z.string(),
    summary: z.string(),
    period: z.string(),
    status: z.enum(['ongoing', 'completed', 'planned']),
    featured: z.boolean().default(false),
    keywords: z.array(z.string()).default([]),
    coverImage: z.string().nullable().optional(),
    gallery: z.array(z.string()).default([]),
    videos: z
      .array(
        z.object({
          title: z.string(),
          url: z.string(),
        }),
      )
      .default([]),
    repositories: z
      .array(
        z.object({
          label: z.string(),
          url: z.string(),
          visibility: z.enum(['public', 'private']),
        }),
      )
      .default([]),
    collaborators: z
      .array(
        z.object({
          name: z.string(),
          affiliation: z.string().optional(),
          url: z.string().nullable().optional(),
        }),
      )
      .default([]),
    projectIds: z.array(z.string()).default([]),
    publicationIds: z.array(z.string()).default([]),
    order: z.number().default(999),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
  }),
});

export const collections = {
  research: researchCollection,
};
