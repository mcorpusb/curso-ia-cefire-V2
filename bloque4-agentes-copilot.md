---
layout: page
title: "Agentes y Skills en Copilot"
parent: "Agentes y asistentes docentes"
grand_parent: "Bloque 4: Evaluación y Personalización"
nav_order: 4
---

[← Volver al índice de asistentes](bloque4-agentes-ia.html) · [Ir al Bloque 4](bloque4.html)

---

## Taller guiado · Crea tu primer agente docente con Microsoft Copilot
{: id="taller-agente-copilot" }

**Continuación de los talleres de Gems y Skills.** Ahora crearemos un agente real de **Microsoft 365 Copilot** llamado **«Asesor de evaluación y DUA»**. Lo utilizaremos para elaborar instrumentos de evaluación y proponer actividades accesibles, comparándolo con el mismo ejemplo del ciclo del agua de 5.º de Primaria.

> **📄 Manual PDF para Aules:** [Descargar «Crea tu primer agente docente en Microsoft Copilot» (12 páginas, capturas reales)]({{ '/assets/docs/bloque4/Manual_agente_Copilot_Bloque4_Aules.pdf' | relative_url }}). Toda la práctica está desarrollada también a continuación, sin necesidad de descargar el archivo.

**Qué aprenderás:** acceder a Agent Builder, configurar el nombre, la descripción y las instrucciones, añadir preguntas sugeridas, crear un agente privado y realizar **dos pruebas**: solicitar el criterio curricular antes de crear una rúbrica y generar propuestas de adaptación DUA.

### Paso 1 · Entra en Copilot y selecciona Nuevo agente

Abre [Microsoft 365 Copilot](https://m365.cloud.microsoft/chat) con una cuenta que tenga acceso a la creación de agentes. En la barra lateral, abre **Agentes → Nuevo agente**. Esta opción aparece en las capturas de nuestra cuenta educativa, pero su disponibilidad depende de las licencias y permisos de cada organización.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
<a href="{{ '/assets/img/bloque4/tutoriales/copilot1.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/bloque4/tutoriales/copilot1.png' | relative_url }}" alt="Menú Agentes de Microsoft 365 Copilot con opción Nuevo agente" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
<figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 1 · Acceso a «Nuevo agente»</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/copilot1.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>


### Paso 2 · Abre el editor de configuración

Copilot muestra **«Cree su propio agente especialista»** y algunas plantillas. Nuestro ejemplo utiliza el editor **Configurar** de **Agent Builder**: así podemos controlar qué instrucciones guarda el agente en lugar de aceptar una propuesta automática sin revisarla.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
<a href="{{ '/assets/img/bloque4/tutoriales/copilot2.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/bloque4/tutoriales/copilot2.png' | relative_url }}" alt="Pantalla de creación de agentes en Copilot con plantillas" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
<figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 2 · Inicio de Agent Builder</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/copilot2.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>


<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
<a href="{{ '/assets/img/bloque4/tutoriales/copilot3.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/bloque4/tutoriales/copilot3.png' | relative_url }}" alt="Editor de Agent Builder con campos de instrucciones, nombre y habilidades" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
<figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 3 · Editor del agente en modo Configurar</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/copilot3.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>


### Paso 3 · Nombre, descripción e instrucciones

**Nombre:** `Asesor de evaluación y DUA`

**Descripción:**

~~~text
Asistente educativo que ayuda al profesorado de Infantil, Primaria,
ESO, Bachillerato, FP y EOI a diseñar rúbricas, listas de cotejo,
cuestionarios y actividades accesibles siguiendo los principios
del DUA y los criterios curriculares facilitados por el docente.
~~~

**Instrucciones completas para copiar:**

~~~text
ROL
Eres un asesor pedagógico especializado en evaluación competencial,
inteligencia artificial educativa y Diseño Universal para el
Aprendizaje (DUA).

DESTINATARIOS
Profesorado de Infantil, Primaria, ESO, Bachillerato, FP y EOI.

OBJETIVO
Ayudar a crear, revisar y mejorar instrumentos de evaluación y
actividades accesibles respetando los criterios curriculares aportados.

REGLA PRIORITARIA
1. Identifica la etapa, materia o módulo y actividad.
2. Solicita el criterio oficial de evaluación o resultado de
   aprendizaje literal y su fuente, si no se ha proporcionado.
3. No inventes criterios, resultados de aprendizaje ni normativa.
4. Si falta el criterio oficial, no generes un instrumento
   definitivo. Pregúntalo y espera la respuesta.

FUNCIONES
- Crear rúbricas con cuatro niveles y descriptores observables.
- Diseñar listas de cotejo y cuestionarios.
- Proponer autoevaluación y coevaluación.
- Revisar instrumentos y detectar ambigüedades.
- Proponer alternativas DUA de representación, participación
  y acción/expresión.

PROCEDIMIENTO
1. Comprueba qué necesita el docente.
2. Solicita únicamente la información imprescindible que falte.
3. Identifica evidencias observables vinculadas al criterio aportado.
4. Elabora el instrumento solicitado.
5. Explica su relación con el criterio.
6. Propón ajustes DUA cuando corresponda.
7. Incluye una lista de comprobación docente.

FORMATO DE RESPUESTA
- Utiliza tablas cuando sean útiles.
- Escribe con lenguaje claro, profesional y natural.
- Diferencia criterios oficiales de propuestas generadas por IA.
- Entrega resultados revisables, sin explicaciones excesivas.

PRIVACIDAD Y SEGURIDAD
- No solicites nombres ni datos personales del alumnado.
- No emitas calificaciones definitivas.
- No inventes legislación.
- No presentes propuestas como instrumentos oficiales.
- Recuerda que el docente debe revisar y validar el resultado.

PRUEBA DE FUNCIONAMIENTO
Si solicitan una rúbrica sobre una exposición oral del ciclo
del agua en 5.º de Primaria sin aportar el criterio oficial,
solicítalo antes de generar la rúbrica.
~~~

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
<a href="{{ '/assets/img/bloque4/tutoriales/copilot4.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/bloque4/tutoriales/copilot4.png' | relative_url }}" alt="Nombre, descripción e instrucciones rellenadas en Agent Builder" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
<figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 4 · Configuración del Asesor de evaluación y DUA</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/copilot4.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>


### Paso 4 · Habilidades, Conocimiento y búsqueda en la Web

En el editor aparecen **Habilidades → Agregar**, **Conocimiento → Agregar conocimiento** y **Búsqueda en la Web**. Para esta primera práctica dejamos **Habilidades** y **Conocimiento** vacíos. Queremos comprobar el efecto de las instrucciones sin incorporar documentos.

La búsqueda en la Web aparece activada en nuestra captura; **tener acceso a páginas web no sustituye solicitar el criterio curricular oficial ni su fuente**. En una segunda práctica pueden añadirse documentos curriculares verificados y autorizados.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
<a href="{{ '/assets/img/bloque4/tutoriales/copilot5.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/bloque4/tutoriales/copilot5.png' | relative_url }}" alt="Editor del agente con herramientas, conocimiento y sugerencias de conversación" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
<figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 5 · Habilidades, Conocimiento, Búsqueda en la Web e Indicaciones sugeridas</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/copilot5.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>


### Paso 5 · Añadir tres indicaciones sugeridas

Las indicaciones sugeridas son **mensajes de ejemplo** que el profesorado puede seleccionar al comenzar a conversar con el agente. Introduce cada pareja de **Título** y **Mensaje**:

| Título | Mensaje |
|---|---|
| **Crear una rúbrica** | Quiero diseñar una rúbrica de cuatro niveles para evaluar una exposición oral sobre el ciclo del agua en 5.º de Primaria. |
| **Adaptar una actividad DUA** | Ayúdame a adaptar una actividad siguiendo el DUA. Pregúntame por la etapa, la materia y las barreras de aprendizaje que necesito abordar. |
| **Diseñar una lista de cotejo** | Necesito una lista de cotejo para evaluar una actividad práctica. Antes de elaborarla, solicita los criterios oficiales o resultados de aprendizaje y las características de la tarea. |

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
<a href="{{ '/assets/img/bloque4/tutoriales/copilot6.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/bloque4/tutoriales/copilot6.png' | relative_url }}" alt="Tres ejemplos de preguntas para utilizar el agente docente" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
<figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 6 · Indicaciones sugeridas configuradas</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/copilot6.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>


### Paso 6 · Crear y mantener el agente privado

Pulsa **Crear**. En la práctica real, Copilot confirmó **«Su agente se creó correctamente»** e indicó que inicialmente era **privado**, es decir, solo estaba disponible para su propietaria. Pulsa **«Iniciar chat»**, sin necesidad de compartirlo.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
<a href="{{ '/assets/img/bloque4/tutoriales/copilot7.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/bloque4/tutoriales/copilot7.png' | relative_url }}" alt="Confirmación de creación, privacidad y opción Iniciar chat" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
<figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 7 · Agente creado correctamente</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/copilot7.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>


### Paso 7 · Prueba real 1: crear una rúbrica

En una conversación con el agente, envía exactamente la misma petición que utilizamos con la Gem y la Skill:

~~~text
Quiero crear una rúbrica de cuatro niveles para evaluar
una exposición oral sobre el ciclo del agua en 5.º de Primaria.
~~~

**Resultado observado:** el agente **no generó la rúbrica directamente**. Solicitó el **área o materia**, el **criterio de evaluación oficial literal** y, si era posible, la **fuente curricular**. Se comprometió a elaborar después una rúbrica con cuatro niveles y apoyos DUA. **La prueba inicial se superó**, pero aún no se ha validado un instrumento final porque no se facilitó el criterio.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
<a href="{{ '/assets/img/bloque4/tutoriales/copilot9.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/bloque4/tutoriales/copilot9.png' | relative_url }}" alt="Respuesta del agente solicitando materia y criterio oficial antes de diseñar la rúbrica" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
<figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 8 · Primera prueba superada: pide el criterio oficial</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/copilot9.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>


### Paso 8 · Prueba real 2: adaptar una actividad con DUA

En un chat nuevo, envía:

~~~text
Quiero adaptar una actividad sobre el ciclo del agua para
5.º de Primaria siguiendo los principios del DUA.
La actividad consiste en una exposición oral.
Propón diferentes formas de representación, participación
y expresión para que el alumnado pueda demostrar lo aprendido.
~~~

**Resultado observado:** el agente propuso apoyos para acceder a la información (vídeos subtitulados, infografías, esquemas, vocabulario ilustrado), opciones para implicarse (elección de formato, trabajo individual, parejas o grupos, organizadores previos) y diferentes medios para demostrar conocimientos (explicación oral, vídeo, pódcast, maqueta o infografía). También redactó una tabla de evidencias y una lista de comprobación docente.

<figure class="tutorial-captura" style="margin:1rem 0 1.75rem;">
<a href="{{ '/assets/img/bloque4/tutoriales/copilot10.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/bloque4/tutoriales/copilot10.png' | relative_url }}" alt="Respuesta de Copilot sobre opciones de representación, implicación y expresión" loading="lazy" style="display:block;width:100%;max-width:780px;height:auto;border:1px solid #d2d9e2;border-radius:9px;"></a>
<figcaption style="font-size:.9rem;margin-top:.5rem;"><strong>Captura 9 · Segunda prueba: propuesta de adaptación DUA</strong> · <a href="{{ '/assets/img/bloque4/tutoriales/copilot10.png' | relative_url }}" target="_blank" rel="noopener">Ampliar captura</a></figcaption>
</figure>


### Revisión pedagógica imprescindible

**No todas las evidencias evalúan lo mismo.** Si el criterio exige evaluar la **comunicación oral**, una infografía sin explicación oral puede resultar insuficiente. Si se evalúa la **comprensión del ciclo del agua**, podrían aceptarse evidencias distintas. El DUA pretende reducir barreras sin cambiar inadvertidamente el objetivo curricular, y siempre requiere validación docente.

### Comparación final · Gem, Skill y agente

| Herramienta | Resultado de nuestra prueba |
|---|---|
| **Gem en Gemini** | En la primera prueba generó una rúbrica sin criterio; tras mejorar las instrucciones, solicitó ese dato. |
| **Skill en Gemini** | Solicitó el criterio oficial en la primera prueba. |
| **Agente en Copilot** | Solicitó el criterio en la primera prueba y propuso opciones DUA en la segunda. |

**Qué entregar en Aules:** nombre y finalidad del agente, instrucciones, capturas sin datos personales, una evidencia de cada prueba y una reflexión breve sobre qué ha funcionado y qué debería revisar el docente.

**Conclusión:** crear un agente no es garantía de que siga cada instrucción. Debemos **probarlo, detectar errores y mejorarlo**. Esta primera versión funciona como asistente configurado; para automatizaciones reales con sistemas externos se necesitan herramientas, permisos y, en ocasiones, Copilot Studio.

---
## Ampliación práctica · Añade una Skill a un agente de Copilot
{: id="skill-cuentacuentos-copilot" }

Esta ampliación parte de un segundo agente, **«Cuentacuentos Mágico Infantil»**, configurado para crear historias para Educación Infantil de **3 a 6 años**. Queremos que sus instrucciones generales redacten cuentos y que una habilidad adicional se especialice en **adaptar un cuento existente a alumnado de 3, 4 o 5 años**.

### Paso 1 · Crear y probar el agente cuentacuentos

En Microsoft 365 Copilot abre **Agentes → Nuevo agente → Configurar**, o edita un agente propio si ya lo tienes creado. En nuestra práctica se configuró así:

- **Nombre:** Cuentacuentos Mágico Infantil.
- **Descripción:** asistente creativo para docentes de Infantil que genera cuentos originales, breves y adaptados a la edad, con emociones, participación oral y actividades.
- **Instrucciones:** historias con inicio, aventura y desenlace; vocabulario adecuado a 3, 4 o 5 años; sonidos, repeticiones, propuestas DUA, tres preguntas de comprensión y dos actividades; respuestas en castellano o valenciano y sin datos personales del alumnado.

**Primera prueba:** se pidió un cuento sobre **Mico, un gatito naranja que aprende a compartir juguetes**, para 3 años. Entre las propuestas finales, el agente incluyó las actividades «La pelota viajera» y «La caja de Mico», además de una dramatización con sonidos y gestos. La evidencia disponible muestra esa parte final; no permite comprobar toda la narración original.

### Paso 2 · Abrir la sección Habilidades

En la configuración del cuentacuentos, abre **Habilidades → Agregar**. En la cuenta utilizada aparecen dos opciones: **Crear con chat** y **Cargar**. Para el taller se seleccionó **Crear con chat**.

**Nota:** las habilidades asociadas a este agente no deben confundirse con las Skills independientes que creamos desde «Personalizar → Habilidades» en Gemini.

### Paso 3 · Crear la habilidad `adaptar-cuentos-infantiles`

Pide a Agent Builder que cree una habilidad con este objetivo:

~~~text
Crea una habilidad reutilizable llamada adaptar-cuentos-infantiles
para el agente Cuentacuentos Mágico Infantil.

Su función es adaptar un cuento ORIGINAL ya existente a
alumnado de 3, 4 o 5 años, conservando sus personajes,
su argumento principal y su mensaje.

3 años: frases cortas, repetición, vocabulario sencillo,
onomatopeyas y gestos.
4 años: diálogos breves, pequeñas aventuras y preguntas.
5 años: narración más elaborada, decisiones y reflexión.

Incluye:
- Título y edad recomendada.
- Cuento adaptado completo.
- Tres preguntas de comprensión.
- Dos actividades de aula.
- Una propuesta inclusiva de participación y apoyos DUA.

No uses datos personales de menores. Responde en castellano
o valenciano según lo solicitado.

Si el texto original no está disponible y el usuario pide
conservar fielmente los personajes y acontecimientos,
solicítalo antes de adaptar: no inventes una continuidad.
~~~

**Resultado observado:** la nueva habilidad apareció en **Habilidades** con el nombre `adaptar-cuentos-infantiles` y la descripción de que se invoca al adaptar un cuento existente a una edad diferente. Esto confirma que se **añadió al agente**.

### Paso 4 · Probar la habilidad

Se solicitó una versión para **5 años** de la historia del gatito Mico, con más diálogos, decisiones de los personajes y preguntas de reflexión.

**Resultado producido:** el cuento titulado **«Mico y el gran descubrimiento de compartir»** incorpora la caja de juguetes, una decisión inicial de no compartir, la reflexión del protagonista, tres preguntas de comprensión y dos actividades: «El juego de las decisiones de Mico» y «La caja de compartir». Añade propuestas DUA como pictogramas, gestos, dramatización, anticipación de vocabulario y alternativas para responder.

### La comprobación que no debemos omitir

El resultado es **útil como cuento para 5 años**, pero no demuestra por sí solo una **adaptación fiel del texto original**. En el fragmento disponible del primer cuento aparecía **Lila**; en la nueva versión figuran **Luna, Tano y Tina**, y no se había facilitado el cuento original completo como fuente. Tampoco basta la respuesta final para demostrar qué procedimiento interno ejecutó Copilot: sabemos que la habilidad está incorporada al agente, pero no podemos afirmar que todas sus reglas se activaran correctamente en esa conversación.

**Mejora propuesta:** aportar el texto íntegro del cuento original y repetir la petición. Después comprobar: personajes conservados, secuencia de acontecimientos, extensión y vocabulario ajustados a la edad, participación y apoyos DUA. Si algún elemento cambia, revisar las instrucciones de la habilidad y volver a probar.

**Aprendizaje clave del taller:** *que una Skill esté creada y entregue una respuesta convincente no garantiza que haya cumplido todas las condiciones*. La evaluación crítica del resultado sigue correspondiendo al docente.

---

### ¿Qué hacemos después?

Ya hemos probado la Gem, la Skill y un primer agente de Copilot. Si la cuenta dispone de permisos y licencias, una actividad de ampliación puede incorporar documentos oficiales como conocimiento o conectar herramientas y flujos mediante Copilot Studio.

---

[← Ver todos los talleres de agentes y Skills](bloque4-agentes-ia.html)
