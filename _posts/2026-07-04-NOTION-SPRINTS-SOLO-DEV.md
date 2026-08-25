---
layout: post
title: "Running Sprints in Notion as a Solo Dev (or a Very Small Team)"
description: "Scrum was written for teams of eight. Here is the version that survives when the developer, the producer and the QA are the same person — and what to automate so replanning takes three clicks."
keywords: "Notion sprints, solo developer sprint planning, agile solo dev, game development project management, Notion automations, sprint planning indie game, Notion game studio, time tracking Notion, milestone planning, avoiding crunch, UGO Notion template"
lang: en
ref: notion-sprints-solo-dev
topic: productivity
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/24488453-c738-44bc-fdbc-6119cae3fcd8.gif
---

Scrum was written for a team of eight with a product owner. Most of us are one person wearing every hat, and the ceremonies collapse the moment you try them alone: **a standup with yourself is just anxiety with a schedule.**

But the sprint itself — a fixed box of time with a decided scope — survives the shrink. It's the only planning device I've found that answers *"what am I doing today"* without a meeting.

Here is the version that has actually held up, and the part I automated so that replanning stopped being a punishment.

---

## Table of Contents

* <a href="#why-sprints" class="page-scroll">Why sprints still work at team size one</a>
* <a href="#three-pillars" class="page-scroll">Centralise, focus, plan</a>
* <a href="#structure" class="page-scroll">The structure: goals, milestones, sprints, tasks</a>
* <a href="#estimating" class="page-scroll">Estimating without lying to yourself</a>
* <a href="#slipping" class="page-scroll">The sprint will slip — plan for that instead</a>
* <a href="#automations" class="page-scroll">What to automate first</a>
* <a href="#documenting" class="page-scroll">Why the boring documentation part pays</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Why sprints still work at team size one {#why-sprints}

Drop the ceremonies. Keep three properties:

**A fixed length.** Not because two weeks is magic, but because a box that never closes never forces a decision. When the box closes, unfinished work has to be looked at.

**A decided scope.** The scope is a promise to yourself about what you will *not* do. That's the real function. Solo devs don't fail from lack of ideas, they fail from having all of them open at once.

**A visible end.** Something to point at. Without it, six weeks of real work feel like nothing happened, and that feeling is what actually ends projects.

Everything else in Scrum exists to coordinate people. If there's one person, it's overhead.

---

## Centralise, focus, plan {#three-pillars}

If I compress everything I do into three moves, it's these.

**Centralise.** One place. Not one place per type of thing — one place. The cost of scattered systems isn't the switching, it's the doubt: *did I write that down in the other tool?*

**Focus.** The system's job is to make one thing obvious right now and hide the rest. A dashboard that shows everything is a to-do list with extra steps.

**Plan and track.** Not to predict the future, but to see whether the last two weeks matched what you thought they'd be. That gap is the only estimation training available.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/5a2af0df-4382-8159-5c1c-67aa0d970384.png" alt="The three pillars of organisation: centralise, focus, plan" class="medium"/>

I got here after leaving ClickUp — the migration story and the free stack that replaced it are in [an earlier post]({{ '/2024/02/20/NOTION-MAKE-WINDMILL-TMETRIC/' | relative_url }}), so I won't re-run it here.

---

## The structure: goals, milestones, sprints, tasks {#structure}

Four levels, and no more:

- **Goals** — what the year is for, sorted by quarter
- **Milestones** — the shippable chunks a goal breaks into
- **Sprints** — the fixed boxes
- **Tasks** — the work, each carrying a **priority** and a **complexity**

The important relationship is that a task belongs to a milestone, and a milestone belongs to a goal. That chain is what lets you answer *"why am I doing this?"* on a Tuesday afternoon when the answer is not obvious.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/2e049c1c-4b3b-755e-6ac9-1c7fe6e89b8c.png" alt="Goals broken into milestones in the Notion setup" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/1d587177-e920-196f-7d9d-35108cc84afb.png" alt="Sprint board with priority and complexity on each task" class="small"/>

Quarterly checkpoints do the annual re-read. **Sorting goals by quarter automatically** is a small thing that changes behaviour: the year stops being a wall and becomes four conversations.

---

## Estimating without lying to yourself {#estimating}

Two properties on every task: **priority** and **complexity**. Not hours.

Hours are a trap for solo devs because you don't have eight of them. You have the fragments left after email, support, invoicing and the thing that broke. Estimating in hours produces a plan that only works in a life you don't have.

Complexity ratings sidestep that — they measure the task, not your week. Then **time tracking** tells you what a complexity point actually cost, in your real conditions.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/2b071771-305d-01cc-16e5-0a9dfbceddd5.gif" alt="Time tracking integrated into the sprint view" class="medium"/>

That loop — estimate in complexity, measure in time, compare — is the whole of estimation training. It takes about three sprints before the numbers start being useful, and you cannot skip to the end.

---

## The sprint will slip — plan for that instead {#slipping}

Here's the part most setups get wrong. They treat an overrunning sprint as a failure to be corrected. It isn't; it's the normal case.

What matters is **seeing the slip early enough to act**, and being able to act cheaply. Two things do that:

**A deadline watch.** Flag tasks whose dates are drifting *before* the end of the sprint. Crunch is almost never caused by one impossible week — it's caused by four weeks of quiet slippage nobody looked at.

**Cheap replanning.** If moving a task to the next sprint means re-linking it by hand, you won't do it, and the plan silently becomes a lie. With auto-fill and **automatic dependency assignment**, replanning a sprint is three clicks — so it actually happens.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/02884a88-23e0-6e98-5503-92f45f491e5e.gif" alt="Replanning a sprint in three clicks with automatic dependencies" class="medium"/>

**A plan you're reluctant to change stops being a plan.** It becomes a document about the past.

---

## What to automate first {#automations}

Not everything. In order of payoff:

1. **Milestone assignment** — a task created from a milestone should already know where it belongs
2. **Dependency linking** — the thing you never do by hand, which is exactly why it must be automatic
3. **Sprint organisation** — moving, sorting, and closing the box
4. **Archiving finished tasks** — so the board shows the present, not the year
5. **Recurring tasks** — the monthly admin that eats a day if you rediscover it each time. Notion's date automations cover most of it; `@LastDayOfMonth` handles the ones that hang off the end of the month.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/1f3011da-067a-b76c-c0a7-a323e889e67e.gif" alt="Native Notion automations handling milestones, dependencies and archiving" class="medium"/>

Everything on that list is now doable with **native Notion automations** — which matters, because the version of this I ran on external tools broke every time one of them changed an API. Fewer moving parts beats more capability when there's nobody to fix it but you.

{% include product-callout.html slug="ugo" note="This is the system, packaged. Goals, milestones, sprints and tasks already wired together, the automations above already built, and the documentation templates that go with them — so you start from a working setup instead of a blank Notion page." %}

---

## Why the boring documentation part pays {#documenting}

The temptation as a solo dev is to skip documentation entirely. Nobody else reads it. Why write it?

Three reasons that changed my mind:

**You stop re-thinking the same thing.** Every undocumented decision gets re-litigated the next time you touch that system, at full price.

**It's how anyone else ever joins.** Collaborators, contractors, a jam team — the difference between a day of onboarding and a week is whether anything was written down.

**It protects the project from you.** Six months off a subsystem and you are, functionally, a new team member with a grudge.

Keep it cheap: tables, checklists, screenshots. **A document nobody can skim is a document nobody reads**, including its author.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>How long should a solo sprint be?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Two weeks works for me. One week spends too much of itself on planning; a month is long enough for the scope to stop feeling like a promise. The exact number matters far less than never moving the end date once it's set.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Isn't Notion too slow for this?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
It can be, if you build a dashboard that queries everything at once. The fix is the same as the design principle: show one thing. Views that filter to the current sprint stay fast; views that show the whole project are for the quarterly review, not for Tuesday.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>What if I keep failing to finish a sprint?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
That's data about your estimating, not about your discipline. Track the ratio for three sprints, then plan to whatever you actually delivered rather than what you hoped. A plan calibrated to reality is the only kind that helps.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Do I need automations at all to start?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
No — start manual, and automate the step you notice yourself avoiding. That step is always the one costing you the plan's accuracy. For me it was dependency linking, which I skipped every single time until it stopped requiring me.
</div>
</details>

</div>

---

{% include en/subscribe-form.html title="Get More Game Dev Insights Like This" %}

---

### 💬 What does your sprint setup look like?

I'm always curious which part of a solo planning system people abandon first — it's rarely the same one, and it usually says something about the project.

Reach me on Discord, or at guillaume.escarieux@mineogames.com.
