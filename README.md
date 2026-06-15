# DUB EDITION WEB

Web estática preparada para GitHub Pages.

## Archivos

- `index.html`: home principal.
- `rutas.html`: sección de rutas.
- `eventos.html`: historia de DUB21 en Circuit Ricardo Tormo junto a Probike Racing.
- `comunidad.html`: acceso al canal de Instagram.
- `unete.html`: formularios para empresas y miembros.
- `style.css`: diseño completo responsive.
- `script.js`: menú móvil, animaciones, pestañas y límite de 2 fotos.

## Subir a GitHub Pages

1. Sube todos los archivos al repositorio.
2. Ve a Settings > Pages.
3. Source: Deploy from a branch.
4. Branch: main.
5. Folder: / root.
6. Guarda y espera a que GitHub publique.

## Formularios

GitHub Pages no procesa formularios ni guarda archivos porque es hosting estático.

Opciones recomendadas:

### Opción rápida: Formspree

1. Crea cuenta en Formspree.
2. Crea un formulario para empresas y otro para miembros.
3. Copia el endpoint.
4. En `unete.html`, cambia `action=""` por tu URL de Formspree.

Ejemplo:

```html
<form class="form-card" action="https://formspree.io/f/xxxxxxx" method="POST">
```

Para el formulario del club con fotos, revisa que el servicio elegido permita subida de archivos.

### Opción muy fácil: Google Forms

Puedes sustituir los formularios por botones que abran dos Google Forms diferentes.

## Enlaces incluidos

- Instagram: https://www.instagram.com/dubeditionvlc
- Canal: https://www.instagram.com/channel/AbYgdCJDxc26Cs2u/?igsh=MzJocHFnZHQ5ZnM3
- Hashtag: #seguimosenlonuestro


## KDDs y fotos

Se ha añadido la página `kdds.html` y una sección destacada en la home. Para poner fotos reales de las quedadas, crea/sustituye los archivos en la carpeta `assets` con estos nombres:

- `kdd-1.jpg`
- `kdd-2.jpg`
- `kdd-3.jpg`
- `kdd-4.jpg`
- `kdd-5.jpg`
- `kdd-6.jpg`

Después, en `kdds.html`, cambia `.svg` por `.jpg` en las seis imágenes. También puedes dejar los SVG provisionales hasta tener fotos finales.


## Novedades añadidas

- Integración del logo oficial de Dub Edition en cabecera y portada.
- Nueva sección en `unete.html` con marcas colaboradoras: **AL WORKS**, **LEGAUTO** y **294 DETAILING**.
- Los logos oficiales de Dub Edition están en `assets/dub-edition-logo-white.png` y `assets/dub-edition-logo-black.png`.


## Formularios Formspree configurados

- Solicitud para formar parte del club: `https://formspree.io/f/xqejnayw`
- Colaboraciones y empresas: `https://formspree.io/f/mpqnbwyz`

Los formularios ya están conectados en `unete.html`. Haz una prueba real desde la web publicada. En el primer envío, Formspree puede pedir confirmación o activación desde el panel.



## Fotos reales añadidas

Esta versión incluye fotos reales optimizadas dentro de `assets/photos/` y aplicadas en:

- Fondo principal de `index.html`, `kdds.html`, `rutas.html`, `eventos.html`, `comunidad.html` y `unete.html`.
- Galería de KDDs.
- Galería de rutas.
- Galería de DUB21 / eventos.
- Bloques visuales de comunidad.
- Feed visual decorativo de Instagram en la home.

Las imágenes se han renombrado y comprimido para que carguen mejor en GitHub Pages.


## URLs limpias

Esta versión usa carpetas con `index.html` para que GitHub Pages muestre URLs sin `.html`:

- `/`
- `/kdds/`
- `/rutas/`
- `/eventos/`
- `/comunidad/`
- `/unete/`

Importante: sube la estructura completa tal cual, manteniendo las carpetas `kdds`, `rutas`, `eventos`, `comunidad` y `unete`.


## Actualización colaboradores y móvil

- Se ha corregido la visualización móvil de la primera sección de `/unete/`.
- Se han añadido nuevos colaboradores: **LIDC** y **ZONABOX MEDIA** con enlaces a Instagram.

- Actualización: todos los colaboradores de la página Únete tienen enlace directo a Instagram: AL WORKS, LEGAUTO, 294 DETAILING, LIDC y ZONABOX MEDIA.


## SEO añadido

Esta versión incluye:

- `robots.txt`
- `sitemap.xml`
- títulos SEO únicos por página
- meta descriptions únicas
- canonical URLs para `https://dubedition.es/`
- Open Graph y Twitter Cards
- JSON-LD de organización y sitio web en la home
- sección de contenido natural para búsquedas como KDDs en Valencia, club de coches en Valencia, coches modificados y eventos de coches en Valencia.

Después de subir esta versión a GitHub Pages, entra en Google Search Console, verifica el dominio `dubedition.es` y envía el sitemap:

https://dubedition.es/sitemap.xml


## Favicon

Se ha añadido un favicon personalizado basado en el logo de Dub Edition. Archivos incluidos en la raíz:

- `favicon.ico`
- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png`
- `android-chrome-192x192.png`
- `android-chrome-512x512.png`

Ya está enlazado en todas las páginas HTML.


## Cambio formulario club

Se ha eliminado el campo de fotos del formulario de solicitud para formar parte del club. El formulario ya no usa subida de archivos.


## Merch Dub Edition

Se ha añadido la página `/merch/` con carrito visual y formulario conectado a Formspree:

- Endpoint: `https://formspree.io/f/xwvjypvp`
- Pago: Bizum, transferencia o pago en KDD.
- Entrega: recogida en KDD o envío a domicilio 24/72 h.
- Envío general: 5,50 €.
- Envío solo pegatinas: 1 €.

El carrito no cobra automáticamente. Envía el resumen del pedido al formulario de Formspree para confirmación manual.


## Merch con páginas individuales

Se ha añadido una ficha individual para cada producto dentro de `merch/`. El carrito usa `localStorage`, por lo que los productos añadidos se mantienen aunque el usuario navegue entre el catálogo y las páginas de producto.

Páginas añadidas:

- `merch/camiseta-dub-edition-2026/` — CAMISETA DUB EDITION™ 2026
- `merch/camiseta-dub-edition-2026-oversized/` — CAMISETA DUB EDITION™ 2026 OVERSIZED
- `merch/gorra-dub-26/` — GORRA DUB™ 26
- `merch/gorro-winter-dub-26/` — GORRO WINTER DUB™ 26
- `merch/sombrero-flow-dub-26/` — SOMBRERO FLOW DUB™ 26
- `merch/pegatina-dub-original/` — PEGATINA DUB ORIGINAL™
- `merch/landyard-dub-oem/` — LANDYARD DUB OEM™


## Checkout merch

Se ha añadido una página de finalización de pedido:

- `/checkout/`

El menú muestra ahora el importe del carrito en euros en lugar del número de productos. Al pulsar en `Carrito`, el usuario accede a la pasarela de pedido, donde puede revisar subtotal, envío, total, datos personales, método de pago y entrega.

El carrito se guarda con `localStorage`, por lo que se mantiene al navegar por productos y otras páginas de la web.


## Actualización navegación

- Menú superior reorganizado en mayúsculas: **INICIO**, **DUB SHOP**, **DUBEDITION**, **ÚNETE** y **CARRITO**.
- Dentro de **DUBEDITION** están agrupadas las páginas: KDDs, Rutas, Eventos y Comunidad.
- El carrito se muestra como importe en euros y lleva directamente a `/checkout/`.
- En móvil, el carrito queda centrado al final del menú.
