---
layout: post
title: "What's Worth Documenting on a Game Project — and What Isn't"
description: "Most game documentation is written once and never reopened. Here's the test I use to decide what earns a page, and the four documents that actually get read."
keywords: "game design document, GDD template, game project documentation, indie game documentation, what to document, technical design document, onboarding developers, Notion game studio, documenting decisions, TGO Notion template"
lang: en
ref: what-to-document-game-project
topic: productivity
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/1aeb910e-8d91-b26e-8d7a-60e898e217df.gif
---

Most game documentation is written once, filed, and never opened again. It felt productive on the day and it was, in practice, a way of not working on the game.

I've written a lot of that kind. What changed is that I stopped asking *"should this be documented?"* — the answer is always yes — and started asking a much better question:

**"Who reads this, and when?"**

If there's no answer, it doesn't get written. Here's what survives that test.

---

## Table of Contents

* <a href="#the-test" class="page-scroll">The test: who reads this, and when</a>
* <a href="#three-reasons" class="page-scroll">The three things documentation actually buys</a>
* <a href="#worth-it" class="page-scroll">The four documents that earn their page</a>
* <a href="#not-worth-it" class="page-scroll">What isn't worth writing</a>
* <a href="#format" class="page-scroll">Format matters more than completeness</a>
* <a href="#gdd" class="page-scroll">The GDD problem</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## The test: who reads this, and when {#the-test}

Every document has an implied reader and an implied moment. Name both, and the document writes itself at the right length. Fail to name them, and you produce a description of the project instead of a tool.

- *"Me, in six months, when I come back to this system"* — write it.
- *"A contractor, on their first day"* — write it.
- *"A funding body, in March"* — write it, and it will be [a different document entirely]({{ '/2026/08/10/CNC-GRANT-INDIE-STUDIO/' | relative_url }}).
- *"Nobody, but a real studio would have one"* — don't write it.

That last case is most of the documentation that never gets reopened. It exists because it's supposed to exist.

---

## The three things documentation actually buys {#three-reasons}

When it works, it's buying one of three things — and it's worth knowing which one you're paying for.

**You stop re-thinking the same thing.** Every undecided-in-writing decision gets re-argued the next time you touch that system, at full cost. The document isn't a record of the decision; it's what stops you paying for it twice.

**Somebody else can join.** Collaborators, contractors, a jam team. The difference between a day of onboarding and a week is entirely what was written down before they arrived.

**It protects the project.** From bus factor, from a lost machine, and mostly from you six months from now, who is functionally a new team member with no context and strong opinions.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/1aeb910e-8d91-b26e-8d7a-60e898e217df.gif" alt="Documentation templates for a game project" class="medium"/>

---

## The four documents that earn their page {#worth-it}

Across several years, these are the only four I keep rebuilding on every project.

**1. The decision log.** Not what the system does — the code says that — but *why it's like that and what we rejected.* This is the single highest-value document and almost nobody writes it. One line per decision is enough: what we chose, what we didn't, and the reason.

**2. The setup document.** How to get from a clean machine to a running build. Every project has this knowledge distributed across three people's memories and one Discord message from last year. It's also the document that most obviously pays for itself, because you'll use it yourself after the next reinstall.

**3. Per-phase templates.** Standard documents for the phases a project goes through, so that starting a new phase isn't also a writing project. Having a known structure means the work goes into the content instead of into deciding what the content should be.

**4. The numbers.** Budget, KPIs, and whatever actually determines whether this continues. I keep this in a spreadsheet with the calculations built in rather than in prose, because prose can't add up and this is the document that most needs to be correct.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/cce49264-abc0-2388-e730-c6948de45180.png" alt="Standard documentation templates by project phase" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/d273bcee-39d9-5208-699e-264cc7c3a388.gif" alt="Financial and KPI tracking built into the project system" class="small"/>

---

## What isn't worth writing {#not-worth-it}

Equally important, and much less often said.

**Anything the code already says.** A document describing what a function does is a second copy that will drift, and the copy that drifts is always the document.

**Exhaustive lore before the game exists.** Write the amount of world you need to make the next decision. The rest is a novel you're writing instead of a game, and it will be contradicted by the first level that gets built.

**Process documents for a process nobody follows.** If the written workflow and the real workflow differ, you don't have documentation, you have fiction. Document what you do, or change what you do — not neither.

**A full spec for something you haven't prototyped.** In VR especially, you find out whether an idea works by putting it in a headset. Speccing it first mostly documents your assumptions.

---

## Format matters more than completeness {#format}

Here's the practical part, and it's the thing that most changed how much of my documentation gets used.

**Tables, checklists and visuals beat prose.** Every time. A document nobody can skim is a document nobody reads, including its author. A five-row table conveys more than the paragraph it replaces and takes less time to write.

Two habits that help:

**Put explanations behind a toggle.** The reader who knows the system sees a clean structure; the reader who doesn't can expand for detail. One document, two audiences, no duplication.

**Screenshot instead of describing.** Any explanation of a UI, an editor setup, or a node graph is faster and more accurate as an image. Especially in a tool-heavy pipeline, one screenshot replaces a paragraph nobody would have trusted anyway.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/e273900e-8742-6193-4959-8dc95144007d.gif" alt="In-depth guides with visuals rather than prose" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/37b9858a-0a5c-fbfa-8904-7f0b6b13d5a6.gif" alt="Checklists and tables in project documentation" class="small"/>

---

## The GDD problem {#gdd}

The Game Design Document deserves its own note, because it's the one everyone is told to write and the one that most reliably goes stale.

The traditional GDD is a hundred-page description of a finished game, written before the game exists. It's obsolete the first week and everyone knows it, which is why nobody opens it.

What works better is a **canvas**: a single structured page holding the decisions that define the game — the pillars, the loop, the audience, the constraints — short enough that keeping it current is realistic. It answers "what is this game" in one screen, and everything else lives in the systems it points at.

That's the shape we ended up shipping in TGO, our small template, alongside an archive for the pages that have stopped being current but shouldn't be deleted.

{% include product-callout.html slug="tgo" note="TGO is the small version of our system: a Game Design Document canvas, an archive for what's no longer current, and automations that block a task while its dependencies are unfinished. Built for a solo dev or a small team on one project." %}

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>I'm solo. Do I really need documentation?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
You need the decision log and the setup document. Those two pay for themselves within one project, purely on your own re-reading. Everything else is optional until someone else is involved — and the moment someone is, you'll want them to have existed already.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>How do you stop documentation going stale?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Mostly by writing less of it. A small document is cheap to update and therefore gets updated; a large one is expensive and therefore rots. The second thing is an archive rather than a delete key — moving a page out of the current set is much easier than deciding whether to destroy it, so it actually happens.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Where should it live?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Wherever the planning already lives, so a task can link to the document explaining it. Splitting docs and tasks across two tools guarantees one of them goes unread. Ours sits next to the sprint board, which is covered in the [sprints post]({{ '/2026/08/12/NOTION-SPRINTS-SOLO-DEV/' | relative_url }}).
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Should a design document ever be long?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
When it has a specific reader who needs the length — a funding body, a publisher, a new team of five. Length in service of a named reader is fine. Length as a demonstration of seriousness is the failure mode.
</div>
</details>

</div>

---

{% include en/subscribe-form.html title="Get More Game Dev Insights Like This" %}

---

### 💬 What's the one document you actually reopen?

I'd bet on the setup doc, but I've been wrong about this before. If there's one page on your project you genuinely go back to, I'd like to know what it is.

Reach me on Discord, or at guillaume.escarieux@mineogames.com.
