import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Dean Bishop'),
    tags: z.array(z.string()).default([]),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
