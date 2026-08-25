---
layout: post
title: "En VR, les joueurs ouvrent tout : concevoir des environnements interactifs qui tiennent leur promesse"
description: "Portes, frigos, tiroirs, fours, interrupteurs. Dès qu'un tiroir s'ouvre, tous les tiroirs ont fait une promesse — et c'est le coût de la tenir qui rend le level design VR réellement difficile."
keywords: "environnement interactif VR, level design VR, objets physiques VR, immersive sim VR, props interactifs Unreal Engine, affordance VR, objets attrapables VR, optimisation performance VR, narration environnementale VR, level design Vermin Exterminator"
lang: fr
ref: vr-interactive-environments
topic: games
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/05c5a3ed-64f4-dbfc-33eb-9dc4eeb10c76.gif
---

Quand on a construit le deuxième niveau de *Vermin Exterminator* — un grand ensemble d'appartements — le plan était : un espace plus grand, plus d'endroits où la vermine peut se cacher.

Ce qu'on a réellement construit, c'est une machine à générer des attentes. **Parce qu'au moment où un tiroir s'ouvre, tous les tiroirs de l'immeuble ont fait une promesse.**

C'est la partie du level design VR dont personne ne vous prévient, et ce n'est pas un problème technique. C'est un problème de gestion de promesse, qui se paie en framerate.

---

## Table des matières

* <a href="#tout" class="page-scroll">Les gens ouvrent tout. Vraiment tout.</a>
* <a href="#promesse" class="page-scroll">Un objet interactif engage toute la pièce</a>
* <a href="#ce-quon-a-fait" class="page-scroll">Ce qu'on a réellement rendu interactif</a>
* <a href="#cout" class="page-scroll">Ce que ça coûte, honnêtement</a>
* <a href="#frontiere" class="page-scroll">Poser la frontière là où personne ne la trouve</a>
* <a href="#benefice" class="page-scroll">Le bénéfice : la pièce devient la boîte à outils</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Les gens ouvrent tout. Vraiment tout. {#tout}

Mettez quelqu'un dans une pièce sur écran plat : il la traverse. Mettez-le dans la même pièce en VR : il la **touche.**

Il ouvre le frigo. Il prend une assiette. Il tire un tiroir qui n'a aucune raison de contenir quoi que ce soit. Il appuie sur un interrupteur pour voir s'il marche. Rien de tout ça n'est dans votre document de design, et tout arrive dans les quatre-vingt-dix premières secondes.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/05c5a3ed-64f4-dbfc-33eb-9dc4eeb10c76.gif" alt="Ouvrir un tiroir dans le niveau appartement" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/e80c6ec7-e2c4-08f7-e88b-ccf43a2b3fc1.gif" alt="Ouvrir un four dans le niveau appartement" class="small"/>

La raison est simple : leurs mains sont leurs mains. Il n'y a pas de verbe à apprendre, pas de bouton à découvrir. **Tendre le bras n'est pas une mécanique de jeu pour eux — c'est ce qu'on fait dans une pièce.**

---

## Un objet interactif engage toute la pièce {#promesse}

Voilà le piège.

Sur écran plat, l'interactivité est signalée. Un objet utilisable reçoit une invite, un contour, un surlignage, et tout ce qui n'en a pas est du décor. Le joueur lit la convention et arrête d'essayer.

En VR, ce contrat n'existe pas. **Le premier tiroir qui fonctionne apprend au joueur que les tiroirs fonctionnent ici.** À partir de là, un tiroir qui ne s'ouvre pas n'est pas neutre — il se lit comme cassé, et il coûte plus d'immersion que les dix précédents n'en ont acheté.

C'est pour ça que « rendons quelques objets clés interactifs » est la pire position possible. **Il est plus cohérent de ne rien rendre interactif que d'en rendre certains interactifs.** L'un est un monde stylisé. L'autre est un monde qui ment de façon irrégulière.

---

## Ce qu'on a réellement rendu interactif {#ce-quon-a-fait}

Pour le niveau appartement, on a tenu la promesse sur les éléments vers lesquels les gens tendent réellement la main :

- **Portes, frigos, tiroirs et fours** qui s'ouvrent
- **Des objets qu'on peut attraper, déplacer et lancer** plutôt que regarder
- **Des lumières qu'on peut allumer et éteindre**

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/69755be3-8659-96c1-9c8b-8740f3ef7cc2.gif" alt="Frigo interactif dans l'appartement VR" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/1b632de0-c4ff-c8d0-cc42-8d7d1e7fd323.gif" alt="Attraper et manipuler un objet dans le niveau" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/a4654cf5-c850-ef5a-1ea5-d172f2b876b9.gif" alt="Lancer un objet à travers la pièce" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/0bcf0237-8fe9-95b6-6ca0-0da09e87dade.gif" alt="Placards et rangements qui s'ouvrent dans l'appartement" class="small"/>

L'interrupteur mérite une mention spéciale. C'est l'une des interactions les moins chères à implémenter et l'une des plus rentables, parce que **c'est la première chose qu'un joueur teste pour savoir dans quel type de monde il se trouve.** Si l'interrupteur marche, il fait confiance à l'immeuble. Sinon, il arrête de tendre la main vers quoi que ce soit.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/61a48fc9-5bd8-6503-cc3f-73406deb7cc0.gif" alt="Actionner un interrupteur dans le niveau appartement" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/916b2043-a8ac-32c7-613c-d9942e27b18f.gif" alt="Objets interactifs sur une table de repas" class="small"/>

---

## Ce que ça coûte, honnêtement {#cout}

Un objet interactif n'est pas une chose. C'est :

- **Un corps physique**, donc un coût par frame qui existe que quelqu'un y touche ou non
- **Un état**, qui doit persister pendant que le joueur est ailleurs dans le niveau
- **Une prise en main** qui doit fonctionner depuis tous les angles d'approche possibles
- **Du retour** — son, haptique, résistance — sans quoi l'interaction ressemble à un bug
- **Un mode de défaillance**, parce que tout ce qui peut être lancé peut être lancé là où il ne faut pas

Multipliez ça par un ensemble d'appartements et le niveau devient un problème de performance avant de devenir un problème de design. Une part importante de la construction de ce niveau a été de **l'optimisation**, pas de la création — et c'est ce rapport qui a surpris.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/64494550-7ed5-48a6-dc17-47cc5e22d098.gif" alt="Une chambre meublée dans l'ensemble d'appartements" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/7c281823-a3aa-83da-524d-d786f88997f3.gif" alt="Une seconde chambre avec du mobilier interactif" class="small"/>

---

## Poser la frontière là où personne ne la trouve {#frontiere}

On ne peut pas tout rendre interactif. La vraie compétence de design consiste donc à **poser la frontière là où personne ne tend la main**, en s'appuyant sur l'environnement plutôt que sur une règle.

Ce qui fonctionne :

**Raisonner par catégories, pas par exceptions.** Tous les tiroirs s'ouvrent, ou il n'y a pas de tiroirs. Le joueur se construit un modèle du monde par catégorie ; c'est de violer une instance d'une catégorie qui le casse.

**Retirer plutôt qu'inerter.** Si vous ne pouvez pas vous offrir des placards interactifs dans une pièce, dessinez la pièce sans placards. Un objet absent ne promet rien ; un objet factice promet et trahit.

**Utiliser la distance et le cadrage.** Ce qui est derrière une vitre, hors de portée ou dans une zone fermée est exclu par la logique du monde lui-même, et les joueurs l'acceptent instantanément parce que c'est comme ça que fonctionnent les pièces.

**Dépenser le budget là où vont les mains.** Entre la taille et l'épaule, le long du trajet du joueur. Personne ne teste le dessous d'une table.

---

## Le bénéfice : la pièce devient la boîte à outils {#benefice}

La raison de payer tout ça, c'est qu'une pièce entièrement interactive cesse d'être un décor et devient **de l'équipement.**

C'est exactement ce qui s'est passé avec notre combat : parce que les objets peuvent être ramassés et lancés, l'environnement est un râtelier d'armes. Cette connexion n'était pas prévue — elle est tombée du fait d'avoir construit les deux systèmes honnêtement, et c'est raconté dans [l'article sur le système d'armes]({{ '/2026/06/28/VR-WEAPON-SYSTEM-FR/' | relative_url }}).

**Une interactivité assumée jusqu'au bout génère du gameplay que vous n'avez pas conçu.** Une interactivité assumée à moitié ne génère que des reproches.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Ne suffit-il pas de surligner les objets interactifs ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Ça marche, et ça vous coûte ce pour quoi vous êtes venu en VR. Les contours et les invites sont une convention d'écran plat qui dit au joueur d'arrêter d'explorer et de se mettre à lire. Parfois l'échange est bon — pour un module de formation ou un jeu de puzzle au périmètre serré — mais dans un jeu où l'on est quelque part, c'est cher payé.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Comment empêcher les joueurs de lancer des objets hors du niveau ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
On ne les empêche pas — ils le feront, et précisément parce que vous préféreriez qu'ils s'abstiennent. Prévoyez la récupération à la place : des objets qui reviennent, réapparaissent, ou n'ont simplement aucune importance. Un design où un objet lancé peut bloquer la progression est un design qui sera bloqué.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Toute cette physique tient-elle le framerate ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Seulement avec un travail délibéré — mise en sommeil des corps, culling par distance et par pièce, et un plafond strict sur le nombre d'objets simultanément actifs. Budgétez l'optimisation comme une part du temps de construction du niveau plutôt que comme une passe finale, parce qu'en VR une frame perdue n'est pas un à-coup, c'est de l'inconfort.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Par quoi commencer dans une petite équipe ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Les portes et les interrupteurs, puis tout ce qui est à hauteur de main sur le trajet principal du joueur. Ces trois choses couvrent l'essentiel de ce que les gens essaient instinctivement, et bien les réussir achète plus de confiance par heure de travail qu'une pièce remplie d'objets attrapables que personne ne remarque.
</div>
</details>

</div>

---

{% include fr/subscribe-form.html title="Reçois plus d'articles Game Dev comme celui-ci" %}

---

### 💬 Où avez-vous mis la limite ?

Chaque projet VR doit décider jusqu'où va la promesse d'interactivité. Ça m'intéresse de savoir où vous avez placé la vôtre, et si les joueurs en ont trouvé le bord.

Sur Discord, ou à guillaume.escarieux@mineogames.com.
