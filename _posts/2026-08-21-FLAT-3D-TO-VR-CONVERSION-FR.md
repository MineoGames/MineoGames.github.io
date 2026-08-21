---
layout: post
title: "Convertir un prototype 3D classique en VR sans perdre le framerate"
description: "On a repris un projet de game jam en vue de dessus et on l'a reconstruit en expérience VR à 120 FPS. Voici l'ordre dans lequel le travail doit se faire, et où partent réellement les images."
keywords: "conversion 3D vers VR, convertir un jeu en VR, VR Pawn Unreal, optimisation performance VR, TSR DLSS SpaceWarp, visibilité précalculée, 120 FPS VR, optimisation Unreal Engine VR, framerate VR, portage prototype en VR"
lang: fr
ref: flat-3d-to-vr-conversion
topic: tech
image: https://img.mailinblue.com/9272083/images/content_library/original/692dca5a1039cd55e4e60d0d.png
---

On avait un projet de game jam construit comme un jeu 3D en vue de dessus, et une question : pouvait-il devenir une vraie expérience VR, plutôt qu'un jeu plat regardé depuis l'intérieur d'un casque ?

Il le pouvait — à **120 FPS** au bout du compte. Mais presque aucun du travail n'était là où je l'attendais. **Le changement de caméra a pris un après-midi. Le framerate a pris tout le reste.**

Voici l'ordre dans lequel ça doit se faire.

---

## Table des matières

* <a href="#pas-une-camera" class="page-scroll">Une conversion n'est pas un changement de caméra</a>
* <a href="#pawn" class="page-scroll">Étape un : le VR Pawn et le problème d'échelle</a>
* <a href="#budget" class="page-scroll">Pourquoi le budget s'effondre immédiatement</a>
* <a href="#cpu" class="page-scroll">Le CPU d'abord, parce qu'on ne peut pas l'upscaler</a>
* <a href="#gpu" class="page-scroll">GPU : TSR, DLSS et SpaceWarp</a>
* <a href="#visibilite" class="page-scroll">La visibilité précalculée : le gain gratuit</a>
* <a href="#ca-vaut" class="page-scroll">Une conversion, ça vaut le coup ?</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Une conversion n'est pas un changement de caméra {#pas-une-camera}

Le modèle mental tentant, c'est que la VR est une option de caméra. On déplace la caméra dans la tête du joueur, on ajoute le tracking, terminé.

Ça vous donne quelque chose qui tourne et rien qui fonctionne, parce qu'**un jeu plat repose sur des hypothèses que le casque supprime** :

- Le joueur voit exactement ce que vous avez cadré. En VR il regarde où il veut, y compris les endroits que vous n'avez jamais habillés.
- L'échelle est arbitraire. En VR l'échelle se ressent, et un niveau conçu pour être lu d'en haut est souvent physiquement faux quand on se tient dedans.
- Une seule vue est rendue. En VR vous en rendez deux, à haute fréquence, sans aucune tolérance pour une image perdue.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/692dca551039cd55e4e60d0c.png" alt="La version 3D originale en vue de dessus du prototype" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/692dca5a1039cd55e4e60d0d.png" alt="Le même projet reconstruit en expérience VR" class="small"/>

Ce troisième point est celui qui domine le planning. **En VR, la cible de performance n'est pas un réglage de qualité — c'est la différence entre jouable et nauséeux.**

---

## Étape un : le VR Pawn et le problème d'échelle {#pawn}

La première vraie tâche consiste à remplacer la représentation du joueur : un **VR Pawn** avec tête et mains suivies, à la place d'une caméra qui regarde un personnage d'en haut.

C'est là que le problème d'échelle apparaît immédiatement. Un jeu en vue de dessus est conçu pour être lisible d'en haut — couloirs larges, accessoires généreux, distances réglées pour une caméra qui voit toute la pièce. Tenez-vous dedans et ça se lit comme une maison de poupée ou comme une cathédrale, rarement comme un lieu.

Bien régler ça tôt est important, parce que **toutes les décisions suivantes découlent de l'échelle.** Distances d'interaction, confort, ce qui est à portée, et la quantité de géométrie visible d'un coup — ce dernier point étant une donnée de performance, pas seulement de design.

---

## Pourquoi le budget s'effondre immédiatement {#budget}

Voici l'arithmétique qui rend les conversions difficiles.

Un jeu plat qui rend une vue à 60 FPS et un jeu VR qui rend deux vues à 120 FPS ne jouent pas dans la même catégorie. Vous demandez **plusieurs fois plus de travail par seconde**, et la tolérance à l'échec est passée de « ça saccade un peu » à « le joueur se sent mal ».

L'étape honnête après le pawn est donc de **mesurer avant d'optimiser**, et précisément de savoir si vous êtes limité par le CPU ou par le GPU. Chaque technique ci-dessous aide exactement l'un des deux, et appliquer un correctif GPU à un problème CPU est une façon très courante de perdre une semaine.

---

## Le CPU d'abord, parce qu'on ne peut pas l'upscaler {#cpu}

C'est l'ordre qui compte le plus, et celui que je referais à l'envers si je suivais mon instinct.

**Le coût GPU a des portes de sortie. Le coût CPU, non.** Vous pouvez rendre à une résolution interne plus basse et upscaler ; vous ne pouvez pas upscaler pour sortir de trop d'appels de rendu, trop de logique de tick, ou trop d'acteurs qui travaillent à chaque frame.

Le travail CPU passe donc en premier : réduire ce que le moteur doit penser à chaque image, avant de toucher à la manière dont c'est dessiné. Si vous optimisez le GPU d'abord, vous obtiendrez un joli gain, vous heurterez un mur, puis vous découvrirez que le mur était le CPU depuis le début.

---

## GPU : TSR, DLSS et SpaceWarp {#gpu}

Une fois le CPU assaini, les outils GPU font leur travail. Trois sur lesquels on s'est appuyés, chacun résolvant autre chose :

**TSR** — temporal super resolution. Rendre à une résolution interne plus basse et reconstruire, en utilisant l'information répartie sur plusieurs images. Natif au moteur, largement compatible, et la première chose à essayer.

**DLSS** — la version propriétaire du même marché, avec une meilleure reconstruction sur le matériel compatible. À proposer en option plutôt qu'en défaut, parce que le parc matériel de vos joueurs varie plus que vous ne le voudriez.

**SpaceWarp** — un tout autre type d'astuce : synthétiser des images intermédiaires à partir du mouvement, pour que le casque obtienne sa cadence même quand le rendu ne suit pas tout à fait. Puissant, et pas exempt d'artefacts — il mérite sa place quand l'alternative est de perdre des images, ce qui en VR n'est jamais une alternative acceptable.

La formulation que je propose : **TSR et DLSS réduisent ce que vous rendez ; SpaceWarp change ce que le casque fait de ce que vous lui avez donné.** Ils se cumulent, et savoir quel problème chacun résout vous évite d'attraper le mauvais.

---

## La visibilité précalculée : le gain gratuit {#visibilite}

La technique qui donne l'impression de tricher : **précalculer la visibilité.**

L'idée est simple. Pour un niveau qui ne change pas, on peut déterminer à l'avance quelles parties du monde sont visibles depuis où, et sauter le reste à l'exécution au lieu de décider à chaque image. Vous dépensez du temps de build pour acheter du temps de frame.

Ça convient particulièrement bien à un projet de jam converti, parce que ces niveaux sont petits, statiques, et faits de pièces. **Plus votre niveau a de murs, plus ça rapporte** — et un jeu en vue de dessus en a généralement beaucoup, puisque les murs servaient justement à cadrer la vue de la caméra.

---

## Une conversion, ça vaut le coup ? {#ca-vaut}

Réponse honnête : comme moyen de sortir un jeu VR, en général non. Comme moyen d'apprendre, absolument.

Jouer au portage VR de quelqu'un d'autre m'a appris ce que les conversions cassent vu de l'extérieur — une difficulté réglée pour une souris, une précision que le médium ne peut pas fournir, ce que j'ai raconté dans [l'article portage contre natif]({{ '/2026/08/13/PORTED-VS-NATIVE-VR-FR/' | relative_url }}). En faire une moi-même m'a appris l'autre moitié : **ce que coûte la fabrication des images, et dans quel ordre.**

Ce savoir se transfère directement au travail natif. Tout projet VR finit par avoir la conversation sur l'endroit où partent ses images, et l'avoir eue une fois sur un petit projet coûte beaucoup moins cher que de l'avoir tard sur un gros.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Combien de temps prend une conversion de ce type ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
La partie qui la fait tourner dans un casque est rapide — un pawn, quelques entrées, et vous êtes debout dans le niveau. La partie qui tient le framerate est le vrai projet, et c'est l'essentiel du temps. Budgétez sur le second chiffre, pas sur le premier.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Faut-il vraiment 120 FPS ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Il faut la fréquence de votre casque cible, tenue de façon constante. Une fréquence plus basse mais stable vaut mieux qu'une plus haute qui décroche — c'est l'irrégularité qui rend les gens malades, plus que le chiffre absolu. Choisissez la cible tôt et traitez-la comme une contrainte plutôt que comme un objectif.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Faut-il activer l'upscaling par défaut ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Proposez-le, ne l'imposez pas. Le matériel varie énormément en VR PC, et le bon arbitrage entre netteté et marge dépend de la machine. Ce qu'il faut imposer, c'est de mesurer d'abord — savoir si vous êtes limité CPU ou GPU décide si l'upscaling vous sert à quelque chose.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Quels jeux plats se convertissent bien ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Ceux construits en pièces, à échelle à peu près humaine, où le plaisir ne dépend pas de tout voir d'un coup. Un jeu en vue de dessus où la vue d'ensemble *est* la mécanique perd son cœur dès qu'on se tient dedans — c'est une refonte, pas une conversion, et il vaut mieux savoir pour laquelle on a signé.
</div>
</details>

</div>

---

{% include fr/subscribe-form.html title="Reçois plus d'articles Game Dev comme celui-ci" %}

---

### 💬 Vous avez déjà converti quelque chose en VR ?

Ça m'intéresse de savoir où sont parties vos images, et si l'ordre CPU-avant-GPU correspond à votre expérience. Tout le monde semble heurter un mur différent en premier.

Sur Discord, ou à guillaume.escarieux@mineogames.com.
