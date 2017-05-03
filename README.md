Repository du site mineogames.com
==================================

## Comment créer un article de blog ?
1. Dans le dossier _posts, créer un nouveau fichier sur le modèle suivant ``YYY-MM-DD-Nom-du-post.md``, par exemple ``2017-04-23-Creation-du-site.md``
2. En en-tête du fichier, ajouter l'encart suivant en remplaçant ``Nom du post`` par le titre de l'article :

```
---
layout: post
title: Nom du post
---
```    

3. Rédiger l'article en suivant la syntaxe [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
4. Commit & push, patienter quelques secondes et l'article est disponible !

A noter qu'il est possible de réaliser ces opérations directement depuis l'interface GitHub.

## Comment ajouter un jeu ?
### Sur la page d'accueil
1. Ajouter au repository l'image qui sera utilisée comme bannière dans le dossier img/. Les dimensions à respecter sont ``1850 × 200``
2. Modifier le fichier _config.yml
3. Sous la clé ``game`` ajouter une nouvelle entrée avec les informations suivantes, en remplaçant ```Nom du jeu``` par le nom du jeu (qui sera affiché sur la bannière) et ``game.png`` par le nom du fichier qui a été ajouté à l'étape 1

```
  - name: Nom du jeu
    img: game.png
    page:
```

4. Commit & push, patienter quelques secondes et la nouvelle bannière est visible sur la page d'accueil !

### Créer une page dédiée au jeu
1. Dans le dossier games, créer un nouveau fichier dont le nom sera utilisé dans l'URL pour accéder à la page, par exemple ``dung-beetle.md``
2. En en-tête du fichier, ajouter l'encart suivant en remplaçant:
 - ``Nom du jeu`` par le nom du jeu
 - ``game.png`` par la bannière qui a été utilisée sur la page d'accueil (il est possible d'utiliser d'une autre image)
 - Sur la clé ``iframe`` mettre le lien pour l'iframe qui sera utilisée pour afficher l'encart de téléchargement (facultatif)

```
---
layout: game
title: Nom du jeu
iframe: https://widgets.gamejolt.com/package/v1?key=o4DzCpmp
img: game.png
---
```

3. Rédiger la fiche de présentation en suivant la syntaxe [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).
4. Modifier le fichier _config.yml, au niveau de la clé ``game``, pour l'entrée qui a été ajoutée précédemment, compléter la clé ``page`` par ``/games/nom-du-fichier`` où ``nom-du-fichier`` est le nom du fichier qui a été choisi à l'étape 1, sans le ``.md``
5. Commit & push, patienter quelques secondes et la nouvelle page est disponible et la bannière de la page d'accueil est cliquable !

## Info pratiques éditeur [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. Afin de créer un lien vers une page internet, écriver le texte entre crochet puis le lien suivi par le lien entre parenthèses
Exemple : 
```
[Page de blog](http://www.mineogames.com/blog/)
```
2. Afin d'insérer une image, ajouter la dans le dossier img/sous-dossier puis appelez la via le code suivant :
```
![Texte alternatif](/img/dungbeetle/post_img1.png "Texte infobulle")
```
