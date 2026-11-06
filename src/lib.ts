import { getCollection } from 'astro:content';

/** Published case studies, ordered for the home page. Drafts only appear in local dev. */
export async function getProjects() {
  const all = await getCollection('projects', ({ data }) => (import.meta.env.PROD ? !data.draft : true));
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year.localeCompare(a.data.year));
}
