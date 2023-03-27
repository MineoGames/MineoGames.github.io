---
layout: post
title: "[TECH] QUEST - Première comparaison entre Vulkan et OpenGL ES3.1"
lang: fr
ref: quick_vulkan_opengl_comparison
---

<i>Introduction d'un nouveau type de blog : le blog technique (avec le préfixe de titre [TECH]). Dans ces posts, nous partageons des études techniques ou nous détaillons certaines pratiques spécifiques de développement de jeux que nous avons utilisées.</i>

Lorsque l'on développe sur l'Oculus Quest, la performance est le principal enjeu. Comme le Quest est un casque autonome, nous nous appuyons sur son chipset Snapdragon 835 (Samsung Galaxy S8) pour rendre un environnement en VR.
Le QUEST supporte deux API graphiques : OpenGL ES 3.1 et Vulkan. Laquelle est la meilleure ? Aujourd'hui, nous faisons une première comparaison entre les deux.

Pour le test, nous avons utilisé UE 4.25.1 (Epic Launcher) et l'outil de monitoring [RenderDoc](https://renderdoc.org/) v1.8.

A partir du [Projet Template du VR Expansion Plugin](https://vreue4.com/), nous avons créé une nouvelle map de type réalité virtuelle.

Avec RenderDoc attaché à l'application, nous capturons la même situation avec OpenGL 3.1 et Vulkan.

<img src="https://imgur.com/MH7iPOm.png" alt="IMAGE VULKAN" style="width:25em ;"/>
<img src="https://imgur.com/SN629mo.png" alt="IMAGE OPENGL" style="width:25em ;"/>

Ensuite, nous, nous jetons un coup d'œil aux statistiques :

<img src="https://imgur.com/hnWIWH5.png" alt="STATS VULKAN" style="width:25em ;"/>
<img src="https://imgur.com/DUu0czE.png" alt="STATS OPENGL" style="width:25em ;"/>

Ce que nous pouvons remarquer :
* OPENGL ES31 est plus léger que Vulkan (9,58MB contre 25,59MB)
* Vulkan est plus rapide que l'OPENGL ES3.1 (101µs contre 23519µs)
* Vulkan est plus efficace que l'OPENGL ES3.1 (draw dispatch call ratio de 10.1 contre 15)

Pour confirmer ces données, nous capturons une autre image avec les mains affichées.  

<img src="https://imgur.com/uWEiQDs.png" alt="IMAGE VULKAN AVEC LES MAINS" style="width:25em ;"/>
<img src="https://imgur.com/wDqKoIp.png" alt="IMAGE OUVERTE AVEC LES MAINS" style="width:25em ;"/>

Une fois de plus, nous examinons les statistiques :

<img src="https://imgur.com/ceVPHl2.png" alt="STATS VULKAN AVEC LES MAINS" style="width:25em ;"/>
<img src="https://imgur.com/Q3sUGTb.png" alt="STATS OUVERTS AVEC LES MAINS" style="width:25em ;"/>

Ce que nous pouvons remarquer :
* OPENGL ES31 est plus léger que Vulkan (18,86MB contre 24,59MB)
* Vulkan est plus rapide que l'OPENGL ES3.1 (102µs contre 24216µs)
* Vulkan est plus efficace que l'OPENGL ES3.1 (draw dispatch call ratio de 10,6 contre 18,8)

La situation est confirmée avec la deuxième capture. 

A la suite de cette première comparaison, <b> Vulkan remporte le match de performance</b>.

Bien sûr, ce n'est pas complet, mais c'est un début. Par exemple, il serait intéressant de reproduire le test dans une situation plus stressante (nombreux objets, lumières, particules...)

__Envie de ne pas rater les prochains blog techniques ? On vous tiendra au courant. 💌__

{% include fr/subscribe-form.html title="Inscription à la newsletter" %}