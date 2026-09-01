# Cómo está organizada la web para sacarle partido al matching contextual de AdSense

*Nota: esto es preparación de fondo. No cambia nada visible todavía — la web no tiene
anuncios activos porque aún no está aprobada en AdSense. Lo que hace es dejar la
estructura lista para cuando llegue ese momento, y reforzar señales que además ayudan a
SEO independientemente de los anuncios.*

## La idea de base

AdSense no permite elegir marcas o anunciantes concretos — elige su algoritmo, en
función del contenido de cada página y del historial del visitante. Lo único que
controlamos nosotros es cómo de claro y "leíble" es el tema de cada página para ese
algoritmo, y dónde colocamos el espacio para el anuncio dentro de esa página. Cuanto
más nítido el tema y mejor la posición, más relevante (y más rentable) tiende a ser el
anuncio que aparece — y más fácil le resulta al lector relacionar lo que ve anunciado
con lo que está leyendo.

Con eso en mente, he tocado tres capas del sitio:

## 1. Cada página de categoría ya tiene un tema único y bien delimitado

Esto ya estaba bien hecho antes de este cambio, y merece decirse: cada página de
`category/` (Training, Behavior, Care & Wellbeing, Gear Reviews, Breeds & Multi-Dog,
Dog Psychology) tiene su propio título, meta description y encabezado enfocados solo en
ese tema, sin mezclar contenido de otras categorías. Eso es exactamente lo que un
algoritmo contextual necesita para clasificar bien la página — nada que cambiar aquí,
solo mantenerlo así según se añadan los 19 artículos nuevos a sus categorías
correspondientes.

## 2. Espacios de anuncio colocados dentro del contenido, no alrededor

He añadido una clase `.ad-slot` (en `assets/styles.css`) y un contenedor vacío en dos
puntos de cada uno de los 31 artículos:

- **Justo después de la introducción** (`data-ad-position="after-intro"`) — el lector
  ya sabe de qué va el artículo, y el bloque de texto que rodea el hueco es denso y
  específico del tema.
- **Justo antes de "Related reading"** (`data-ad-position="before-related"`) — todavía
  dentro del cuerpo del artículo, antes de que la página empiece a enlazar hacia otros
  temas.

Ahora mismo estos huecos están vacíos y no se ven (una regla CSS los oculta si no
tienen contenido dentro). El día que tengamos el código de AdSense, solo hay que
insertar el bloque `<script>` correspondiente dentro de cada `div.ad-slot` — no hace
falta tocar el diseño de la página ni decidir dónde va cada anuncio, porque esa
decisión ya está tomada y es la misma en las 31 páginas.

Deliberadamente **no** he puesto anuncios en la barra lateral, en la cabecera ni entre
elementos de navegación — ese tipo de colocación separa el anuncio del contenido y
Google lo valora peor tanto para el "policy check" como para el matching contextual.

## 3. Consistencia de palabras clave entre título, encabezados y cuerpo

Los 31 artículos ya siguen un patrón que ayuda aquí: el `<title>`, el primer `<h1>`, y
los `<h2>` de cada sección repiten el vocabulario central del tema (por ejemplo, en el
artículo de collares de entrenamiento: "collar", "arnés", "correa", "tirar" aparecen
tanto en el título como en los subtítulos). Esa repetición natural es justo lo que el
algoritmo de Google usa para decidir "de qué habla esta página" — no hace falta ningún
truco adicional, solo mantener esa disciplina en los artículos que faltan por escribir.

## Lo que queda pendiente para cuando se solicite AdSense

- Rellenar las páginas de categoría con **todos** los artículos correspondientes (ahora
  mismo `gear.html` y `psychology.html`, por ejemplo, solo muestran 2 de los suyos —
  esto se resuelve al integrar los 19 artículos nuevos a las páginas de categoría e
  índice).
- Configurar Google Funding Choices (CMP para tráfico UE) — ya está anotado como
  recordatorio pendiente.
- Insertar el snippet de AdSense en `<head>` de todas las páginas, y el código de cada
  anuncio dentro de los `div.ad-slot` ya preparados.
- Revisar el `ads.txt` en la raíz del dominio una vez tengamos el ID de publisher.

Todo esto está en la rama `content-drafts` (no publicado en producción todavía), junto
con el resto del contenido pendiente de tu aprobación de publicación en directo.
