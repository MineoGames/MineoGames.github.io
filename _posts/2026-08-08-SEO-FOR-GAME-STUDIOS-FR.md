---
layout: post
title: "Pas besoin de vendre votre jeu pour que les joueurs le trouvent"
description: "La plupart des studios disent ne pas aimer le marketing. Le SEO, ce n'est pas vendre — c'est être là quand quelqu'un cherche déjà. Voici ce que j'ai trouvé en auditant mon propre site."
keywords: "SEO studio jeu vidéo, marketing jeu indé, référencement site studio, GEO generative engine optimization, visibilité jeu indépendant, SEO game dev, hreflang site bilingue, sitemap jekyll, core web vitals, marketing studio indépendant, guide SEO notion, UGO"
lang: fr
ref: seo-for-game-studios
topic: marketing
image: /img/blog/default-cover-marketing.webp
---

Parlez marketing à une salle de développeurs indés et regardez les épaules s'affaisser. **On n'a pas fait ce métier pour vendre.** On l'a fait pour construire des jeux.

J'ai pensé exactement ça pendant des années. Ce qui m'a fait changer d'avis, ce n'est pas une formation sur les tunnels de conversion — c'est d'avoir compris que **le SEO, ce n'est pas vendre**. Vendre, c'est interrompre quelqu'un qui ne demandait rien. Le SEO, c'est être là quand il demande déjà.

Quelqu'un tape *« jeu VR où on extermine des rats »* dans une barre de recherche. Cette personne n'est pas démarchée. Elle cherche. La seule question, c'est de savoir si elle vous trouve.

---

## Table des matières

* <a href="#pas-le-marketing" class="page-scroll">Pourquoi ce n'est pas le marketing que vous fuyez</a>
* <a href="#empathie" class="page-scroll">Le difficile, c'est l'empathie, pas la technique</a>
* <a href="#droit-echouer" class="page-scroll">Vous avez le droit d'échouer</a>
* <a href="#mon-site" class="page-scroll">Ce que j'ai trouvé sur mon propre site</a>
* <a href="#geo" class="page-scroll">Du SEO au GEO</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Pourquoi ce n'est pas le marketing que vous fuyez {#pas-le-marketing}

Ce qui nous bloque, la plupart du temps, c'est une image dans la tête : de la pub, du forcing, dire des choses qu'on ne pense pas.

Le SEO, c'est un autre métier. C'est **faire en sorte que la personne qui cherche déjà votre type de jeu puisse l'atteindre**. Aucune persuasion là-dedans. Si votre jeu est une chasse au requin en VR et que quelqu'un cherche exactement ça, tout le travail consiste à ne pas être invisible.

Formulé comme ça, ce n'est plus un problème de tempérament, c'est un problème technique. Et les problèmes techniques, on sait faire.

---

## Le difficile, c'est l'empathie, pas la technique {#empathie}

Ce qui m'a surpris, c'est l'ordre de difficulté. Les balises, les titres, le sitemap : c'est la partie facile. C'est une checklist.

Le vrai travail, c'est de **se mettre dans la tête de son public**. Qu'est-ce qu'*il* taperait ? Pas le nom que vous employez en interne. Pas le titre malin. La formule maladroite et littérale d'un inconnu qui ignore que votre jeu existe.

Au début, ça flotte. On devine. Ça ne ressemble pas à de l'ingénierie, et c'est inconfortable quand l'ingénierie est précisément ce qu'on sait faire.

Le soulagement, c'est qu'**on ne reste pas dans la devinette**. Search Console, Analytics, un suivi de positions : ils transforment l'intuition en chiffre. Vous publiez, vous attendez, vous regardez ce que les gens ont réellement tapé pour arriver chez vous. Puis vous ajustez. L'empathie récupère une boucle de retour, et là, ça redevient de l'ingénierie.

---

## Vous avez le droit d'échouer {#droit-echouer}

Si je devais retenir une seule phrase, ce serait celle-là.

Venant du logiciel, je voulais la bonne réponse avant de livrer. Le SEO ne fonctionne pas comme ça. **On essaie, on mesure, on adapte.** Une page qui ne ressort sur rien n'est pas un échec, c'est une donnée. Un mot-clé mal deviné vous coûte un après-midi.

Viser la perfection avant de publier, c'est la méthode la plus sûre pour ne jamais publier. Le progrès l'emporte à chaque fois — et le marketing devient de moins en moins hostile à mesure qu'on l'apprend.

---

## Ce que j'ai trouvé sur mon propre site {#mon-site}

J'ai décidé d'arrêter de théoriser et d'auditer mineogames.com pour de bon. Je m'attendais à quelques réglages. J'ai trouvé des trous.

**Il n'y avait pas de sitemap. Aucun.** Soixante pages, et rien pour signaler leur existence à un moteur de recherche. La configuration déclarait le plugin sous une clé que Jekyll ne lit plus depuis des années, et le plugin n'était même pas installé. Ça échouait en silence depuis le début.

**Le site est entièrement bilingue et ne le disait nulle part.** Chaque page existe en anglais et en français, et chaque paire déclarait déjà à quel jumeau elle appartenait, dans son front matter. Rien ne s'en servait. Pas de `hreflang`, pas d'attribut `lang` sur 58 pages sur 60. Résultat : huit paires anglais/français se concurrençaient sur les mêmes requêtes au lieu d'être comprises comme des traductions.

**Cinquante pages sur soixante servaient la même meta description** — la phrase générique du site. Trente-huit articles n'en avaient aucune. Quatre pages partageaient exactement le même `<title>`.

Et la partie performance, que Google prend en compte :

- Font Awesome se chargeait **en entier, sur les soixante pages** — 104 ko de CSS *et* 1,5 Mo de JavaScript — pour afficher **huit icônes**.
- Cinquante-six pages préchargeaient en haute priorité une image de 220 ko **qu'elles n'affichaient jamais**, en concurrence avec leur propre contenu.
- Largest Contentful Paint sur mobile : **16,9 secondes**.

Rien d'exotique là-dedans. C'est ce qui s'accumule quand un site grandit pendant six ans sans que personne ne s'asseye pour le regarder en entier.

Corriger a pris une semaine de travail ingrat : inliner les huit icônes et supprimer la bibliothèque, émettre les paires `hreflang` à partir de données qui existaient déjà, écrire soixante descriptions, générer le sitemap en Liquid pour ne dépendre d'aucun plugin. Le score SEO est passé à 100. Et surtout, le site dit enfin ce qu'il est.

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>La version courte, si vous voulez une checklist</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Avez-vous un sitemap, et se construit-il vraiment ? Chaque titre est-il unique ? Chaque page a-t-elle sa propre description ? Si vous êtes bilingue, chaque page déclare-t-elle son jumeau ? Le `<html>` porte-t-il un `lang` ? Et la page se charge-t-elle assez vite sur un téléphone en mauvaise connexion ?

C'est l'essentiel. Ce n'est pas malin. Il faut juste le faire.
</div>
</details>

</div>

---

## Du SEO au GEO {#geo}

Pendant que j'apprenais tout ça, le sol a bougé.

Google traite encore l'écrasante majorité des recherches. Mais **de plus en plus de gens demandent à une IA**, et une IA n'affiche pas dix liens bleus : elle répond. Si votre studio n'est pas dans la réponse, il n'y a pas de deuxième position à occuper.

C'est l'objet du GEO — **Generative Engine Optimization** : être lisible par des systèmes qui résument au lieu de lister. Je suis allé à un événement IAgitative organisé par COPYLOT où le GEO était l'un des trois sujets, aux côtés de la création de chatbots et de la génération de contenus visuels. Personne dans la salle n'avait la réponse complète. C'est justement l'intérêt : c'est assez tôt pour que s'y intéresser ne coûte presque rien.

Le point encourageant, c'est que les fondamentaux se recoupent. Une structure claire, des descriptions honnêtes, des pages qui répondent à une vraie question : une machine qui résume en a autant besoin qu'une machine qui classe.

{% include product-callout.html slug="ugo" note="Après des semaines à apprendre tout ça, j'ai tout écrit dans Notion plutôt que de laisser ça s'évaporer. UGO embarque désormais ces notes sous forme de guides : SEO, SEA, SMO, Google My Business, création de site, création de contenu, Google Analytics et storytelling — dans le même espace que la planification de votre jeu." %}

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Je suis développeur solo. Le SEO vaut-il mon temps ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
La mise en place se fait une fois. Titres, descriptions, sitemap, vitesse correcte : vous le faites une bonne fois et ça continue de travailler pendant que vous retournez développer. C'est un contrat très différent de publier sur les réseaux tous les jours, indéfiniment.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Mon jeu n'est pas sorti. C'est trop tôt ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
C'est l'inverse. Le référencement met des mois à s'installer, donc une page qui existe tôt est une page qui a déjà commencé. Et les devlogs donnent aux moteurs quelque chose à lire pendant que le jeu, lui, n'est encore qu'un dossier de build.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Faut-il des outils payants ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Pas pour commencer. Google Search Console est gratuit et vous donne la chose la plus utile : ce que les gens ont réellement tapé avant d'arriver chez vous. Tout ce que je décris plus haut a été trouvé avec des outils gratuits et un après-midi passé à lire le HTML généré.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Le GEO va-t-il remplacer le SEO ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Pas tout de suite, et sans doute pas proprement. Voyez-le comme un second public qui lit les mêmes pages. Ce qui vous rend lisible pour l'un aide généralement pour l'autre.
</div>
</details>

</div>

---

{% include fr/subscribe-form.html title="Reçois plus d'articles Game Dev comme celui-ci" %}

---

### 💬 Et vous, quelle est votre expérience ?

Vous avez tenté le SEO pour votre studio, ou vous l'avez écarté ? Ça m'intéresse vraiment de savoir quelle partie vous a rebuté — c'est en général là que la conversation devient utile.

Sur Discord, ou à guillaume.escarieux@mineogames.com.
