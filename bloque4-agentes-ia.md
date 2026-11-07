---
layout: page
title: "Agentes y asistentes docentes"
parent: "Bloque 4: Evaluación y Personalización"
nav_order: 1
---

# Diseña tu propio asistente docente
{: .fs-8 }

Una tarea docente real → instrucciones reutilizables → prueba → revisión. Este contenido desarrolla la [Actividad 4.6](bloque4.html#actividades-practicas-bloque-4).

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
