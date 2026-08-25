# PLAN V2 · Curso IA para Docentes

**Versión:** 2.0  
**Rama:** `curso-ia-cefire-v2`  
**Fecha:** agosto 2026  
**Estado:** Pendiente de aprobación

> Este documento describe cómo quedará la rama `curso-ia-cefire-v2` cuando la versión 2 esté completada. Es el mapa de trabajo para construir el nuevo curso.

---

## ÍNDICE

1. [Hilo conductor de la V2](#1-hilo-conductor-de-la-v2)
2. [Nueva estructura del curso](#2-nueva-estructura-del-curso)
3. [Distribución de 32 horas](#3-distribución-de-32-horas)
4. [Herramientas seleccionadas](#4-herramientas-seleccionadas)
5. [Gestión de archivos](#5-gestión-de-archivos)
6. [Sistema de actividades](#6-sistema-de-actividades)
7. [Sistema visual y componentes](#7-sistema-visual-y-componentes)
8. [Imágenes y diagramas](#8-imágenes-y-diagramas)
9. [Navegación](#9-navegación)
10. [Datos de edición](#10-datos-de-edición)
11. [Accesibilidad web](#11-accesibilidad-web)
12. [Correcciones de bugs de V1](#12-correcciones-de-bugs-de-v1)
13. [Secuencia de construcción](#13-secuencia-de-construcción)

---

## 1. HILO CONDUCTOR DE LA V2

Todo el curso debe responder a este proceso:

```
QUÉ QUIERO CONSEGUIR
        ↓
QUÉ HERRAMIENTA PUEDO USAR
        ↓
QUÉ DATOS PUEDO DARLE
        ↓
CÓMO TRABAJAR CON ELLA
        ↓
CÓMO VERIFICAR EL RESULTADO
        ↓
CÓMO APLICARLO PEDAGÓGICAMENTE
```

Este proceso no es un capítulo del curso: es el esqueleto de cada bloque, cada actividad y cada prompt de ejemplo.

### Las tres distinciones que todo docente debe aprender

El curso debe enseñar a distinguir tres tipos de IA:

1. **IA que responde desde conocimiento de entrenamiento** (datos hasta una fecha de corte; puede estar desactualizada)
2. **IA que busca en Internet en tiempo real** (resultados actuales pero con menos garantía de profundidad)
3. **IA fundamentada en fuentes que tú proporcionas** (NotebookLM: trabaja solo con lo que le das; las respuestas tienen citas verificables)

Esta distinción es crítica para que el docente entienda **cuándo confiar** en la IA y **cómo verificar**.

### Los cuatro hilos transversales

Presentes en todos los bloques, no relegados a páginas independientes:

| Hilo | Pregunta permanente |
|:-----|:--------------------|
| 🔒 **Privacidad** | ¿Puedo introducir estos datos en esta herramienta? |
| 🔎 **Verificación** | ¿Cómo compruebo que la respuesta es correcta? |
| ♿ **Accesibilidad y DUA** | ¿Cómo puedo hacer que el resultado sea accesible para más alumnado? |
| 🏫 **Transferencia** | ¿Cómo aplico esto realmente en mi aula? |

---

## 2. NUEVA ESTRUCTURA DEL CURSO

### Visión general

```
Módulo 0  · Entender la IA en 2026             (base conceptual)
Bloque 1  · Tu asistente docente               (Copilot + comparativa)
Bloque 2  · Investigar y trabajar con conocimiento (NotebookLM + Deep Research)
Bloque 3  · Crear materiales multimodales      (presentaciones, imagen, audio, vídeo)
Bloque 4  · Diseñar, personalizar, evaluar y crear (rúbricas, DUA, agentes, vibe coding)
```

---

### Módulo 0 · Entender la IA en 2026

**Propósito:** Base conceptual común. No es tecnología per se: es criterio docente.

**Contenidos:**

1. Qué es la IA generativa y qué no es (manteniendo lo bueno de V1)
2. Los tres tipos de IA que importan en educación (entrenada / búsqueda web / fundamentada en fuentes)
3. Modelos de lenguaje vs. modelos de razonamiento: diferencia práctica
4. IA multimodal: qué significa que una IA «vea», «escuche» y «hable»
5. Agentes y automatización: qué son, para qué sirven, cuándo tener cuidado
6. Alucinaciones: por qué ocurren y cómo detectarlas
7. Privacidad y datos: RGPD, menores, datos del centro
8. EU AI Act: qué implica para docentes y centros en la práctica
9. Sesgos en la IA: ejemplos educativos concretos
10. **Cuándo NO usar IA** ← sección ausente en V1, fundamental en V2

**Archivo en V2:** `modulo-0-que-es-la-ia.md` (reescritura completa del existente)

---

### Bloque 1 · Tu asistente docente

**Propósito:** Que el docente empiece a usar IA en sus tareas diarias desde el primer día, con criterio para elegir la herramienta adecuada.

**Eje:** Copilot Chat con cuenta `@edu.gva.es` como primera herramienta, por privacidad y por integración en el entorno GVA.

**Estructura:**

1.1 · Copilot Chat en 2026: qué está disponible con tu cuenta GVA  
— Acceso, insignia 🛡️ Protegido, qué significa Enterprise Data Protection  
— Diferencia entre Copilot Chat (gratuito con cuenta GVA) y M365 Copilot completo (requiere licencia)  
— Funciones disponibles: chat web, carga de archivos, imágenes, Copilot Pages

1.2 · Prompting como conversación, no como fórmula  
— Ciclo iterativo: PEDIR → OBSERVAR → EVALUAR → REFINAR → VERIFICAR → UTILIZAR  
— Estructura de referencia (no fórmula mágica): OBJETIVO + CONTEXTO + FUENTES + TAREA + FORMATO + RESTRICCIONES  
— Aportación de contexto, ejemplos y criterios de calidad  
— Cómo pedir alternativas y contrastar resultados

1.3 · Tareas administrativas: actas, correos, documentos  
— Mantener los Prompts de Oro de V1 para actas y correos (son los mejores del curso)  
— Actualizar comparativa: Copilot vs. Gemini vs. ChatGPT (eliminar Grok de la comparativa principal)

1.4 · Copilot en Word, PowerPoint, Outlook, Teams (si la licencia lo permite)  
— Distinguir claramente qué funciones requieren la licencia adicional M365 Copilot  
— Para centros sin esa licencia: alternativa práctica con Copilot Chat + copiar al documento

1.5 · Comparativa práctica: Copilot / Gemini / ChatGPT / Kimi  
— No memorizar interfaces; aprender a **elegir herramienta según la tarea**  
— Tabla: ¿Qué IA uso para qué? (extraída de INVESTIGACION-HERRAMIENTAS-2026.md)

**Archivos en V2:**
- `bloque1.md` (actualizar estructura, mantener lo mejor de V1)
- `bloque1-seguridad.md` → contenido integrado en `bloque1.md` como callout transversal; la página se convierte en referencia de privacidad completa

---

### Bloque 2 · Investigar y trabajar con conocimiento

**Propósito:** Convertir a los docentes en buenos investigadores y gestores del conocimiento con IA. NotebookLM como eje central.

**Estructura:**

2.1 · Los tres tipos de IA (revisión rápida) y cuándo usar cada uno  
— Refuerzo conceptual del Módulo 0 aplicado a casos reales

2.2 · NotebookLM como centro de trabajo docente  
— Qué es y por qué es diferente  
— Subir fuentes: currículo DOGV/BOE, programaciones, artículos, vídeos de YouTube, PDFs  
— Chat con citas: la única IA que muestra exactamente de dónde viene cada respuesta  
— Generar: guía de estudio, cuestionario, mapa conceptual, Audio Overview, flashcards, infografía, presentación  
— Flujo educativo completo: FUENTES → INVESTIGACIÓN → COMPRENSIÓN → VERIFICACIÓN → TRANSFORMACIÓN → MATERIAL EDUCATIVO  
— Privacidad en NotebookLM: qué puedes subir y qué no

2.3 · Deep Research: investigar autónomamente  
— Gemini Deep Research vs. Kimi Deep Research vs. ChatGPT  
— Cuándo usar Deep Research y cuándo es mejor hacer la búsqueda manualmente  
— Verificación de los resultados

2.4 · Prompting avanzado (mantener lo mejor de V1)  
— Estructura Rol + Contexto + Tarea + Formato + Restricciones: no como fórmula sino como andamiaje  
— Actividad 2.1 de V1: construcción progresiva de prompts → CONSERVAR Y MEJORAR  
— Crear una biblioteca personal de prompts reutilizables

2.5 · Verificación: cómo comprobar que la IA no se ha inventado nada  
— Estrategias de verificación según el tipo de IA  
— Por qué las citas de NotebookLM son más fiables que las respuestas de un chatbot general  
— Verificar con el documento original

**Archivos en V2:**
- `bloque2.md` (reescritura con NotebookLM como eje)
- `bloque2-notebooklm.md` (nuevo: dedicado a NotebookLM en profundidad)
- `bloque2-investigacion-verificacion.md` (nuevo: Deep Research, verificación)

---

### Bloque 3 · Crear materiales multimodales

**Propósito:** Crear recursos visuales, auditivos y audiovisuales de calidad sin necesidad de conocimientos técnicos.

**Principio de selección de herramientas:** Una herramienta principal gratuita + 1-2 alternativas por categoría. No diez opciones para hacer lo mismo.

**Estructura:**

3.1 · Imágenes educativas con IA  
— Copilot Chat (DALL·E, entorno GVA) como opción principal  
— ChatGPT como alternativa para mayor control  
— Gemini Imagen  
— Cuándo usar imagen generada vs. imagen real vs. no imagen  
— Textos alternativos y accesibilidad

3.2 · Infografías y esquemas visuales  
— Canva for Education (opción principal, 100% gratuito para docentes)  
— Napkin AI como herramienta de apoyo para diagramas desde texto  
— Cuándo usar infografía vs. lista HTML vs. tabla

3.3 · Presentaciones educativas  
— Gamma (opción principal para diseño visual rápido, con limitaciones gratuitas)  
— Copilot en PowerPoint (opción para entorno GVA, requiere licencia M365 Copilot o hacerlo manualmente)  
— Kimi Slides (alternativa con IA generativa)  
— Actualizar los Prompts de Oro de V1: están bien, solo necesitan revisión

3.4 · Cómics e ilustraciones  
— Reducir la tabla de V1 (10 herramientas) a 3 opciones: Copilot Chat, ChatGPT, Canva  
— Mantener el proceso paso a paso de `bloque1-comic.md` → mover a Bloque 3  
— Ejemplos por etapa integrados, no en 5 páginas separadas

3.5 · Audio y podcast educativo  
— ElevenLabs (plan gratuito: ~10 minutos/mes)  
— Canva (generación de audio básica integrada)  
— NotebookLM Audio Overview como recurso de escucha sin producción propia  
— Accesibilidad: cuándo el audio es una mejora real y cuándo es solo decoración

3.6 · Vídeo educativo con IA  
— HeyGen (plan gratuito: 3 vídeos de 1 min/mes — muy limitado)  
— CapCut (subtítulos automáticos, efectos, sin necesidad de plan de pago)  
— Kimi + vídeo: generar guion y ayuda para edición  
— Advertencia: uso de imágenes del alumnado sin consentimiento  
— Cuándo NO hacer un vídeo con avatar IA y usar grabación real

**Archivos en V2:**
- `bloque3.md` (actualizar + reestructurar con selección reducida de herramientas)
- `bloque3-actividades.md` (nueva página única de actividades con variantes por etapa, sustituyendo las 5 páginas actuales)
- `bloque1-comic.md` → contenido integrado en bloque3 + página renombrada con front matter correcto
- `google-labs-experimentos-ia-aula.md` → actualizar experimentos disponibles en 2026

---

### Bloque 4 · Diseñar, personalizar, evaluar y crear

**Propósito:** IA integrada en el núcleo de la práctica docente: diseño curricular, evaluación, personalización y creación.

**Estructura:**

4.1 · Rúbricas LOMLOE con IA  
— Mantener los Prompts de Oro de V1 (son excelentes)  
— Añadir: verificación de criterios de evaluación en NotebookLM

4.2 · Retroalimentación motivadora  
— Mantener los Prompts de Oro de V1  
— Añadir: reflexión sobre la autoría del feedback (¿quién lo escribe: el docente o la IA?)

4.3 · Evaluación en un contexto donde existe IA  
— **Nuevo en V2:** Diseñar tareas que no puedan ser resueltas trivialmente por la IA  
— El proceso sobre el producto  
— Evaluación oral, portafolio, co-evaluación  
— Dianas de autoevaluación generadas con IA

4.4 · Adaptación y personalización: DUA, NEAE, altas capacidades  
— Mantener el enfoque práctico de V1  
— Actualizar prompts con las herramientas de 2026

4.5 · Alfabetización en IA del alumnado  
— **Nuevo en V2:** Cómo enseñar al alumnado a usar la IA con criterio  
— El alumnado como usuario crítico, no pasivo  
— Actividades de verificación para el aula  
— EU AI Act: qué deben saber los jóvenes

4.6 · Gems, GPTs y agentes personalizados  
— Actualizar `bloque1-agentes-ia.md` → mover a Bloque 4 (aquí tiene sentido pedagógico)  
— Estado 2026: Copilot Studio/Agents, Gemini Gems, ChatGPT GPTs  
— Diseñar buenas instrucciones como competencia transferible  
— `banco-gems-gpts-educativos.md` → actualizar y enlazar desde Bloque 4

4.7 · Vibe coding educativo  
— Mantener `vibe-coding-educativo.md` como base (está muy bien)  
— Actualizar herramientas: ChatGPT Canvas, Kimi Websites, Bolt, Replit  
— Añadir tabla de herramientas con criterio gratuita/facilidad/tipo de output  
— Actividad final: cada docente crea un pequeño recurso educativo propio

**Archivos en V2:**
- `bloque4.md` (actualizar con secciones 4.3 y 4.5 nuevas)
- `bloque4-evaluacion-con-ia.md` (nuevo: 4.3)
- `bloque4-alfabetizacion-alumnado.md` (nuevo: 4.5)
- `bloque1-agentes-ia.md` → renombrar a `bloque4-agentes-ia.md` o cambiar `parent` y `nav_order`
- `vibe-coding-educativo.md` (actualizar herramientas 2026)

---

## 3. DISTRIBUCIÓN DE 32 HORAS

| Bloque | Horas online | Horas sesión síncrona | Total |
|:-------|:------------:|:---------------------:|:-----:|
| Módulo 0 · Entender la IA | 2 h | — | 2 h |
| Bloque 1 · Tu asistente docente | 6 h | 2 h | 8 h |
| Bloque 2 · Investigar con conocimiento | 6 h | 2 h | 8 h |
| Bloque 3 · Materiales multimodales | 5 h | 2 h | 7 h |
| Bloque 4 · Diseñar, evaluar y crear | 5 h | 2 h | 7 h |
| **TOTAL** | **24 h** | **8 h** | **32 h** |

---

## 4. HERRAMIENTAS SELECCIONADAS

### Herramientas principales del curso (eje)

| # | Herramienta | Bloque | Justificación |
|:-:|:------------|:-------|:--------------|
| 1 | **Copilot Chat** (`@edu.gva.es`) | Bloque 1 | Entorno protegido GVA, gratuito para docentes |
| 2 | **NotebookLM** | Bloque 2 | Única herramienta fundamentada en fuentes con citas verificables |
| 3 | **Canva for Education** | Bloque 3 | 100% gratuito para docentes verificados, IA incluida |

### Herramientas de comparativa (obligatoriamente presentadas)

| # | Herramienta | Bloque | Rol en el curso |
|:-:|:------------|:-------|:----------------|
| 4 | **Gemini** | Bloques 1, 2 | Segunda opción para tareas generales; Deep Research; Gems |
| 5 | **ChatGPT** | Bloques 1, 3, 4 | Plataforma de referencia; imágenes; GPTs; vibe coding |
| 6 | **Kimi** | Bloques 1, 3, 4 | Slides/Websites; Agent Swarm; vibe coding avanzado |

### Herramientas de bloque específico

| # | Herramienta | Bloque | Función |
|:-:|:------------|:-------|:--------|
| 7 | **Gamma** | Bloque 3 | Presentaciones visuales con IA |
| 8 | **ElevenLabs** | Bloque 3 | Audio educativo (plan gratuito limitado) |
| 9 | **HeyGen** | Bloque 3 | Vídeo con avatares (plan gratuito muy limitado, demostración) |
| 10 | **Napkin AI** | Bloque 3 | Diagramas e infografías desde texto |
| 11 | **Google Labs** | Bloque 3 | Exploración de experimentos IA |

### Herramientas eliminadas de V2 (no aparecen o aparecen muy reducidas)

| Herramienta | Motivo |
|:------------|:-------|
| **Grok** | Utilidad educativa limitada para docentes GVA; privacidad cuestionable; no aporta diferencial sobre Gemini/ChatGPT |
| **"Kimi Claw"** (nomenclatura) | Nombre obsoleto. Se referencia como función dentro de Kimi |
| **Synthesia** | Muy similar a HeyGen pero más caro; HeyGen es suficiente como referencia de vídeo con avatares |
| **Sección "Novedades"** | Disuelta. Contenido integrado donde corresponde pedagógicamente |

---

## 5. GESTIÓN DE ARCHIVOS

### 5.1 Archivos que se CONSERVAN sin cambios relevantes

| Archivo | Razón |
|:--------|:------|
| `_includes/head_custom.html` | Sistema de release gates: funciona correctamente |
| `assets/js/release-gates.js` | Ídem |
| `primeros-pasos/identidad-digital.md` | Buen contenido; actualización mínima |
| `guia-didactica.md` | Actualización menor (datos de edición, añadir EU AI Act) |

### 5.2 Archivos que se ACTUALIZAN (misma ruta, contenido renovado)

| Archivo | Cambios principales |
|:--------|:--------------------|
| `_config.yml` | Separar código de edición del título |
| `_sass/custom/custom.scss` | Centralizar todos los componentes visuales |
| `index.md` | Separar datos de edición; actualizar primeros pasos |
| `modulo-0-que-es-la-ia.md` | Reescritura completa para 2026 |
| `bloque1.md` | Actualizar Copilot GVA 2026; nueva comparativa sin Grok |
| `bloque2.md` | Reescritura con NotebookLM como eje |
| `bloque3.md` | Reducir herramientas; actualizar; reestructurar |
| `bloque4.md` | Añadir secciones 4.3 y 4.5 |
| `bloque1-seguridad.md` | Integrar como callout en bloques + ampliar como referencia |
| `bloque1-accesibilidad-ia.md` | Integrar en bloques + mantener como referencia |
| `bloque1-agentes-ia.md` | Actualizar 2026; cambiar nav a Bloque 4 |
| `vibe-coding-educativo.md` | Actualizar herramientas 2026 |
| `banco-gems-gpts-educativos.md` | Actualizar; enlazar desde Bloque 4 |
| `google-labs-experimentos-ia-aula.md` | Actualizar experimentos disponibles |
| `bloque1-novedades-chatgpt.md` | Reescribir como "ChatGPT en 2026"; mover a Bloque 1 comparativa |
| `bloque1-gemma4.md` | Actualizar (Gemma 3, AI Edge Gallery); mover a Módulo 0 o Bloque 1 |

### 5.3 Archivos que se FUSIONAN (el contenido se integra en otros)

| Archivo origen | Destino | Qué se integra |
|:---------------|:--------|:---------------|
| `bloque1-comic.md` | `bloque3.md` (sección cómics) | Proceso paso a paso de creación de cómic |
| `bloque1-novedades-ia.md` | `modulo-0-que-es-la-ia.md` | Contenido relevante sobre tendencias IA |
| `bloque1-actividad-infantil.md` | `bloque1-actividades.md` (nuevo) | Variante por etapa |
| `bloque1-actividad-primaria.md` | `bloque1-actividades.md` (nuevo) | Variante por etapa |
| `bloque1-actividad-secundaria.md` | `bloque1-actividades.md` (nuevo) | Variante por etapa |
| `bloque1-actividad-fp.md` | `bloque1-actividades.md` (nuevo) | Variante por etapa |
| `bloque1-actividad-eoi.md` | `bloque1-actividades.md` (nuevo) | Variante por etapa |
| `bloque3-actividad-infantil.md` | `bloque3-actividades.md` (nuevo) | Variante por etapa |
| `bloque3-actividad-primaria.md` | `bloque3-actividades.md` (nuevo) | Variante por etapa |
| `bloque3-actividad-secundaria.md` | `bloque3-actividades.md` (nuevo) | Base + variante |
| `bloque3-actividad-fp.md` | `bloque3-actividades.md` (nuevo) | Variante por etapa |
| `bloque3-actividad-eoi.md` | `bloque3-actividades.md` (nuevo) | Variante por etapa |

> **Nota:** Los archivos de actividades originales no se borran hasta que las páginas de destino estén completadas. La fusión se hace en dos pasos: crear la nueva página fusionada → eliminar los archivos originales de la rama V2.

### 5.4 Archivos que DESAPARECEN de V2 (obsoletos, contenido integrado o eliminado)

| Archivo | Motivo |
|:--------|:-------|
| `novedades.md` | Sección disuelta; cada contenido va a donde corresponde |
| `bloque1-novedades-ia.md` | Contenido integrado en Módulo 0; lo que queda útil va a las páginas correspondientes |

> Nota: en Git estos archivos no "desaparecen" de `main`. Solo dejan de existir en la rama `curso-ia-cefire-v2`.

### 5.5 Archivos NUEVOS en V2

| Archivo | Contenido |
|:--------|:----------|
| `herramientas-ia-actualizadas.md` | Referencia centralizada de herramientas con fecha de revisión y advertencias de límites cambiantes |
| `bloque2-notebooklm.md` | NotebookLM en profundidad: todas las funciones, flujo educativo, actividades |
| `bloque2-investigacion-verificacion.md` | Deep Research, investigación web, verificación de fuentes |
| `bloque1-actividades.md` | Actividades de Bloque 1 con patrón RETO COMÚN → VARIANTE POR ETAPA |
| `bloque3-actividades.md` | Actividades de Bloque 3 con patrón RETO COMÚN → VARIANTE POR ETAPA |
| `bloque4-evaluacion-con-ia.md` | Cómo diseñar tareas que no puedan resolverse trivialmente con IA |
| `bloque4-alfabetizacion-alumnado.md` | Enseñar al alumnado a usar la IA con criterio |

---

## 6. SISTEMA DE ACTIVIDADES

### Patrón V2 (obligatorio para todas las actividades)

```
RETO COMÚN
  (la misma necesidad pedagógica para todas las etapas)
        ↓
VARIANTE POR ETAPA
  (Infantil / Primaria / ESO-Bachillerato / FP / EOI / Ed. Especial/Orientación)
        ↓
PRODUCTO
  (qué material concreto genera el docente)
        ↓
PROCESO CON IA
  (cómo usa la herramienta; prompt de ejemplo)
        ↓
REVISIÓN
  (qué debe comprobar el docente antes de usar el resultado)
        ↓
REFLEXIÓN
  (qué ha aprendido; qué haría diferente)
```

### Entrega obligatoria por bloque

Cada bloque tiene **una única entrega obligatoria** (el docente elige entre opciones adaptadas a su etapa). La entrega debe generar un producto real y reutilizable en el aula.

### Evidencia de aprendizaje (todos los bloques)

- Producto generado con IA (documento, imagen, audio, vídeo corto, rúbrica...)
- Prompt utilizado
- Reflexión breve: qué funcionó, qué revisé, qué llevaré al aula

---

## 7. SISTEMA VISUAL Y COMPONENTES

### Principio

Todos los componentes visuales deben estar definidos en `_sass/custom/custom.scss`, no en línea en cada página HTML. Esto garantiza coherencia y facilita el mantenimiento.

### Componentes a centralizar en SCSS (agosto 2026)

Los siguientes componentes ya existen de forma dispersa en el HTML de V1. En V2 se centralizan en el SCSS con nomenclatura coherente:

| Componente | Clase CSS | Emoji | Uso |
|:-----------|:----------|:------|:----|
| Idea clave | `.callout--idea` | 💡 | Conceptos fundamentales |
| Pruébalo | `.callout--prueba` | 🧪 | Actividades prácticas inmediatas |
| Prompt | `.callout--prompt` | 🤖 | Ejemplos de prompts |
| Privacidad | `.callout--privacidad` | 🔒 | Avisos de datos y privacidad |
| Verifica | `.callout--verifica` | 🔎 | Recordatorios de verificación |
| Accesibilidad | `.callout--accesibilidad` | ♿ | Consideraciones DUA |
| Al aula | `.callout--aula` | 🏫 | Transferencia a la práctica docente |
| Compara | `.callout--compara` | ⚖️ | Comparativas de herramientas |
| Recuerda | `.callout--recuerda` | 📌 | Síntesis de puntos clave |
| Para pensar | `.callout--reflexion` | 💭 | Preguntas de reflexión (ya existe en V1) |
| Alerta | `.callout--alerta` | ⚠️ | Advertencias importantes (ya existe en V1) |

### Estructura HTML del callout (estándar V2)

```html
<div class="callout callout--privacidad" role="note" aria-label="Aviso de privacidad">
  <div class="callout__titulo">🔒 Privacidad</div>
  Texto del aviso...
</div>
```

### Otros componentes a centralizar

- `.tool-card` + `.tool-grid`: tarjetas de herramientas
- `.flujo-horizontal`: flujos de pasos horizontales con flechas
- `.tres-columnas`: comparativa de tres columnas
- `.que-si-no`: columnas sí/no (muy útil para privacidad)
- `.vibe-hero`: cabecera del bloque de vibe coding (evaluar si generalizar)

### Tablas en móvil

Todas las tablas anchas (>4 columnas) deben tener `overflow-x: auto` para evitar desbordamiento en dispositivos móviles. Añadir clase `.table-scroll` y aplicar en SCSS.

---

## 8. IMÁGENES Y DIAGRAMAS

### Principio de selección

- SVG > PNG generado > PNG rasterizado
- Diagrama conceptual duradero > Captura de pantalla (que envejece)
- Con texto alternativo descriptivo siempre
- Legible en móvil (máx. 480px útil en móvil)
- Sin texto pequeño incrustado cuando HTML/CSS es más accesible

### Imágenes que se conservan de V1

| Imagen | Razón |
|:-------|:------|
| `Agente_IA.png` | Infografía conceptual vigente |
| `agentes/agente-como-asistente.svg` | SVG conceptual duradero |
| `agentes/flujo-creacion-agente.svg` | SVG conceptual duradero |
| `Marco-unesco.png` | Referencia normativa estable |
| `evaluacion-proceso-vs-producto.png` | Concepto pedagógico duradero |
| `flujo-identidad.svg` | SVG conceptual |
| `uso-seguro-ia.svg` | SVG, preferir sobre el PNG |
| `anatomia-prompt.png` | Diagrama conceptual; verificar que coincide con nueva estructura de prompting V2 |
| `ciclo-aprendizaje-ia.png` | Verificar contenido antes de confirmar |
| `Comic_*.png` (5 imágenes) | Ejemplos prácticos de cómics por etapa |
| `Cuento_infantil.png` | Ejemplo práctico |
| `Gemini_cuento infantil.png` | Ejemplo práctico |
| `banner-curso-ia.png` | Verificar que no contiene fechas específicas de una edición |

### Imágenes que se revisan o eliminan

| Imagen | Acción |
|:-------|:-------|
| `portada-curso-ia-docentes.png` | Eliminar (está comentada en index.md, no se usa) |
| `Comparar_ChatGPT.png` | Revisar: posible captura de pantalla obsoleta |
| `Ballena_ChatGPT.png` | Revisar uso actual |
| `cifrado-datos*.png/svg` | Revisar: no aparece referenciado en el contenido leído |
| `prompt-injection.svg` | Revisar: no aparece referenciado en el contenido leído |
| `identidad-digital.png` y `-1.png` | Revisar si son distintos del SVG; eliminar redundantes |
| `ruta-ia-docentes.png` | Rediseñar para reflejar la nueva estructura V2 |
| `estructura-curso-ia.png` | Rediseñar para reflejar la nueva estructura V2 |
| `prompt-estructura.png` | Revisar si es diferente de `anatomia-prompt.png`; posible duplicado |

### Diagramas nuevos necesarios en V2

Estos diagramas son conceptuales y duraderos. Deben crearse en SVG (o HTML/CSS si es posible):

1. **Diagrama: los tres tipos de IA** (conocimiento entrenado / búsqueda web / fundamentada en fuentes)
2. **Ciclo de prompting iterativo** (PEDIR → OBSERVAR → EVALUAR → REFINAR → VERIFICAR → UTILIZAR)
3. **Flujo NotebookLM** (FUENTES → INVESTIGACIÓN → COMPRENSIÓN → VERIFICACIÓN → TRANSFORMACIÓN → MATERIAL EDUCATIVO)
4. **Árbol de decisión: ¿Qué herramienta uso?** (versión visual de la tabla del INVESTIGACION-HERRAMIENTAS)
5. **Estructura V2 del curso** (sustituye a `estructura-curso-ia.png`)
6. **Ruta de aprendizaje V2** (sustituye a `ruta-ia-docentes.png`)

> Para los diagramas SVG, se pueden crear con la ayuda de IA (Napkin AI, ChatGPT, Copilot) y refinar manualmente.

---

## 9. NAVEGACIÓN

### Estructura de navegación propuesta

```yaml
nav_order: 1   # index.md (Inicio)
nav_order: 2   # guia-didactica.md (Guía didáctica)
nav_order: 3   # modulo-0-que-es-la-ia.md (Módulo 0)
nav_order: 4   # bloque1.md (Bloque 1) — has_children: true
  nav_order: 1   # bloque1-actividades.md (Actividades B1) — parent: Bloque 1
  nav_order: 2   # bloque1-seguridad.md — parent: Bloque 1
  nav_order: 3   # bloque1-agentes-ia.md — mover a Bloque 4
nav_order: 5   # bloque2.md (Bloque 2) — has_children: true
  nav_order: 1   # bloque2-notebooklm.md — parent: Bloque 2
  nav_order: 2   # bloque2-investigacion-verificacion.md — parent: Bloque 2
nav_order: 6   # bloque3.md (Bloque 3) — has_children: true
  nav_order: 1   # bloque3-actividades.md — parent: Bloque 3
  nav_order: 2   # google-labs-experimentos-ia-aula.md — parent: Bloque 3
nav_order: 7   # bloque4.md (Bloque 4) — has_children: true
  nav_order: 1   # bloque4-agentes-ia.md — parent: Bloque 4
  nav_order: 2   # bloque4-evaluacion-con-ia.md — parent: Bloque 4
  nav_order: 3   # bloque4-alfabetizacion-alumnado.md — parent: Bloque 4
  nav_order: 4   # vibe-coding-educativo.md — parent: Bloque 4
  nav_order: 5   # banco-gems-gpts-educativos.md — parent: Bloque 4
nav_order: 8   # herramientas-ia-actualizadas.md
nav_order: 9   # primeros-pasos/identidad-digital.md (bajo Inicio)
```

### Reglas de navegación V2

- Todos los archivos deben tener `layout`, `title`, `parent` (si son hijos) y `nav_order` correctos
- Eliminar la sección `novedades.md` y sus hijos
- Los archivos de actividades V1 (5 + 5 = 10 páginas) dejan de aparecer en la navegación cuando las páginas fusionadas estén listas
- Revisar que no haya dos páginas con el mismo `nav_order` dentro del mismo nivel

---

## 10. DATOS DE EDICIÓN

### Problema en V1

La tabla de sesiones con fechas (22/04/2026, etc.) está dentro de `index.md` mezclada con el contenido pedagógico permanente. En cada nueva edición habría que buscar y cambiar las fechas en varios archivos.

### Solución en V2

Crear un bloque claramente delimitado en `index.md`:

```markdown
---
## 📅 Esta edición

<!-- DATOS DE EDICIÓN — Actualizar en cada nueva convocatoria -->

| Campo | Detalle |
|:------|:--------|
| Código | [CÓDIGO] |
| Fechas de sesiones | [FECHAS] |
| Horario | [HORARIO] |
| Plataforma | [AULES URL] |

<!-- FIN DATOS DE EDICIÓN -->
```

Opcionalmente: usar `_data/edicion.yml` si Jekyll lo permite sin complicar la infraestructura. La solución con comentarios HTML es más sencilla y no requiere cambios de infraestructura.

---

## 11. ACCESIBILIDAD WEB

### Revisiones pendientes en V2

- [ ] Verificar jerarquía H1/H2/H3 en todos los archivos (algunos empiezan con `##`)
- [ ] Añadir `aria-hidden="true"` a emojis decorativos en encabezados
- [ ] Añadir `alt` descriptivos a todas las imágenes (algunos PNG tienen `alt=""`)
- [ ] Añadir `overflow-x: auto` en tablas anchas para móvil
- [ ] Revisar contraste de color en los nuevos componentes callout
- [ ] Considerar añadir skip link al contenido principal en `_includes/head_custom.html`
- [ ] Verificar que todos los enlaces tienen texto descriptivo (no "haz clic aquí" o "ver más")

---

## 12. CORRECCIONES DE BUGS DE V1

Los siguientes bugs detectados en la auditoría deben corregirse durante la construcción de V2:

| Bug | Archivo | Corrección |
|:----|:--------|:-----------|
| Párrafo duplicado: "Un agente es diferente: es como si esa misma persona..." | `bloque1-agentes-ia.md` | Eliminar la segunda aparición del párrafo |
| Contenido antes del front matter | `bloque1-actividad-primaria.md` | Mover el texto al cuerpo del documento (después de `---`) |
| Sin front matter completo | `bloque1-comic.md` | Añadir `layout`, `title`, `parent`, `nav_order` |
| Ruta de imágenes inconsistente | Varios archivos | Usar siempre `{{ '/assets/img/...' | relative_url }}` |

---

## 13. SECUENCIA DE CONSTRUCCIÓN

Una vez aprobado este plan, la construcción seguirá este orden:

### Fase A · Infraestructura (sin contenido visible aún)

1. Correcciones de bugs técnicos de V1
2. Centralizar componentes en `_sass/custom/custom.scss`
3. Separar datos de edición en `index.md`
4. Crear archivos nuevos vacíos con front matter correcto (para que la navegación sea correcta desde el principio)

### Fase B · Módulo 0 y Bloque 1

5. Reescribir `modulo-0-que-es-la-ia.md`
6. Actualizar `bloque1.md`
7. Crear `bloque1-actividades.md` (fusión de las 5 páginas de actividades)

### Fase C · Bloque 2

8. Reescribir `bloque2.md` con NotebookLM como eje
9. Crear `bloque2-notebooklm.md`
10. Crear `bloque2-investigacion-verificacion.md`

### Fase D · Bloque 3

11. Actualizar `bloque3.md`
12. Crear `bloque3-actividades.md` (fusión)
13. Actualizar `google-labs-experimentos-ia-aula.md`

### Fase E · Bloque 4

14. Actualizar `bloque4.md`
15. Actualizar `bloque1-agentes-ia.md` → cambiar a Bloque 4
16. Crear `bloque4-evaluacion-con-ia.md`
17. Crear `bloque4-alfabetizacion-alumnado.md`
18. Actualizar `vibe-coding-educativo.md`

### Fase F · Herramientas y referencia

19. Crear `herramientas-ia-actualizadas.md`
20. Actualizar `banco-gems-gpts-educativos.md`

### Fase G · Imágenes y diseño

21. Crear diagramas nuevos (SVG/HTML)
22. Actualizar `ruta-ia-docentes.png` y `estructura-curso-ia.png`
23. Eliminar imágenes obsoletas de V2

### Fase H · Revisión final

24. Verificar todos los enlaces internos y externos
25. Revisar accesibilidad
26. Probar GitHub Pages
27. Commit descriptivo final de la V2

### Regla de seguridad para todas las fases

Antes de cualquier modificación de archivo, verificar:

```bash
git branch --show-current
# Debe responder: curso-ia-cefire-v2
```

---

*Plan completado · agosto 2026 · Rama: curso-ia-cefire-v2*  
*Este documento está pendiente de aprobación. No se iniciará la construcción del nuevo curso hasta recibir autorización.*
