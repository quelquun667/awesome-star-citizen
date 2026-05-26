# MobiGlas OS — Herramientas y Enlaces

> Un directorio curado de las mejores herramientas, sitios web y recursos para **Star Citizen**.

**🌍 Leer en otro idioma:** [🇬🇧 English](README.md) · [🇫🇷 Français](README.fr.md)

[![Star Citizen](https://img.shields.io/badge/Star%20Citizen-Comunidad-blue)](https://robertsspaceindustries.com/)
[![Licencia: CC BY-SA 4.0](https://img.shields.io/badge/Licencia-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/deed.es)
[![PRs Bienvenidos](https://img.shields.io/badge/PRs-bienvenidos-brightgreen.svg)](#contribuir)

---

## Leyenda

| Icono | Significado |
|:-----:|-------------|
| 🌐 | Sitio web / herramienta en línea |
| 🔒 | Requiere cuenta / inicio de sesión |
| 🧩 | Extensión de navegador o aplicación a instalar |
| 💰 | De pago o con funciones freemium |
| ⚠️ | Mantenido por la comunidad — los datos pueden ir por detrás de los parches |

---

## Índice

- [Naves y Equipo](#naves-y-equipo)
- [Comercio y Logística](#comercio-y-logística)
- [Bases de datos y Referencias](#bases-de-datos-y-referencias)
- [Wikis y Lore](#wikis-y-lore)
- [Mapas y Navegación](#mapas-y-navegación)
- [Org y Gestión de flota](#org-y-gestión-de-flota)
- [Comunidad y Noticias](#comunidad-y-noticias)
- [Contribuir](#contribuir)

---

## Naves y Equipo

- **Erkul Games (Calculadora de DPS)** — [erkul.games](https://www.erkul.games/) — Planificador de loadout y calculadora de DPS. La herramienta de referencia para builds. 🌐
- **FleetYards** — [fleetyards.net](https://fleetyards.net/) — Base de datos de naves con specs detalladas y slots de componentes. 🌐
- **Ship Matrix (Oficial)** — [robertsspaceindustries.com/ship-matrix](https://robertsspaceindustries.com/ship-matrix) — Specs oficiales de las naves por CIG. Fuente autoritaria, pero actualización lenta. 🌐
- **CCU Game** — [ccugame.app](https://ccugame.app/) — Calculador de ruta de CCU. Encuentra la cadena de upgrades más barata para alcanzar una nave objetivo. 🌐 ⚠️
- **Hangar.link** — [hangar.link](https://hangar.link/) — Sigue y gestiona tu colección de naves enlazando tu cuenta RSI. 🌐 🔒 ⚠️
- **StarShip 42** — [starship42.com](https://www.starship42.com/) — Visualizador 3D de naves con comparaciones de tamaño y detalles técnicos. 🌐 ⚠️

## Comercio y Logística

- **UEX Corp** — [uexcorp.space](https://uexcorp.space/) — Mercancías, precios, rutas comerciales, refinerías. Comunitario y muy completo. 🌐 ⚠️
- **SC Trade Tools** — [sc-trade.tools](https://sc-trade.tools/) — Optimizador de rutas comerciales con cálculo de beneficios. 🌐
- **Regolith Co** — [regolith.rocks](https://regolith.rocks/) — Tracker de coop minera, planificador de refinería y base de precios de minerales. 🌐 🔒 ⚠️

## Bases de datos y Referencias

- **SC Unpacked** — [scunpacked.com](https://scunpacked.com/) — Datos en bruto del juego extraídos en cada parche. 🌐 ⚠️

## Wikis y Lore

- **Star Citizen Wiki** — [starcitizen.tools](https://starcitizen.tools/) — El mayor wiki mantenido por la comunidad. 🌐 ⚠️

## Mapas y Navegación

- **RSI Starmap** — [robertsspaceindustries.com/starmap](https://robertsspaceindustries.com/starmap) — Mapa estelar 3D oficial del universo persistente. 🌐

## Org y Gestión de flota

- **RSI Spectrum** — [robertsspaceindustries.com/spectrum](https://robertsspaceindustries.com/spectrum) — Foro y plataforma de chat oficial para orgs y jugadores. 🌐 🔒

## Comunidad y Noticias

- **r/starcitizen** — [reddit.com/r/starcitizen](https://www.reddit.com/r/starcitizen/) — Subreddit principal de Star Citizen. 🌐
- **Imperial News Network (INN)** — [imperialnews.network](https://imperialnews.network/) — Medio independiente de Star Citizen — cubre parches, lore y noticias de desarrollo. 🌐 ⚠️
- **RSI Status** — [status.robertsspaceindustries.com](https://status.robertsspaceindustries.com/) — Estado oficial en vivo de los servidores y servicios de RSI / Star Citizen. 🌐

---

## Contribuir

¡Las contribuciones son bienvenidas! Para añadir o actualizar una herramienta:

1. Haz un fork del repositorio.
2. Añade tu entrada **tanto** en [`README.md`](README.md) como en [`data.json`](data.json) siguiendo el formato de abajo.
3. Si puedes, actualiza también los README traducidos ([`README.fr.md`](README.fr.md), [`README.es.md`](README.es.md)). Si no, sin problema — un mantenedor se encargará.
4. Abre un Pull Request con una breve justificación (por qué la herramienta es útil, si sigue mantenida).

### Formato de entrada — README

```
- **Nombre de la herramienta** — [dominio.tld](https://url-completa/) — Descripción en una frase. <iconos>
```

### Formato de entrada — data.json

```json
{
  "id": "identificador-unico-en-kebab-case",
  "name": "Nombre de la herramienta",
  "url": "https://url-completa/",
  "category": "ships-gear",
  "description": "Descripción en una frase.",
  "flags": ["website"]
}
```

### Reglas

- Una herramienta = una entrada. Sin duplicados entre categorías — elige la más adecuada.
- Los enlaces caídos y herramientas abandonadas se eliminarán en revisiones periódicas.
- Mantén las descripciones en **una sola frase**, tono neutro.

---

## Licencia

El contenido se publica bajo [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.es).
Star Citizen y todos los recursos relacionados son © Cloud Imperium Games. Este proyecto no es oficial y no está afiliado a CIG.
