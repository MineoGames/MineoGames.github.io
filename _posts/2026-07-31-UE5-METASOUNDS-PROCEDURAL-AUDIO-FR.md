---
layout: post
title: "UE5 Metasounds : pourquoi l'audio procédural compte plus en VR"
description: "Un échantillon se répète. En casque, le joueur le remarque à la troisième fois, parce qu'il peut en faire le tour. Metasounds permet de générer le son au lieu de le rejouer — voici ce que ça a changé."
keywords: "UE5 Metasounds, audio procédural Unreal, audio Unreal Engine 5, DSP jeu vidéo, sound design VR, audio spatial VR, son réactif jeu vidéo, tutoriel Metasounds, effets sonores dynamiques, audio jeu indépendant"
lang: fr
ref: ue5-metasounds-procedural-audio
topic: tech
image: https://mcusercontent.com/ba845a58e9756f53027feeec5/images/413c9f4c-677c-7169-d365-12fac4ce616e.gif
---

Voici un problème qui existe à peine sur écran plat et qui est inévitable en VR : **un échantillon répété se trahit.**

Sur un moniteur, un bruit de pas joué pour la neuvième fois passe très bien. Le joueur regarde un écran, l'audio est une couche, et la répétition se dissout dans le reste. En casque, le joueur peut s'arrêter, tourner la tête, se pencher vers la source et l'écouter à nouveau sous un autre angle. **La répétition devient un objet qu'il peut inspecter.**

C'est pour ça que je suis allé apprendre **Metasounds**, le système audio d'Unreal Engine 5, sérieusement.

---

## Table des matières

* <a href="#probleme" class="page-scroll">Le problème : rejouer contre générer</a>
* <a href="#ce-que-cest" class="page-scroll">Ce qu'est réellement Metasounds</a>
* <a href="#parametres" class="page-scroll">Un son piloté par les paramètres de jeu</a>
* <a href="#vr" class="page-scroll">Pourquoi la VR augmente l'enjeu</a>
* <a href="#cout" class="page-scroll">Ce que ça coûte</a>
* <a href="#commencer" class="page-scroll">Par où commencer</a>
* <a href="#faq" class="page-scroll">FAQ</a>

---

## Le problème : rejouer contre générer {#probleme}

L'audio de jeu traditionnel, c'est de la **lecture**. Vous créez un fichier, et à l'exécution vous le jouez, éventuellement avec une randomisation de hauteur et de volume par-dessus pour masquer la répétition.

Cette randomisation est un aveu. Elle existe parce que tout le monde sait que l'asset sous-jacent est identique à chaque fois et cherche à le cacher.

**L'audio procédural, c'est de la génération.** Le son est produit à l'exécution à partir de paramètres : une variation n'est pas une copie déguisée, c'est une sortie réellement différente du même système — comme un vrai son est différent à chaque fois parce que le monde l'est.

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/0114dddf-089e-a901-dae8-628a040ce2d9.png" alt="Un graphe Metasound dans Unreal Engine 5" class="medium"/>

---

## Ce qu'est réellement Metasounds {#ce-que-cest}

Mécaniquement : un **graphe de nœuds qui fait du traitement du signal**, exécuté dans le moteur audio et non comme une logique de jeu qui déclenche des fichiers.

Cette distinction est tout le sujet. Le Blueprint tourne sur le thread de jeu, au framerate. Un graphe Metasound opère sur des buffers audio, ce qui lui permet de faire des choses qu'une logique au framerate ne peut simplement pas : moduler un filtre en continu, piloter un oscillateur, faire un fondu à la résolution de l'échantillon.

Si vous avez déjà utilisé un synthé modulaire ou un outil audio à nœuds, ce sera immédiatement familier. Si vous n'avez jamais fait que câbler des sound cues, le changement est plus grand qu'il n'en a l'air : **vous cessez de choisir quel fichier jouer pour décrire comment un son se fabrique.**

---

## Un son piloté par les paramètres de jeu {#parametres}

Le bénéfice, c'est que les valeurs de gameplay deviennent des entrées.

Au lieu de « joue `impact_metal_03.wav` », vous obtenez un système où le caractère de l'impact est fonction de ce que vous lui donnez — force, matériau, distance, chaleur de l'arme, vitesse du joueur. **Le son devient réactif aux circonstances au lieu d'être choisi dans une liste de circonstances pré-enregistrées.**

<img src="https://mcusercontent.com/ba845a58e9756f53027feeec5/images/413c9f4c-677c-7169-d365-12fac4ce616e.gif" alt="Audio procédural réagissant au déplacement du joueur et à l'état du jeu" class="medium"/>

C'est le même principe qui traverse tout ce qu'on construit : **transformer une table de correspondance en système.** C'est ce qu'on a fait avec [l'architecture des armes]({{ '/2026/06/28/VR-WEAPON-SYSTEM-FR/' | relative_url }}) et ce que font les [effets Niagara paramétrés]({{ '/2026/07/10/NIAGARA-VR-VFX-FR/' | relative_url }}) côté visuel. L'audio était la dernière partie de notre chaîne de retour à fonctionner encore avec une liste.

Et ça se compose avec le reste. Si la chaleur d'une arme pilote la couleur de ses VFX et l'intensité de son haptique, la faire piloter aussi le timbre du son fait que les trois canaux racontent le même état — c'est comme ça qu'un joueur apprend un système sans qu'on le lui explique.

---

## Pourquoi la VR augmente l'enjeu {#vr}

Trois raisons pour lesquelles ça compte plus en casque :

**Le joueur contrôle l'auditeur.** La position et l'orientation de la tête sont physiques, continues et imprévisibles. Tout ce qui ne tient que depuis un point de vue sera découvert.

**L'attention n'est pas partagée.** Pas de deuxième écran, pas de pièce autour du moniteur. L'audio récupère une plus grosse part du traitement du joueur, et ses défauts aussi.

**Le son sert à pointer.** Dans un espace à 360°, l'audio est le moyen principal de diriger l'attention vers ce que le joueur ne regarde pas. Ce travail exige un son au comportement positionnel et de distance juste — ce qui est bien plus simple quand le son est généré avec ces valeurs en paramètres plutôt que figées dedans.

---

## Ce que ça coûte {#cout}

Deux coûts honnêtes.

**Une courbe d'apprentissage qui est vraiment une autre discipline.** C'est du traitement du signal. En venant de la logique de jeu, les concepts — buffers, oscillateurs, enveloppes, filtres — sont nouveaux, et le premier graphe utile prend nettement plus de temps que le premier blueprint utile.

**Le CPU.** Générer n'est pas gratuit, et le budget d'un casque est déjà serré. La réponse pratique est la même que partout ailleurs en VR : procédural là où la réactivité fait un vrai travail, échantillonné là où personne ne verrait la différence. **Un jeu où tout est procédural est un jeu qui dépense son budget sur des choses que le joueur ne remarquera jamais.**

---

## Par où commencer {#commencer}

Un seul son. Celui qui se répète le plus dans votre jeu.

C'est en général un impact, un pas ou un tick d'interface, et c'est la meilleure cible possible parce que le problème de répétition vous est déjà audible. Reconstruisez-le sous Metasounds avec deux ou trois vraies entrées de gameplay, et comparez-le à l'échantillon.

Si vous n'entendez pas la différence, c'est que vous avez choisi un son qui n'en a pas besoin — ce qui est aussi une information utile, et obtenue à bas prix.

---

## FAQ {#faq}

<div class="ds-accordion ds-accordion--flush">

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Faut-il être sound designer pour utiliser Metasounds ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Non, mais il faut apprendre un vocabulaire de traitement du signal — oscillateurs, enveloppes, filtres. Si vous avez déjà touché à un logiciel de musique, vous avez fait l'essentiel du chemin. Sinon, prévoyez du vrai temps d'apprentissage plutôt que d'espérer que ça fonctionne comme du blueprint.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Faut-il tout passer en procédural ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
Non. La musique, la voix et tout ce qui ne se joue qu'une fois à un moment précis restent en général meilleurs en enregistrement. Le procédural rentabilise son coût sur les sons qui se répètent, qui doivent varier avec l'état du jeu, ou dont le joueur peut s'approcher pour les examiner — ce qui, en VR, fait une liste plus longue qu'ailleurs.
</div>
</details>

<details class="ds-accordion__item">
<summary class="ds-accordion__trigger"><span>Est-ce que ça remplace complètement les sound cues ?</span><span class="ds-accordion__icon" aria-hidden="true"></span></summary>
<div class="ds-accordion__panel" markdown="1">
En pratique on finit avec les deux, et c'est très bien. Le bon modèle mental, c'est que Metasounds est l'endroit où vit le *comportement* d'un son, et que les échantillons restent une excellente matière première à lui donner. Ce n'est pas l'un ou l'autre, c'est une couche de plus à disposition.
</div>
</details>

</div>

---

{% include fr/subscribe-form.html title="Reçois plus d'articles Game Dev comme celui-ci" %}

---

### 💬 Vous faites de l'audio procédural ?

Si vous avez construit quelque chose sous Metasounds — ou si vous y avez renoncé pour de bonnes raisons — ça m'intéresse de savoir où la frontière s'est installée chez vous entre généré et échantillonné.

Sur Discord, ou à guillaume.escarieux@mineogames.com.
