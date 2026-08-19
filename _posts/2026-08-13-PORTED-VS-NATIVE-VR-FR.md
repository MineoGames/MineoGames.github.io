---
layout: post
title: "Portage ou VR native : ce que Jedi Outcast en casque m'a appris"
description: "Un portage VR peut vous donner le fantasme et rater le jeu quand même. Jouer à la conversion de Jedi Outcast par TeamBeef s'est transformé en la leçon de design la plus claire que j'aie eue sur ce que la VR change vraiment."
keywords: "portage VR, VR native, conversion VR, Jedi Outcast VR, TeamBeef JKXR, équilibrage difficulté VR, visée en VR, level design VR, game design VR, portage écran plat vers VR, accessibilité VR"
lang: fr
ref: ported-vs-native-vr
topic: games
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/7f6d2018-b6a1-72d7-b487-a7ec2b51b320.gif
---

J'ai lancé la conversion VR de *Star Wars: Jedi Outcast* par TeamBeef en cherchant un shot de nostalgie. J'ai eu un cours de game design.

**Tendre la main et pousser quelque chose à travers une pièce avec la Force est une des meilleures choses que j'aie faites en casque.** Ce n'est pas un compromis — le portage vous donne le fantasme entier, et il est meilleur en VR qu'il ne l'a jamais été sur un écran.

Et puis, régulièrement, le jeu devient injouable pour des raisons qui n'ont rien à voir avec la qualité du portage. C'est cet écart qui est intéressant, et c'est pour ça que je parle du jeu de quelqu'un d'autre sur le blog d'un studio.

---

## Table des matières

* <a href="#ce-qui-marche" class="page-scroll">Ce qu'un portage obtient gratuitement : le fantasme</a>
* <a href="#difficulte" class="page-scroll">La difficulté ne survit pas au déménagement</a>
* <a href="#precision" class="page-scroll">La précision n'a jamais été la même compétence</a>
* <a href="#snipers" class="page-scroll">Le problème du sniper</a>
* <a href="#lecon" class="page-scroll">La vraie leçon pour la VR native</a>
* <a href="#ca-vaut" class="page-scroll">Alors, ça vaut le coup de jouer aux portages ?</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Ce qu'un portage obtient gratuitement : le fantasme {#ce-qui-marche}

Commençons par la bonne nouvelle, parce que la quantité de choses qui passent est franchement surprenante.

**Le fantasme de puissance survit intact au déménagement**, et par endroits il s'amplifie. Une poussée de Force visée avec votre propre bras est une sensation différente d'une poussée visée à la souris — non parce que la mécanique a changé, mais parce que votre corps est devenu le périphérique d'entrée, et il croit à ce qu'il fait.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/dd836133-07f5-1794-7af6-afd4b25dcad6.jpg" alt="Star Wars: Jedi Outcast en conversion VR" class="medium"/>

C'est l'argument pour les portages en une image. Du level design vieux de vingt ans, des assets du même âge, et ça fonctionne quand même, parce que **ce que la VR améliore n'est pas la fidélité — c'est l'agentivité.**

---

## La difficulté ne survit pas au déménagement {#difficulte}

C'est là que ça se défait. L'IA est équilibrée pour un joueur à la souris.

**Les dégâts et la précision des ennemis sont réglés contre une menace qui n'existe plus.** Sur un PC, un joueur compétent se colle à sa cible en une fraction de seconde et la garde. En casque, viser est un acte physique effectué par un bras non soutenu, qui fatigue, attaché à un corps qui doit tourner. L'ennemi n'a pas changé. Le plafond du joueur, lui, a chuté d'un facteur important, et rien n'a été rééquilibré.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/7f6d2018-b6a1-72d7-b487-a7ec2b51b320.gif" alt="Combat dans la conversion VR de Jedi Outcast" class="medium"/>

Le résultat se lit comme de l'injustice, mais ce n'est pas un problème de réglage de difficulté. **C'est un problème d'unités.** Les chiffres sont justes dans le mauvais système d'unités.

---

## La précision n'a jamais été la même compétence {#precision}

Deux mécaniques l'exposent le plus durement : **le saut de précision et la visée de précision.**

Les deux se résolvent trivialement au clavier-souris parce que les deux consistent, au fond, à régler une valeur avec justesse. En VR, aucune des deux n'est une valeur qu'on règle — ce sont deux gestes qu'on exécute.

Un saut qu'il faut réussir exactement demande au joueur de contrôler la position d'un personnage avec un système de locomotion conçu pour être confortable, pas exact. Le confort et la précision s'opposent souvent frontalement, et chaque décision de locomotion en VR dépense l'un pour acheter l'autre.

C'est exactement ce que j'ai rencontré en construisant notre propre système d'armes, par l'autre bout : une main n'est jamais immobile, et des données de tracking non filtrées se lisent comme une erreur du joueur. J'ai raconté ce que ça a demandé dans [l'article sur le système d'armes]({{ '/2026/08/11/VR-WEAPON-SYSTEM-FR/' | relative_url }}). Un portage n'a pas l'occasion de faire ce correctif — il hérite de mécaniques qui supposent une précision que le médium n'offre pas.

---

## Le problème du sniper {#snipers}

Les séquences de sniper méritent leur propre mention parce qu'elles cumulent tout ce qui précède.

Un sniper, c'est un test de précision à longue distance sous contrainte de temps, face à un ennemi qui peut aussi vous toucher de loin. En VR ça devient : tendez le bras, gardez-le plus stable qu'un bras humain ne tient, tout en tournant le corps entier pour chercher, face à un ennemi dont la précision a été calibrée contre une souris.

Aucun de ces points n'est fatal isolément. Ensemble, ils produisent une séquence où les gens arrêtent simplement de jouer.

**Les pics de difficulté en VR sont rarement conçus. Ils sont hérités.**

---

## La vraie leçon pour la VR native {#lecon}

Trois choses que j'ai ramenées dans notre travail.

**Réglez la difficulté contre l'entrée, pas contre la fiction.** Si la précision de votre ennemi a été choisie quand viser était plus facile, c'est désormais un autre ennemi. Recalculez le chiffre, ne le multipliez pas.

**N'exigez jamais une précision que votre locomotion ne peut pas fournir.** Si votre déplacement est conçu pour le confort — et il devrait l'être — alors toute mécanique qui exige de l'exactitude se bat contre vos propres fondations.

**Le fantasme est ce que la VR ajoute ; la calibration est ce que la VR casse.** Les deux sont séparables, et savoir lequel est lequel vous dit quoi garder de n'importe quel design écran plat que vous admirez.

Ce dernier point est la raison de jouer aux portages quand on développe : ils isolent la variable. **Vous voyez exactement quelles parties d'un bon jeu étaient portées par le périphérique d'entrée.**

---

## Alors, ça vaut le coup de jouer aux portages ? {#ca-vaut}

Absolument — avec les bonnes attentes.

Jouez-y pour les moments où une idée de vingt ans se met soudain à mieux fonctionner qu'à l'époque. N'y allez pas en espérant un jeu équilibré, et n'en concluez pas que la VR est mauvaise en combat parce que le combat d'un portage était équilibré pour autre chose.

Et si vous faites des jeux VR, jouez-y **précisément aux endroits où ça casse**. C'est de la recherche gratuite. Quelqu'un a déjà mené l'expérience consistant à prendre un excellent design écran plat et à ne changer qu'une seule variable.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Un portage peut-il valoir un jeu VR natif ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
À certains moments, mieux — le fantasme passe et parfois s'intensifie. Sur un jeu entier, non, parce qu'il faudrait refaire tout l'équilibrage, et à ce stade vous avez fait un nouveau jeu. Les portages les plus réussis sont ceux qui ont accepté de changer des chiffres, pas seulement d'ajouter du tracking.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Pourquoi ne pas simplement baisser la difficulté ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Parce que la difficulté n'est pas uniformément trop haute — elle est déformée. La mêlée peut être plus facile que prévu pendant que le tir est bien plus dur, donc un curseur global rend la moitié du jeu trivial pour réparer l'autre moitié. Ce qu'il faut, c'est un réglage par mécanique, c'est-à-dire une passe de design et non une option.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>La VR ne devrait donc pas avoir de mécaniques de précision ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Non — ça veut dire que la précision doit être conçue comme un acte physique et non supposée acquise. Le filtrage de mouvement, des volumes de collision généreux, et des mécaniques où une main stable est récompensée plutôt qu'exigée fonctionnent très bien. Ce qui ne fonctionne pas, c'est un test réussite/échec qui suppose une précision de souris.
</div>
</details>

</div>

---

{% include fr/subscribe-form.html title="Reçois plus d'articles Game Dev comme celui-ci" %}

---

### 💬 Quel portage VR vous a le plus appris ?

Je les collectionne. Les portages qui cassent de façon intéressante sont plus instructifs que la plupart des jeux natifs, et chacun semble avoir le sien.

Sur Discord, ou à guillaume.escarieux@mineogames.com.
