---
title: 'One app, two mindsets: a bottom bar for casino and for sports'
summary: 'Players and the business wanted different things from the mobile navigation. I ran stakeholder interviews, a competitor benchmark and card sorts with players to turn that conflict into two mode-specific bottom bars, which shipped as a reusable component across the platform.'
context: 'All In Platform · B2B iGaming platform · Casino and sportsbook · Mobile web'
year: '2025'
role: 'UX Researcher, end to end'
timeline: 'Research to launch, 2025'
team: 'Me, with a Product Manager, the CPO and the Product Design team'
methods: ['Stakeholder interviews', 'Competitor benchmark', 'Closed card sorting', 'Jobs-to-be-done', 'Wireframing', 'Design reviews']
outcomes:
  - value: '2'
    label: 'mode-specific bottom bars shipped as one reusable platform component'
  - value: '4'
    label: 'stakeholder interviews, each with a sorting task'
  - value: '12'
    label: 'players across two card sorts, 6 per mode'
  - value: '1 in 6'
    label: 'players use both casino and sports'
tldr:
  - 'Casino and sports content shared one mobile navigation, so players of each had to work past content meant for the other.'
  - 'I combined stakeholder interviews, a competitor benchmark and two closed card sorts with players into rules for what earns a place in the bottom bar.'
  - 'Two bottom bars shipped, one per mode, as a design-system component every brand on the platform can reuse. They balance what players asked for with what the business needed.'
order: 1
---

## Context

All In Platform is a B2B iGaming platform: many casino and sportsbook brands run on it and share its design system. On mobile, casino games and sports betting lived in one shared navigation, so a sports bettor scrolled past slot categories and a casino player past football leagues.

The team wanted to separate the two: a bottom navigation of at most five tabs for each mode, and a way to switch between them. It had to work as one component that every brand on the platform could reuse. The research was run for one brand on the platform, whose name, market and internal figures are left out under NDA. Players were recruited in its biggest European market and tested in their own language.

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

I worked closely with the Product Manager responsible for navigation, and agreed the business requirements with the CPO. Together we balanced those requirements against what the research showed. For the design, I worked with the Product Design team, who took my wireframes to the final interface. I reviewed their work every day, ran checks as it changed, and joined the day-to-day meetings where we discussed, changed and improved it.

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

- **Casino:** Switch · Casino · Live Casino · Search · Promotions. Logged-in members see My Bonuses in place of Promotions.
- **Sports:** Switch · Sport · Live Betting · Virtuals · Promotions. Logged-in members see My Bets and My Bonuses in place of Virtuals and Promotions.

The final design of both bars is shown under [Design and implementation](#the-final-design).

In markets without sports betting, players see only the Casino bar, without the switch. Because the switch has its own fixed slot on the far left, removing it leaves the other tabs in the same order. Players get the same layout in every market, and no market needs its own version of the bar.

For now nothing takes the empty slot, so casino-only markets have a four-tab bar. That leaves room to add a fifth tab there later without changing the rest of the bar.

## Design and implementation

### From wireframes to the final interface

I handed my low and mid-fidelity wireframes and the brief deck to the Product Design team, who designed the final interface. I stayed involved every day: reviewing each version, checking it against the research, and adjusting it with them in our day-to-day meetings.

![The old top navigation: a menu button, the balance and a row of categories that scrolls sideways.](/projects/bottom-navigation/old-top-nav.jpg)

*Before: everything sat at the top of the screen, out of thumb reach. Categories scrolled sideways, so anything past the edge of the screen was hidden.*

The old navigation was a top bar with a row of categories that scrolled sideways. Stakeholders had already named this as a pain point in the interviews: whatever didn't fit on screen was effectively invisible. The new bar sits at the bottom, floats above the page, and shows every tab at once.

### An earlier iteration

The Product Design team went through several iterations before the final one. In this earlier version, the bar was dark and see-through, floating over the page content, and the current tab was not highlighted.

We used this version to test something a floating bar has to survive: the browser's own toolbars, which sit in different places on iOS and Android. We checked it in Safari and Chrome on iOS, Chrome on Android and the installed web app, so it always sits clear of them.

![An earlier iteration of the Casino bar in four environments: Safari on iOS, Chrome on iOS, Chrome on Android and the installed web app.](/projects/bottom-navigation/browsers.jpg)

*An earlier iteration, checked in four environments. This is not the design that shipped; the final one follows below.*

### The final design

The shipped bar is still see-through, but the current tab is now green, so players can always see where they are, and the switch sits in its own cell at the left edge.

![The shipped bars. Casino for guests: Casino, Live Casino, Search, Promotions; for members the last tab is My Bonuses. Sports for guests: Sport, Live Betting, Virtuals, Promotions; for members: Sport, Live Betting, My Bets, My Bonuses.](/projects/bottom-navigation/final-bars.jpg)

*The bars as shipped, for guests and for logged-in members.*

Several details came straight from the research:

- **The switch keeps its own place.** It sits in a fixed slot on the far left, separate from the tabs, so it never moves under the thumb of the players who switch often.
- **The tabs follow the player's state.** Guests see Promotions, the offers that bring them in. Logged-in members see My Bonuses, the bonuses they already have, and in Sports they also get My Bets, because only a member has bets to track. Both come from the research: bettors keep returning to their ongoing bets, and bonuses are one of the main reasons players come back.
- **One component for every brand.** The bar is part of the platform's design system, so any brand can use it. Brands in markets without sports betting simply don't show the switch or the Sports bar.

### Results

The new navigation has shipped, but its impact has not been measured yet, so I am not claiming any numbers. The success measures from the research are the plan for checking it:

- at least 80% task success
- no more than 2 taps from home to the first game or event
- no increase in "can't find" support tickets

## Reflection

- **The samples were small.** With six usable sessions per sort, the results show direction, not certainty. That is why I paired them with stakeholder input, a benchmark and real play data rather than letting the card sorts decide alone.
- **One market, one language.** Navigation habits differ between markets, so the bars should be checked before rolling out elsewhere.
- **A card sort measures preference, not performance.** Players told us what they want in the bar, not whether they can find things with it. Next time I would add a quick first-click or tree test on the wireframes before handover.
- **What I would change in the design: the switch.** Its two mode icons are both round and turn the same colour when active, so at first glance Casino and Sports look alike. The current look was partly shaped by business decisions, so I would keep it on our own sites. In the design system, though, I would let each brand choose the switch's icons and colours, so it can make the current mode clearer for its players.
- **What I learned:** research rarely hands over a finished answer when business needs are fixed. Writing clear rules for what earns a tab made the trade-offs easier to discuss with the Product Manager than arguing item by item.
