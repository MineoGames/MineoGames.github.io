---
layout: post
title: "Ported vs Native VR: What Playing Jedi Outcast in a Headset Taught Me"
description: "A VR port can hand you the fantasy and still get the game wrong. Playing TeamBeef's Jedi Outcast conversion turned into the clearest design lesson I've had about what VR actually changes."
keywords: "ported VR game, native VR design, VR port, Jedi Outcast VR, TeamBeef JKXR, VR difficulty tuning, VR aiming, VR level design, VR game design lessons, flatscreen to VR conversion, VR accessibility"
lang: en
ref: ported-vs-native-vr
topic: games
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/7f6d2018-b6a1-72d7-b487-a7ec2b51b320.gif
---

I played TeamBeef's VR conversion of *Star Wars: Jedi Outcast* expecting a nostalgia hit. I got a design lecture.

**Holding out a hand and pushing something across a room with the Force is one of the best things I've done in a headset.** That part is not a compromise — the port hands you the fantasy whole, and it's better in VR than it ever was on a monitor.

And then, repeatedly, the game becomes unplayable in ways that have nothing to do with the port being badly made. That gap is the interesting part, and it's why I'm writing about someone else's game on a studio blog.

---

## Table of Contents

* <a href="#what-works" class="page-scroll">What a port gets for free: the fantasy</a>
* <a href="#difficulty" class="page-scroll">Difficulty doesn't survive the move</a>
* <a href="#precision" class="page-scroll">Precision was never the same skill</a>
* <a href="#snipers" class="page-scroll">The sniper problem</a>
* <a href="#lesson" class="page-scroll">The actual lesson for native VR</a>
* <a href="#worth-it" class="page-scroll">So are ports worth playing?</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## What a port gets for free: the fantasy {#what-works}

Start with the good news, because it's genuinely surprising how much transfers.

The **power fantasy survives the move intact**, and in places it gets stronger. A Force push aimed with your actual arm is a different sensation from a Force push aimed with a mouse — not because the mechanic changed, but because your body is now the input device and it believes what it's doing.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/dd836133-07f5-1794-7af6-afd4b25dcad6.jpg" alt="Star Wars: Jedi Outcast running as a VR conversion" class="medium"/>

This is the argument for ports in one image. Twenty-year-old level design, twenty-year-old assets, and it still lands, because **the thing VR upgrades is not fidelity — it's agency.**

---

## Difficulty doesn't survive the move {#difficulty}

Here's where it comes apart. The AI is balanced for a player with a mouse.

**Enemy damage and accuracy are tuned against a threat model that no longer exists.** On a desktop, a competent player snaps to a target in a fraction of a second and holds it. In a headset, aiming is a physical act performed by an arm that is unsupported, tired, and attached to a body that has to turn. The enemy hasn't changed. The player's ceiling has dropped by a large factor, and nothing rebalanced.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/7f6d2018-b6a1-72d7-b487-a7ec2b51b320.gif" alt="Combat in the Jedi Outcast VR conversion" class="medium"/>

The result reads as unfairness, but it isn't a difficulty setting problem. **It's a units problem.** The numbers are correct in the wrong unit system.

---

## Precision was never the same skill {#precision}

Two mechanics exposed this hardest: **precise jumping and precise aiming.**

Both are trivially solvable with a mouse and keyboard because both are, at bottom, a matter of setting a value accurately. In VR neither one is a value you set — they're both motions you perform.

A jump you have to land exactly asks the player to control a character's position with a locomotion scheme that was designed to feel comfortable, not exact. Comfort and precision are frequently in direct opposition, and every VR locomotion decision spends one to buy the other.

This is the same thing I ran into building our own weapon system, from the other side: a hand is never still, and unfiltered tracking data reads as player error. I wrote about what that took to fix in [the weapon system post]({{ '/2026/06/28/VR-WEAPON-SYSTEM/' | relative_url }}). A port has no opportunity to make that fix — it inherits mechanics that assume a precision the medium doesn't offer.

---

## The sniper problem {#snipers}

The sniper sections deserve their own mention because they compound every issue above.

A sniper is a long-range accuracy check on a timer, against an enemy that can also hit you at long range. In VR that becomes: hold your arm out, keep it steadier than a human arm holds still, while turning your whole body to search, with an enemy whose accuracy was calibrated against a mouse.

None of those individually is fatal. Together they produce a section that people simply stop playing.

**Difficulty spikes in VR are rarely designed. They're inherited.**

---

## The actual lesson for native VR {#lesson}

Three things I took back into our own work.

**Tune difficulty against the input, not against the fiction.** If your enemy's accuracy was chosen when aiming was easier, it is now a different enemy. Re-derive the number, don't scale it.

**Never require precision your locomotion can't deliver.** If your movement is built for comfort — and it should be — then any mechanic demanding exactness is a mechanic fighting your own foundation.

**The fantasy is what VR adds; the calibration is what VR breaks.** Those are separable, and knowing which is which tells you what to keep from any flatscreen design you admire.

That last one is the reason to play ports as a developer: they isolate the variable. **You get to see exactly which parts of a good game were carried by the input device.**

---

## So are ports worth playing? {#worth-it}

Absolutely — with the expectation set correctly.

Play them for the moments where a twenty-year-old idea suddenly works better than it did. Don't play them expecting a balanced game, and don't conclude that VR is bad at combat because a port's combat was balanced for something else.

And if you make VR games, play them **specifically at the points where they fall apart**. That's the free research. Someone has already run the experiment of taking a great flatscreen design and changing exactly one variable.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Can a port ever be as good as a native VR game?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
At specific moments, better — the fantasy transfers and sometimes intensifies. Over a whole game, not really, because the tuning would have to be redone throughout, and at that point you've made a new game. The ports that feel best are the ones that were willing to change numbers, not just add tracking.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Why not just lower the difficulty?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Because the difficulty isn't uniformly too high — it's mis-shaped. Melee can be easier than intended while ranged is far harder, so a global slider makes half the game trivial to fix the other half. What's needed is re-tuning per mechanic, which is a design pass rather than a setting.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Does this mean VR shouldn't have precision mechanics at all?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
No — it means precision has to be designed as a physical act rather than assumed as a given. Motion filtering, generous hit volumes, and mechanics where a steady hand is rewarded rather than required all work. What doesn't work is a pass/fail check that assumes mouse-grade accuracy.
</div>
</details>

</div>

---

{% include en/subscribe-form.html title="Get More Game Dev Insights Like This" %}

---

### 💬 Which VR port taught you the most?

I'm collecting these. The ports that break interestingly are more instructive than most native games, and everyone seems to have a different one.

Reach me on Discord, or at guillaume.escarieux@mineogames.com.
