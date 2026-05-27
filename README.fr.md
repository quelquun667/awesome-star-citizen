# MobiGlas OS — Outils & Liens

> Un annuaire sélectionné des meilleurs outils, sites et ressources pour **Star Citizen**.

### 🌐 [Parcourir le site interactif →](https://quelquun667.github.io/awesome-star-citizen/fr/)

**🌍 Lire dans une autre langue :** [🇬🇧 English](README.md) · [🇪🇸 Español](README.es.md)

[![Star Citizen](https://img.shields.io/badge/Star%20Citizen-Communauté-blue)](https://robertsspaceindustries.com/)
[![Licence : CC BY-SA 4.0](https://img.shields.io/badge/Licence-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/deed.fr)
[![PRs Bienvenues](https://img.shields.io/badge/PRs-bienvenues-brightgreen.svg)](#contribuer)

---

## Légende

| Icône | Signification |
|:-----:|---------------|
| 🌐 | Site web / outil en ligne |
| 🔒 | Nécessite un compte / connexion |
| 🧩 | Extension de navigateur ou application à installer |
| 💰 | Payant ou fonctionnalités freemium |
| ⚠️ | Maintenu par la communauté — données parfois en retard sur les patchs |

---

## Sommaire

- [Vaisseaux & Équipements](#vaisseaux--équipements)
- [Commerce & Logistique](#commerce--logistique)
- [Bases de données & Références](#bases-de-données--références)
- [Wikis & Lore](#wikis--lore)
- [Cartes & Navigation](#cartes--navigation)
- [Org & Gestion de flotte](#org--gestion-de-flotte)
- [Communauté & Actualité](#communauté--actualité)
- [Contribuer](#contribuer)

---

## Vaisseaux & Équipements

- **Erkul Games (Calculateur de DPS)** — [erkul.games](https://www.erkul.games/) — Planificateur de loadout et calculateur de DPS. L'outil de référence pour les builds. 🌐
- **FleetYards** — [fleetyards.net](https://fleetyards.net/) — Base de données des vaisseaux avec spécifications détaillées et slots de composants. 🌐
- **Ship Matrix (Officiel)** — [robertsspaceindustries.com/ship-matrix](https://robertsspaceindustries.com/ship-matrix) — Spécifications officielles des vaisseaux par CIG. Source d'autorité, mais mise à jour lente. 🌐
- **CCU Game** — [ccugame.app](https://ccugame.app/) — Calculateur de chemin de CCU. Trouve la chaîne d'upgrades la moins chère pour atteindre un vaisseau cible. 🌐 ⚠️
- **Hangar.link** — [hangar.link](https://hangar.link/) — Suivez et gérez votre collection de vaisseaux en liant votre compte RSI. 🌐 🔒 ⚠️
- **StarShip 42** — [starship42.com](https://www.starship42.com/) — Visualisateur 3D de vaisseaux avec comparaisons de tailles et détails techniques. 🌐 ⚠️

## Commerce & Logistique

- **UEX Corp** — [uexcorp.space](https://uexcorp.space/) — Marchandises, prix, routes commerciales, raffineries. Communautaire et très complet. 🌐 ⚠️
- **SC Trade Tools** — [sc-trade.tools](https://sc-trade.tools/) — Optimiseur de routes commerciales avec calcul de bénéfices. 🌐
- **Regolith Co** — [regolith.rocks](https://regolith.rocks/) — Tracker de coop minière, planificateur de raffinage et base de prix des minéraux. 🌐 🔒 ⚠️

## Bases de données & Références

- **SC Unpacked** — [scunpacked.com](https://scunpacked.com/) — Données brutes du jeu extraites à chaque patch. 🌐 ⚠️

## Wikis & Lore

- **Star Citizen Wiki** — [starcitizen.tools](https://starcitizen.tools/) — Plus grand wiki maintenu par la communauté. 🌐 ⚠️

## Cartes & Navigation

- **RSI Starmap** — [robertsspaceindustries.com/starmap](https://robertsspaceindustries.com/starmap) — Carte stellaire 3D officielle de l'univers persistant. 🌐

## Org & Gestion de flotte

- **RSI Spectrum** — [robertsspaceindustries.com/spectrum](https://robertsspaceindustries.com/spectrum) — Forum et plateforme de chat officiels pour les orgs et les joueurs. 🌐 🔒

## Communauté & Actualité

- **r/starcitizen** — [reddit.com/r/starcitizen](https://www.reddit.com/r/starcitizen/) — Principal subreddit Star Citizen. 🌐
- **Imperial News Network (INN)** — [imperialnews.network](https://imperialnews.network/) — Média indépendant Star Citizen — couvre patchs, lore et actu de développement. 🌐 ⚠️
- **RSI Status** — [status.robertsspaceindustries.com](https://status.robertsspaceindustries.com/) — État officiel en direct des serveurs et services RSI / Star Citizen. 🌐

---

## Contribuer

Les contributions sont les bienvenues ! Pour ajouter ou mettre à jour un outil :

1. Forkez le dépôt.
2. Ajoutez votre entrée **à la fois** dans [`README.md`](README.md) et dans [`data.json`](data.json) en suivant le format ci-dessous.
3. Si possible, mettez aussi à jour les README traduits ([`README.fr.md`](README.fr.md), [`README.es.md`](README.es.md)). Sinon, pas de souci — un mainteneur s'en chargera.
4. Ouvrez une Pull Request avec une courte justification (pourquoi cet outil est utile, est-il toujours maintenu).

### Format d'entrée — README

```
- **Nom de l'outil** — [domaine.tld](https://url-complete/) — Description en une phrase. <icônes>
```

### Format d'entrée — data.json

```json
{
  "id": "identifiant-unique-en-kebab-case",
  "name": "Nom de l'outil",
  "url": "https://url-complete/",
  "category": "ships-gear",
  "description": "Description en une phrase.",
  "flags": ["website"]
}
```

### Règles

- Un outil = une entrée. Pas de doublons entre catégories — choisissez la plus pertinente.
- Les liens morts et outils abandonnés seront retirés lors des revues périodiques.
- Gardez les descriptions à **une seule phrase**, ton neutre.

---

## Licence

Le contenu est publié sous [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.fr).
Star Citizen et toutes les ressources associées sont © Cloud Imperium Games. Ce projet est non officiel et n'est pas affilié à CIG.
