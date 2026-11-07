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

## 🧭 En esta página
{: .no_toc .text-delta }

<nav class="indice-bloque" aria-label="Índice del bloque" markdown="1">

- [🎯 Objetivos del bloque](#objetivos-del-bloque)
- [📖 4.1 · Rúbricas LOMLOE con IA: del criterio de evaluación al indicador de logro](#41--rúbricas-lomloe-con-ia-del-criterio-de-evaluación-al-indicador-de-logro)
- [📖 4.1b · Correcciones motivadoras automatizadas con IA](#41b--correcciones-motivadoras-automatizadas-con-ia)
- [📖 4.2 · Más instrumentos de evaluación con IA](#42--más-instrumentos-de-evaluación-con-ia)
- [📖 4.3 · Adaptaciones curriculares con IA y DUA](#43--adaptaciones-curriculares-con-ia-y-dua)
- [📖 4.4 · Ética, privacidad y uso responsable de la IA en educación](#44--ética-privacidad-y-uso-responsable-de-la-ia-en-educación)
- [📖 4.5 · Diseña tu política de uso de IA en el aula](#45--diseña-tu-política-de-uso-de-ia-en-el-aula)
- [📖 4.6 · Comparativa final: herramientas y ecosistemas para evaluación](#46--comparativa-final-las-5-herramientas-para-evaluación-y-personalización)
- [📝 Laboratorio práctico · Actividades del Bloque 4](#actividades-practicas-bloque-4)
- [📚 Recursos complementarios](#-recursos-complementarios)
- [✅ Proyecto final](#proyecto-final)

</nav>

---

## Objetivos del bloque
{: id="objetivos-del-bloque" }

Al finalizar este bloque serás capaz de:

- **Automatizar la creación de rúbricas de evaluación alineadas con la LOMLOE** (criterios de evaluación, competencias específicas e indicadores de logro) utilizando IA generativa, liberando tiempo para la docencia esencial.
- Generar **correcciones y retroalimentación motivadora** de forma automática, con comentarios constructivos que orienten al alumnado hacia la mejora.
- Generar **adaptaciones curriculares** y materiales personalizados para alumnado NEAE de forma ágil y fundamentada en el DUA.
- Crear **instrumentos de evaluación variados** (listas de cotejo, dianas de evaluación, portfolios digitales) con asistencia de IA.
- **Promover un uso ético y crítico de la IA**, priorizando la privacidad del alumnado y reflexionando sobre su impacto real en la educación secundaria.
- Diseñar una **política de uso de IA en el aula** adaptada a tu centro y etapa educativa.

> **⚠️ Seguridad GVA:** Este bloque aborda directamente la ética y la privacidad. Recuerda: **ninguna herramienta de IA debe tomar decisiones evaluativas finales sobre el alumnado**. La IA es un asistente; la responsabilidad profesional y legal recae siempre en el docente.

---

## 4.1 · Rúbricas LOMLOE con IA: del criterio de evaluación al indicador de logro
{: id="41--rúbricas-lomloe-con-ia-del-criterio-de-evaluación-al-indicador-de-logro" }

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

> **💡 Ejemplo Primaria:** Después de generar la rúbrica, **verifica los criterios de evaluación en Gemini Notebook** (Bloque 2) para asegurarte de que coinciden con los del decreto. Copilot puede inventar criterios que suenen convincentes pero no existan.

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
{: id="41b--correcciones-motivadoras-automatizadas-con-ia" }

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

> **⚠️ Seguridad GVA:** En el prompt anterior se usan **datos ficticios** (Alumno/a A, B, C...). **Nunca introduzcas nombres reales** en herramientas externas. Incluso en un entorno institucional, comprueba qué datos están autorizados para ese servicio y anonimiza siempre que sea posible.

> **💡 Consejo:** Revisa siempre el feedback generado antes de entregarlo. La IA produce borradores útiles, pero tú conoces a cada alumno/a y puedes añadir el toque personal que marca la diferencia.

<div style="background-color:#f5f7fa; border-left:4px solid #6c8ebf; padding:12px 14px; margin:18px 0; border-radius:6px;">

💭 <strong>Para pensar</strong><br>
Si solo evaluamos el resultado final de una tarea, la IA puede hacerlo por el alumnado.
Cambiar el foco hacia el proceso permite que la herramienta siga siendo útil sin sustituir el aprendizaje.

</div>

---

## 4.2 · Más instrumentos de evaluación con IA
{: id="42--más-instrumentos-de-evaluación-con-ia" }

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
{: id="43--adaptaciones-curriculares-con-ia-y-dua" }

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
{: id="44--ética-privacidad-y-uso-responsable-de-la-ia-en-educación" }

### 4.4.1 · Marco legal aplicable

| Normativa | Qué regula | Implicación docente |
|:----------|:-----------|:--------------------|
| **RGPD** (Reglamento General de Protección de Datos) | Tratamiento de datos personales en la UE | No puedes introducir datos del alumnado en herramientas IA externas sin base legal |
| **LOPDGDD** (Ley Orgánica 3/2018) | Adaptación española del RGPD | La Administración educativa o entidad titular que corresponda actúa como responsable del tratamiento según el servicio y el contexto |
| **Reglamento (UE) 2024/1689 de Inteligencia Artificial (AI Act)** | Clasifica sistemas de IA por nivel de riesgo | Determinados usos educativos pueden ser de alto riesgo; no todo uso docente lo es |
| **Instrucciones GVA sobre IA** | Política corporativa de la Generalitat | Sigue siempre las instrucciones institucionales vigentes sobre herramientas y datos autorizados |
| **Normativa educativa y evaluación** | Regula la evaluación y las decisiones educativas | La IA puede utilizarse como apoyo para diseñar instrumentos, analizar información o proponer retroalimentación, pero las decisiones evaluativas requieren supervisión y responsabilidad profesional |

En educación, un uso ordinario como generar un borrador de rúbrica, una actividad o ejemplos no convierte automáticamente el sistema en un uso de alto riesgo. Sí pueden ser especialmente sensibles los usos que influyen en admisiones, evaluación automatizada relevante, asignación de nivel educativo, decisiones que afecten sustancialmente a la trayectoria o determinados sistemas de supervisión de exámenes.

### Semáforo legal rápido

| 🟢 Verde | 🟠 Revisa | 🔴 No sigas |
|:---------|:----------|:------------|
| Datos ficticios o públicos. Material propio. Fuentes oficiales. Licencia adecuada. IA como apoyo. Resultado revisado por el docente. | Material de terceros. Imágenes o voz de personas. Información potencialmente identificable. Herramientas externas. Decisiones que afectan al alumnado. Contenido sintético que puede parecer real. | Informes psicopedagógicos o expedientes en servicios no autorizados. Datos especialmente sensibles sin garantías adecuadas. Delegar una calificación o decisión disciplinaria en la IA. Usar la IA como sustituto del juicio profesional. Reconocimiento emocional del alumnado cuando encaje en la prohibición del AI Act. |

### 4.4.2 · Los 7 principios de uso ético de la IA en tu aula

- **Transparencia:** Informa a alumnado y familias de que utilizas IA como herramienta de apoyo. No lo ocultes.
- **Supervisión humana:** Nunca delegues una decisión evaluativa o disciplinar en la IA. Revisa siempre.
- **Privacidad por defecto:** Usa solo herramientas institucionales habilitadas y, aun en ellas, revisa qué datos están autorizados antes de compartirlos. Para herramientas externas: solo datos ficticios o públicos.
- **Equidad:** Verifica que los materiales generados por IA no contienen sesgos (de género, culturales, socioeconómicos).
- **Verificación:** La IA puede alucinar. Contrasta siempre con fuentes oficiales (DOGV, BOE, libros de texto).
- **Alfabetización IA del alumnado:** Enseña a tu alumnado qué es la IA, cómo funciona y cómo usarla críticamente.
- **Proporcionalidad:** Usa la IA cuando aporte valor real. No la uses por usarla.

> **Ejemplo de práctica no permitida en este curso:** no utilices IA para inferir emociones del alumnado en el centro educativo mediante reconocimiento facial, voz u otros datos biométricos, salvo las excepciones legalmente previstas relacionadas con motivos médicos o de seguridad.

### 4.4.3 · Qué PUEDO y qué NO PUEDO hacer: guía práctica

| ✅ PUEDO | ❌ NO PUEDO |
|:---------|:-----------|
| Generar un borrador de rúbrica con Copilot | Usar la rúbrica sin revisarla y firmarla como propia |
| Crear material de refuerzo adaptado con datos ficticios en Gemini | Pegar nombres reales de alumnos NEAE en cualquier IA externa |
| Pedir a Copilot que redacte un correo a familias | Dejar que la IA decida la calificación de un alumno/a |
| Subir el currículo oficial (público) a Gemini Notebook | Subir el expediente académico de un alumno/a a Gemini Notebook |
| Generar imágenes educativas con Copilot Image Creator | Generar imágenes que representen a alumnado real o identificable |
| Usar IA para preparar una adaptación curricular | Incluir el informe del SPE como prompt en una IA externa |
| Crear un podcast con voces IA y avisar de que es sintético | Usar voces IA para suplantar a personas reales sin consentimiento |

> **⚠️ Seguridad GVA:** Ante la duda sobre si puedes introducir un dato en una herramienta IA externa, aplica la **regla de la fotocopia pública**: *"¿Dejaría este documento en la fotocopiadora del pasillo del centro?"*. Si un documento contiene información personal, confidencial o sensible, no lo subas a ninguna herramienta de IA salvo que exista una autorización institucional clara para ese tratamiento y para esa categoría de datos. En las prácticas del curso utilizaremos datos ficticios, públicos o suficientemente anonimizados.

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
{: id="45--diseña-tu-política-de-uso-de-ia-en-el-aula" }

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

## 4.6 · Comparativa final: herramientas y ecosistemas para evaluación
{: id="46--comparativa-final-las-5-herramientas-para-evaluación-y-personalización" }

**Gemini Notebook (anteriormente NotebookLM)** conserva su experiencia especializada en fuentes dentro del ecosistema Gemini. Los cuadernos pueden sincronizarse con Gemini; elige la experiencia según la tarea y verifica sus resultados.

| Herramienta / ecosistema | Uso en evaluación y personalización | Precaución |
|---|---|---|
| Copilot Chat institucional | Borradores de rúbricas, listas de cotejo, adaptaciones y documentos de centro. | Uso de datos según autorización institucional. |
| Gemini + Gemini Notebook | Gemini: creación, adaptaciones y análisis crítico; Gemini Notebook: contrastar criterios y preparar refuerzo a partir de fuentes. | Selecciona fuentes pertinentes, revisa citas y no presupongas autorización para datos del alumnado. |
| Kimi | Síntesis de documentos y propuestas de materiales de refuerzo. | Contrasta las propuestas con el currículo. |
| Grok | Explorar ideas y revisar borradores, según disponibilidad. | Verifica fuentes y evita datos personales. |

### Flujo de trabajo recomendado para evaluación

```
1. Diseña la rúbrica o instrumento → COPILOT (rapidez + entorno seguro)
2. Verifica los criterios curriculares → Gemini Notebook (precisión + fuentes)
3. Genera adaptaciones NEAE → COPILOT o GEMINI (con datos ficticios)
4. Audita sesgos del material → GEMINI (mejor análisis crítico)
5. Implementa y evalúa → TÚ (la decisión final siempre es humana)
```

---

## 📝 Laboratorio práctico · Actividades del Bloque 4
{: id="actividades-practicas-bloque-4" }

> **Elige tu itinerario.** Estas seis propuestas son **alternativas de práctica**, no seis entregas obligatorias. Selecciona una o dos que resulten útiles para tu etapa, especialidad y alumnado. Puedes reutilizar recursos de los bloques anteriores. Siempre revisa los productos de IA y trabaja con datos ficticios o públicos.

Consulta la [guía ampliada de evaluación e integración en Aules](bloque4-evaluacion-con-ia.html), la [guía de asistentes](bloque4-agentes-ia.html) y la [alfabetización en IA](bloque4-alfabetizacion-alumnado.html).

### Actividad 4.1 · Diseña instrumentos de evaluación con IA

**Meta:** escoger **al menos dos** instrumentos adecuados para una actividad real: rúbrica, lista de cotejo, autoevaluación o cuestionario. Parte de criterios curriculares oficiales que tú aportas; la IA no debe inventarlos.

**Pasos:** (1) indica etapa, materia, actividad y criterio oficial; (2) solicita dos instrumentos complementarios; (3) exige descriptores observables y lenguaje adecuado; (4) verifica el resultado contra la fuente; (5) prueba y ajusta su utilidad.

**Prompt para copiar:**

```text
Actúa como especialista en evaluación formativa. Etapa y curso: [..].
Materia/módulo: [..]. Actividad: [..]. Objetivo: [..].
Criterio oficial que aporto literalmente: [PEGAR TEXTO Y FUENTE].
Diseña dos instrumentos diferentes, a elegir entre rúbrica analítica,
lista de cotejo observable, autoevaluación y cuestionario.
Explica cuándo usar cada uno. No inventes normativa ni criterios.
Evita indicadores ambiguos; incluye instrucciones para el alumnado,
criterios de éxito y respuesta o pauta de revisión docente.
Adapta el lenguaje a la edad. Advierte de cualquier laguna.
```

| Etapa | Ejemplo apropiado |
|---|---|
| Infantil | Lista de observación del juego cooperativo + autoevaluación de caritas, guiada por el adulto |
| Primaria | Rúbrica sencilla de exposición sobre el sistema respiratorio + cuestionario visual |
| ESO | Rúbrica de investigación de fuentes + autoevaluación de su proceso |
| Bachillerato | Rúbrica de argumentación con evidencias + cuestionario de interpretación |
| FP | Checklist de práctica de montaje seguro + rúbrica de documentación técnica |
| EOI | Rúbrica de interacción oral + autoevaluación de estrategias comunicativas |

**Entrega:** actividad contextualizada, los dos instrumentos revisados y dos o tres frases justificando por qué los elegiste.

### Actividad 4.2 · Diseña una evaluación interactiva y compártela en Aules

**Meta:** crear una miniactividad que enseñe al corregir, con **pistas, oportunidades de reintento y explicación de cada error**. Puede ser un juego, cuestionario, simulador o página HTML/JS. No necesita programación manual: puedes pedir el prototipo a un asistente y probarlo.

**Pasos:** define objetivo → genera preguntas y feedback → verifica respuestas → prueba errores y aciertos → publica o exporta → comparte en Aules. **Tres vías:** enlazar un recurso URL; incrustar mediante iframe si está permitido; o subir HTML/paquete de recursos y verificar su ejecución. El procedimiento detallado, con código, está en la [guía de evaluación y Aules](bloque4-evaluacion-con-ia.html).

**Prompt para copiar:**

```text
Crea una pequeña aplicación educativa accesible y responsive para
[ETAPA], [MATERIA] y [CONTENIDO]. Incluye cinco retos graduales
con retroalimentación explicativa tras cada intento, una pista
opcional, botón de reinicio y texto accesible por teclado.
Usa HTML/CSS/JavaScript local sin librerías externas ni cuentas.
No recojas datos personales ni transmitas respuestas a servidores.
Entrega un único index.html funcional y explica cómo probarlo.
```

| Etapa | Prototipo |
|---|---|
| Infantil | Clasificar imágenes con acompañamiento del docente y feedback auditivo opcional |
| Primaria | Repaso interactivo del sistema circulatorio con pistas |
| ESO | Detectar errores en fuentes históricas y recibir explicaciones |
| Bachillerato | Cuestionario razonado sobre falacias argumentativas |
| FP | Simulador de decisiones de seguridad informática con consecuencias |
| EOI | Comprensión lectora contextualizada con aclaraciones lingüísticas |

**Entrega:** enlace o archivo funcional + una comprobación de cómo accedería el alumnado desde Aules. **Importante:** una app HTML externa no envía notas al libro de calificaciones de Aules automáticamente.

### Actividad 4.3 · Personaliza un material siguiendo el DUA

**Meta:** identificar **barreras del diseño**, no etiquetar ni reducir expectativas sobre las personas. Aplica el marco [CAST DUA 3.0](https://udlguidelines.cast.org/) para ofrecer alternativas de:

1. **Implicación:** opciones, relevancia y autorregulación; por ejemplo, elegir el contexto de un problema sin cambiar su propósito.
2. **Representación:** vías visuales, textuales y auditivas; por ejemplo, glosario, esquema, subtítulos y explicación paso a paso.
3. **Acción y expresión:** formas de practicar y demostrar comprensión; por ejemplo, explicación oral, esquema comentado o práctica supervisada cuando evalúan la misma meta.

**Proceso:** (1) elige un material; (2) describe barreras concretas: vocabulario denso, instrucciones largas, una única modalidad de respuesta; (3) conserva los objetivos y criterios que deben evaluarse; (4) solicita dos o tres alternativas; (5) comprueba su accesibilidad; (6) compara antes/después y justifica. **Modificar criterios curriculares o adoptar medidas individuales específicas no es una decisión automática de la IA.**

**Prompt para copiar:**

```text
Rediseña este material para [ETAPA/MATERIA/EDAD] según CAST DUA 3.0.
Meta de aprendizaje que NO debe cambiar: [..].
Material original: [PEGAR MATERIAL SIN DATOS PERSONALES].
Barreras observadas en el recurso: [..].
Propón mejoras diferenciadas en implicación, representación
y acción/expresión. Ofrece elecciones útiles y apoyos graduados
sin asumir diagnósticos ni bajar automáticamente la exigencia.
Entrega versión adaptada, tabla «barrera → cambio → principio DUA»
y lista de comprobación de accesibilidad.
```

| Etapa | Barrera y solución de ejemplo |
|---|---|
| Infantil | Consigna oral larga → pictogramas y secuencia de tres pasos |
| Primaria | Ficha de ciencias solo escrita → diagrama, glosario y respuesta alternativa |
| ESO | Texto histórico complejo → estructura visual y vocabulario previo |
| Bachillerato | Ensayo sin andamiaje → hitos, criterios claros y opciones para planificar |
| FP | Práctica técnica con instrucciones extensas → pasos visuales, checklist y demostración |
| EOI | Comprensión solo auditiva → apoyos de vocabulario y opciones accesibles según objetivo lingüístico |

**Entrega:** original + versión rediseñada + tabla breve de barreras y cambios. Emplea únicamente ejemplos y perfiles ficticios.

### Actividad 4.4 · Detectives de errores: el alumnado corrige a la IA

**Demostración funcional:** [Abrir «Detectives de IA · Encuentra los errores»]({{ '/detectives-ia/' | relative_url }}) (Biología y Geología, 3.º ESO). Puedes abrirla en pantalla completa, descargar el `index.html` y compartirla por URL en Aules cuando se publique el sitio. El [solucionario docente](bloque4-evaluacion-con-ia.html#solucionario-docente-detectives-de-ia) está separado de la interfaz del alumnado.



**Meta:** convertir una respuesta artificial deliberadamente imperfecta en objeto de análisis crítico. **El alumno debe encontrar, comprobar y explicar**, no pedir a otra IA que lo haga por él.

**Pasos:** el docente prepara de dos a cuatro errores verificables; da al alumnado una respuesta y fuentes fiables; este subraya afirmaciones, marca errores, aporta evidencias, redacta versión corregida y explica sus decisiones. **Conserva una clave de respuestas para el docente.**

**Prompt para copiar:**

```text
Diseña «El alumnado corrige a la IA» para [ETAPA/MATERIA/TEMA].
Crea una respuesta breve que incluya exactamente tres errores
verificables sobre [CONTENIDO], sin contenido peligroso.
Entrega por separado: texto para el alumnado sin pistas,
solucionario docente con localización del error, explicación correcta,
fuente primaria sugerida y rúbrica breve para valorar la justificación.
Adapta longitud y complejidad. No inventes referencias bibliográficas.
```

| Etapa | Reto |
|---|---|
| Infantil | Identificar una imagen que muestra un animal en el hábitat equivocado; guía adulta |
| Primaria | Corregir tres ideas falsas sobre los planetas |
| ESO | Detectar errores en una explicación sobre respiración |
| Bachillerato | Revisar causas y evidencias de una afirmación histórica |
| FP | Auditar una guía técnica con pasos incorrectos en un entorno simulado |
| EOI | Corregir registro, gramática y adecuación de un correo ficticio |

**Entrega:** texto con errores, solucionario verificado y modo de uso con el alumnado.

### Actividad 4.5 · Diseña una tarea en la que la IA no sustituya el aprendizaje

**Meta:** que el alumnado pueda usar IA como apoyo, pero deba mostrar observación propia, razonamiento, decisiones y evidencias del proceso.

| Etapa | Actividad convencional | Rediseño con evidencia real |
|---|---|---|
| Infantil | Pedir un dibujo de una planta | Observar una planta real, dibujar sus cambios y explicarlos al adulto |
| Primaria | Texto sobre reciclaje | Auditoría de residuos del aula con recuento real y propuestas justificadas |
| ESO | Resumen de un experimento | Registro de mediciones y explicación de resultados inesperados |
| Bachillerato | Ensayo de opinión | Borradores comentados, fuentes contrastadas y defensa oral breve |
| FP | Informe de montaje | Fotos de un montaje simulado sin personas, pruebas y decisiones técnicas documentadas |
| EOI | Redacción de un diálogo | Interacción oral improvisada con réplica y reflexión sobre estrategias |

**Prompt para copiar:**

```text
Rediseña esta actividad para que el proceso de aprendizaje sea
observable aunque se permita IA como apoyo:
[ACTIVIDAD / ETAPA / OBJETIVOS].
Entrega: actividad original; qué podría delegarse indebidamente
en la IA; nueva consigna; evidencias que debe producir el alumnado;
momentos de observación o defensa; criterios de evaluación;
uso de IA permitido y no permitido. Evita asegurar que es
«a prueba de IA».
```

**Entrega:** antes/después + evidencias verificables que solicitarías.

### Actividad 4.6 · Crea tu propio asistente docente

**Meta:** diseñar un flujo repetible para una necesidad concreta, incluso con una cuenta gratuita. Puede ser un **prompt reutilizable**, un conjunto de instrucciones o, si la cuenta lo permite, un asistente configurable (GPT, Gem u opción equivalente). No confundas un prompt largo con un agente autónomo.

**Prompt base para copiar:**

```text
Eres mi asistente de [TAREA DOCENTE]. Trabajas para [ETAPA/MATERIA].
Primero solicita los datos estrictamente necesarios.
Objetivo: [..]. Fuente curricular aportada: [..].
Flujo: 1) analiza la necesidad; 2) crea un primer borrador;
3) verifica coherencia y accesibilidad; 4) muestra mejoras concretas.
Entrega en [FORMATO]. Nunca inventes criterios normativos,
no proceses datos personales, separa hechos de sugerencias,
indica incertidumbre y solicita revisión docente antes de utilizarlo.
Prueba estas instrucciones con el caso ficticio: [..].
```

**Ejemplos:** Infantil, generador de consignas con apoyos visuales; Primaria, rúbricas claras; ESO, cuestionarios razonados; Bachillerato, revisión de argumentos; FP, checklist de prácticas; EOI, asistente de simulación comunicativa.

**Entrega:** nombre, instrucciones, prueba con un ejemplo y una mejora realizada.

---

## ✅ Proyecto final · Mi aplicación real de la IA en el aula
{: id="proyecto-final" }

**Reutiliza un producto de cualquiera de los cuatro bloques; no hace falta empezar otro trabajo.** Entrega tu recurso en un formato adecuado (documento, enlace, presentación, app, audio, vídeo, cómic, infografía, asistente...) y una explicación **breve, sin mínimo de palabras**, que responda a cuatro preguntas:

1. **Contexto:** ¿qué necesidad docente querías resolver?
2. **Proceso:** ¿qué herramienta utilizaste y qué cambiaste después de revisarla?
3. **Producto:** ¿dónde está el recurso final?
4. **Reflexión y aplicación:** ¿cómo lo usarías en el aula y qué límites comprobaste?

**Entrega en Aules:** adjunta el archivo o enlace junto con la explicación. No incluyas datos personales, trabajos identificables ni capturas sensibles.

## ✅ Autoevaluación de cierre

- [ ] Sé elegir un instrumento de evaluación y revisar su alineación curricular.
- [ ] Sé ofrecer retroalimentación útil y comprobar un recurso interactivo antes de compartirlo en Aules.
- [ ] Sé identificar barreras de aprendizaje y proponer opciones DUA sin alterar automáticamente los objetivos.
- [ ] Puedo diseñar una tarea en la que el alumnado verifique y corrija errores de IA.
- [ ] Sé usar un asistente con instrucciones revisables y límites de privacidad.
- [ ] Puedo mostrar un recurso real y explicar qué he aprendido al elaborarlo.

## 📚 Recursos complementarios
{: id="-recursos-complementarios" }

- [EU AI Act — Texto completo y resumen](https://artificialintelligenceact.eu/)
- [RGPD — Guía práctica de la AEPD](https://www.aepd.es/guias)
- [AEPD — Guía sobre protección de datos en centros educativos](https://www.aepd.es/guias/guia-centros-educativos.pdf)
- [UNESCO — Recomendación sobre la ética de la IA (2021)](https://www.unesco.org/es/artificial-intelligence/recommendation-ethics)
- [UNESCO — Guía para el uso de IA generativa en educación (2023)](https://www.unesco.org/es/digital-education/ai-future-learning)
- [Marco DUA — Guías CAST](https://www.cast.org/impact/universal-design-for-learning-udl)
- [Decreto 106/2022 — Currículo de Primaria CV (DOGV)](https://dogv.gva.es/)
- [Decreto 107/2022 — Currículo de ESO y Bachillerato CV (DOGV)](https://dogv.gva.es/)

---

<p style="text-align:center; color:gray; font-size:0.85em;">
Curso 26IA92IN041 · 2.ª edición de 2026 · CEFIRE de Inteligencia Artificial y Pensamiento Computacional<br>
Contenido bajo licencia <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
</p>
