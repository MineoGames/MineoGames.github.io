---
layout: post
title: "[TECH] QUEST - Vulkan VS OpenGL ES3.1 FIRST COMPARISON"
lang: en
ref: quick_vulkan_opengl_comparison
---

<i>Introducing a new kind of blog : the technical blog (with title prefix [TECH]). In these posts, we share technical studies or we detail some specific game development practises that we've used.</i>

When developing for Oculus Quest, performance is the main issue. Since the Quest is an autonomous headset, we rely on its Snapdragon 835 chipset (Samsung Galaxy S8) to render a VR environment.
The Quest supports two graphic API : OpenGL ES 3.1 and Vulkan. Which one is better ? Today we are making a first comparison between the two.

For the test, we used UE 4.25.1 (Epic Launcher) and the monitoring tool [RenderDoc](https://renderdoc.org/) v1.8.

From the [VR Expansion Plugin Template Project](https://vreue4.com/), we create a new Virtual Reality Map.

With RenderDoc attach to the application, we capture the same situation with OpenGL 3.1 and Vulkan.

<img src="https://imgur.com/MH7iPOm.png" alt="IMAGE VULKAN" style="width:25em;"/>
<img src="https://imgur.com/SN629mo.png" alt="IMAGE OPENGL" style="width:25em;"/>

Then we, take a look at the statistics:

<img src="https://imgur.com/hnWIWH5.png" alt="STATS VULKAN" style="width:25em;"/>
<img src="https://imgur.com/DUu0czE.png" alt="STATS OPENGL" style="width:25em;"/>

We notice that:
* OPENGL ES31 is lighter that Vulkan (9.58MB against 25.59MB)
* Vulkan is faster than OPENGL ES3.1 (101µs against 23519µs	)
* Vulkan is mroe efficient that OPENGL ES3.1 (draw dispatch call ratio 10.1 vs 15)

To confirm these data, we cpature another picture with hands displayed  

<img src="https://imgur.com/uWEiQDs.png" alt="IMAGE VULKAN WITH HANDS" style="width:25em;"/>
<img src="https://imgur.com/wDqKoIp.png" alt="IMAGE OPENGL WITH HANDS" style="width:25em;"/>

Again we take a look at the statistics:

<img src="https://imgur.com/ceVPHl2.png" alt="STATS VULKAN WITH HANDS" style="width:25em;"/>
<img src="https://imgur.com/Q3sUGTb.png" alt="STATS OPENGL WITH HANDS" style="width:25em;"/>

We notice that:
* OPENGL ES31 is lighter that Vulkan (18.86MB against 24.59MB)
* Vulkan is faster than OPENGL ES3.1 (102µs against 24216µs)
* Vulkan is mroe efficient that OPENGL ES3.1 (draw dispatch call ratio 10.6 vs 18.8)

The situation is confirmed with the second capture. 

As a result of this first comparison, <b> Vulkan wins the preformance match</b>.

Of course, this is not complete, but it's a start. For example, it would be interesting to reproduce the test in a more stressful situtation (many objets, lights, particles...)