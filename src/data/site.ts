// Everything personal about the site lives here. Edit these values, not the pages.
// Empty strings and empty lists are hidden on the site.
export const site = {
  // Branding: flask logo + "UXRD Lab" (UX Research and Design Lab)
  brand: 'UXRD Lab',
  brandFull: 'UX Research and Design Lab',
  logo: '/brand/flask.png',

  name: 'Stefan Blazhev',
  displayName: 'Stefan Blazhev',
  // Small round portrait, shown next to the name. Leave empty to hide.
  photo: '/brand/stefan.jpg',
  role: 'UX Researcher · iGaming',

  // Browser tab and link previews.
  description:
    'Stefan Blazhev is a UX researcher in iGaming who owns research end to end, from objectives and methods to prioritised recommendations for Product.',

  // Home page hero
  headline: 'UX Research and Design Lab',
  // Words in the headline that get the purple highlighter stroke. Empty for none.
  headlineMark: 'Research and Design',
  intro:
    'UX researcher in iGaming, across casino and sports betting. I own research end to end, from the research question and method to prioritised recommendations for Product, and combine usability testing with product analytics. I also design: I turn findings into wireframes and work with designers until the solution ships.',
  motto: 'Get to know your user first, then think about the rest.',

  // Headline results shown on the home page as flip cards.
  // viz: the small animated picture on the front (bars = growth | drop = reduction | nav = bottom navigation | people | tally).
  // The back of the card tells where the number comes from.
  highlights: [
    {
      value: '40%',
      label: 'shorter sign-up time after an optimised registration flow',
      viz: 'drop',
      where: 'Registration and login flow',
      org: 'ALL IN Platform',
      story: 'Research into where players lost time and dropped out of sign-up shaped an optimised registration flow.',
      tag: 'Case study coming soon',
    },
    {
      value: '2',
      label: 'mode-specific bottom bars shipped as one reusable platform component',
      viz: 'nav',
      where: 'Bottom navigation bar',
      org: 'ALL IN Platform',
      story: 'Stakeholder interviews and card sorts with players shaped separate Casino and Sports bars. Key pages moved from the top of the screen to one tap, within thumb reach.',
      tag: 'Case study published',
    },
    {
      value: '50+',
      label: 'people led as an operations team lead',
      viz: 'people',
      where: 'Operations Team Lead',
      org: 'TELUS Digital',
      story: 'Led a team of 50+ and improved first-call resolution by 30% and productivity by 80%.',
      tag: '',
    },
    {
      value: '100+',
      label: 'hiring interviews run',
      viz: 'tally',
      where: 'Hiring and coaching',
      org: 'TELUS Digital',
      story: 'Ran 100+ hiring interviews, which is where interviewing people properly first became a habit.',
      tag: '',
    },
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

  // Research process (from the original portfolio). Shown as the interactive
  // "research loop" on the home page: `uses` are the chips, `output` is what the step hands over.
  approach: [
    {
      title: 'Uncover the unknown',
      short: 'Discover',
      text: 'Through exploration and empathy, identify the user needs, motivations and pain points that shape every project.',
      uses: ['Stakeholder interviews', 'Competitive analysis', 'GA4 and Clarity data'],
      output: 'Research questions and hypotheses',
    },
    {
      title: 'Make sense of the mess',
      short: 'Synthesise',
      text: 'Synthesise findings into clear insights and actionable problem statements that guide design decisions.',
      uses: ['Funnel analysis', 'Session recordings', 'Thematic synthesis'],
      output: 'Insights and problem statements',
    },
    {
      title: 'Prototype, test, repeat',
      short: 'Test',
      text: 'Bring ideas to life through iterative testing, validating assumptions and refining solutions with real user and stakeholder feedback.',
      uses: ['Figma and Framer prototypes', 'Useberry and UXtweak tests', 'Concept and preference tests'],
      output: 'Validated flows',
    },
    {
      title: 'Insight into action',
      short: 'Act',
      text: 'Translate research outcomes into strategic recommendations that drive design and business results.',
      uses: ['Prioritised recommendations', 'KPI frameworks', 'Stakeholder readouts'],
      output: 'Decisions Product can act on',
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

  // Education is shown as a "learning map" on the About page: one lane for formal
  // education, one for side education. `year` places the stop on the map, `when` is the
  // date shown in the details, `short` is the label on the map, `detail` is the grey badge
  // (grade, award level), `focus` lists subjects. Keep each list in date order.
  education: [
    {
      year: 2017,
      when: '2017',
      short: 'Secondary',
      title: 'Secondary Education',
      place: '“Dimitar Blagoev” Secondary School, Svishtov',
      type: 'Secondary school',
      detail: 'Average grade 5.75 / 6.00',
      focus: ['Graphic design', 'History of arts', 'Informatics', 'Mathematics', 'Foreign languages'],
    },
    {
      year: 2021,
      when: '2021',
      short: 'Bachelor’s',
      title: 'Bachelor’s Degree, Business Information Technologies',
      place: 'University of Plovdiv “Paisii Hilendarski”',
      type: 'Bachelor’s degree',
      detail: 'Average grade 5.52 / 6.00',
      focus: ['Programming', 'Mathematics', 'Marketing', 'Graphic design', 'Prepress'],
    },
    {
      year: 2023,
      when: '2023',
      short: 'Telerik UX/UI Design',
      title: 'Telerik UX/UI Design, Upskill 22 Program',
      place: 'Telerik Academy, Sofia',
      type: 'Upskill program',
      detail: 'Final score 83.33%',
      focus: [],
    },
  ],
  sideEducation: [
    {
      year: 2015,
      when: 'March 2015',
      short: 'Web basics',
      title: 'HTML, PHP and MySQL',
      place: 'Business Academy “D. A. Tsenov”, Svishtov',
      type: 'Course',
      detail: '',
    },
    {
      year: 2017,
      when: '2017 – 2020',
      short: 'Duke of Edinburgh',
      title: 'The Duke of Edinburgh’s International Award',
      place: 'Bronze, Silver and Gold certificates and badges',
      type: 'Award',
      detail: '',
    },
    { year: 2018, when: 'October 2018', short: 'Design basics', title: 'Design Fundamentals', place: 'Software University', type: 'Course', detail: '' },
    { year: 2019, when: 'January 2019', short: 'Photoshop', title: 'Graphic Design with Photoshop', place: 'Software University', type: 'Course', detail: '' },
    {
      year: 2019,
      when: 'December 2019',
      short: 'Erasmus+',
      title: 'Erasmus+ Project “Resistance” (SEYF)',
      place: 'Italy',
      type: 'Youth exchange',
      detail: 'Youthpass',
    },
    { year: 2020, when: 'November 2020', short: 'Marketing', title: 'Marketing Basics', place: 'Software University', type: 'Course', detail: '' },
    { year: 2021, when: 'January 2021', short: 'UI Design', title: 'UI Design', place: 'Software University', type: 'Course', detail: '' },
    { year: 2022, when: 'June 2022', short: 'UX Advanced', title: 'UX Design Advanced', place: 'Software University', type: 'Course', detail: '' },
  ],

  // Colleague references (from the original portfolio)
  testimonials: [
    {
      quote:
        'Being a good researcher means having a certain perspective on the world. He already has this as an inner quality, which is why working with him is both valuable and inspiring. Stefan asks questions, explores and challenges perspectives.',
      name: 'Martina Demirova',
      title: 'UX Research Team Lead, ALL IN Platform',
      avatar: '/people/martina.png',
    },
    {
      quote:
        'Always seeking to understand the context, rather than merely meeting the minimum requirements. Becoming increasingly quick and confident in his work. Should be proud of taking on real complex tasks boldly, while completing them to a high standard.',
      name: 'Hilda Miteva',
      title: 'UX Researcher, ALL IN Platform',
      avatar: '/people/hilda.png',
    },
    {
      quote:
        'A young and highly driven professional with great potential and a sharp eye for detail. His focus on UX research is impressive, complemented by a precise sense of UI and visual culture. Bold, well-reasoned, and always ready with thoughtful alternative solutions.',
      name: 'Aleksandar Parashkevov',
      title: 'Product Design Team Lead, ALL IN Platform',
      avatar: '/people/aleksandar.png',
    },
  ],
};
