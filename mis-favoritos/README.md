# Mis favoritos

Sitio estático (HTML, CSS y JavaScript). Sin dependencias, sin backend, sin tipografías externas.

## Estructura
- `index.html`: inicio con tarjetas giratorias.
- `categoria.html?c=ID`: una sola página que sirve todas las categorías.
- `js/data.js`: **todo el contenido** (aquí editas).
- `js/app.js` y `css/styles.css`: lógica y diseño (normalmente no se tocan).
- `assets/img/`: imágenes locales. Hoy son marcadores de posición en SVG.
- `docs/FUENTES.md`: fuentes consultadas y decisiones pendientes.

## Cómo editar (todo en `js/data.js`)
- **Agregar producto:** copia un bloque de `productos`, cambia `id`, `nombre`, `categoria`, etc., y agrega su `id` a la lista `productos` de su categoría.
- **Quitar/ocultar:** cambia `estado` a `"borrador"`.
- **Cambiar imagen:** guarda el archivo en `assets/img/` y escribe su ruta en `imagen`. Usa solo imágenes tuyas, con licencia, o cuyos términos de uso permitan publicarlas.
- **Enlace:** pega la URL en `enlace`. Mientras esté vacío, el botón muestra "Enlace pendiente".
- **Nueva categoría:** añade un bloque en `categorias` con `id`, `titulo`, `descripcion`, `orden`, `tono` y `productos`.

## Publicar en Netlify
**Opción A (arrastrar):** entra a app.netlify.com, abre *Sites* y arrastra la carpeta descomprimida `mis-favoritos` al recuadro "Drag and drop".
**Opción B (Git):** sube la carpeta a un repositorio, en Netlify elige *Add new site > Import from Git*, deja el comando de build vacío y *Publish directory* en `.` (ya definido en `netlify.toml`).
Para cambios futuros, edita `js/data.js` y vuelve a publicar.

## Limitaciones
- No se probó en navegadores reales ni en dispositivos: solo se revisó la sintaxis de los scripts. Abre el sitio y revisa giro, tacto y móvil antes de publicar.
- Las imágenes son marcadores de posición y los enlaces "Conseguir" están pendientes.
- Los textos de razones son borradores, no opiniones tuyas: edítalos.
