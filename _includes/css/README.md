# Design system — mg-website

Ce dossier contient tout le CSS du site. Il est concaténé en un seul fichier par
[`_layouts/style.css`](../../_layouts/style.css), servi sur toutes les pages via
[`style.css`](../../style.css).

## Ordre de chargement (il compte)

```
bootstrap.min.css    Bootstrap 3 — grille, navbar, carousel
design-system.css    tokens --mg-* et composants .ds-*     <- gagne sur Bootstrap
grayscale.css        thème Start Bootstrap + composants maison
mineogames.css       typographie de base et utilitaires
brevo.css            formulaire newsletter
```

`/tgo/` ajoute par-dessus [`tgo-style.css`](../../tgo-style.css).

Ces fichiers sont **traités par Liquid**. On peut donc y écrire `{{ site.color.links }}` —
c'est ce qui permet à `_config.yml` de rester la source de vérité de la palette historique.

## Deux pièges à connaître

**1. `rem` ne vaut pas la même chose partout.**
`design-system.css` pose `html { font-size: 62.5% }`, donc **1rem = 10px** dans les
longueurs. Mais dans une **media query**, `rem` vaut toujours 16px — c'est la spec CSS,
pas une incohérence du projet. Conséquence :

| écrit | paliers réels |
|---|---|
| `@media (max-width: 30rem)` | 480px |
| `@media (max-width: 48rem)` | 768px |
| `@media (max-width: 60rem)` | 960px |
| `@media (max-width: 72rem)` | 1152px |

**2. Le `font-size` racine était posé par Bootstrap.** Il est maintenant déclaré
explicitement dans `design-system.css`. Ne le retirez pas en supprimant Bootstrap :
tout le CSS écrit en `rem` en dépend.

## Utiliser les tokens

Toujours préférer un token à une valeur littérale. Ils sont tous dans le `:root` de
`design-system.css`, et surchargeables par scope — c'est ainsi que `/tgo/` se thème,
via `body.tgo { --mg-* }` sans dupliquer une seule règle.

**Couleurs** — `--mg-color-canvas` `-surface` `-text` `-text-muted` `-border`
`-brand` `-action` `-focus`, plus `--mg-color-canvas-legacy` et `--mg-color-link`
pour le site historique (injectés depuis `_config.yml`).

**Typographie** — échelle fluide de `--mg-text-xs` (12px) à `--mg-text-4xl` (24→40px),
plus `--mg-text-display` pour le titre héro. `16` et `18` correspondent aux variables
Figma *Text Regular* et *Text Medium*.

> Les tailles intermédiaires sont en `clamp()` : **inutile d'ajouter une media query
> pour réduire du texte sur mobile**, l'échelle le fait déjà. C'est ce qui a permis de
> supprimer une trentaine de redéclarations dans `tgo-style.css`.

**Largeurs et rythme** — `--mg-content-width` (1280, = Figma *Container/container-large*),
`--mg-measure` (768, largeur de confort pour un bloc de texte, = Figma *max-width-large*),
`--mg-gutter` (marge **par côté**, fluide 15→64px), `--mg-section-gap` (rythme vertical,
fluide 40→112px, borne haute = Figma *padding-section-large*).

**Espacements ponctuels** — `--mg-space-1` à `-8` (4, 8, 12, 16, 24, 32, 48, 72px).

## Composants `.ds-*`

`ds-container` `ds-section` `ds-card` (+`--angular`) `ds-frame` `ds-button`
(+`--primary`) `ds-eyebrow` `ds-badge` `ds-accordion` `ds-muted`.

Ils sont aujourd'hui utilisés par `/tgo/` uniquement. Le reste du site est encore en
markup Bootstrap — la migration se fait au fil de l'eau, pas en une fois.

`.ds-frame` a un contrat particulier : lisez le commentaire au-dessus de sa déclaration
avant de l'utiliser ailleurs.

## Ce que Bootstrap fournit encore

Inventaire mesuré sur le markup, pour préparer une sortie éventuelle. **Rien n'est
supprimé aujourd'hui.**

| Besoin | Usages | Coût de remplacement |
|---|---|---|
| Grille (`container`, `row`, `col-lg-8`+`offset-2`) | 13 / 17 / 10 | **Faible** — le seul layout réel est « colonne centrée 8/12 », que `.ds-container` + `--mg-measure` couvrent |
| Navbar + collapse | ~11 classes | **Faible** — [`js/tgo.js`](../../js/tgo.js) le réimplémente en 25 lignes sans jQuery |
| Carousel | 2 + JS | **Moyen** — seule pièce non triviale, pages jeux |
| Boutons (`btn`, `btn-default`, `btn-lg`) | 7 | **Faible** — `.ds-button` couvre |
| Utilitaires (`text-center`, `text-justify`, `list-inline`) | 21 | **Faible** |

Précédent utile : `/tgo/` tourne **déjà sans aucun JS Bootstrap** (`minimal_scripts: true`
dans son front matter) — ni jQuery, ni `bootstrap.min.js`.

## Reste à faire

- Les 53 couleurs en dur de `tgo-style.css` ne passent pas encore par des tokens.
- Deux gris de bordure coexistent à un point d'écart : `#252d39` et `#262d39`.
- Les icônes de features et les callouts sont uniformisés côté CSS alors que la
  maquette leur donne des tailles distinctes — à arbitrer.
