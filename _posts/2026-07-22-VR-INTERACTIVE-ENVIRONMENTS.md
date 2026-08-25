---
layout: post
title: "In VR, Players Open Everything: Designing Interactive Environments That Keep Their Promise"
description: "Doors, fridges, drawers, ovens, light switches. Once one drawer opens, every drawer has made a promise — and the cost of keeping it is where VR level design actually gets hard."
keywords: "VR interactive environment, VR level design, physics objects VR, immersive sim VR, Unreal Engine interactive props, VR affordance design, grabbable objects VR, VR performance optimisation, environmental storytelling VR, Vermin Exterminator level design"
lang: en
ref: vr-interactive-environments
topic: games
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/05c5a3ed-64f4-dbfc-33eb-9dc4eeb10c76.gif
---

When we built the second level of *Vermin Exterminator* — a sprawling apartment complex — the plan was a bigger space with more places for vermin to hide.

What we actually built was a machine for generating expectations. **Because the moment one drawer opens, every drawer in the building has made a promise.**

That's the part of VR level design nobody warns you about, and it isn't a technical problem. It's a promise-management problem that happens to cost framerate.

---

## Table of Contents

* <a href="#everything" class="page-scroll">People open everything. Everything.</a>
* <a href="#promise" class="page-scroll">One interactive object makes a promise for the whole room</a>
* <a href="#what-we-built" class="page-scroll">What we actually made interactive</a>
* <a href="#cost" class="page-scroll">What it costs, honestly</a>
* <a href="#boundary" class="page-scroll">Drawing the boundary so players don't find it</a>
* <a href="#payoff" class="page-scroll">The payoff: the room becomes the toolbox</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## People open everything. Everything. {#everything}

Put someone in a room on a flat screen and they walk through it. Put them in the same room in VR and they **touch it.**

They open the fridge. They pick up a plate. They pull a drawer that has no reason to contain anything. They flip a light switch to see if it works. None of this is in your design document, and all of it happens in the first ninety seconds.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/05c5a3ed-64f4-dbfc-33eb-9dc4eeb10c76.gif" alt="Opening a drawer in the apartment level" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/e80c6ec7-e2c4-08f7-e88b-ccf43a2b3fc1.gif" alt="Opening an oven in the apartment level" class="small"/>

The reason is straightforward: their hands are their hands. There's no verb to learn, no button to discover. **Reaching out is not a game mechanic to them — it's what they do in rooms.**

---

## One interactive object makes a promise for the whole room {#promise}

Here's the trap.

On a flat screen, interactivity is signposted. A usable object gets a prompt, an outline, a highlight, and everything without one is scenery. Players read the convention and stop trying.

In VR there's no such contract. **The first working drawer teaches the player that drawers work here.** From then on, a drawer that doesn't open isn't neutral — it reads as broken, and it costs more immersion than the ten working ones bought.

This is why "let's make a few key objects interactive" is the worst possible position to land in. **It's more coherent to make nothing interactive than to make some things interactive.** One of those is a stylised world. The other is a world that lies inconsistently.

---

## What we actually made interactive {#what-we-built}

For the apartment level we committed to the promise across the fixtures people actually reach for:

- **Doors, fridges, drawers and ovens** that open
- **Objects you can grab, move, and throw** rather than just look at
- **Lights you can switch on and off**

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/69755be3-8659-96c1-9c8b-8740f3ef7cc2.gif" alt="Interactive fridge in the VR apartment" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/1b632de0-c4ff-c8d0-cc42-8d7d1e7fd323.gif" alt="Grabbing and manipulating an object in the level" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/a4654cf5-c850-ef5a-1ea5-d172f2b876b9.gif" alt="Throwing an object across the room" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/0bcf0237-8fe9-95b6-6ca0-0da09e87dade.gif" alt="Cupboards and storage opening in the apartment" class="small"/>

The light switch deserves a special mention. It's one of the cheapest interactions to implement and one of the highest-return, because **it's the first thing a player tests to find out what kind of world they're in.** If the switch works, they trust the building. If it doesn't, they stop reaching for anything.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/61a48fc9-5bd8-6503-cc3f-73406deb7cc0.gif" alt="Toggling a light switch in the apartment level" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/916b2043-a8ac-32c7-613c-d9942e27b18f.gif" alt="Interactive props on a dinner table" class="small"/>

---

## What it costs, honestly {#cost}

Every interactive object is not one thing. It's:

- **A physics body**, which is a per-frame cost that exists whether or not anyone touches it
- **State**, which has to persist while the player is elsewhere in the level
- **A grab affordance** that has to work from any angle a hand can approach from
- **Feedback** — sound, haptics, resistance — or the interaction feels like a bug
- **A failure mode**, because anything that can be thrown can be thrown somewhere it shouldn't be

Multiply that by an apartment complex and the level becomes a performance problem before it becomes a design one. A significant part of building this level was **optimisation work**, not authoring — and that ratio was the surprise.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/64494550-7ed5-48a6-dc17-47cc5e22d098.gif" alt="A furnished bedroom in the apartment complex" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/7c281823-a3aa-83da-524d-d786f88997f3.gif" alt="A second bedroom with interactive furniture" class="small"/>

---

## Drawing the boundary so players don't find it {#boundary}

You cannot make everything interactive. So the actual design skill is **placing the boundary where nobody reaches for it**, using the environment rather than a rule.

Things that work:

**Make categories, not exceptions.** All drawers open, or no drawers exist. A player builds a model of the world by category; violating one instance of a category is what breaks it.

**Remove rather than deaden.** If you can't afford interactive cupboards in a room, design the room without cupboards. An absent object makes no promise; a fake one makes a broken one.

**Use distance and framing.** Fixtures behind glass, above reach, or in a locked area are excluded by the world's own logic, and players accept that instantly because it's how rooms work.

**Spend the budget where hands go.** Waist-to-shoulder height, along the player's route. Nobody tests the underside of a table.

---

## The payoff: the room becomes the toolbox {#payoff}

The reason to pay all this is that a fully interactive room stops being a backdrop and becomes **equipment**.

That's exactly what happened with our combat: because objects can be picked up and thrown, the environment is a weapon rack. That connection wasn't planned — it fell out of building both systems honestly, and it's covered in the [weapon system post]({{ '/2026/06/28/VR-WEAPON-SYSTEM/' | relative_url }}).

**Interactivity you commit to fully starts generating gameplay you didn't design.** Interactivity you commit to halfway just generates complaints.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Isn't it enough to highlight the interactive objects?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
It works, and it costs you the thing you came to VR for. Outlines and prompts are a flat-screen convention that tells the player to stop exploring and start reading. Sometimes that trade is right — for a training module or a puzzle game with a tight scope — but in a game about being somewhere, it's expensive.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>How do you stop players throwing things out of bounds?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
You don't stop them — they will, and they'll try specifically because you'd rather they didn't. Plan for recovery instead: objects that return, respawn, or simply don't matter. A design where one thrown object can soft-lock progress is a design that will be soft-locked.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Does all this physics actually hold framerate?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Only with deliberate work — sleeping bodies, culling by distance and room, and a hard cap on how many objects can be simultaneously active. Budget optimisation as a chunk of the level's build time rather than a pass at the end, because in VR a dropped frame isn't a stutter, it's discomfort.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Where would you start on a small team?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Doors and light switches, then anything at hand height on the player's main route. Those three cover most of what people instinctively try, and getting them right buys more trust per hour of work than a room full of grabbable clutter nobody notices.
</div>
</details>

</div>

---

{% include en/subscribe-form.html title="Get More Game Dev Insights Like This" %}

---

### 💬 Where did you draw the line?

Every VR project has to decide how far the interactivity promise extends. I'd like to hear where you put yours, and whether players found the edge.

Reach me on Discord, or at guillaume.escarieux@mineogames.com.
