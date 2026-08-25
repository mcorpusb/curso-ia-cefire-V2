# AUDITORÍA COMPLETA · Versión 2 del curso

**Curso:** Herramientas de Inteligencia Artificial para Docentes  
**Código V1:** 26IA92IN017  
**Rama de trabajo:** `curso-ia-cefire-v2`  
**Fecha de auditoría:** agosto 2026  
**Auditado por:** GitHub Copilot

---

## ÍNDICE

1. [Resumen ejecutivo](#1-resumen-ejecutivo)
2. [Infraestructura técnica](#2-infraestructura-técnica)
3. [Archivos de contenido principal](#3-archivos-de-contenido-principal)
4. [Archivos de actividades por etapa](#4-archivos-de-actividades-por-etapa)
5. [Archivos de recursos y ampliación](#5-archivos-de-recursos-y-ampliación)
6. [Imágenes](#6-imágenes)
7. [Navegación y enlaces](#7-navegación-y-enlaces)
8. [Sistema visual y componentes HTML/CSS](#8-sistema-visual-y-componentes-htmlcss)
9. [Herramientas mencionadas en V1](#9-herramientas-mencionadas-en-v1)
10. [Hilos transversales en V1](#10-hilos-transversales-en-v1)
11. [Problemas detectados](#11-problemas-detectados)
12. [Archivos nuevos necesarios en V2](#12-archivos-nuevos-necesarios-en-v2)
13. [Resumen clasificado por archivo](#13-resumen-clasificado-por-archivo)

---

## 1. RESUMEN EJECUTIVO

### Lo que funciona bien en V1

- **Orientación práctica real**: el curso no enseña herramientas abstractamente, sino aplicadas a tareas docentes reales (actas, correos, rúbricas, fichas de comprensión).
- **Entorno GVA como eje**: la prioridad de Copilot con cuenta `@edu.gva.es` es un acierto pedagógico y de privacidad que debe mantenerse.
- **Sistema de release gates**: mecanismo elegante para desbloquear contenido por fechas. Bien implementado y reutilizable.
- **Componentes HTML/CSS accesibles**: `callout`, `tool-card`, `flujo-horizontal`, `tres-columnas`, `que-si-no` son buenos patrones visuales.
- **Actividades por etapa**: idea excelente. El problema es la duplicación excesiva de contenido casi idéntico entre páginas.
- **Seguridad y privacidad como criterio permanente**: bien integrado en todo el curso.
- **LOMLOE, DUA, NEAE**: tratados de forma práctica, no decorativa.
- **Estructura progresiva**: de lo más cotidiano a lo más avanzado.
- **Vibe coding educativo**: sección pionera y bien planteada.

### Problemas principales que V2 debe corregir

1. **Desactualización de herramientas**: varias páginas describen estados de herramientas de 2024-2025 presentándolos como actuales.
2. **NotebookLM infravalorado**: aparece como herramienta secundaria en Bloque 2. En 2026 merece ser eje central del Bloque 2.
3. **Kimi desactualizado**: el curso menciona "Kimi Claw" que es nomenclatura obsoleta. Kimi ha evolucionado enormemente.
4. **Catálogo de herramientas vs. flujo docente**: algunas páginas listan muchas herramientas sin guiar al docente sobre cuándo elegir cada una.
5. **Duplicación de actividades**: cinco páginas de actividades por etapa en Bloque 3 con estructuras casi idénticas. V2 debe usar el patrón RETO COMÚN → VARIANTE POR ETAPA.
6. **Navegación confusa**: algunos archivos tienen `nav_order` sin `parent` coherente, y la sección "Novedades" mezcla contenidos de diferente naturaleza.
7. **Datos frágiles incrustados**: fechas de sesiones (abril-mayo 2026), nombres de ediciones, límites exactos de herramientas escritos en el cuerpo del texto.
8. **Imágenes que envejecen**: capturas de pantalla de interfaces que ya han cambiado.
9. **Módulo 0 incompleto**: falta la perspectiva de 2026: modelos de razonamiento, agentes autónomos, Deep Research, EU AI Act.
10. **Grok**: herramienta marginal que en V1 aparece en comparativas. Evaluar si merece espacio en V2.

---

## 2. INFRAESTRUCTURA TÉCNICA

### `_config.yml`
**Clasificación: ACTUALIZAR**

```yaml
# Estado actual:
title: "IA Generativa para Docentes (26IA92IN017)"
# El código de curso es específico de una edición.
```

**Problemas:**
- El título incluye el código de edición (`26IA92IN017`), que cambiaría en cada edición.
- Conviene separar el código de curso del título del sitio.

**Acción V2:** Mover el código de edición a un archivo de datos centralizado (`_data/edicion.yml` o similar). El título del sitio sería genérico: `"IA para Docentes · CEFIRE"`.

---

### `_includes/head_custom.html`
**Clasificación: CONSERVAR**

El sistema de release gates está bien implementado. Inyecta datos de páginas vía Liquid y carga `release-gates.js`. No requiere cambios.

---

### `assets/js/release-gates.js`
**Clasificación: CONSERVAR**

Lógica robusta: oculta páginas bloqueadas del sidebar, protege URLs directas, programa auto-refresh, hereda fechas de padres a hijos. Bien documentado y sin vulnerabilidades obvias.

---

### `_sass/custom/custom.scss`
**Clasificación: ACTUALIZAR**

**Lo que funciona bien:**
- Restauración de listas (`list-style: disc/decimal`) sobre Just the Docs.
- Sidebar con texto largo legible (`white-space: normal`).
- Transición suave del sidebar durante carga de release gates.

**Problemas:**
- Los componentes visuales (`callout`, `tool-card`, `flujo-horizontal`, `tres-columnas`, `que-si-no`, `vibe-hero`) están definidos en línea en el HTML de cada página, no en el SCSS centralizado.
- Esto genera inconsistencias visuales entre páginas.

**Acción V2:** Extraer todos los estilos de componentes al SCSS centralizado. Crear un sistema de diseño coherente.

---

## 3. ARCHIVOS DE CONTENIDO PRINCIPAL

### `index.md` — Página de inicio
**Clasificación: ACTUALIZAR**

**Conservar:**
- Presentación del curso: tono claro y accesible.
- Sección "Qué te llevarás": bien enfocada.
- Bloque de uso seguro y advertencia de datos.
- Actividad de primer contacto con Copilot.
- Sección de primeros pasos.

**Actualizar / Eliminar:**
- **Tabla de sesiones con fechas específicas** (22/04/2026, 29/04/2026…): estas fechas son de una edición concreta. Deben moverse a un archivo separado o a una sección claramente delimitada como "Esta edición".
- La imagen `banner-curso-ia.png` probablemente esté bien, verificar que no contiene texto con fechas.
- `ruta-ia-docentes.png`: revisar si el diagrama sigue reflejando la estructura de V2.

**Acción V2:** Separar datos de edición (fechas, código, sesiones) del contenido pedagógico permanente.

---

### `guia-didactica.md` — Guía didáctica
**Clasificación: ACTUALIZAR**

**Conservar:**
- Filosofía del curso: "no formamos especialistas en IA, formamos docentes con criterio".
- Competencias docentes desarrolladas (6 competencias bien descritas).
- Metodología: demostración, práctica guiada, reflexión, transferencia.
- Marco LOMLOE, DUA, RGPD.

**Actualizar:**
- Tabla de datos del curso: código, fechas, horas (datos de edición → centralizar).
- Objetivos: algunos mencionan herramientas específicas que pueden haber cambiado (Kimi, Grok).
- Añadir mención a EU AI Act como marco regulatorio relevante.
- Revisar la mención a "NotebookLM" en los objetivos: debe aparecer con más peso en V2.

---

### `modulo-0-que-es-la-ia.md` — Módulo 0
**Clasificación: REESCRIBIR**

**Estado actual:**
- Buena base conceptual: IA vs. programa tradicional, aprendizaje por patrones, predicción.
- Escrito en clave de 2023-2024 (enfoque en LLMs de texto, comparaciones con calculadoras).

**Lo que falta para 2026:**
- **Modelos multimodales**: texto + imagen + audio + vídeo en una misma conversación.
- **Modelos de razonamiento** (o1, Gemini 2.0 Flash Thinking, DeepSeek R1, Kimi k1.5): explican su proceso antes de responder. Diferencia con modelos estándar.
- **Búsqueda en tiempo real vs. conocimiento de entrenamiento**: diferencia crítica para docentes.
- **Agentes autónomos**: IA que ejecuta tareas encadenadas sin supervisión constante.
- **Deep Research**: herramienta que investiga autónomamente y produce informes.
- **Contexto largo**: qué significa y para qué sirve en educación.
- **Alucinaciones**: cómo reconocerlas y por qué ocurren.
- **EU AI Act**: qué implica para docentes y centros educativos.
- **Criterio docente**: cuándo NO usar IA. Esto es ausente en V1 y fundamental en V2.
- **Sesgo algorítmico**: ejemplos educativos concretos.

**Acción V2:** Reescribir completamente expandiendo de ~5 secciones a ~10, manteniendo el tono accesible y los ejemplos pedagógicos.

---

### `bloque1.md` — Bloque 1: IA Colaborativa y Gestión GVA
**Clasificación: ACTUALIZAR**

**Conservar:**
- Enfoque en Copilot como herramienta prioritaria para cuentas GVA.
- Sección 1.1: acceso y protección de datos. Clara y útil.
- Sección 1.2: redacción de actas. Excelente ejemplo práctico.
- Sección 1.3: correos electrónicos. Bien planteado.
- Estructura de prompts: versión básica → versión avanzada → ejemplo real.
- Comparativas de herramientas (tablas).
- Accesibilidad integrada en las actividades.

**Actualizar:**
- Estado actual de **Copilot con cuenta GVA en 2026**: qué funciones están realmente disponibles (Copilot Chat, Microsoft 365 Copilot, Copilot Pages, análisis de archivos, búsqueda web, generación de imágenes, funciones dentro de Word/PPT/Excel/Outlook/OneNote/Teams).
- Las comparativas con **Kimi** y **Grok** usan información de 2024-2025. Actualizar o eliminar Grok si no aporta valor docente claro.
- Añadir **Gemini** como comparativa más relevante que Grok.
- Revisar si las tablas comparativas son precisas en 2026.
- Reorganizar estructura del bloque siguiendo el nuevo esquema V2.

**Acción V2:** Actualizar herramientas, consolidar la comparativa, separar datos de edición.

---

### `bloque2.md` — Bloque 2: Prompting avanzado y gestión documental
**Clasificación: REESCRIBIR**

**Estado actual:**
- Bloque 2 tiene dos ejes: prompting avanzado + NotebookLM.
- El prompting está bien explicado con la estructura ROL+CONTEXTO+TAREA+FORMATO+RESTRICCIONES.
- NotebookLM aparece en la segunda mitad como herramienta para cargar documentos curriculares.

**Problema estructural:**
En V2, Bloque 2 se convierte en el bloque de **investigación y gestión del conocimiento**, con NotebookLM como eje central. La estructura actual no refleja ese protagonismo.

**Conservar:**
- La estructura del "Prompt Pedagógico" (ROL+CONTEXTO+TAREA+FORMATO+RESTRICCIONES). Es pedagógicamente sólida.
- La Actividad 2.1: construcción progresiva de prompts. Excelente.
- La idea de cargar currículo oficial en NotebookLM.

**Reescribir:**
- Enseñar prompting principalmente como **ciclo iterativo**: PEDIR → OBSERVAR → EVALUAR → REFINAR → VERIFICAR → UTILIZAR. No solo como "fórmula mágica".
- Eliminar la enseñanza de chain-of-thought como técnica necesaria para el docente.
- Expandir NotebookLM a sección principal con todas sus capacidades 2026: Audio Overviews, Video Overviews (si disponible), mapas mentales, guías de estudio, cuestionarios, flashcards, infografías, presentaciones, Deep Research.
- Diseñar el flujo educativo completo: FUENTES → INVESTIGACIÓN → COMPRENSIÓN → VERIFICACIÓN → TRANSFORMACIÓN → MATERIAL EDUCATIVO.
- Clarificar las **tres modalidades de IA** que el docente debe distinguir: (1) conocimiento de entrenamiento, (2) búsqueda en tiempo real, (3) fundamentada en fuentes proporcionadas.

---

### `bloque3.md` — Bloque 3: Generación Multimodal
**Clasificación: ACTUALIZAR + REESTRUCTURAR**

**Estado actual:**
- Cubre: presentaciones (Gamma + Copilot), cómics (múltiples herramientas), audio (ElevenLabs, etc.), vídeo (HeyGen, Synthesia).
- Demasiadas herramientas por categoría sin criterio claro de selección.
- La tabla de herramientas para cómics tiene 10 opciones: excesivo.

**Conservar:**
- Prompts de Oro para presentaciones: bien estructurados y reutilizables.
- La idea del cómic educativo y su proceso paso a paso.
- La sección de Google Labs como exploración de herramientas experimentales.

**Actualizar:**
- **Seleccionar UNA herramienta principal gratuita + 1-2 alternativas** por categoría (imágenes, presentaciones, audio, vídeo).
- Actualizar estado de **Gamma en 2026**: planes, marcas de agua, funciones educativas.
- Actualizar **generación de imágenes**: estado de Copilot (DALL·E integrado en GVA), Gemini Imagen, ChatGPT imagen.
- Actualizar **ElevenLabs**, **HeyGen**, **Synthesia**: cambios de precios y funciones.
- Añadir **Napkin AI**: herramienta para transformar texto en diagramas/esquemas (muy útil para docentes).
- Actualizar **Canva IA**: funciones actuales.

**Reestructurar:**
- Reducir la tabla de herramientas para cómics de 10 a 3-4 opciones con criterio claro.
- Añadir tabla "¿Qué herramienta uso para...?" como guía de decisión.

---

### `bloque4.md` — Bloque 4: Evaluación y Personalización
**Clasificación: ACTUALIZAR**

**Estado actual:**
- Buen contenido sobre rúbricas LOMLOE, retroalimentación, adaptaciones curriculares.
- Sólido pedagógicamente. Es la parte más estable del curso.

**Conservar:**
- Cadena lógica LOMLOE (competencias → criterios → indicadores → instrumentos).
- Prompts de Oro para rúbricas analíticas y holísticas.
- Retroalimentación motivadora: excelente estructura (fortalezas + mejora + siguiente paso + cierre).
- Sección de listas de cotejo.

**Actualizar:**
- Añadir sección sobre **evaluación en un contexto donde existe IA**: cómo diseñar tareas que no puedan ser resueltas trivialmente por la IA.
- Añadir sección sobre **alfabetización en IA del alumnado**: enseñar al alumnado a usar la IA con criterio.
- Actualizar referencias a **Gems/GPTs/agentes personalizados** en contexto 2026.
- Añadir **vibe coding educativo** como actividad de creación final del bloque.
- Revisar las comparativas con Kimi y Grok: actualizar o eliminar según relevancia.

---

## 4. ARCHIVOS DE ACTIVIDADES POR ETAPA

### `bloque1-actividad-infantil.md`, `bloque1-actividad-primaria.md`, `bloque1-actividad-secundaria.md`, `bloque1-actividad-fp.md`, `bloque1-actividad-eoi.md`
**Clasificación: FUSIONAR + REESCRIBIR**

**Problema:** Cinco páginas con estructura casi idéntica. El 70% del contenido se repite.

**Acción V2:** Usar el patrón recomendado:
```
RETO COMÚN → VARIANTE POR ETAPA → PRODUCTO → PROCESO CON IA → REVISIÓN → REFLEXIÓN
```
Una única página de actividad por bloque con secciones acordeón o pestañas por etapa. Alternativa: mantener páginas separadas pero con estructura compartida y solo las diferencias de etapa escritas.

---

### `bloque3-actividad-infantil.md`, `bloque3-actividad-primaria.md`, `bloque3-actividad-secundaria.md`, `bloque3-actividad-fp.md`, `bloque3-actividad-eoi.md`
**Clasificación: FUSIONAR + REESCRIBIR**

Mismo problema que las actividades del Bloque 1. La actividad de Secundaria está bien desarrollada (prompt de presentación + cómic + ejemplo real con enlace a Gamma). Las demás son más superficiales.

**Acción V2:** Tomar la estructura de la actividad de Secundaria como modelo y adaptarla a cada etapa de forma eficiente.

---

## 5. ARCHIVOS DE RECURSOS Y AMPLIACIÓN

### `bloque1-seguridad.md` — Uso seguro y protección de datos
**Clasificación: REUBICAR + ACTUALIZAR**

**Estado actual:** Página independiente con nav_order:6, sin front matter `parent`.

**Problema:** La seguridad no debe ser una página separada a la que "ir a buscar". Debe ser un hilo transversal presente en cada bloque.

**Acción V2:**
- Mantener una página de referencia centralizada sobre privacidad y uso seguro.
- Integrar los componentes "qué sí / qué no" como callouts en cada bloque donde sea relevante.
- Añadir referencia al **EU AI Act** y sus implicaciones para centros educativos.

---

### `bloque1-accesibilidad-ia.md` — IA para accesibilidad e inclusión
**Clasificación: REUBICAR + CONSERVAR**

**Estado actual:** Página independiente con buen contenido y excelentes componentes HTML accesibles (flujo horizontal, tres columnas, tarjetas).

**Problema:** Igual que seguridad: la accesibilidad debe ser transversal, no un destino separado.

**Acción V2:**
- Mantener la página como referencia.
- Integrar el componente "flujo-horizontal" de 4 pasos en cada actividad donde aplique.
- Los prompts de accesibilidad son muy buenos: mantenerlos y ampliarlos.

---

### `bloque1-agentes-ia.md` — Agentes de IA para docentes
**Clasificación: ACTUALIZAR + REUBICAR**

**Estado actual:** Muy buena explicación de qué es un agente, diferencia entre agente real/Gem/GPT/modo agente. Tabla clara. Ejemplos por etapa. Imágenes: `Agente_IA.png` y los SVG en `assets/img/agentes/`.

**Actualizar:**
- Estado de **Agent Builder / Copilot Studio con cuenta GVA** en 2026.
- Estado de **Gemini Gems** en 2026.
- Estado de **GPTs de ChatGPT** en 2026.
- Añadir **Kimi Agent** y **Agent Swarm** como ejemplo de agentes autónomos.
- La duplicación del párrafo "Un agente es diferente: es como si esa misma persona..." aparece dos veces seguidas en el HTML. Bug que corregir.

**Reubicar:** En V2 pertenece a Bloque 4 (Diseñar, personalizar, evaluar y crear), no a Bloque 1.

---

### `bloque1-comic.md` — Cómic
**Clasificación: REUBICAR + CONSERVAR**

**Estado actual:** Guía paso a paso para crear cómics con IA. Sin front matter completo (no tiene `layout`, `title`, `parent`, `nav_order`). No aparece bien en la navegación.

**Acción V2:**
- Mover a Bloque 3 (Generación Multimodal) con front matter correcto.
- Fusionar con la sección de cómics de `bloque3.md` para evitar duplicación.

---

### `bloque1-novedades-ia.md` — Novedades relevantes en IA
**Clasificación: ELIMINAR DE V2 (como página independiente)**

**Estado actual:** Menciona "Kimi Claw" (nomenclatura obsoleta), generalidades sobre asistentes multimodales y consejos genéricos. El contenido es demasiado vago para ser útil en 2026.

**Acción V2:** El contenido relevante de esta página debe integrarse en el Módulo 0 reescrito (estado actual de la IA en 2026). No tiene sentido como página independiente en "Novedades".

---

### `bloque1-novedades-chatgpt.md` — Novedades de ChatGPT
**Clasificación: REESCRIBIR**

**Estado actual:** Centrado en la generación de imágenes de ChatGPT. Prompts útiles pero el contexto es 2024.

**Acción V2:** Reescribir como "ChatGPT en 2026": modelo actual, funciones gratuitas vs. de pago, generación de imágenes, análisis de documentos, canvas, búsqueda en tiempo real, proyectos, memoria. Integrar en el Bloque 1 como parte de la comparativa de herramientas generalistas.

---

### `bloque1-gemma4.md` — Gemma 4
**Clasificación: REUBICAR + ACTUALIZAR**

**Estado actual:** Artículo sobre Gemma 4 como modelo on-device. Interesante para privacidad y uso sin conexión. Ubicado en "Novedades".

**Problema:** No encaja bien en el flujo del curso como "novedad". Es un concepto relevante pero periférico.

**Acción V2:** Mover a una sección de Módulo 0 o Bloque 1 como "IA en local: privacidad y control". Actualizar con el estado de Gemma en 2026 (Gemma 3, AI Edge Gallery).

---

### `novedades.md` — Sección Novedades
**Clasificación: ELIMINAR DE V2 (como sección)**

**Estado actual:** Página contenedor para `bloque1-novedades-ia.md`, `bloque1-novedades-chatgpt.md`, `bloque1-gemma4.md`.

**Problema:** La sección "Novedades" mezcla contenidos de naturaleza diferente y no tiene un lugar claro en la progresión pedagógica del curso.

**Acción V2:** Disolver la sección. Reubicar cada pieza de contenido donde corresponda pedagógicamente. Las actualizaciones de herramientas van a `herramientas-ia-actualizadas.md`.

---

### `vibe-coding-educativo.md` — Vibe Coding Educativo
**Clasificación: CONSERVAR + ACTUALIZAR**

**Estado actual:** Excelente introducción pedagógica al vibe coding. Buena comparativa agente vs. vibe coding. Componentes visuales propios (`vibe-hero`, `callout--reflexion`).

**Actualizar:**
- Herramientas de vibe coding en 2026: estado de **Bolt**, **Lovable**, **Cursor**, **Replit**, **Claude** para vibe coding, **Kimi** (creación web).
- Añadir tabla de herramientas con criterio: gratuita, facilidad, tipo de output.
- Ejemplos de aplicaciones educativas reales creadas con vibe coding.

---

### `banco-gems-gpts-educativos.md` — Banco de Gems/GPTs
**Clasificación: ACTUALIZAR**

**Estado actual:** Buena estructura de banco de recursos: tabla de niveles de uso (usar/copiar/adaptar/crear), advertencias de privacidad, rúbrica de evaluación.

**Actualizar:**
- Estado actual de Gems (Gemini) y GPTs (ChatGPT) en 2026.
- Añadir recursos de Copilot Agents si disponibles con cuenta GVA.
- Revisar los enlaces del banco (algunos pueden estar rotos o haber cambiado).
- Añadir sección de recursos de **NotebookLM** (notebooks compartidos como recurso educativo).

---

### `google-labs-experimentos-ia-aula.md` — Google Labs
**Clasificación: ACTUALIZAR**

**Estado actual:** Buen inventario de experimentos de Google Labs con utilidad educativa. Bien estructurado por categorías.

**Actualizar:**
- Algunos experimentos pueden haber desaparecido o cambiado.
- Google Labs ha evolucionado: Whisk, Flow, y otros experimentos de imagen y vídeo.
- Añadir advertencia explícita sobre disponibilidad por región/país.

---

### `primeros-pasos/identidad-digital.md` — Identidad digital
**Clasificación: CONSERVAR + ACTUALIZAR**

**Estado actual:** Buena introducción a la identidad digital docente. Incluye caso real de 2026 (vulnerabilidad en Lilli). Imágenes: `identidad-digital-1.png`, `flujo-identidad.svg`.

**Actualizar:**
- Verificar que el caso Lilli sigue siendo relevante y preciso.
- Añadir mención al acceso a herramientas de IA con cuenta institucional.

---

## 6. IMÁGENES

### Inventario y clasificación

| Archivo | Descripción | Clasificación | Justificación |
|:--------|:------------|:--------------|:--------------|
| `banner-curso-ia.png` | Banner principal del curso | CONSERVAR o REDISEÑAR | Verificar que no contiene texto con fechas específicas de edición |
| `portada-curso-ia-docentes.png` | Portada (actualmente comentada en index.md) | ELIMINAR | Está comentada y no se usa |
| `ruta-ia-docentes.png` | Diagrama de ruta de aprendizaje | REDISEÑAR | Debe reflejar la nueva estructura V2 |
| `estructura-curso-ia.png` | Esquema de 4 bloques | REDISEÑAR | Debe actualizarse con la nueva estructura V2 |
| `anatomia-prompt.png` | Anatomía del prompt pedagógico | CONSERVAR | Diagrama conceptual duradero. Verificar que la estructura coincide con V2 |
| `ciclo-aprendizaje-ia.png` | Ciclo de aprendizaje con IA | CONSERVAR | Diagrama conceptual. Verificar contenido |
| `prompt-estructura.png` | Estructura del prompt | FUSIONAR con anatomia-prompt o ELIMINAR | Posible duplicación |
| `Agente_IA.png` | Infografía de agente de IA | CONSERVAR | Conceptual y vigente |
| `agentes/agente-como-asistente.svg` | SVG agente como asistente | CONSERVAR | Diagrama conceptual en SVG, formato duradero |
| `agentes/flujo-creacion-agente.svg` | SVG flujo de creación de agente | CONSERVAR | Ídem |
| `Marco-unesco.png` | Marco UNESCO | CONSERVAR | Referencia normativa estable |
| `evaluacion-proceso-vs-producto.png` | Evaluación proceso vs. producto | CONSERVAR | Concepto pedagógico duradero |
| `flujo-identidad.svg` | Flujo de acceso digital | CONSERVAR | SVG conceptual |
| `identidad-digital.png` / `.svg` / `-1.png` | Identidad digital | CONSERVAR (SVG) / ELIMINAR duplicados PNG | Mantener SVG, revisar si los PNG son distintos o redundantes |
| `uso-seguro-ia.png` / `.svg` | Uso seguro de la IA | CONSERVAR (SVG) / REVISAR PNG | Mantener SVG |
| `cifrado-datos.png` / `.svg` / `cifrado-datos-1.png` | Cifrado de datos | REVISAR | ¿Se usan en el curso actual? No aparecen referenciados en los archivos leídos |
| `prompt-injection.svg` | Prompt injection | REVISAR | ¿Se usa? No aparece referenciado en el contenido leído |
| `Ballena_ChatGPT.png` | Imagen generada por ChatGPT | REVISAR | Imagen ilustrativa, verificar uso |
| `Comic_*.png` (5 imágenes) | Cómics por etapa | CONSERVAR | Ejemplos útiles para las actividades de cómic |
| `Comparar_ChatGPT.png` | Comparativa ChatGPT | REVISAR | Posible captura de pantalla que envejece |
| `Cuento_infantil.png` | Cuento infantil generado | CONSERVAR | Ejemplo práctico ilustrativo |
| `Gemini_cuento infantil.png` | Cuento generado con Gemini | CONSERVAR | Ejemplo práctico ilustrativo |

### Imágenes nuevas necesarias en V2

- Diagrama de flujo educativo NotebookLM: FUENTES → INVESTIGACIÓN → COMPRENSIÓN → VERIFICACIÓN → TRANSFORMACIÓN → MATERIAL EDUCATIVO
- Árbol de decisión "¿Qué herramienta uso para...?" (visual)
- Diagrama: tres tipos de IA (conocimiento entrenado / búsqueda web / fundamentada en fuentes)
- Mapa conceptual del ciclo de prompting iterativo (PEDIR → OBSERVAR → EVALUAR → REFINAR → VERIFICAR → UTILIZAR)
- Diagrama actualizado de estructura del curso V2

**Prioridad de formato:** SVG > PNG generado (no captura). Toda imagen debe tener `alt` descriptivo.

---

## 7. NAVEGACIÓN Y ENLACES

### Problemas de navegación detectados

1. **`bloque1-comic.md`**: sin front matter (sin `layout`, `title`, `parent`, `nav_order`). No aparece correctamente en el sidebar.

2. **`bloque1-novedades-ia.md` y `bloque1-novedades-chatgpt.md` y `bloque1-gemma4.md`**: usan `parent: "Novedades"`. La sección Novedades no tiene relación clara con la estructura del curso.

3. **`bloque1-seguridad.md`**: `nav_order: 6` sin `parent`. Aparece como elemento independiente.

4. **`bloque1-accesibilidad-ia.md`**: `nav_order: 7` sin `parent` claro.

5. **`bloque4.md`**: `nav_order: 5` — mismo valor que `bloque3.md`. Posible conflicto de orden.

6. **Actividades de Bloque 1**: nav_order muy alto (11) que puede no garantizar el orden correcto.

### Revisión de enlaces

**Internos que verificar:**
- `primeros-pasos/identidad-digital.md` → referenciado desde index.md con ruta relativa.
- Actividades de Bloque 3 referenciadas desde `bloque3.md`.
- Imágenes referenciadas con `{{ '/assets/img/...' | relative_url }}` vs. `assets/img/...` (inconsistencia detectada).

**Externos que verificar:**
- `https://gamma.app/workspaces/ef1fs84es7tf0g1/join?code=6esccgwc6yh76gt` — enlace de invitación a Gamma: probablemente caducado.
- Los enlaces a presentaciones en Google Docs en `bloque3-actividad-secundaria.md` pueden haber expirado.
- `https://labs.google/` — verificar disponibilidad de cada experimento.
- `https://aules.edu.gva.es` — enlace aux en `_config.yml`. Estable.
- `https://copilot.microsoft.com/` — estable.

---

## 8. SISTEMA VISUAL Y COMPONENTES HTML/CSS

### Componentes existentes

| Componente | Dónde se define | Estado | Acción V2 |
|:-----------|:----------------|:-------|:----------|
| `.callout` (idea, alerta, reflexión) | Inline en HTML + parcialmente en SCSS | Inconsistente | Centralizar en SCSS |
| `.tool-card` + `.tool-grid` | Inline en HTML | Usado en múltiples páginas | Centralizar en SCSS |
| `.flujo-horizontal` | Inline en HTML | Bien diseñado y accesible | Centralizar en SCSS |
| `.tres-columnas` | Inline en HTML | Buen patrón | Centralizar en SCSS |
| `.que-si-no` | Inline en HTML | Muy útil para privacidad | Centralizar en SCSS |
| `.vibe-hero` | Inline en `vibe-coding-educativo.md` | Específico de esa página | Evaluar si generalizar |
| `.release-gate` | JS + SCSS | Funciona bien | Conservar |

### Nuevos componentes para V2

Según las especificaciones de V2, añadir al SCSS centralizado:

```
💡 Idea clave         → .callout--idea (ya existe, centralizar)
🧪 Pruébalo           → .callout--prueba (crear)
🤖 Prompt             → .callout--prompt (crear o adaptar existente)
🔒 Privacidad         → .callout--privacidad (crear)
🔎 Verifica           → .callout--verifica (crear)
♿ Accesibilidad       → .callout--accesibilidad (crear)
🏫 Al aula            → .callout--aula (crear)
⚖️ Compara            → .callout--compara (crear)
📌 Recuerda           → .callout--recuerda (crear)
```

### Accesibilidad web

**Jerarquía de encabezados:** En general correcta. Algunos archivos empiezan con `##` en vez de `#` (revisar).

**Textos alternativos:** Presentes en la mayoría de imágenes. Algunos PNG tienen `alt=""` vacío.

**Contraste:** Just the Docs tiene buen contraste por defecto. Los callouts con fondo `#f5f7fa` tienen ratio suficiente.

**Tablas:** Algunas tablas son muy anchas para móvil (especialmente las comparativas de herramientas con muchas columnas). En V2 usar `overflow-x: auto` o rediseñar para móvil.

**Emojis decorativos:** Hay emojis en encabezados (`♿`, `⚠️`). En V2, añadir `aria-hidden="true"` a emojis puramente decorativos.

**Navegación por teclado:** Just the Docs tiene navegación básica. No hay skip links implementados. Añadir en V2.

---

## 9. HERRAMIENTAS MENCIONADAS EN V1

| Herramienta | Estado en V1 | Estado en 2026 | Acción V2 |
|:------------|:-------------|:---------------|:----------|
| **Microsoft Copilot Chat** (@edu.gva.es) | Eje del curso, bien descrito | Sigue siendo el eje institucional para GVA. Verificar funciones habilitadas en 2026 | ACTUALIZAR en detalle |
| **Microsoft 365 Copilot** (Word, PPT, Excel…) | Mencionado | Verificar qué está incluido en la licencia GVA vs. qué requiere licencia adicional | ACTUALIZAR con distinción clara |
| **Gemini** (Google) | Segunda herramienta de referencia | Gemini 2.0/2.5 Pro con Deep Research, Canvas, Gems, generación de imágenes (Imagen 3), multimodalidad avanzada | ACTUALIZAR en profundidad |
| **NotebookLM** | Herramienta de Bloque 2 | Herramienta madura con Audio Overviews, mapas mentales, cuestionarios, infografías, presentaciones | ACTUALIZAR como eje central de Bloque 2 |
| **ChatGPT** | Mencionado en comparativas | Sigue siendo plataforma generalista principal. Actualizar funciones gratuitas vs. de pago en 2026 | ACTUALIZAR |
| **Kimi** (Moonshot AI) | "Kimi Claw" (nomenclatura obsoleta) | Kimi K2, Deep Research, Agent, Agent Swarm, creación de apps web, hojas de cálculo, presentaciones, vibe coding | REESCRIBIR |
| **Grok** (xAI) | En comparativas administrativas | Utilidad educativa limitada para docentes de GVA. Privacidad cuestionable | EVALUAR eliminar o reducir presencia |
| **Gamma** | Herramienta principal de presentaciones | Actualizar plan, marca de agua, límites gratuitos | ACTUALIZAR |
| **Canva** | Mencionado | Actualizar funciones de IA (Magic Studio, generación de imágenes, vídeo) | ACTUALIZAR |
| **ElevenLabs** | Audio | Actualizar planes y límites gratuitos | ACTUALIZAR |
| **HeyGen** | Vídeo con avatares | Actualizar planes y funciones | ACTUALIZAR |
| **Synthesia** | Vídeo con avatares | Actualizar planes y funciones | ACTUALIZAR |
| **Napkin AI** | Mencionado en tabla de herramientas | Herramienta para diagramas desde texto. Evaluar utilidad real | CONSERVAR con revisión |
| **Google Labs** | Página dedicada | Algunos experimentos han cambiado. Whisk, Flow, etc. | ACTUALIZAR |
| **Pixton** | Mencionado en cómics | Estado actual: freemium. Evaluar si sigue siendo accesible para docentes | REVISAR |
| **Gemma 4** | Página dedicada en Novedades | Actualizar con estado 2026 (Gemma 3 / Google AI Edge Gallery) | ACTUALIZAR, REUBICAR |
| **NotebookLM** (Deep Research) | No mencionado en V1 | Función de investigación autónoma muy relevante para docentes | CREAR contenido nuevo |

---

## 10. HILOS TRANSVERSALES EN V1

| Hilo | Presencia en V1 | Problema | Acción V2 |
|:-----|:----------------|:---------|:----------|
| 🔒 **Privacidad** | Bien presente en todos los bloques mediante avisos | Algo repetitivo, siempre el mismo aviso. No evoluciona | Mantener como transversal pero añadir matices por herramienta y contexto |
| 🔎 **Verificación** | Presente pero como nota al pie | No se enseña un proceso de verificación sistemático | Integrar en Bloque 2 como competencia central |
| ♿ **Accesibilidad y DUA** | Tiene página propia + integrada en algunos bloques | Inconsistente: bien en Bloque 1, débil en Bloques 3-4 | Hacer explícito en todos los bloques |
| 🏫 **Transferencia al aula** | Presente en actividades | Las actividades son buenas pero la transferencia podría ser más explícita | Añadir cierre de transferencia en cada bloque |

---

## 11. PROBLEMAS DETECTADOS

### Bugs y errores técnicos

1. **`bloque1-agentes-ia.md`**: El párrafo "Un agente es diferente: es como si esa misma persona ya tuviese apuntado todo lo que necesita saber sobre su tarea." aparece **duplicado** dos veces seguidas. Corregir.

2. **`bloque1-actividad-primaria.md`**: El archivo tiene contenido de prompt **antes** del front matter al principio del archivo. El texto de instrucciones del prompt aparece antes de los tres guiones `---`. Esto puede generar renderizado incorrecto en Jekyll.

3. **`bloque1-comic.md`**: Sin front matter completo (no tiene `---` con `layout`, `title`, `parent`, `nav_order`). No aparece correctamente en la navegación.

4. **`bloque3.md` y `bloque4.md`**: Ambos tienen `nav_order: 4` y `nav_order: 5` respectivamente pero la asignación podría generar conflictos con páginas hijas.

5. **Ruta de imágenes inconsistente**: algunas páginas usan `{{ '/assets/img/...' | relative_url }}` (correcto para Jekyll) y otras usan `assets/img/...` (ruta relativa simple). En GitHub Pages la primera forma es más robusta.

### Problemas pedagógicos

6. El curso presenta el prompting como "fórmula" más que como "proceso". V2 debe corregir esto.

7. La distinción entre herramientas que buscan en Internet y las que no buscan está present solo de forma implícita. V2 debe hacerla explícita y central.

8. No hay ninguna sección que enseñe al docente cuándo **no** usar IA. V2 debe incluirlo desde el Módulo 0.

---

## 12. ARCHIVOS NUEVOS NECESARIOS EN V2

| Archivo | Descripción | Bloque |
|:--------|:------------|:-------|
| `herramientas-ia-actualizadas.md` | Referencia centralizada de herramientas con fecha de revisión | Transversal |
| `modulo-0-que-es-la-ia.md` | Reescritura completa para 2026 | Módulo 0 |
| `bloque2-notebooklm.md` | NotebookLM como eje de Bloque 2: todas sus funciones + flujo educativo | Bloque 2 |
| `bloque2-investigacion-verificacion.md` | Investigación web con IA, Deep Research, verificación de fuentes | Bloque 2 |
| `bloque4-evaluacion-con-ia.md` | Diseñar evaluaciones que no puedan ser trivialmente resueltas por IA | Bloque 4 |
| `bloque4-alfabetizacion-alumnado.md` | Enseñar al alumnado a usar la IA con criterio | Bloque 4 |
| `_data/edicion.yml` (opcional) | Datos variables de la edición: código, fechas, sesiones | Infraestructura |

---

## 13. RESUMEN CLASIFICADO POR ARCHIVO

| Archivo | Clasificación | Prioridad |
|:--------|:--------------|:----------|
| `_config.yml` | ACTUALIZAR | Alta |
| `_includes/head_custom.html` | CONSERVAR | — |
| `_sass/custom/custom.scss` | ACTUALIZAR | Alta |
| `assets/js/release-gates.js` | CONSERVAR | — |
| `index.md` | ACTUALIZAR | Alta |
| `guia-didactica.md` | ACTUALIZAR | Media |
| `modulo-0-que-es-la-ia.md` | REESCRIBIR | Alta |
| `bloque1.md` | ACTUALIZAR | Alta |
| `bloque2.md` | REESCRIBIR | Alta |
| `bloque3.md` | ACTUALIZAR + REESTRUCTURAR | Alta |
| `bloque4.md` | ACTUALIZAR | Media |
| `bloque1-seguridad.md` | REUBICAR + ACTUALIZAR | Media |
| `bloque1-accesibilidad-ia.md` | REUBICAR + CONSERVAR | Media |
| `bloque1-agentes-ia.md` | ACTUALIZAR + REUBICAR | Alta |
| `bloque1-comic.md` | REUBICAR + CONSERVAR | Media |
| `bloque1-novedades-ia.md` | ELIMINAR DE V2 (integrar en Módulo 0) | Alta |
| `bloque1-novedades-chatgpt.md` | REESCRIBIR | Alta |
| `bloque1-gemma4.md` | REUBICAR + ACTUALIZAR | Baja |
| `novedades.md` | ELIMINAR DE V2 (disolver sección) | Alta |
| `bloque1-actividad-infantil.md` | FUSIONAR + REESCRIBIR | Media |
| `bloque1-actividad-primaria.md` | FUSIONAR + REESCRIBIR (+ corregir bug) | Media |
| `bloque1-actividad-secundaria.md` | FUSIONAR + REESCRIBIR | Media |
| `bloque1-actividad-fp.md` | FUSIONAR + REESCRIBIR | Media |
| `bloque1-actividad-eoi.md` | FUSIONAR + REESCRIBIR | Media |
| `bloque3-actividad-infantil.md` | FUSIONAR + REESCRIBIR | Media |
| `bloque3-actividad-primaria.md` | FUSIONAR + REESCRIBIR | Media |
| `bloque3-actividad-secundaria.md` | FUSIONAR + CONSERVAR base | Media |
| `bloque3-actividad-fp.md` | FUSIONAR + REESCRIBIR | Media |
| `bloque3-actividad-eoi.md` | FUSIONAR + REESCRIBIR | Media |
| `vibe-coding-educativo.md` | CONSERVAR + ACTUALIZAR | Media |
| `banco-gems-gpts-educativos.md` | ACTUALIZAR | Media |
| `google-labs-experimentos-ia-aula.md` | ACTUALIZAR | Media |
| `primeros-pasos/identidad-digital.md` | CONSERVAR + ACTUALIZAR | Baja |
| `herramientas-ia-actualizadas.md` | CREAR NUEVO | Alta |
| `bloque2-notebooklm.md` | CREAR NUEVO | Alta |
| `bloque2-investigacion-verificacion.md` | CREAR NUEVO | Alta |
| `bloque4-evaluacion-con-ia.md` | CREAR NUEVO | Media |
| `bloque4-alfabetizacion-alumnado.md` | CREAR NUEVO | Media |

---

*Auditoría completada · agosto 2026 · Rama: curso-ia-cefire-v2*  
*Siguiente paso: crear PLAN-V2.md con índice completo, estimación de horas y propuesta visual.*
