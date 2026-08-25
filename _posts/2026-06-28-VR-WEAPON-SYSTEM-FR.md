---
layout: post
title: "Concevoir un système d'armes en VR : trois réécritures et ce que chacune m'a appris"
description: "Mêlée, tir, un gantelet, puis une réécriture inspirée de Lyra. Chaque version du système d'armes de Vermin Exterminator a échoué différemment — voici sur quoi portait chaque échec."
keywords: "système d'armes VR, combat mêlée VR, armes Unreal Engine VR, Gameplay Ability System, architecture Lyra, haptique VR, système de tir VR, changement d'arme VR, physique mêlée Unreal, Niagara VFX armes, game design VR, Vermin Exterminator"
lang: fr
ref: vr-weapon-system
topic: tech
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/25667f1d-6ecb-79cb-42e7-9c306d917510.gif
---

Le système d'armes de *Vermin Exterminator* a été réécrit trois fois. Pas peaufiné trois fois — **réécrit**, depuis l'architecture.

Ça ressemble à un défaut de planification, et ça l'était en partie. Mais chaque version a échoué différemment, et c'est l'échec qui a servi. **Une arme en VR n'est pas une arme d'écran plat sur laquelle on visse du tracking**, et il m'a fallu trois tentatives pour arrêter de la traiter comme telle.

Voici ce que chaque version ratait.

---

## Table des matières

* <a href="#nimporte-quoi" class="page-scroll">Version 1 : tout ce qu'on peut ramasser est une arme</a>
* <a href="#physique" class="page-scroll">C'est la physique qui fait qu'un coup porte</a>
* <a href="#changement" class="page-scroll">Le vrai problème, c'était de changer d'arme</a>
* <a href="#lyra" class="page-scroll">Version 2 : piquer l'architecture de Lyra</a>
* <a href="#chaleur" class="page-scroll">Version 3 : chaleur, dispersion et munitions</a>
* <a href="#haptique" class="page-scroll">Les derniers 10 % sont haptique, son et compensation</a>
* <a href="#lecons" class="page-scroll">Ce que je dirais à quelqu'un qui démarre</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Version 1 : tout ce qu'on peut ramasser est une arme {#nimporte-quoi}

La première passe de mêlée reposait sur une seule règle : **si vous pouvez le porter, vous pouvez frapper avec.** Et si vous préférez ne pas approcher, vous pouvez le lancer sur la vermine.

Cette règle vient de l'observation des joueurs en casque. Mettez quelqu'un dans une pièce pleine d'objets face à une menace : il ne tend pas la main vers l'arme que vous avez conçue, **il attrape ce qui est le plus près.** Combattre ce réflexe coûte cher et ne sert à rien. Le brief est devenu : laisser une grande liberté, et laisser les joueurs trouver des approches que je n'avais pas prévues.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/02c9fde7-deb8-235d-adea-07bfb561c917.gif" alt="Utiliser un objet porté comme arme de mêlée dans Vermin Exterminator" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/6502ca37-f305-3a39-0bde-5e770c323d3c.gif" alt="Lancer un objet sur la vermine comme projectile" class="small"/>

Ça a marché, et ça a révélé immédiatement le problème suivant : **un coup enregistré comme un coup n'est pas la même chose qu'un coup qui se ressent.**

---

## C'est la physique qui fait qu'un coup porte {#physique}

La version 1 détectait la collision et appliquait des dégâts. Correct, et totalement insatisfaisant.

Ce qui manquait, c'était le côté PNJ de l'échange. Ajouter des **interactions physiques entre les armes de mêlée et les PNJ** a changé toute la sensation — la cible réagit maintenant à l'endroit et à la force du coup, au lieu de jouer une réaction préenregistrée pendant qu'un chiffre descend.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/87d2869f-a639-8493-a49e-3186eb64a7e6.gif" alt="Interaction physique entre une arme de mêlée et un PNJ" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/0dc644c5-243e-94df-d378-cd8b038eb5f0.gif" alt="Gantelet retravaillé avec mêlée pilotée par la physique" class="small"/>

C'est le point spécifiquement VR. Sur un écran plat, l'animation vend l'impact et le joueur l'accepte. **En VR, c'est le bras du joueur qui a fait le geste** : son corps a déjà une attente de ce qui devrait se produire. Tout ce qui est préenregistré se lit comme un mensonge.

---

## Le vrai problème, c'était de changer d'arme {#changement}

Une fois la mêlée et le tir fonctionnels, le système a cassé là où je ne regardais pas : **le passage de l'un à l'autre.**

Les armes à distance marchaient. Mais un joueur sous pression doit changer d'arme sans réfléchir à comment — et en VR il n'y a pas de touche à assigner ni de HUD à ouvrir. Tout est un geste, et un geste qu'il faut se rappeler est un geste qu'on rate.

Le gantelet a donc reçu un **système de sélection pensé pour changer en un mouvement**, pas un menu. On hésite encore sur un troisième emplacement pour les outils, et l'hésitation est justement le sujet : **chaque emplacement supplémentaire coûte de la clarté**, et c'est la clarté qui maintient quelqu'un dans le combat plutôt que dans l'interface.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/7f4d0c94-c716-8756-d693-0d3d170310cd.gif" alt="Système de sélection d'arme sur le gantelet" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/8f4e1326-d1c4-cdc7-4bf2-9ca46d657208.gif" alt="Passer de la mêlée au tir en un seul mouvement" class="small"/>

---

## Version 2 : piquer l'architecture de Lyra {#lyra}

À ce stade, le système marchait et était devenu impossible à étendre. Chaque nouvelle arme signifiait toucher le même blueprint devenu tentaculaire.

La solution est venue de l'étude de **Lyra**, le projet d'exemple d'Epic, et surtout de son usage du **Gameplay Ability System**. L'idée qui compte : les fonctionnalités sont modulaires, **ajoutées et retirées à l'exécution**, au lieu d'être compilées dans une classe qui doit tout connaître.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/3c73c11d-aacd-58e4-03a2-abf87d9ce9ce.gif" alt="Étude de l'architecture modulaire de Lyra dans Unreal Engine" class="small"/>

Réécrire le système d'armes sur ce modèle n'était pas un petit chantier, et ça n'a ajouté aucune fonctionnalité visible le jour de la livraison. Ça a acheté autre chose : **l'arme suivante a cessé d'être un risque.**

Si vous êtes développeur solo et que vous vous demandez si GAS est surdimensionné — ça l'est sans doute pour une arme. Ça cesse de l'être vers la quatrième.

---

## Version 3 : chaleur, dispersion et munitions {#chaleur}

La réécriture a permis de mettre du vrai comportement dans les armes à distance :

- **Une dispersion dynamique**, pour que la précision se gère au lieu d'être une constante
- **Une mécanique de chaleur** — tirer en continu a un coût qui n'est pas juste un chiffre qui baisse
- **Un inventaire de munitions à la place de l'ancien système de mana**
- **Tir coup par coup et automatique**
- **Des VFX configurables avec détection de collision**, construits sous Niagara

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/ddb0be93-c643-8005-636b-c7caf136eef5.gif" alt="Dispersion et chaleur sur le nouveau système de tir" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/d759ed82-90dc-00ce-6828-83c335a2bc88.gif" alt="VFX Niagara avec détection de collision au tir" class="small"/>

Le passage de la mana aux munitions mérite une note. La mana est une abstraction qu'on lit sur une jauge. **Une munition est un objet qu'on transporte**, et en VR cette différence est énorme — l'un est une information, l'autre est une chose dont les mains doivent s'occuper. Tout ce que vous pouvez transformer d'un chiffre en objet, transformez-le en objet.

---

## Les derniers 10 % sont haptique, son et compensation {#haptique}

La dernière passe n'a ajouté aucune mécanique : **haptique, sound design et compensation de mouvement.**

La compensation de mouvement est la moins spectaculaire et probablement la plus importante. **La main d'un joueur n'est jamais immobile.** Sans compensation, l'arme hérite du moindre tremblement, et le joueur en conclut qu'il vise mal alors que le système lui restitue du bruit. Avec, l'intention passe et la vibration parasite non.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/d265e32d-b082-67b0-4512-5871fa7e0315.gif" alt="Gantelet avec haptique, son et compensation de mouvement" class="medium"/>

L'haptique et le son font le même travail par l'autre bout : ils disent au joueur que quelque chose s'est produit, sur la frame même où son corps s'attendait à l'apprendre. Retirez-les, et la mécanique identique paraît cassée.

---

## Ce que je dirais à quelqu'un qui démarre {#lecons}

**Concevez le changement d'arme avant de concevoir la deuxième arme.** Dès qu'il y en a deux, c'est leur interaction le problème de design, pas l'une ou l'autre.

**Transformez les chiffres en objets partout où c'est possible.** La VR récompense ce qui se tient dans la main et punit ce qu'il faut lire.

**Faites la passe d'architecture avant d'en avoir besoin — mais pas avant d'avoir livré une fois.** J'ai réécrit trop tard ; réécrire dès le début aurait été concevoir à l'aveugle.

**Budgétez le retour comme une fonctionnalité, pas comme de la finition.** L'haptique, le son et la compensation ne sont pas le vernis de la mécanique. Ils en sont un tiers.

Vous pouvez voir où tout ça a atterri sur la [page de Vermin Exterminator]({{ '/games/vermin-exterminator-fr/' | relative_url }}).

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Le Gameplay Ability System vaut-il le coup pour une petite équipe ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Pas pour votre première arme, et sans doute pas pour la deuxième. Le coût, c'est une vraie courbe d'apprentissage et une réécriture. Le retour arrive quand le nombre de choses capables de modifier une arme se met à se multiplier — c'est là qu'un blueprint monolithique devient inéditable par qui que ce soit, y compris celui qui l'a écrit.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Pourquoi laisser n'importe quel objet servir d'arme ? Ce n'est pas ingérable à équilibrer ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
C'est plus dur à équilibrer, oui. C'est aussi ce que les gens font de toute façon dès qu'on les met dans une pièce en VR. Bloquer ce réflexe vous coûte plus en immersion que l'équilibrage ne vous coûte en réglages, et les joueurs trouvent régulièrement des approches que vous n'aviez pas conçues — c'est là qu'est l'essentiel du plaisir.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>C'est quoi exactement, la compensation de mouvement ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Filtrer le mouvement involontaire d'une main qui essaie de rester immobile, pour que seul le geste intentionnel atteigne l'arme. Sans ça, le tremblement se lit comme une erreur de visée et les joueurs s'en attribuent la faute alors qu'il s'agit de données de tracking non filtrées.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Faut-il Niagara pour les VFX d'armes ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Pas pour livrer, mais c'est ce qui nous a permis de donner aux effets une détection de collision et de les rendre configurables par arme au lieu de les créer un par un. Sur une petite équipe, c'est la réutilisation qui fait l'argument — « un nouvel effet » devient un changement de paramètre.
</div>
</details>

</div>

---

{% include fr/subscribe-form.html title="Reçois plus d'articles Game Dev comme celui-ci" %}

---

### 💬 Vous construisez des armes en VR ?

Si vous butez sur le changement d'arme, le retour sensoriel, ou une architecture qui ne vous laisse plus rien ajouter, ça m'intéresse de savoir où ça a cassé. Cette conversation-là est en général plus utile qu'un tutoriel.

Sur Discord, ou à guillaume.escarieux@mineogames.com.
