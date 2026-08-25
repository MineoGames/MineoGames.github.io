---
layout: post
title: "Converting a Flat 3D Prototype to VR Without Losing the Framerate"
description: "We took a top-down game jam project and rebuilt it as a working VR experience at 120 FPS. Here's the order the work has to happen in, and where the frames actually go."
keywords: "flat 3D to VR conversion, convert game to VR, VR Pawn Unreal, VR performance optimisation, TSR DLSS SpaceWarp, precomputed visibility, 120 FPS VR, Unreal Engine VR optimisation, VR framerate, porting a prototype to VR"
lang: en
ref: flat-3d-to-vr-conversion
topic: tech
image: https://img.mailinblue.com/9272083/images/content_library/original/692dca5a1039cd55e4e60d0d.png
---

We had a game jam project built as a top-down 3D game, and a question: could it become a real VR experience rather than a flat game viewed from inside a headset?

It could — running at **120 FPS** by the end. But almost none of the work was where I expected it to be. **The camera change took an afternoon. The framerate took the rest.**

Here's the order it has to happen in.

---

## Table of Contents

* <a href="#not-a-camera" class="page-scroll">A conversion is not a camera change</a>
* <a href="#pawn" class="page-scroll">Step one: the VR Pawn and the scale problem</a>
* <a href="#budget" class="page-scroll">Why the budget collapses immediately</a>
* <a href="#cpu" class="page-scroll">CPU first, because that's the one you can't upscale away</a>
* <a href="#gpu" class="page-scroll">GPU: TSR, DLSS and SpaceWarp</a>
* <a href="#visibility" class="page-scroll">Precomputed visibility: the free win</a>
* <a href="#worth-it" class="page-scroll">Is a conversion worth doing at all?</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## A conversion is not a camera change {#not-a-camera}

The tempting mental model is that VR is a camera option. Move the camera into the player's head, add tracking, done.

That gets you something that runs and nothing that works, because **a flat game is built on assumptions the headset removes**:

- The player sees exactly what you framed. In VR they look wherever they want, including at the parts you never dressed.
- Scale is arbitrary. In VR scale is felt, and a level built to read from above is often physically wrong to stand in.
- One view is rendered. In VR you render two, at high refresh, with no tolerance for a dropped frame.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/692dca551039cd55e4e60d0c.png" alt="The original top-down 3D version of the prototype" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/692dca5a1039cd55e4e60d0d.png" alt="The same project rebuilt as a VR experience" class="small"/>

That third point is the one that dominates the schedule. **The performance target isn't a quality setting in VR — it's the difference between playable and nauseating.**

---

## Step one: the VR Pawn and the scale problem {#pawn}

The first real task is replacing the player representation: a **VR Pawn** with tracked head and hands, in place of a camera looking down at a character.

This is where the scale problem surfaces immediately. A top-down game is authored to be legible from above — wide corridors, generous props, distances tuned for a camera that sees the whole room. Stand inside that and it reads as a doll's house or a cathedral, rarely as a place.

Getting this right early matters, because **every subsequent decision is downstream of scale.** Interaction distances, comfort, what's reachable, how much geometry is in view at once — and that last one is a performance input, not just a design one.

---

## Why the budget collapses immediately {#budget}

Here's the arithmetic that makes conversions hard.

A flat game rendering one view at 60 FPS and a VR game rendering two views at 120 FPS are not in the same league. You are asking for **several times the work per second**, and the tolerance for missing has gone from "a bit choppy" to "the player feels unwell".

So the honest first step after the pawn is to **measure before optimising**, and specifically to find out whether you're CPU-bound or GPU-bound. Every technique below helps exactly one of those, and applying a GPU fix to a CPU problem is a very common way to spend a week for nothing.

---

## CPU first, because that's the one you can't upscale away {#cpu}

This is the ordering that matters most, and the one I'd get wrong if I did it again by instinct.

**GPU cost has escape hatches. CPU cost mostly doesn't.** You can render at a lower internal resolution and upscale; you cannot upscale your way out of too many draw calls, too much tick logic, or too many actors doing work every frame.

So CPU work comes first: reducing what the engine has to think about each frame, before touching how it's drawn. If you optimise the GPU side first, you'll get a nice improvement, hit a wall, and then discover the wall was always the CPU.

---

## GPU: TSR, DLSS and SpaceWarp {#gpu}

Once the CPU side is honest, the GPU tools do their job. Three we leaned on, each solving something different:

**TSR** — temporal super resolution. Render at a lower internal resolution and reconstruct, using information across frames. Engine-native, works broadly, and the first thing to try.

**DLSS** — the vendor-specific version of the same bargain, with better reconstruction on supported hardware. Worth offering as an option rather than a default, because your players' hardware varies more than you'd like.

**SpaceWarp** — a different kind of trick entirely: synthesising intermediate frames from motion, so the headset gets its cadence even when the renderer can't quite keep up. Powerful, and not free of artefacts — it earns its place when the alternative is dropping frames, which in VR is never an acceptable alternative.

The framing I'd offer: **TSR and DLSS reduce what you render; SpaceWarp changes what the headset does with what you gave it.** They stack, and knowing which problem each solves stops you reaching for the wrong one.

---

## Precomputed visibility: the free win {#visibility}

The technique that felt like cheating: **precomputing visibility.**

The idea is simple. For a level that doesn't change, you can work out ahead of time which parts of the world are visible from where, and skip the rest at runtime instead of deciding every frame. You spend build time to buy frame time.

It suits a converted jam project unusually well, because those levels are small, static, and made of rooms. **The more walls your level has, the more this gives you** — and a top-down game usually has plenty, since walls were how you shaped the camera's view in the first place.

---

## Is a conversion worth doing at all? {#worth-it}

Honest answer: as a way to ship a VR game, usually not. As a way to learn, absolutely.

Playing someone else's VR port taught me what conversions break from the outside — difficulty tuned for a mouse, precision the medium can't deliver, which I wrote up in the [ported versus native post]({{ '/2026/07/16/PORTED-VS-NATIVE-VR/' | relative_url }}). Doing one myself taught the other half: **what it costs to make the frames, and in what order.**

That knowledge transfers directly to native work. Every VR project eventually has the conversation about where its frames are going, and having had it once on a small project is much cheaper than having it late on a large one.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>How long does a conversion like this take?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
The part that makes it run in a headset is fast — a pawn, some input, and you're standing in the level. The part that makes it hold framerate is the actual project, and it's most of the time. Budget on the second number, not the first.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Do I really need 120 FPS?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
You need whatever your target headset's refresh rate is, held consistently. A stable lower rate beats a higher one that drops — inconsistency is what makes people feel unwell, more than the absolute number. Pick the target early and treat it as a constraint rather than a goal.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Should I use upscaling by default?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Offer it, don't force it. Hardware varies enormously across PC VR, and the right trade between sharpness and headroom depends on the machine. What you should force is measuring first — knowing whether you're CPU- or GPU-bound decides whether upscaling helps you at all.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Which flat games convert well?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Ones built from rooms, at roughly human scale, where the fun doesn't depend on seeing everything at once. A top-down game where the overview *is* the mechanic loses its core the moment you stand inside it — that's a redesign, not a conversion, and it's worth knowing which one you signed up for.
</div>
</details>

</div>

---

{% include en/subscribe-form.html title="Get More Game Dev Insights Like This" %}

---

### 💬 Have you converted something to VR?

I'd like to know where your frames went, and whether the CPU-before-GPU ordering matched your experience. Everyone seems to hit a different wall first.

Reach me on Discord, or at guillaume.escarieux@mineogames.com.
