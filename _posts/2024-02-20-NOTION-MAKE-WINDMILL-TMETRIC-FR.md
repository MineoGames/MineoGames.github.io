---
layout: post
title: "Comment j'ai pu stoppé mon abonnement <strong>Clickup</strong> pour gérer mes projets dans <strong>Notion</strong>, gratuitement 😊"
lang: fr
ref: notion-make-windmill-tmetric
---

<!-- table-des-matieres -->

## Table des matières

* <a href="#introduction" class="page-scroll">Introduction</a>
* <a href="#mes-anciennes-habitudes-de-travail" class="page-scroll">Mes anciennes habitudes de travail</a>
* <a href="#adieu-clickup-bonjour-notion" class="page-scroll">Adieu ClickUp, bonjour Notion</a>
* <a href="#centraliser-les-donnees-avec-windmilldev" class="page-scroll">Centraliser les données avec **Windmill.dev**</a>
* <a href="#gerer-le-temps-avec-tmetric" class="page-scroll">Gérer le temps avec **TMetric**</a>
* <a href="#des-automatisations-avec-make" class="page-scroll">Des **automatisations avec Make**</a>
* <a href="#conclusion" class="page-scroll">Conclusion</a>
* <a href="#liens-utiles" class="page-scroll">Liens utiles</a>

<!-- table-des-matieres -->

## Introduction {#introduction}

<img src="https://i.imgur.com/4BYy8DL.png" alt="Un aperçu avant/après d'une tâche"  class="medium"/>

_Un aperçu avant/après d'une tâche dans Notion et ClickUp._

🚀 Rejoignez-moi dans ce **voyage passionnant** où je vous partage mon expérience personnelle pour gérer mes projets sans dépenser un centime en plus. J'ai trouvé une solution ingénieuse en combinant **[Notion](https://affiliate.notion.so/ooivbv8j8mmc)**, **[Windmill.dev](https://windmill.dev)**, **[TMetric](https://tmetric.com)** et **[Make](https://www.make.com/en/register?pc=mineogames)** pour remplacer ClickUp et Harvest. Curieux de connaître les détails ? Allons-y !

---

## Mes anciennes habitudes de travail {#mes-anciennes-habitudes-de-travail}

Avant de trouver ma configuration actuelle, j'utilisais **[ClickUp](http://clickup.com/teams/project-management)** (**version payante**) pour la gestion des tâches, **[Harvest](http://try.hrv.st/3-126651)** (**version gratuite**) pour le suivi temporel et **[Notion](https://affiliate.notion.so/ooivbv8j8mmc)** uniquement pour la documentation et la prise de notes (**version gratuite**). Bien que cette configuration fonctionnait globalement, je trouvais compliqué le jonglage entre différentes applications et regrettais tout de même certains bugs et restrictions de la version payante 'small team' de ClickUp. J'ai alors décidé de chercher une solution plus flexible, polyvalente et adaptée à mes besoins de centralisation.

---

## Adieu ClickUp, bonjour Notion {#adieu-clickup-bonjour-notion}

😎 Avec **[Make](https://www.make.com/en/register?pc=mineogames)** (**anciennement Integromat**), un outil d'automatisation qui permet de coder ses propres scénarios, j'ai pu migrer ma base de données **[ClickUp](http://clickup.com/teams/project-management)** vers **[Notion](https://affiliate.notion.so/ooivbv8j8mmc)** sans interaction manuelle. Il a seulement fallu indiquer la correspondance entre les données des deux côtés.

<img src="https://i.imgur.com/1zLgd1J.gif" alt="Scénario de migration avec Make"  class="large"/>

_Le scénario de migration en action : les routes sont différentes selon que la tâche existe déjà ou non, pour éviter les doublons._

Non seulement cela m'a permis de regrouper toutes mes informations dans une seule application, mais en plus, j'ai eu l'occasion de **customiser mes bases de données Notion** pour retrouver les fonctionnalités de **[ClickUp](http://clickup.com/teams/project-management)** et même aller plus loin.

Pour construire mon espace Notion, je me suis inspiré de la méthode P.A.R.A. qui interconnecte des bases de projets, domaines, ressources et archives. Vous pourrez même trouver des templates Notion sur le net. J'ai agrémenter les bases avec des formules qui affichent les données comme cela me convient. Enfin j'ai créé les différente vues qui me sont utiles.

<img src="https://i.imgur.com/MuBPJsX.png" alt="Calendar Task View"  class="medium"/>

<img src="https://i.imgur.com/iuvPOTc.png" alt="Timeline Task View"  class="medium"/>
    
<img src="https://i.imgur.com/6NdZy1P.png" alt="Timeline Task View"  class="medium"/>

---

## Centraliser les données avec **Windmill.dev** {#centraliser-les-donnees-avec-windmilldev}

⚙️ Lors de ma recherche d'outils d'automatisation, j'ai découvert **[Windmill.dev](https://windmill.dev)**, une excellente alternative à **[Make](https://www.make.com/en/register?pc=mineogames)** pour les développeurs. **[Windmill.dev](https://windmill.dev)** permet d'aller au-delà des connecteurs classiques en proposant la possibilité d'appeler les APIs directement, de manipuler les données en **[Typescript](https://www.typescriptlang.org/)**, d'afficher des logs et même de s'auto-héberger pour s'affranchir des restrictions. 

Grâce à **[Windmill.dev](https://windmill.dev)**, j'ai pu connecter **[Notion](https://affiliate.notion.so/ooivbv8j8mmc)** avec **[TMetric](https://tmetric.com)** pour rapatrier les données de tracking afin qu'elles soient hébergées dans **[Notion](https://affiliate.notion.so/ooivbv8j8mmc)**.

<img src="https://i.imgur.com/s0YTioq.png" alt="Flux de données avec Windmill.dev"  class="small"/>

_Le flux prend en entrée une date précise ; sinon, il prend automatiquement les tâches à la date d'hier. Puis il vient ajouter la durée dans la tâche Notion correspondante._

---

## **Gérer le temps avec TMetric** {#gerer-le-temps-avec-tmetric}

⏱️ Pour combler l'absence de suivi temporel dans **[Notion](https://affiliate.notion.so/ooivbv8j8mmc)**, j'ai testé plusieurs outils et j'ai finalement jeté mon dévolu sur **[TMetric](https://tmetric.com)**. Son [extension navigateur](https://tmetric.com/help/apps/browser-extension/how-to-install-browser-extension) permet d'enregistrer facilement le temps passé sur chaque tâche directement sur la page **[Notion](https://affiliate.notion.so/ooivbv8j8mmc)**.

<img src="https://i.imgur.com/1T31Buq.png" alt="Tracker le temps avec TMetric"  class="medium"/>

_Tracker le temps devient facile lorsqu'un bouton est présent directement sur la page Notion._

---

## Des automatisations avec **Make** {#des-automatisations-avec-make}

💰 Les automatisations dans **[Notion](https://affiliate.notion.so/ooivbv8j8mmc)** sont payantes, mais **[Make](https://www.make.com/en/register?pc=mineogames)** permet de pallier à cela. En parlant d'automatisations, **[Make](https://www.make.com/en/register?pc=mineogames)** est extrêmement puissant. Je n'utilise qu'une infime partie de ses capacités, mais cela suffit déjà à grandement fluidifier mon workflow.

🎉 Voici un exemple d'automatisation que j'ai créée : lorsqu'une nouvelle tâche est créée dans **[Notion](https://affiliate.notion.so/ooivbv8j8mmc)**, **[Make](https://www.make.com/en/register?pc=mineogames)** lui attribue automatiquement le même projet que sa tâche parente. Cela m'évite de le faire manuellement et elle apparaitra bien dans les filtres de mes vues **[Notion](https://affiliate.notion.so/ooivbv8j8mmc)**.

<img src="https://i.imgur.com/WNBXMnc.png" alt="Illustration de l'automatisation avec Make"  class="medium"/>

_Il y a une route différente si la tâche possède une tâche parente ou pas._

---

## Conclusion {#conclusion}

🌟 En combinant **[Notion](https://affiliate.notion.so/ooivbv8j8mmc)**, **[Windmill.dev](https://windmill.dev)** et **[TMetric](https://tmetric.com)**, j'ai réussi à arrêter mon abonnement **[Clickup](http://clickup.com/teams/project-management)** et à gagner en flexibilité et en contrôle sur mes données. 

🟣 Posez vos questions, donnez votre avis ou faite simplement un coucou sur notre **Discord** 👇.

📧 Profitez d'encore plus de contenu comme celui-ci pour booster votre productivité en vous **[abonnant à notre newsletter](https://mailchi.mp/8e056808ead5/mineo-games-newsletter)** 💌! 

🤝✨ Si vous êtes intéressé pour une collaboration concernant vos automatisations, n'hésitez pas à me contacter à **[guillaume.escarieux@mineogames.com](mailto:guillaume.escarieux@mineogames.com)** ! 🤝✨

---

## Liens utiles {#liens-utiles}

* <a href="https://affiliate.notion.so/ooivbv8j8mmc">Notion</a>
* <a href="https://tmetric.com">TMetric</a>
* <a href="https://www.make.com/en/register?pc=mineogames">Make</a>
* <a href="https://windmill.dev">Windmill.dev</a>
* <a href="http://clickup.com/teams/project-management">ClickUp</a>
* <a href="http://try.hrv.st/3-126651" class="external">Harvest</a>

---

{% include fr/subscribe-form.html title="Recevoir des hacks de productivité par email" %}