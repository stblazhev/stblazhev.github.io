# Stefan Blazhev: UX Research portfolio

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
| Colours, fonts, text styles | `src/styles/global.css` (tokens on `:root`, dark mode below) |
| Page layout, header, footer | `src/layouts/Base.astro` |
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

Use `##` for main sections (they feed the "On this page" menu) and `###` for sub-sections:

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

## Commands

```bash
npm install        # once, after cloning
npm run dev        # local preview at http://localhost:4321 (shows drafts)
npm run build      # production build into dist/ (hides drafts)
```

Node 22.23 or newer is required.
