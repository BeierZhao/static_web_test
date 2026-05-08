import { defineCollection, z } from 'astro:content';

const machinesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    model: z.string(),
    category: z.enum(['powder-packaging', 'vision-inspection', 'automation']),
    subcategory: z.string().optional(),
    title: z.string(),
    tags: z.array(z.string()).optional().default([]),
    thumbnail: z.string().default('/images/machines/placeholder.webp'),
    weightRange: z.string().optional(),
    accuracy: z.string().optional(),
    speed: z.string().optional(),
    power: z.string().optional(),
    dimensions: z.string().optional(),
    materials: z.array(z.string()).optional().default([]),
    compliance: z.object({
      remoteSupport: z.boolean().default(false),
      esaCsaCertified: z.boolean().default(false),
    }).optional().default({}),
    components: z.array(z.string()).optional().default([]),
    highlight: z.string().optional(),
  }),
});

export const collections = { machines: machinesCollection };