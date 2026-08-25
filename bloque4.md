---
layout: page
title: "Bloque 4: Evaluación y Personalización"
nav_order: 7
has_children: true
---

# Bloque 4 · Evaluación y Personalización
{: .fs-8 }

Diseña rúbricas LOMLOE, genera adaptaciones curriculares rápidas y reflexiona sobre ética, privacidad y uso responsable de la IA en educación.
{: .fs-5 .fw-300 }


---

## Objetivos del bloque

Al finalizar este bloque serás capaz de:

1. **Automatizar la creación de rúbricas de evaluación alineadas con la LOMLOE** (criterios de evaluación, competencias específicas e indicadores de logro) utilizando IA generativa, liberando tiempo para la docencia esencial.
2. Generar **correcciones y retroalimentación motivadora** de forma automática, con comentarios constructivos que orienten al alumnado hacia la mejora.
3. Generar **adaptaciones curriculares** y materiales personalizados para alumnado NEAE de forma ágil y fundamentada en el DUA.
4. Crear **instrumentos de evaluación variados** (listas de cotejo, dianas de evaluación, portfolios digitales) con asistencia de IA.
5. **Promover un uso ético y crítico de la IA**, priorizando la privacidad del alumnado y reflexionando sobre su impacto real en la educación secundaria.
6. Diseñar una **política de uso de IA en el aula** adaptada a tu centro y etapa educativa.

> **⚠️ Seguridad GVA:** Este bloque aborda directamente la ética y la privacidad. Recuerda: **ninguna herramienta de IA debe tomar decisiones evaluativas finales sobre el alumnado**. La IA es un asistente; la responsabilidad profesional y legal recae siempre en el docente.

---

## 4.1 · Rúbricas LOMLOE con IA: del criterio de evaluación al indicador de logro

### El modelo de evaluación LOMLOE

La LOMLOE establece un modelo de evaluación competencial con esta cadena lógica:

```
Competencias clave
  └─▸ Competencias específicas (por área/materia)
       └─▸ Criterios de evaluación
            └─▸ Indicadores de logro (definidos por el centro)
                 └─▸ Instrumentos de evaluación (rúbricas, listas de cotejo…)
```

La IA puede ayudar en los **dos últimos niveles**: generar indicadores de logro concretos a partir de los criterios del currículo oficial y diseñar los instrumentos.

### Ejemplo de prompt: Rúbrica completa a partir de un criterio de evaluación

```text
Actúa como un especialista en evaluación competencial según la LOMLOE, 
con experiencia en la Comunitat Valenciana.

Contexto: Área de Lengua Castellana y Literatura, 5.º de Educación Primaria. 
Decreto 106/2022 de la Comunitat Valenciana. 
Criterio de evaluación seleccionado: "Producir textos escritos de forma 
coherente y cohesionada, con corrección lingüística, adecuados a la 
situación comunicativa."

Tarea: Diseña una rúbrica analítica con 4 niveles de logro para ese criterio.

Formato: Tabla con esta estructura:
| Indicador de logro | Nivel 4 – Excelente | Nivel 3 – Notable | Nivel 2 – Suficiente | Nivel 1 – En proceso |

Incluye al menos 4 indicadores de logro:
1. Coherencia y estructura del texto.
2. Cohesión (uso de conectores).
3. Corrección ortográfica y gramatical.
4. Adecuación al destinatario y al propósito.

Restricciones:
- Los descriptores deben ser observables y medibles.
- Usa lenguaje claro que un padre/madre pueda entender.
- Cada celda: máximo 25 palabras.
```

> **💡 Ejemplo Primaria:** Después de generar la rúbrica, **verifica los criterios de evaluación en NotebookLM** (Bloque 2) para asegurarte de que coinciden con los del decreto. Copilot puede inventar criterios que suenen convincentes pero no existan.

### Ejemplo de prompt: Rúbrica holística rápida

Para evaluaciones menos formales (actividades de clase, participación, trabajo cooperativo), una rúbrica holística es más práctica:

```text
Actúa como un docente de 3.º de ESO de Biología y Geología (LOMLOE, CV).

Tarea: Crea una rúbrica holística de 4 niveles para evaluar una exposición 
oral grupal sobre "Los ecosistemas terrestres". Cada nivel debe ser un 
párrafo de 2-3 frases que describa globalmente el desempeño.

Formato:
- Nivel 4 (Sobresaliente): [descripción]
- Nivel 3 (Notable): [descripción]
- Nivel 2 (Bien): [descripción]
- Nivel 1 (Insuficiente): [descripción]

Restricciones: Los niveles deben ser progresivos y no ambiguos. Incluye 
referencias a: contenido científico, trabajo en equipo, comunicación oral 
y uso de soporte visual.
```

> **🚀 Reto Secundaria/FP:** Genera la misma rúbrica en **Copilot** y en **Gemini**. ¿Cuál produce descriptores más claros? ¿Cuál diferencia mejor los niveles? Pide a **Kimi** que analice ambas rúbricas y elija la mejor, justificando por qué.

---

## 4.1b · Correcciones motivadoras automatizadas con IA

Uno de los mayores consumidores de tiempo docente es la **corrección y retroalimentación individualizada**. La IA puede generar comentarios motivadores y constructivos que orienten al alumnado, liberando tiempo para la docencia esencial.

### El problema de la retroalimentación tradicional

| Situación habitual | Consecuencia | Solución con IA |
|:-------------------|:-------------|:----------------|
| "Bien", "Regular", "Necesita mejorar" | El alumno/a no sabe *qué* ni *cómo* mejorar | Comentarios específicos con orientaciones concretas |
| Corregir 30 redacciones lleva 6+ horas | Agotamiento, comentarios cada vez más escuetos | Un borrador de retroalimentación en segundos que el docente revisa y ajusta |
| Tono involuntariamente negativo por cansancio | Desmotivación del alumnado | Tono siempre constructivo y motivador |

### Ejemplo de prompt: Generar retroalimentación motivadora para un trabajo

```text
Actúa como un docente experto en evaluación formativa con enfoque 
motivador y constructivo.

Contexto: Soy profesor/a de [TU ÁREA] en [ÉTAPA Y CURSO] (LOMLOE, CV). 
He evaluado el siguiente trabajo de un alumno/a y quiero generar una 
retroalimentación que motive y oriente.

Nivel de logro alcanzado: [Nivel 1/2/3/4 según tu rúbrica]

Trabajo del alumno/a:
[PEGAR AQUÍ EL TRABAJO O UN RESUMEN]

Tarea: Genera un comentario de retroalimentación (100-150 palabras) con 
esta estructura:
1. 🌟 FORTALEZAS: 2-3 aspectos positivos concretos del trabajo 
   (cita fragmentos específicos cuando sea posible).
2. 🛠️ ÁREAS DE MEJORA: 2 aspectos a mejorar formulados como 
   oportunidades, no como errores ("Podrías enriquecer..." en vez 
   de "Te falta...").
3. 🚀 SIGUIENTE PASO: 1 acción concreta y sencilla que el alumno/a 
   puede hacer ya para mejorar.
4. 💬 CIERRE MOTIVADOR: 1 frase de ánimo personalizada.

Restricciones:
- Tono cercano pero profesional.
- Nunca uses "pero" después de un elogio (efecto "sándwich negativo").
- Adapta el lenguaje a la edad del alumnado.
- El comentario debe ser útil también para las familias si lo leen.
```

### Ejemplo de prompt: Corrección masiva — generar feedback para toda la clase

```text
Actúa como un asistente de evaluación para un docente de [TU ÁREA] 
en [ÉTAPA Y CURSO].

Contexto: He evaluado los trabajos de mi clase usando la siguiente 
rúbrica [PEGAR RÚBRICA O CRITERIOS]. A continuación te doy la lista 
de resultados.

Lista de alumnos/as (DATOS FICTICIOS):
- Alumno/a A: Nivel 4 (excelente en contenido, buen formato)
- Alumno/a B: Nivel 2 (contenido básico, faltas de ortografía)
- Alumno/a C: Nivel 3 (buen contenido, falta profundidad)
- Alumno/a D: Nivel 1 (no cumple extensión, ideas desordenadas)
[AÑADIR MÁS...]

Tarea: Para cada alumno/a, genera un comentario motivador de 3-4 
líneas siguiendo el formato: Fortaleza + Área de mejora + Siguiente 
paso. Varía la redacción para que no sean comentarios idénticos.

Formato: Tabla con columnas [Alumno/a | Nivel | Comentario motivador].
```

> **⚠️ Seguridad GVA:** En el prompt anterior se usan **datos ficticios** (Alumno/a A, B, C...). **Nunca introduzcas nombres reales** en herramientas externas. Si usas Copilot `@edu.gva.es`, los datos están protegidos, pero aún así es buena práctica anonimizar.

> **💡 Consejo:** Revisa siempre el feedback generado antes de entregarlo. La IA produce borradores útiles, pero tú conoces a cada alumno/a y puedes añadir el toque personal que marca la diferencia.

<div style="background-color:#f5f7fa; border-left:4px solid #6c8ebf; padding:12px 14px; margin:18px 0; border-radius:6px;">

💭 <strong>Para pensar</strong><br>
Si solo evaluamos el resultado final de una tarea, la IA puede hacerlo por el alumnado.
Cambiar el foco hacia el proceso permite que la herramienta siga siendo útil sin sustituir el aprendizaje.

</div>

---

## 4.2 · Más instrumentos de evaluación con IA

Las rúbricas no son el único instrumento. La LOMLOE promueve la **diversidad de instrumentos**. Veamos cómo la IA puede ayudar con otros:

### 4.2.1 · Listas de cotejo

### Ejemplo de prompt: Lista de cotejo para un proyecto

```text
Actúa como un docente de Tecnología e Informática de 2.º de ESO (LOMLOE, CV).

Contexto: Los alumnos están realizando un proyecto de programación con 
Scratch: un juego interactivo sobre el sistema solar.

Tarea: Crea una lista de cotejo (checklist) con 12 ítems que evalúe:
- Funcionamiento técnico del programa (4 ítems).
- Contenido científico correcto (4 ítems).
- Diseño y experiencia de usuario (2 ítems).
- Documentación y presentación (2 ítems).

Formato: Tabla con columnas [N.º | Ítem | Sí | No | Observaciones].
Cada ítem debe ser una afirmación observable ("El programa inicia sin 
errores", "Los datos de los planetas son correctos").
```

### 4.2.2 · Dianas de evaluación

Las dianas de evaluación son representaciones visuales circulares donde el alumnado se autoevalúa. Son ideales para evaluación formativa y metacognición.

### Ejemplo de prompt: Diana de autoevaluación

```text
Actúa como un especialista en evaluación formativa y metacognición para 
Educación Primaria.

Contexto: 4.º de Primaria, SA sobre "Los inventos que cambiaron el mundo" 
(Conocimiento del Medio, LOMLOE, CV). Los alumnos han trabajado en equipos 
de 4 durante 5 sesiones.

Tarea: Diseña una diana de autoevaluación con 6 ejes/criterios:
1. He participado activamente en mi equipo.
2. He buscado información en fuentes fiables.
3. Entiendo cómo funcionan los inventos que hemos estudiado.
4. He explicado mis ideas con claridad.
5. He escuchado y respetado las ideas de mis compañeros/as.
6. He cumplido con los plazos del proyecto.

Cada eje tiene 4 niveles (del centro al borde):
- 1 = Necesito mejorar mucho
- 2 = Puedo mejorar
- 3 = Lo hago bien
- 4 = Lo hago muy bien

Formato: Describe la diana como instrucciones para dibujarla en papel 
(los alumnos la rellenarán a mano). Incluye las instrucciones que el 
docente debe dar al alumnado.
```

> **💡 Ejemplo Primaria:** Las dianas funcionan especialmente bien en Primaria porque son visuales y no requieren escritura extensa. Pide a Copilot que adapte el lenguaje de los criterios a *"3.º de Primaria (8-9 años)"* para simplificar la formulación.

### 4.2.3 · Portfolios digitales: estructura con IA

```text
Actúa como un asesor de innovación educativa del CEFIRE.

Contexto: Un centro de Secundaria quiere implementar un portfolio digital 
del alumnado usando Microsoft OneNote (entorno GVA). Cada alumno/a tendrá 
un cuaderno de OneNote con secciones por trimestre.

Tarea: Diseña la estructura de un portfolio digital para 1.º de ESO que 
incluya:
1. Secciones y subsecciones del cuaderno.
2. Qué debe incluir el alumnado en cada sección (evidencias, reflexiones, 
   autoevaluaciones).
3. Criterios para que el profesorado evalúe el portfolio al final de cada 
   trimestre.
4. Una plantilla de reflexión metacognitiva que el alumno/a complete en 
   cada entrega.

Formato: esquema con viñetas anidadas + tabla de criterios de evaluación 
del portfolio.
```

---

## 4.3 · Adaptaciones curriculares con IA y DUA

Una de las aplicaciones más valiosas de la IA generativa es la **personalización rápida** de materiales para alumnado con necesidades específicas de apoyo educativo (NEAE).

### Principios DUA como guía para los prompts

| Principio DUA | Pregunta clave | Qué pedirle a la IA |
|:--------------|:---------------|:---------------------|
| **Múltiples medios de representación** | ¿Cómo presento la información? | Versiones alternativas: audio, visual, simplificada, ampliada |
| **Múltiples medios de acción y expresión** | ¿Cómo demuestra el alumno/a lo aprendido? | Actividades alternativas: oral, escrita, visual, manipulativa |
| **Múltiples medios de compromiso** | ¿Cómo motivo y engancho? | Variantes por interés, nivel de reto, autonomía |

### Ejemplo de prompt: Adaptación para alumnado con dislexia

```text
Actúa como un especialista en atención a la diversidad y dificultades 
específicas de aprendizaje (DEA).

Contexto: Tengo un alumno de 4.º de Primaria con dislexia diagnosticada 
(informe psicopedagógico del SPE). Estoy diseñando una prueba escrita de 
Conocimiento del Medio sobre "Los ecosistemas" (LOMLOE, CV). El resto de 
la clase realiza una prueba estándar de 10 preguntas.

Tarea: Adapta la prueba para este alumno siguiendo estas pautas DUA:
1. Reduce a 7 preguntas manteniendo los mismos criterios de evaluación.
2. Sustituye al menos 2 preguntas de desarrollo por preguntas de elección 
   múltiple o de unir con flechas.
3. Aumenta el tamaño de letra a 14pt y el interlineado a 1.5.
4. Añade un apoyo visual (icono o imagen de referencia) en cada pregunta.
5. Incluye instrucciones claras y secuenciadas al inicio.

Formato: El examen completo, listo para imprimir. Marca con [ADAPTACIÓN] 
cada cambio respecto a la prueba estándar.

La prueba estándar es:
[PEGAR AQUÍ LA PRUEBA ORIGINAL]
```

### Ejemplo de prompt: Material de refuerzo para incorporación tardía

```text
Actúa como un docente de apoyo lingüístico en un centro de acogida 
de la Comunitat Valenciana.

Contexto: Alumna de 2.º de ESO, incorporación tardía al sistema educativo 
español (llegó hace 4 meses). Nivel de español: A2 (comprende frases 
sencillas, producción limitada). Está en clase ordinaria de Matemáticas.

Tarea: Crea un material de apoyo para el tema "Proporcionalidad directa" 
que incluya:
1. Vocabulario clave del tema con traducción visual (pictogramas o 
   descripciones sencillas).
2. Explicación del concepto en lenguaje simplificado (máx. nivel A2-B1).
3. 3 ejercicios resueltos paso a paso con apoyo visual.
4. 3 ejercicios para practicar (misma estructura, diferentes números).

Formato: documento con secciones claras, iconos de apoyo descritos entre 
corchetes [ICONO: ...] y espacio para que la alumna escriba.

Restricciones: Frases cortas (máx. 12 palabras). Un concepto por párrafo. 
No uses refranes, ironías ni expresiones idiomáticas.
```

> **🚀 Reto Secundaria/FP:** Adapta el prompt anterior para un alumno de CFGM con discapacidad auditiva. Cambia las pautas de adaptación para priorizar apoyos visuales y escritos sobre los auditivos. Compara los resultados de Copilot y Gemini: ¿cuál da adaptaciones más realistas y aplicables?

### Ejemplo de prompt: Adaptación para altas capacidades (AACC)

```text
Actúa como un orientador educativo especializado en altas capacidades 
intelectuales.

Contexto: Alumno de 6.º de Primaria con AACC identificadas (perfil 
creativo-divergente). El grupo está trabajando una SA sobre "La Revolución 
Industrial" (Conocimiento del Medio, LOMLOE, CV). El alumno termina las 
actividades ordinarias en la mitad de tiempo y se aburre.

Tarea: Diseña un plan de enriquecimiento para esta SA con:
1. Una actividad de ampliación conectada con el pensamiento crítico 
   ("¿La Revolución Industrial fue un progreso o un retroceso?").
2. Una actividad creativa (diseñar un invento del futuro inspirado en los 
   del siglo XIX).
3. Una actividad de investigación autónoma con producto final (infografía 
   o presentación).

Formato: Tabla con columnas [Actividad | Descripción | Producto final | 
Competencias trabajadas | Criterio de evaluación adaptado].

Restricciones: Las actividades no deben ser "más de lo mismo" (más 
ejercicios). Deben elevar el nivel de pensamiento (análisis, evaluación, 
creación — taxonomía de Bloom).
```

> **💡 Ejemplo Primaria:** Las adaptaciones de AACC son tan importantes como las de refuerzo. La IA es especialmente útil aquí porque genera rápidamente actividades de enriquecimiento que el docente puede no tener tiempo de diseñar desde cero.

---

## 4.4 · Ética, privacidad y uso responsable de la IA en educación

### 4.4.1 · Marco legal aplicable

| Normativa | Qué regula | Implicación docente |
|:----------|:-----------|:--------------------|
| **RGPD** (Reglamento General de Protección de Datos) | Tratamiento de datos personales en la UE | No puedes introducir datos del alumnado en herramientas IA externas sin base legal |
| **LOPDGDD** (Ley Orgánica 3/2018) | Adaptación española del RGPD | El centro es responsable del tratamiento de datos del alumnado |
| **Directiva IA de la UE** (EU AI Act, 2024) | Clasifica sistemas de IA por nivel de riesgo | La educación se considera ámbito de **alto riesgo**: exige transparencia y supervisión humana |
| **Instrucciones GVA sobre IA** | Política corporativa de la Generalitat | Copilot con cuenta `@edu.gva.es` es la herramienta autorizada para datos internos |
| **LOMLOE** (Disposiciones sobre evaluación) | Evaluación continua, formativa y objetiva | **La IA no puede ser el evaluador final**: el docente firma y es responsable |

### 4.4.2 · Los 7 principios de uso ético de la IA en tu aula

1. **Transparencia:** Informa a alumnado y familias de que utilizas IA como herramienta de apoyo. No lo ocultes.
2. **Supervisión humana:** Nunca delegues una decisión evaluativa o disciplinar en la IA. Revisa siempre.
3. **Privacidad por defecto:** Usa Copilot `@edu.gva.es` para datos del centro. Para herramientas externas: solo datos ficticios o públicos.
4. **Equidad:** Verifica que los materiales generados por IA no contienen sesgos (de género, culturales, socioeconómicos).
5. **Verificación:** La IA puede alucinar. Contrasta siempre con fuentes oficiales (DOGV, BOE, libros de texto).
6. **Alfabetización IA del alumnado:** Enseña a tu alumnado qué es la IA, cómo funciona y cómo usarla críticamente.
7. **Proporcionalidad:** Usa la IA cuando aporte valor real. No la uses por usarla.

### 4.4.3 · Qué PUEDO y qué NO PUEDO hacer: guía práctica

| ✅ PUEDO | ❌ NO PUEDO |
|:---------|:-----------|
| Generar un borrador de rúbrica con Copilot | Usar la rúbrica sin revisarla y firmarla como propia |
| Crear material de refuerzo adaptado con datos ficticios en Gemini | Pegar nombres reales de alumnos NEAE en cualquier IA externa |
| Pedir a Copilot que redacte un correo a familias | Dejar que la IA decida la calificación de un alumno/a |
| Subir el currículo oficial (público) a NotebookLM | Subir el expediente académico de un alumno/a a NotebookLM |
| Generar imágenes educativas con Copilot Image Creator | Generar imágenes que representen a alumnado real o identificable |
| Usar IA para preparar una adaptación curricular | Incluir el informe del SPE como prompt en una IA externa |
| Crear un podcast con voces IA y avisar de que es sintético | Usar voces IA para suplantar a personas reales sin consentimiento |

> **⚠️ Seguridad GVA:** Ante la duda sobre si puedes introducir un dato en una herramienta IA externa, aplica la **regla de la fotocopia pública**: *"¿Dejaría este documento en la fotocopiadora del pasillo del centro?"*. Si la respuesta es no, **no lo subas a ninguna IA que no sea Copilot `@edu.gva.es`**.

### 4.4.4 · Reflexión sobre el impacto real de la IA en la educación secundaria

Más allá de la privacidad y los sesgos, como docente de ESO/Bachillerato/FP debes reflexionar críticamente sobre **qué cambia realmente la IA en tu aula**:

| Pregunta clave | Para reflexionar |
|:---------------|:-----------------|
| ¿La IA sustituye el aprendizaje o lo potencia? | Si un alumno/a usa IA para hacer un trabajo, ¿ha aprendido algo? ¿Cómo diseño actividades "a prueba de IA"? |
| ¿Qué competencias ganan importancia? | Pensamiento crítico, formulación de preguntas, verificación de fuentes, creatividad... |
| ¿Agrava la brecha digital? | No todo el alumnado tiene el mismo acceso ni las mismas competencias digitales. |
| ¿Cómo evalúo en un mundo con IA? | Las pruebas memorísticas pierden sentido. La evaluación competencial y auténtica gana peso. |
| ¿Qué papel queda para el docente? | Más mentor, guía y curador que transmisor de información. |

<div style="background-color:#f5f7fa; border-left:4px solid #6c8ebf; padding:12px 14px; margin:18px 0; border-radius:6px;">

💭 <strong>Para pensar</strong><br>
Evaluar borradores, decisiones, fuentes o el trabajo en clase ayuda a que el aprendizaje sea visible.
En ese contexto, la IA se convierte en un apoyo, no en un sustituto.

</div>

### 4.4.5 · Actividad ética: detección de sesgos

La IA puede reproducir y amplificar sesgos presentes en los datos con los que fue entrenada. Es fundamental que como docente sepas detectarlos:

### Ejemplo de prompt: Auditoría de sesgos en un material generado

```text
Actúa como un auditor de equidad educativa y sesgos en materiales 
didácticos.

Tarea: Analiza el siguiente material generado por IA y evalúa si contiene 
sesgos en estas categorías:
1. Sesgo de género (roles estereotipados, lenguaje no inclusivo).
2. Sesgo cultural (eurocentrismo, invisibilización de otras culturas).
3. Sesgo socioeconómico (asume recursos que no todo el alumnado tiene).
4. Sesgo capacitista (asume capacidades que excluyen a alumnado NEAE).
5. Sesgo lingüístico (ignora la diversidad de lenguas del aula).

Formato:
| Categoría de sesgo | ¿Detectado? (Sí/No) | Ejemplo concreto | Propuesta de corrección |

Material a analizar:
[PEGAR AQUÍ EL MATERIAL]
```

> **🚀 Reto Secundaria/FP:** Genera con Copilot una lista de 10 ejemplos de "profesiones del futuro" para una clase de orientación en 4.º de ESO. Después, pasa la lista por el prompt de auditoría de sesgos. ¿Se reproducen estereotipos de género? ¿Se asume un perfil socioeconómico concreto? Corrige los sesgos y documenta el proceso.

---

## 4.5 · Diseña tu política de uso de IA en el aula

Cada centro y cada docente debería tener una **política clara** sobre cómo y cuándo se usa la IA. Aquí tienes un prompt para generarla:

### Ejemplo de prompt: Política de uso de IA para un centro educativo

```text
Actúa como un asesor jurídico-educativo especializado en tecnología y 
protección de datos en centros educativos de la Comunitat Valenciana.

Contexto: Centro público de ESO y Bachillerato, 600 alumnos, 55 docentes. 
El equipo directivo quiere establecer una política de uso de IA generativa 
que sea clara, realista y alineada con el RGPD y las instrucciones de la GVA.

Tarea: Redacta un documento de "Política de uso de IA Generativa" que incluya:
1. Introducción y justificación (por qué el centro necesita esta política).
2. Herramientas autorizadas (Copilot @edu.gva.es como prioritaria; condiciones 
   para usar herramientas externas).
3. Datos que NUNCA deben introducirse en IAs externas (lista explícita).
4. Uso de IA por parte del profesorado (qué sí, qué no).
5. Uso de IA por parte del alumnado (normas para trabajos, exámenes, 
   proyectos).
6. Protocolo de detección de trabajos generados íntegramente por IA.
7. Sanciones y consecuencias.
8. Revisión anual de la política.

Formato: documento formal con artículos numerados, listo para presentar 
al Consejo Escolar.

Restricciones: Tono equilibrado (no prohibicionista ni permisivo en exceso). 
Fomenta el uso responsable, no la prohibición total.
```

> **💡 Ejemplo Primaria:** Para Primaria, elimina el punto 6 (detección de trabajos por IA) y añade en su lugar: *"Normas para que el alumnado use herramientas IA guiados por el docente en el aula de informática"*.

---

## 4.6 · Comparativa final: las 5 herramientas para evaluación y personalización

| Tarea de evaluación/personalización | Copilot (GVA) | Gemini | NotebookLM | Kimi | Grok |
|:------------------------------------|:-------------:|:------:|:----------:|:----:|:----:|
| **Generar rúbricas** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ (si tiene fuentes) | ⭐⭐⭐ | ⭐⭐⭐ |
| **Verificar criterios con el currículo** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| **Adaptaciones curriculares** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Auditoría de sesgos** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Listas de cotejo** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Material de refuerzo/ampliación** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Política de centro sobre IA** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| **Protección datos (entorno GVA)** | ✅ | ❌ | ❌ | ❌ | ❌ |

### Flujo de trabajo recomendado para evaluación

```
1. Diseña la rúbrica o instrumento → COPILOT (rapidez + entorno seguro)
2. Verifica los criterios curriculares → NOTEBOOKLM (precisión + fuentes)
3. Genera adaptaciones NEAE → COPILOT o GEMINI (con datos ficticios)
4. Audita sesgos del material → GEMINI (mejor análisis crítico)
5. Implementa y evalúa → TÚ (la decisión final siempre es humana)
```

---

## 📝 Actividades prácticas de ayuda del Bloque 4

### Actividad 4.1 — Rúbrica LOMLOE completa *(individual)*

1. Elige un **criterio de evaluación real** de tu área y curso (cópialo del decreto).
2. Usa el ejemplo de la sección 4.1 para generar una **rúbrica analítica con 4 niveles**.
3. Verifica los criterios en **NotebookLM** (con el decreto cargado del Bloque 2).
4. Corrige y ajusta la rúbrica.
5. **Entregable:** rúbrica final en formato tabla + informe breve de las correcciones realizadas tras la verificación.

### Actividad 4.2 — Correcciones motivadoras automatizadas *(individual)*

**Objetivo:** Automatizar la generación de retroalimentación constructiva para liberar tiempo docente.

1. Toma **3 trabajos ficticios** (o reales anonimizados) de distinto nivel de tu asignatura.
2. Usa el ejemplo de la sección 4.1b para generar retroalimentación motivadora para cada uno en **Copilot**.
3. Repite en **Gemini** y compara: ¿cuál genera feedback más personalizado? ¿Cuál varía más la redacción?
4. Revisa los comentarios generados y ajústalos con tu conocimiento del alumnado.
5. **Entregable:** tabla con los 3 comentarios (versión Copilot + versión Gemini + versión final ajustada por ti) + reflexión (150 palabras) sobre cuánto tiempo te ha ahorrado y si el tono es adecuado.

### Actividad 4.3 — Adaptación curricular con IA *(individual)*

1. Elige a un **perfil ficticio** de alumno/a NEAE (no uses datos reales):
   - Opción A: dislexia (Primaria)
   - Opción B: incorporación tardía con español A2 (ESO)
   - Opción C: altas capacidades (cualquier etapa)
   - Opción D: discapacidad auditiva (FP)
2. Toma un **material o prueba** que uses realmente en tu aula.
3. Usa los prompts de la sección 4.3 para generar la adaptación con **Copilot**.
4. Repite con **Gemini** y compara.
5. **Entregable:** material adaptado (ambas versiones) + tabla comparativa Copilot vs. Gemini + reflexión (150 palabras) sobre qué herramienta ha generado adaptaciones más aplicables.

### Actividad 4.4 — Auditoría de sesgos *(individual)*

1. Toma cualquier material generado por IA durante el curso (una SA, una rúbrica, un cómic…).
2. Pasa el material por el prompt de auditoría de sesgos (sección 4.4.5).
3. Documenta los sesgos encontrados y las correcciones aplicadas.
4. **Entregable:** tabla de auditoría completada + material corregido.

### Actividad 4.5 — Debate: impacto real de la IA en el aula *(grupal, sesión síncrona)*

**Objetivo:** Promover un uso ético y crítico de la IA reflexionando sobre su impacto real en la educación secundaria.

1. En grupos de 4-5, leed la tabla de reflexión de la sección 4.4.4.
2. Cada grupo elige **2 preguntas** de la tabla y prepara una postura argumentada (10 minutos).
3. Debate abierto entre grupos (15 minutos): ¿la IA es una oportunidad o un riesgo para la educación secundaria? ¿Cómo cambia el rol del docente?
4. Individualmente, redactad un **"Compromiso ético personal"** (5 frases) sobre cómo usaréis la IA en vuestra práctica docente a partir de ahora.
5. **Entregable:** compromiso ético personal subido al foro + resumen de las conclusiones del grupo (200 palabras).

### Actividad 4.6 — Política de IA para mi centro *(grupal, sesión síncrona)*

1. En grupos de 4-5, usad el ejemplo de la sección 4.5 adaptándolo a vuestra etapa educativa.
2. Revisad el borrador generado: ¿es equilibrado? ¿Es realista? ¿Faltan casos?
3. Modificad y completad el documento.
4. Presentad al gran grupo los 3 puntos más importantes de vuestra política.
5. **Entregable:** documento de política (formato Word o PDF) + presentación de 3 diapositivas.

---

### Actividad 5 — Proyecto final «Mi flujo docente con IA» *(individual)*

Esta actividad documenta un proceso real completo con IA, partiendo de una necesidad docente real. No hay formato obligatorio ni exige usar vibe coding. El objetivo es evidenciar el propio proceso de trabajo.

Documenta las siguientes fases con tus propias palabras:

| Fase | Qué documentas |
|:-----|:----------------|
| **Necesidad** | ¿Qué problema o tarea docente real tenías que resolver? |
| **Fuentes/Contexto** | ¿Qué documentos, decretos o información has aportado a la IA? |
| **Elección de herramienta** | ¿Por qué elegiste esa herramienta y no otra? |
| **Proceso** | ¿Cómo ha ido la interacción? ¿Qué has ajustado en el camino? |
| **Producto** | El material o documento generado (en formato que corresponda). |
| **Verificación** | ¿Cómo has comprobado que el resultado es correcto y útil? |
| **DUA/Accesibilidad** | ¿Has considerado la diversidad del alumnado? ¿Qué ajustes has hecho? |
| **Aplicación** | ¿Cómo lo has usado o tienes previsto usarlo en el aula? |
| **Reflexión** | ¿Qué has aprendido? ¿Qué no funcionarías a hacer igual? |

**Entregable:** documento (Word, PDF u otro) que recorra las fases anteriores. Mínimo 400 palabras. Sube a la tarea «Proyecto Final» en Aules.

> **⚠️ Seguridad GVA:** Usa **datos ficticios** para nombres de alumnado, centro, localidad, etc. No incluyas capturas de pantalla donde aparezcan datos personales reales.

---

## 📚 Recursos complementarios

- [EU AI Act — Texto completo y resumen](https://artificialintelligenceact.eu/)
- [RGPD — Guía práctica de la AEPD](https://www.aepd.es/guias)
- [AEPD — Guía sobre protección de datos en centros educativos](https://www.aepd.es/guias/guia-centros-educativos.pdf)
- [UNESCO — Recomendación sobre la ética de la IA (2021)](https://www.unesco.org/es/artificial-intelligence/recommendation-ethics)
- [UNESCO — Guía para el uso de IA generativa en educación (2023)](https://www.unesco.org/es/digital-education/ai-future-learning)
- [Marco DUA — Guías CAST](https://www.cast.org/impact/universal-design-for-learning-udl)
- [Decreto 106/2022 — Currículo de Primaria CV (DOGV)](https://dogv.gva.es/)
- [Decreto 107/2022 — Currículo de ESO y Bachillerato CV (DOGV)](https://dogv.gva.es/)

---

## ✅ Checklist de autoevaluación final

Asegúrate de poder responder **sí** a todas estas preguntas antes de completar el curso:

- [ ] Sé diseñar rúbricas analíticas y holísticas con IA alineadas con la LOMLOE.
- [ ] Puedo generar retroalimentación motivadora y constructiva de forma automática, revisándola antes de entregarla.
- [ ] Puedo generar adaptaciones curriculares rápidas para diferentes perfiles NEAE.
- [ ] Conozco al menos 3 instrumentos de evaluación distintos que puedo crear con IA (rúbrica, lista de cotejo, diana).
- [ ] Sé detectar sesgos en materiales generados por IA usando un prompt de auditoría.
- [ ] He reflexionado críticamente sobre el impacto real de la IA en la educación secundaria y he definido mi compromiso ético personal.
- [ ] Conozco el marco legal (RGPD, EU AI Act, instrucciones GVA) y los 7 principios éticos de uso de IA en el aula.
- [ ] Puedo distinguir qué datos puedo y no puedo introducir en herramientas externas.
- [ ] He completado el proyecto final «Mi flujo docente con IA», documentando un proceso real completo.

---


<p style="text-align:center; color:gray; font-size:0.85em;">
Curso 26IA92IN017 · CEFIRE · Generalitat Valenciana · 2026<br>
Contenido bajo licencia <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
</p>