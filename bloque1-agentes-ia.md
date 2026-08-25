---
layout: page
title: "Agentes de IA para docentes"
nav_exclude: true
---

# Agentes de IA para docentes
{: .fs-8 }

Una evolución natural del asistente de IA: más guiado, más coherente, más útil para tareas que se repiten.
{: .fs-5 .fw-300 }

---

<div class="callout callout--idea" role="note" aria-label="Qué encontrarás en esta página">
<div class="callout__titulo">💡 ¿Qué encontrarás aquí?</div>
En esta página vamos a trabajar con la idea de "agente de IA" desde dos niveles:
<br><br>
<strong>Como concepto:</strong> un asistente especializado que sigue unas instrucciones y ayuda en una tarea concreta.
<br><strong>Como práctica docente:</strong> un conjunto de instrucciones reutilizables que podemos configurar en Copilot, Gemini o ChatGPT para que la herramienta actúe de una forma determinada.
<br><br>
En este curso se puede trabajar de varias formas, según lo que permita tu cuenta:
<ul>
  <li>Con <strong>agentes reales de Copilot</strong> (Agent Builder o Copilot Studio), si la licencia lo permite.</li>
  <li>Con <strong>Gemini Gems</strong>, si la función está disponible en tu cuenta de Google.</li>
  <li>Con <strong>GPTs personalizados de ChatGPT</strong>, si tu cuenta lo permite.</li>
  <li>O usando un <strong>prompt estructurado en modo agente</strong>, sin necesidad de guardar nada. Esta es la opción más universal y no depende de permisos especiales.</li>
</ul>
Lo importante no es la herramienta, sino aprender a <strong>diseñar buenas instrucciones</strong>. Si tu cuenta permite guardarlas como agente, las guardaremos. Si no, funcionan igualmente como <strong>prompt reutilizable</strong>.
<br><br>
Encontrarás ejemplos para cada etapa educativa, una actividad práctica y criterios de uso seguro.
</div>

---

## 1. ¿Qué es un agente de IA?

Dicho de forma sencilla: un agente de IA es un asistente digital al que le has explicado, de entrada, quién es, qué tiene que hacer y cómo debe responder.

> Un agente de IA es un asistente digital especializado que recibe unas instrucciones, conoce un objetivo concreto y ayuda a realizar una tarea de forma más guiada que un chatbot general.

Imagina que Copilot o Gemini son como una persona que sabe de muchos temas: puedes preguntarle cualquier cosa, pero cada vez que abres una conversación nueva tienes que volver a contarle quién eres, qué necesitas y en qué contexto trabajas.

Un agente es diferente: es como si esa misma persona ya tuviese apuntado todo lo que necesita saber sobre su tarea. Cada vez que la llamas, sabe que es tu asistente pedagógico, conoce la estructura que quieres para tus documentos y sabe qué no debe hacer.

![Infografía: ¿Qué es un agente de IA?](assets/img/Agente_IA.png)

{: .note }
💡 Idea clave:
Un agente convierte un prompt en una herramienta reutilizable adaptada a tus necesidades docentes.

## Ejemplos de lo que puede hacer un agente educativo

### Ejemplos de lo que puede hacer un agente educativo

- Ayudar a diseñar **situaciones de aprendizaje** con estructura pedagógica coherente.
- **Adaptar textos** a distintos niveles de dificultad.
- Generar **rúbricas** de evaluación con criterios claros.
- Preparar **actividades comunicativas** para lenguas extranjeras.
- Redactar borradores de **informes no sensibles** (sin datos personales).
- Resumir **documentos o guías** públicas para extraer lo esencial.

### Lo que un agente no hace

Es importante tenerlo claro desde el principio:

- El agente **no piensa** como una persona. Genera texto probable a partir de patrones.
- **No sustituye** al docente ni a su criterio profesional.
- **Puede equivocarse**: inventar datos, malinterpretar instrucciones o producir respuestas incorrectas.
- Cualquier propuesta **siempre requiere revisión humana** antes de usarla en el aula.
- **No deben introducirse** datos personales del alumnado, informes médicos ni información sensible del centro.

<div class="callout callout--alerta" role="alert" aria-label="Aviso sobre protección de datos">
<div class="callout__titulo">⚠️ Protección de datos desde el primer momento</div>
Nunca introduzcas nombres, apellidos, datos médicos, informes psicopedagógicos ni información sensible del alumnado o del centro en ninguna herramienta de IA. Este principio se aplica a Copilot, Gemini, ChatGPT y cualquier otro agente.
</div>

---

## Agente real y "modo agente": no son exactamente lo mismo

Cuando hablamos de "usar un agente de IA", no siempre nos referimos a lo mismo. Es importante distinguir tres situaciones diferentes:

| Tipo | Qué es | ¿Se guarda? | ¿Lo podemos usar en el curso? |
|:-----|:-------|:------------|:------------------------------|
| **Agente real de Copilot** | Un asistente configurado en Microsoft 365 Copilot mediante Agent Builder o en Copilot Studio. | Sí, si la cuenta y la organización permiten crear y guardar agentes. | Solo si la opción está disponible con la cuenta @edu.gva.es. |
| **Gem de Gemini** | Un asistente personalizado de Gemini con instrucciones guardadas. | Sí, si la función Gems está disponible en la cuenta. | Sí, como alternativa para practicar, siempre sin introducir datos personales ni información sensible. |
| **GPT personalizado de ChatGPT** | Un asistente personalizado creado en ChatGPT con instrucciones guardadas, nombre, descripción y, según el plan, conocimiento o archivos de apoyo. | Sí, si la cuenta permite crear GPTs. | Sí, como alternativa para crear asistentes educativos, siempre sin datos personales ni información sensible. |
| **Modo agente mediante prompt** | Un prompt largo y estructurado que hace que Copilot, Gemini o ChatGPT se comporten como un asistente especializado durante una conversación. | No necesariamente. Hay que pegarlo o reutilizarlo cuando se necesite. | Sí. Es la opción más universal y la que no depende de permisos especiales. |

En este curso, cuando hablemos de "diseñar un agente", nos referiremos sobre todo a diseñar bien sus instrucciones. Si la herramienta permite guardarlas como agente, las guardaremos. Si no, las usaremos como **prompt reutilizable**.

---

## 2. Chatbot general frente a agente especializado

¿Cuál es la diferencia práctica? La diferencia está en las instrucciones de partida.

<div class="page-illustration">
  <img src="{{ '/assets/img/agentes/agente-como-asistente.svg' | relative_url }}" alt="Comparación visual: chatbot general con burbujas de muchos temas frente a agente especializado con una tarea concreta y subtareas estructuradas" style="width:100%; max-width:960px; display:block; margin:0 auto;">
</div>

| Aspecto | Chatbot general | Agente especializado |
|:--------|:----------------|:---------------------|
| **Objetivo** | Responde a muchas cosas | Se centra en una tarea concreta |
| **Instrucciones** | Hay que repetirlas en cada conversación | Las conserva como parte de su configuración |
| **Uso docente** | Consultas puntuales y variadas | Procesos repetidos o estructurados |
| **Ejemplo** | "Dame ideas para una clase" | "Crea una situación de aprendizaje con esta plantilla" |
| **Consistencia** | Variable según cómo se formule | Más coherente entre sesiones |
| **Riesgo** | Respuestas demasiado genéricas | Respuestas más útiles, pero también deben revisarse |

---

## 3. ¿Para qué puede servir un agente en educación?

La utilidad principal de un agente docente es que te permite **reutilizar unas buenas instrucciones** sin tener que reescribirlas cada vez. Esto tiene sentido para tareas que se repiten.

### Planificación

- Diseñar situaciones de aprendizaje competenciales.
- Programar unidades didácticas con estructura definida.
- Organizar secuencias de actividades por sesiones.

### Creación de materiales

- Adaptar textos a distintos niveles o perfiles.
- Crear fichas de trabajo, actividades y ejercicios.
- Generar vocabulario, definiciones y ejemplos.
- Preparar exámenes, cuestionarios o autoevaluaciones.

### Evaluación

- Generar rúbricas de evaluación o listas de cotejo.
- Proponer criterios de calificación.
- Crear bancos de preguntas para distintos niveles.

### Inclusión y accesibilidad

- Simplificar enunciados para alumnado con dificultades de comprensión.
- Adaptar instrucciones a distintos formatos y niveles de lectura.
- Proponer alternativas de presentación para distintos estilos de aprendizaje.

### Comunicación

- Redactar comunicados para familias en tono adecuado.
- Proponer modelos de respuesta a mensajes frecuentes.
- Preparar presentaciones o resúmenes de reuniones.

### Organización del trabajo docente

- Redactar actas o registros de reuniones (sin datos personales).
- Resumir documentos normativos o guías curriculares.
- Crear checklists de seguimiento de proyectos.

### Aprendizaje de lenguas

- Crear situaciones comunicativas y role-plays.
- Preparar vocabulario por temas y niveles.
- Proponer actividades de producción escrita y oral.

### Orientación para proyectos

- Guiar al alumnado en fases de un proyecto con preguntas orientadoras.
- Proponer retos y situaciones problema.
- Sugerir fuentes y enfoques de investigación.

<div class="callout callout--reflexion" role="note" aria-label="Para pensar sobre los agentes de IA">
<div class="callout__titulo">🔍 Para pensar</div>
Un agente no mejora automáticamente una actividad. Lo importante es configurarlo con buenos criterios pedagógicos y revisar siempre sus propuestas antes de llevarlas al aula. La calidad del resultado depende, sobre todo, de la calidad de las instrucciones que introduces.
</div>

---

## 4. Cómo funciona un agente: esquema visual

El proceso de uso de un agente docente sigue esta secuencia:

<div class="flujo-horizontal" role="img" aria-label="Esquema de funcionamiento de un agente: el docente configura instrucciones y conocimiento, el agente genera una propuesta, el docente la revisa y la usa en el aula">
  <div class="flujo-horizontal__paso"><span class="flujo-horizontal__paso--num" aria-hidden="true">1</span> Docente</div>
  <div class="flujo-horizontal__flecha" aria-hidden="true">→</div>
  <div class="flujo-horizontal__paso"><span class="flujo-horizontal__paso--num" aria-hidden="true">2</span> Instrucciones del agente</div>
  <div class="flujo-horizontal__flecha" aria-hidden="true">→</div>
  <div class="flujo-horizontal__paso"><span class="flujo-horizontal__paso--num" aria-hidden="true">3</span> Conocimiento de apoyo</div>
  <div class="flujo-horizontal__flecha" aria-hidden="true">→</div>
  <div class="flujo-horizontal__paso"><span class="flujo-horizontal__paso--num" aria-hidden="true">4</span> Agente de IA</div>
  <div class="flujo-horizontal__flecha" aria-hidden="true">→</div>
  <div class="flujo-horizontal__paso"><span class="flujo-horizontal__paso--num" aria-hidden="true">5</span> Propuesta inicial</div>
  <div class="flujo-horizontal__flecha" aria-hidden="true">→</div>
  <div class="flujo-horizontal__paso"><span class="flujo-horizontal__paso--num" aria-hidden="true">6</span> Revisión docente</div>
  <div class="flujo-horizontal__flecha" aria-hidden="true">→</div>
  <div class="flujo-horizontal__paso"><span class="flujo-horizontal__paso--num" aria-hidden="true">7</span> Uso en el aula</div>
</div>

Y el proceso para **crear** ese agente puede resumirse así:

<div class="page-illustration">
  <img src="{{ '/assets/img/agentes/flujo-creacion-agente.svg' | relative_url }}" alt="Proceso de creación de un agente docente en 6 pasos: definir la tarea, escribir instrucciones, añadir conocimiento, probar, mejorar y usar con revisión" style="width:100%; max-width:1100px; display:block; margin:0 auto;">
</div>

---

## 5. Usar Copilot con @edu.gva.es en "modo agente"

La cuenta `@edu.gva.es` permite acceder al entorno Microsoft 365 educativo de la Conselleria d'Educació. A través de ella puedes usar Copilot para tareas docentes.

La disponibilidad de creación de agentes reales puede variar según la licencia y la configuración de la organización. Si en tu entorno aparece la opción **"Agentes"**, **"Nuevo agente"** o **"Copilot Studio"**, podrás intentar crear un agente real. Si no aparece, no pasa nada: puedes trabajar igualmente en **"modo agente"** pegando un prompt de instrucciones al inicio de la conversación. Esta será la opción principal para el curso, porque no depende de que esté activada la creación de agentes.

<div class="callout callout--idea" role="note" aria-label="Nota sobre disponibilidad de agentes en Copilot educativo">
<div class="callout__titulo">💡 Disponibilidad según configuración institucional</div>
La creación de agentes reales en Copilot puede no estar disponible para todas las cuentas <strong>@edu.gva.es</strong>. Depende de la licencia asignada y de la configuración de la organización. Si no encuentras la opción, no es un problema: podrás seguir el curso y diseñar tus instrucciones de agente igualmente.
</div>

### Opción A: si tu cuenta permite crear agentes

1. Entra en [Microsoft 365](https://www.office.com) e inicia sesión con tu cuenta `@edu.gva.es`.
2. Comprueba que estás en el entorno institucional (debe aparecer el nombre de tu organización).
3. Busca la opción **"Agentes"** o **"Nuevo agente"**, o accede a **Copilot Studio** si está disponible.
4. Crea un nuevo agente con un nombre claro (por ejemplo: "Diseñador de situaciones de aprendizaje").
5. Copia las instrucciones diseñadas en el curso en el campo de configuración del agente.
6. Prueba el agente con un caso sencillo.
7. Ajusta las instrucciones a partir de lo que observes.
8. Guarda o publica el agente según los permisos disponibles.

### Opción B: si tu cuenta NO permite crear agentes

1. Entra en Copilot con tu cuenta `@edu.gva.es`.
2. Abre una conversación nueva.
3. Copia y pega el prompt completo del agente al inicio de la conversación.
4. Responde a las preguntas que Copilot te haga para recopilar el contexto necesario.
5. Usa la conversación como si fuera un asistente especializado.
6. Guarda el prompt en un documento propio para reutilizarlo más adelante.

> **Importante:** si usamos un prompt en una conversación, no hemos creado un agente permanente. Hemos creado una forma de trabajo reutilizable. Para crear un agente real, la plataforma debe permitir guardar instrucciones, conocimiento y configuración.

### Ejemplo de instrucciones: Diseñador de situaciones de aprendizaje

El siguiente texto puede copiarse como instrucciones del agente (Opción A) o como prompt inicial de una conversación (Opción B):

```text
Actúa como un asistente pedagógico para docentes.

Tu función es ayudar a diseñar situaciones de aprendizaje competenciales.

Antes de crear la propuesta, pregunta siempre por:
- Etapa educativa
- Curso
- Materia o ámbito
- Duración prevista
- Tema o saberes básicos
- Producto final esperado
- Características generales del grupo, sin pedir datos personales

Cuando tengas la información suficiente, responde con esta estructura:
1. Título de la situación de aprendizaje
2. Contexto y reto inicial
3. Objetivos didácticos
4. Competencias trabajadas
5. Secuencia de actividades
6. Recursos necesarios
7. Atención a la diversidad
8. Evaluación
9. Rúbrica o lista de cotejo
10. Sugerencias de mejora

No solicites nombres, expedientes, informes médicos ni datos personales del alumnado.
Si falta información esencial, pregunta antes de completar la propuesta.
Si no conoces una normativa concreta, indica que debe revisarse con la documentación oficial.
La revisión final siempre debe hacerla el docente.
```

<div class="callout callout--alerta" role="alert" aria-label="Aviso sobre datos personales en herramientas de IA">
<div class="callout__titulo">⚠️ No introduzcas datos personales</div>
No introduzcas datos personales del alumnado, informes psicopedagógicos, datos médicos ni información sensible del centro en ninguna herramienta de IA, incluyendo Copilot institucional.
<br><br>
En el aula puede servir para trabajar con datos genéricos, grupos ficticios o situaciones sin denominación personal.
</div>

<div class="callout callout--idea" role="note" aria-label="Nota sobre modelos de razonamiento en Copilot">
<div class="callout__titulo">💡 Modelos y razonamiento en Copilot</div>
En Copilot, según la versión, licencia y disponibilidad, el modo <strong>Smart</strong> o de razonamiento puede apoyarse en modelos avanzados de OpenAI. Esto puede ser útil para tareas que requieren análisis, planificación, revisión o generación de propuestas complejas. Aun así, <strong>el resultado debe ser siempre revisado por el docente</strong>. La disponibilidad de estos modelos puede variar según la cuenta, el plan y la configuración institucional.
</div>

---

## 6. Crear un Gem en Gemini: el agente personalizado de Google

Gemini llama **Gems** a sus asistentes personalizados. Un Gem permite guardar instrucciones de forma permanente, lo que lo hace más parecido a crear un agente personalizado real que el "modo agente" de Copilot. Si la función está disponible en tu cuenta, cada vez que accedas al Gem las instrucciones ya estarán cargadas.

**Consideraciones antes de empezar:**

- La disponibilidad de Gems puede variar según el país, el tipo de cuenta y las actualizaciones de Google.
- En la versión gratuita puede haber límites de uso o funciones menos avanzadas que en planes de pago.
- Gemini no es el entorno institucional prioritario del curso, pero puede ser útil para practicar la creación de agentes con información no sensible.
- **No debe usarse con datos personales del alumnado ni documentos internos del centro.**

### Pasos para crear un Gem en Gemini

1. Entra en [gemini.google.com](https://gemini.google.com).
2. Inicia sesión con una cuenta personal de Google (no la cuenta institucional @edu.gva.es, que puede tener restricciones en herramientas externas).
3. Busca la opción **"Explorar Gems"** o **"Explore Gems"** en el menú lateral.
4. Pulsa **"Nuevo Gem"** o **"New Gem"**.
5. Escribe un **nombre** claro para el Gem.
6. Escribe las **instrucciones** del Gem (ver ejemplos más abajo).
7. Usa la ventana de **vista previa** para probarlo con un caso sencillo.
8. **Ajusta las instrucciones** a partir de lo que observes en la prueba.
9. **Guarda** el Gem.
10. Úsalo cuando necesites realizar esa tarea repetida.

### Ejemplo de Gem: Adaptador de textos para el aula

```text
Eres un asistente educativo especializado en adaptar textos para el alumnado.

Tu tarea es transformar textos complejos en versiones más claras y accesibles, manteniendo la idea principal.

Antes de adaptar, pregunta siempre:
- Etapa educativa
- Curso o nivel aproximado
- Objetivo de la lectura
- Nivel de dificultad deseado
- Si se necesita vocabulario, preguntas o actividades

Cuando adaptes un texto, ofrece:
1. Versión adaptada
2. Glosario de palabras difíciles (entre 5 y 10 términos)
3. Tres preguntas de comprensión
4. Una actividad breve vinculada al texto
5. Una sugerencia de apoyo visual

No incluyas datos personales.
No inventes información que no esté en el texto original.
Si el texto original contiene datos sensibles, avisa de que deben eliminarse antes de trabajar con IA.
La revisión final siempre debe hacerla el docente.
```

### Ejemplo de Gem para EOI: Entrenador de conversación en lenguas extranjeras

```text
Eres un asistente para practicar conversación en una lengua extranjera.

Pregunta siempre primero:
- Idioma
- Nivel aproximado (A1 a C2 según el MCER)
- Tema de conversación
- Duración aproximada de la práctica
- Tipo de ayuda: vocabulario, corrección, role-play o preparación de examen

Después, crea:
1. Una situación comunicativa adaptada al nivel
2. Vocabulario útil con pronunciación aproximada si es posible
3. Preguntas para practicar y desarrollar la conversación
4. Errores frecuentes en ese nivel con ese tema
5. Una mini-rúbrica de autoevaluación

Corrige con tono amable y explica los errores de forma sencilla.
Adapta el nivel de dificultad del vocabulario y las estructuras al nivel indicado.
No hagas correcciones que no hayan sido pedidas durante el role-play.
```

### Compartir Gems con otros docentes

Una vez creado un Gem, es posible compartirlo con otras personas si la función está disponible en la cuenta. Este sistema de compartición puede funcionar de forma similar a otros recursos de Google, con permisos de visualización o uso. Esto abre la posibilidad de crear **bancos de Gems por departamento, ciclo, etapa o materia**.

Antes de compartir, conviene revisar que el Gem no contenga:
- Datos personales de ningún tipo.
- Instrucciones internas sensibles del centro.
- Información identificativa de alumnado o familias.

Compartir un Gem no sustituye la revisión docente de cada resultado que genera. Cada persona que lo use debe seguir aplicando su criterio profesional.

**Ejemplos de Gems que pueden compartirse entre docentes:**

- **Gem de rúbricas para Primaria**: genera rúbricas de evaluación para distintas áreas con criterios ajustados al nivel.
- **Gem de roleplays para EOI**: propone situaciones comunicativas por nivel MCER y tema.
- **Gem adaptador DUA**: adapta recursos y enunciados con enfoque de diseño universal para el aprendizaje.
- **Gem generador de casos prácticos para FP**: crea casos profesionales simulados para distintos ciclos y sectores.

---

## Actividad práctica: convierte un prompt en un "modo agente"

Antes de crear un agente real, vamos a aprender a escribir sus instrucciones. Esto es importante porque un agente no es útil por llamarse agente, sino por tener buenas instrucciones.

Copia la siguiente plantilla en Copilot, Gemini o ChatGPT y adapta los campos entre corchetes a tu contexto:

```text
Quiero que actúes como un asistente docente especializado en [tarea].

Tu objetivo es ayudarme a [objetivo concreto].

Antes de responder, pregúntame siempre:
- Etapa educativa
- Curso o nivel
- Materia o ámbito
- Duración
- Objetivo de la actividad
- Características generales del grupo, sin pedir datos personales

Cuando tengas la información necesaria, responde con esta estructura:
1. Propuesta inicial
2. Desarrollo paso a paso
3. Materiales o recursos necesarios
4. Adaptaciones o apoyos
5. Evaluación
6. Recomendaciones para revisar la propuesta

Normas:
- No pidas datos personales.
- No inventes normativa.
- Si falta información, pregunta antes de responder.
- Usa lenguaje claro y docente.
- Recuerda que la revisión final siempre debe hacerla una persona.
```

- Ejemplo para primaria:
```text
Quiero que actúes como un asistente docente especializado en el diseño de actividades competenciales para Educación Primaria.

Tu objetivo es ayudarme a crear actividades de aula claras, motivadoras y adaptadas al nivel del alumnado de Primaria, incluyendo desarrollo paso a paso, materiales, apoyos, evaluación y recomendaciones para el docente.

Antes de responder, pregúntame siempre:
- Curso o nivel de Primaria.
- Área o materia.
- Tema o contenido que se quiere trabajar.
- Duración aproximada de la actividad.
- Objetivo de aprendizaje.
- Tipo de actividad deseada: explicación, experimento, lectura, reto, proyecto, juego, actividad cooperativa o evaluación.
- Características generales del grupo, sin pedir nombres ni datos personales.
- Si se necesita actividad de refuerzo, ampliación o adaptación para distintos ritmos de aprendizaje.

Cuando tengas la información necesaria, responde con esta estructura:

1. Propuesta inicial
   - Título de la actividad.
   - Curso y área.
   - Objetivo de aprendizaje.
   - Breve descripción de la actividad.

2. Desarrollo paso a paso
   - Inicio o motivación.
   - Explicación para el alumnado.
   - Actividad principal.
   - Puesta en común.
   - Cierre o reflexión final.

3. Materiales o recursos necesarios
   - Material del aula.
   - Recursos digitales, si son necesarios.
   - Fichas, imágenes, textos o apoyos visuales.

4. Adaptaciones o apoyos
   - Apoyo para alumnado que necesita más ayuda.
   - Propuesta de ampliación para alumnado que avanza más rápido.
   - Alternativas visuales, manipulativas o cooperativas.
   - Sugerencias para facilitar la comprensión de instrucciones.

5. Evaluación
   - Qué observar durante la actividad.
   - Criterios sencillos de evaluación.
   - Instrumento recomendado: lista de cotejo, rúbrica breve, observación directa o autoevaluación.
   - Evidencia final del aprendizaje.

6. Recomendaciones para revisar la propuesta
   - Aspectos que debe comprobar el docente antes de usarla.
   - Posibles ajustes según el grupo.
   - Precauciones sobre dificultad, tiempo y materiales.

Normas:
- No pidas datos personales del alumnado.
- No inventes normativa ni criterios oficiales concretos.
- Si falta información importante, pregunta antes de responder.
- Usa lenguaje claro, docente y adecuado para Educación Primaria.
- Propón actividades realistas y viables en un aula ordinaria.
- Comprueba que las explicaciones sean correctas y comprensibles para el nivel indicado.
- Incluye siempre opciones de refuerzo y ampliación.
- Recuerda que la revisión final siempre debe hacerla una persona.
```

Una vez hayas pegado este prompt en Copilot o Gemini:

1. Observa cómo la herramienta responde a las preguntas de contexto.
2. Completa el contexto con información de un grupo ficticio o genérico (sin datos personales).
3. Revisa la propuesta generada y valora si las instrucciones funcionan.
4. Si quieres crear un agente real, copia estas instrucciones en Agent Builder, en Gems o en un GPT personalizado de ChatGPT, según la herramienta que uses y los permisos disponibles.
5. Si no tienes esa opción, guarda el prompt en un documento propio para reutilizarlo cuando lo necesites.

---

## 7. Crear un GPT en ChatGPT: asistente personalizado para docentes

ChatGPT permite crear GPTs personalizados: asistentes con nombre, descripción, instrucciones guardadas y, según la configuración y el plan, posibilidad de añadir conocimiento de apoyo o archivos de referencia. La disponibilidad de esta función puede depender del plan y de la configuración de la cuenta.

**¿Para qué puede servir un GPT en educación?**

- Diseñar rúbricas, actividades o situaciones de aprendizaje con estructura fija.
- Generar feedback formativo para el alumnado según criterios definidos.
- Crear adaptaciones de textos, ejercicios diferenciados o materiales para atención a la diversidad.
- Practicar conversaciones en lengua extranjera con roles y niveles definidos.
- Simular casos profesionales para FP con protocolos de actuación.

**¿Qué puede guardar un GPT personalizado?**

- El nombre y la descripción del asistente.
- Las instrucciones completas: rol, función, tono, estructura de respuesta, límites y normas.
- Según el plan, puede incluir conocimiento de apoyo (documentos de referencia sin datos personales).

> **Diferencia clave**: cuando usas ChatGPT normalmente, tienes que explicar el contexto en cada conversación. Un GPT personalizado ya tiene ese contexto guardado y lo aplica desde el primer mensaje.

**Precauciones importantes:**

- No incluyas datos personales del alumnado ni documentos internos del centro.
- No subas archivos con información sensible o identificativa.
- Revisa siempre los resultados antes de usarlos en el aula.
- La disponibilidad de creación de GPTs puede variar según el plan de la cuenta.

### Pasos generales para crear un GPT en ChatGPT

1. **Entra en ChatGPT** con tu cuenta.
2. **Ve a "Explorar GPTs"** o busca la opción **"Crear GPT"** en el menú.
3. **Define el nombre y la descripción**: debe reflejar con claridad para qué sirve el asistente.
4. **Escribe las instrucciones completas**: rol, función, qué preguntar, cómo responder y qué no hacer.
5. **Pruébalo con un caso docente real** (sin datos personales).
6. **Ajusta las instrucciones** a partir de lo que observes en la prueba.
7. **Guarda el GPT** y, si procede, compártelo según los permisos disponibles en tu cuenta.

### Ejemplo completo: Generador de feedback competencial

**Nombre:** Generador de feedback competencial

**Instrucciones:**

```text
Eres un asistente educativo especializado en generar feedback formativo para alumnado.

Tu función es ayudar al docente a redactar comentarios claros, constructivos y orientados a la mejora, sin usar datos personales reales.

Antes de responder, pregunta siempre:
- Etapa educativa
- Curso o nivel
- Materia
- Tipo de tarea evaluada
- Criterios o aspectos que se quieren valorar
- Nivel general de desempeño, sin nombres ni datos identificativos
- Tono deseado: breve, motivador, detallado o formal

Cuando tengas la información suficiente, responde con:
1. Comentario positivo inicial
2. Aspectos logrados
3. Aspectos a mejorar
4. Siguiente paso concreto
5. Versión breve para boletín o plataforma
6. Versión adaptada para que el alumnado la entienda

Normas:
- No pidas nombres ni datos personales.
- No inventes calificaciones oficiales.
- No sustituyas la evaluación docente.
- Usa un tono respetuoso, claro y orientado a la mejora.
- Si falta información, pregunta antes de generar el feedback.
```

<div class="callout callout--alerta" role="alert" aria-label="Aviso sobre datos personales en ChatGPT">
<div class="callout__titulo">⚠️ Protección de datos en ChatGPT</div>
ChatGPT no es un entorno institucional. No introduzcas datos personales del alumnado, informes, datos médicos ni documentos internos del centro. Úsalo únicamente con información genérica, ficticia o no sensible.
</div>

---

## 8. Comparativa: Copilot, Gemini Gems y ChatGPT GPTs

Ninguna herramienta es "la mejor" en todos los casos. Elegir una u otra depende del contexto, del tipo de tarea y de los permisos disponibles.

### Microsoft Copilot con @edu.gva.es

**Ventajas:**

- Está alineado con el entorno Microsoft 365 educativo de la GVA.
- Puede integrarse con Word, OneDrive, Teams o SharePoint según la licencia.
- Es la herramienta **prioritaria del curso** para trabajo institucional.
- Puede ofrecer más garantías de privacidad dentro del entorno educativo configurado.
- Permite crear agentes si la organización tiene habilitada esa función.
- Según la versión y la licencia, puede apoyarse en modelos avanzados de razonamiento.

**Inconvenientes:**

- La creación de agentes puede no estar disponible para todas las cuentas.
- Las funciones disponibles dependen de la licencia y de la administración de la organización.
- Algunas funciones pueden estar limitadas o requerir activación por parte del SAI.

### Gemini Gems (cuenta Google)

**Ventajas:**

- Acceso sencillo desde cualquier cuenta de Google.
- Permite crear Gems personalizados con instrucciones guardadas si la función está disponible.
- Los Gems pueden compartirse con otros docentes según los permisos de la cuenta.
- Útil para ideas, borradores, reformulación de textos y actividades sin datos sensibles.

**Inconvenientes:**

- No es el entorno institucional prioritario del curso.
- Puede tener límites de uso en la versión gratuita.
- No debe usarse con datos personales ni información sensible del alumnado o del centro.
- Algunas funciones pueden cambiar o requerir planes de pago.

### ChatGPT GPTs personalizados

**Ventajas:**

- Permite crear GPTs con instrucciones muy detalladas y estructura de respuesta definida.
- Según el plan, puede incluir conocimiento de apoyo y archivos de referencia.
- Posibilidad de compartir GPTs con otros docentes según la configuración.
- Gran flexibilidad para configurar el comportamiento del asistente.

**Inconvenientes:**

- No es un entorno institucional; no debe usarse con datos personales ni documentos sensibles.
- La creación de GPTs puede requerir un plan de pago según la cuenta.
- Los resultados siempre deben revisarse antes de usar en el aula.

### Tabla comparativa

<div style="overflow-x:auto;">
<table>
<thead>
<tr>
<th>Criterio</th>
<th>Copilot con @edu.gva.es</th>
<th>Gemini Gems</th>
<th>ChatGPT GPTs</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Tipo de cuenta</strong></td>
<td>Institucional educativa</td>
<td>Personal (Google)</td>
<td>Personal (OpenAI)</td>
</tr>
<tr>
<td><strong>Contexto institucional</strong></td>
<td>Sí, entorno GVA</td>
<td>No</td>
<td>No</td>
</tr>
<tr>
<td><strong>Creación de asistente</strong></td>
<td>Agentes según licencia; modo agente siempre posible con prompt</td>
<td>Gems si la función está disponible</td>
<td>GPTs personalizados según plan</td>
</tr>
<tr>
<td><strong>Instrucciones guardadas</strong></td>
<td>Sí, si el agente puede guardarse</td>
<td>Sí, en el Gem</td>
<td>Sí, en el GPT</td>
</tr>
<tr>
<td><strong>Compartición</strong></td>
<td>Según permisos institucionales</td>
<td>Según función disponible en la cuenta</td>
<td>Según configuración de la cuenta</td>
</tr>
<tr>
<td><strong>Integración con documentos</strong></td>
<td>Sí, con Microsoft 365 según licencia</td>
<td>Limitada en versión gratuita</td>
<td>Según plan (posible con conocimiento de apoyo)</td>
</tr>
<tr>
<td><strong>Uso recomendado</strong></td>
<td>Trabajo institucional y tareas del curso</td>
<td>Práctica y exploración personal sin datos sensibles</td>
<td>Asistentes muy configurables, sin datos sensibles</td>
</tr>
<tr>
<td><strong>Precauciones</strong></td>
<td>Seguir normativa de la organización; no afecta a garantías si está bien configurado</td>
<td>No usar con datos personales ni documentos internos</td>
<td>No usar con datos personales ni documentos sensibles</td>
</tr>
<tr>
<td><strong>Adecuación para el curso</strong></td>
<td>Prioritario</td>
<td>Complementario</td>
<td>Alternativa válida para experimentar</td>
</tr>
</tbody>
</table>
</div>

<div class="callout callout--idea" role="note" aria-label="Recomendación de uso de herramientas IA para docentes">
<div class="callout__titulo">💡 Recomendación práctica</div>
Para tareas del curso y trabajo institucional, prioriza <strong>Copilot con la cuenta @edu.gva.es</strong> cuando esté disponible y en entorno protegido. Para explorar, practicar o experimentar sin datos sensibles, tanto <strong>Gemini Gems</strong> como <strong>ChatGPT GPTs</strong> pueden ser alternativas útiles. En cualquier caso, la revisión docente es siempre necesaria.
</div>

---

## 9. Buenas instrucciones, malos resultados: por qué importa cómo configuramos el agente

La calidad de un agente educativo no depende de la herramienta que usemos, sino de las instrucciones que le damos. Un prompt vago produce resultados vagos. Un prompt bien construido produce propuestas útiles, coherentes y adaptadas.

### Ejemplo de instrucción débil

```text
Hazme actividades para mi clase.
```

**¿Por qué no funciona bien?**

- No indica la etapa educativa.
- No indica la materia ni el contenido.
- No especifica el objetivo de aprendizaje.
- No indica la duración ni el tipo de actividad.
- No marca el formato de salida esperado.
- No incluye criterios de evaluación.
- No pide adaptación para distintos niveles.

El resultado será genérico, poco aplicable y probablemente necesitará ser reescrito casi en su totalidad.

### Ejemplo de instrucción mejorada

```text
Actúa como asistente docente de Educación Primaria.
Diseña actividades competenciales de Ciencias Naturales para 4.º curso sobre el ciclo del agua.
Incluye tres niveles de dificultad, apoyos DUA, materiales sencillos, una breve explicación para el alumnado y una rúbrica de observación con tres criterios.
```

**¿Por qué funciona mejor?**

- Define el rol del asistente.
- Concreta la etapa y la materia.
- Indica el contenido específico.
- Especifica el producto esperado.
- Pide adaptación (niveles, DUA).
- Marca el formato (explicación + rúbrica).

<div class="callout callout--reflexion" role="note" aria-label="Reflexión sobre la calidad de las instrucciones">
<div class="callout__titulo">🔍 Para recordar</div>
Lo importante no es la herramienta, sino las instrucciones. Una instrucción bien construida es ya en sí misma un acto de reflexión pedagógica: obliga a definir el objetivo, el contexto, el formato y los criterios antes de pedir nada.
</div>

---

## 10. Plantilla universal para diseñar un asistente educativo

Antes de crear un agente, conviene planificar qué queremos que haga. Esta plantilla sirve para cualquier herramienta: Copilot, Gemini Gems o ChatGPT GPTs.

### Esquema de planificación

```text
Nombre del asistente:
Finalidad:
Etapa:
Materia o ámbito:
Tipo de recursos que genera:
Tono y estilo:
Qué debe preguntar antes de responder:
Estructura de la respuesta:
Normas de seguridad:
Criterios de calidad:
Ejemplo de prueba:
```

### Versión redactada en forma de prompt

```text
Quiero que actúes como un asistente educativo especializado en [tarea].
Tu objetivo es ayudarme a [finalidad].
Trabajas con docentes de [etapa] en el área de [materia].

Antes de responder, pregunta siempre por:
- curso o nivel;
- objetivo de aprendizaje;
- duración;
- tipo de actividad o recurso;
- características generales del grupo, sin datos personales;
- nivel de dificultad;
- formato deseado.

Cuando respondas, utiliza esta estructura:
1. Propuesta inicial
2. Desarrollo paso a paso
3. Materiales o recursos
4. Adaptaciones y apoyos
5. Evaluación
6. Recomendaciones para el docente
7. Precauciones o aspectos a revisar

Normas:
- No pidas datos personales.
- No uses información sensible.
- No inventes normativa.
- Si falta información esencial, pregunta antes de responder.
- Usa lenguaje claro y docente.
- Recuerda que la revisión final siempre corresponde al profesorado.
```

---

## 11. Ejemplos de agentes útiles por etapa educativa

En el aula puede servir para… muchas cosas distintas según la etapa. Aquí tienes un punto de partida para cada una.

### Educación Infantil · Cuentacuentos adaptado

| | |
|:--|:--|
| **Para qué sirve** | Crear cuentos breves, trabajar emociones, proponer rutinas de asamblea o actividades manipulativas |
| **Ejemplo de uso** | El docente pide un cuento sobre convivencia para la asamblea del lunes |
| **Precaución** | Revisar que el vocabulario sea adecuado a la edad · No introducir datos reales del alumnado |

**Prompt de ejemplo:**

```text
Crea un cuento breve para Educación Infantil de 5 años sobre aprender a esperar el turno.
Incluye:
- Vocabulario sencillo y frases cortas
- Un personaje principal con el que los niños puedan identificarse
- Tres preguntas para la asamblea
- Una actividad plástica o manipulativa sencilla
- Una canción o rima breve relacionada con el tema
```

---

### Educación Primaria · Diseñador de actividades competenciales

| | |
|:--|:--|
| **Para qué sirve** | Crear actividades por niveles, generar retos, adaptar lecturas, crear preguntas de comprensión |
| **Ejemplo de uso** | El docente necesita una ficha multinivel sobre el ciclo del agua |
| **Precaución** | Comprobar la exactitud científica · Adaptar al grupo real |

**Prompt de ejemplo:**

```text
Diseña una actividad para 4.º de Primaria sobre el ciclo del agua.
Incluye:
1. Explicación sencilla del proceso (evaporación, condensación, precipitación)
2. Un experimento de aula con materiales básicos
3. Cuatro preguntas de comprensión (dos literales y dos inferenciales)
4. Una actividad creativa breve
5. Una rúbrica de observación con tres criterios
```

---

### Educación Secundaria · Preparador de situaciones de aprendizaje

| | |
|:--|:--|
| **Para qué sirve** | Diseñar proyectos, preparar debates, crear rúbricas, proponer actividades de análisis crítico |
| **Ejemplo de uso** | El docente quiere una situación de aprendizaje sobre consumo responsable |
| **Precaución** | Revisar la adecuación curricular · Evitar que el alumnado use la IA para sustituir su propio razonamiento |

**Prompt de ejemplo:**

```text
Crea una situación de aprendizaje para 2.º ESO sobre consumo responsable y publicidad.
Debe incluir:
- Reto inicial motivador (pregunta o problema)
- Secuencia de 4 actividades por sesiones
- Producto final con impacto en el entorno
- Evaluación mediante rúbrica con criterios del currículo LOMLOE
- Una propuesta de atención a la diversidad
```

---

### Formación Profesional · Simulador de casos profesionales

| | |
|:--|:--|
| **Para qué sirve** | Crear casos prácticos, simular situaciones laborales, preparar protocolos, diseñar rúbricas de desempeño |
| **Ejemplo de uso** | El docente necesita un caso para trabajar la atención al cliente |
| **Precaución** | Revisar que los procedimientos sean correctos y actualizados · No incluir datos reales de empresas o personas |

**Prompt de ejemplo:**

```text
Crea un caso práctico para un ciclo de Formación Profesional sobre atender a un cliente que presenta una reclamación.
Incluye:
- Contexto del sector y del puesto de trabajo
- Descripción de la situación y los roles
- Pasos de actuación recomendados
- Posibles errores frecuentes
- Criterios de evaluación del desempeño profesional
- Una propuesta de role-play para practicar en el aula
```

---

### Escuelas Oficiales de Idiomas · Entrenador de conversación

| | |
|:--|:--|
| **Para qué sirve** | Crear role-plays, practicar mediación, preparar monólogos, corregir textos, generar vocabulario por niveles |
| **Ejemplo de uso** | El docente prepara actividades de conversación para B1 sobre viajes |
| **Precaución** | Revisar las correcciones lingüísticas · Ajustar el nivel al MCER y al grupo real |

**Prompt de ejemplo:**

```text
Prepara una actividad de conversación para nivel B1 de inglés sobre viajes sostenibles.
Incluye:
1. Vocabulario útil (10 expresiones con traducción)
2. Tres preguntas para iniciar la conversación
3. Un role-play con dos roles definidos
4. Errores frecuentes en B1 en este contexto
5. Criterios de autoevaluación basados en el MCER
```

---

## 12. Ideas de asistentes según la necesidad docente

Más allá de la etapa, los asistentes educativos pueden organizarse por la función que cumplen en la práctica docente. Aquí tienes un punto de partida organizado por necesidad.

### Evaluación

- **Generador de rúbricas**: crea rúbricas con criterios por competencias para distintas tareas y etapas.
- **Creador de listas de cotejo**: genera listas de observación con indicadores concretos.
- **Generador de feedback formativo**: redacta comentarios constructivos orientados a la mejora, sin datos personales.

### Inclusión y atención a la diversidad

- **Adaptador DUA**: adapta recursos con principios de diseño universal para el aprendizaje.
- **Simplificador de instrucciones**: transforma enunciados complejos en instrucciones claras y accesibles.
- **Creador de actividades multinivel**: genera versiones de refuerzo, estándar y ampliación para una misma tarea.

### Planificación didáctica

- **Diseñador de situaciones de aprendizaje**: crea situaciones competenciales con estructura LOMLOE.
- **Secuenciador de sesiones**: organiza contenidos en secuencias por sesiones con objetivos claros.
- **Generador de proyectos ABP**: propone proyectos de aprendizaje basado en problemas con fases, roles y producto final.

### Lenguas extranjeras

- **Creador de roleplays**: diseña situaciones comunicativas por nivel MCER y contexto.
- **Entrenador de conversación**: prepara vocabulario, preguntas y recursos para practicar la lengua oral.
- **Diseñador de tareas de mediación**: crea actividades comunicativas de mediación según el MCER.

### Formación Profesional

- **Simulador de casos profesionales**: genera situaciones laborales realistas con roles y protocolos.
- **Generador de protocolos**: redacta protocolos de actuación para distintos sectores profesionales.
- **Creador de rúbricas técnicas**: diseña rúbricas de desempeño profesional con criterios del sector.

### Comunicación con la comunidad educativa

- **Redactor de comunicados a familias**: redacta mensajes claros y formales sin datos personales ni información sensible.
- **Preparador de resúmenes de reuniones anonimizados**: organiza los puntos clave de una reunión sin incluir datos identificativos.
- **Generador de instrucciones claras para alumnado**: transforma indicaciones complejas en instrucciones comprensibles por edad.

### Recursos multimodales

- **Generador de ideas para infografías**: propone estructura, contenido y elementos visuales para infografías educativas.
- **Diseñador de materiales visuales**: sugiere cómo organizar información en formato visual para el aula.
- **Creador de guiones para vídeos educativos**: redacta guiones estructurados para vídeos explicativos o tutoriales.

---

## 13. Actividad práctica: diseña tu primer agente docente

Ahora te toca a ti. Esta actividad te guía para diseñar un agente útil para tu realidad docente.

### Pasos

1. **Elige una tarea docente repetitiva** que te lleve tiempo o que hagas con frecuencia.
2. **Define qué debe hacer el agente**: describe su función en una o dos frases.
3. **Decide qué información necesita** antes de responder (etapa, grupo, tema, etc.).
4. **Escribe las instrucciones** siguiendo la estructura: rol → función → qué preguntar → cómo responder → qué no hacer.
5. **Prueba el agente** con un caso sencillo y real.
6. **Observa los resultados**: ¿son útiles? ¿hay errores? ¿falta algo?
7. **Mejora las instrucciones** y vuelve a probar.
8. **Comparte una reflexión breve** en el espacio del curso sobre lo que has aprendido en el proceso.

### Plantilla de diseño de agente

Copia y completa esta plantilla para planificar tu agente antes de crearlo:

```text
Nombre del agente:
Etapa educativa a la que se dirige:
Tarea que debe ayudar a resolver:

Qué debe preguntar antes de responder:
-
-
-

Qué estructura debe seguir la respuesta:
1.
2.
3.

Qué no debe hacer:
-
-

Qué datos no se pueden introducir nunca:
-
-

Ejemplo de prompt de prueba:
```

### Mini-rúbrica de autoevaluación del agente

| Criterio | Sí | En proceso | No |
|:---------|:---|:-----------|:---|
| El asistente tiene una finalidad clara y concreta | ☐ | ☐ | ☐ |
| Está adaptado a una etapa y materia específicas | ☐ | ☐ | ☐ |
| Pregunta antes de responder cuando falta información | ☐ | ☐ | ☐ |
| Genera productos útiles con estructura definida | ☐ | ☐ | ☐ |
| Incluye adaptación o atención a la diversidad cuando procede | ☐ | ☐ | ☐ |
| Incluye criterios de evaluación cuando procede | ☐ | ☐ | ☐ |
| Evita pedir datos personales en las instrucciones | ☐ | ☐ | ☐ |
| Recuerda que la revisión final corresponde al docente | ☐ | ☐ | ☐ |
| Ha sido probado con al menos un caso real | ☐ | ☐ | ☐ |
| Las instrucciones han sido ajustadas tras la prueba | ☐ | ☐ | ☐ |

---

## 14. Errores frecuentes al crear agentes

Estos son los errores más habituales que se cometen al diseñar agentes educativos. Reconocerlos es el primer paso para evitarlos.

- **Crear un asistente demasiado general**: sin etapa, sin materia, sin estructura. El resultado será igual de genérico que el prompt.
- **No indicar etapa ni nivel**: el agente no sabe si está hablando con docentes de Infantil o de FP.
- **No especificar el formato de salida**: si no se indica qué debe producir (rúbrica, actividad, guion, ficha…), la respuesta puede ser cualquier cosa.
- **No pedir que pregunte antes de responder**: el agente responde sin contexto suficiente, produciendo propuestas inaplicables.
- **No incluir límites de privacidad**: el agente puede solicitar o incluir datos que no debería manejar.
- **No probarlo con un caso real**: sin prueba, no sabemos si las instrucciones funcionan como esperamos.
- **Usar resultados sin revisión**: el agente puede cometer errores, inventar datos o producir propuestas pedagógicamente inapropiadas.
- **Subir documentos sensibles**: archivos con datos del alumnado, informes internos o documentos del centro nunca deben subirse a herramientas externas.
- **Confundir un prompt largo con un agente guardado**: escribir un prompt en una conversación no crea un agente permanente. Para eso, la herramienta debe permitir guardar instrucciones.
- **Pensar que la herramienta siempre tiene razón**: ningún agente de IA es infalible. El criterio docente siempre está por encima de la respuesta generada.

<div class="callout callout--reflexion" role="note" aria-label="Reflexión sobre los errores frecuentes">
<div class="callout__titulo">🔍 Recuerda</div>
La mayoría de estos errores tienen la misma solución: dedicar unos minutos a planificar bien las instrucciones <em>antes</em> de crear el agente. La plantilla universal de la sección 10 puede ayudarte a evitarlos.
</div>

---

## 15. Uso seguro de agentes de IA

Usar agentes de IA con responsabilidad implica aplicar los mismos principios que en cualquier otro uso de la IA en el entorno educativo.

### Qué no debes introducir nunca

- Nombres, apellidos o DNI del alumnado.
- Informes psicopedagógicos o adaptaciones curriculares individuales con datos identificativos.
- Datos médicos o de salud de ningún miembro de la comunidad educativa.
- Documentos internos del centro con datos sensibles.
- Contraseñas, credenciales o información de acceso.

### Buenas prácticas

- **Revisa siempre** las respuestas antes de usarlas en el aula o enviarlas a familias.
- **Comprueba** que la información factual es correcta (fechas, datos, normativa).
- **Evita copiar y pegar** respuestas sin adaptarlas a tu contexto y criterio.
- Usa el entorno institucional **Copilot con @edu.gva.es** cuando esté disponible y configurado correctamente.
- Para herramientas externas, **usa solo información no sensible** y nunca documentos internos del centro.
- Informa al alumnado de qué herramientas usas y cómo las usas, de forma adecuada a la etapa.

<div class="callout callout--alerta" role="alert" aria-label="Regla práctica de uso seguro de IA">
<div class="callout__titulo">🛡️ Regla práctica</div>
Si no lo publicarías en un documento abierto o no lo enviarías a una herramienta externa, no lo introduzcas en un agente de IA. Esta regla sirve para cualquier herramienta: Copilot, Gemini, ChatGPT o cualquier otra.
</div>

---

## 16. Cierre

Los agentes de IA no son una solución mágica ni una novedad sin sentido. Son una forma de **reutilizar tus mejores instrucciones** para no empezar de cero en cada tarea repetitiva.

Lo que hace realmente útil a un agente no es la tecnología: es la calidad de las instrucciones que defines tú. En esa definición está el saber docente, los criterios pedagógicos y el conocimiento del grupo al que te diriges.

Por eso:

- Un agente bien diseñado ayuda a **ahorrar tiempo** en tareas habituales.
- Un agente mal definido produce respuestas genéricas o incorrectas que hacen perder más tiempo del que ahorran.
- **La clave está en definir bien la tarea, probar, revisar y mejorar.**

Y sobre todo: la revisión final siempre debe hacerla una persona.

> Un buen agente no es el que lo hace todo, sino el que ayuda al docente a pensar mejor, ahorrar tiempo y preparar mejores experiencias de aprendizaje.

---

---

## Dar el siguiente paso: crear aplicaciones educativas con IA

Si los agentes te ayudan a **pensar y organizar** tareas docentes, el vibe coding te permite **convertir esas ideas en herramientas interactivas reales**. Descubre cómo crear aplicaciones educativas conversando con la IA.

<div class="btn-cta-wrapper">
  <a class="btn-cta" href="{{ '/vibe-coding-educativo' | relative_url }}" aria-label="Explorar la página de Vibe Coding Educativo">
    🚀 Explorar Vibe Coding Educativo
  </a>
</div>

---

## Ver también

- [Inicio del curso]({{ '/' | relative_url }})
- [Módulo 0: ¿Qué es la IA?]({{ '/modulo-0-que-es-la-ia' | relative_url }})
- [Bloque 1: IA Colaborativa y Gestión GVA]({{ '/bloque1' | relative_url }})
- [Vibe Coding Educativo]({{ '/vibe-coding-educativo' | relative_url }})
- [Identidad digital y acceso]({{ '/primeros-pasos/identidad-digital' | relative_url }})
- [Seguridad y protección de datos]({{ '/bloque1-seguridad' | relative_url }})
- [IA para accesibilidad e inclusión]({{ '/bloque1-accesibilidad-ia' | relative_url }})
