THE DOG OWNERS HUB — sitio listo para desplegar
=================================================

CONTENIDO DE ESTA CARPETA
- index.html, about.html, contact.html, privacy-policy.html, terms.html
- category/ (6 páginas de categoría)
- articles/ (6 artículos completos, listos para publicar)
- assets/styles.css (todo el diseño del sitio)
- ads.txt, robots.txt, sitemap.xml

CÓMO PUBLICARLO CON EL DOMINIO TheDogOwnersHub.com
1. Registra el dominio TheDogOwnersHub.com (Namecheap, Google Domains, etc.) si aún no lo tienes.
2. Crea una cuenta gratuita en Netlify (netlify.com).
3. Arrastra esta carpeta completa a la zona de despliegue de Netlify ("Deploy manually" / "Drag and drop your site folder").
4. En Netlify, ve a Domain settings > Add a domain > escribe TheDogOwnersHub.com.
5. Netlify te dará los registros DNS (normalmente un registro A y/o CNAME) que debes configurar en el panel de tu registrador de dominio. La propagación puede tardar hasta 24-48 horas.
6. Activa HTTPS (Netlify lo hace automáticamente y es gratuito, vía Let's Encrypt) — imprescindible para SEO y para AdSense.

ANTES DE SOLICITAR GOOGLE ADSENSE
- Ten el sitio en vivo con el dominio propio funcionando (no en un subdominio de Netlify).
- Ten publicados al menos 20-30 artículos originales (este paquete trae los 6 primeros; ver el planning de publicación en el Tablero de Lanzamiento).
- Las páginas legales (Privacy Policy, Terms) ya están incluidas — solo actualiza la fecha "[FECHA DE PUBLICACIÓN]" quitando el marcador.
- Verifica el sitio en Google Search Console y envía sitemap.xml.

DESPUÉS DE QUE ADSENSE TE APRUEBE
- Sustituye "pub-0000000000000000" en ads.txt por tu ID real de editor de AdSense.
- Inserta el script de Auto Ads de AdSense antes de </head> en cada página (o usa un snippet incluido una sola vez si migras a un generador estático).

NOTA TÉCNICA
Este es un sitio estático (HTML/CSS puro, sin backend). Es intencional: es la forma más simple, rápida y barata de alojar un sitio de contenido, y es exactamente lo que Google AdSense necesita para revisar el sitio. Si más adelante quieres añadir un formulario de contacto funcional o un buscador interno, se puede migrar a un generador estático como Eleventy o Astro sin rehacer el diseño.
