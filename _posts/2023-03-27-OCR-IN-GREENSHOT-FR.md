---
layout: post
title: "Augmentez votre productivité en ajoutant l'OCR à Greenshot"
lang: fr
ref: ocr-greenshot
image: https://i.imgur.com/kMBDTLo.png
topic: productivity
description: "Ajoutez la reconnaissance de caractères à Greenshot, et extrayez le texte de n'importe quelle capture, document ou vidéo."
---
# La puissance de l'OCR pour la productivité

## Introduction

OCR, ou reconnaissance optique de caractères, est une technologie qui permet la conversion de texte numérisé, manuscrit ou imprimé en format numérique. L'OCR présente de nombreux avantages, en particulier en ce qui concerne la productivité. En utilisant l'OCR, vous pouvez gagner beaucoup de temps en éliminant la nécessité de saisie manuelle de données. Dans ce post de blog, nous allons discuter de l'importance de l'OCR pour la productivité et comment ajouter la fonctionnalité OCR à Greenshot peut vous aider à gagner du temps.

## OCR et productivité

L'OCR peut changer la donne en matière de productivité. Il peut vous aider à gagner du temps et à augmenter l'efficacité en automatisant des tâches fastidieuses telles que la saisie de données, la prise de notes à partir de diapositives de présentation, etc. Au lieu de taper le texte d'un document numérisé, vous pouvez le numériser et utiliser l'OCR pour le convertir en format numérique. Ce processus permet non seulement de gagner du temps, mais également de réduire les risques d'erreurs pouvant survenir lors de la saisie manuelle de données.

L'OCR peut également aider les entreprises à optimiser leurs workflow. Au lieu de traiter manuellement des factures ou des reçus, l'OCR peut extraire automatiquement les données de ces documents et les saisir dans les champs appropriés. Cela réduit la charge de travail des employés et aide les entreprises à traiter les documents plus rapidement.

## Ajout de l'OCR dans Greenshot

Greenshot est un outil de capture d'écran puissant qui vous permet de capturer des captures d'écran, de les annoter et de les partager avec d'autres personnes.

L'outil avait une fonctionnalité OCR pour extraire du texte des captures d'écran. Mais cette fonctionnalité ne fonctionne plus dans les versions ultérieures de Windows car elle nécessite une ancienne version de Microsoft Sharepoint installée.

Une solution de contournement consiste à utiliser un autre outil OCR en tant que plugin personnalisé à l'intérieur de Greenshot. [Capture2Text](http://capture2text.sourceforge.net/) est un outil gratuit et efficace qui pourrait faire l'affaire.

1. [Installez *Capture2Text* en le téléchargeant](https://capture2text.sourceforge.net/#download) et en dézippant simplement le dossier

2. Ouvrez le menu *Greenshot* en faisant un clic droit sur son icône *en bas à droite de* *la barre des tâches > Préférences…*

3. Allez à l'onglet *Plugins*
4. Sélectionnez *Plugin de commande externe* et cliquez sur le bouton *Configurer*

5. Ajoutez une entrée pour une sortie en un seul bloc
    1. OCR vers le presse-papiers - Un seul bloc
    2. CHEMIN_VERS_Capture2Text_CLI.exe
    3. `i "{0}" --clipboard`

6. Ajoutez une entrée pour une sortie avec saut de ligne
    1. OCR vers le presse-papiers - Saut de ligne
    2. CHEMIN_VERS_Capture2Text_CLI.exe
    3. `i "{0}" --clipboard -line-breaks`

![https://i.imgur.com/kMBDTLo.png](https://i.imgur.com/kMBDTLo.png)

Ensuite, lorsque vous prenez une capture d'écran d'un document (par exemple une vidéo ici), vous pouvez sélectionner une ou les deux nouvelles options pour ajouter le contenu dans le presse-papiers.

![https://i.imgur.com/7xIU24o.jpeg](https://i.imgur.com/7xIU24o.jpeg)

Il suffit de faire un `CTRL+V` et le texte est collé ! **C’est magique, n’est-ce pas** 🧙‍♂️

![https://i.imgur.com/KK6v0DC.png](https://i.imgur.com/KK6v0DC.png)

Vous pouvez créer autant d'options que vous le souhaitez si la copie dans le presse-papiers ne convient pas à vos besoins.

## Conclusion

L'OCR est une technologie puissante qui peut vous aider à gagner du temps et à augmenter votre productivité. En utilisant l'OCR, vous pouvez automatiser des tâches fastidieuses et optimiser votre travail.

La combinaison de *Capture2Text* et de *Greenshot* est un excellent ajout à l'outil et peut vous aider à extraire facilement du texte des captures d'écran.

Cette fonctionnalité est facile à utiliser et peut vous faire gagner beaucoup de temps, surtout si vous devez extraire du texte de plusieurs captures d'écran.

**Si vous cherchez à augmenter votre productivité, essayez d'utiliser l'OCR dans Greenshot !**

**Souscrivez à la newsletter pour recevoir les prochains conseils de productivité comme celui-ci directement dans votre boîte de réception. 💌**

{% include fr/subscribe-form.html title="Subscribe to the newsletter" %}