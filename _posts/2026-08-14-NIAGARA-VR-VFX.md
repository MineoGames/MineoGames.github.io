---
layout: post
title: "Niagara for VR VFX: What Three Months of Particles Taught Me"
description: "Ribbons, beams, sparks, gas and fire — plus the performance ceiling that decides which of them you're actually allowed to ship. Notes from learning Unreal's Niagara for a VR game."
keywords: "Niagara VFX, Unreal Engine Niagara, VR particle effects, Niagara tutorial, VFX performance VR, Quest performance particles, Niagara collision, ribbon beam sparks Niagara, Unreal Engine VR optimisation, game VFX for indie devs"
lang: en
ref: niagara-vr-vfx
topic: tech
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/2046b6db-85f4-d002-ab03-a3386f154b92.gif
---

I spent about three months getting properly good at **Niagara**, Unreal's particle system, because the weapons in *Vermin Exterminator* had reached the point where the mechanics worked and nothing felt like it had happened.

That's the honest reason to learn VFX on a small team. Not to make things pretty — **to make actions legible.** In VR especially, an effect is not decoration; it's the game telling the player's body that the thing they just did had a consequence.

Here's what I'd tell a past version of myself before starting.

---

## Table of Contents

* <a href="#why" class="page-scroll">Why VFX matters more in VR</a>
* <a href="#vocabulary" class="page-scroll">The vocabulary: ribbons, beams, sparks, gas, fire</a>
* <a href="#collision" class="page-scroll">Collision is what makes an effect part of the world</a>
* <a href="#dynamic" class="page-scroll">Colour and size over lifetime</a>
* <a href="#budget" class="page-scroll">The performance ceiling is the design constraint</a>
* <a href="#sun" class="page-scroll">The one-day exercise that taught me most</a>
* <a href="#reuse" class="page-scroll">Build them configurable, or build them twice</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Why VFX matters more in VR {#why}

On a flat screen, the player watches an event. In a headset, the player **is standing where the event happens**, at a scale their body understands, with the ability to lean in.

Three consequences fall out of that, and they shape every decision below:

**You can't fake depth.** Flat-screen VFX leans hard on camera-facing sprites. Stereo vision reads them as the flat cards they are, from the first time someone tilts their head.

**Scale is felt, not judged.** An effect that reads as "big" on a monitor reads as an actual size in VR, and if that size is wrong the whole moment feels off in a way players can't articulate.

**Everything is close.** Muzzle effects happen at arm's length, in the highest-acuity part of the player's vision, at whatever framerate you're holding. There's nowhere to hide.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/e99adcc2-e43c-a49f-4dc2-9782b11e627a.gif" alt="Niagara effects on a ranged weapon in Vermin Exterminator" class="medium"/>

---

## The vocabulary: ribbons, beams, sparks, gas, fire {#vocabulary}

Learning Niagara is mostly learning which primitive to reach for. The set I ended up using constantly:

- **Ribbons** — continuous trails; the thing that turns a fast-moving object into a readable path
- **Beams** — a connection between two points; instant, unambiguous, ideal for showing "this hit that"
- **Sparks** — small, fast, short-lived; impact punctuation
- **Gas** — volume and drift; presence rather than event
- **Fire** — the one everyone starts with and the one that most rewards restraint

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/5c0ac835-ea26-69a5-6637-679ccf8568a8.gif" alt="Ribbon trail effect built in Niagara" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/415e39ec-aa95-42f4-de9e-1903ba895288.gif" alt="Beam effect connecting weapon and target" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/f639326a-0eca-8ae0-836e-811e4635ecf8.gif" alt="Spark burst on impact" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/3256c0ac-837d-6a17-a351-b6e0bf2f0159.gif" alt="Gas and volume effect in Niagara" class="small"/>

The insight that took me longest: **each of these answers a different question.** Ribbons answer *where did it go*. Beams answer *what did it connect*. Sparks answer *did it land*. If you're unsure which to use, you probably haven't decided what the player needs to know.

---

## Collision is what makes an effect part of the world {#collision}

The single upgrade that changed how our effects feel: **giving particles collision detection.**

An effect that passes through geometry is a video playing in the room. An effect whose sparks bounce off the floor and whose gas stops at a wall is an event that happened *in* the room. Same particle count, completely different reading.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/690f95c3-26fb-569c-8de0-34e82eefcd15.gif" alt="Particles colliding with world geometry" class="medium"/>

It isn't free — collision is one of the costs you'll be trading against below. But it's the cost I'd pay first, because it buys credibility that no amount of extra particles can.

---

## Colour and size over lifetime {#dynamic}

The second thing worth learning early: **drive colour and size dynamically instead of setting them once.**

A spark that starts white-hot, cools to orange, and shrinks as it dies is doing physics the player already knows. It reads correctly without anyone explaining it. A spark that is orange at a fixed size for its whole life reads as a moving dot.

This is also where VFX quietly becomes game feedback. In our weapon system, effect colour carries state — heat, ammunition type, whether a hit registered. **A player who can read the weapon's condition from its muzzle doesn't need a HUD**, which in VR is the whole ballgame. That's covered in more detail in [the weapon system post]({{ '/2026/08/11/VR-WEAPON-SYSTEM/' | relative_url }}).

---

## The performance ceiling is the design constraint {#budget}

Here is the part that separates VR VFX from VFX.

Every effect competes for the frame budget with everything else, and in VR the budget is both smaller and non-negotiable. You are rendering two views. A dropped frame isn't a stutter, it's discomfort. **There is no "it's fine on my machine"** — the machine is on someone's face.

So the real skill isn't building an impressive effect. It's **optimising visual quality without compromising smoothness** — and knowing which knob to turn when the effect is over budget:

- Fewer, larger, shorter-lived particles usually beat many small persistent ones
- Collision on the particles that need to feel physical, off on the ones that just need to be seen
- Kill effects on distance and on occlusion rather than letting them run out of politeness
- An effect that only ever plays at arm's length can afford detail an ambient one cannot

I now build every effect with a rough answer to *"how many of these can be on screen at once"* before opening the editor. Retro-fitting that answer is much more expensive.

---

## The one-day exercise that taught me most {#sun}

Somewhere in the middle of this, I took a friend's logo and rebuilt it as a **3D spinning, burning sun over an Arizona desert**. One day, start to finish.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/1d87be90-bad7-1607-99a4-c85066d81c06.gif" alt="A 3D spinning burning sun built in Niagara in a single day" class="medium"/>

It had nothing to do with the game, and it was the most useful day of the three months. A self-contained piece with a deadline of *tonight* forces you to actually finish something, and finishing is where you discover which parts of your knowledge are real.

If you're learning a tool this large, **put a one-day, throwaway, finished thing between every two tutorials.** The tutorials teach features; the exercise teaches judgement.

---

## Build them configurable, or build them twice {#reuse}

Last one, and it's the small-team argument.

If each effect is authored by hand for one weapon, then every new weapon is a fresh VFX task, and VFX will always be the thing you don't have time for. If effects are **parameterised** — colour, size, lifetime, collision behaviour, all exposed — then a new weapon is a parameter change.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/ad40759b-27a6-0f2a-6289-5c2c8b5921e8.gif" alt="Configurable Niagara systems reused across weapons" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/044038c5-977f-fecd-66b0-7e0f3b6c92ba.gif" alt="Fire and explosion effects built with Niagara" class="small"/>

That's the same conclusion I reached about weapon architecture, arriving from a different direction: **on a small team, the thing worth optimising is not the asset, it's the cost of the next asset.**

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Is Niagara worth learning for a solo dev, or should I buy effects?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Bought effects are a fine starting point and a bad ending point, because they're authored without knowledge of your performance budget or your feedback needs. Learning enough Niagara to modify and re-tune what you buy is a much smaller investment than learning to author from scratch, and it's where most of the value is.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>How much does particle collision actually cost?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Enough that it's a decision rather than a default. The practical approach is per-effect: turn it on for anything the player will see interacting with a surface up close, and off for ambient or distant systems where nobody could tell. Profile on the target headset, not in the editor — that gap is large.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Do flat-screen VFX tutorials still apply to VR?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
The techniques do; the shortcuts don't. Anything relying on a single camera angle — camera-facing sprites standing in for volume, painted-on depth, effects tuned to look right from one distance — has to be re-checked in stereo. Assume every tutorial trick is valid until you've viewed it from the side.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Where do you start if you've never opened Niagara?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
With one impact effect for something already in your game. It's small, it's immediately testable, and it forces you through emitters, modules and lifetime curves without the scope to get lost in. Then do the one-day throwaway piece — that's where it stops being a tutorial and starts being a skill.
</div>
</details>

</div>

---

{% include en/subscribe-form.html title="Get More Game Dev Insights Like This" %}

---

### 💬 What's your VFX budget look like?

If you're doing particles in VR I'd genuinely like to compare notes on where your frame budget goes — it's the number nobody publishes and everybody wants to know.

Reach me on Discord, or at guillaume.escarieux@mineogames.com.
