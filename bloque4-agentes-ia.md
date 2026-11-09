---
layout: page
title: "Agentes y asistentes docentes"
parent: "Bloque 4: Evaluación y Personalización"
nav_order: 1
has_children: true
---

# Diseña tu propio asistente docente
{: .fs-8 }

Una tarea docente real → instrucciones reutilizables → prueba → revisión. Este contenido desarrolla la [Actividad 4.6](bloque4.html#actividades-practicas-bloque-4).

**Explora ejemplos listos para adaptar:** [Banco de asistentes educativos: Gems, Skills y recursos reutilizables]({{ '/banco-gems-gpts-educativos.html' | relative_url }}). Incluye once fichas contrastadas, seis prompts propios y una actividad opcional de análisis; las herramientas externas pueden cambiar de disponibilidad.

## No necesitas pagar ni programar

Una **plantilla de prompt** bien diseñada sirve para repetir un flujo en cualquier herramienta accesible. Si tu plan permite asistentes configurables, puedes guardar esas instrucciones. Las capacidades, nombres y opciones para compartir cambian según el producto y las licencias.

| Nivel | Qué construyes | Ejemplo |
|---|---|---|
| 1 · Prompt reutilizable | Instrucciones que copias y adaptas | Crear una rúbrica para una actividad |
| 2 · Instrucciones estructuradas | Objetivo, entradas, pasos y límites | Rúbrica con verificación y checklist |
| 3 · Asistente configurable | Configuración persistente, si está disponible | GPT o Gem de apoyo a evaluación |
| 4 · Flujo con herramientas | Acciones o fuentes conectadas con permisos | Consultar materiales y generar un borrador revisable |

**No todo prompt es un agente:** un agente puede gestionar pasos y herramientas bajo un marco de permisos; una conversación con instrucciones no implica autonomía.

## Ejemplo completo · Asistente «Evaluador formativo»

```text
ROL: Eres asistente de evaluación formativa para docentes.
MISIÓN: Crear instrumentos, nunca calificar automáticamente al alumnado.
ENTRADAS: Etapa, materia, edad, actividad, fuente curricular oficial
aportada y tipo de instrumento solicitado.
PROCESO:
1. Si falta el objetivo o el criterio oficial, solicítalo.
2. Analiza evidencias observables y alinea el instrumento con el criterio.
3. Genera una primera versión en tabla clara y accesible.
4. Revisa diferencias entre niveles, ambigüedades y sesgos.
5. Entrega también una lista de comprobación y sugerencias de mejora.
RESTRICCIONES: no inventes normativa ni criterios; no proceses nombres,
calificaciones, diagnósticos ni trabajos identificables; señala dudas.
SALIDA: instrumento listo para revisión humana + motivos de diseño.
PRUEBA: diseña una rúbrica de cuatro niveles para una exposición oral
sobre el agua en 5.º de Primaria usando únicamente el criterio que
el profesor pegue literalmente.
```

## Personalización por etapa

- **Infantil:** consignas breves, observación cualitativa y apoyos visuales.
- **Primaria:** instrumentos con pocos indicadores y lenguaje cercano.
- **ESO:** criterios explícitos y reflexión sobre el proceso.
- **Bachillerato:** rigor argumentativo y referencias verificables.
- **FP:** desempeño observable, seguridad y secuenciación profesional.
- **EOI:** adecuación comunicativa, interacción, pronunciación y estrategias.

## Cómo demostrar que funciona

- Copia las instrucciones en la herramienta.
- Pruébalas con un caso **ficticio**.
- Busca un error o carencia deliberadamente: ¿inventa el criterio? ¿confunde el nivel? ¿ignora una adaptación?
- Corrige las instrucciones y vuelve a probar.
- Presenta la versión revisada con una captura sin datos personales o una transcripción breve.

**Entregable:** nombre del asistente, sus instrucciones, resultado de una prueba y una mejora documentada.

Para conocer las distinciones entre **GPTs, Gems, Skills y Plugins**, revisa la documentación vigente de cada proveedor: las funciones pueden cambiar y no todas están disponibles en todas las cuentas. No compartas herramientas con alumnado sin comprobar edades, licencias y permisos institucionales.


---


---

## Talleres prácticos por herramienta

Para evitar una página excesivamente larga, el taller se divide en **cuatro páginas independientes**. Puedes seguir el itinerario completo o entrar en la actividad que necesites.

| Taller | Qué aprenderás | Acceso |
|---|---|---|
| **1 · Crear una Gem en Gemini** | Configurar el asistente «Evaluador formativo», probarlo y mejorarlo con capturas reales. | [Abrir taller Gem](bloque4-gem-gemini.html) |
| **2 · Crear Skills en Gemini** | Skill de rúbricas y tres ejemplos: **cuestionarios GIFT para Aules, fichas de examen y rúbricas de evaluación**. | [Abrir taller Skills Gemini](bloque4-skills-gemini.html) |
| **3 · Crear una Skill en Claude** | Cargar un ZIP con **SKILL.md**, activar la habilidad y generar preguntas GIFT desde apuntes. | [Abrir taller Claude](bloque4-skill-claude.html) |
| **4 · Agentes y Skills en Copilot** | Crear un asesor DUA y ampliar el agente Cuentacuentos con una Skill propia. | [Abrir taller Copilot](bloque4-agentes-copilot.html) |

### Guía rápida para elegir tu práctica

- **Quiero elaborar rúbricas:** [Skills de Gemini: crear-rubricas-competenciales](bloque4-skills-gemini.html#skill-rubricas-evaluacion).
- **Quiero importar cuestionarios en Aules:** [Skill generador-gift-aules en Gemini](bloque4-skills-gemini.html#skill-cuestionarios-aules) o [la versión de Claude](bloque4-skill-claude.html).
- **Quiero fichas de examen imprimibles:** [Skill crear-fichas-examen](bloque4-skills-gemini.html#skill-fichas-examen).
- **Quiero crear mi primer agente:** [Gemini](bloque4-gem-gemini.html) o [Copilot](bloque4-agentes-copilot.html).

### Enlaces a los talleres anteriores

Si has guardado enlaces directos a la antigua página extensa, ahora encontrarás esos contenidos en páginas independientes:

- <span id="taller-gem-gemini"></span>[Taller Gem de Gemini](bloque4-gem-gemini.html).
- <span id="taller-skill-gemini"></span>[Taller Skill de Gemini](bloque4-skills-gemini.html).
- <span id="skill-cuestionarios-aules"></span>[Cuestionarios GIFT para Aules](bloque4-skills-gemini.html#skill-cuestionarios-aules).
- <span id="skill-fichas-examen"></span>[Fichas de examen](bloque4-skills-gemini.html#skill-fichas-examen).
- <span id="skill-rubricas-evaluacion"></span>[Rúbricas de evaluación](bloque4-skills-gemini.html#skill-rubricas-evaluacion).
- <span id="taller-skill-claude"></span>[Skill en Claude](bloque4-skill-claude.html).
- <span id="taller-agente-copilot"></span>[Agentes en Copilot](bloque4-agentes-copilot.html).
- <span id="skill-cuentacuentos-copilot"></span>[Cuentacuentos y Skill en Copilot](bloque4-agentes-copilot.html#skill-cuentacuentos-copilot).

**Entrega en Aules:** una captura de la configuración, el resultado de prueba y una reflexión sobre lo que la IA ha respetado y lo que has tenido que revisar. Para cuestionarios GIFT, añade la comprobación de importación al banco de pruebas.
