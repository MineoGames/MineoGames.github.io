---
layout: post
title: "Faire sentir les coups : réactions, équilibrage et le coût en framerate d'une horde"
description: "Un coup qui ne produit pas de réaction n'a pas eu lieu. Voici la passe où nous n'avons ajouté aucune fonctionnalité et où le jeu a commencé à ressembler à un jeu."
keywords: "game feel VR, réaction aux impacts, animation physique Unreal, retour ennemi, équilibrage des armes, design de combat VR, optimisation PNJ, DLSS DLAA VR, particules retour d'information, devlog Vermin Exterminator"
lang: fr
ref: making-enemies-feel-hit
topic: games
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/f356ccb2-628e-cec3-01de-39f2d29650ff.gif
---

Il existe une version de *Vermin Exterminator* où tous les systèmes fonctionnaient et où le combat ne procurait rien. On frappait, les dégâts s'appliquaient, un ennemi finissait par cesser d'exister. Correct sur le papier, mort dans la main.

Le correctif n'était pas une fonctionnalité. C'était une passe où nous n'avons ajouté **aucune mécanique nouvelle** et travaillé uniquement sur ce qui se produit dans le quart de seconde suivant le contact.

C'est la passe que je conseillerais à tout le monde de planifier délibérément, parce qu'elle ne passe jamais en priorité toute seule : elle ressemble à de la finition et se comporte comme du design.

---

## Table des matières

* <a href="#quart-de-seconde" class="page-scroll">Le quart de seconde après le contact</a>
* <a href="#reactions" class="page-scroll">Des réactions physiques plutôt que préenregistrées</a>
* <a href="#lisibilite" class="page-scroll">Les particules sont de l'information, pas du décor</a>
* <a href="#equilibrage" class="page-scroll">L'équilibrage fait partie de la sensation</a>
* <a href="#horde" class="page-scroll">Le coût en framerate d'une horde</a>
* <a href="#reglages" class="page-scroll">Les réglages de performance sont une fonctionnalité de sensation</a>
* <a href="#planifier" class="page-scroll">Planifiez la passe qui n'ajoute rien</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Le quart de seconde après le contact {#quart-de-seconde}

Tout ce qui rend un combat agréable se joue dans une fenêtre que la plupart des documents de design ne mentionnent pas : **entre le moment du contact et environ 250 millisecondes plus tard.**

Dans cette fenêtre, le corps du joueur fait une prédiction. Il a frappé avec un vrai bras, sous un vrai angle, avec une vraie force, et son système nerveux a déjà une attente de ce qui doit suivre. Le jeu la confirme ou la contredit, et il n'a pas de seconde chance.

**Sur écran plat, on peut truquer ça avec de l'animation.** Le joueur regarde, il accepte le film. En VR, c'est lui qui a *exécuté* l'entrée : une réponse qui ne correspond pas à ce que son bras a fait se lit comme fausse avant même qu'il puisse dire pourquoi.

---

## Des réactions physiques plutôt que préenregistrées {#reactions}

Le plus gros changement : les ennemis réagissent **physiquement** aux coups, au lieu de jouer une animation d'impact.

Une réaction préenregistrée est identique quels que soient l'endroit et la force du coup. C'est acceptable à distance sur un moniteur. De près, en VR, avec le bras du joueur comme cause, c'est le détail qui casse l'illusion — vous avez frappé la créature à gauche et elle a bronché à droite, exactement comme la fois précédente.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/f356ccb2-628e-cec3-01de-39f2d29650ff.gif" alt="Une araignée réagissant physiquement à un coup" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/a56b8210-cca7-61f3-1b40-7a2bae4cdc75.gif" alt="Un rat réagissant physiquement à un impact" class="small"/>

Chaque créature a demandé un traitement différent, et c'est la partie que j'avais sous-estimée. Une araignée et un rat ne partagent ni plan corporel, ni masse, ni façon de perdre l'équilibre. **La réaction est un trait de caractère**, pas un réglage global — et la rater fait qu'un ennemi ressemble à un accessoire déguisé.

Le travail d'animation là-dessous est ingrat et c'est là que vit la sensation. Des mouvements de créature plus réalistes ont plus fait pour le combat que n'importe quel changement d'arme sur la même période.

---

## Les particules sont de l'information, pas du décor {#lisibilite}

La deuxième couche, c'est ce que le joueur *voit* confirmer le coup.

Il est facile de traiter les effets de particules comme une garniture. Ils n'en sont pas — dans un échange rapide, ils sont souvent la seule chose qui dit au joueur si le contact a été enregistré. Un jet qui s'arrête à la bonne distance, une gerbe dont la taille suit la force du coup, des étincelles lisibles d'un coup d'œil : ce sont des **canaux de retour**, et ils font le même travail que l'haptique.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/68297cc3-00bc-1ba3-af8e-4fe7d0490666.gif" alt="Effets de jet servant de retour à l'impact" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/17bd2f89-c713-2c02-b60f-57997e9f676f.gif" alt="Effets de feu à l'impact" class="small"/>

La règle à laquelle j'ai abouti : **si vous retiriez le son et l'haptique, le joueur pourrait-il encore comprendre ce qui s'est passé rien qu'avec le visuel ?** Sinon, l'effet décore au lieu de rapporter. C'est exactement pour ça qu'on a fini par paramétrer les effets correctement plutôt que de les créer un par un — c'est raconté dans [l'article Niagara]({{ '/2026/08/14/NIAGARA-VR-VFX-FR/' | relative_url }}).

---

## L'équilibrage fait partie de la sensation {#equilibrage}

L'équilibrage des armes est en général classé dans la difficulté. En VR, il appartient aussi à la sensation.

La raison est celle qui gâche tant de conversions écran plat vers VR : **votre visée et votre force sont physiques, donc les chiffres ne veulent plus dire la même chose.** Une arme qui demande trois coups là où le corps du joueur en attendait deux ne se lit pas comme « équilibrée plus dur » — elle se lit comme une arme faible, ou comme des coups qui ne passent pas.

Les passes d'équilibrage et de sensation doivent donc se faire ensemble. Changer un chiffre de dégâts change la solidité perçue d'une arme, que vous ayez touché ou non à quoi que ce soit lié au retour.

---

## Le coût en framerate d'une horde {#horde}

Voici la contrainte qui structure tout ce qui précède.

Un ennemi aux belles réactions physiques, c'est facile. **Plusieurs à l'écran en même temps, tous réagissant physiquement, tous générant des particules, en stéréo, au framerate d'un casque** — c'est là que le design rencontre le budget. Une part importante de cette passe n'a rien créé du tout ; elle a servi à ce que le jeu tienne quand plusieurs PNJ apparaissent simultanément.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/e37fec18-1215-2b21-aa69-119b0246fd88.gif" alt="Plusieurs créatures actives simultanément dans le niveau" class="medium"/>

Ça compte plus en VR qu'ailleurs, parce que le mode de défaillance n'est pas la laideur, c'est l'inconfort. **Une frame perdue pendant un combat n'est pas un défaut visuel, c'est un symptôme physique.** Autrement dit, la taille de horde que votre retour peut se permettre est une donnée d'entrée du design, pas quelque chose à découvrir en phase de test.

---

## Les réglages de performance sont une fonctionnalité de sensation {#reglages}

Une chose que j'aurais classée en pur technique et que je ne classe plus ainsi : donner aux joueurs **DLSS/DLAA avec des réglages ajustables**.

En VR PC, l'écart de matériel est énorme, et le confort n'est pas négociable. Un joueur qui peut échanger de la fidélité visuelle contre un framerate stable ne se voit pas offrir une commodité — il se voit offrir la possibilité de jouer tout court sans se sentir mal.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/7e777bc3-e1fc-ebb2-87a4-a0828192be70.gif" alt="Réglages de performance incluant DLSS et DLAA" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/da785cae-e300-bb01-56df-4759a1fc72c2.gif" alt="Réglages graphiques ajustables dans le menu VR" class="small"/>

Le menu d'options fait donc partie du travail de sensation. C'est ce qui permet à votre quart de seconde soigneusement réglé de survivre au contact avec la machine de quelqu'un d'autre.

---

## Planifiez la passe qui n'ajoute rien {#planifier}

Le point pratique.

Une passe qui n'ajoute aucune fonctionnalité **ne gagnera jamais un arbitrage contre une passe qui en ajoute**, parce que la fonctionnalité a un nom et que la passe a une sensation. Elle doit donc être planifiée délibérément, comme son propre bloc de temps, avec sa propre définition de terminé.

La nôtre était en gros : chaque ennemi réagit distinctement, chaque coup est visible sans le son, la taille de horde tient le framerate, et les réglages permettent à une machine milieu de gamme de rester confortable. Aucun de ces points n'est une fonctionnalité. Ensemble, ils font la différence entre un prototype et un jeu.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Réactions physiques ou animées ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Physiques pour tout ce que le joueur frappe de près en VR, parce que c'est son propre bras qui a fourni l'entrée et que son attente est précise. L'animé convient très bien pour les ennemis lointains, les moments scriptés, ou tout ce que le joueur n'a pas causé. La plupart des projets finissent par mélanger les deux selon la distance.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Combien d'ennemis réactifs peut-on se permettre ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Moins que vous ne voudriez, et le chiffre mérite d'être établi tôt parce qu'il contraint la conception des rencontres. Testez-le sur votre matériel cible minimum et non sur votre machine de développement — l'écart est large, et en VR le dépasser coûte du confort, pas seulement de la fluidité.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>L'upscaling vaut-il le coup en VR malgré les artefacts ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
C'est un arbitrage qui appartient au joueur, pas à vous. Certaines configurations préféreront une netteté maximale à budget d'images réduit ; d'autres ont besoin de chaque frame disponible. Proposer le réglage avec des options claires respecte un parc matériel que vous ne pouvez pas prévoir, ce qui est la situation réelle en VR PC.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Comment sait-on que la passe de sensation est finie ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
En écrivant les critères avant de commencer, parce que « ça fait bien maintenant » n'est pas une ligne d'arrivée et que sinon le travail s'étend indéfiniment. Des affirmations concrètes et vérifiables — chaque ennemi réagit distinctement, les coups se lisent sans le son, la horde cible tient le framerate — transforment une passe de finition sans fin en quelque chose qu'on peut réellement terminer.
</div>
</details>

</div>

---

{% include fr/subscribe-form.html title="Reçois plus d'articles Game Dev comme celui-ci" %}

---

### 💬 Qu'est-ce qui a fait cliquer votre combat ?

Chaque projet semble avoir un changement précis qui a fait passer le combat de correct à satisfaisant. Ça m'intéresse de savoir lequel était le vôtre — le mien, ce sont les réactions, mais j'ai entendu des arguments convaincants pour l'audio.

Sur Discord, ou à guillaume.escarieux@mineogames.com.
