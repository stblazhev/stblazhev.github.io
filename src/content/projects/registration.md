---
title: 'From a long form to a quick sign-up: registration in two phases'
summary: 'Players dropped out of a three-step registration that asked for everything upfront. I redesigned and tested a shorter form that is now live, then researched and specified a quick sign-up for new LatAm markets that lets players in first and asks for the rest at their first deposit.'
context: 'All In Platform · B2B iGaming platform · Casino and sportsbook · Mobile web'
year: '2025–2026'
role: 'UX Researcher, end to end'
timeline: 'Two phases, 2025–2026'
team: 'Me, with the Product Manager and the Product Design team'
methods: ['Session-recording analysis', 'UX audit', 'Usability testing', 'Competitor benchmarks', 'Wireframing', 'High-fidelity prototyping', 'Design reviews']
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
preview: ['/projects/registration/thumbs/q2-signup.jpg', '/projects/registration/thumbs/q3-offer.jpg', '/projects/registration/thumbs/q5-ready.jpg']
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
- high-fidelity screens and prototypes, to discuss the direction with the Product Design team before they started the final work

The Product Design team then designed the final interface. I supported them along the way and reviewed their work with the Product Manager, whom I worked with throughout.

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

<div class="gallery" tabindex="0" role="group" aria-label="The live registration, screen by screen">
<figure><img src="/projects/registration/screens/r1-home.jpg" alt="Lobby with Log in and Register buttons in the header" width="540" height="1200" loading="lazy"><figcaption><b>1. Start</b> Register sits top right, clearly apart from Log in.</figcaption></figure>
<figure><img src="/projects/registration/screens/r2-account.jpg" alt="Step 1 of 2: email, password and a checklist of password rules" width="540" height="1200" loading="lazy"><figcaption><b>2. Account details</b> Email and password, with the live password checklist.</figcaption></figure>
<figure><img src="/projects/registration/screens/r3-personal.jpg" alt="Step 2 of 2: first name, last name, typed date of birth and country" width="540" height="1200" loading="lazy"><figcaption><b>3. Personal details</b> Name, typed date of birth and the rest of the required details.</figcaption></figure>
<figure><img src="/projects/registration/screens/r4-creating.jpg" alt="Loading pop-up: Registering your account" width="540" height="1200" loading="lazy"><figcaption><b>4. Creating the account</b> A short loading state that already points to the bonus.</figcaption></figure>
<figure><img src="/projects/registration/screens/r5-done.jpg" alt="Lobby for a logged-in player with the balance shown" width="540" height="1200" loading="lazy"><figcaption><b>5. Done</b> Back in the lobby, logged in, with the balance in the header.</figcaption></figure>
<figure><img src="/projects/registration/screens/r6-leave.jpg" alt="Pop-up: Leave without registering? with a Keep Registering button" width="540" height="1200" loading="lazy"><figcaption><b>Leaving halfway</b> A calm check with one clear way back.</figcaption></figure>
</div>

*The registration as it ships, on the platform's own brand. Scroll sideways, and tap a screen to enlarge it.*

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

I then turned the wireframes into high-fidelity screens and prototypes. They gave the Product Design team something concrete to discuss and challenge before starting the final work, so the hand-over was a conversation about a working idea, not a document.

The Product Design team turned this into the final design. I supported them along the way and reviewed it with the Product Manager:

- **The quick sign-up asks only for email, password, country and the chosen offer.** The player starts in a "pre-registered" state and can look around straight away.
- **The full details come at the first deposit:** "Complete your account to deposit. It takes about a minute." The full registration then collects every field the licence requires.
- **Google and Apple sign-up** come in a second release, with the account-linking cases my research flagged: verifying ownership, the wrong provider account, and Apple's hidden email.

#### Signing up in seconds

<div class="gallery" tabindex="0" role="group" aria-label="Quick sign-up, screen by screen">
<figure><img src="/projects/registration/screens/q1-lobby.jpg" alt="Lobby for a guest with Log in and Register" width="540" height="1200" loading="lazy"><figcaption><b>1. A guest in the lobby</b> The same entry point as today.</figcaption></figure>
<figure><img src="/projects/registration/screens/q2-signup.jpg" alt="Quick Sign-Up form with email, password, country and the selected welcome offer" width="540" height="1200" loading="lazy"><figcaption><b>2. Quick sign-up</b> Only email, password and country, with the chosen offer on top.</figcaption></figure>
<figure><img src="/projects/registration/screens/q3-offer.jpg" alt="Select your offer: VIP, Casino, Sports or No Bonus" width="540" height="1200" loading="lazy"><figcaption><b>3. Choose an offer</b> Casino, sports, VIP or no bonus at all.</figcaption></figure>
<figure><img src="/projects/registration/screens/q4-creating.jpg" alt="Loading pop-up: Creating your account, adding your welcome offer" width="540" height="1200" loading="lazy"><figcaption><b>4. Creating the account</b> The offer stays visible while it loads.</figcaption></figure>
<figure><img src="/projects/registration/screens/q5-ready.jpg" alt="Your account is ready: Start playing or Complete my profile" width="540" height="1200" loading="lazy"><figcaption><b>5. Account ready</b> Play demo games now, or complete the profile.</figcaption></figure>
<figure><img src="/projects/registration/screens/q6-pre-registered.jpg" alt="Lobby with a zero balance, a Complete Registration button and a Claim bonus button" width="540" height="1200" loading="lazy"><figcaption><b>6. Pre-registered</b> A demo balance, with a nudge to complete registration.</figcaption></figure>
</div>

*Quick sign-up, from the lobby to a pre-registered account. The screens use placeholder data.*

#### Completing the account at the first deposit

<div class="gallery" tabindex="0" role="group" aria-label="First deposit, screen by screen">
<figure><img src="/projects/registration/screens/d1-claim.jpg" alt="Lobby for a pre-registered player with Claim Bonus" width="540" height="1200" loading="lazy"><figcaption><b>1. The player wants to deposit</b> Claim Bonus or the plus button starts the deposit.</figcaption></figure>
<figure><img src="/projects/registration/screens/d2-gate.jpg" alt="Pop-up: Complete your account to deposit, with Complete Registration and Not Now" width="540" height="1200" loading="lazy"><figcaption><b>2. The gate</b> One clear ask: complete your account, about a minute.</figcaption></figure>
<figure><img src="/projects/registration/screens/d3-profile.jpg" alt="Complete your profile form filled in with name, date of birth, city, address and postal code" width="540" height="1200" loading="lazy"><figcaption><b>3. Full registration</b> Every field the licence requires, nothing more.</figcaption></figure>
<figure><img src="/projects/registration/screens/d4-payment.jpg" alt="Deposit step 2: grid of payment methods" width="540" height="1200" loading="lazy"><figcaption><b>4. Payment method</b> Straight into the cashier, bonus already applied.</figcaption></figure>
<figure><img src="/projects/registration/screens/d5-success.jpg" alt="Deposit summary: Success, 200 EUR added, Play games" width="540" height="1200" loading="lazy"><figcaption><b>5. Deposit done</b> Funds added, and one button back to the games.</figcaption></figure>
</div>

*The full registration appears only when the player wants to play for real money.*

#### Google and Apple sign-up (second release)

<div class="gallery" tabindex="0" role="group" aria-label="Google and Apple sign-up, screen by screen">
<figure><img src="/projects/registration/screens/s1-connecting.jpg" alt="Pop-up: Connecting to Google, secure connection to accounts.google.com" width="540" height="1200" loading="lazy"><figcaption><b>1. Handing off</b> Says where the player is going, and that it is secure.</figcaption></figure>
<figure><img src="/projects/registration/screens/s2-google.jpg" alt="Google account picker: Choose an account to continue to All in platform" width="540" height="1200" loading="lazy"><figcaption><b>2. Google account picker</b> Google's own screen.</figcaption></figure>
<figure><img src="/projects/registration/screens/s3-almost.jpg" alt="Almost there: signed in with Google, country and consent checkboxes" width="540" height="1200" loading="lazy"><figcaption><b>3. Almost there</b> Only country and consent are left.</figcaption></figure>
<figure><img src="/projects/registration/screens/s4-apple-hidden.jpg" alt="Almost there with Apple: a relay email and a note that Apple is hiding the player's email" width="540" height="1200" loading="lazy"><figcaption><b>Apple's hidden email</b> Explained in plain words, with a way to add a real email later.</figcaption></figure>
<figure><img src="/projects/registration/screens/s5-linking.jpg" alt="You already have an account: enter your password to add Google sign-in" width="540" height="1200" loading="lazy"><figcaption><b>Existing account</b> Confirm the password once to add Google sign-in.</figcaption></figure>
</div>

*The account-linking cases from my research, designed in.*

#### Handling the edge cases

The final specification covers about 120 screen states, including email confirmation, security checks, blocked and self-excluded accounts, demo play and existing emails. A few of them:

<div class="gallery" tabindex="0" role="group" aria-label="Edge cases, screen by screen">
<figure><img src="/projects/registration/screens/e1-leave-bonus.jpg" alt="Pop-up: Leave without your bonus? with Keep Registering" width="540" height="1200" loading="lazy"><figcaption><b>Leaving with an offer picked</b> Reminds the player the offer is reserved, without pressure.</figcaption></figure>
<figure><img src="/projects/registration/screens/e2-inbox.jpg" alt="Check your inbox: we have sent an email with the next steps" width="540" height="1200" loading="lazy"><figcaption><b>An email that already exists</b> The same neutral message either way, so no one can check who has an account.</figcaption></figure>
<figure><img src="/projects/registration/screens/e3-age.jpg" alt="Pop-up: Are you 18 or older? You must be of legal age to play, even in demo mode" width="540" height="1200" loading="lazy"><figcaption><b>Demo play</b> Legal age is confirmed even for demo games.</figcaption></figure>
<figure><img src="/projects/registration/screens/e4-blocked.jpg" alt="We can't open an account for you, with a reference code and Contact Support" width="540" height="1200" loading="lazy"><figcaption><b>Blocked at sign-up</b> A clear outcome with a reference code for Support.</figcaption></figure>
</div>

*Each edge case gets a calm, specific message instead of a generic error.*

![The quick sign-up on desktop: the same form opens as a centred pop-up over the lobby.](/projects/registration/screens/desktop-signup.jpg)

*On desktop, the same sign-up opens as a centred pop-up over the lobby.*

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
