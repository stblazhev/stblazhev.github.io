# UXRD Lab: Stefan Blazhev's portfolio

Personal portfolio site. Static site built with [Astro](https://docs.astro.build), hosted on GitHub Pages at https://stblazhev.github.io. Every push to `main` deploys automatically (`.github/workflows/deploy.yml`).

This file is the handover for any Claude session or developer picking up the work. It should be enough to continue without any earlier conversation.

## Ownership rules

- The repository, hosting and any domain belong to Stefan's **personal** GitHub account `stblazhev`. Never move them to a company organization or a work account.
- Commits use the GitHub no-reply address of `stblazhev`, set in this repository's local git config.
- Case studies come from past employment. **Anonymise them**: no client or employer names under NDA, no confidential numbers, no internal screenshots with real user data. Describe companies by type (for example "a multi-market online casino platform"). Ask Stefan when unsure.

## Where things are

| What | Where |
| --- | --- |
| Name, headline, intro, contact, About page text, methods, tools, experience | `src/data/site.ts` |
| Case studies (one Markdown file each) | `src/content/projects/*.md` |
| Case study fields (the frontmatter schema) | `src/content.config.ts` |
| Images for a case study | `public/projects/<slug>/` referenced as `/projects/<slug>/file.png` |
| Colours, fonts, shared components (cards, badges, buttons, tiles, KPIs) | `src/styles/global.css` (tokens on `:root`) |
| Page shell: side nav (pages only), sticky section bar with scroll spy, contact dialog, scroll reveal, KPI count-up, footer | `src/layouts/Base.astro` |
| Highlights flip cards (number count-up, animated picture, story on the back; content from `site.highlights`) | `src/components/Highlights.astro` |
| About > Education "learning map" (two lanes on a year axis: `site.education` = formal, `site.sideEducation` = courses, awards, exchanges; filter, pick a stop for details) | `src/components/LearningMap.astro` |
| "How I work" research loop (ring + tabs, autoplay; content from `site.approach`) | `src/components/ResearchLoop.astro` |
| Icons | `src/components/Icon.astro` |

## Design

The look follows Stefan's Backoffice V3 redesign (Figma): Poppins, a cool grey background (`#F5F8FA`), white cards with 16px corners and a light border, a left side nav whose active item is light green (`#F0FFF0` with a `#6BED6A` border), grey badges, and tables with uppercase grey headers and zebra rows. Light mode only. Keep new elements inside cards and reuse the existing classes rather than adding new styles.
| Home, About, case study, 404 pages | `src/pages/` |

Empty strings and empty lists in `site.ts` are hidden on the site (for example, contact links only appear once filled in).

## Adding a case study

1. Copy `src/content/projects/example-case-study.md` to `src/content/projects/<short-slug>.md`. The filename becomes the URL: `/work/<short-slug>/`.
2. Fill in the frontmatter. `summary` is one sentence covering problem and result. `outcomes` are 2 to 4 headline numbers. `tldr` is 3 bullets. `order` sets position on the home page (lower is higher).
3. Write the body in the standard structure below.
4. Put images in `public/projects/<short-slug>/`. A cover image (`cover`) is optional; without it the home page shows an arrow instead of a thumbnail.
5. Set `draft: true` while writing. Drafts appear with `npm run dev` but are never built for the live site.
6. Run `npm run build` to check, then commit and push to `main`.

### Case study structure

Use `##` for main sections (they become chips in the sticky section bar at the top) and `###` for sub-sections:

1. **Context**: product type, users, business problem.
2. **The challenge**: the research question and the decision that depended on it, plus constraints.
3. **My role**: what Stefan personally did, and with whom.
4. **Approach**: each method and why it fit the question. A table works well.
5. **What we found**: 2 to 4 insights. Each one: a one-sentence claim, evidence, consequence.
6. **Recommendations and impact**: what changed because of the research, with numbers when shareable.
7. **Reflection**: what Stefan would do differently and what he learned.

Formatting conventions:

- Participant quotes are blockquotes. The quote goes on the first line, then an empty `>` line, then the attribution (`Participant 4, Mexico`).
- Image captions are an italic line directly after the image: `*Caption text.*`
- Tables are fine for comparison matrices; they scroll sideways on mobile.

### Writing style

Plain, direct, first person. Lead with the decision the research informed, not the method. Prefer concrete numbers and observed behaviour over adjectives. Keep each case study readable in about 5 to 7 minutes.

## Branding

The brand is **UXRD Lab**, short for **UX Research and Design Lab**, with a purple flask logo (`public/brand/flask.png`, also the favicon). It evolved from Stefan's original Framer portfolio (uxrlab-portfolio.framer.website). Do not use any nickname; the site uses only his full name. The flask stays purple even though the interface accent is green.

## Planned case studies

Projects listed on the original portfolio, to be written up when Stefan provides the material (do not invent details):

1. **Smooth user registration and login flow**: usability tests, UX research and UI design, Framer prototype with native-keyboard inputs. Result: 40% increase in first-time deposits (FTDs).
2. **Octopush: a UX strategy that made productivity personal**: visual research, UX strategy and testing, high-fidelity prototyping.
3. **Bottom bar implementation**: card sorting and question tests, stakeholder interviews, wireframing. Result: 9x faster user flow with a guarded content switch.
4. **Burger menu restructure**: user needs insights, competitive analysis, high-fidelity prototyping.

From the CV, other candidates: Tournaments UX audit and redesign with a GA4 KPI framework, affiliate funnel UX blockers, sign-up and payment competitor benchmarks, social sign-up for the redesigned registration flow, new brand concept test, and the AI-assisted research process and repository.

## Commands

```bash
npm install        # once, after cloning
npm run dev        # local preview at http://localhost:4321 (shows drafts)
npm run build      # production build into dist/ (hides drafts)
```

Node 22.23 or newer is required.

## Navigation rules

- The side nav lists pages only (Work, About). Never add an item there that scrolls within a page.
- Each page passes `sections` ({ id, text }[]) to `Base`; they show as the sticky section bar. Give every section card a matching `id`.
- "Get in touch" is an action, not a page: any link with `data-contact` opens the contact dialog (it falls back to `mailto:` without JavaScript).
- All motion respects `prefers-reduced-motion`; the research loop also has a pause button.
- Colour: green (`--accent`) is the system colour. The logo purple (`--pop*` tokens, `.btn.pop`, `.badge.pop`) is an attention colour, kept to a few places: the Get in touch / Write an email buttons (tinted, never filled), the hero typing word, the headline highlighter (`site.headlineMark`) and the back of the highlight cards. Do not spread it further.
- The side panel has one contact action (Get in touch). Email, LinkedIn and CV live inside the contact dialog only.
- Desktop side nav is a 72px icon rail that widens to 248px on hover or keyboard focus and pushes the content aside, never covering it; it is only as tall as its items (Base.astro, "Collapsing rail"). Below 900px it is a top bar.
- Pointer glow: add `data-spot` to a card and `<span class="spot" aria-hidden="true"></span>` as its first child (Home intro, About me).
- Pages can pass `next` to `Base` for the "Where next?" tiles at the end; `href: 'contact'` opens the contact dialog.
- About > Experience is a timeline; a role whose period contains "now" is highlighted as the current role.
- About > Education keeps formal education (`site.education`: school, Bachelor's, programs) apart from side education (`site.sideEducation`: courses, awards, youth exchanges). Each entry needs `year` (placement), `when` (shown date), `short` (map label) and `type`; `detail` is an optional badge (grade, award level). Stops sharing a lane and year stack in one cell. Newest first, like the Experience list: wide screens put the newest year on the left, below 1100px on top.
