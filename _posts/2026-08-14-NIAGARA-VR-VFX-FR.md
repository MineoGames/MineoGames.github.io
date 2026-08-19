---
layout: post
title: "Niagara pour les VFX en VR : ce que trois mois de particules m'ont appris"
description: "Rubans, faisceaux, étincelles, gaz et feu — et le plafond de performance qui décide lesquels vous avez vraiment le droit de livrer. Notes d'apprentissage de Niagara sur un jeu VR."
keywords: "Niagara VFX, Unreal Engine Niagara, effets de particules VR, tutoriel Niagara, performance VFX VR, optimisation particules Quest, collision Niagara, ruban faisceau étincelles Niagara, optimisation Unreal Engine VR, VFX jeu indépendant"
lang: fr
ref: niagara-vr-vfx
topic: tech
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/2046b6db-85f4-d002-ab03-a3386f154b92.gif
---

J'ai passé environ trois mois à devenir vraiment compétent sur **Niagara**, le système de particules d'Unreal, parce que les armes de *Vermin Exterminator* en étaient arrivées au point où les mécaniques fonctionnaient et où rien ne donnait l'impression qu'il s'était passé quelque chose.

C'est la vraie raison d'apprendre les VFX dans une petite équipe. Pas pour faire joli — **pour rendre les actions lisibles.** En VR surtout, un effet n'est pas de la décoration ; c'est le jeu qui dit au corps du joueur que ce qu'il vient de faire a eu une conséquence.

Voici ce que je dirais à la version de moi qui commençait.

---

## Table des matières

* <a href="#pourquoi" class="page-scroll">Pourquoi les VFX comptent plus en VR</a>
* <a href="#vocabulaire" class="page-scroll">Le vocabulaire : rubans, faisceaux, étincelles, gaz, feu</a>
* <a href="#collision" class="page-scroll">La collision fait entrer l'effet dans le monde</a>
* <a href="#dynamique" class="page-scroll">Couleur et taille au fil de la vie</a>
* <a href="#budget" class="page-scroll">Le plafond de performance est la contrainte de design</a>
* <a href="#soleil" class="page-scroll">L'exercice d'une journée qui m'a le plus appris</a>
* <a href="#reutilisation" class="page-scroll">Configurables, ou construits deux fois</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Pourquoi les VFX comptent plus en VR {#pourquoi}

Sur un écran plat, le joueur regarde un événement. En casque, le joueur **se tient là où l'événement se produit**, à une échelle que son corps comprend, avec la possibilité de se pencher.

Trois conséquences en découlent, et elles orientent toutes les décisions qui suivent :

**On ne peut pas simuler la profondeur.** Les VFX écran plat s'appuient massivement sur des sprites face caméra. La vision stéréo les lit comme les cartes plates qu'ils sont, dès la première fois que quelqu'un incline la tête.

**L'échelle se ressent, elle ne se juge pas.** Un effet qui se lit « grand » sur un moniteur se lit comme une taille réelle en VR, et si cette taille est fausse tout le moment sonne faux d'une manière que le joueur ne saura pas formuler.

**Tout est proche.** Les effets de bouche se produisent à longueur de bras, dans la zone la plus précise de la vision, au framerate que vous tenez. Nulle part où se cacher.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/e99adcc2-e43c-a49f-4dc2-9782b11e627a.gif" alt="Effets Niagara sur une arme à distance dans Vermin Exterminator" class="medium"/>

---

## Le vocabulaire : rubans, faisceaux, étincelles, gaz, feu {#vocabulaire}

Apprendre Niagara, c'est surtout apprendre quelle primitive attraper. L'ensemble que j'utilise en permanence :

- **Rubans** — traînées continues ; ce qui transforme un objet rapide en trajectoire lisible
- **Faisceaux** — une liaison entre deux points ; instantané, sans ambiguïté, idéal pour montrer « ceci a touché cela »
- **Étincelles** — petites, rapides, brèves ; la ponctuation de l'impact
- **Gaz** — volume et dérive ; une présence plutôt qu'un événement
- **Feu** — celui par lequel tout le monde commence, et celui qui récompense le plus la retenue

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/5c0ac835-ea26-69a5-6637-679ccf8568a8.gif" alt="Effet de traînée en ruban construit sous Niagara" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/415e39ec-aa95-42f4-de9e-1903ba895288.gif" alt="Faisceau reliant l'arme à la cible" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/f639326a-0eca-8ae0-836e-811e4635ecf8.gif" alt="Gerbe d'étincelles à l'impact" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/3256c0ac-837d-6a17-a351-b6e0bf2f0159.gif" alt="Effet de gaz et de volume sous Niagara" class="small"/>

Ce que j'ai mis le plus longtemps à comprendre : **chacun répond à une question différente.** Le ruban répond à *où est-ce parti*. Le faisceau répond à *qu'est-ce qui a été relié*. L'étincelle répond à *est-ce que ça a touché*. Si vous hésitez entre eux, c'est probablement que vous n'avez pas décidé ce que le joueur doit savoir.

---

## La collision fait entrer l'effet dans le monde {#collision}

L'amélioration qui a le plus changé la sensation de nos effets : **donner une détection de collision aux particules.**

Un effet qui traverse la géométrie est une vidéo qui se joue dans la pièce. Un effet dont les étincelles rebondissent sur le sol et dont le gaz s'arrête au mur est un événement qui s'est produit *dans* la pièce. Même nombre de particules, lecture totalement différente.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/690f95c3-26fb-569c-8de0-34e82eefcd15.gif" alt="Particules entrant en collision avec la géométrie du monde" class="medium"/>

Ce n'est pas gratuit — la collision fait partie des coûts qu'on arbitre plus bas. Mais c'est le coût que je paierais en premier, parce qu'il achète une crédibilité qu'aucune quantité de particules supplémentaires ne peut acheter.

---

## Couleur et taille au fil de la vie {#dynamique}

La deuxième chose à apprendre tôt : **piloter la couleur et la taille dynamiquement au lieu de les fixer une fois.**

Une étincelle qui part blanche, refroidit vers l'orange et rétrécit en mourant fait de la physique que le joueur connaît déjà. Elle se lit correctement sans explication. Une étincelle orange à taille constante pendant toute sa vie se lit comme un point qui se déplace.

C'est aussi là que les VFX deviennent discrètement du retour d'information. Dans notre système d'armes, la couleur des effets porte l'état — chaleur, type de munition, impact enregistré ou non. **Un joueur qui peut lire l'état de son arme à sa bouche n'a pas besoin de HUD**, ce qui en VR change tout. C'est détaillé dans [l'article sur le système d'armes]({{ '/2026/08/11/VR-WEAPON-SYSTEM-FR/' | relative_url }}).

---

## Le plafond de performance est la contrainte de design {#budget}

Voilà ce qui sépare les VFX en VR des VFX tout court.

Chaque effet est en concurrence avec tout le reste pour le budget de frame, et en VR ce budget est à la fois plus petit et non négociable. Vous rendez deux vues. Une frame perdue n'est pas un à-coup, c'est de l'inconfort. **Il n'y a pas de « ça passe sur ma machine »** — la machine est sur le visage de quelqu'un.

La vraie compétence n'est donc pas de construire un effet impressionnant. C'est **d'optimiser la qualité visuelle sans compromettre la fluidité** — et de savoir quel bouton tourner quand l'effet dépasse :

- Moins de particules, plus grandes et plus brèves, valent en général mieux que beaucoup de petites persistantes
- La collision sur les particules qui doivent sembler physiques, désactivée sur celles qu'il suffit de voir
- Tuer les effets à la distance et à l'occlusion plutôt que de les laisser finir par politesse
- Un effet qui ne se joue qu'à longueur de bras peut s'offrir un détail qu'un effet d'ambiance ne peut pas

Je construis maintenant chaque effet avec une réponse approximative à *« combien peuvent être à l'écran en même temps »* avant même d'ouvrir l'éditeur. Ajouter cette réponse après coup coûte beaucoup plus cher.

---

## L'exercice d'une journée qui m'a le plus appris {#soleil}

À un moment, j'ai pris le logo d'un ami et je l'ai reconstruit en **soleil 3D tournant et brûlant au-dessus d'un désert d'Arizona**. Une journée, du début à la fin.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/1d87be90-bad7-1607-99a4-c85066d81c06.gif" alt="Un soleil 3D tournant et brûlant construit sous Niagara en une journée" class="medium"/>

Ça n'avait aucun rapport avec le jeu, et c'est la journée la plus utile des trois mois. Une pièce autonome avec une échéance fixée à *ce soir* vous force à réellement finir quelque chose, et c'est en finissant qu'on découvre quelles parties de son savoir sont réelles.

Si vous apprenez un outil de cette taille, **intercalez une pièce d'une journée, jetable et terminée, entre chaque paire de tutoriels.** Les tutoriels enseignent des fonctionnalités ; l'exercice enseigne le jugement.

---

## Configurables, ou construits deux fois {#reutilisation}

Le dernier point, et c'est l'argument des petites équipes.

Si chaque effet est fait à la main pour une arme, alors chaque nouvelle arme est une tâche VFX complète, et les VFX seront toujours ce pour quoi vous n'avez pas le temps. Si les effets sont **paramétrés** — couleur, taille, durée de vie, comportement de collision, tout exposé — alors une nouvelle arme est un changement de paramètre.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/ad40759b-27a6-0f2a-6289-5c2c8b5921e8.gif" alt="Systèmes Niagara configurables réutilisés d'une arme à l'autre" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/044038c5-977f-fecd-66b0-7e0f3b6c92ba.gif" alt="Effets de feu et d'explosion construits sous Niagara" class="small"/>

C'est la même conclusion que pour l'architecture des armes, atteinte par un autre chemin : **dans une petite équipe, ce qu'il faut optimiser n'est pas l'asset, c'est le coût de l'asset suivant.**

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Niagara vaut-il le coup pour un solo, ou faut-il acheter des effets ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Les effets achetés sont un bon point de départ et un mauvais point d'arrivée, parce qu'ils ont été créés sans connaître votre budget de performance ni vos besoins de retour d'information. Apprendre assez de Niagara pour modifier et re-régler ce que vous achetez est un investissement bien plus petit que d'apprendre à créer de zéro, et c'est là qu'est l'essentiel de la valeur.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Combien coûte réellement la collision de particules ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Assez pour que ce soit une décision et non un réglage par défaut. L'approche pratique est effet par effet : activée pour tout ce que le joueur verra interagir de près avec une surface, désactivée pour les systèmes d'ambiance ou lointains où personne ne verrait la différence. Profilez sur le casque cible, pas dans l'éditeur — l'écart est important.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Les tutoriels VFX écran plat s'appliquent-ils à la VR ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Les techniques oui ; les raccourcis non. Tout ce qui repose sur un angle de caméra unique — des sprites face caméra qui remplacent du volume, de la profondeur peinte, des effets réglés pour être justes à une seule distance — doit être revérifié en stéréo. Considérez chaque astuce de tutoriel comme valable jusqu'à ce que vous l'ayez regardée de côté.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Par où commencer si on n'a jamais ouvert Niagara ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Par un effet d'impact sur quelque chose qui existe déjà dans votre jeu. C'est petit, c'est testable immédiatement, et ça vous fait traverser les émetteurs, les modules et les courbes de durée de vie sans assez de périmètre pour vous perdre. Ensuite, faites la pièce jetable d'une journée — c'est là que ça cesse d'être un tutoriel et devient une compétence.
</div>
</details>

</div>

---

{% include fr/subscribe-form.html title="Reçois plus d'articles Game Dev comme celui-ci" %}

---

### 💬 Il ressemble à quoi, votre budget VFX ?

Si vous faites des particules en VR, ça m'intéresse vraiment de comparer où part votre budget de frame — c'est le chiffre que personne ne publie et que tout le monde veut connaître.

Sur Discord, ou à guillaume.escarieux@mineogames.com.
