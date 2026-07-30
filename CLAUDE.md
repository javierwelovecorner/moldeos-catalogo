# Moldeos Catálogo — contexto del proyecto

## Qué es esto
Catálogo web de productos de **Moldeos Especializados** (moldeos.com), fabricante
B2B de moldes de inyección de precisión para las industrias alimenticia, cosmética,
farmacéutica y de construcción. Este sitio es un proyecto **independiente** — no
toca el homepage de WordPress ni el repo `v0-moldeos-homepage` (ese último no está
autorizado por el cliente; no usarlo como referencia ni integrarlo).

Vive en paralelo a `../moldeos-form` (el formulario de cotización, también en
`00 - Sites`). Ambos son repos separados, cada uno con su propio deploy en Vercel.

- Repo: https://github.com/javierwelovecorner/moldeos-catalogo
- Deploy: Vercel (auto-deploy on push a `main`)
- Fuente original del contenido: `CatalogoME2020_actualizado.pdf` (catálogo impreso
  de diciembre 2019, ya no está en este repo — vivía en el chat donde se construyó)

## Stack
- Vite + React 19
- Tailwind CSS v4 (vía `@tailwindcss/vite`, **no** `tailwind.config.js` — v4 usa
  `@import "tailwindcss"` directo en `index.css`)
- Sin backend, sin CMS. Todo el contenido es estático.

## Dónde vive el contenido
- `src/data/productos.json` — los ~51 productos, organizados por industria
  (`alimenticia`, `cosmetica`, `farmaceutica`, `construccion`). Cada producto:
  `id`, `nombre`, `material`, `pigmento`, `peso`, `pagina` (página del PDF
  original, por si hay que volver a cotejar), `imagen` (no usado actualmente,
  el componente arma la ruta como `/products/{id}.jpg`).
- `public/products/*.jpg` — una imagen por producto, nombrada por `id`.

## Sistema de diseño (ya decidido, no reinventar)
- Colores: navy `#1A1F3A` (fondo header/hero), rojo `#E63946` (CTA/acentos,
  **solo** para llamados a la acción, no decorativo), papel `#F4F3EF` (fondo
  general), acero `#8B93A7` (texto secundario/bordes).
- Tipografía: **Oswald** (display/headers, mayúsculas), **Inter** (body),
  **IBM Plex Mono** (specs técnicas — material/peso/tolerancia).
- Elemento de firma: el "spec-tag" — etiqueta con borde punteado en mono que
  muestra pigmento/peso, como una nota de plano técnico. Es el detalle que
  amarra con el posicionamiento de precisión de Moldeos. No agregar más
  elementos decorativos — el brief pide restraint.
- Ver `frontend-design` skill si se toca el sistema de diseño otra vez.

## Componentes (`src/components/`)
- `Header.jsx` — logo ME + link a moldeos.com
- `Hero.jsx` — tesis del catálogo ("Cada pieza, a tolerancia")
- `IndustryTabs.jsx` — filtro sticky por industria, con contador
- `ProductCard.jsx` — imagen + nombre + material + spec-tags

## Conexión con el form de cotización
El botón "Cotiza tu proyecto" en cada industria arma una URL a
`https://moldeos-form.vercel.app?industria_interes={valor}` donde el valor
sigue el mapeo ya usado en HubSpot: `alimenticia→food`, `cosmetica→cosmetics`,
`farmaceutica→pharma`, `construccion→construction` (ver `INDUSTRY_TO_FORM_VALUE`
en `App.jsx`). Si se agrega más prellenado (tipo_proyecto, etc.), seguir el
mismo patrón de query params — el form ya tiene la lógica para recibirlos
(confirmar en el repo `moldeos-form` cómo los consume actualmente antes de
asumir que ya están conectados; el fix de UTM passthrough sigue pendiente ahí).

## ⚠️ Pendiente conocido — imágenes de producto
Las 51 imágenes en `public/products/` se generaron recortando automáticamente
las páginas del PDF por coordenadas estimadas, **sin revisión visual una por
una**. Javier confirmó que varias quedaron mal: texto encimado, mal centradas,
o cortadas — sobre todo las de la página 12 del catálogo (productos
farmacéuticos con tapas/botes traslapados en la imagen original).

Si se retoma este trabajo: la fuente original (PDF) no está en este repo. Haría
falta pedirle a Javier el PDF de nuevo, o trabajar directo sobre las imágenes ya
en `public/products/` recortándolas mejor una por una con revisión visual en
cada paso (no automatizar el batch completo sin verificar).

## Pendiente de negocio (no técnico, pero bloquea contenido)
La sección "Colaboraciones" del catálogo original (páginas 14-16) muestra
productos de marca de clientes de Moldeos (Hellmann's, Valentina, Vive100,
TEC Italy, eGo, etc.). **No se ha agregado a este sitio.** Antes de hacerlo,
Javier necesita confirmar con Josué si hay autorización de esas marcas para
mostrarse en un canal digital nuevo — estar en el catálogo impreso de 2020 no
cubre automáticamente ese uso.

## Convenciones de trabajo
- Copy en español (público final: clientes B2B de Moldeos en México).
- Commits y nombres de archivo pueden ir en español o inglés indistintamente,
  sin problema — el repo ya mezcla ambos.
- Antes de un deploy grande, correr `npm run build` local para atrapar errores
  antes de hacer push (Vercel hace el resto automático).
- Plugin de Vercel para Claude Code ya instalado en esta máquina
  (`vercel-plugin`, user scope) — usar `/vercel-plugin:deploy` o
  `/vercel-plugin:status` si hace falta.
