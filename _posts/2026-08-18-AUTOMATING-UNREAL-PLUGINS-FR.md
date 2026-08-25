---
layout: post
title: "Automatiser Unreal : quand arrêter de le faire à la main et écrire le plugin"
description: "Deux plugins éditeur — un pour l'import audio, un pour le paramétrage de destruction en lot. Les deux viennent du même moment : refaire les mêmes douze clics pour la quarantième fois."
keywords: "plugin éditeur Unreal, automatiser Unreal Engine, scripting éditeur Unreal, automatisation SoundCue, SoundClass attenuation, Chaos Destruction, Chaos Dataflow, geometry collection en lot, outillage Unreal, editor utility C++, pipeline technique"
lang: fr
ref: automating-unreal-plugins
topic: tech
image: https://img.mailinblue.com/9272083/images/content_library/original/69f4cab6151f9efcabbd01b6.gif
---

Deux des choses les plus utiles que j'aie construites cette année n'apparaissent dans aucun jeu. Ce sont des **plugins éditeur** — un pour l'import audio, un pour le paramétrage de destruction en lot — et les deux viennent exactement du même moment.

Ce moment, le voici : vous refaites les mêmes douze clics pour la quarantième fois, et vers la quarantième vous êtes franchement agacé. **Cet agacement est une donnée.** C'est le signal le moins cher que vous obtiendrez pour savoir qu'une tâche est passée de « une chose que je fais » à « une chose qui devrait se faire toute seule ».

Voici ce que font les deux plugins, et la règle que j'utilise désormais pour décider d'en écrire un.

---

## Table des matières

* <a href="#invisible" class="page-scroll">Pourquoi ce travail ne passe jamais en priorité</a>
* <a href="#audio" class="page-scroll">Plugin un : l'import audio</a>
* <a href="#destruction" class="page-scroll">Plugin deux : la destruction en lot</a>
* <a href="#dataflow" class="page-scroll">Paramétrer d'abord, batcher ensuite</a>
* <a href="#quand" class="page-scroll">La règle : quand ça vaut le coup de l'écrire</a>
* <a href="#erreurs" class="page-scroll">Le vrai gain n'est pas le temps</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Pourquoi ce travail ne passe jamais en priorité {#invisible}

L'outillage perd tous les arbitrages de planning, et la raison est structurelle : **il n'a pas de capture d'écran.**

Une fonctionnalité se montre. Un niveau se parcourt. Un plugin qui renomme correctement les assets produit un projet qui ressemble exactement au projet que vous aviez déjà, sauf que les cent imports suivants ne partiront pas de travers.

Alors on le repousse, et la version manuelle taxe discrètement chaque semaine. C'est le même problème que la [passe de finition qui n'ajoute aucune fonctionnalité]({{ '/2026/08/06/MAKING-ENEMIES-FEEL-HIT-FR/' | relative_url }}) — un travail manifestement utile et structurellement difficile à justifier au moment où il faudrait le faire.

Le remède est le même aussi : **le planifier délibérément, ou il n'arrivera pas.**

---

## Plugin un : l'import audio {#audio}

Le premier plugin éditeur Unreal que j'ai écrit, et celui que je recommanderais à n'importe qui comme premier, parce que le travail est entièrement mécanique.

Faire entrer un son dans un projet n'est pas une action. C'est : importer le fichier, le renommer selon la convention, assigner la bonne **SoundClass**, assigner la bonne **Attenuation**, créer un **SoundCue**, et configurer ce cue — pitch aléatoire si c'est un effet, boucle si c'est de la musique.

Six étapes, à chaque fois, pour chaque son. Et chacune est un endroit où faire une petite erreur que vous retrouverez trois semaines plus tard.

Le plugin fait tout ça à l'import :

- Il **renomme** la SoundWave selon la convention
- Il **assigne SoundClass et Attenuation d'après le dossier où le fichier a atterri** — le dossier *est* déjà la catégorisation, arrêtons de demander à l'humain de la répéter
- Il **crée le SoundCue** avec pitch aléatoire pour les effets, en boucle pour la musique

<img src="https://img.mailinblue.com/9272083/images/content_library/original/69f4cab6151f9efcabbd01b6.gif" alt="Import audio automatisé créant et configurant les SoundCue dans Unreal" class="medium"/>

La décision de conception à voler, c'est celle du milieu : **utiliser comme entrée une structure que vous maintenez déjà.** Personne n'a eu à inventer de métadonnées — la hiérarchie de dossiers répondait déjà à « c'est quel type de son », elle n'était simplement lue par rien.

---

## Plugin deux : la destruction en lot {#destruction}

Le second est né sur *ORO*, où l'on voulait que la destruction fasse partie de la sensation du jeu plutôt que d'être un effet visuel posé par-dessus.

Cette ambition a une conséquence ingrate : **des dizaines d'éléments destructibles**, chacun demandant des réglages Chaos Destruction. Clustering, seuils de dégâts, tout. Le faire à la main sur des dizaines d'assets est à la fois fastidieux et — surtout — inconstant, parce qu'un humain qui applique les mêmes réglages quarante fois n'applique pas les mêmes réglages quarante fois.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/6a4526a85d8f9520fc596a42.gif" alt="La destruction comme élément de sensation dans ORO" class="small"/>
<img src="https://img.mailinblue.com/9272083/images/content_library/original/6a45252cc62b85387ce1e585.png" alt="Réglages Chaos Destruction sur une geometry collection" class="small"/>

---

## Paramétrer d'abord, batcher ensuite {#dataflow}

C'est la partie que j'aurais ratée sans l'avoir faite, et elle se généralise bien au-delà de la destruction.

L'instinct pousse à écrire un script qui répète vos clics. C'est de l'automatisation des *actions*, et c'est fragile — dès que les réglages doivent changer, vous éditez un script et vous le relancez sur tout.

Le meilleur mouvement se fait en deux temps :

**D'abord, faire des réglages une chose.** On a utilisé un **Chaos Dataflow Graph** pour paramétrer la destruction — clustering, seuils de dégâts — pour que la configuration existe comme un asset plutôt que comme des valeurs tapées à quarante endroits.

**Ensuite, batcher l'application.** Un **plugin C++** ajoute une action au menu contextuel : sélectionner les meshes, créer les geometry collections, et faire appliquer automatiquement l'asset Dataflow.

<img src="https://img.mailinblue.com/9272083/images/content_library/original/6a45272f5d8f9520fc596a80.gif" alt="Création en lot de geometry collections avec application automatique du Dataflow" class="medium"/>

La différence compte énormément plus tard. Avec les réglages paramétrés, **changer le comportement de la destruction sur tout le jeu revient à éditer un asset**, pas à relancer un script. Vous avez automatisé la répétition *et* supprimé la duplication, ce sont deux gains distincts et un seul des deux est évident au départ.

C'est la même forme que [paramétrer les VFX au lieu de créer chaque effet]({{ '/2026/07/10/NIAGARA-VR-VFX-FR/' | relative_url }}), et que la [réécriture de l'architecture des armes]({{ '/2026/06/28/VR-WEAPON-SYSTEM-FR/' | relative_url }}). Dans une petite équipe, ce qu'il faut optimiser n'est jamais l'asset — c'est le coût du suivant.

---

## La règle : quand ça vaut le coup de l'écrire {#quand}

Trois conditions, et je les veux toutes les trois avant d'ouvrir un projet de plugin éditeur :

**1. C'est entièrement mécanique.** Aucun jugement dans la boucle. Si une étape demande de décider, l'automatiser revient à automatiser une mauvaise décision.

**2. Vous l'avez fait assez de fois pour en connaître la forme.** Écrire l'outil avant d'avoir vécu la tâche, c'est deviner ses besoins. La quarantième répétition est agaçante *et* c'est elle qui vous a appris ce que l'outil doit faire.

**3. Ça va continuer d'arriver.** Un traitement ponctuel reste un traitement ponctuel. Écrivez le script jetable, ne construisez pas le plugin.

S'il en manque une, faites-le à la main une fois de plus. Si les trois tiennent, le plugin se rembourse en général dans le projet en cours — et c'est avant de compter le second gain, qui est le plus important.

---

## Le vrai gain n'est pas le temps {#erreurs}

J'ai présenté les deux comme des gains de temps au départ. Ce n'est pas de là qu'est venue la valeur.

**La valeur, c'est que les erreurs s'arrêtent.** Un asset mal nommé, une atténuation manquante, un seuil de dégâts légèrement différent sur l'une des quarante geometry collections — rien de catastrophique, et chacune vous coûtera une heure de débogage perplexe à un moment, en général quand vous aurez oublié que cet asset a été configuré un autre après-midi que les autres.

L'automatisation rend le projet *uniforme*, et c'est l'uniformité qui permet de raisonner dessus. **Un projet où chaque son a été configuré de la même manière est un projet où un son qui se comporte bizarrement est un vrai signal**, et pas peut-être une erreur de configuration.

C'est l'argument que j'utiliserais contre moi-même quand la tâche d'outillage est en concurrence avec une fonctionnalité : vous n'achetez pas des minutes, vous achetez la capacité de faire confiance à votre propre projet.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Faut-il du C++ pour écrire des outils éditeur Unreal ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Pas pour commencer. Les editor utility blueprints et le scripting Python couvrent beaucoup de manipulation d'assets, et c'est le bon endroit pour prototyper ce que l'outil doit faire. Le C++ devient utile quand vous voulez une vraie intégration éditeur — une action de menu contextuel qui fait partie du moteur plutôt qu'un utilitaire qu'il faut aller chercher.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>La configuration par dossier n'est-elle pas fragile ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Elle l'est si votre arborescence est arbitraire. Elle est excellente si la structure a déjà du sens et qu'elle est respectée — ce qui pour l'audio est en général le cas, parce que vous aviez organisé les fichiers ainsi pour vous-même avant qu'aucun outil n'existe. Servez-vous-en là où la convention tient déjà ; n'inventez pas une convention juste pour qu'un script puisse la lire.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Et si les réglages changent après avoir tout batché ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
C'est exactement le cas pour lequel l'approche paramétrée existe. Si l'outil de lot a copié les valeurs dans chaque asset, vous relancez et vous espérez. S'il a appliqué un asset de configuration partagé, vous éditez cet asset une fois. Le travail supplémentaire au départ vous achète le droit de changer d'avis plus tard, ce que vous ferez.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Comment justifier du temps d'outillage dans une petite équipe ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Comptez les erreurs, pas les minutes. Le temps gagné est facile à contester parce que la version manuelle « ne prend qu'un instant ». Le coût d'un asset incohérent qui provoque une session de débogage le mois prochain est plus difficile à balayer, et c'est le chiffre honnête.
</div>
</details>

</div>

---

{% include fr/subscribe-form.html title="Reçois plus d'articles Game Dev comme celui-ci" %}

---

### 💬 Qu'avez-vous fini par automatiser ?

Tout le monde a une tâche qu'il a faite à la main bien trop longtemps. Ça m'intéresse de savoir laquelle était la vôtre, et ce qui a fini par faire basculer — chez moi, c'est toujours l'agacement plutôt que le calcul.

Sur Discord, ou à guillaume.escarieux@mineogames.com.
