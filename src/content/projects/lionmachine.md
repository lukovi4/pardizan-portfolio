---
title: LionMachine — complete tool for managing marketing campaigns
name: LionMachine
slug: lionmachine
order: 3
tagline: Campaign management platform for ~50 AppLovin growth managers
roles:
  - Product design
  - User research
  - Prototyping
years: Mar — Dec 2022
role: Senior Product Designer / Lead
cover: ../../assets/covers/lionmachine.jpg
coverAlt: LionMachine campaign dashboard on a laptop
backdrop: '#DDE5EA'
summary: >-
  An internal tool that replaced the five services AppLovin's ~50 growth
  managers juggled every day. I joined as the first designer, spent a month
  working as a junior growth manager to learn the domain, then owned the UX —
  including AutoAlerts, which turned hours of manual campaign analysis into a
  single notification.
screens:
  - src: ../../assets/projects/lionmachine/table.png
    alt: LionMachine campaign table with metrics pulled from five services
  - src: ../../assets/projects/lionmachine/date-range.png
    alt: Date range picker with presets over the campaign table
  - src: ../../assets/projects/lionmachine/filters.png
    alt: Filter panel with growth owner, apps, channel, and geo
  - src: ../../assets/projects/lionmachine/columns.png
    alt: Column configurator with metrics grouped by source
  - src: ../../assets/projects/lionmachine/alerts-list.png
    alt: My alerts panel with the manager's rules and their schedules
  - src: ../../assets/projects/lionmachine/alert-rule.png
    alt: Creating an alert rule from filters, metrics, and conditions
lead: >-
  An internal AppLovin platform for running mobile ad campaigns — launch,
  settings, analytics, prediction — built to replace the five separate tools
  its growth managers had to keep open every day.
sections:
  - title: Five tools into one
    body:
      - >-
        When the project started, a growth manager needed five services to do
        the job properly: Adjust, Facebook Meta Ads, AppLovin, Box and Asana.
        That was slow, and worse, it was error-prone — the same numbers had to
        be compared by hand across services, and a mistake in that comparison
        was a mistake in a live campaign.
      - >-
        AppLovin hired a separate team to merge them into one product, and I
        joined as one of the first people on it, as product designer. A UI
        specialist came later and helped with the UI kit and the visual system.
        There was no product manager, only a tech lead, so part of the product
        work — describing solutions, talking to stakeholders — was mine too.
  - title: A month as a growth manager
    body:
      - >-
        It was an internal product, which meant I had access to nearly all 50
        of its future users. I also knew nothing about how the mobile
        advertising industry works, so for the first month I played the role of
        a junior growth manager: sat in on team meetings, tried setting up
        campaigns myself, interviewed lead managers, and read whatever I could
        find.
      - >-
        I recorded the meetings and wrote out the key points — how managers
        work, what actions they repeat, what they open most often, what they
        actually look at. The goal was not a list of features but understanding
        how a manager thinks. That is what gave me the vision of the product,
        the split into logical parts, and a place to start.
  - title: What the market already had
    body:
      - >-
        Once I understood the domain I went through the tools the managers were
        using, plus the one real competitor, Bidalgo. Almost every service I
        went through together with the manager who used it, looking at two
        things at once: what the tool can and cannot do, and how pleasant it is
        to actually work in.
      - >-
        That is what let us define the functionality of our own product in
        detail and group it in a way that matched how the work is really done.
  - title: The table everyone lives in
    body:
      - >-
        The product is about a lot of data, and data is easiest to work with in
        a table — so there was no reason to invent a visual language. We went
        with MUI, easy to customise for both design and development, which
        saved development time and therefore money. My job was to make the
        parts around the table — filters, search, settings, views — obvious
        enough that a manager understands them without being taught.
      - >-
        Every column carries the system it came from: Salesforce, MMP, Facebook,
        Network, or a calculation. That label matters here more than it would
        anywhere else — the whole point of the product was to end the manual
        comparison of numbers between five services, and a manager still has to
        know which source a number is from.
      - >-
        The tabs walk the campaign hierarchy — app, SKU, offer, campaign, ad
        sets, ads, creatives — so a manager can go from the overview down to a
        single creative without leaving the table. Filter sets and column views
        are saved and named, because these are the same slices people rebuild
        every morning.
    screens:
      - src: ../../assets/projects/lionmachine/table.png
        alt: The campaign table, with tabs for each level of the hierarchy
      - src: ../../assets/projects/lionmachine/date-range.png
        alt: Date range picker with presets
      - src: ../../assets/projects/lionmachine/filters.png
        alt: Filter panel — growth owner, apps, SKU, channel, geo, saved sets
      - src: ../../assets/projects/lionmachine/columns.png
        alt: Column configurator with metrics grouped by source and saved views
  - title: AutoAlerts
    body:
      - >-
        Working alongside the managers, I noticed the same thing happening every
        day. A manager checks how a campaign is doing; if a metric misses the
        expectation — ROI was supposed to be 25%, it is 20% — they start digging
        through the whole hierarchy of that campaign to find where it broke.
        That search takes one to three hours, and a manager has 10 to 20 games
        in work, so a full pass could stretch past a week. All of it is lost
        profit for the company.
      - >-
        My idea was to hand that search to the system. When launching a
        campaign the manager sets the numbers they expect, plus how often and
        how deep to check them. If reality falls below the target, the platform
        runs the analysis itself and sends an alert — web, email, Slack — that
        already says where things went wrong. The manager skips looking for the
        problem and starts on the solution.
      - >-
        It only became possible once we could pull all the relevant data out of
        the other services, so it waited until the main functionality shipped.
        Before building it I designed the flow and made a clickable prototype,
        and we showed it to 10 senior growth managers: full approval and a list
        of comments, then final design, development, testing, release. It gave
        roughly 50 managers back 2.5 to 3 hours of their day.
    screens:
      - src: ../../assets/projects/lionmachine/alerts-entry.png
        alt: Alerts open from the table itself, next to the campaign data
      - src: ../../assets/projects/lionmachine/alerts-list.png
        alt: My alerts — the manager's rules, their schedules, and a manual trigger
      - src: ../../assets/projects/lionmachine/alert-rule.png
        alt: Creating a rule from a date range, filters, and chosen metrics
      - src: ../../assets/projects/lionmachine/alert-conditions.png
        alt: Conditions on a metric — static or relative, with comparison operators
      - src: ../../assets/projects/lionmachine/alert-schedule.png
        alt: Schedule editor with a plain-language readout of when the rule runs
---
