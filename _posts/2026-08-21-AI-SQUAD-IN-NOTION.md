---
layout: post
title: "An AI Squad Inside Notion: What to Delegate, and the One Rule I Won't Break"
description: "I had AI scattered across three platforms and re-explained my project every single time. Consolidating it into Notion fixed that — but the rule that makes it work isn't technical."
keywords: "Notion AI, AI agent modes, AI for solo founder, delegating to AI, AI workflow game studio, AI in creative work, Notion AI agents, AI project context, never delegate blindly, AI game development"
lang: en
ref: ai-squad-in-notion
topic: productivity
image: https://img.mailinblue.com/9272083/images/content_library/original/69a4094f0e9e4d63b3c23351.gif
---

For about a year my AI use was spread across three platforms. One for writing, one for code, one for whatever the first two had refused. It felt like having options. It was actually a tax.

**Every single session started by explaining my project again.** Who the studio is, what the game is, what I'd already decided and why. By the time the assistant was useful, I'd spent the energy I came to save.

Consolidating it all inside Notion fixed the tax. Then a conversation with a room full of design students clarified the part that actually matters — which isn't the tooling.

---

## Table of Contents

* <a href="#the-tax" class="page-scroll">The context tax</a>
* <a href="#agent-modes" class="page-scroll">Agent modes: roles, not chats</a>
* <a href="#compounding" class="page-scroll">The bit that compounds</a>
* <a href="#delegate" class="page-scroll">What I actually delegate</a>
* <a href="#the-rule" class="page-scroll">The one rule: never delegate blindly</a>
* <a href="#vs-trap" class="page-scroll">The Visual Studio trap</a>
* <a href="#students" class="page-scroll">What I told the students</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## The context tax {#the-tax}

Switching between assistants sounds cheap. It isn't, and the cost is not the switching.

The cost is that **each one starts from zero.** Every conversation needs the same preamble — the project, the constraints, the decisions already made, the things not to suggest again. You pay it every time, and because you're paying it in small increments you never notice how much it adds up to.

There's a second cost that's worse: because re-explaining is tedious, you start *not* explaining. You ask a narrower question with less context, get a more generic answer, and conclude the tool isn't very good. It wasn't the tool.

---

## Agent modes: roles, not chats {#agent-modes}

What changed it was moving the whole thing into the workspace where the project already lives, and setting up **specialised agent modes** — each with a defined role, all sharing the same context.

The difference from a chat window is worth being precise about:

**A chat is a conversation.** It starts empty, you fill it, it ends, and the filling is thrown away.

**A mode is a role.** It has standing instructions about what it does and how, and it can see the workspace — the design pages, the plan, the decisions. You don't brief it; it's already briefed.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/69a4094f0e9e4d63b3c23351.gif" alt="Instructions page defining an agent mode in Notion" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/69a40a68833e9f4b8b7cfedd.gif" alt="A research-oriented agent mode working in the workspace" class="small"/>

That's the whole trick, and it's less about AI than about **where you keep your project.** The reason this works is that the [documentation and planning already live there]({{ '/2026/07/25/WHAT-TO-DOCUMENT-GAME-PROJECT/' | relative_url }}). Consolidating AI into a workspace with no context in it would achieve nothing.

---

## The bit that compounds {#compounding}

Here's the property I didn't anticipate and now value most.

**Improving one instruction improves every future run.** When a mode gets something wrong, I don't correct the output — I fix the role. The next fifty uses are better, without me being present for any of them.

That's a completely different economics from prompting. A good prompt helps once. A good role definition is an asset that keeps paying, and after a few months the accumulated corrections are the thing doing the work rather than any individual request.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/69a262960e9e4d63b3c21cfd.gif" alt="An agent mode picking up from yesterday's work" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/69a40b780e9e4d63b3c23389.gif" alt="An agent mode drafting a script from workspace context" class="small"/>

The related benefit is duller and just as real: **not leaving the workspace.** Every trip to another tab is an opportunity to lose the thread, and for solo work, staying in one place is worth more than any individual feature.

---

## What I actually delegate {#delegate}

The honest list, and it's less glamorous than the marketing:

**Data cleaning.** Reformatting, deduplicating, turning a mess into a table. Genuinely tedious, genuinely mechanical, no judgement required.

**Planning scaffolding.** Breaking a decided goal into a first draft of tasks. Not deciding what to build — laying out what I already decided so I can correct it faster than I could write it.

**Copying and adapting.** Taking something that exists and producing the variant. Same substance, different form or length.

**First drafts of anything structured.** A changelog, a summary, a document that follows a known shape.

What's not on the list: deciding what the game is, what it feels like, what we build next. Not because a model couldn't produce a plausible answer — because a plausible answer to that question is worse than no answer.

---

## The one rule: never delegate blindly {#the-rule}

If everything above is the mechanics, this is the part that decides whether it helps or hurts.

**Learn the capability first. Delegate second. Keep control throughout.**

Delegating something you don't understand isn't leverage, it's gambling with extra steps. You can't evaluate the output, so you accept it; when it's wrong, you find out later and at a worse moment. This isn't specific to AI — it's the same rule that applies to hiring a contractor for something you can't assess.

The practical version: **if I couldn't tell a good answer from a bad one, I don't delegate it yet.** I go and learn enough to judge, and then I delegate — and at that point it's genuinely faster, because I'm reviewing rather than hoping.

---

## The Visual Studio trap {#vs-trap}

A concrete example of me breaking my own rule, since the abstract version is easy to nod along to.

I had C++ errors in Unreal. Instead of reading the documentation, I asked an AI to fix them. It produced fixes. Some worked. **The whole episode cost more time than reading the docs would have**, because I couldn't tell which suggestions were addressing the real cause and which were plausible-looking noise — so I tried several.

The actual answer, once I understood the problem, was mundane: the **Unreal Wizard extension** regenerates project files directly from Visual Studio after you add classes, which is the step that was missing.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/69a241a00e9e4d63b3c21c4b.gif" alt="Regenerating Unreal project files from a Visual Studio extension" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/69a2429ac25a39a73aa36a0b.gif" alt="A script letting non-developers download binaries without Visual Studio" class="small"/>

The better answer was to remove the problem for most of the team entirely: **a script that lets non-developers pull binary builds without installing Visual Studio at all.** Nobody on the art side needs a compiler, and the cheapest bug is the one a whole category of people can no longer encounter.

That's the lesson twice over. Understanding first — and once you understand, the best fix is often to delete the situation rather than automate it.

---

## What I told the students {#students}

A group of graphic design students interviewed me about AI in creative work, and their worry was the obvious one: **does this replace us, or make us think less?**

<img src="https://img.mailinblue.com/9272083/images/content_library/original/69a245cb0e9e4d63b3c21c5e.gif" alt="Interview with graphic design students about AI in creative work" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/69a246380e9e4d63b3c21c65.jpeg" alt="Behind the scenes of the interview" class="small"/>

I had the same worry, and where I've landed is this: **it makes you think less if you let it decide, and more if you make it execute.**

For a solo founder the asymmetry is enormous. The bottleneck was never ideas — it was the twelve unglamorous jobs between an idea and a shipped thing, most of which I'm mediocre at and none of which I can hire out. Removing some of those is genuinely empowering.

But the artistic control doesn't move. **The taste is the job.** If you delegate the deciding, you haven't accelerated your work, you've replaced it with somebody else's average.

{% include product-callout.html slug="ugo" note="All of this only works because the project already lives in one workspace — goals, sprints, documentation, decisions, in a structure an assistant can actually read. UGO is that structure, ready to use." %}

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Doesn't putting everything in one tool lock you in?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Somewhat, and it's a real trade. What decided it for me is that the value comes from shared context, and shared context is exactly the thing you can't spread across tools. If the workspace is where the project lives anyway, the assistant belongs there too.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>How many agent modes do you need?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Few, and each one should correspond to a job you actually repeat. A mode you invoke twice a year is a chat with extra setup. The ones that earn their keep are the boring recurring shapes — research, drafting, restructuring — where the role definition accumulates corrections over time.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Should AI write your game's design?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
It can produce a plausible design document, which is precisely the danger — plausible is the failure mode, not the goal. Use it to pressure-test a decision you've made, or to lay out something you've already chosen. The choosing is the part that makes it your game.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>What's the first thing to delegate?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Whatever you do repeatedly, understand fully, and dislike. That combination is where the return is immediate and the risk is nearly zero, because you can spot a bad output instantly. Start there rather than with the interesting-sounding problem.
</div>
</details>

</div>

---

{% include en/subscribe-form.html title="Get More Game Dev Insights Like This" %}

---

### 💬 What have you handed over, and what won't you?

I'm genuinely interested in where other people draw this line — the "won't" list says more about how someone works than the "will" list does.

Reach me on Discord, or at guillaume.escarieux@mineogames.com.
