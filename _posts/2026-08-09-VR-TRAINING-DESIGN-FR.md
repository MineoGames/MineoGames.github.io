---
layout: post
title: "Ce qui fait qu'une formation VR apprend vraiment — leçons d'un module cybersécurité"
description: "Un module VR qui impressionne une fois est une démo. Un module dans lequel les gens restent est une formation. Voici ce qui a changé entre les deux, sur un POC cybersécurité mené avec ENI."
keywords: "formation VR, formation immersive, immersive learning, conception formation VR, UX spatiale, cybersécurité réalité virtuelle, Quest 3 formation, hand tracking, module VR entreprise, Unreal Engine simulation, simulation DDoS VR, France Immersive Learning"
lang: fr
ref: vr-training-design
topic: immersive-learning
image: https://img.mailinblue.com/9272083/images/content_library/original/6a1eae67123d190d1581ab19.gif
---

Une démo VR qui impressionne une fois n'est pas une formation. C'est un tour de magie. **On retire le casque et on se souvient de l'effet, pas de la leçon.**

Nous avons passé plusieurs mois à transformer l'un en l'autre, sur un module de cybersécurité construit avec **ENI**. L'écart entre « démo fonctionnelle » et « vraie expérience d'apprentissage » s'est révélé plus court en fonctionnalités, et beaucoup plus long en soin, que je ne l'imaginais.

Voici ce qui a réellement fait la différence.

---

## Table des matières

* <a href="#pas-passif" class="page-scroll">On apprend en agissant, pas en regardant</a>
* <a href="#une-lecon" class="page-scroll">Une leçon, une pièce</a>
* <a href="#couches" class="page-scroll">Nous avons amélioré par couches</a>
* <a href="#confort" class="page-scroll">Le confort n'est pas une option</a>
* <a href="#ux-spatiale" class="page-scroll">Des menus qui appartiennent au monde</a>
* <a href="#signal" class="page-scroll">Le signal qui nous a dit que ça marchait</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## On apprend en agissant, pas en regardant {#pas-passif}

Des dizaines de visiteurs ont essayé le module à l'**ENI Tech Fest**, et l'enseignement le plus net est celui-ci : **l'apprentissage en VR devient engageant au moment où le participant peut agir au lieu de recevoir.**

Écrit comme ça, ça paraît évident. Ça ne l'est pas pendant la construction, parce qu'une narration guidée coûte tellement moins cher à produire qu'un système contre lequel l'apprenant peut pousser. La tentation, c'est de faire un très bon film et de mettre un casque autour.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/69cd4eba4fa06fd9c743da5e.png" alt="Le module VR de cybersécurité à l'ENI Tech Fest" class="small"/>

*Le module à l'ENI Tech Fest. Des dizaines de personnes l'ont essayé pendant l'événement.*

---

## Une leçon, une pièce {#une-lecon}

Le POC enseigne une courte leçon de cybersécurité. **Une voix vous guide pendant que la simulation tourne en temps réel.**

Le trafic réseau n'est pas décrit — il est *montré*. Les requêtes circulent sous forme de flux 3D construits avec **Niagara VFX** : on observe le motif au lieu de lire une explication. Une interface avec une LED et une barre de progression indique la charge du service.

Puis on met les mains dedans. Un pupitre de commande permet de régler la simulation et de s'entraîner à défendre contre une **attaque DDoS**. Chaque élément interactif a une seule fonction :

- **Les boutons** activent une protection
- **Un curseur** augmente la capacité
- **Une molette** règle la taille du flux

<img src="https://img.mailinblue.com/9272083/images/content_library/original/69cd5c5c55cea708c9470b08.gif" alt="Trafic réseau rendu en flux 3D avec Niagara VFX" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/69cd5c178e7291a039bd9727.gif" alt="Le pupitre de commande pour se défendre contre une attaque DDoS" class="small"/>

La couleur porte le sens du début à la fin, ce qui nous a permis de **supprimer entièrement les panneaux de texte**. La bonne commande s'allume pour vous guider. Dans un casque, un paragraphe est un mur ; une couleur est immédiate.

---

## Nous avons amélioré par couches {#couches}

Entre la première version fonctionnelle et celle que nous montrons aujourd'hui, nous n'avons pas ajouté de fonctionnalités. Nous avons ajouté des **couches**.

**Le retour sensoriel d'abord.** Son, haptique et vibrations, pour qu'une action se sente au lieu de se déduire. Les éléments 3D tremblent légèrement quand on les modifie. Le service change de couleur selon son état. Les boutons de commande se pressent directement du bout des doigts.

**Puis la lisibilité.** Dialogues réécrits, transitions de matériaux animées, analytics pour voir ce que les gens ont réellement fait.

Rien de tout ça n'est décoratif. **C'est ce qui permet à quelqu'un de comprendre ce qui se passe, de sentir ses propres actions, et de rester immergé sans friction.** Retirez le retour, et le même module devient une pièce où l'on appuie sur des choses en espérant.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/6a1eae6d123d190d1581ab1b.gif" alt="Retour tactile sur les éléments 3D du module de formation" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/6a1eae6de22281428f98a8e9.gif" alt="Transitions de matériaux animées indiquant l'état du service" class="small"/>

---

## Le confort n'est pas une option {#confort}

Un apprenant qui se sent mal a cessé d'apprendre. Le confort devient donc une **exigence pédagogique**, pas une finition.

Nous avons ajouté le **hand tracking** complet, l'ajustement automatique de la taille du joueur, et des réglages qui facilitent l'entrée dans l'expérience. Côté matériel, tourner à **120 FPS sur les lentilles plates du Quest 3** a fait l'essentiel du travail — seuls quelques testeurs ont signalé une gêne légère, là où il y a quelques années ce chiffre aurait été une vraie contrainte sur le format.

La leçon de conception, c'est que chaque obstacle à l'entrée vous coûte des apprenants avant même que le contenu ait sa chance.

---

## Des menus qui appartiennent au monde {#ux-spatiale}

L'habitude qu'il a fallu casser, c'est d'emprunter aux écrans plats.

Un menu collé devant le visage, c'est un site web qui flotte dans une pièce. Ce qui fonctionne est **spatial** : des menus 3D interactifs avec une vraie profondeur, des écrans incurvés, des boutons placés à des distances différentes pour que le corps — et pas seulement l'œil — sache où sont les choses.

On dirait de la mise en forme. Ça n'en est pas. Quand un menu occupe l'espace, le saisir est un geste qu'on connaît déjà. Quand il flotte en rectangle plat, chaque interaction devient un petit exercice de traduction.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/6a1eae6d50ae0c94d65358d8.gif" alt="Menus 3D interactifs avec profondeur et écrans incurvés" class="medium"/>

---

## Le signal qui nous a dit que ça marchait {#signal}

Le meilleur retour n'était pas un compliment.

Lors de la nouvelle série de tests, **les gens n'ont pas seulement essayé l'expérience. Ils y sont restés, l'ont explorée, y ont réagi.**

C'est toute la différence. Pas un module qui impressionne une fois — un module qui donne envie de **rester, d'agir et d'apprendre**. Si vos testeurs rendent le casque dès la fin du script, vous avez fait une démo. S'ils commencent à tester les bords pour voir ce qui répond encore, vous avez fait une formation.

---

## La suite {#suite}

Nous avons rejoint **France Immersive Learning** cette année, ce qui correspond à la direction que nous voulons pousser : de la formation immersive concrète, construite avec ceux qui connaissent les besoins pédagogiques de l'intérieur — formateurs, et organisations qui veulent construire des **modules de formation VR** avec nous.

Nous avons aussi mené un prototype de **réalité mixte** en parallèle : une application Quest 3 autonome qui place des objets virtuels dans votre pièce réelle, pour prévisualiser un changement avant que les travaux commencent. Construite sur le **Meta MR Utility Kit**, en utilisant les données de room setup pour que le passthrough devienne une véritable fenêtre sur l'espace réel plutôt qu'un fond vidéo. Même idée de fond que le travail de formation — **laisser les gens voir la situation avant qu'elle devienne risquée, coûteuse ou irréversible.**

<img src="https://img.mailinblue.com/9272083/images/content_library/original/69cd1e5ae7ff0fb420282843.gif" alt="Prototype de réalité mixte plaçant des objets virtuels dans une pièce réelle" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/69cd1dafe266fa26fbad03d1.gif" alt="Prévisualiser une rénovation en réalité mixte avant les travaux" class="small"/>

Rien de tout cela n'est un travail solitaire. Le parcours Cyber VR rappelle qu'on va plus loin en construisant à plusieurs — art 3D par **Jean-Yves Arsicaud** ([jwhy.fr](https://jwhy.fr)), UI par **Pauline Genestier** ([stablemind.fr](https://stablemind.fr)). Le même esprit que nos game jams, avec plus de finition, plus de clarté et plus d'ambition.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>La formation VR, n'est-ce pas juste une vidéo hors de prix ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Ça l'est, si l'apprenant ne fait que regarder. La valeur apparaît quand il peut agir sur la situation et en voir la conséquence — défendre un service attaqué n'enseigne pas comme se faire expliquer ce qu'est un DDoS. Si un module aurait pu être une vidéo, il aurait dû en être une.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Les gens ont-ils encore la nausée ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Bien moins que la réputation ne le laisse croire. À 120 FPS sur Quest 3, seuls quelques-uns de nos testeurs ont signalé une gêne légère. Le framerate et les réglages de confort font l'essentiel, et ce sont deux décisions qu'on prend tôt, pas des correctifs qu'on applique tard.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Quelle durée pour un module ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Le nôtre enseigne une courte leçon, et cette contrainte a aidé. Une idée, une pièce, une chose à pratiquer. Un casque est un endroit exigeant ; la profondeur vaut mieux que l'étendue.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Pouvez-vous construire un module avec nous ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
C'est exactement pour ça que nous avons rejoint France Immersive Learning. Si vous formez des gens et que vous vous demandez si une situation passerait mieux en VR, la conversation vaut la peine — l'adresse est en bas de page.
</div>
</details>

</div>

---

{% include fr/subscribe-form.html title="Reçois plus d'articles Game Dev comme celui-ci" %}

---

### 💬 Vous travaillez sur de la formation immersive ?

Si vous construisez des expériences d'apprentissage, ou si vous formez des gens et vous demandez si la VR aiderait, ça m'intéresse de savoir sur quoi vous butez.

Sur Discord, ou à guillaume.escarieux@mineogames.com.
