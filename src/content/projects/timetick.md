---
title: Timetick — advanced IoT testing & monitoring tool
name: Timetick
slug: timetick
order: 4
tagline: AI-driven low-code platform for behavioral IoT testing — 150+ screens
roles:
  - UX architecture
  - UI design
  - Design system
years: 2023 — 2025
role: Senior Product Designer
cover: ../../assets/covers/timetick.png
coverAlt: TimeTick monitoring dashboard on a laptop
backdrop: '#E3E0EF'
summary: >-
  An AI-driven low-code platform for behavioral testing and monitoring of IoT
  software, built for QA, engineers, and business users. Sole designer on an
  early-stage startup where structure changed every few days: daily design
  sprints with stakeholders and engineers, a custom system on top of MUI, and
  150+ screens turned into a full clickable prototype.
lead: >-
  An AI-driven low-code platform for behavioral testing and monitoring of IoT
  software. Built for QA engineers, developers, and business users to shorten
  the development cycle, cut testing costs, and make systems easier to scale.
screens:
  - src: ../../assets/projects/timetick/devices-table.png
    alt: TimeTick device list as a table with type, protocol, status, and tags
  - src: ../../assets/projects/timetick/devices-cards.png
    alt: The same device list as cards with hardware photos and status
  - src: ../../assets/projects/timetick/devices-map.png
    alt: Devices on a map with a popup card for the selected charger
  - src: ../../assets/projects/timetick/devices-timeline.png
    alt: Devices as an hourly timeline of scheduled and running scenarios
  - src: ../../assets/projects/timetick/device-details.png
    alt: Device page with specs, metrics, map, network traffic, and a run timeline
  - src: ../../assets/projects/timetick/device-logs.png
    alt: Device logs with timestamps, severity tags, and raw payloads
  - src: ../../assets/projects/timetick/device-issues.png
    alt: Device issues ranked by occurrence, scoring, impact, and error count
sections:
  - title: My role
    body:
      - >-
        I joined as the UX lead, brought in to turn the stakeholders' ideas into
        a coherent, usable web platform — and stayed as the only designer from
        the first concept through to launch, working directly with the CEO,
        the engineers, and the clients who tested the product.
      - >-
        It was an early-stage startup, so there was no settled picture of what
        the product was. Logic and structure could change every two or three
        days, and the design had to keep up without collapsing each time.
  - title: Process
    body:
      - >-
        We ran design sprints split by the main sections of the product. Each
        day I prepared the design or prototype of a set of pages, or of one
        piece of complex functionality, then we went through it on a call with
        the stakeholders and the engineers. Their comments went straight back
        into that section before it was closed.
      - >-
        There was no user research on this project. Instead I studied adjacent
        services, looking for interaction patterns worth borrowing for problems
        that had already been solved elsewhere.
      - >-
        The architecture I defined covered onboarding, automated testing,
        real-time monitoring, behavioral analytics, device management, and
        low-code automation.
  - title: Design
    body:
      - >-
        Development had started before I joined and the team was already on MUI,
        so I built the system on top of it — components, buttons, spacing, sizes
        — and added custom elements where MUI had nothing to offer.
      - >-
        Over five months that grew into more than 150 screens, assembled into a
        full clickable prototype of the platform.
  - title: One list, four ways to read it
    body:
      - >-
        The device list is where everyone starts, and the roles want different
        things from it: a QA engineer compares protocols and firmware, an
        operator looks for what is running right now, a manager wants to know
        where the hardware physically is.
      - >-
        Instead of one compromise view I built four modes over the same data
        and the same filters — a table for comparing parameters, cards for
        recognising hardware by sight, a map for location, and an hourly
        timeline for what is scheduled and when.
    screens:
      - src: ../../assets/projects/timetick/devices-table.png
        alt: Device list as a table with type, protocol, status, make, model, firmware, and tags
      - src: ../../assets/projects/timetick/devices-cards.png
        alt: The same list as cards with hardware photos and status
      - src: ../../assets/projects/timetick/devices-map.png
        alt: The same list on a map with a popup card for the selected charger
      - src: ../../assets/projects/timetick/devices-timeline.png
        alt: The same list as an hourly timeline of scheduled and running scenarios
  - title: Everything about one device
    body:
      - >-
        The device page had to serve the whole team without turning into a
        wall of data, so the depth is split across tabs. Details is the
        overview: specs and connectors, a 24-hour metric chart, location,
        supported protocols and integrations, the pass/fail breakdown, and
        network traffic.
      - >-
        Logs is the raw event stream with severity tags and payloads. Issues
        ranks the device's own problems by impact. The timeline panel on the
        right stays pinned across the tabs, so the device's runs are always in
        view.
    screens:
      - src: ../../assets/projects/timetick/device-details.png
        alt: Device page, Details tab — specs, metrics, map, network traffic, and a run timeline
      - src: ../../assets/projects/timetick/device-logs.png
        alt: Device page, Logs tab — timestamps, size, severity tags, and raw payloads
      - src: ../../assets/projects/timetick/device-issues.png
        alt: Device page, Issues tab — problems ranked by occurrence, scoring, and impact
  - title: Assembling a run
    body:
      - >-
        A run is a set of tests fired at devices. Picking from several hundred
        had to work both for someone who knows exactly what they need and for
        someone still browsing, so the picker keeps the folder tree, tags and
        priorities, and adds search, filters and a running count of what is
        selected.
      - >-
        Once the run starts, that same list becomes the progress view: status
        per test, repeat counts, who is assigned, and a summary bar splitting
        passed, failed, skipped, in progress, and not started.
    screens:
      - src: ../../assets/projects/timetick/run-create.png
        alt: Creating a run — picking tests from a folder tree with tags and filters
      - src: ../../assets/projects/timetick/run-tests.png
        alt: A run before start — tests grouped by suite with assignees
      - src: ../../assets/projects/timetick/run-progress.png
        alt: A run in progress — summary bar and per-test status
  - title: The test library
    body:
      - >-
        Tests are kept in two views because they are used in two ways. The tree
        of suites and folders is for building structure and running a whole
        branch at once; the flat table with parent folder, priority and tags is
        for finding one test among hundreds.
      - >-
        A test itself is a document — requirements, steps, expected results —
        which is why the last screen here is so tall. Open it to scroll the
        whole thing.
    screens:
      - src: ../../assets/projects/timetick/tests-suites.png
        alt: Test suites as a tree of folders with inline actions
      - src: ../../assets/projects/timetick/tests-table.png
        alt: All tests as a table with parent folder, priority, and tags
      - src: ../../assets/projects/timetick/test-editor.png
        alt: A test with requirements, steps, and expected results
        full: ../../assets/projects/timetick/test-editor-full.png
  - title: From an error to a task
    body:
      - >-
        Issues is where monitoring turns into work. The list ranks problems by
        how often they occur, a letter score with its trend, the share of
        affected devices, and the error count with a sparkline — so the one
        worth opening first is visible without reading a single row.
      - >-
        Inside, the platform explains itself: what the error means, an
        automatic summary of the model and the hours it clusters around, and
        charts breaking the errors down by device type. From there the problem
        becomes a ticket, with the side panel carrying the description, how to
        resolve it, a maintenance plan, and why it matters.
    screens:
      - src: ../../assets/projects/timetick/issues-list.png
        alt: Issues ranked by occurrence, scoring, impact, and error trend
      - src: ../../assets/projects/timetick/issue-insights.png
        alt: An issue with an automatic summary and error charts
        full: ../../assets/projects/timetick/issue-insights-full.png
      - src: ../../assets/projects/timetick/issue-tickets.png
        alt: Issue tickets with a side panel explaining the error and how to resolve it
---
