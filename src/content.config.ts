import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      role: z.string().optional(),
      tools: z.string().optional(),
      team: z.string().optional(),
      context: z.string().optional(),
      pending: z.boolean().default(false),
      order: z.number().default(0),
      image: image().optional(),
    }),
});

export const collections = { work };
