# Laboratorio de Artifacts — documentación técnica y pedagógica

## Propósito y ubicación

Página hija del **Bloque 3: Generación Multimodal**, situada como ampliación práctica de la sección 3.5 sobre aplicaciones educativas. Su objetivo es que el profesorado comprenda, analice y cree prototipos interactivos con IA generativa sin confundir generación con validación.

Ruta publicada prevista: `/curso-ia-cefire-V2/bloque3-artifacts.html`.

## Arquitectura

- `bloque3-artifacts.md`: contenido, tutoriales, comparativas, actividad y rúbrica.
- `_data/artifact_projects.yml`: fuente única de metadatos para las seis tarjetas.
- `assets/js/artifacts-lab.js`: filtros, copia de prompts y ampliación accesible de imágenes.
- `_sass/custom/custom.scss`: estilos aislados bajo clases `artifact-*`.
- `assets/img/artifacts/`: copias web optimizadas de las capturas originales.
- `assets/downloads/artifacts/`: código y exportaciones originales aportados.
- `_includes/head_custom.html`: carga condicional del JavaScript.
- `bloque3.md`: acceso desde el índice y desde la sección 3.5.

## Demostraciones

1. ROCKET LAB 3D — Claude Artifacts.
2. ROCKET LAB 3D — Gemini Canvas.
3. AeroVectra 3D — Google AI Studio Build.
4. PC LAB 3D — Claude Artifacts.
5. PC LAB 3D — Gemini Canvas.
6. WEB LAB 3D — Gemini Canvas.

Las URL se mantienen en `_data/artifact_projects.yml`. Los enlaces externos se abren con `noopener noreferrer`. No se usan iframes ni proxies.

## Añadir una demostración

1. Copiar una captura original autorizada a `assets/img/artifacts/` y optimizar una copia para web.
2. Copiar las fuentes descargables, sin alterarlas, a `assets/downloads/artifacts/`.
3. Añadir un objeto a `_data/artifact_projects.yml` con identificador único, plataforma, categoría, descripción, funciones, URL real, imagen, texto alternativo y fuentes existentes.
4. Usar una clave de plataforma ya estilizada (`claude`, `gemini`, `ai-studio`) o añadir el estilo correspondiente.
5. Construir el sitio, revisar la tarjeta con teclado y probar la URL en una sesión equivalente a la del alumnado.

## Capturas utilizadas

- `Cloude.png` → `rocket-claude.png`
- `Gemini 2.png` → `rocket-gemini.png`
- `googleIAStudio.png` → `google-ai-studio-build.png`
- `GOOGLEAI AEROVECTRA 3D.png` → `aerovectra-ai-studio.png`
- `PC3 cloude.png` → `pc-claude.png`
- `gemini PC lab 3.png` → `pc-gemini.png`

No se localizó una captura original de WEB LAB 3D; la tarjeta lo indica explícitamente y no crea una imagen sustitutiva.

## Actualización de contenido

- Modificar textos pedagógicos en `bloque3-artifacts.md`.
- Modificar enlaces, etiquetas y fuentes en `_data/artifact_projects.yml`.
- Mantener la nota de procedencia si se incorporan prompts: los tres guiones actuales son reconstrucciones didácticas, no los prompts originales.
- Si se añade una publicación independiente de AI Studio, etiquetarla de forma distinta al enlace de proyecto y verificar ambas URL.

## Límites conocidos

- Las plataformas pueden exigir inicio de sesión y cambiar interfaz, cuotas o permisos.
- No se localizó `Bloque3_Artifacts_documento_maestro_v6.md`, `Bloque3_Artifacts_materiales_v6.zip` ni `Bloque3_Demos_en_vivo.html`.
- Tampoco se localizaron prompts originales completos ni código de las versiones Gemini de Rocket/PC o de AeroVectra.
- Los HTML descargables no se ejecutan embebidos: deben revisarse en un entorno controlado y dependen de recursos externos.
- El curso no recoge entregas ni datos personales; la actividad describe una entrega pedagógica sin añadir servicios externos.

## Lista de verificación de mantenimiento

- Compilación Jekyll sin errores.
- Seis tarjetas presentes y URL coincidentes con la documentación.
- Copiado de los cuatro bloques disponible con JavaScript y contenido legible sin él.
- Descargas resueltas a archivos reales.
- Capturas visibles, ampliables y con alternativa textual.
- Filtros operables con teclado y estados `aria-pressed` correctos.
- Revisión en anchos móvil, tableta y escritorio.
- Revisión de foco, contraste, encabezados, tablas y movimiento reducido.

## Comprobaciones de esta integración (28-10-2026)

- Compilación completa con Jekyll 3.10.0 y el tema remoto Just the Docs: correcta.
- Sintaxis de `assets/js/artifacts-lab.js` con `node --check`: correcta.
- `git diff --check`: sin errores de espacios ni conflictos de parche.
- HTML compilado: 6 tarjetas, 4 controles de copia, identificadores sin duplicados.
- Resolución estática: 45 rutas locales y 36 anclas internas comprobadas, sin destinos ausentes.
- Los seis enlaces externos responden HTTP 200. Los enlaces de Gemini redirigen a su ruta pública; el proyecto de AI Studio redirige al inicio de sesión, por lo que requiere autenticación.
- Las opciones actuales de creación, edición y compartición se contrastaron con la ayuda oficial de Anthropic y Google. Google AI Studio documenta ZIP, sincronización con GitHub y publicación mediante Cloud Run; no se presupone que AeroVectra esté desplegado.
- No se pudo ejecutar una prueba visual automatizada: el navegador integrado no estaba disponible en el entorno. La compilación Sass y el HTML final sí quedaron verificados; se recomienda una revisión visual humana antes de publicar.
