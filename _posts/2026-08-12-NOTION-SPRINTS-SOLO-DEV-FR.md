---
layout: post
title: "Faire des sprints dans Notion quand on est seul (ou presque)"
description: "Scrum a été écrit pour des équipes de huit. Voici la version qui survit quand le dev, le producteur et le testeur sont la même personne — et ce qu'il faut automatiser pour replanifier en trois clics."
keywords: "sprints Notion, planification développeur solo, agile solo, gestion de projet jeu vidéo, automatisations Notion, sprint jeu indépendant, Notion studio de jeux, suivi du temps Notion, jalons projet, éviter le crunch, template Notion UGO"
lang: fr
ref: notion-sprints-solo-dev
topic: productivity
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/24488453-c738-44bc-fdbc-6119cae3fcd8.gif
---

Scrum a été écrit pour une équipe de huit avec un product owner. La plupart d'entre nous sommes une seule personne qui porte toutes les casquettes, et les cérémonies s'effondrent dès qu'on essaie seul : **un daily avec soi-même, c'est de l'angoisse avec un horaire.**

Mais le sprint lui-même — une boîte de temps fixe avec un périmètre décidé — survit à la réduction d'échelle. C'est le seul dispositif de planification que j'aie trouvé qui réponde à *« qu'est-ce que je fais aujourd'hui »* sans réunion.

Voici la version qui a tenu, et la partie que j'ai automatisée pour que replanifier cesse d'être une punition.

---

## Table des matières

* <a href="#pourquoi" class="page-scroll">Pourquoi le sprint marche encore à une personne</a>
* <a href="#trois-piliers" class="page-scroll">Centraliser, se concentrer, planifier</a>
* <a href="#structure" class="page-scroll">La structure : objectifs, jalons, sprints, tâches</a>
* <a href="#estimer" class="page-scroll">Estimer sans se mentir</a>
* <a href="#glissement" class="page-scroll">Le sprint va déborder — prévoyez ça plutôt</a>
* <a href="#automatisations" class="page-scroll">Quoi automatiser en premier</a>
* <a href="#documentation" class="page-scroll">Pourquoi la partie ennuyeuse rapporte</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Pourquoi le sprint marche encore à une personne {#pourquoi}

Jetez les cérémonies. Gardez trois propriétés :

**Une durée fixe.** Pas parce que deux semaines seraient magiques, mais parce qu'une boîte qui ne se ferme jamais ne force jamais de décision. Quand la boîte se ferme, il faut bien regarder ce qui n'est pas fini.

**Un périmètre décidé.** Le périmètre est une promesse que vous vous faites sur ce que vous n'allez **pas** faire. C'est sa vraie fonction. Un développeur solo n'échoue pas par manque d'idées, il échoue parce qu'elles sont toutes ouvertes en même temps.

**Une fin visible.** Quelque chose à montrer. Sans ça, six semaines de vrai travail donnent l'impression qu'il ne s'est rien passé — et c'est ce sentiment-là qui tue les projets.

Tout le reste de Scrum existe pour coordonner des gens. À une personne, c'est de la surcharge.

---

## Centraliser, se concentrer, planifier {#trois-piliers}

Si je compresse tout ce que je fais en trois gestes, ce sont ceux-là.

**Centraliser.** Un seul endroit. Pas un endroit par type de chose — un endroit. Le coût des systèmes éparpillés, ce n'est pas le changement d'outil, c'est le doute : *est-ce que je l'ai noté dans l'autre outil ?*

**Se concentrer.** Le rôle du système est de rendre une chose évidente maintenant et de cacher le reste. Un tableau de bord qui montre tout est une to-do list avec des étapes en plus.

**Planifier et mesurer.** Pas pour prédire l'avenir, mais pour voir si les deux dernières semaines ont ressemblé à ce qu'on croyait. Cet écart est le seul entraînement à l'estimation qui existe.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/5a2af0df-4382-8159-5c1c-67aa0d970384.png" alt="Les trois piliers de l'organisation : centraliser, se concentrer, planifier" class="medium"/>

J'en suis arrivé là après avoir quitté ClickUp — la migration et la stack gratuite qui l'a remplacé sont dans [un article précédent]({{ '/2024/02/20/NOTION-MAKE-WINDMILL-TMETRIC-FR/' | relative_url }}), je ne les refais pas ici.

---

## La structure : objectifs, jalons, sprints, tâches {#structure}

Quatre niveaux, pas un de plus :

- **Objectifs** — à quoi sert l'année, triés par trimestre
- **Jalons** — les morceaux livrables en lesquels un objectif se découpe
- **Sprints** — les boîtes de temps fixes
- **Tâches** — le travail, chacune portant une **priorité** et une **complexité**

La relation qui compte, c'est qu'une tâche appartient à un jalon, et un jalon à un objectif. Cette chaîne est ce qui permet de répondre à *« pourquoi je fais ça ? »* un mardi après-midi où la réponse n'est pas évidente.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/2e049c1c-4b3b-755e-6ac9-1c7fe6e89b8c.png" alt="Objectifs découpés en jalons dans Notion" class="small"/>
<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/1d587177-e920-196f-7d9d-35108cc84afb.png" alt="Tableau de sprint avec priorité et complexité sur chaque tâche" class="small"/>

Les points trimestriels font la relecture annuelle. **Trier les objectifs par trimestre automatiquement** est un petit détail qui change le comportement : l'année cesse d'être un mur et devient quatre conversations.

---

## Estimer sans se mentir {#estimer}

Deux propriétés sur chaque tâche : **priorité** et **complexité**. Pas des heures.

Les heures sont un piège pour un solo, parce que vous n'en avez pas huit. Vous avez les fragments qui restent après les mails, le support, la facturation et le truc qui a cassé. Estimer en heures produit un plan qui ne fonctionne que dans une vie que vous n'avez pas.

La complexité contourne ça — elle mesure la tâche, pas votre semaine. Ensuite le **suivi du temps** vous dit ce qu'un point de complexité a réellement coûté, dans vos conditions réelles.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/2b071771-305d-01cc-16e5-0a9dfbceddd5.gif" alt="Suivi du temps intégré à la vue sprint" class="medium"/>

Cette boucle — estimer en complexité, mesurer en temps, comparer — c'est tout l'entraînement à l'estimation. Il faut environ trois sprints avant que les chiffres deviennent utiles, et on ne peut pas sauter à la fin.

---

## Le sprint va déborder — prévoyez ça plutôt {#glissement}

C'est là que la plupart des systèmes se trompent. Ils traitent un sprint qui déborde comme un échec à corriger. Ce n'en est pas un : c'est le cas normal.

Ce qui compte, c'est de **voir le glissement assez tôt pour agir**, et de pouvoir agir à bas coût. Deux choses le permettent :

**Une surveillance des échéances.** Signaler les tâches dont les dates dérivent *avant* la fin du sprint. Le crunch ne vient presque jamais d'une semaine impossible — il vient de quatre semaines de dérive silencieuse que personne n'a regardées.

**Une replanification bon marché.** Si déplacer une tâche au sprint suivant impose de relier tout à la main, vous ne le ferez pas, et le plan devient discrètement un mensonge. Avec le remplissage automatique et **l'affectation automatique des dépendances**, replanifier un sprint tient en trois clics — donc ça se fait vraiment.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/02884a88-23e0-6e98-5503-92f45f491e5e.gif" alt="Replanifier un sprint en trois clics avec les dépendances automatiques" class="medium"/>

**Un plan qu'on rechigne à modifier cesse d'être un plan.** Il devient un document sur le passé.

---

## Quoi automatiser en premier {#automatisations}

Pas tout. Par ordre de rendement :

1. **L'affectation au jalon** — une tâche créée depuis un jalon devrait déjà savoir où elle appartient
2. **Le lien de dépendance** — la chose qu'on ne fait jamais à la main, ce qui est précisément pourquoi elle doit être automatique
3. **L'organisation des sprints** — déplacer, trier, fermer la boîte
4. **L'archivage des tâches terminées** — pour que le tableau montre le présent, pas l'année
5. **Les tâches récurrentes** — l'administratif mensuel qui bouffe une journée si on le redécouvre à chaque fois. Les automatisations de date de Notion en couvrent l'essentiel ; `@LastDayOfMonth` gère celles qui tombent en fin de mois.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/1f3011da-067a-b76c-c0a7-a323e889e67e.gif" alt="Automatisations natives Notion : jalons, dépendances, archivage" class="medium"/>

Tout ce qui est dans cette liste se fait aujourd'hui avec les **automatisations natives de Notion** — et ça compte, parce que la version que je faisais tourner sur des outils externes cassait à chaque fois que l'un d'eux changeait son API. Moins de pièces mobiles vaut mieux que plus de possibilités quand il n'y a personne d'autre que vous pour réparer.

{% include product-callout.html slug="ugo" note="C'est ce système, packagé. Objectifs, jalons, sprints et tâches déjà reliés, les automatisations ci-dessus déjà construites, et les modèles de documentation qui vont avec — vous partez d'une installation qui tourne au lieu d'une page Notion vide." %}

---

## Pourquoi la partie ennuyeuse rapporte {#documentation}

La tentation, en solo, c'est de sauter la documentation. Personne d'autre ne la lit. Pourquoi l'écrire ?

Trois raisons qui m'ont fait changer d'avis :

**Vous arrêtez de re-réfléchir à la même chose.** Chaque décision non écrite est rejouée au prix fort la prochaine fois que vous touchez ce système.

**C'est par là que quelqu'un peut vous rejoindre.** Collaborateurs, prestataires, une équipe de jam — entre une journée d'intégration et une semaine, la différence tient à ce qui a été écrit.

**Ça protège le projet contre vous.** Six mois sans toucher un sous-système et vous êtes, fonctionnellement, un nouveau membre d'équipe avec une rancune.

Gardez ça bon marché : des tableaux, des checklists, des captures. **Un document qu'on ne peut pas parcourir en diagonale est un document que personne ne lit**, y compris son auteur.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Quelle durée pour un sprint en solo ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Deux semaines me vont. Une semaine passe trop de temps sur sa propre planification ; un mois est assez long pour que le périmètre cesse de ressembler à une promesse. Le chiffre exact compte beaucoup moins que le fait de ne jamais déplacer la date de fin une fois posée.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Notion n'est-il pas trop lent pour ça ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Il peut l'être, si vous construisez un tableau de bord qui interroge tout d'un coup. Le remède est le même que le principe de conception : montrer une chose. Les vues filtrées sur le sprint en cours restent rapides ; les vues qui montrent tout le projet sont pour la revue trimestrielle, pas pour le mardi.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Et si je n'arrive jamais à finir un sprint ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
C'est une donnée sur votre estimation, pas sur votre discipline. Mesurez le ratio sur trois sprints, puis planifiez sur ce que vous avez réellement livré au lieu de ce que vous espériez. Un plan calibré sur la réalité est le seul qui aide.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Faut-il des automatisations pour commencer ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Non — commencez à la main, et automatisez l'étape que vous vous surprenez à éviter. Cette étape est toujours celle qui vous coûte la justesse du plan. Pour moi c'était le lien de dépendance, que je sautais systématiquement jusqu'à ce qu'il cesse d'avoir besoin de moi.
</div>
</details>

</div>

---

{% include fr/subscribe-form.html title="Reçois plus d'articles Game Dev comme celui-ci" %}

---

### 💬 À quoi ressemble votre organisation de sprint ?

Je suis toujours curieux de savoir quelle partie d'un système de planification solo les gens abandonnent en premier — c'est rarement la même, et ça dit souvent quelque chose du projet.

Sur Discord, ou à guillaume.escarieux@mineogames.com.
