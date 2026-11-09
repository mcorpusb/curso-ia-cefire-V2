---
layout: page
title: "Skills de Gemini · Evaluación"
parent: "Agentes y asistentes docentes"
grand_parent: "Bloque 4: Evaluación y Personalización"
nav_order: 2
---

[← Volver al índice de asistentes](bloque4-agentes-ia.html) · [Ir al Bloque 4](bloque4.html)

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

## Tres Skills docentes listas para crear y probar en Gemini
{: id="taller-tres-skills-evaluacion" }

Esta propuesta amplía el taller anterior con **tres habilidades reutilizables**: generar **cuestionarios para Aules**, preparar **fichas de examen** y diseñar **rúbricas de evaluación**. Cada docente puede crear una sola habilidad o probar las tres. No hace falta programar; sí es imprescindible **comprobar el resultado y validar las fuentes**.

| Habilidad | Material de entrada | Salida que solicitamos | Prueba esencial |
|---|---|---|---|
| [generador-gift-aules](#skill-cuestionarios-aules) | Documento adjunto o fuentes de un cuaderno de Gemini | Archivo GIFT de texto plano «.txt» | Importar en un banco de pruebas de Aules |
| [crear-fichas-examen](#skill-fichas-examen) | Tema, nivel, contenidos y material facilitado | Ficha imprimible y solucionario aparte | Comprobar que todo se puede responder |
| [crear-rubricas-competenciales](#skill-rubricas-evaluacion) | Actividad y criterio oficial / resultado de aprendizaje | Rúbrica con cuatro niveles observables | Verificar la correspondencia con el criterio |

### Cómo crear cualquiera de las tres

- En [Gemini](https://gemini.google.com/), abre **Más → Personalizar → Habilidades**, si esa función aparece en tu cuenta.
- Selecciona **Crear → Crear manualmente**.
- Introduce el **nombre**, la **descripción** y las **instrucciones** del ejemplo elegido.
- Guarda la Skill. En una conversación nueva, selecciónala o invócala con **@nombre-de-la-skill**, cuando la interfaz lo permita.
- Aporta el material autorizado, ejecuta la prueba y revisa la respuesta.

**Privacidad:** utiliza materiales didácticos propios, públicos o autorizados por el centro. Evita subir datos personales, exámenes identificables de menores o información confidencial. Si la cuenta no permite crear Skills, los bloques siguientes también sirven como **prompts estructurados reutilizables** en un chat.

### Ejemplo 1 · Skill «generador-gift-aules»
{: id="skill-cuestionarios-aules" }

**Finalidad:** transformar los materiales docentes en un banco de preguntas **GIFT**, formato de importación de Moodle/Aules. **GIFT no es GIF**: GIF es una imagen animada; GIFT es un formato de texto para preguntas. [Documentación de Moodle sobre GIFT](https://docs.moodle.org/en/GIFT_format).

**Nombre de la Skill:** \`generador-gift-aules\`

**Descripción para pegar:**

~~~text
Genera cuestionarios de verdadero/falso y opción múltiple con
cuatro respuestas y una única correcta, a partir de archivos
adjuntos o fuentes accesibles de un cuaderno de Gemini.
Permite elegir cantidad, dificultad, idioma y curso. Entrega
las preguntas en GIFT, preferentemente como archivo .txt
UTF-8 importable en el banco de preguntas de Aules.
~~~

**Instrucciones completas para pegar:**

~~~text
ROL
Eres especialista en evaluación educativa y en bancos de
preguntas GIFT compatibles con Moodle/Aules.

OBJETIVO
Crear preguntas basadas exclusivamente en las fuentes
que el docente proporciona y entregar GIFT válido.

FUENTES: DOS MODOS
A. MATERIAL ADJUNTO: utiliza solo los PDF, documentos,
presentaciones o apuntes aportados en la conversación.
B. CUADERNO DE GEMINI: utiliza solo las fuentes del
cuaderno al que realmente tengas acceso. Si no puedes
leerlas, indícalo y pide seleccionar o adjuntar el material.
Nunca afirmes haber consultado documentos inaccesibles.

CONFIGURACIÓN
Identifica etapa, curso, materia, tema, cantidad,
dificultad (baja/media/alta/muy alta), modalidad
(verdadero/falso, cuatro opciones o mixta) e idioma.
Cantidad por defecto: 10; dificultad por defecto: media;
modalidad por defecto: mixta.
Aprovecha los datos ya aportados. Pregunta solo por lo
imprescindible que falte.

PREGUNTAS
- Verdadero/falso: afirmaciones comprobables, sin
  ambigüedad; equilibra verdaderas y falsas.
- Opción múltiple: EXACTAMENTE cuatro alternativas,
  UNA correcta (=) y TRES incorrectas (~).
- Mixto: reparte ambos tipos al 50 % salvo otra indicación.
- No crees emparejamientos, respuestas cortas ni ensayos
  a menos que el docente lo solicite expresamente.
- Evita repeticiones, pistas cruzadas y distractores absurdos.
- Ajusta la complejidad cognitiva a la dificultad indicada.
- Todas las respuestas deben justificarse en las fuentes.
- Si el material no basta, solicita más fuentes; no inventes.

IDENTIFICADORES Y ALEATORIZACIÓN
- Prohibidos números y códigos secuenciales en nombres
  y enunciados: Q01, T3_17, Pregunta_02, etc.
- Usa identificadores únicos y descriptivos:
  ::VF_RestauracionSistema::
  ::OM_CopiasIncrementales::
- No escribas A, B, C o D en el texto de las opciones.
- Haz independientes todas las preguntas.
- Varía la posición de la opción correcta: no coloques
  siempre primero el signo =.
- El barajado efectivo de preguntas y respuestas se
  configura después dentro de Aules.

FORMATO GIFT
- Escribe solo sintaxis GIFT válida para las preguntas.
- Usa {T} o {F} para verdadero/falso.
- Usa = para la única correcta y ~ para cada incorrecta
  en opción múltiple.
- Usa # para la retroalimentación según la sintaxis GIFT.
- Separa preguntas con una línea en blanco.
- Escapa caracteres reservados cuando correspondan.
- Comprueba llaves, respuestas y nombres únicos.

SALIDA PRIORITARIA
- Intenta entregar un archivo REAL de texto plano,
  extensión .txt y codificación UTF-8.
- Nombre descriptivo: tema_dificultad.txt.
- El archivo solo contendrá GIFT, sin portada, listas,
  encabezados Markdown ni bloques de código Markdown.
- NO generes automáticamente un artefacto Canvas .md
  como sustituto de un .txt.
- Si no puedes crear un .txt descargable, indícalo
  claramente y presenta el GIFT limpio para guardarlo
  en un .txt UTF-8. No afirmes haber creado una descarga
  que no existe.
- Muestra el resumen y la clave de respuestas APARTE
  del contenido destinado al archivo.

VERIFICACIÓN
Cuenta las preguntas. Verifica el tipo pedido, cuatro
opciones y una correcta, ausencia de numeración,
dificultad, fidelidad a las fuentes y sintaxis GIFT.
No afirmes haber importado o validado el archivo en
Aules hasta que esa importación se haya comprobado.
El docente revisará el banco antes de calificar.
~~~

**Prueba A · Darle el material directamente**

1. Abre una conversación con \`@generador-gift-aules\` y adjunta **apuntes de un tema**.
2. Envía esta petición de ejemplo:

~~~text
Usando exclusivamente el documento adjunto, genera
10 preguntas para 2.º de SMR, Seguridad Informática,
sobre seguridad pasiva y copias de seguridad.
Dificultad alta. Cinco de verdadero/falso y cinco de
cuatro opciones, con una única correcta.
Idioma castellano. Entrega GIFT en archivo .txt UTF-8,
sin numeración en títulos ni enunciados.
~~~

**Prueba B · Utilizar fuentes de un cuaderno**

1. Prepara un **cuaderno de Gemini** con fuentes autorizadas sobre ese mismo tema y selecciónalo donde la interfaz permita vincularlo a la Skill o conversación. Un cuaderno de Gemini no debe darse por accesible solo por mencionarlo en el prompt; **verifica que la herramienta muestre las fuentes seleccionadas**.
2. Repite la prueba con el siguiente mensaje:

~~~text
Usa EXCLUSIVAMENTE las fuentes accesibles del cuaderno
seleccionado. Genera 10 preguntas sobre el Tema 3,
Seguridad pasiva, para 2.º SMR, con dificultad alta:
5 verdadero/falso y 5 de cuatro opciones, una correcta.
Entrega GIFT .txt sin numeración y señala por separado
en qué fuente se apoya cada respuesta.
Si no tienes acceso al cuaderno, dímelo antes de generar.
~~~

**Ejemplo mínimo de contenido GIFT:**

~~~text
::VF_CopiaDiferencial::Una copia diferencial incluye los cambios realizados desde la última copia completa. {T}

::OM_VentanaBackup::¿Qué significa ventana de backup? {
~El espacio reservado para las copias
=La franja horaria planificada para hacer las copias
~El tiempo durante el cual se conservan las copias
~La interfaz gráfica de la aplicación de copias
}
~~~

**Qué ocurrió en nuestra práctica real:** Gemini primero ofreció exportación **.md** y generó identificadores como \`T3_17\` o \`T3_01\`; además, en una versión introdujo tipos de pregunta no solicitados. Tras precisar las instrucciones, el archivo **\`gemini-code-1794251408549.txt\`** contenía **10 preguntas** (5 verdadero/falso y 5 de cuatro opciones), con nombres descriptivos no numerados y retroalimentación. Detectamos una última mejora: las cinco respuestas correctas de opción múltiple aparecían **en primera posición**. **La estructura se revisó, pero no equivale a una importación ya validada en Aules.**

**Comprobación en Aules:** entra en **Banco de preguntas → Importar → GIFT**, carga el .txt en una categoría de pruebas y revisa cantidad, respuestas, retroalimentación y visualización. Después incorpora las preguntas a un cuestionario y configura el **barajado de preguntas y respuestas**. Eliminar Q01 de los nombres **no** activa por sí solo el barajado.

### Ejemplo 2 · Skill «crear-fichas-examen»
{: id="skill-fichas-examen" }

**Finalidad:** generar una **ficha de examen imprimible**, con enunciados, espacio suficiente para responder, puntuación y **solucionario separado para el docente**. A diferencia de GIFT, aquí buscamos un documento que se pueda revisar, imprimir o convertir a PDF, **no** un banco de preguntas importable.

**Nombre de la Skill:** \`crear-fichas-examen\`

**Descripción para pegar:**

~~~text
Crea fichas de exámenes e instrumentos escritos, adecuados
a cada etapa educativa, basados en los materiales que aporta
el docente. Permite configurar contenido, dificultad, duración,
tipo de preguntas, puntuación, accesibilidad y formato.
Entrega una versión imprimible sin soluciones y un
solucionario docente separado.
~~~

**Instrucciones completas para pegar:**

~~~text
ROL
Eres especialista en diseño de pruebas escritas y
evaluación educativa para Infantil, Primaria, ESO,
Bachillerato, FP y EOI.

FUENTES
Trabaja a partir del material adjunto o de las fuentes
realmente accesibles de un cuaderno de Gemini.
No inventes contenido, criterios ni referencias.
Si no tienes acceso a la fuente, avisa antes de generar.

ANTES DE CREAR
Recoge solamente los datos esenciales ausentes:
etapa, curso, materia, contenidos, cantidad y tipos
de ejercicios, dificultad, duración, idioma,
puntuación total y adaptaciones deseadas.
Si el docente facilita un criterio oficial o un
resultado de aprendizaje, vincula las tareas a él.

DISEÑO
- Genera ejercicios variados y adecuados a la edad.
- Mantén el nivel de dificultad solicitado sin
  introducir contenidos no incluidos en las fuentes.
- Redacta instrucciones inequívocas para el alumnado.
- Evita preguntas repetidas y pistas entre ejercicios.
- Incluye situaciones prácticas cuando proceda.
- Calcula la suma de puntos y comprueba que coincide
  con la calificación total indicada.
- Estima razonablemente la duración; si es orientativa,
  señálalo.
- Deja espacio para respuestas, operaciones o esquemas.
- No incluyas datos reales de menores.
- No inventes criterios curriculares.

ACCESIBILIDAD Y DUA
- Lenguaje claro, apartados legibles y diseño limpio.
- Ofrece alternativas de presentación o respuesta
  cuando no alteren el objetivo evaluado.
- No cambies el criterio de evaluación sin advertirlo.
- Para Infantil, prioriza actividades de observación,
  identificación o respuesta no escrita según la edad.

SALIDA
Produce DOS DOCUMENTOS DIFERENCIADOS:

A. FICHA PARA EL ALUMNADO
- Título, materia, curso y contenidos.
- Campos en blanco para nombre y fecha.
- Instrucciones, duración y puntuación.
- Ejercicios con puntuación por apartado.
- Espacios suficientes para responder.
- Ninguna solución ni indicación que revele la respuesta.
- Formato limpio, editable e imprimible.

B. SOLUCIONARIO PARA EL DOCENTE
- Respuestas o modelos de respuesta.
- Puntuación por apartado y criterios de corrección.
- Aclaraciones sobre respuestas alternativas válidas.
- Referencia a la fuente cuando esté disponible.

Si puedes crear archivos, entrega la ficha y el
solucionario por separado en formato editable
y/o PDF. Si no puedes, proporciona ambos textos
separados y listos para copiar a un procesador.
No afirmes haber creado archivos que no existan.

CONTROL FINAL
Verifica la exactitud de las respuestas, la relación
con las fuentes, la dificultad, el espacio de escritura,
la duración, la puntuación y la ausencia de soluciones
en la ficha del alumnado. Exige revisión docente.
~~~

**Petición de prueba:**

~~~text
@crear-fichas-examen
A partir del tema adjunto de Seguridad Informática,
crea una ficha de examen para 2.º SMR.
Dificultad media-alta; duración de 50 minutos;
puntuación total 10 puntos.
Incluye 4 preguntas de respuesta breve, 2 casos
prácticos sobre copias de seguridad y 1 ejercicio
de comparación entre copias completas, diferenciales
e incrementales.
Entrégame la ficha imprimible sin respuestas y
el solucionario docente aparte.
~~~

**Revisión:** comprueba que el alumnado puede realizarla en el tiempo previsto, que las puntuaciones suman **10**, que los espacios bastan para responder y que el solucionario no se filtra a la ficha. Para crear varias versiones, se puede pedir **«Versión B: dificultad equivalente, nuevos enunciados, misma cobertura de contenidos»**, sin asumir equivalencia automática.

### Ejemplo 3 · Skill «crear-rubricas-competenciales»
{: id="skill-rubricas-evaluacion" }

Esta es **la misma habilidad del taller guiado anterior**, no hace falta crear otra con un nombre distinto. Allí encontrarás [las instrucciones completas, capturas reales y primera prueba](#taller-skill-gemini). La repetimos aquí como tercer modelo de evaluación para poder comparar los tres productos.

**Nombre:** \`crear-rubricas-competenciales\`

**Descripción para pegar:**

~~~text
Diseña rúbricas competenciales de cuatro niveles para
actividades educativas a partir de los criterios oficiales
o resultados de aprendizaje aportados por el docente.
Si falta el criterio, lo solicita antes de crear la rúbrica.
~~~

**Instrucciones resumidas para crearla desde cero:**

~~~text
ROL
Eres especialista en evaluación competencial y DUA.

REGLA PRINCIPAL
No crees una rúbrica sin el criterio oficial de evaluación
o resultado de aprendizaje proporcionado literalmente
por el docente. Solicítalo si falta; no lo inventes.

PREGUNTA POR
Etapa, curso, materia, actividad, evidencia a evaluar,
criterio oficial, número de indicadores, idioma y
ponderación, cuando sean datos necesarios.

ELABORA
- Indicadores observables vinculados al criterio.
- Cuatro niveles claramente diferenciados.
- Descriptores progresivos, específicos y no ambiguos.
- Ponderaciones que sumen 100 % si se solicitan.
- Apoyos DUA compatibles con el objetivo evaluado.
- Tabla editable y lista de verificación para el docente.

LÍMITES
No inventes normativa, criterios o resultados.
No uses datos personales reales ni asignes notas
definitivas. Señala indicadores que no estén
sustentados en el criterio facilitado.
Revisa claridad, sesgos, coherencia y accesibilidad.
~~~

**Primera prueba —detección de información que falta:**

~~~text
@crear-rubricas-competenciales
Quiero una rúbrica de cuatro niveles para evaluar
una exposición oral sobre el ciclo del agua en
5.º de Primaria.
~~~

**Resultado esperado y observado en el taller anterior:** la Skill **debe pedir el criterio curricular oficial** antes de elaborar la rúbrica. En nuestra prueba real lo solicitó correctamente. Después, el docente aporta el criterio literal y comprueba la calidad de los indicadores y descriptores.

**Segunda prueba —generar la rúbrica completa:** con un criterio oficial que el docente haya copiado de una fuente válida, pide una tabla de **4 niveles**, **4 indicadores observables**, ponderaciones que sumen **100 %**, opciones de accesibilidad y un apartado breve que indique qué parte del criterio fundamenta cada indicador. No confundas una propuesta de rúbrica con una calificación definitiva.

### Comparación para el aula y entrega en Aules

| Aspecto a comprobar | Cuestionario GIFT | Ficha de examen | Rúbrica |
|---|---|---|---|
| ¿Se apoya en fuentes reales? | Sí | Sí | Criterio oficial aportado |
| ¿Respeta la dificultad y el nivel? | Revisa ítems y distractores | Revisa tiempo y exigencia | Revisa descriptores |
| ¿Se puede usar directamente? | Tras **importar y comprobar** en Aules | Tras revisar e imprimir/publicar | Tras validar criterios e indicadores |
| Error que conviene detectar | .md, numeración, tipos extra, claves incorrectas | Soluciones visibles, puntos mal sumados | Criterios inventados o niveles poco diferenciados |

**Actividad para el profesorado:** elige **una** de las tres Skills (puedes probar más de una), facilita material autorizado, conserva la configuración y el resultado y documenta **una mejora tras detectar un problema**. Para la entrega en Aules, adjunta una captura de la Skill, el producto generado **sin datos personales** y una reflexión breve: ¿qué datos pidió?, ¿qué respetó?, ¿qué tuviste que corregir?

**Conclusión:** una Skill puede ayudar a preparar instrumentos muy diferentes, pero **generar un archivo no equivale a validarlo**. El profesorado conserva la responsabilidad sobre las fuentes, la adecuación curricular, la corrección y el uso final de cada instrumento.

---

---

[← Ver todos los talleres de agentes y Skills](bloque4-agentes-ia.html)
