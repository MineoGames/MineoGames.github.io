---
layout: post
title: "Automating Unreal: When to Stop Doing It by Hand and Write the Plugin"
description: "Two editor plugins — one for audio import, one for batching destruction setup. Both came from the same moment: doing the same twelve clicks for the fortieth time."
keywords: "Unreal Editor plugin, automating Unreal Engine, Unreal editor scripting, SoundCue automation, SoundClass attenuation, Chaos Destruction, Chaos Dataflow, geometry collection batch, Unreal tooling, C++ editor utility, technical art pipeline"
lang: en
ref: automating-unreal-plugins
topic: tech
image: https://img.mailinblue.com/9272083/images/content_library/original/69f4cab6151f9efcabbd01b6.gif
---

Two of the most useful things I built this year don't appear in any game. They're **editor plugins** — one that handles audio import, one that batches destruction setup — and both came from exactly the same moment.

The moment is this: you do the same twelve clicks for the fortieth time, and somewhere around the fortieth you get properly annoyed. **That annoyance is data.** It's the cheapest signal you get that a task has crossed from "a thing I do" to "a thing that should do itself".

Here's what both plugins do, and the rule I now use to decide when to write one.

---

## Table of Contents

* <a href="#invisible" class="page-scroll">Why this work never gets prioritised</a>
* <a href="#audio" class="page-scroll">Plugin one: audio import</a>
* <a href="#destruction" class="page-scroll">Plugin two: batching destruction</a>
* <a href="#dataflow" class="page-scroll">Parametrise first, then batch</a>
* <a href="#when" class="page-scroll">The rule: when is it worth writing?</a>
* <a href="#errors" class="page-scroll">The real return isn't time</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Why this work never gets prioritised {#invisible}

Tooling loses every scheduling argument, and the reason is structural: **it has no screenshot.**

A feature can be shown. A level can be walked through. A plugin that renames assets correctly produces a project that looks exactly like the project you already had, except that the next hundred imports don't go wrong.

So it gets postponed, and the manual version quietly taxes every week. It's the same problem as the [polish pass that adds no features]({{ '/2026/08/20/MAKING-ENEMIES-FEEL-HIT/' | relative_url }}) — work that's clearly worth doing and structurally hard to justify at the moment you'd have to do it.

The fix is the same too: **schedule it deliberately, or it won't happen.**

---

## Plugin one: audio import {#audio}

The first Unreal Editor plugin I wrote, and the one I'd recommend as anyone's first, because the job is completely mechanical.

Bringing a sound into a project is not one action. It's: import the file, rename it to the convention, assign the right **SoundClass**, assign the right **Attenuation**, create a **SoundCue**, and configure that cue — random pitch if it's a sound effect, looping if it's music.

Six steps, every time, for every sound. And every one of them is a place to make a small mistake you'll find three weeks later.

The plugin does all of it on import:

- **Renames** the SoundWave to the naming convention
- **Assigns SoundClass and Attenuation from the folder the file landed in** — the folder is already the categorisation, so stop asking the human to repeat it
- **Creates the SoundCue** with random pitch for effects, looping for music

<img src="https://img.mailinblue.com/9272083/images/content_library/original/69f4cab6151f9efcabbd01b6.gif" alt="Automated audio import creating and configuring SoundCue assets in Unreal" class="medium"/>

The design decision worth stealing is the middle one: **use structure you already maintain as the input.** Nobody had to invent metadata — the folder hierarchy was already the answer to "what kind of sound is this", it just wasn't being read by anything.

---

## Plugin two: batching destruction {#destruction}

The second one came out of *ORO*, where we wanted destruction to be part of how the game feels rather than a visual effect layered on top.

That ambition has an unglamorous consequence: **dozens of destructible elements**, each needing Chaos Destruction settings applied. Clustering, damage thresholds, the lot. Doing that by hand across dozens of assets is both tedious and — more importantly — inconsistent, because a human applying the same settings forty times does not apply the same settings forty times.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/6a4526a85d8f9520fc596a42.gif" alt="Destruction as part of game feel in ORO" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/6a45252cc62b85387ce1e585.png" alt="Chaos Destruction settings on a geometry collection" class="small"/>

---

## Parametrise first, then batch {#dataflow}

This is the part I'd have got wrong without doing it, and it generalises well beyond destruction.

The instinct is to write a script that repeats your clicks. That's automation of the *actions*, and it's brittle — the moment the settings need to change, you're editing a script and re-running it across everything.

The better move is two steps:

**First, make the settings a thing.** We used a **Chaos Dataflow Graph** to parametrise the destruction — clustering, damage thresholds — so the configuration exists as an asset rather than as values typed into forty places.

**Then batch the application.** A **C++ plugin** adds a context-menu action: select your meshes, create the geometry collections, and have the Dataflow asset applied automatically.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/6a45272f5d8f9520fc596a80.gif" alt="Batch-creating geometry collections with a Dataflow asset applied automatically" class="medium"/>

The difference matters enormously later. With the settings parametrised, **changing how destruction behaves across the whole game is editing one asset**, not re-running a script. You've automated the repetition *and* removed the duplication, which are two different wins and only one of them is obvious at the start.

It's the same shape as [parameterising VFX instead of authoring each effect]({{ '/2026/08/14/NIAGARA-VR-VFX/' | relative_url }}), and as the [weapon architecture rewrite]({{ '/2026/08/11/VR-WEAPON-SYSTEM/' | relative_url }}). On a small team, the thing worth optimising is never the asset — it's the cost of the next one.

---

## The rule: when is it worth writing? {#when}

Three conditions, and I want all three before I open an editor plugin project:

**1. It's fully mechanical.** No judgement in the loop. If a step requires deciding, automating it means automating a bad decision.

**2. You've done it enough to know the shape.** Writing the tool before you've felt the task means guessing at requirements. The fortieth repetition is annoying *and* it's what taught you what the tool needs to do.

**3. It will keep happening.** A one-off batch job is a one-off batch job. Write the throwaway script, don't build the plugin.

If any of those is missing, do it by hand once more. If all three hold, the plugin usually pays back inside the same project — and that's before counting the second return, which is the bigger one.

---

## The real return isn't time {#errors}

I framed both of these as time savings when I started. That's not where the value came from.

**The value is that the errors stop.** A misnamed asset, a missing attenuation, a slightly different damage threshold on one of forty geometry collections — none of these are catastrophic, and all of them cost you an hour of confused debugging at some point in the future, usually when you've forgotten that this asset was set up on a different afternoon than the others.

Automation makes the project *uniform*, and uniformity is what lets you reason about it. **A project where every sound was configured the same way is one where a sound behaving oddly is a real signal**, not just possibly a setup mistake.

That's the argument I'd use on yourself when the tooling task is competing with a feature: you're not buying minutes, you're buying the ability to trust your own project.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Do you need C++ to write Unreal editor tools?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Not to start. Editor utility blueprints and Python scripting cover a lot of asset-manipulation work, and they're the right place to prototype what the tool should do. C++ becomes worth it when you want proper editor integration — a context-menu action that feels like part of the engine rather than a utility you have to go and find.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Isn't folder-based configuration fragile?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
It is if your folder structure is arbitrary. It's excellent if the structure is already meaningful and enforced — which for audio it usually is, because you organised the files that way for your own sake before any tool existed. Use it where the convention already holds; don't invent a convention just so a script can read it.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>What if the settings change after you've batched everything?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
That's exactly the case the parametrised approach is for. If the batch tool copied values into every asset, you re-run it and hope. If it applied a shared configuration asset, you edit that asset once. The extra work up front buys you the ability to change your mind later, which you will.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>How do you justify tooling time on a small team?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Count the errors, not the minutes. Time saved is easy to argue against because the manual version "only takes a moment". The cost of one inconsistent asset causing a debugging session next month is harder to dismiss, and it's the honest number.
</div>
</details>

</div>

---

{% include en/subscribe-form.html title="Get More Game Dev Insights Like This" %}

---

### 💬 What did you finally automate?

Everyone has one task they did by hand for far too long. I'd like to know what yours was, and what finally tipped it — for me it's always been the annoyance rather than the arithmetic.

Reach me on Discord, or at guillaume.escarieux@mineogames.com.
