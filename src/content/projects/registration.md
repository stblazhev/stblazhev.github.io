---
title: 'From a long form to a quick sign-up: registration in two phases'
summary: 'Players dropped out of a three-step registration that asked for everything upfront. I redesigned and tested a shorter form that is now live, then researched and specified a quick sign-up for new LatAm markets that lets players in first and asks for the rest at their first deposit.'
context: 'All In Platform · B2B iGaming platform · Casino and sportsbook · Mobile web'
year: '2025–2026'
role: 'UX Researcher, end to end'
timeline: 'Two phases, 2025–2026'
team: 'Me, with the Product Manager and the Product Design team'
methods: ['Session-recording analysis', 'UX audit', 'Usability testing', 'Competitor benchmarks', 'Prototyping', 'Wireframing', 'Design reviews']
outcomes:
  - value: '82'
    label: 'SUS score for the redesigned registration, in the "excellent" range'
  - value: '6/6'
    label: 'design hypotheses confirmed in usability testing'
  - value: '11'
    label: 'players in the unmoderated mobile test'
  - value: '2'
    label: 'steps instead of 3 in the registration that is now live'
tldr:
  - 'Session recordings showed players dropping out of a three-step registration that looked like the login screen and asked for everything upfront.'
  - 'Phase 1: I turned the friction into six hypotheses, built a prototype and tested it with 11 players. All six held, and the two-step form is now live.'
  - 'Phase 2: for new LatAm markets, competitor benchmarks showed players trust calm flows more than fast ones. The quick sign-up I recommended, email and password first and the rest at the first deposit, is designed and ready for development.'
order: 2
---

## Context

All In Platform is a B2B iGaming platform: many casino and sportsbook brands run on it and share its design system. Registration is the moment that decides whether a visitor becomes a player, so it matters to every brand on the platform.

This project ran in two phases for one brand on the platform, whose name and figures stay out under NDA:

- **Phase 1** fixed the existing registration form, tested with players in the brand's largest European market.
- **Phase 2** added a quick sign-up for new markets in Latin America.

## The challenge

1. **Phase 1:** why do players drop out of registration, and what would make it easier to finish?
2. **Phase 2:** how short can sign-up become in new markets without losing players' trust or breaking licence rules?

### Constraints

- **Regulation sets the minimum.** A licence decides which personal details must be collected before a player can deposit, and the rules differ between licences.
- **Bonuses are part of the product.** The welcome offer is a business requirement, so the question was where it goes, not whether.
- **One design, many brands.** Everything had to work as part of the platform's shared design system.

## My role

In **Phase 1** I ran the work end to end:

- analysed session recordings and audited the live flow
- wrote the hypotheses and designed the prototype
- ran the usability test, analysed it and presented the report

In **Phase 2** I did the research and the first design:

- competitor benchmarks across LatAm markets
- tests of how social sign-up links accounts
- the sign-up logic options and the questions for Compliance
- wireframes, versions 1 to 3

The final interface was designed by the Product Design team, and I reviewed it with the Product Manager. I worked with the Product Manager throughout.

## Phase 1: fixing the registration form

### Where players got stuck

Over time I watched dozens of session recordings of the live login and registration. The same patterns kept coming back:

- **Login and registration looked almost identical,** so players tapped the wrong one and went back and forth.
- **Three steps felt long,** and players dropped out before seeing anything of value.
- **The password rules only showed up as red errors after submitting,** so players guessed and failed in a loop.
- **The date-of-birth calendar made people scroll** through years and months.
- **The Casino / Sport preference was easy to miss.**

An attention audit of the live screens backed this up:

- the email, password and name fields drew only 2.4–5.9% of attention
- the phone field drew 1.2%
- the "Log in" link drew players away from registering

### Six hypotheses

I turned each friction point into a hypothesis with a fix and a way to measure it:

| # | Hypothesis | The fix in the prototype |
| --- | --- | --- |
| 1 | Fewer steps feel faster and lead to more completions | Merged steps 1 and 2: three steps became two, with a clear progress indicator |
| 2 | Making login and registration look different ends the mix-ups | Different headlines, labels, icons and layout for each |
| 3 | Showing the bonus first gives players a reason to continue | A bonus choice as step zero, with a "Claim later" option |
| 4 | Live feedback reduces password errors | A checklist that ticks off each rule as you type, no red warnings |
| 5 | Typing the date is easier than scrolling a calendar | A date field you can type into, plus a faster calendar |
| 6 | The preference gets noticed when it comes later | Moved further down the form, with clear icons |

### Testing it

I built a fully interactive prototype, including a custom phone keyboard, so the test felt like a real phone. I then ran an unmoderated mobile test with **11 casino players** in that market, in their own language, on Android and iOS.

Each session took 12–15 minutes:
1. six tasks, thinking aloud
2. the System Usability Scale questionnaire
3. six open questions about the experience

### What we found

All six hypotheses were confirmed:

| Hypothesis | What happened |
| --- | --- |
| Two steps instead of three | 9 of 11 found it clear and quick; 2 would prefer a single page |
| Login vs registration | 11 of 11 found "Register" straight away, with no mix-ups |
| Bonus first | 7 of 11 found it natural and motivating; 3 were surprised but fine; 1 wasn't sure what to do |
| Live password checklist | 10 of 11 passed first time; the one mistake was fixed on the spot |
| Typed date of birth | 9 of 11 typed the date; only 2 used the calendar |
| Preference later in the form | 11 of 11 noticed and chose it |

Login and password recovery worked for everyone too: 11 of 11 logged in without errors and found "Forgot password" where they expected it.

> “The forgotten password was very easy to find, and I found it exactly where I expected it to be.”
>
> Player, usability test

The overall **SUS score was about 82**, in the "excellent" range. 10 of 11 said they would feel confident registering for real, and nobody rated the experience worse than other casinos.

The test also pointed to what was still missing:

> “A little too long. I would have preferred everything on the same page.”
>
> Player, usability test

Three players wanted a single page. 10 of 11 normally sign up with email and a password, while 5 also use Google or Apple. Both points fed straight into Phase 2.

### What shipped

The two-step registration is now live: account details first, then personal details. It keeps the live password checklist and the typed date of birth. The design also asks "Leave without registering?" when a player tries to close the form halfway.

![The live registration: step 1 with email, password and the password checklist; step 2 with personal details; and the check when a player tries to leave halfway.](/projects/registration/phase1-shipped.jpg)

*The registration as it ships, on the platform's own brand.*

**One finding changed the design.** Because 3 of 11 players were surprised to see the bonus first, the bonus choice moves to after the account is created ("Choose your bonus, applied on your first deposit"). It comes in a later release.

## Phase 2: a quick sign-up for new markets

### What the market showed

Before expanding into Latin America, I studied how players there sign up:

- a benchmark of local competitors, with recorded sign-up and first-deposit sessions
- a second benchmark of six competitors across seven journey stages
- a walkthrough of a competitor's Google and Apple sign-up
- tests of how four casinos link social and email accounts

Four findings shaped the decision:

1. **Trust beats speed.** The fastest competitor flows took about a minute or less, but players did not simply choose the fastest path. They chose the one that felt safe.
2. **Email is the default.** Phone numbers early on felt intrusive, and local payment methods were a strong trust signal.
3. **Our sign-up asked for everything upfront.** Compared with the market, it had 11 required fields, email only, and sent players to the homepage rather than the cashier.
4. **Social sign-up is messy underneath.** Google never linked to an existing email account, Apple linked by email, and Apple's hidden-email option broke the flow. A competitor's "quick" social sign-up still asked for a password.

> In the markets we studied, players don't reward speed alone. They reward calm, predictable, low-exposure flows that look safe.
>
> Key insight, LatAm research

### Choosing the sign-up logic

I mapped six sign-up logics, from one-click accounts to magic links. The three that survived were reworked into a "gated" pattern: a short sign-up, browsing straight away, and a form for the rest of the details at the first deposit.

| Logic | Trust | Speed | Drop-off risk | Verdict |
| --- | --- | --- | --- | --- |
| Email + password | High | Good | Low | **Default** |
| Magic link, blocked until verified | Highest | Slower | Medium | Only where the brand is already trusted |
| Phone first, with an SMS code | Medium | Good | High | Avoid as the default |

### The hard part: Compliance

The recommendation clashed with Compliance's answers: no browsing before full details, and the full address required at registration. The licence was not decided yet.

I raised the conflict openly rather than designing around it. One option on my board was to treat the quick account as **not yet registered** until all the required details are in. That became the basis of the final design.

### From wireframes to the final design

My wireframes went through three versions. The key idea held: one gate, many triggers. Whenever a player tries something that needs a full account, they get the same "complete your profile" step:
- playing for real money
- opening the cashier
- claiming a bonus

The Product Design team turned this into the final design, which I reviewed with the Product Manager:

- **The quick sign-up asks only for email, password, country and the chosen offer.** The player starts in a "pre-registered" state and can look around straight away.
- **The full details come at the first deposit:** "Complete your account to deposit. It takes about a minute." The full registration then collects every field the licence requires.
- **Google and Apple sign-up** come in a second release, with the account-linking cases my research flagged: verifying ownership, the wrong provider account, and Apple's hidden email.

![The quick sign-up: email, password and country; choosing a welcome offer; and Apple sign-up with the details it can fill in.](/projects/registration/phase2-signup.jpg)

*Quick sign-up, choosing an offer, and Apple sign-up. The screens use placeholder data.*

![The gate at the first deposit, "Complete your account to deposit", and the full registration form that follows.](/projects/registration/phase2-gate.jpg)

*The player signs up fast, and completes the full registration only when they want to deposit.*

The final specification covers about 120 screen states, including:
- email confirmation
- security checks
- blocked and self-excluded accounts
- demo play with a legal-age check
- a privacy-safe message when someone signs up with an email that already exists

## Results

**Phase 1 is live.** I haven't measured a precise figure yet. Session recordings since launch show players moving through registration faster and finishing it more often. The test results above are the evidence I can stand behind.

**Phase 2 is designed and specified, but not live yet.** It will be measured on:

- sign-up completion
- time to register
- how many pre-registered players go on to complete the full registration and deposit

## What came next

Two follow-up concepts grew out of Phase 1:

- **Keeping players who leave halfway.** I explored three exit messages, each with a clear "Later" option and no fake timers or bonus pressure. The shipped design uses a simple "Leave without registering?" check.
- **Bringing players back easily.** A returning player sees "Welcome back" with their email already filled in, so they only type their password. Players on a new device get a "Remember this device" option. I designed the flows and the login tracking events for it.

## Reflection

- **Measure before launch, not after.** I relied on session recordings to judge whether registration got faster. Next time I would set up funnel timing in analytics before the change goes live, so the improvement can be stated as a number.
- **The sample was small and the test ran on a prototype.** Eleven players in one market show direction, not certainty, and a prototype is not the live site. Pairing the test with recordings of real players made the conclusions stronger.
- **Bring Compliance in at the start.** In Phase 2 the strongest UX recommendation clashed with regulation. Raising it early, and offering an option that respected both, saved the design from being rejected late.
- **Listen to the minority.** Only 3 of 11 players were surprised by the bonus coming first, but that was enough to move it, and the design is better for it.
