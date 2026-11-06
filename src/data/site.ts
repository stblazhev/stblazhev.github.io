// Everything personal about the site lives here. Edit these values, not the pages.
// Empty strings and empty lists are hidden on the site.
export const site = {
  name: 'Stefan Blazhev',
  role: 'UX Researcher',

  // Browser tab and link previews.
  description:
    'Stefan Blazhev is a UX researcher who helps product teams understand their users through usability testing, competitor benchmarking and brand research.',

  // Home page hero. DRAFT: review and rewrite in your own voice.
  headline: 'I help product teams understand the people they build for.',
  intro:
    'UX researcher working on consumer products across Latin America, Europe and Central Asia. I run usability tests, competitor benchmarks and brand concept studies, and turn what people do into decisions teams can ship.',

  // Contact. Personal details only, never a work address.
  email: '',
  linkedin: '',
  cv: '', // e.g. /cv.pdf (put the file in /public)
  location: '',

  // About page. DRAFT: replace with your own story.
  about: [
    'I’m a UX researcher focused on the moments where people decide whether to trust a product: signing up, paying, and finding their way around for the first time.',
    'Most of my work happens in fast-moving, multi-market teams, so I design studies that answer one decision at a time, run them quickly, and present findings in a form designers and product managers can act on the same week.',
  ],
  approach: [
    {
      title: 'Start from the decision',
      text: 'Every study begins with the product decision it needs to inform, not with a method.',
    },
    {
      title: 'Compare before you build',
      text: 'Benchmarking competitors and markets shows what users already expect, so teams do not reinvent patterns that work.',
    },
    {
      title: 'Make findings usable',
      text: 'Insights come with evidence, a clear priority and a concrete recommendation the team can pick up.',
    },
  ],
  methods: [
    'Moderated and unmoderated usability testing',
    'Competitor and UX benchmarking',
    'Brand and concept testing',
    'First-click and preference tests',
    'Heuristic evaluation',
    'Flow and funnel analysis',
    'Interviews',
    'Research synthesis and reporting',
  ],
  tools: ['Useberry', 'Figma', 'FigJam', 'Confluence'],
  // { period: '2023 to now', role: 'UX Researcher', company: 'Company name' }
  experience: [] as { period: string; role: string; company: string }[],
};
