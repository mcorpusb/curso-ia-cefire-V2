---
published: false
---

# Informe de revisión del curso — 27 de septiembre de 2026

## Archivos modificados

- `_sass/custom/custom.scss`
- `bloque1.md`
- `bloque2.md`
- `bloque3.md`
- `bloque4.md`
- `modulo-0-que-es-la-ia.md`
- `primeros-pasos/herramientas-que-utilizaremos.md`
- `va/modulo-0-que-es-la-ia.md`

Este informe es un archivo adicional de documentación, excluido de la publicación. La revisión se compara con `adc2a41`, estado del proyecto al comenzar.

## Cambios globales

- Índices navegables en los cinco bloques (0–4), con emojis, apartados seleccionados y subapartados útiles. Se excluyen los encabezados internos de ejemplos de prompts.
- Índice equivalente en la única página valenciana existente.
- Conservación de todas las anclas anteriores, además de las nuevas. No se modifican rutas ni navegación general.
- Reutilización de `callout`, `callout--recuerda`, `callout--compara`, `callout--privacidad` y `callout--reflexion`. Esta última pasa del violeta al naranja para las reflexiones en todo el curso.
- Nuevos estilos específicos mínimos: índice con ajuste de enlaces y foco visible, tabla de aportaciones con dos columnas legibles y responsabilidad profesional en rojo accesible.
- Se mantienen imágenes, recursos, ejemplos y actividades; solo se retiran las dos repeticiones expresamente solicitadas.

## Cambios del Bloque 0

1. Introducción: «Lo esencial para comenzar con criterio y pasar a la práctica» y finalidad revisada.
2. Énfasis selectivo en inteligencia artificial, equivocarse, sesgos y capacidades principales.
3. Índice tras la finalidad del bloque, con navegación a teoría, criterio profesional, herramientas, mapa y práctica.
4. Definiciones breves de IA generativa y chatbot, con presentación discreta.
5. Explicación breve de la relación entre autonomía, supervisión, límites y errores.
6. Reflexión sobre cuándo aporta valor la IA en recuadro naranja.
7. «Aprendemos a revisarla» en el recuadro amarillo existente.
8. Tabla de posibilidades y límites con azul y naranja suaves y negritas selectivas.
9. Dos preguntas destacadas: capacidad técnica en gris; criterio profesional en naranja.
10. Regla sobre datos personales en mayúsculas, negrita y recuadro de privacidad.
11. «NO DELEGAMOS» en mayúsculas; decisiones no delegables en naranja.
12. Frase de responsabilidad en rojo accesible, con «responsabilidad profesional» en negrita; cierre profesional destacado.
13. Lista redundante de cinco herramientas retirada; imagen y enlace al radar conservados.
14. Mapa trasladado al final de la teoría, inmediatamente antes de «Actividad de inicio». Se sustituye la secuencia textual duplicada por la explicación de su significado.
15. Un único h1 por página: «Ahora sí…» pasa a h2 conservando su ancla.
16. Actividad inicial, reto, fases, ejemplos, comparación, ampliación y cierre preservados.

## Herramientas que utilizaremos

Se conserva el índice automático y se amplía con una sección docente. Las nueve herramientas se agrupan en un subíndice desplegable dentro de esa sección para no alargar el índice principal.

Cada ficha explica qué se obtiene, quién puede solicitarlo, requisitos, pasos de acceso, enlace oficial y límites. Se utilizan h3 para las herramientas bajo la sección h2 y etiquetas en negrita para los campos comunes; así se mantiene una jerarquía correcta y se evita un índice excesivo.

- Gemini for Education: acceso institucional, Fundamentals, cuentas educativas, validación institucional y DNS TXT, cuentas administradas centralmente y convivencia con Microsoft 365.
- Canva Educación: dominio reconocido, verificación individual y gestión por el centro; matices de FP y universidad.
- GitHub Education + Copilot Pro: verificación docente y activación, con aplicaciones para familias y ciclos de Informática.
- Microsoft Copilot Chat: licencia educativa compatible y servicio habilitado; diferencia con Microsoft 365 Copilot.
- Adobe Express for Education: oferta escolar elegible, acceso docente/institucional y límites de nivel y funciones.
- Miro Education: acreditación de vinculación institucional, tableros y límites de IA.
- Brisk, MagicSchool y Diffit Basic: planes gratuitos docentes, diferenciados de los planes superiores de pago.

Las fichas enlazan directamente a páginas de producto, solicitud, requisitos o documentación de Google, Canva, GitHub, Microsoft, Adobe, Miro, Brisk, MagicSchool y Diffit. Las fuentes oficiales se incluyen junto a cada procedimiento. Se mantienen separados el acceso docente, la gestión institucional y el apartado de estudiantes.

## Valenciano

Solo se modifica `va/modulo-0-que-es-la-ia.md`, cuya existencia se comprobó antes de editar. Se aplica la misma secuencia, tabla, recuadros y cambios pedagógicos en valenciano. Se conservan las imágenes valencianas existentes y los enlaces externos originales.

No se han creado archivos ni entradas de navegación valencianos. Los enlaces ya existentes hacia páginas aún no traducidas —radar y Bloque 1— siguen apuntando a castellano; los índices internos permanecen dentro de su idioma. No se han añadido párrafos castellanos a la página valenciana.

## Comprobaciones realizadas

- Compilación con Jekyll 3.10 y el tema oficial Just the Docs, en una copia temporal: correcta. No se cambia la configuración del proyecto.
- Siete páginas revisadas en navegador a 375, 768 y 1280 píxeles: 21 combinaciones sin desbordamiento horizontal de página, anclas locales rotas ni imágenes fallidas.
- Inspección visual de la tabla y los recuadros en móvil/escritorio y de la sección docente en tablet. Apertura del subíndice docente y sus nueve enlaces comprobada en navegador.
- Verificación de todos los enlaces internos de las páginas modificadas, incluidas las anclas de destino en otras páginas: sin incidencias.
- IDs únicos y conservación de todos los IDs anteriores en las siete páginas.
- Imágenes conservadas, rutas existentes y textos alternativos presentes.
- Actividades del Bloque 0 comparadas con la versión inicial: contenido intacto. En bloques 1–4 se añaden índice y anclas sin reescribir las actividades.
- Estructura de encabezados y secuencia de recuadros equivalentes en ES/VA; un solo h1 en cada página.
- Contraste del texto sobre los fondos empleados: 7,38:1 para responsabilidad roja; 10,12:1 y 8,84:1 en las columnas de la tabla; superior a 6:1 en los recuadros naranja y amarillo. Los títulos y textos explican el significado sin depender solo del color.
- `git diff --check`: correcto.

### Enlaces externos: resultados y límites

Se comprobaron 57 URL de las páginas revisadas: 47 devolvieron HTTP 200, una HTTP 202, siete HTTP 403, una HTTP 500 y una HTTP 404.

Los 403 corresponden a ChatGPT, Gamma y su invitación, un recurso SharePoint, Canva y su página de requisitos, y la ayuda de Miro. Son restricciones de acceso automatizado; no se consideran enlaces rotos por ese resultado. Canva y Miro se pudieron contrastar además mediante consulta web de sus páginas oficiales. No se ha iniciado sesión en cuentas ni solicitado planes.

Dos incidencias heredadas, conservadas para no suprimir ni sustituir arbitrariamente materiales:

- `bloque2.md`: «Banco de rúbricas de evaluación — INTEF», URL `https://www.educacionyfp.gob.es/servicios-al-ciudadano/catalogo/general/99/998758/ficha.html`: HTTP 404. Requiere seleccionar un recurso equivalente fiable en una revisión posterior.
- `bloque4.md`: «RGPD — Guía práctica de la AEPD», URL `https://www.aepd.es/guias`: HTTP 500 en esta comprobación. No permite concluir una retirada permanente.

Las condiciones educativas se contrastaron en fuentes oficiales el 27/09/2026. La comprobación técnica de un enlace no garantiza acceso con cualquier cuenta ni elegibilidad del centro.

## Traducciones pendientes — solo inventario

Las siguientes páginas del curso no tienen equivalente valenciano. No se han traducido ni añadido a la navegación valenciana:

- `banco-gems-gpts-educativos.md`
- `bloque1-accesibilidad-ia.md`
- `bloque1-actividad-eoi.md`
- `bloque1-actividad-fp.md`
- `bloque1-actividad-infantil.md`
- `bloque1-actividad-primaria.md`
- `bloque1-actividad-secundaria.md`
- `bloque1-actividades.md`
- `bloque1-agentes-ia.md`
- `bloque1-comic.md`
- `bloque1-gemma4.md`
- `bloque1-novedades-chatgpt.md`
- `bloque1-novedades-ia.md`
- `bloque1-seguridad.md`
- `bloque1.md`
- `bloque2-investigacion-verificacion.md`
- `bloque2-notebooklm.md`
- `bloque2.md`
- `bloque3-actividad-eoi.md`
- `bloque3-actividad-fp.md`
- `bloque3-actividad-infantil.md`
- `bloque3-actividad-primaria.md`
- `bloque3-actividad-secundaria.md`
- `bloque3-actividades.md`
- `bloque3.md`
- `bloque4-agentes-ia.md`
- `bloque4-alfabetizacion-alumnado.md`
- `bloque4-evaluacion-con-ia.md`
- `bloque4.md`
- `google-labs-experimentos-ia-aula.md`
- `guia-didactica.md`
- `herramientas-ia-actualizadas.md`
- `index.md`
- `novedades.md`
- `primeros-pasos/herramientas-que-utilizaremos.md`
- `primeros-pasos/ia-gratis-estudiantes.md`
- `primeros-pasos/identidad-digital.md`
- `vibe-coding-educativo.md`

Los documentos internos `AUDITORIA-V2.md`, `PLAN-V2.md` e `INVESTIGACION-HERRAMIENTAS-2026.md` tampoco tienen versión valenciana; se mantienen como documentación interna y no se consideran páginas docentes pendientes de esta revisión.
