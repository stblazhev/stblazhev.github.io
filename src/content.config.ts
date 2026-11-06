import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One Markdown file per case study in src/content/projects/.
// Files starting with "_" are ignored. See CLAUDE.md for the full template.
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(), // one sentence: the problem and the result
    context: z.string(), // e.g. "iGaming platform · B2C · LATAM" (anonymised)
    year: z.string(),
    role: z.string(),
    timeline: z.string(),
    team: z.string().optional(),
    methods: z.array(z.string()),
    outcomes: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    tldr: z.array(z.string()).default([]),
    cover: z.string().optional(), // path under /public, e.g. /projects/my-slug/cover.png
    coverAlt: z.string().optional(),
    order: z.number().default(100), // lower = higher on the home page
    draft: z.boolean().default(false), // drafts show locally, never on the live site
  }),
});

export const collections = { projects };
