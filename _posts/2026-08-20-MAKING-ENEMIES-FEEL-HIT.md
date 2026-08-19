---
layout: post
title: "Making Enemies Feel Hit: Reactions, Balance, and the Framerate Cost of a Crowd"
description: "A hit that doesn't produce a reaction didn't happen. Here's the pass where we added no features at all and the game started feeling like a game."
keywords: "game feel VR, hit reaction, physical animation Unreal, enemy feedback, weapon balancing, VR combat design, NPC performance optimisation, DLSS DLAA VR, particle feedback, Vermin Exterminator devlog"
lang: en
ref: making-enemies-feel-hit
topic: games
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/f356ccb2-628e-cec3-01de-39f2d29650ff.gif
---

There's a version of *Vermin Exterminator* where every system worked and the combat felt like nothing. You swung, damage was applied, an enemy eventually stopped existing. Correct on paper, dead in the hand.

The fix wasn't a feature. It was a pass where we added **no new mechanics at all** and worked entirely on what happens in the quarter-second after contact.

That's the pass I'd tell anyone to schedule deliberately, because it never gets prioritised on its own — it looks like polish and behaves like design.

---

## Table of Contents

* <a href="#the-quarter-second" class="page-scroll">The quarter-second after contact</a>
* <a href="#reactions" class="page-scroll">Physical reactions instead of canned ones</a>
* <a href="#legibility" class="page-scroll">Particles as information, not decoration</a>
* <a href="#balance" class="page-scroll">Balancing is part of feel</a>
* <a href="#crowd" class="page-scroll">The framerate cost of a crowd</a>
* <a href="#settings" class="page-scroll">Performance settings are a feel feature</a>
* <a href="#schedule" class="page-scroll">Schedule the pass that adds nothing</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## The quarter-second after contact {#the-quarter-second}

Everything that makes combat feel good happens in a window most design documents don't mention: **between the moment of contact and about 250 milliseconds later.**

In that window the player's body is running a prediction. They swung a real arm at a real angle with real force, and their nervous system already has an expectation of what should follow. The game either confirms it or contradicts it, and it doesn't get a second attempt.

**On a flat screen you can fake this with animation.** The player is watching, they accept the film. In VR they *performed* the input, so a response that doesn't match what their arm did reads as wrong before they can say why.

---

## Physical reactions instead of canned ones {#reactions}

The biggest single change: enemies react **physically** to being hit, rather than playing a hit animation.

A canned reaction is the same regardless of where or how hard you struck. It's fine at a distance on a monitor. Up close, in VR, with the player's own arm as the cause, it's the tell that breaks the illusion — you hit a creature on the left and it flinched to the right, exactly as it did last time.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/f356ccb2-628e-cec3-01de-39f2d29650ff.gif" alt="A spider reacting physically to being struck" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/a56b8210-cca7-61f3-1b40-7a2bae4cdc75.gif" alt="A rat reacting physically to a hit" class="small"/>

Different creatures needed different treatment, which was the part I underestimated. A spider and a rat don't share a body plan, a mass, or a way of losing balance. **Reaction is a character trait**, not a global setting — and getting it wrong makes an enemy feel like a prop wearing a costume.

The animation work underneath this is unglamorous and it's where the feel actually lives. More realistic creature movement did more for the combat than any weapon change we made in the same period.

---

## Particles as information, not decoration {#legibility}

The second layer is what the player *sees* confirming the hit.

It's easy to treat particle effects as garnish. They aren't — in a fast exchange they're often the only thing telling the player whether contact registered at all. A spray that stops at the right distance, a burst whose size scales with the force of the blow, sparks that read at a glance: these are **feedback channels**, and they're doing the same job as the haptics.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/68297cc3-00bc-1ba3-af8e-4fe7d0490666.gif" alt="Spray effects providing hit feedback" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/17bd2f89-c713-2c02-b60f-57997e9f676f.gif" alt="Fire effects on impact" class="small"/>

The rule I ended up with: **if you removed the sound and the haptics, could the player still tell what happened from the visuals alone?** If not, the effect is decorating rather than reporting. This is exactly why we ended up parameterising effects properly rather than authoring them one at a time — that story is in the [Niagara post]({{ '/2026/08/14/NIAGARA-VR-VFX/' | relative_url }}).

---

## Balancing is part of feel {#balance}

Weapon balancing usually gets filed under difficulty. In VR it belongs under feel as well.

The reason is the one that ruins so many flat-screen-to-VR conversions: **your aiming and your strength are physical, so the numbers mean something different.** A weapon that needs three hits when the player's body expected two doesn't read as "balanced harder" — it reads as the weapon being weak, or the hits not registering.

So balance passes and feel passes have to happen together. Changing damage numbers changes how solid a weapon feels, whether or not you touched anything to do with feedback.

---

## The framerate cost of a crowd {#crowd}

Here's the constraint that shapes all of the above.

One enemy with beautiful physical reactions is easy. **Several on screen at once, all reacting physically, all spawning particles, in stereo, at headset framerate** — that's where the design meets the budget. A significant chunk of that pass wasn't authoring anything; it was making the game hold up when multiple NPCs appear at the same time.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/e37fec18-1215-2b21-aa69-119b0246fd88.gif" alt="Multiple creatures active at once in the level" class="medium"/>

This matters more in VR than anywhere else, because the failure mode isn't ugliness — it's discomfort. **A dropped frame during a fight isn't a visual glitch, it's a physical symptom.** Which means the crowd size your feedback can afford is a hard design input, not something to discover in QA.

---

## Performance settings are a feel feature {#settings}

One thing I'd have classed as pure tech and now don't: giving players **DLSS/DLAA with adjustable settings**.

On PC VR the hardware spread is enormous, and comfort is not negotiable. A player who can trade visual fidelity for stable framerate isn't being offered a convenience — they're being offered the ability to play at all without feeling ill.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/7e777bc3-e1fc-ebb2-87a4-a0828192be70.gif" alt="Performance settings including DLSS and DLAA" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/da785cae-e300-bb01-56df-4759a1fc72c2.gif" alt="Adjustable graphics settings in the VR menu" class="small"/>

So the settings menu is part of the feel work. It's the thing that lets your carefully tuned quarter-second survive contact with someone else's machine.

---

## Schedule the pass that adds nothing {#schedule}

The practical takeaway.

A pass that adds no features **will never win a prioritisation argument against one that does**, because the feature has a name and the pass has a feeling. So it has to be scheduled deliberately, as its own block of time, with its own definition of done.

Ours was roughly: every enemy reacts distinctly, every hit is visible without audio, the crowd size holds framerate, and the settings let a mid-range machine stay comfortable. None of those is a feature. Together they're the difference between a prototype and a game.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Physical reactions or animated ones?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Physical for anything the player strikes at close range in VR, because their own arm supplied the input and their expectation is specific. Animated is fine for distant enemies, scripted moments, or anything the player didn't cause. Most projects end up blending the two, driven by distance.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>How many reacting enemies can you afford?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Fewer than you'd like, and the number is worth establishing early because it constrains encounter design. Test it on your minimum target hardware rather than your development machine — the gap is wide, and in VR exceeding it costs comfort rather than just smoothness.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Is upscaling worth it in VR, given the artefacts?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
It's a trade the player should make, not you. Some setups will prefer maximum clarity at a lower frame budget; others need every frame they can get. Offering the setting with clear options respects a hardware range you can't predict, which is the actual situation on PC VR.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>How do you know when the feel pass is done?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Write the criteria before you start, because "it feels good now" is not a finish line and the work will otherwise expand indefinitely. Concrete, checkable statements — each enemy reacts distinctly, hits read without sound, the target crowd holds framerate — turn an open-ended polish pass into something you can actually complete.
</div>
</details>

</div>

---

{% include en/subscribe-form.html title="Get More Game Dev Insights Like This" %}

---

### 💬 What made your combat click?

Every project seems to have one specific change that turned combat from correct into satisfying. I'd like to know what yours was — mine was reactions, but I've heard convincing arguments for audio.

Reach me on Discord, or at guillaume.escarieux@mineogames.com.
