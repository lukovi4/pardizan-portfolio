---
title: Lastik — simple and fun time-killer game
name: Lastik
slug: lastik
order: 2
tagline: Erase-to-guess mobile game — my own concept, taken from idea to release
roles:
  - Concept
  - UX/UI
  - Art direction
  - Analytics
cover: ../../assets/covers/lastik.png
coverAlt: Lastik game category screen with illustrated covers on an iPhone
backdrop: '#F2DFD0'
years: '2026'
role: Concept, design, analytics
summary: >-
  An erase-to-guess mobile game — my own concept, taken from idea to App Store
  release. I ran it end to end: validating the mechanic with 15–20 players,
  the prototype, UI and illustration direction, closed testing, then analytics
  and ad monetization.
screens:
  - src: ../../assets/projects/lastik/main.png
    alt: Lastik home screen
  - src: ../../assets/projects/lastik/menu.png
    alt: Lastik account and settings menu
  - src: ../../assets/projects/lastik/categories.png
    alt: Lastik category list with illustrated covers
  - src: ../../assets/projects/lastik/category-info.png
    alt: Lastik category details
  - src: ../../assets/projects/lastik/play.png
    alt: Lastik play screen with a card to erase
  - src: ../../assets/projects/lastik/select-answer.png
    alt: Lastik answer selection
  - src: ../../assets/projects/lastik/right-answer.png
    alt: Lastik correct answer screen
  - src: ../../assets/projects/lastik/wrong-answer.png
    alt: Lastik wrong answer screen
  - src: ../../assets/projects/lastik/lastiks.png
    alt: Lastik erasers collection
  - src: ../../assets/projects/lastik/restore.png
    alt: Lastik eraser restore screen
  - src: ../../assets/projects/lastik/premium.png
    alt: Lastik premium subscription screen
lead: >-
  A simple, addictive time-killer somewhere between a puzzle and a trivia game:
  you use your finger as an eraser to uncover a hidden card and name what is on
  it. My own concept — so on top of design I was also the manager, the tester
  and the analyst.
sections:
  - title: Validating the idea
    body:
      - >-
        I had not seen the mechanic anywhere in the stores, so before building
        anything I wanted to know whether it was actually fun. Together with a
        programmer I put up the barest possible version — one screen, a few
        pictures, the erase gesture — and tested it on 15–20 people I knew.
      - >-
        The group was chosen deliberately: people who already keep simple games
        on their phones — match-3, hidden object, crosswords — and play them
        from time to time. The feedback came back positive and specific enough
        to act on, and full development started.
  - title: Prototype and build
    body:
      - >-
        I wrote down every idea of my own and every comment from the test, then
        turned them into a full clickable prototype of the game. It went back to
        a few users for one more round, and later saved a lot of explaining:
        the developer could simply follow it.
      - >-
        We split the game into logical components to decide what to build
        first; I wrote the detailed descriptions and the tickets. By the time
        the base was working I had all the screens and the UI kit ready, and
        moved on to illustrations, content, and store assets.
  - title: Testing, release, analytics
    body:
      - >-
        We ran closed testing through Firebase with about 20 people. The eraser
        itself and the in-game currency were what needed debugging, so I asked
        testers to record their screens while playing.
      - >-
        That is how the "lifehacks" surfaced — shortcuts players had found that
        made the game trivially easy, and with it boring. A few adjustments and
        we shipped. After release came Amplitude, AppsFlyer and AppLovin, plus
        a long war with Facebook for the right to run ads in peace — but that is
        another story.
  - title: The round
    body:
      - >-
        The finger uncovers at most half of the hidden picture, then ten
        answers appear. The less of the eraser you spend, the more coins you
        earn, so every round is a small bet: rub more to be certain, or stop
        early and be paid better.
      - >-
        Right and wrong answers are separate screens rather than a toast — the
        moment is the payoff of the round, and it is also where the offer of a
        second attempt for an ad belongs.
    screens:
      - src: ../../assets/projects/lastik/play.png
        alt: Play screen with a card being erased
      - src: ../../assets/projects/lastik/select-answer.png
        alt: Choosing from ten possible answers
      - src: ../../assets/projects/lastik/right-answer.png
        alt: Correct answer screen with the coins earned
      - src: ../../assets/projects/lastik/wrong-answer.png
        alt: Wrong answer screen
  - title: Minimal on purpose
    body:
      - >-
        The content of this game is pictures, so the interface stays out of
        their way: flat surfaces, one accent colour, no decoration competing
        with the artwork. The category list is the storefront — covers do the
        selling, the details screen only adds what a player needs to decide.
      - >-
        The illustrations — category covers and the erasers themselves — were
        drawn by a graphic designer; I brought the ideas, and we picked the
        overall style with a focus group of 20 potential players. Later I
        generated part of the covers with neural networks.
      - >-
        The menu carries the unglamorous half: an anonymous player id with
        optional Apple or Facebook sign-in, notifications, restore purchase,
        and the legal pages.
    screens:
      - src: ../../assets/projects/lastik/main.png
        alt: Home screen
      - src: ../../assets/projects/lastik/categories.png
        alt: Category list with illustrated covers
      - src: ../../assets/projects/lastik/category-info.png
        alt: Category details before starting
      - src: ../../assets/projects/lastik/menu.png
        alt: Account and settings menu
  - title: Erasers, coins, premium
    body:
      - >-
        Every player has an eraser at 100% that regenerates over time. Coins
        earned in rounds either open new categories or restore the eraser, so
        the two currencies pull against each other and the player has to choose
        what to spend on.
      - >-
        Advertising sits on top of that loop rather than interrupting it: watch
        one to restore the eraser, unlock a category, get a fresh eraser, or
        take a second attempt at an answer. Premium removes the ads for players
        who would rather pay than watch.
    screens:
      - src: ../../assets/projects/lastik/lastiks.png
        alt: The collection of erasers
      - src: ../../assets/projects/lastik/restore.png
        alt: Restoring an eraser for coins or an ad
      - src: ../../assets/projects/lastik/premium.png
        alt: Premium subscription screen
---
