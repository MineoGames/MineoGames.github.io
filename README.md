Repository du site mineogames.com
=================================

## Comment créer un article de blog ?
1. Dans le dossier _posts, créer un nouveau fichier sur le modèle suivant ``YYY-MM-DD-Nom-du-post.md``, par exemple ``2017-04-23-Creation-du-site.md``
2. En en-tête du fichier, ajouter l'encart suivant en remplaçant :
 - ``Nom du post`` par le titre de l'article
 - ``lang`` par le code de la langue (deux lettres)
 - ``reference-article`` par un nom court servant de reference (en minuscule avec un tiret entre chaque mot)

```
---
layout: post
title: Nom du post
lang: lang
ref: reference-article
---
```    

3. Rédiger l'article en suivant la syntaxe [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
4. Commit & push, patienter quelques secondes et l'article est disponible !

A noter qu'il est possible de réaliser ces opérations directement depuis l'interface GitHub.

## Comment ajouter un réseau social
Modifier le fichier _config.yml, sous la balise ``social:``, ajouter l'encart suivant en remplaçant :
- ``Nom du reseau`` par le nom du réseau. ** Attention celui-ci doit correspondre au nom de l'icône pour s"afficher correctement dans le bouton.**
- ``Url du Reseau`` par l'url permettant d'accéder à la page Mineo Games du réseau.

- title: Nom du reseau
    url: Url du Reseau

## Comment ajouter un jeu ?
### Sur la page d'accueil
1. Remplacer l'image img/intro-bg.jpg dans le repository par l'image qui sera utilisée comme bannière. Les dimensions à respecter sont ``1850 × 200``
2. Modifier le fichier _config.yml
3. Sous la clé ``game`` ajouter une nouvelle entrée avec les informations suivantes, en remplaçant ```Nom du jeu``` par le nom du jeu (qui sera affiché sur la bannière) et ``game.png`` par le nom du fichier qui a été ajouté à l'étape 1, ``ref`` par le nom du jeu en minuscule avec un tiret entre chaque mot

```
  - name: Nom du jeu
    img: game.png
    page:
      en: '/games/ref/'
      fr: '/games/ref-fr/'
```

4. Commit & push, patienter quelques secondes et la nouvelle bannière est visible sur la page d'accueil !

### Créer une page dédiée au jeu par langue
1. Dans le dossier games, créer un nouveau fichier dont le nom sera utilisé dans l'URL pour accéder à la page, par exemple ``dung-beetle.md`` (rajouter un suffixe  pour les autres langues que l'anglais)
2. En en-tête du fichier, ajouter l'encart suivant en remplaçant:
 - ``Nom du jeu`` par le nom du jeu
 - ``game.png`` par la bannière qui a été utilisée sur la page d'accueil (il est possible d'utiliser d'une autre image)
 - ``lang`` par le code de la langue (deux lettres)
 - Sur la clé ``iframe`` mettre le lien pour l'iframe qui sera utilisée pour afficher l'encart de téléchargement (facultatif)
 - ``lang`` par le code de la langue (deux lettres)
 - ``reference`` par le nom du jeu en minuscule avec des tirets entre les mots

```
---
layout: game
title: Nom du jeu
iframe: https://widgets.gamejolt.com/package/v1?key=o4DzCpmp
img: game.png
lang: lang
ref: reference
contentfile: lang/reference-content.md
carousel:
- reference/screen1.png
- reference/screen2.png
---
```

3. Créer les fichiers correspondant à ``contentFile`` et rédiger la fiche de présentation dans le fichier spécifié dans  en suivant la syntaxe [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
4. Modifier le fichier _config.yml, au niveau de la clé ``game``, pour l'entrée qui a été ajoutée précédemment, compléter la clé ``page`` par ``/games/nom-du-fichier`` où ``nom-du-fichier`` est le nom du fichier qui a été choisi à l'étape 1, sans le ``.md``
5. Commit & push, patienter quelques secondes et la nouvelle page est disponible et la bannière de la page d'accueil est cliquable !

## Info pratiques éditeur [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. Afin de créer un lien vers une page internet, écriver le texte entre crochet puis le lien suivi par le lien entre parenthèses
Exemple : 
```
[Page de blog](https://www.mineogames.com/blog/)
```
2. Afin d'insérer une image, ajouter la dans le dossier img/sous-dossier puis appelez la via le code suivant :
```
![Texte alternatif](/img/dungbeetle/post_img1.png "Texte infobulle")
```
Taille d'image conseillé : 1140*618px

Si besoin de changer la taille ou disposition, appliquer un style via le fichier mineogames.css.
```
img[alt="GDWC 2021 finalist"] { width: 200px; margin-left: auto; margin-right:auto; display: block;}
```

3. Pour intégrer une vidéo youtube, il faut d'abord enregistrer un screenshot sous imgur (en faison ouvrir l'image dans un autre onglet pour récupérer le lien)
```
[![UNBOXING OCULUS START](https://i.imgur.com/5a6QUsl.png)](https://www.youtube.com/watch?v=xyXFVuc5TRo "UNBOXING OCULUS START")
```
ou bien utilisé la vignette auto générée
```
[![Dung Beetle gameplay](https://img.youtube.com/vi/IOgFvfAP0vA/0.jpg)](https://www.youtube.com/watch?v=IOgFvfAP0vA)
```
