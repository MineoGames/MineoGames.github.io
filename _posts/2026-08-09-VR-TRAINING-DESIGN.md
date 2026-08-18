---
layout: post
title: "What Makes VR Training Actually Teach — Lessons From a Cybersecurity Module"
description: "A VR module that impresses once is a demo. One people stay inside is training. Here is what changed between the two, on a cybersecurity POC built with ENI."
keywords: "VR training, immersive learning, VR training design, spatial UX, cybersecurity training VR, Quest 3 training, hand tracking training, immersive learning design, VR learning experience, Unreal Engine training simulation, DDoS simulation VR, France Immersive Learning"
lang: en
ref: vr-training-design
topic: immersive-learning
image: https://img.mailinblue.com/9272083/images/content_library/original/6a1eae67123d190d1581ab19.gif
---

A VR demo that impresses once is not training. It's a magic trick. **People take the headset off and remember the effect, not the lesson.**

We spent several months turning one into the other, on a cybersecurity module built with **ENI**. The gap between "working demo" and "real learning experience" turned out to be smaller in features and much larger in care than I expected.

Here is what actually moved the needle.

---

## Table of Contents

* <a href="#not-passive" class="page-scroll">People learn when they can act, not watch</a>
* <a href="#one-lesson" class="page-scroll">One lesson, one room</a>
* <a href="#layers" class="page-scroll">We improved it in layers</a>
* <a href="#comfort" class="page-scroll">Comfort is not a bonus feature</a>
* <a href="#spatial-ux" class="page-scroll">Menus that belong to the world</a>
* <a href="#signal" class="page-scroll">The signal that told us it worked</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## People learn when they can act, not watch {#not-passive}

Dozens of visitors tried the module at **ENI Tech Fest**, and the clearest finding was this: **VR learning becomes engaging the moment participants can act rather than receive.**

That sounds obvious written down. It is not obvious while building, because a guided narration is so much cheaper to produce than a system the learner can push against. The temptation is to make a very good film and put a headset around it.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/69cd4eba4fa06fd9c743da5e.png" alt="The cybersecurity VR module running at ENI Tech Fest" class="small"/>

*The module at ENI Tech Fest. Dozens of people tried it over the event.*

---

## One lesson, one room {#one-lesson}

The POC teaches one short cybersecurity lesson. **A voice guides you while the simulation runs in real time.**

Network traffic is not described — it is *shown*. Requests travel as 3D streams built with **Niagara VFX**, so you watch the pattern rather than read about it. An interface with an LED and a progress bar tells you how loaded the service is.

Then you get your hands on it. A command panel lets you tune the simulation and practise defending against a **DDoS attack**. Every interactive element has one job:

- **Buttons** activate a protection
- **A slider** increases capacity
- **A dial** tunes the size of the stream

<img src="https://img.mailinblue.com/9272083/images/content_library/original/69cd5c5c55cea708c9470b08.gif" alt="Network traffic rendered as 3D streams with Niagara VFX" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/69cd5c178e7291a039bd9727.gif" alt="The hands-on command panel used to defend against a DDoS attack" class="small"/>

Colour carries the meaning throughout, which let us **delete the text panels entirely**. The right command lights up to guide you. In a headset, a paragraph is a wall; a colour is instant.

---

## We improved it in layers {#layers}

Between the first working version and the one we show now, we didn't add features. We added **layers**.

**Sensory feedback first.** Sound, haptics and vibration, so an action can be felt rather than inferred. 3D elements now shake subtly when you modify them. The service changes colour depending on its status. Command buttons can be pressed directly with the fingertips.

**Then clarity.** Rewritten dialogue, animated material transitions, analytics to see what people actually did.

None of this is decoration. **It is how someone understands what is happening, feels their own actions, and stays immersed without friction.** Take the feedback away and the same module becomes a room where you press things and hope.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/6a1eae6d123d190d1581ab1b.gif" alt="Tactile feedback on the 3D elements of the training module" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/6a1eae6de22281428f98a8e9.gif" alt="Animated material transitions showing service status" class="small"/>

---

## Comfort is not a bonus feature {#comfort}

A learner who feels unwell has stopped learning. That makes comfort a **teaching requirement**, not a polish item.

We added full **hand tracking**, automatic player height adjustment, and settings that make the experience easier to enter. On the hardware side, running at **120 FPS on Quest 3 flat lenses** did most of the work — only a few testers reported mild discomfort, where a few years ago that number would have been a real constraint on the format.

The design lesson is that every barrier at the entrance costs you learners before the content ever gets a chance.

---

## Menus that belong to the world {#spatial-ux}

The habit we had to break was borrowing from flat screens.

A menu pasted in front of your face is a website floating in a room. What works is **spatial**: 3D interactive menus with real depth, curved screens, buttons placed at different distances so your body — not just your eyes — knows where things are.

It sounds like styling. It isn't. When a menu occupies space, reaching for it is a gesture you already know. When it hovers as a flat rectangle, every interaction becomes a small translation exercise.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/6a1eae6d50ae0c94d65358d8.gif" alt="3D interactive menus with depth and curved screens" class="medium"/>

---

## The signal that told us it worked {#signal}

The best feedback wasn't a compliment.

In the new round of tests, **people did not just try the experience. They stayed in it, explored it, and reacted to it.**

That is the whole difference. Not a module that impresses once — one that makes someone want to **stay, act and learn**. If your testers hand the headset back the moment the script ends, you built a demo. If they start poking at the edges to see what else responds, you built training.

---

## Where this goes next {#next}

We joined **France Immersive Learning** this year, which matches where we want to push: practical immersive training, built with the people who understand learning needs from the inside — trainers, and organisations who want to build **VR training modules** with us.

We also ran a **mixed reality** prototype alongside it: a standalone Quest 3 app that places virtual objects in your actual room, so you can preview a change before the work starts. Built on the **Meta MR Utility Kit**, using room setup data so passthrough becomes a genuine window into the real space rather than a video backdrop. Same underlying idea as the training work — **let people see the situation before it becomes risky, costly or irreversible.**

<img src="https://img.mailinblue.com/9272083/images/content_library/original/69cd1e5ae7ff0fb420282843.gif" alt="Mixed reality prototype placing virtual objects in a real room" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/69cd1dafe266fa26fbad03d1.gif" alt="Previewing a renovation in mixed reality before the work starts" class="small"/>

None of this was solo work. The Cyber VR course is a reminder that we go further building together — 3D art by **Jean-Yves Arsicaud** ([jwhy.fr](https://jwhy.fr)), UI by **Pauline Genestier** ([stablemind.fr](https://stablemind.fr)). Same spirit as our game jams, with more polish, more clarity and more ambition.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Isn't VR training just an expensive video?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
It is, if the learner only watches. The value appears when they can act on the situation and see the consequence — defending a service under attack teaches differently from being told how a DDoS works. If a module could have been a video, it should have been one.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Do people still get motion sick?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Far less than the reputation suggests. At 120 FPS on Quest 3, only a few of our testers reported mild discomfort. Framerate and comfort settings do most of the work, and both are decisions you make early rather than fixes you apply late.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>How long should a module be?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Ours teaches one short lesson, and that constraint helped. One idea, one room, one thing to practise. A headset is a demanding place to be; depth beats breadth.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Can you build a module with us?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
That is exactly what we joined France Immersive Learning for. If you train people and wonder whether a situation would land better in VR, that conversation is worth having — the email is at the bottom.
</div>
</details>

</div>

---

{% include en/subscribe-form.html title="Get More Game Dev Insights Like This" %}

---

### 💬 Working on immersive training?

If you build learning experiences, or you train people and are curious whether VR would help, I'd like to hear what you're wrestling with.

Reach me on Discord, or at guillaume.escarieux@mineogames.com.
