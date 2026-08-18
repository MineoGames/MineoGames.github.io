---
layout: post
title: "You Don't Need to Sell Your Game for Players to Find It"
description: "Most studios say they're not into marketing. SEO isn't selling — it's being there when someone is already looking. Here's what I found auditing my own site."
keywords: "SEO for game studios, indie game marketing, game studio website SEO, GEO generative engine optimization, indie game visibility, game dev SEO, hreflang bilingual site, sitemap jekyll, core web vitals games, indie studio marketing, notion SEO guide, UGO"
lang: en
ref: seo-for-game-studios
topic: marketing
image: /img/blog/default-cover-marketing.webp
---

Ask a room full of indie devs about marketing and watch the shoulders drop. **We didn't get into this to sell things.** We got into it to build games.

I felt the same way for years. What changed my mind wasn't a course on funnels — it was realising that **SEO isn't selling at all**. Selling is interrupting someone who wasn't asking. SEO is being there when they already are.

Somebody types *"VR game where you exterminate rats"* into a search box. That person is not being sold to. They are looking. The only question is whether they find you.

---

## Table of Contents

* <a href="#not-marketing" class="page-scroll">Why this isn't the marketing you're avoiding</a>
* <a href="#empathy" class="page-scroll">The hard part is empathy, not technique</a>
* <a href="#right-to-fail" class="page-scroll">You have the right to fail</a>
* <a href="#my-own-site" class="page-scroll">What I found on my own site</a>
* <a href="#geo" class="page-scroll">From SEO to GEO</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Why this isn't the marketing you're avoiding {#not-marketing}

The thing that blocks most of us is a picture in our heads: ads, hustle, saying things we don't mean.

SEO is a different job. It's **making sure that the person already searching for your kind of game can reach it**. No persuasion involved. If your game is a VR shark hunting game and someone is hunting for exactly that, the work is simply not being invisible.

Put like that, it stops being a personality problem and becomes a technical one. And technical problems, we know how to do.

---

## The hard part is empathy, not technique {#empathy}

Here's what surprised me. The tags, the titles, the sitemaps — that part is easy. It's a checklist.

The genuinely hard part is **stepping into your audience's head**. What would *they* type? Not what you call your game internally. Not the clever name. The clumsy, literal phrase a stranger uses when they don't know your game exists.

That work feels intangible at first. You're guessing. It doesn't feel like engineering, and that's uncomfortable when engineering is what you're good at.

The relief is that **you don't have to stay in the guessing**. Search Console, Analytics, a rank tracker — they turn the guess into a number. You publish, you wait, you look at what people actually typed to land on your page. Then you adjust. The empathy gets a feedback loop bolted to it, and suddenly it *is* engineering.

---

## You have the right to fail {#right-to-fail}

This is the part I'd tattoo on the wall if I could.

Coming from software, I wanted the correct answer before shipping. SEO doesn't work that way. **You try, you measure, you adapt.** A page that ranks for nothing isn't a failure, it's a data point. A keyword you guessed wrong costs you an afternoon.

Aiming for perfection before publishing is how you publish nothing. Progress beats it every time, and marketing feels less and less hostile the more of it you learn.

---

## What I found on my own site {#my-own-site}

I decided to stop theorising and audit mineogames.com properly. I expected some tuning. I found holes.

**There was no sitemap. At all.** Sixty pages, and nothing telling a search engine they existed. The config declared the plugin under a key that Jekyll stopped reading years ago, and the plugin wasn't even installed. It had been failing silently the whole time.

**The site is fully bilingual and said so nowhere.** Every page exists in English and French, and every pair already declared which twin it belonged to in its front matter. Nothing consumed it. No `hreflang`, no `lang` attribute on 58 of 60 pages. So eight English/French pairs sat there competing with each other for the same rankings instead of being understood as translations.

**Fifty pages out of sixty served the same meta description** — the generic site sentence. Thirty-eight blog posts had no description of their own at all. Four pages shared the exact same `<title>`.

Then the performance side, which Google counts:

- Font Awesome was loading **in full, on all sixty pages** — 104 KB of CSS *and* 1.5 MB of JavaScript — to draw **eight icons**.
- Fifty-six pages were preloading a 220 KB hero image at high priority that **they never displayed**, competing with their own content for bandwidth.
- Largest Contentful Paint on mobile: **16.9 seconds**.

None of that is exotic. It's the kind of thing that accumulates when a site grows for six years and nobody sits down to look at the whole of it.

Fixing it was a week of unglamorous work: inline the eight icons and drop the library, emit the `hreflang` pairs from data that already existed, write sixty descriptions, generate the sitemap in Liquid so it doesn't depend on a plugin. The SEO score went to 100. More importantly, the site now says what it is.

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>The short version, if you want a checklist</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Do you have a sitemap, and does it actually build? Is every page's title unique? Does every page have its own description? If you're bilingual, does each page declare its twin? Does `<html>` carry a `lang`? And does the page load fast enough on a phone on a bad connection?

That's most of it. It isn't clever. It just has to be done.
</div>
</details>

</div>

---

## From SEO to GEO {#geo}

While I was learning all this, the ground moved.

Google still handles the overwhelming majority of searches. But **more and more people ask an AI instead**, and an AI doesn't show ten blue links — it answers. If your studio isn't in the answer, you don't get a second position to be in.

That's what GEO — **Generative Engine Optimization** — is about: being legible to systems that summarise rather than list. I went to an IAgitative event run by COPYLOT where GEO was one of the three topics on the table, alongside building chatbots and generating visual content. Nobody there had it fully figured out. That's rather the point: it's early enough that paying attention now is cheap.

The encouraging part is that the fundamentals overlap. Clear structure, honest descriptions, pages that answer a real question — a machine that summarises needs those as much as a machine that ranks.

{% include product-callout.html slug="ugo" note="After weeks of learning this, I wrote all of it down in Notion rather than letting it evaporate. UGO now ships those notes as guides: SEO, SEA, SMO, Google My Business, website creation, content creation, Google Analytics and storytelling — in the same workspace where you plan your game." %}

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>I'm a solo dev. Is SEO worth my time?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
The setup is a one-off. Titles, descriptions, a sitemap, decent speed — you do it once and it keeps working while you go back to building. That's a very different deal from posting on social every day forever.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>My game isn't out yet. Too early?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
The opposite. Ranking takes months, so a page that exists early is a page that has already started. And devlogs give search engines something to read while the game itself is still a build folder.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Do I need paid tools?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Not to start. Google Search Console is free and tells you the one thing that matters most: what people actually typed before landing on you. Everything I described above was found with free tools and an afternoon of reading the generated HTML.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Is GEO going to replace SEO?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Not soon, and probably not cleanly. Treat it as a second audience reading the same pages. The work that makes you legible to one tends to help with the other.
</div>
</details>

</div>

---

{% include en/subscribe-form.html title="Get More Game Dev Insights Like This" %}

---

### 💬 What's your experience?

Have you tried SEO for your studio, or written it off? I'd genuinely like to know which part put you off — that's usually where the useful conversation is.

Reach me on Discord, or at guillaume.escarieux@mineogames.com.
