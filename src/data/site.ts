// Everything personal about the site lives here. Edit these values, not the pages.
// Empty strings and empty lists are hidden on the site.
export const site = {
  // Branding (from the original Framer portfolio): flask logo + "UXR Lab"
  brand: 'UXR Lab',
  brandFull: 'Chefo’s UX Research Lab',
  logo: '/brand/flask.png',

  name: 'Stefan Blazhev',
  displayName: 'Stefan “Chefo” Blazhev',
  role: 'UX Researcher · iGaming',

  // Browser tab and link previews.
  description:
    'Stefan “Chefo” Blazhev is a UX researcher in iGaming who owns research end to end, from objectives and methods to prioritised recommendations for Product.',

  // Home page hero
  headline: 'Chefo’s UX Research Lab',
  intro:
    'UX researcher in iGaming, across casino and sports betting. I own research end to end, from the research question and method to prioritised recommendations for Product, and combine usability testing with product analytics.',
  motto: 'Get to know your user first, then think about the rest.',

  // Headline results shown on the home page
  highlights: [
    { value: '40%', label: 'increase in first-time deposits after an optimised registration flow' },
    { value: '9x', label: 'faster user flow with a new bottom navigation bar' },
    { value: '50+', label: 'people led as an operations team lead' },
    { value: '100+', label: 'hiring interviews run' },
  ],

  // Contact. Personal details only, never a work address.
  email: 'st.blazhev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/stefan-pb/',
  cv: '', // e.g. /cv.pdf (put the file in /public)
  location: 'Sofia, Bulgaria',

  // About page
  about: [
    'I’m a UX researcher in iGaming, working across casino and sports betting products. I own research end to end: shaping the research question, choosing the method, running the study and turning findings into prioritised recommendations Product can act on.',
    'I combine qualitative testing with product analytics (GA4, Amplitude and Microsoft Clarity), and I work directly with external testing agencies. I also built my team’s AI-assisted research process and its central research repository.',
    'Before research, I spent three years in operations at TELUS Digital, ending as a team lead for 50+ people. That taught me hiring, coaching and how to measure what matters, which I now bring to research.',
  ],

  // Research process (from the original portfolio)
  approach: [
    {
      title: 'Uncover the unknown',
      text: 'Through exploration and empathy, identify the user needs, motivations and pain points that shape every project.',
    },
    {
      title: 'Make sense of the mess',
      text: 'Synthesise findings into clear insights and actionable problem statements that guide design decisions.',
    },
    {
      title: 'Prototype, test, repeat',
      text: 'Bring ideas to life through iterative testing, validating assumptions and refining solutions with real user and stakeholder feedback.',
    },
    {
      title: 'Insight into action',
      text: 'Translate research outcomes into strategic recommendations that drive design and business results.',
    },
  ],

  methods: [
    'Usability and golden user flow testing',
    'Concept and preference testing',
    'Competitive analysis',
    'UX audits',
    'Session-recording analysis',
    'Funnel and conversion analysis',
    'KPI and measurement frameworks',
    'Stakeholder interviews',
    'Card sorting',
    'Research process and repository',
    'AI-assisted research',
  ],
  tools: [
    'Figma',
    'Framer',
    'Useberry',
    'UXtweak',
    'Uxia',
    'GA4',
    'Amplitude',
    'Microsoft Clarity',
    'Claude',
    'Confluence',
    'Jira',
    'GitHub',
    'Notion',
  ],
  domain: ['Registration', 'Payments', 'Navigation', 'Tournaments', 'Affiliate funnels'],
  languages: ['Bulgarian (native)', 'English (C1–C2)'],

  experience: [
    {
      period: 'Dec 2025 – now',
      role: 'Junior UX Researcher',
      company: 'ALL IN Platform (iGaming)',
      text: 'Own UX research end to end across the brand portfolio. Led the Tournaments UX audit and redesign, benchmarked sign-up and payment UX, and launched the team’s research repository.',
    },
    {
      period: 'Jun 2025 – Dec 2025',
      role: 'UX Research Intern',
      company: 'ALL IN Platform (iGaming)',
      text: 'Analysed player friction with GA4, UXtweak and Clarity, built realistic Figma and Framer prototypes for unmoderated tests, and simplified core flows with a new bottom navigation bar.',
    },
    {
      period: 'Feb 2024 – May 2025',
      role: 'Operations Team Lead',
      company: 'TELUS Digital',
      text: 'Led a team of 50+, ran 100+ hiring interviews, and improved first-call resolution by 30% and productivity by 80%.',
    },
    {
      period: 'May 2023 – Jan 2024',
      role: 'Senior Customer Support Representative',
      company: 'TELUS Digital',
      text: 'Real-time floor support, team training, and process guides.',
    },
    {
      period: 'Apr 2022 – May 2023',
      role: 'Customer Support Representative',
      company: 'TELUS Digital',
      text: 'Technical and procedural support for customers.',
    },
  ],

  education: [
    { period: '2023', title: 'UX/UI Design, Upskill 22 Program', place: 'Telerik Academy, Sofia' },
    {
      period: '2021',
      title: 'BSc, Business Information Technologies',
      place: 'University of Plovdiv “Paisii Hilendarski”',
    },
    {
      period: '2018 – 2022',
      title: 'UX Design Advanced, UI Design, Design Fundamentals and more',
      place: 'Software University',
    },
  ],

  // Colleague references (from the original portfolio)
  testimonials: [
    {
      quote:
        'Being a good researcher means having a certain perspective on the world. Chefo already has this as an inner quality, which is why working with him is both valuable and inspiring. Stefan asks questions, explores and challenges perspectives.',
      name: 'Martina Demirova',
      title: 'UX Research Team Lead, ALL IN Platform',
    },
    {
      quote:
        'Always seeking to understand the context, rather than merely meeting the minimum requirements. Becoming increasingly quick and confident in his work. Should be proud of taking on real complex tasks boldly, while completing them to a high standard.',
      name: 'Hilda Miteva',
      title: 'UX Researcher, ALL IN Platform',
    },
    {
      quote:
        'A young and highly driven professional with great potential and a sharp eye for detail. His focus on UX research is impressive, complemented by a precise sense of UI and visual culture. Bold, well-reasoned, and always ready with thoughtful alternative solutions.',
      name: 'Aleksandar Parashkevov',
      title: 'Product Design Team Lead, ALL IN Platform',
    },
  ],
};
