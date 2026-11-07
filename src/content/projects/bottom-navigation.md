---
title: 'One app, two mindsets: a bottom bar for casino and for sports'
summary: 'Players and the business wanted different things from the mobile navigation. I ran stakeholder interviews, a competitor benchmark and card sorts with players to turn that conflict into two mode-specific bottom bars, both of which shipped.'
context: 'Online casino and sportsbook · B2C · Mobile web · European market'
year: '2025'
role: 'UX Researcher, end to end'
timeline: 'Research phase, 2025'
team: 'Me, with a Product Manager from the Product team'
methods: ['Stakeholder interviews', 'Competitor benchmark', 'Closed card sorting', 'Jobs-to-be-done', 'Wireframing']
outcomes:
  - value: '2'
    label: 'mode-specific bottom bars shipped, Casino and Sports'
  - value: '4'
    label: 'stakeholder interviews, each with a sorting task'
  - value: '12'
    label: 'players across two card sorts, 6 per mode'
  - value: '1 in 6'
    label: 'players use both casino and sports'
tldr:
  - 'Casino and sports content shared one mobile navigation, so players of each had to work past content meant for the other.'
  - 'I combined stakeholder interviews, a competitor benchmark and two closed card sorts with players into rules for what earns a place in the bottom bar.'
  - 'Two bottom bars shipped, one per mode, balancing what players asked for with what the business needed.'
order: 1
---

<p class="note"><b>Research phase.</b> This case study covers the research up to the wireframes. The design and implementation phase, including the results after launch, is coming soon.</p>

## Context

The product is an online casino and sportsbook, used mostly on mobile. Casino games and sports betting lived in one shared navigation, so a sports bettor scrolled past slot categories and a casino player past football leagues.

The team wanted to separate the two: a bottom navigation of at most five tabs for each mode, and a way to switch between them. The work is under NDA, so the brand, market and internal figures are left out. Players were recruited in our biggest European market and tested in their own language.

## The challenge

Two questions decided the design:

1. **Which five items earn a place in the bottom bar** for casino players, and which for sports bettors?
2. **Do players need a one-tap Casino ↔ Sports switch,** and if they do, where should it sit?

### Constraints

- **Five tabs at most per mode,** and the switch counts as one of them.
- **Business requirements were fixed going in:** revenue areas such as Promotions and Live Casino had to stay easy to reach.
- **Legal pages, responsible gaming and verification must always be reachable,** even if not from the bar.
- **Markets differ.** Some markets have no sports betting at all, and other features are switched on or off per market, so the structure had to keep working when items are missing.

## My role

I ran the project alone, from planning the research to low and mid-fidelity wireframes. I planned and ran the stakeholder interviews and the competitor benchmark, wrote and launched both card sorts, analysed the results, and built the wireframes and the brief deck that handed the work to design.

I worked closely with the Product Manager responsible for navigation. They brought the business requirements, and together we balanced them against what the research showed.

## Approach

Each phase answered a question the previous one could not.

| Phase | Method | Why this method |
| --- | --- | --- |
| 1 | **Stakeholder interviews** (4 internal roles: product, sportsbook risk, sales and revenue, partner success) with a sorting task | To learn what the business needs the navigation to do, and to see each stakeholder's ideal bar before any players were involved |
| 1 | **Competitor benchmark** (a leading competitor plus other casino and sports brands with a mode switch) | To find the patterns players already know, so we don't invent new ones |
| 1 | **Analytics question** to the reporting team | To size how many players actually play both casino and sports, as real evidence for a switch |
| 2 | **Two closed card sorts** with players, one for Casino and one for Sports (26 cards each; pick 5 and order them) | The card list came from phase 1, so the question was which of these items players want, not how they would name them. A closed sort with a hard limit of five forces the same trade-off the real bar has. |
| 2 | **Pre- and post-task questions,** then **jobs-to-be-done** | Card sorts show *what* players pick. The questions explain *why*, and the jobs say what each tab has to help a player do. |
| 3 | **Low and mid-fidelity wireframes** and a brief deck | To turn the decisions into something the design team and stakeholders could react to |

Both card sorts were run unmoderated. Ten players were recruited per test and six usable sessions were analysed in each.

## What we found

### 1. Players and the business wanted different bars

In the casino sort, every tester picked **Account (6/6)** and almost all picked **Search (5/6)**. After those, they picked discovery shortcuts: New games, Popular and Tournaments, each chosen by 2 of 6.

The items the business considered essential (the Casino lobby, Live Casino, Promotions and the mode switch) were rarely or never picked. The game lobby, the main browse hub, was chosen by only 1 of 6 testers.

**So what:** neither list could simply win. I set rules for every slot: keep what most testers picked, add the anchors players expect from other sites, merge duplicates, and move niche items to the menu. My term for this was "user-led, business-safe".

### 2. For sports bettors the bar is a control panel for their bets

Sports bettors did not think in terms of discovery. They opened the site to check results or to bet on a live match, and the first thing they looked for was their ongoing bets.

> “I look first at the ongoing bets, the possible bets available.”
>
> Sports bettor, Sports card sort

My Bets and Sport Categories were the most-picked sports items (3/6 each). Several testers asked for a one-tap way to see results or follow live bets.

**So what:** Live Betting and My Bets had to be one tap away, because bettors keep returning to them during a match.

### 3. The switch matters a lot, but only to a minority

About 70% of casino testers rarely or never switch to sports, and none of them wanted the switch in the bottom bar. Among sports bettors it was the opposite: a few switch constantly, and 3 of 5 wanted the switch in the bar.

> “I switch quite often… maybe 5, 6, even 10 times during a football match. Usually to play Blackjack.”
>
> Sports bettor, Sports card sort

The analytics agreed: about **1 in 6 players** play both, but **2 in 3 sports bettors** also play casino. Three of the four stakeholders, separately, put the switch on the far left of a fixed bar.

**So what:** keep the switch, always in the same far-left slot, so it never moves under the thumb of the players who rely on it.

### 4. Account is where players feel in control, so a Deposit tab is redundant

Players treated their account as the place where money and trust live. Several checked their balance before choosing a game.

> “At first, I added Deposit in the navigation, but then I realized it’s already inside My Profile. So I replaced it.”
>
> Casino player, Casino card sort

**So what:** Deposit did not get a tab. It stays as an always-visible action next to the balance, which leaves the bar's slots for navigation.

## From insights to decisions

| Insight | Decision in the proposal | What was left out, and why |
| --- | --- | --- |
| Players want discovery and account access; the business needs its browse hubs | Casino lobby as the hub (later also holding search and filters), plus one discovery tab | Tournaments, VIP and the bonus variants: few picks, and they fragment the bar. Moved to the menu. |
| Sports bettors return to the same few pages again and again | Live Betting and My Bets one tap away | Bet-history variants and notifications: useful, but not something you navigate to from the bar |
| The switch is vital for a minority | A fixed switch in the far-left slot | A floating switch: one stakeholder liked it, but it competes with content and moves around |
| Account already covers money actions | No Deposit tab; Deposit stays next to the balance | A separate Withdraw tab, for the same reason |

I also wrote success measures for each proposal, so the team would know whether it worked after launch:

- at least 80% task success
- no more than 2 taps from home to the first game or event
- no increase in "can't find" support tickets

### What shipped

The final bars balanced my proposals with business requirements the Product team set. Live Casino and Promotions, which players rarely picked but the business relies on, took slots in the bar, and Account moved out of it.

<p class="tabbar-label">Casino</p>
<div class="tabbar" role="img" aria-label="Casino bottom bar: Switch, Casino, Live Casino, Search, Promotions"><span>Switch</span><span>Casino</span><span>Live Casino</span><span>Search</span><span>Promotions</span></div>

<p class="tabbar-label">Sports</p>
<div class="tabbar" role="img" aria-label="Sports bottom bar: Switch, Sport, Live Betting, Virtuals, Promotions"><span>Switch</span><span>Sport</span><span>Live Betting</span><span>Virtuals</span><span>Promotions</span></div>

*The two bars as shipped, redrawn without branding.*

In markets without sports betting, players see only the Casino bar, without the switch. Because the switch has its own fixed slot on the far left, removing it leaves the other tabs in the same order. Players get the same layout in every market, and no market needs its own version of the bar.

For now nothing takes the empty slot, so casino-only markets have a four-tab bar. That leaves room to add a fifth tab there later without changing the rest of the bar.

## Design and implementation

<p class="note"><b>Coming soon.</b> The next part covers how the wireframes became the final interface and how the new navigation performed after launch.</p>

## Reflection

- **The samples were small.** With six usable sessions per sort, the results show direction, not certainty. That is why I paired them with stakeholder input, a benchmark and real play data rather than letting the card sorts decide alone.
- **One market, one language.** Navigation habits differ between markets, so the bars should be checked before rolling out elsewhere.
- **A card sort measures preference, not performance.** Players told us what they want in the bar, not whether they can find things with it. Next time I would add a quick first-click or tree test on the wireframes before handover.
- **What I learned:** research rarely hands over a finished answer when business needs are fixed. Writing clear rules for what earns a tab made the trade-offs easier to discuss with the Product Manager than arguing item by item.
