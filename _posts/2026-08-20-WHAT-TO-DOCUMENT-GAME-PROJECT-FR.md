---
layout: post
title: "Ce qui mérite d'être documenté sur un projet de jeu — et ce qui ne le mérite pas"
description: "La plupart de la documentation de jeu est écrite une fois et jamais rouverte. Voici le test que j'utilise pour décider ce qui mérite une page, et les quatre documents qui sont réellement lus."
keywords: "game design document, modèle GDD, documentation projet jeu vidéo, documentation jeu indépendant, quoi documenter, document de conception technique, intégration développeur, Notion studio de jeux, documenter ses décisions, template Notion TGO"
lang: fr
ref: what-to-document-game-project
topic: productivity
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/1aeb910e-8d91-b26e-8d7a-60e898e217df.gif
---

La plupart de la documentation de jeu est écrite une fois, rangée, et jamais rouverte. Ça donnait le sentiment d'être productif ce jour-là, et c'était en pratique une façon de ne pas travailler sur le jeu.

J'en ai écrit beaucoup, de cette sorte. Ce qui a changé, c'est que j'ai arrêté de me demander *« est-ce que ça mérite d'être documenté ? »* — la réponse est toujours oui — pour poser une bien meilleure question :

**« Qui lit ça, et quand ? »**

S'il n'y a pas de réponse, ça ne s'écrit pas. Voici ce qui survit à ce test.

---

## Table des matières

* <a href="#le-test" class="page-scroll">Le test : qui lit ça, et quand</a>
* <a href="#trois-raisons" class="page-scroll">Les trois choses que la documentation achète</a>
* <a href="#ca-vaut" class="page-scroll">Les quatre documents qui méritent leur page</a>
* <a href="#ca-vaut-pas" class="page-scroll">Ce qui ne mérite pas d'être écrit</a>
* <a href="#format" class="page-scroll">Le format compte plus que l'exhaustivité</a>
* <a href="#gdd" class="page-scroll">Le problème du GDD</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Le test : qui lit ça, et quand {#le-test}

Chaque document a un lecteur implicite et un moment implicite. Nommez les deux, et le document s'écrit à la bonne longueur. Ne les nommez pas, et vous produisez une description du projet au lieu d'un outil.

- *« Moi, dans six mois, quand je reviendrai sur ce système »* — écrivez-le.
- *« Un prestataire, à son premier jour »* — écrivez-le.
- *« Une commission, en mars »* — écrivez-le, et ce sera [un tout autre document]({{ '/2026/08/10/CNC-GRANT-INDIE-STUDIO-FR/' | relative_url }}).
- *« Personne, mais un vrai studio en aurait un »* — ne l'écrivez pas.

Ce dernier cas représente l'essentiel de la documentation qui n'est jamais rouverte. Elle existe parce qu'elle est censée exister.

---

## Les trois choses que la documentation achète {#trois-raisons}

Quand elle fonctionne, elle achète l'une de ces trois choses — et il vaut mieux savoir laquelle vous payez.

**Vous arrêtez de re-réfléchir à la même chose.** Chaque décision non tranchée par écrit est rejouée au prix fort la fois suivante. Le document n'est pas la trace de la décision ; c'est ce qui vous évite de la payer deux fois.

**Quelqu'un d'autre peut vous rejoindre.** Collaborateurs, prestataires, équipe de jam. Entre une journée d'intégration et une semaine, la différence tient entièrement à ce qui a été écrit avant leur arrivée.

**Ça protège le projet.** Du facteur bus, d'une machine perdue, et surtout de vous dans six mois, qui serez fonctionnellement un nouveau membre d'équipe sans contexte et avec des avis tranchés.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/1aeb910e-8d91-b26e-8d7a-60e898e217df.gif" alt="Modèles de documentation pour un projet de jeu" class="medium"/>

---

## Les quatre documents qui méritent leur page {#ca-vaut}

Sur plusieurs années, ce sont les seuls quatre que je reconstruis sur chaque projet.

**1. Le journal de décisions.** Pas ce que fait le système — le code le dit — mais *pourquoi il est comme ça et ce qu'on a écarté.* C'est le document à plus forte valeur et presque personne ne l'écrit. Une ligne par décision suffit : ce qu'on a choisi, ce qu'on n'a pas choisi, et la raison.

**2. Le document d'installation.** Comment passer d'une machine vierge à un build qui tourne. Sur tous les projets, ce savoir est réparti entre trois mémoires et un message Discord de l'an dernier. C'est aussi le document qui se rentabilise le plus visiblement, parce que vous vous en servirez vous-même à la prochaine réinstallation.

**3. Des modèles par phase.** Des documents standards pour les phases que traverse un projet, pour qu'entamer une phase ne soit pas aussi un projet d'écriture. Une structure connue fait que le travail va dans le contenu au lieu d'aller dans la décision de ce que le contenu devrait être.

**4. Les chiffres.** Budget, KPI, et tout ce qui détermine réellement si ça continue. Je garde ça dans un tableur avec les calculs intégrés plutôt qu'en prose, parce que la prose ne sait pas additionner et que c'est le document qui a le plus besoin d'être juste.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/cce49264-abc0-2388-e730-c6948de45180.png" alt="Modèles de documentation standards par phase de projet" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/d273bcee-39d9-5208-699e-264cc7c3a388.gif" alt="Suivi financier et KPI intégrés au système de projet" class="small"/>

---

## Ce qui ne mérite pas d'être écrit {#ca-vaut-pas}

Aussi important, et beaucoup moins souvent dit.

**Tout ce que le code dit déjà.** Un document qui décrit ce que fait une fonction est une deuxième copie qui va diverger, et la copie qui diverge est toujours le document.

**Un lore exhaustif avant que le jeu existe.** Écrivez la quantité de monde nécessaire à la prochaine décision. Le reste est un roman que vous écrivez à la place d'un jeu, et il sera contredit par le premier niveau construit.

**Des documents de processus pour un processus que personne ne suit.** Si le workflow écrit et le workflow réel diffèrent, vous n'avez pas de la documentation, vous avez de la fiction. Documentez ce que vous faites, ou changez ce que vous faites — pas ni l'un ni l'autre.

**Une spécification complète de quelque chose que vous n'avez pas prototypé.** En VR surtout, on découvre si une idée fonctionne en la mettant dans un casque. La spécifier d'abord documente surtout vos hypothèses.

---

## Le format compte plus que l'exhaustivité {#format}

Voici la partie pratique, et c'est ce qui a le plus changé la proportion de ma documentation réellement utilisée.

**Tableaux, checklists et visuels battent la prose.** À chaque fois. Un document qu'on ne peut pas parcourir en diagonale est un document que personne ne lit, y compris son auteur. Un tableau de cinq lignes transmet plus que le paragraphe qu'il remplace et prend moins de temps à écrire.

Deux habitudes qui aident :

**Mettre les explications derrière un toggle.** Le lecteur qui connaît le système voit une structure propre ; celui qui ne la connaît pas déplie pour le détail. Un document, deux publics, aucune duplication.

**Capturer plutôt que décrire.** Toute explication d'une interface, d'une configuration d'éditeur ou d'un graphe de nœuds est plus rapide et plus juste en image. Dans un pipeline chargé en outils surtout, une capture remplace un paragraphe auquel personne n'aurait fait confiance de toute façon.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/e273900e-8742-6193-4959-8dc95144007d.gif" alt="Guides détaillés en visuels plutôt qu'en prose" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/37b9858a-0a5c-fbfa-8904-7f0b6b13d5a6.gif" alt="Checklists et tableaux dans la documentation projet" class="small"/>

---

## Le problème du GDD {#gdd}

Le Game Design Document mérite sa propre note, parce que c'est celui qu'on nous dit tous d'écrire et celui qui périme le plus sûrement.

Le GDD traditionnel est une description de cent pages d'un jeu fini, écrite avant que le jeu existe. Il est obsolète dès la première semaine et tout le monde le sait, ce qui est précisément pourquoi personne ne l'ouvre.

Ce qui marche mieux, c'est un **canvas** : une seule page structurée qui porte les décisions définissant le jeu — les piliers, la boucle, le public, les contraintes — assez courte pour que la tenir à jour soit réaliste. Elle répond à « c'est quoi ce jeu » en un écran, et tout le reste vit dans les systèmes vers lesquels elle pointe.

C'est la forme qu'on a fini par livrer dans notre template gratuit, avec une archive pour les pages qui ont cessé d'être d'actualité sans qu'il faille les supprimer.

{% include product-callout.html slug="tgo" note="TGO est la version courte de notre système : un canvas de Game Design Document, une archive pour ce qui n'est plus d'actualité, et des automatisations Notion natives qui fonctionnent sur le plan gratuit. Pensé pour un développeur solo ou une petite équipe sur un seul projet." %}

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Je suis seul. Ai-je vraiment besoin de documentation ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Vous avez besoin du journal de décisions et du document d'installation. Ces deux-là se rentabilisent dans un seul projet, uniquement sur vos propres relectures. Le reste est optionnel tant que personne d'autre n'est impliqué — et le jour où quelqu'un l'est, vous voudrez qu'ils aient déjà existé.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Comment éviter que la documentation périme ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Surtout en en écrivant moins. Un petit document est bon marché à mettre à jour et se met donc à jour ; un gros est cher et pourrit. La deuxième chose, c'est une archive plutôt qu'une touche « supprimer » — sortir une page du jeu courant est beaucoup plus simple que de décider de la détruire, donc ça se fait vraiment.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Où doit-elle vivre ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Là où vit déjà la planification, pour qu'une tâche puisse pointer vers le document qui l'explique. Séparer les docs et les tâches entre deux outils garantit que l'un des deux ne sera pas lu. Les nôtres sont à côté du tableau de sprint, décrit dans [l'article sur les sprints]({{ '/2026/08/12/NOTION-SPRINTS-SOLO-DEV-FR/' | relative_url }}).
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Un document de conception peut-il être long ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Quand il a un lecteur précis qui a besoin de cette longueur — une commission, un éditeur, une nouvelle équipe de cinq personnes. De la longueur au service d'un lecteur nommé, très bien. De la longueur comme démonstration de sérieux, c'est le mode d'échec.
</div>
</details>

</div>

---

{% include fr/subscribe-form.html title="Reçois plus d'articles Game Dev comme celui-ci" %}

---

### 💬 Quel est le seul document que vous rouvrez vraiment ?

Je parierais sur le document d'installation, mais je me suis déjà trompé là-dessus. S'il y a une page de votre projet où vous retournez réellement, ça m'intéresse de savoir laquelle.

Sur Discord, ou à guillaume.escarieux@mineogames.com.
