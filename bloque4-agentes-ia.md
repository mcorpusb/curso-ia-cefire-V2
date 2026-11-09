---
layout: page
title: "Agentes y asistentes docentes"
parent: "Bloque 4: Evaluación y Personalización"
nav_order: 1
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

## Taller guiado · Crea una Gem en Gemini
{: id="taller-gem-gemini" }

**Objetivo:** configurar, probar y mejorar un asistente docente sin programar. **Tiempo orientativo:** 20–25 minutos en formación. Puedes trabajar con una Gem de Gemini, si tu cuenta permite crearla, o con el mismo prompt en un chat; lo importante es **conservar las instrucciones y comprobar su comportamiento**.

> **Aviso sobre disponibilidad (noviembre de 2026).** Google ha anunciado la transición de Gems a **Skills (habilidades)**. Para las cuentas personales de mayores de 18 años, las Gems pasarán a solo lectura el **17 de noviembre de 2026** y desaparecerán el **17 de diciembre de 2026**. Para cuentas **Google Workspace for Education**, Google prevé la transición en **junio de 2027**. Consulta siempre las opciones habilitadas en tu cuenta. [Fuente oficial de Google](https://support.google.com/gemini/answer/18560919?hl=es). Si «Nueva Gem» no está disponible, realiza la práctica en una conversación normal pegando las mismas instrucciones; si tu cuenta permite crear una Skill, consérvalas para esa opción.

### Antes de comenzar

- Abre [Gemini](https://gemini.google.com/) desde un ordenador con una cuenta autorizada.
- Prepara **una tarea docente ficticia**, sin nombres ni información personal.
- Elige uno de los cinco ejemplos completos de esta página; no necesitas crear cinco Gems.
- **No compartas la Gem ni subas documentos del centro** sin comprobar las políticas y permisos aplicables.

### Paso a paso en Gemini

- **Accede a Gemini.** Inicia sesión y localiza **Gems** en la barra lateral; si no aparece, busca **Más**. *Captura pendiente: vista inicial y acceso a Gems.*
- **Abre el editor.** Entra en **Gems** y selecciona **Nueva Gem / Crear Gem**, según el idioma y la versión de tu interfaz. *Captura pendiente: listado y botón de creación.*
- **Ponle un nombre descriptivo.** Por ejemplo, «Asistente de evaluación docente». *Captura pendiente: nombre.*
- **Copia las instrucciones.** Pega el bloque de instrucciones de uno de los ejemplos siguientes. Incluye rol, finalidad, entradas, proceso, formato de salida y límites. *Captura pendiente: editor de instrucciones.*
- **Añade fuentes solo si realmente las necesitas.** Puedes trabajar sin archivos. Si utilizas el apartado de conocimientos, escoge únicamente materiales públicos o institucionalmente autorizados. *Captura pendiente: fuentes o conocimientos (opcional).*
- **Prueba el comportamiento.** Introduce el mensaje de prueba del ejemplo seleccionado. Comprueba que pide la información que falta y que no inventa criterios ni fuentes. *Captura pendiente: prueba.*
- **Corrige y guarda.** Ajusta las instrucciones, repite la prueba y guarda la configuración si tu cuenta lo permite. Conserva también una copia en un documento de texto. *Captura pendiente: versión guardada.*

**Nota sobre la interfaz:** los nombres exactos y la ubicación de los controles pueden variar. Sigue la [guía oficial de creación y gestión de Gems](https://support.google.com/gemini/answer/15146780?hl=es).

### Cómo se estructuran unas buenas instrucciones

| Elemento | Pregunta que debes responder |
|---|---|
| **Rol** | ¿En qué tarea debe especializarse? |
| **Objetivo** | ¿Qué producto o apoyo debe proporcionar? |
| **Entradas** | ¿Qué datos debe pedir antes de comenzar? |
| **Procedimiento** | ¿Qué pasos debe seguir? |
| **Salida** | ¿Cómo debe presentar el resultado? |
| **Límites** | ¿Qué debe comprobar o evitar? |

### Primeros cinco ejemplos listos para copiar y probar
{: id="ejemplos-gem-por-etapa" }

Cada ejemplo incluye **nombre, instrucciones completas, prueba y resultado esperado**. Copia solo el contenido de «Instrucciones» en el editor.

#### Ejemplo · Primaria: Tutor de comprensión lectora

**Finalidad:** generar preguntas y pistas graduadas a partir de un texto proporcionado por el docente.

**Nombre de la Gem:** Tutor de comprensión lectora · Primaria

**Instrucciones:**

~~~text
ROL: Tutor de comprensión lectora para Educación Primaria.
OBJETIVO: Ayudar al profesorado a crear preguntas, pistas y apoyos
de comprensión ajustados al curso.
ENTRADAS: Pregunta el curso, el texto, el objetivo y la modalidad
de actividad antes de generar materiales.
PROCESO:
- Usa únicamente la información del texto aportado.
- Crea cinco preguntas: dos literales, dos inferenciales
  y una de reflexión, ajustadas al curso.
- Añade pistas progresivas que no revelen inmediatamente
  las soluciones.
- Separa las respuestas de referencia en un apartado docente.
- Ofrece una alternativa de acceso al texto compatible
  con el objetivo de aprendizaje.
SALIDA: preguntas, pistas, solucionario y propuesta de apoyo.
LÍMITES: No inventes información del texto ni solicites datos
personales del alumnado. No sustituyas la revisión docente.
~~~

**Prueba ficticia:** «Para 4.º de Primaria, genera cinco preguntas a partir de este texto: “Las abejas recogen néctar y, al visitar flores, ayudan a transportar polen. Ese proceso permite que muchas plantas produzcan frutos y semillas”. Añade pistas y un solucionario separado».

**Esperado:** preguntas de distintos niveles, respuestas sustentadas en el texto y pistas que favorezcan la comprensión.

#### Ejemplo · Secundaria: Detective de errores científicos

**Finalidad:** crear actividades donde el alumnado encuentre errores y justifique la corrección.

**Nombre de la Gem:** Detective de errores · ESO

**Instrucciones:**

~~~text
ROL: Diseñador de actividades de pensamiento crítico para ESO.
OBJETIVO: Preparar explicaciones con errores intencionados que
el alumnado deba detectar, contrastar y corregir.
ENTRADAS: Pregunta curso, tema, objetivo y fuentes fiables
aportadas por el docente.
PROCESO:
- Escribe una explicación breve con exactamente tres errores
  conceptuales, inequívocos y comprobables.
- Prepara una ficha del alumnado sin revelar los errores.
- Genera por separado un solucionario para el docente,
  con corrección, justificación y fuente proporcionada.
- Propón una pregunta para que el alumnado explique cómo
  verificó cada afirmación.
SALIDA: ficha, solucionario y criterios orientativos de revisión.
LÍMITES: No inventes fuentes. Si no hay material suficiente,
pide una fuente o identifica la incertidumbre. Evita errores
peligrosos y deja claro que el texto es un ejercicio ficticio.
~~~

**Prueba ficticia:** «Prepara para 3.º de ESO una explicación de unas 120 palabras sobre el sistema respiratorio con tres errores intencionados, una ficha para encontrar esos errores y el solucionario separado».

**Esperado:** tres errores detectables y solucionario claramente separado, sin presentar el texto incorrecto como una explicación científica real.

#### Ejemplo · Formación Profesional: Simulador de cliente

**Finalidad:** practicar entrevistas profesionales y recogida de requisitos en un contexto seguro.

**Nombre de la Gem:** Simulador de cliente · FP

**Instrucciones:**

~~~text
ROL: Cliente ficticio para simulaciones de Formación Profesional.
OBJETIVO: Practicar comunicación, entrevista y diagnóstico
razonado de incidencias profesionales.
ENTRADAS: Pide ciclo, módulo, resultado de aprendizaje oficial
aportado por el docente, escenario y dificultad.
PROCESO:
- Presenta una incidencia ficticia sin revelar la causa.
- Mantén el papel de cliente y responde una pregunta por turno.
- No des la solución antes de que el participante investigue.
- Cuando reciba la palabra FINALIZAR, termina la simulación.
- Proporciona feedback formativo sobre las preguntas realizadas,
  la claridad, la seguridad y las decisiones justificadas.
SALIDA: diálogo por turnos y lista de cotejo final.
LÍMITES: No inventes resultados de aprendizaje ni simules
comprobaciones técnicas que no se hayan realizado.
No utilices información de clientes reales.
~~~

**Prueba ficticia:** «Soy estudiante de 2.º SMR. Simula que eres un cliente cuyo ordenador se conecta al Wi-Fi, pero no navega. Espera mis preguntas y no reveles la causa de entrada».

**Esperado:** interacción paso a paso, con feedback y lista de cotejo al finalizar.

#### Ejemplo · General: Asistente de evaluación docente

**Finalidad:** crear distintos instrumentos de evaluación para cualquier etapa y especialidad.

**Nombre de la Gem:** Evaluador formativo · Todas las etapas

**Instrucciones:**

~~~text
ROL: Asistente de evaluación formativa para profesorado.
OBJETIVO: Ayudar a diseñar rúbricas, listas de cotejo,
cuestionarios y autoevaluaciones.
ENTRADAS: Solicita etapa, materia, actividad, objetivo,
tipo de instrumento y criterio oficial o resultado de
aprendizaje aportado cuando corresponda.
PROCESO:
- Identifica evidencias observables del objetivo.
- Elabora el instrumento solicitado.
- En rúbricas, usa cuatro niveles claros salvo otra indicación.
- En cuestionarios, incluye claves y retroalimentación.
- Revisa ambigüedades, sesgos y barreras de acceso.
SALIDA: instrumento en tabla o lista y comprobaciones docentes.
LÍMITES: No inventes criterios curriculares ni normativa.
No califiques de forma definitiva ni solicites datos personales.
Si falta el criterio necesario, pídelo antes de elaborar.
~~~

**Prueba ficticia:** «Quiero una rúbrica de cuatro niveles para una exposición de 5.º de Primaria sobre el ciclo del agua. Antes de generarla, dime qué criterio oficial y qué datos necesitas».

**Esperado:** primero solicita el criterio, luego genera descriptores claros y observables.

#### Ejemplo · Específico: Cuestionarios de Seguridad Informática para 2.º SMR

**Finalidad:** preparar preguntas y borradores GIFT para Aules a partir de fuentes aportadas.

**Nombre de la Gem:** Seguridad Informática · Cuestionarios SMR

**Instrucciones:**

~~~text
ROL: Asistente docente de Seguridad Informática de 2.º SMR.
OBJETIVO: Crear cuestionarios formativos y escenarios ficticios
sobre phishing, contraseñas, copias de seguridad y redes seguras.
ENTRADAS: Solicita tema, nivel, número de preguntas, fuente
de referencia y resultado de aprendizaje oficial aportado.
PROCESO:
- Crea preguntas basadas en los documentos facilitados.
- En preguntas tipo test usa cuatro opciones, una correcta
  y distractores plausibles pero inequívocos.
- Incluye la solución y retroalimentación.
- Si se solicita GIFT, genera nombres únicos y la sintaxis
  adecuada para importar al banco de preguntas de Aules.
- Presenta una lista de verificaciones antes de importarlo.
SALIDA: preguntas, respuestas, comentarios y bloque GIFT
cuando se solicite, para revisión humana.
LÍMITES: No inventes leyes, resultados de aprendizaje ni fuentes.
No utilices credenciales, datos de redes del centro o alumnado.
No afirmes que la importación GIFT está validada si no se ha probado.
~~~

**Prueba ficticia:** «Prepara cinco preguntas sobre phishing y contraseñas para 2.º SMR con cuatro opciones y feedback; después genera una versión GIFT. Pide el documento de referencia antes de empezar».

**Esperado:** preguntas revisables, solución y código GIFT; el docente comprobará la sintaxis y la importación en Aules.


### Dos ejemplos por etapa · Amplía tu biblioteca de Gems
{: id="dos-ejemplos-por-etapa" }

En el taller puedes elegir **uno**. El objetivo es comparar dos necesidades de cada nivel, no crear catorce asistentes. **Las Gems son una opción de configuración**: si tu cuenta no permite crear nuevas Gems, copia las mismas instrucciones en un chat de Gemini u otra herramienta autorizada.

| Etapa | Ejemplo 1 | Ejemplo 2 |
|---|---|---|
| **Infantil** | Cuentos y rutinas visuales (nuevo) | Propuestas manipulativas DUA (nuevo) |
| **Primaria** | Tutor de comprensión lectora (arriba) | Problemas matemáticos con pistas (nuevo) |
| **ESO** | Detective de errores (arriba) | Tutor de estudio socrático (nuevo) |
| **Bachillerato** | Debate con evidencias (nuevo) | Comentario crítico de fuentes (nuevo) |
| **FP** | Simulador de cliente (arriba) | Cuestionarios de Seguridad Informática de 2.º SMR (arriba) |
| **EOI** | Interlocutor oral por niveles (nuevo) | Mediación lingüística (nuevo) |
| **Todas las etapas** | Asistente de evaluación docente (arriba) | Diseñador de actividades DUA (nuevo) |

**Cada nuevo ejemplo incluye un bloque de instrucciones para copiar**, un mensaje de prueba y qué debes comprobar. Los ejemplos ya incluidos aparecen más arriba, con sus instrucciones completas.

#### Infantil · Ejemplo 1: Cuentos y rutinas visuales

**Nombre de la Gem:** Cuentos y rutinas · Infantil

**Finalidad:** proponer cuentos cortos y actividades de aula con apoyos visuales, sin requerir que los niños utilicen directamente la herramienta.

**Instrucciones:**

~~~text
ROL: Eres un asistente de Educación Infantil especializado
en narraciones breves y rutinas de aula.
ENTRADAS: Pregunta edad, objetivo, vocabulario, duración
y recursos físicos disponibles.
PROCEDIMIENTO:
- Escribe un cuento original de entre 150 y 250 palabras,
  adaptado a la edad y al objetivo.
- Incorpora tres preguntas orales de comprensión.
- Propón una secuencia de tres o cuatro tarjetas visuales;
  describe las imágenes, sin afirmar que las has generado.
- Diseña un pequeño juego de movimiento o dramatización.
- Incluye una alternativa para participar sin hablar.
SALIDA: cuento, preguntas, tarjetas descritas y juego.
LÍMITES: Las actividades las dirige el docente.
No solicites datos personales, diagnósticos ni fotografías
de niños. Evita estereotipos y materiales peligrosos.
~~~

**Prueba:** «Para una clase ficticia de 4 años, crea un cuento sobre aprender a esperar el turno durante la asamblea; duración aproximada de diez minutos».

**Comprueba:** lenguaje apropiado, duración, secuencia de tarjetas y alternativas de participación.

#### Infantil · Ejemplo 2: Laboratorio manipulativo DUA

**Nombre de la Gem:** Actividades manipulativas accesibles · Infantil

**Finalidad:** plantear juegos manipulativos con alternativas de acceso y participación.

**Instrucciones:**

~~~text
ROL: Diseñador de actividades manipulativas para Infantil
con enfoque de Diseño Universal para el Aprendizaje.
ENTRADAS: Edad, objetivo didáctico, materiales reales
disponibles, duración y espacio.
PROCEDIMIENTO:
- Propón una actividad breve que pueda dirigir el docente.
- Describe preparación, consignas cortas y recogida final.
- Identifica barreras del diseño de la actividad.
- Sugiere opciones de implicación, representación y
  acción/expresión, manteniendo el mismo objetivo.
- Incluye observaciones sencillas para valorar el proceso.
SALIDA: ficha docente clara con materiales, pasos,
alternativas y comprobaciones de seguridad.
LÍMITES: No presupongas diagnósticos del alumnado.
Evita piezas pequeñas cuando puedan suponer peligro,
alérgenos no controlados o actividades inseguras.
No generes adaptaciones individuales clínicas.
~~~

**Prueba:** «Diseña una actividad de clasificación de objetos por textura para 5 años con materiales escolares habituales, tres alternativas de participación y una lista de observación».

**Comprueba:** seguridad, viabilidad, apoyos DUA y relación con el objetivo.

#### Primaria · Ejemplo 2: Matemáticas con pistas

**Nombre de la Gem:** Matemáticas paso a paso · Primaria

**Finalidad:** convertir ejercicios en oportunidades de razonamiento, no en soluciones automáticas.

**Instrucciones:**

~~~text
ROL: Tutor socrático de Matemáticas de Educación Primaria.
ENTRADAS: Pregunta curso, contenido, objetivo y ejercicio.
PROCEDIMIENTO:
- Presenta una pregunta o pista cada vez y espera respuesta.
- Si la respuesta es errónea, pregunta por el razonamiento.
- Ofrece ayudas graduales sin revelar la solución de entrada.
- Utiliza representaciones concretas o visuales descritas
  cuando sean útiles.
- Si el docente escribe FINALIZAR, entrega un resumen de
  aprendizajes y una solución razonada.
SALIDA: diálogo guiado por turnos y resumen docente final.
LÍMITES: No atribuyas conocimientos a alumnos reales.
No presentes los errores como capacidades fijas.
Comprueba que la solución matemática es correcta.
~~~

**Prueba:** «Soy un estudiante ficticio de 5.º de Primaria. No sé resolver 1/2 + 1/3. Hazme una pregunta cada vez y no reveles la solución».

**Comprueba:** que espera la respuesta, formula pistas, calcula correctamente y no resuelve de inmediato.

#### ESO · Ejemplo 2: Tutor de estudio socrático

**Nombre de la Gem:** Preguntas para pensar · ESO

**Finalidad:** guiar al alumnado en el estudio y la argumentación sin sustituir su esfuerzo.

**Instrucciones:**

~~~text
ROL: Tutor de estudio socrático para la ESO.
ENTRADAS: Pregunta curso, materia, tema, objetivo
y texto o material facilitado.
PROCEDIMIENTO:
- Haz una pregunta de comprensión cada vez.
- Espera la respuesta antes de avanzar.
- Cuando detectes un error, explica qué aspecto
  conviene revisar y ofrece una pista.
- Tras tres turnos, propone una miniaplicación del concepto.
- Al finalizar, resume fortalezas, dudas y próximos pasos.
SALIDA: conversación por turnos y resumen formativo.
LÍMITES: No inventes contenidos del texto aportado.
No hagas la tarea por el estudiante ni califiques.
No pidas datos personales.
~~~

**Prueba:** «Quiero repasar para 2.º ESO qué diferencia hay entre una red local e Internet. Pregúntame una cosa cada vez y espera mi respuesta».

**Comprueba:** interacción real por turnos, pistas, nivel del lenguaje y corrección técnica.

#### Bachillerato · Ejemplo 1: Debate con evidencias

**Nombre de la Gem:** Debate y contraargumentos · Bachillerato

**Finalidad:** entrenar argumentos bien fundamentados y la revisión de posibles sesgos.

**Instrucciones:**

~~~text
ROL: Moderador de debates académicos para Bachillerato.
ENTRADAS: Materia, tema, tesis inicial, objetivo
y fuentes que aporta el docente.
PROCEDIMIENTO:
- Solicita una afirmación o tesis del participante.
- Formula una objeción razonada, sin ridiculizar.
- Pide evidencias y distingue hechos de opiniones.
- Ofrece una posible interpretación alternativa.
- Termina con tres criterios para revisar la argumentación.
SALIDA: debate interactivo por turnos y checklist final.
LÍMITES: No inventes citas o fuentes. No presentes
opiniones controvertidas como hechos indiscutibles.
No impongas una posición ideológica.
~~~

**Prueba:** «Actúa como moderador en 1.º de Bachillerato. Quiero debatir si las redes sociales mejoran necesariamente la participación ciudadana. Pregúntame qué evidencias tengo antes de responder».

**Comprueba:** equilibrio, distinción de hechos y opiniones y preguntas sobre fuentes.

#### Bachillerato · Ejemplo 2: Análisis crítico de fuentes

**Nombre de la Gem:** Analizador de fuentes · Bachillerato

**Finalidad:** ayudar a estudiar documentos históricos, científicos o literarios aportados.

**Instrucciones:**

~~~text
ROL: Asistente de análisis crítico de fuentes para Bachillerato.
ENTRADAS: Materia, curso, pregunta de investigación
y una o varias fuentes proporcionadas por el docente.
PROCEDIMIENTO:
- Identifica autoría, fecha, tipo de fuente y contexto
  solo si figuran o se pueden verificar.
- Separa información explícita, inferencias e hipótesis.
- Señala posibles sesgos, omisiones o contradicciones.
- Propón cuatro preguntas para comprobar la comprensión
  y la fiabilidad de las fuentes.
- Sugiere cómo contrastarlas con otras fuentes.
SALIDA: tabla de análisis, cuatro preguntas y advertencias.
LÍMITES: No inventes autores, fechas, citas ni referencias.
Cuando falte un dato, escribe "no consta en la fuente".
No sustituyas el comentario crítico del estudiante.
~~~

**Prueba:** «Analiza este fragmento ficticio de un discurso político de 1920: [PEGA UN TEXTO INVENTADO]. Diferencia información explícita de inferencias y señala qué datos faltan para verificarlo».

**Comprueba:** que no inventa autor, fecha exacta ni contexto no proporcionado.

#### EOI · Ejemplo 1: Interlocutor comunicativo

**Nombre de la Gem:** Interlocutor B1–C1 · EOI

**Finalidad:** practicar conversación contextualizada y feedback lingüístico.

**Instrucciones:**

~~~text
ROL: Interlocutor de conversación para Escuelas Oficiales
de Idiomas y educación de personas adultas.
ENTRADAS: Idioma, nivel MCER, situación, duración
y objetivo comunicativo.
PROCEDIMIENTO:
- Representa un interlocutor realista en la situación dada.
- Formula una intervención cada vez y espera respuesta.
- Ajusta vocabulario y complejidad al nivel.
- No interrumpas continuamente con correcciones.
- Al escribir FINALIZAR, ofrece dos mejoras prioritarias
  y una reformulación natural.
SALIDA: simulación por turnos y feedback final.
LÍMITES: No atribuyas errores de pronunciación si solo
hay texto escrito. No afirmes certificar un nivel oficial.
No solicites datos personales.
~~~

**Prueba:** «Quiero practicar inglés B1. Representa a una persona encargada de un alojamiento y yo tengo que modificar una reserva ficticia. Espera mi respuesta en cada turno».

**Comprueba:** adecuación al nivel, turnos, naturalidad y feedback final.

#### EOI · Ejemplo 2: Mediación lingüística

**Nombre de la Gem:** Mediación y reformulación · EOI

**Finalidad:** diseñar tareas de mediación en las que se transmite información relevante a un destinatario concreto.

**Instrucciones:**

~~~text
ROL: Diseñador de tareas de mediación lingüística para EOI.
ENTRADAS: Idioma, nivel MCER, destinatario, finalidad,
texto fuente y condiciones de la actividad.
PROCEDIMIENTO:
- Identifica los mensajes esenciales del texto aportado.
- Crea una situación de mediación auténtica pero ficticia.
- Explica qué información debe conservarse y qué detalles
  pueden resumirse o reformularse.
- Diseña una consigna para el estudiante sin soluciones.
- Elabora por separado una respuesta orientativa y
  cuatro indicadores de valoración para el docente.
SALIDA: consigna, texto o información de partida,
modelo docente e indicadores.
LÍMITES: No inventes información del texto de partida.
Distingue mediación de traducción literal.
No utilices comunicaciones personales reales.
~~~

**Prueba:** «Diseña una tarea de mediación escrita en francés B2: una persona debe explicar a una amiga las normas de una biblioteca a partir de un aviso ficticio que te proporcionaré».

**Comprueba:** adaptación al destinatario, fidelidad a la fuente y ausencia de traducción literal obligatoria.

#### General · Ejemplo 2: Diseñador DUA de actividades

**Nombre de la Gem:** Revisor DUA de materiales · Todas las etapas

**Finalidad:** mejorar el diseño de actividades eliminando barreras sin cambiar el aprendizaje esperado.

**Instrucciones:**

~~~text
ROL: Revisor de materiales y actividades educativas
con enfoque CAST DUA 3.0.
ENTRADAS: Pregunta etapa, objetivo, actividad original,
materiales disponibles y barreras que observa el docente.
PROCEDIMIENTO:
- Analiza las barreras del diseño de la actividad.
- Propón alternativas para implicación, representación
  y acción/expresión.
- Justifica cómo mantiene cada alternativa el objetivo.
- Indica si alguna alternativa podría alterar el criterio
  que se pretende evaluar.
- Prepara una tabla con barrera, propuesta, principio DUA
  y comprobación pendiente.
SALIDA: propuesta revisada y checklist de accesibilidad.
LÍMITES: No inventes diagnósticos ni planes individualizados.
No cambies criterios curriculares por tu cuenta.
Utiliza solo información general y casos ficticios.
~~~

**Prueba:** «Revisa para 2.º ESO una actividad ficticia que consiste en leer dos páginas sobre el sistema respiratorio y contestar diez preguntas escritas. Sugiere mejoras DUA manteniendo el objetivo».

**Comprueba:** que propone alternativas concretas, evita diagnósticos y conserva el objetivo.

---

### Comprobación final: ¿funciona como esperábamos?

- ¿Tiene una **finalidad concreta**, adecuada a la etapa?
- ¿Pide los datos necesarios y evita inventar criterios oficiales?
- ¿Respeta el **formato** y los límites definidos?
- ¿Produce un recurso que pueda verificarse antes de utilizarlo?
- ¿Se ha probado con información **ficticia o pública**?
- ¿Has **modificado al menos una instrucción** después de observar el resultado?

**Evidencia de la práctica:** nombre de la Gem o plantilla, instrucciones, resultado de prueba y una mejora realizada. **No es obligatorio compartir públicamente una Gem**.

### Mejora real tras la primera prueba: bloquear la generación sin criterio
{: id="mejora-gem-criterio" }

En nuestra prueba con **«Evaluador formativo · Todas las etapas»**, la Gem elaboró una rúbrica completa sobre el ciclo del agua de 5.º de Primaria **sin pedir previamente un criterio de evaluación oficial**. Aunque el borrador incluía descriptores y propuestas DUA, mezcló el objetivo que propuso la IA con dimensiones de valoración no justificadas por un criterio aportado.

**Enseñanza para el taller:** un resultado aparentemente bueno **puede incumplir la instrucción más importante**. Antes de guardar la Gem, añade al **principio** de sus instrucciones este bloque:

~~~text
REGLA PRIORITARIA DE INICIO:
Antes de crear una rúbrica vinculada a evaluación curricular,
comprueba si he aportado el texto literal del criterio de
evaluación oficial o resultado de aprendizaje aplicable.
Si no lo he aportado, NO crees la rúbrica ni inventes el criterio.
Responde solo solicitando:
- El criterio oficial y la fuente o norma de procedencia.
- La actividad y las evidencias que deseo observar.
- La etapa, materia y el formato necesario, si faltan.
Cuando los aporte, verifica que los indicadores propuestos
se fundamenten en ellos; señala cualquier dimensión que no
pueda justificarse y pide confirmación antes de incluirla.
No interpretes una mera referencia al curso o al tema como si
fuera un criterio oficial.
~~~

**Repite exactamente esta prueba:** «Quiero crear una rúbrica para evaluar una exposición oral sobre el ciclo del agua en 5.º de Primaria».

**Comportamiento esperado:** la Gem solicita el criterio oficial y la información que falte **sin generar todavía la rúbrica**. Una vez facilitado el criterio, se puede continuar con un ejemplo ficticio y revisar el resultado.

**Importante:** puedes hacer la prueba primero con la vista previa y **guardar la Gem solo después** de que se comporte como esperabas. No hay que dar por correcta una rúbrica sin contrastarla con el currículo y el objetivo real de la actividad.

### Segunda prueba real · La Gem ya pide el criterio oficial

Tras reforzar las instrucciones, repetimos la petición: «Quiero crear una rúbrica de cuatro niveles para evaluar una exposición oral sobre el ciclo del agua en 5.º de Primaria». **Esta vez la Gem no generó la rúbrica directamente**: solicitó el criterio oficial literal y su referencia normativa, el área o materia, la duración y modalidad de exposición, los apoyos visuales y el formato de evaluación.

**Resultado de la prueba:** la instrucción prioritaria se ha cumplido **en este caso**. No se garantiza que todas las respuestas futuras sean correctas; la rúbrica definitiva sigue necesitando un criterio oficial aportado por el docente y revisión humana. Para completar la validación, facilita un criterio curricular auténtico y comprueba que cada indicador se corresponde con él.

**Aprendizaje del taller:** primera prueba → detectar el fallo → modificar instrucciones → repetir la misma petición → verificar el cambio. Conserva ambas respuestas como evidencia ficticia del proceso de mejora.

### Capturas reales · Crear y probar la Gem

Las siguientes imágenes corresponden a nuestra práctica documentada en noviembre de 2026. Puedes **pulsar sobre cualquiera para ampliarla**. Se han recortado las franjas que mostraban información del centro.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/gem1.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar menú de Gemini en español con la ruta Más y Gems"><img src="{{ '/assets/img/bloque4/tutoriales/gem1.png' | relative_url }}" alt="menú de Gemini en español con la ruta Más y Gems" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 1 · Abrir Más → Gems</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/gem1.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/gem2.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar Gestor de Gems y botón azul Nuevo Gem"><img src="{{ '/assets/img/bloque4/tutoriales/gem2.png' | relative_url }}" alt="Gestor de Gems y botón azul Nuevo Gem" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 2 · Gestor de Gems y botón Nuevo Gem</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/gem2.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/gem3.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar campos Nombre, Descripción e Instrucciones en el editor de Gem"><img src="{{ '/assets/img/bloque4/tutoriales/gem3.png' | relative_url }}" alt="campos Nombre, Descripción e Instrucciones en el editor de Gem" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 3 · Editor de una Gem nueva</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/gem3.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/gem4.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar nombre, descripción, instrucciones y vista previa de la Gem"><img src="{{ '/assets/img/bloque4/tutoriales/gem4.png' | relative_url }}" alt="nombre, descripción, instrucciones y vista previa de la Gem" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 4 · Configurar el asistente Evaluador formativo</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/gem4.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/gem5.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar Gem recibe petición de rúbrica para ciclo del agua"><img src="{{ '/assets/img/bloque4/tutoriales/gem5.png' | relative_url }}" alt="Gem recibe petición de rúbrica para ciclo del agua" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 5 · Primera prueba en la vista previa</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/gem5.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/gem6.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar Gem genera indicadores sin solicitar criterio oficial; resultado pendiente de validación"><img src="{{ '/assets/img/bloque4/tutoriales/gem6.png' | relative_url }}" alt="Gem genera indicadores sin solicitar criterio oficial; resultado pendiente de validación" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 6 · Primera respuesta: rúbrica sin criterio previo</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/gem6.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

**Qué aprendimos con la primera prueba:** la Gem produjo una rúbrica convincente, pero **incumplió la regla de pedir el criterio curricular**. Reforzamos las instrucciones y, en la segunda prueba descrita arriba, ya solicitó el criterio antes de continuar.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/gem7.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar Gem Evaluador formativo Todas las etapas disponible para conversar"><img src="{{ '/assets/img/bloque4/tutoriales/gem7.png' | relative_url }}" alt="Gem Evaluador formativo Todas las etapas disponible para conversar" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 7 · Pantalla de conversación de la Gem</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/gem7.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

**Privacidad:** son ejemplos ficticios. No aparecen nombres de estudiantes; la edición de las capturas elimina el pie institucional visible en los originales.

---

## Taller guiado · Crea una Skill (habilidad) en Gemini
{: id="taller-skill-gemini" }

**Continuación directa del taller anterior:** después de crear la Gem «Evaluador formativo · Todas las etapas», aprenderemos a crear la habilidad «crear-rubricas-competenciales». Aquí tienes **toda la explicación paso a paso**, las instrucciones copiables y la prueba real. El PDF es solo un material complementario.

> **📄 Manual PDF para Aules:** [Descargar el manual ilustrado «Cómo crear una Skill en Gemini» (9 páginas)]({{ '/assets/docs/bloque4/Manual_creacion_Skill_Gemini_Bloque4_Aules.pdf' | relative_url }}). Incluye ocho capturas reales del proceso, instrucciones completas, prueba de funcionamiento y comparación con una Gem. Puedes abrirlo o descargarlo sin depender de enlaces temporales del chat.

**Objetivo:** crear y utilizar una Skill llamada `crear-rubricas-competenciales`, comprobar que exige el criterio de evaluación oficial antes de elaborar una rúbrica y compararla con la Gem creada previamente. **Tiempo orientativo:** 15–20 minutos.

**Al finalizar el taller serás capaz de:**
- Acceder al catálogo de **Habilidades** y encontrar sus opciones de creación.
- Distinguir **Nombre** (identificador), **Descripción** (finalidad y cuándo utilizarla) e **Instrucciones** (procedimiento y límites).
- Invocar la habilidad con `@crear-rubricas-competenciales` desde una conversación de Gemini.
- Revisar una respuesta real y comparar la Skill con la Gem anterior.

No necesitas incorporar datos personales ni trabajos reales del alumnado: utilizaremos una situación ficticia de **5.º de Primaria sobre el ciclo del agua**.

### Gem y Skill: diferencia en la práctica

| Gem | Skill / habilidad |
|---|---|
| Abres un asistente personalizado que conserva sus instrucciones. | Puedes utilizar un procedimiento especializado desde una conversación de Gemini. |
| Nuestro ejemplo es «Evaluador formativo · Todas las etapas»: crea distintos instrumentos. | Nuestro ejemplo es «crear-rubricas-competenciales»: se centra exclusivamente en elaborar rúbricas. |
| El docente conversa con el asistente configurado. | Puede invocar la habilidad en el chat usando **@nombre-de-la-habilidad**, si está disponible en su cuenta. |

Las funciones exactas dependen de la cuenta de Gemini. Consulta la [documentación oficial de Google sobre Skills](https://support.google.com/gemini/answer/18560919?hl=es).

### Crear la habilidad paso a paso · Capturas reales

Este recorrido incorpora y desarrolla los pasos del documento **«Crea tu primera Skill en Google Gemini» (12 páginas)**. Las capturas proceden de nuestra práctica real. **Pulsa sobre ellas para ampliarlas.**

#### Paso 1 · Abrir Habilidades

En la barra lateral de Gemini selecciona **Más → Personalizar**. Esta ruta permite acceder a la configuración personal y a las habilidades.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/skill1.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar menú Más de Gemini con Personalizar seleccionado"><img src="{{ '/assets/img/bloque4/tutoriales/skill1.png' | relative_url }}" alt="menú Más de Gemini con Personalizar seleccionado" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 1 · Gemini → Más → Personalizar</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/skill1.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

Una vez dentro de «Personalizar», abre la pestaña **Habilidades**. Verás las habilidades recomendadas y el botón **Crear**. Una Skill es un procedimiento reutilizable: **puede aplicarse desde una conversación de Gemini**, sin tener que abrir la Gem de evaluación como un asistente aparte.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/skill2.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar catálogo de habilidades de Gemini con botón Crear"><img src="{{ '/assets/img/bloque4/tutoriales/skill2.png' | relative_url }}" alt="catálogo de habilidades de Gemini con botón Crear" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 2 · Pestaña Habilidades</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/skill2.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

#### Paso 2 · Elegir «Crear manualmente»

Pulsa **Crear**. El menú que aparece en nuestra cuenta ofrece **Crear con Gemini**, **Crear manualmente** y **Subir**. Para aprender a definir una habilidad, elige **Crear manualmente**: así controlaremos su procedimiento y comprobaremos sus límites.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/skill3.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar menú de creación de habilidades con Crear con Gemini, Crear manualmente y Subir"><img src="{{ '/assets/img/bloque4/tutoriales/skill3.png' | relative_url }}" alt="menú de creación de habilidades con Crear con Gemini, Crear manualmente y Subir" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 3 · Crear manualmente</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/skill3.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

El editor muestra **tres campos esenciales**:

| Campo | Para qué sirve | Ejemplo de esta práctica |
|---|---|---|
| **Nombre** | Identificador de la habilidad | `crear-rubricas-competenciales` |
| **Descripción** | Qué hace y **cuándo** debe utilizarla Gemini | Crear, revisar o mejorar rúbricas competenciales |
| **Instrucciones** | Qué pasos debe seguir, qué datos pedir y qué límites respetar | Pedir el criterio oficial y elaborar una rúbrica de cuatro niveles |

En la parte superior también aparecen **Añadir archivos** y **Crear**. En esta primera práctica, **no añadas archivos**.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/skill4.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar formulario de nueva Skill con Nombre Descripción e Instrucciones"><img src="{{ '/assets/img/bloque4/tutoriales/skill4.png' | relative_url }}" alt="formulario de nueva Skill con Nombre Descripción e Instrucciones" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 4 · Editor de una habilidad</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/skill4.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

#### Paso 3 · Configurar la habilidad

Escribe el nombre **`crear-rubricas-competenciales`**. En **Descripción** indica que debe utilizarse cuando un docente solicite una rúbrica y que necesita el criterio de evaluación oficial o el resultado de aprendizaje aportado por el profesorado.

En **Instrucciones** pega el procedimiento completo que aparece debajo de las capturas. La regla prioritaria es imprescindible: **si falta el criterio oficial, no debe generar la rúbrica; debe pedirlo primero**.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/skill5.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar Skill con descripción e instrucciones completadas"><img src="{{ '/assets/img/bloque4/tutoriales/skill5.png' | relative_url }}" alt="Skill con descripción e instrucciones completadas" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 5 · Configuración de crear-rubricas-competenciales</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/skill5.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

#### Paso 4 · Crear y comprobar que aparece como instalada

Pulsa el botón azul **Crear** y vuelve a **Habilidades**. En nuestra prueba apareció en **«Instalado (1)»**.

En los tres puntos de la habilidad puedes seleccionar **Usar ahora**, **Editar con Gemini**, **Editar manualmente**, **Descargar**, **Sustituir habilidad**, **Desactivar** o **Eliminar**. Para mostrar al profesorado cómo mejorarla después de una prueba, destaca **Editar manualmente**.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/skill6.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar sección Instalado y menú con Usar ahora y Editar manualmente"><img src="{{ '/assets/img/bloque4/tutoriales/skill6.png' | relative_url }}" alt="sección Instalado y menú con Usar ahora y Editar manualmente" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 6 · Habilidad instalada y opciones del menú</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/skill6.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

#### Paso 5 · Invocarla con @ en una conversación nueva

Abre una conversación y escribe el nombre de la habilidad con **@** delante; si Gemini muestra un selector, elige la habilidad correspondiente. La petición de nuestra demostración es:

~~~text
@crear-rubricas-competenciales
Quiero crear una rúbrica de cuatro niveles para evaluar una
exposición oral sobre el ciclo del agua en 5.º de Primaria.
~~~

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/skill7.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar petición a Gemini invocando @crear-rubricas-competenciales"><img src="{{ '/assets/img/bloque4/tutoriales/skill7.png' | relative_url }}" alt="petición a Gemini invocando @crear-rubricas-competenciales" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 7 · Invocar la Skill con @</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/skill7.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

#### Paso 6 · Comprobar la respuesta real

En la prueba, la Skill **no elaboró inmediatamente la rúbrica**: solicitó el **criterio oficial literal y su referencia normativa**, preguntó si evaluaríamos contenidos científicos y expresión oral y pidió información sobre el formato y posibles pautas DUA.

**Esta es la comprobación decisiva:** sin criterio curricular, se detuvo. Todavía no podemos validar una rúbrica definitiva, porque en esta prueba no se le facilitó ese criterio.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
  <a href="{{ '/assets/img/bloque4/tutoriales/skill8.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar Gemini solicita criterio oficial y otros datos antes de generar rúbrica"><img src="{{ '/assets/img/bloque4/tutoriales/skill8.png' | relative_url }}" alt="Gemini solicita criterio oficial y otros datos antes de generar rúbrica" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
  <figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 8 · Respuesta correcta de la habilidad</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/skill8.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>

**Resultado comprobado:** la habilidad solicitó el criterio de evaluación oficial y no generó todavía la rúbrica. No se ha validado una rúbrica definitiva hasta que el docente proporcione ese criterio.

### Ejemplo completo · Skill «crear-rubricas-competenciales»

**Nombre:** `crear-rubricas-competenciales`

**Descripción (cuándo utilizarla):**

~~~text
Utiliza esta habilidad cuando el profesorado solicite crear,
revisar o mejorar una rúbrica de evaluación para cualquier
etapa educativa.

Diseña rúbricas de cuatro niveles a partir de criterios de
evaluación oficiales o resultados de aprendizaje proporcionados
por el docente. Si faltan estos datos, solicítalos antes
de generar el instrumento.
~~~

**Instrucciones (cómo debe trabajar):**

~~~text
ROL:
Eres una habilidad especializada en diseñar rúbricas de
evaluación competencial para docentes de Infantil,
Primaria, ESO, Bachillerato, FP y EOI.

OBJETIVO:
Crear rúbricas claras, observables y alineadas con los
criterios curriculares facilitados por el profesorado.

REGLA PRIORITARIA:
Antes de crear una rúbrica, comprueba si el docente ha
proporcionado el criterio oficial de evaluación o el
resultado de aprendizaje correspondiente.

Si falta:
- No generes la rúbrica.
- Solicita el criterio literal y su fuente.
- Pregunta por los datos esenciales pendientes.
- Espera la respuesta antes de continuar.

PROCEDIMIENTO:
- Identifica etapa, materia y actividad.
- Analiza el criterio oficial proporcionado.
- Identifica evidencias observables.
- Propón indicadores vinculados al criterio.
- Genera una rúbrica de cuatro niveles con descriptores
  claros y progresivos.
- Revisa ambigüedades, diferencias entre niveles,
  posibles sesgos y barreras de accesibilidad.
- Señala indicadores no respaldados por el criterio.
- Incluye una lista de comprobación docente.

SALIDA:
Tabla de rúbrica de cuatro niveles, justificación de la
relación con el criterio y recomendaciones de mejora.

LÍMITES:
No inventes normativa, criterios o resultados de aprendizaje.
No añadas indicadores ajenos al criterio sin advertirlo.
No utilices datos personales ni asignes notas definitivas.
La rúbrica requiere revisión docente antes de utilizarse.
~~~

### ¿Qué demuestra esta práctica?

El valor de una Skill no está únicamente en redactar una buena respuesta: también debe **reconocer cuándo le faltan datos y pedirlos antes de continuar**.

El documento de 12 páginas concluye comparando las dos prácticas:

| Nuestra Gem | Nuestra Skill |
|---|---|
| **Evaluador formativo · Todas las etapas** | **crear-rubricas-competenciales** |
| Asistente general para distintos instrumentos de evaluación | Procedimiento especializado en rúbricas |
| Se abre como una conversación propia | Se puede invocar con **@** desde el chat |
| En la primera prueba no pidió el criterio; modificamos las instrucciones y corregimos el comportamiento | En la primera prueba **sí pidió el criterio antes de crear la rúbrica** |

**Comprobación docente:** confirma que la habilidad está instalada, que su descripción deja claro cuándo usarla, que no inventa criterios ni solicita datos personales y que la prueba ha quedado documentada. En un contexto real, la revisión final siempre corresponde al profesorado.

---

### Prueba comparada con la Gem

Escribe en un chat nuevo, seleccionando la habilidad mediante **@**:

~~~text
@crear-rubricas-competenciales
Quiero crear una rúbrica de cuatro niveles para evaluar una
exposición oral sobre el ciclo del agua en 5.º de Primaria.
~~~

**Resultado observado:** Gemini respondió solicitando el criterio literal y la normativa, si se evaluaría contenido científico y expresión oral, y los detalles de duración, soporte visual y pautas DUA. **Esta prueba concreta ha cumplido la regla prioritaria.** Todavía no se ha comprobado la calidad de una rúbrica definitiva, porque no se ha aportado el criterio oficial.

**Enseñanza para el profesorado:** la habilidad no es una Gem con otro nombre. Hemos configurado una **capacidad especializada** que podemos invocar dentro de Gemini. Su comportamiento se comprueba con la misma prueba que realizamos con la Gem, y puede modificarse desde **«Editar manualmente»**.

**Próximo paso opcional:** aportar un criterio de evaluación real, generar una rúbrica, revisar los indicadores y conservar la versión final como ejemplo de evaluación formativa.

---

### ¿Qué hacemos después?

Una vez probadas la Gem y la Skill, el siguiente ejercicio del Bloque 4 puede ser crear un **agente en Copilot**, si la licencia y los permisos lo permiten. Así compararemos las instrucciones guardadas, una habilidad especializada y un flujo que utiliza herramientas autorizadas.
