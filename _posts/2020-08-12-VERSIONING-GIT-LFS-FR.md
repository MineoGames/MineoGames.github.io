---
layout: post
title: "[TECH] Versioning d'un jeu vidéo avec GIT LFS"
lang: fr
ref: versioning_git_lfs
---
# Le besoin initial

Comme dans le développement de tout logiciel, la mise en place du versioning est indispensable pour les jeux vidéo. **Git est le système de contrôle de version le plus flexible et le plus populaire, c'est pourquoi nous souhaitons l'utiliser**. En revanche, Git n'est pas encore parfait pour le développement de jeux. En effet, comme il est basé en local, il peut y avoir des conflits sur des fichiers qui ne peuvent pas être fusionnés, il est donc nécessaire d'avoir une organisation solide, mais c'est un autre sujet.

# Pourquoi Git LFS ?
Le problème que nous voudrions aborder aujourd'hui est la taille du dépôt. La taille maximale recommandée pour les dépôts Git est de 1 Go. Les plateformes Git publiques bloquent même les dépôts de plus de 3 Go. En pratique, les sources de jeux vidéo contiennent des média artistiques de grande taille, du coup la limite est rapidement atteinte.

**C'est là qu'entre Git LFS (Large File Storage)**, une extension Git open-source qui permet de faire des pointeurs dans votre dépôt qui référencent les gros fichiers qui sont hébergés ailleurs. Cela réduit considérablement la taille du dépôt. 

# Construire une solution à long terme

Les plateformes Git (Github, Bitbucket) offrent 1 Go de Git Lfs gratuitement, ce qui ne sera pas suffisant. Nous devons donc héberger les fichiers LFS nous-mêmes. Cela pourrait être fait sur un serveur local, mais le cloud n'est pas trop cher aujourd'hui et permet d'éviter de se poser les questions d'espace et de sauvegarde.
J'ai trouvé un guide réalisé par Allan Edwardes pour [héberger les fichiers GIT LFS sur Amazon Web Service S3](https://alanedwardes.com/blog/posts/serverless-git-lfs-for-game-dev). J'ai adapté sa solution pour héberger les fichiers sur OVH Object Storage à la place ([un fournisseur français en qui j'ai plus confiance](https://www.ovh.com/world/)). 

Il s'agit d'une application en Dotnet Core que vous pouvez trouver ici : [https://github.com/MineoGames/Estranged.Lfs](https://github.com/MineoGames/Estranged.Lfs). 

## Le fonctionnement
Le dépôt git est configuré pour envoyer des fichiers LFS au SERVEUR GIT LFS qui gère la logique et envoie ensuite les données sur OVH Object Storage.

<img src="https://imgur.com/NzFfNlJ.png" alt="lfs add" style="width:45rem;"/>
<img src="https://imgur.com/DixmIMb.png" alt="lfs push" style="width:35rem;"/>

Le serveur lfs peut être une application sur votre PC/un serveur ou il peut être serverless avec [AWS Lambda](https://aws.amazon.com/fr/lambda/). 

Ce guide vous montrera comment construire la stack. Bien sûr, à la fin, les développeurs auront simplement à cloner le repo et push normalement : ce sera transparent pour eux !

## Mettre en place la stack

### AWS CLI
Avant d'utiliser une stack complexe, commencez par effectuer des opérations simples avec OVH et Amazon via le client API. OVH est compatible avec S3, ce qui simplifie le processus.
Cela incluera la création de comptes et l'obtention des credentials, etc.

**Suivez ce [guide]( https://docs.ovh.com/gb/en/public-cloud/getting_started_with_the_swift_S3_API/) sans oublier de faire les prérequis.**
Attention, si vous utilisez AWS CLI V2, il est nécessaire de faire le workaround décrit [ici](https://github.com/wbingli/awscli-plugin-endpoint/issues/15) afin que le plugin *awscli_plugin_endpoint* fonctionne.
Assurez-vous que vous pouvez utiliser le client API à la fois pour AWS et OVH en utilisant des profils. Vos fichiers .aws devraient ressembler à ceci :

*.aws/config*

<img src="https://imgur.com/AaYtzBC.png" alt="Config file" style="width:100rem;"/>

*.aws/credentials*

<img src="https://imgur.com/CPDlOGj.png" alt="Credential file" style="width:40rem;"/>

### Preparer le projet
Lorsque vous êtes sûr de pouvoir travailler à la fois avec OVH et AWS avec le CLI, vous pouvez constituer la stack.

1. Créer un Object Storage in OVH

	Étant donné que les objets dans l'Object Storage ne sont pas facilement reconnaissables et ne sont pas automatiquement supprimés lorsqu'un dépôt git est supprimé, il est préférable d'avoir un Object Storage par projet.

	<img src="https://user-images.githubusercontent.com/2952456/89806464-5e4cd800-db37-11ea-85bd-9ce724e7ee0e.png" alt="OVH Bucket" style="width:100rem;"/>

2. Créer un nouveau dépôt privé sur bitbucket ou github
 
    Git LFS ne fonctionne que pour les nouveaux fichiers poussés, il est donc préférable de commencer à l'utiliser dans un nouveau projet.
	
    <img src="https://imgur.com/RCnzEwL.png" alt="Repo bitbucket" style="width:80rem;"/>

3. Cloner le dépôt du jeu sur votre PC
4. Initialiser Git LFS dans le dépôt avec SourceTree par exemple (Dépôt > GIT LFS > Initialiser dépôt)
5. Vous devez indiquer à Git les fichiers à traiter comme des binaires et à uploader dans LFS en modifiant le fichier *.gitattributes* à la racine du projet
	```
	*.uasset filter=lfs diff=lfs merge=lfs -text
	*.umap filter=lfs diff=lfs merge=lfs -text
	*.bmp filter=lfs diff=lfs merge=lfs -text
	*.tga filter=lfs diff=lfs merge=lfs -text
	*.png filter=lfs diff=lfs merge=lfs -text
	*.jpg filter=lfs diff=lfs merge=lfs -text
	*.jpeg filter=lfs diff=lfs merge=lfs -text
	*.icns filter=lfs diff=lfs merge=lfs -text
	*.ico filter=lfs diff=lfs merge=lfs -text
	*.dll filter=lfs diff=lfs merge=lfs -text
	*.pdb filter=lfs diff=lfs merge=lfs -text
	*.psd filter=lfs diff=lfs merge=lfs -text
	*.pdn filter=lfs diff=lfs merge=lfs -text
	*.wav filter=lfs diff=lfs merge=lfs -text
	*.mp3 filter=lfs diff=lfs merge=lfs -text
	*.fbx filter=lfs diff=lfs merge=lfs -text
	```
Commiter et push ce fichier.
	
Vous devez maintenant choisir si vous voulez héberger le serveur sur votre PC/un serveur ou si vous voulez utiliser un AWS Lambda pour être serverless.	La première option est moins chère mais doit être déployée sur tous les PC de développement. La seconde option ne nécessite qu'un seul déploiement (moins d'efforts) et est relativement bon marché (paiement à l'utilisation).	

### Serveur Git Lfs local

Pour accomplir cela, il faut utiliser la version AspNet de la solution : *hosting\Estranged.Lfs.Hosting.AspNet*.

1. Modifier la ligne suivante du fichier *Startup.cs* afin de correspondre à votre environnement (en utilisant _aws_access_key_id_ et _aws_secret_access_key_ du profile ovh du fichier .aws/credential)

	`services.AddLfsS3Adapter(new S3BlobAdapterConfig{Bucket = "objectContainerName"}, new AmazonS3Client("MyAccesKeyAWS", "MyAccesSecretAWS", new AmazonS3Config { ServiceURL = "https://s3.MyPublicRegionLowerCase.cloud.ovh.net" }));`
	
	Modifier la ligne suivante du fichier *Startup.cs* pour restreindre l'accès au serveur GIT LFS
	`services.AddSingleton<IAuthenticator>(x => new DictionaryAuthenticator(new Dictionary<string, string> { { "userAskedBySourceTree", "passwordAskedBySourceTree" } }));`

2. L'application peut être lancée dans VS en choisissant _Estranged.Lfs.Hosting.AspNet_ (l'option par défaut _IIS Express_ ne fonctionne pas)

    <img src="https://user-images.githubusercontent.com/2952456/89800274-d82c9380-db2e-11ea-85bb-3fc8652e3e9d.png" alt="Start aspnet" style="width:50rem;"/>
3. L'application peut également être publiée dans un répertoire, et démarrée via _Estranged.Lfs.Hosting.AspNet.exe_
4. Il s'agit d'une application console qui écoute des requêtes LFS HTTP sur `https://localhost:5001`

    <img src="https://user-images.githubusercontent.com/2952456/89800695-6739ab80-db2f-11ea-8641-0eab8c501381.png" alt="console app" style="width:80rem;"/>
5. A la racine de votre projet de jeu, créer le fichier *.lfsconfig* pour envoyer des requêtes à l'application console
	```
	[lfs]
	url = https://localhost:5001/
	```
	Commiter et push ce fichier.
6. Vous pouvez maintenant push des fichiers binaires, entrez le user/mot de passe définis précédemment lorque cela est demandé
	
7. Le fichier poussé est maintenant présent et visible dans OVH Object Storage

	![image](https://user-images.githubusercontent.com/2952456/89806464-5e4cd800-db37-11ea-85bd-9ce724e7ee0e.png)

### Serverless avec AWS Lambda

- **Un prérequis est [d'installer l'outil global dotnet-lambda d'AWS](https://github.com/aws/aws-extensions-for-dotnet-cli).**
- **Un prérequis est d'avoir créé au préalable un bucket S3 pour héberger les éléments de lambda function (template de stack, build de code).**

Pour accomplir cela, il faut utiliser la version Lambda de la solution : *hosting\Estranged.Lfs.Hosting.Lambda*.

1. Cloner [https://github.com/MineoGames/Estranged.Lfs](https://github.com/MineoGames/Estranged.Lfs) sur votre PC
2. Modifier *Estranged.Lfs\hosting\Estranged.Lfs.Hosting.Lambda\aws-lambda-tools-defaults.json*	 pour éditer les variables suivantes :

	Variable | Définition | Exemple
	------------- | ------------- | -------------------------
	LFS_USERNAME | Utilisateur pour accéder au programme | LfsUser
	LFS_PASSWORD | Mot de passe pour accéder au programme (éviter les caractères spéciaux) | Tezfz5615xqezef
	S3_ACCESS_KEY | Access key pour OVH dans le profil ovh du fichier .aws/credentials | istnkvsbetqxnypsipwx 
	S3_ACCESS_SECRET | Secret key pour OVH dans le profil ovh du fichier .aws/credentials | istnkvsbetqxnypsipwx 
	S3_REGION | Région publique de cloud du OVH Object Storage | sbg
	BITBUCKET_WORKSPACE | Workspace Bitbucket du dépôt du jeu  | (Laisser vide)
	BITBUCKET_REPOSITORY | Nom du dépôt Bitbucket du jeu | (Laisser vide)
	AWS_STACK_NAME | Nom de la stack Cloudformation | LfsProject
	AWS_SHARED_BETWEEN_STACK_S3_NAME  | Nom du bucket S3 qui va héberger le build de code et le template de stack uploadés | shared-lambda 

	<br>
3. Ouvrir la console de développeur et aller dans hosting/Lambda

	<img src="https://imgur.com/nfpGXSK.png" alt="Dev console access" style="width:45rem;"/>
	<img src="https://imgur.com/nbTMeny.png" alt="Dev console" style="width:45rem;"/>

4.  Éxécuter la commande suivante pour créer la stack CloudFormation, en choisissant les mêmes credentials que défini précédemment

	``dotnet lambda deploy-serverless StackName --template-parameters GitLfsUsername=LfsUser;GitLfsPassword=Tezfz5615xqezef -t modele.yaml ``
	
	<img src="https://imgur.com/qZ4ONtf.png" alt="Create Cloudformation stack" style="max-width:80rem;"/>

5. Éxécuter la commande suivante pour uploader le code dans la Lambda Function AWS

	``dotnet lambda deploy-function``
	
	<img src="https://imgur.com/hCZDZ58.png" alt="Create Cloudformation stack" style="max-width:80rem;"/>

6. Créer le fichier *.lfsconfig* à la racine du projet de jeu et le connecter à la lambda function (le endpoint a été affiché en 4. ) :
	```
	[lfs]
	url = https://9w45qpo957.execute-api.eu-west-1.amazonaws.com/lfs
	``` 
	Commiter et push ce fichier.
	
7. C'est terminé. Commiter et push des fichiers binaires : ils seront visibles dans OVH et dans bitbucket sans prendre de place.

	<img src="https://imgur.com/6pxRgfO.png" alt="push ok" style="max-width:80rem;"/>
	
	<img src="https://imgur.com/4EpjD1x.png" alt="files pushed seen in server" style="max-width:75rem;"/>	<img src="https://imgur.com/P236mz3.png" alt="Size not affected by large files" style="max-width:25rem;"/>

#### Méthode d'authentication
Dans la configuration actuelle, l'authentification est de type utilisateur/mot de passe, identique pour tous. La solution permet d'utiliser une authentification Github ou Bitbucket.  
- Aller dans [la console AWS](https://eu-west-1.console.aws.amazon.com/cloudformation/home), ouvrir la stack, et éditer la lambda function

<img src="https://imgur.com/3Vcx5jX.png" alt="pile" style="max-width:80rem;"/>

<img src="https://imgur.com/ZVrl4lb.png" alt="pile lambda" style="max-width:80rem;"/>

Changer les variables d'environnement de la lambda function:
- Editer LFS_USERNAME pour supprimer la valeur
- Editer LFS_PASSWORD pour supprimer la valeur
- Ajouter la clé key BITBUCKET_REPOSITORY/GITHUB_REPOSITORY avec comme valeur le nom du dépôt
- Ajouter la clé BITBUCKET_WORKSPACE/GITHUB_ORGANISATION avec comme valeur l'espace du dépôt

<img src="https://imgur.com/fDkzqtw.png" alt="var" style="max-width:80rem;"/>

# Mot de la fin
Nous avons maintenant une solution long-terme facile à mettre en place qui permet d'utiliser Git sans se soucier de la limite de taille.
Cela serait plus facile si nous pouvions avoir des fonctions Lambda dans OVH pour unifier la pile. 

Cela m'a pris un certain temps pour le faire fonctionner, alors j'ai voulu le partager. J'espère que cela vous aidera. 
Si vous avez des questions, vous pouvez me contacter sur Discord ou d'autres réseaux sociaux. Bon développement !

__Envie de ne pas rater les prochains blog techniques ? On vous tiendra au courant.__

{% include fr/subscribe-form.html title="Inscription à la newsletter" %}