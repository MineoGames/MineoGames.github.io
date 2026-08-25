---
layout: post
title: "Designing a VR Weapon System: Three Rebuilds and What Each One Taught Me"
description: "Melee, ranged, a gauntlet, and a rewrite borrowed from Lyra. Every version of Vermin Exterminator's weapon system failed in a different way — here is what each failure was about."
keywords: "VR weapon system, VR melee combat, Unreal Engine VR weapons, Gameplay Ability System, Lyra architecture, VR haptics, VR gun system, weapon switching VR, physics melee Unreal, Niagara VFX weapons, VR game design, Vermin Exterminator"
lang: en
ref: vr-weapon-system
topic: tech
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/25667f1d-6ecb-79cb-42e7-9c306d917510.gif
---

The weapon system in *Vermin Exterminator* has been rebuilt three times. Not polished three times — **rebuilt**, from the architecture up.

That sounds like bad planning, and partly it was. But each rebuild failed in a different way, and the failures were the useful part. **A VR weapon isn't a flat-screen weapon with tracking bolted on**, and it took me three attempts to stop treating it like one.

Here is what each version got wrong.

---

## Table of Contents

* <a href="#anything" class="page-scroll">Version 1: anything you can pick up is a weapon</a>
* <a href="#physics" class="page-scroll">Physics is what makes a hit land</a>
* <a href="#switching" class="page-scroll">The real problem was switching, not shooting</a>
* <a href="#lyra" class="page-scroll">Version 2: stealing Lyra's architecture</a>
* <a href="#heat" class="page-scroll">Version 3: heat, spread and ammunition</a>
* <a href="#haptics" class="page-scroll">The last 10% is haptics, sound and compensation</a>
* <a href="#lessons" class="page-scroll">What I'd tell someone starting today</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Version 1: anything you can pick up is a weapon {#anything}

The first melee pass shipped on a single rule: **if you can carry it, you can hit with it.** And if you'd rather not get close, you can hurl it at the vermin instead.

That rule came from watching people in headsets. Give someone a room full of objects and a threat, and they don't reach for the weapon you designed — **they reach for whatever is nearest.** Fighting that instinct is expensive and pointless. The design brief became: give players wide freedom, and let them find approaches I hadn't planned.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/02c9fde7-deb8-235d-adea-07bfb561c917.gif" alt="Using a carried object as a melee weapon in Vermin Exterminator" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/6502ca37-f305-3a39-0bde-5e770c323d3c.gif" alt="Throwing an object at vermin as a projectile" class="small"/>

It worked, and it immediately exposed the next problem: **a swing that registers as a hit is not the same thing as a swing that feels like one.**

---

## Physics is what makes a hit land {#physics}

Version 1 detected collisions and applied damage. Correct, and completely unsatisfying.

What was missing was the NPC's side of the exchange. Adding **physics interactions between melee weapons and NPCs** changed the whole feel — the target now reacts to where and how hard it was struck, rather than playing a canned reaction while a number goes down.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/87d2869f-a639-8493-a49e-3186eb64a7e6.gif" alt="Melee weapon physics interaction with an NPC" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/0dc644c5-243e-94df-d378-cd8b038eb5f0.gif" alt="Reworked gauntlet with physics-driven melee" class="small"/>

This is the VR-specific part. On a flat screen, the animation sells the impact and the player accepts it. **In VR the player's own arm did the motion**, so their body already has an expectation of what should happen. Anything canned reads as a lie.

---

## The real problem was switching, not shooting {#switching}

With melee and ranged both working, the system broke somewhere I hadn't been looking: **getting from one to the other.**

Ranged weapons were fully functional. But a player under pressure needs to change weapon without stopping to think about how — and in VR there's no key to bind and no HUD to open. Everything is a gesture, and a gesture you have to remember is a gesture you fumble.

So the gauntlet got a **selection system built for switching in one motion**, not a menu. We're still weighing a third slot for tools, and the hesitation is exactly the point: **each additional slot costs clarity**, and clarity is what keeps someone in the fight instead of in the interface.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/7f4d0c94-c716-8756-d693-0d3d170310cd.gif" alt="Weapon selection system on the gauntlet" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/8f4e1326-d1c4-cdc7-4bf2-9ca46d657208.gif" alt="Switching between melee and ranged weapons in one motion" class="small"/>

---

## Version 2: stealing Lyra's architecture {#lyra}

By this point the system worked and had become impossible to extend. Every new weapon meant touching the same overgrown blueprint.

The fix came from studying **Lyra**, Epic's sample project, and specifically its use of the **Gameplay Ability System**. The idea that mattered: features are modular, **added and removed at runtime**, rather than compiled into one class that knows about everything.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/3c73c11d-aacd-58e4-03a2-abf87d9ce9ce.gif" alt="Studying Lyra's modular architecture in Unreal Engine" class="small"/>

Rewriting the weapon system on that model was not a small job, and it added zero visible features on the day it landed. It bought something else: **the next weapon stopped being a risk.**

If you're a solo dev reading this and wondering whether GAS is overkill — it probably is for one weapon. It stops being overkill somewhere around the fourth.

---

## Version 3: heat, spread and ammunition {#heat}

The rewrite let us put real behaviour into the ranged weapons:

- **Dynamic bullet spread**, so accuracy is something you manage rather than a constant
- **A heat mechanic** — sustained fire has a cost that isn't just a number going down
- **Ammunition inventory replacing the old mana system**
- **Single-shot and automatic** firing modes
- **Configurable VFX with collision detection**, built in Niagara

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/ddb0be93-c643-8005-636b-c7caf136eef5.gif" alt="Bullet spread and heat mechanics on the reworked gun system" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/d759ed82-90dc-00ce-6828-83c335a2bc88.gif" alt="Niagara VFX with collision detection on weapon fire" class="small"/>

The mana-to-ammunition swap deserves a note. Mana is an abstraction you read off a bar. **Ammunition is an object you carry**, and in VR that difference is enormous — one is information, the other is a thing your hands have to deal with. Anything you can turn from a number into an object, turn into an object.

---

## The last 10% is haptics, sound and compensation {#haptics}

The final pass added no mechanics at all: **haptics, sound design, and movement compensation.**

Movement compensation is the unglamorous one and probably the most important. **A player's hand is never still.** Without compensation, the weapon inherits every tremor and micro-drift, and the player concludes they are bad at aiming when in fact the system is reporting noise. With it, intent survives and jitter doesn't.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/d265e32d-b082-67b0-4512-5871fa7e0315.gif" alt="Gauntlet with haptics, sound and movement compensation" class="medium"/>

Haptics and sound do the same job from the other side: they tell the player that something happened, on the same frame their body expected to be told. Take them away and the identical mechanic feels broken.

---

## What I'd tell someone starting today {#lessons}

**Build for switching before you build the second weapon.** The moment there are two, the interaction between them is the design problem, not either one on its own.

**Turn numbers into objects wherever you can.** VR rewards things you can hold and punishes things you have to read.

**Do the architecture pass before you need it — but not before you've shipped one.** I rewrote too late; rewriting from the start would have been designing in the dark.

**Budget feedback as a feature, not as polish.** Haptics, sound and compensation are not the finish on the mechanic. They're a third of the mechanic.

You can see where all of this ended up on the [Vermin Exterminator page]({{ '/games/vermin-exterminator/' | relative_url }}).

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Is the Gameplay Ability System worth it for a small team?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Not for your first weapon, and probably not for your second. The cost is a real learning curve and a rewrite. The return arrives when the number of things that can modify a weapon starts multiplying — that's the point where a monolithic blueprint stops being editable by anyone, including the person who wrote it.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Why let players use any object as a weapon? Isn't that hard to balance?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
It is harder to balance, yes. It is also what people do anyway the moment you put them in a room in VR. Blocking that instinct costs you more in immersion than the balancing costs you in tuning, and players reliably find approaches you never designed — which is most of the fun.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>What is movement compensation, exactly?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Filtering out the involuntary motion of a hand that is trying to hold still, so that only intended movement reaches the weapon. Without it, hand tremor reads as aiming error and players blame themselves for what is really unfiltered tracking data.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Do you need Niagara for weapon VFX?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
You don't need it to ship, but it's what let us give effects collision detection and make them configurable per weapon instead of authoring each one by hand. On a small team, that reuse is the argument — it turns "a new effect" into a parameter change.
</div>
</details>

</div>

---

{% include en/subscribe-form.html title="Get More Game Dev Insights Like This" %}

---

### 💬 Building weapons in VR?

If you're wrestling with switching, feedback, or an architecture that has stopped letting you add things, I'd like to hear where it broke. That conversation is usually more useful than a tutorial.

Reach me on Discord, or at guillaume.escarieux@mineogames.com.
