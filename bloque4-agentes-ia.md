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

### Cinco ejemplos listos para copiar y probar
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

### Comprobación final: ¿funciona como esperábamos?

- ¿Tiene una **finalidad concreta**, adecuada a la etapa?
- ¿Pide los datos necesarios y evita inventar criterios oficiales?
- ¿Respeta el **formato** y los límites definidos?
- ¿Produce un recurso que pueda verificarse antes de utilizarlo?
- ¿Se ha probado con información **ficticia o pública**?
- ¿Has **modificado al menos una instrucción** después de observar el resultado?

**Evidencia de la práctica:** nombre de la Gem o plantilla, instrucciones, resultado de prueba y una mejora realizada. **No es obligatorio compartir públicamente una Gem**.

### Capturas de pantalla del tutorial

Las siguientes capturas se añadirán cuando se haya seguido el proceso en una cuenta docente autorizada. Así la guía reflejará la **interfaz real** y no imágenes inventadas:

- **Captura A:** acceso a Gems desde la barra lateral.
- **Captura B:** botón «Nueva Gem» o su equivalente.
- **Captura C:** nombre y editor de instrucciones.
- **Captura D:** apartado «Conocimientos» (si se utiliza).
- **Captura E:** vista de prueba y respuesta del asistente.
- **Captura F:** Gem guardada y prueba revisada.

Antes de publicar las capturas, **oculta la fotografía de perfil, el correo, nombres, identificadores, documentos privados y cualquier dato personal**. Cuando la transición a Skills cambie el editor, podremos actualizar este apartado conservando los prompts y las pruebas.

### Después de esta práctica

- **Gem:** conserva una configuración de asistente en Gemini, mientras esté disponible para tu cuenta.
- **Skill:** conserva un procedimiento reutilizable que Gemini puede aplicar en conversaciones compatibles.
- **Agente de Copilot:** puede incorporar instrucciones y, si hay permisos y licencias, conexiones y acciones para realizar un flujo de trabajo.

**La siguiente demostración del curso** podrá comparar la misma tarea docente realizada mediante un prompt, una Skill y un agente de Copilot; no es necesario programar los tres para completar la Actividad 4.6.
