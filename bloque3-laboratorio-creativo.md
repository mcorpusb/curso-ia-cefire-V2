---
layout: page
title: "Laboratorio creativo · 5 experiencias con IA"
parent: "Bloque 3: Generación Multimodal"
nav_order: 11
---

# Laboratorio creativo · 5 experiencias de IA para llevar al aula

Cinco retos independientes que empiezan con un material sencillo y terminan en un recurso que el profesorado puede **probar, revisar y adaptar**. No hace falta completarlos todos: elige uno según tu etapa y el tiempo disponible.

**Ruta rápida:** [Dibujo → cuento o app](#dibujo) · [Escape room](#escape) · [Cuento con voz](#cuento) · [Podcast](#podcast) · [Quiz con pistas](#quiz)

| Reto | Producto | Tiempo orientativo de taller |
|:--|:--|:--|
| Dibujo → cuento o aplicación | Cuento ilustrado o miniapp | 15–25 min |
| Escape room | Juego de 3 pruebas | 20–30 min |
| Cuento con voz y escenas | Relato ilustrado y narrado | 20–30 min |
| Podcast | Audio de repaso con preguntas | 10–20 min |
| Quiz con pistas | Cuestionario formativo interactivo | 15–20 min |

> **Antes de empezar.** Usa dibujos ficticios, propios o con autorización y sin nombres, rostros ni otros datos que identifiquen al alumnado. No subas trabajos reales de menores a servicios externos sin la autorización y base jurídica correspondientes. En esta formación usa ejemplos simulados. Comprueba condiciones de acceso, créditos y permisos de publicación de cada herramienta. La generación automática puede contener errores; la publicación nunca sustituye la revisión docente.

---

## 1. De un dibujo a un cuento o una aplicación
{: #dibujo }

**Objetivo:** partir de un personaje imaginario y transformarlo en una narración o una experiencia interactiva sin perder sus rasgos principales.

**Herramientas:** [Gemini](https://gemini.google.com/) para redactar e ilustrar una historia si tu cuenta ofrece **Storybook**; [Canva Code](https://www.canva.com/) para programar una miniapp sin escribir código. La disponibilidad de Storybook y los pasos exactos de la interfaz pueden variar según la cuenta.

### Paso a paso: ruta A · Cuento ilustrado

- **Prepara el dibujo.** Usa un dibujo ficticio de un dragón verde con mochila roja, o una ilustración propia sin datos de menores.
- **Entra en Gemini con tu cuenta.** También puedes probar con una **cuenta gratuita**: en la prueba de este taller se accedió desde **Gemini → Gemas → Storybook (beta)**. Abre esa gema antes de adjuntar la imagen. La disponibilidad, los límites de generación y la ubicación del menú pueden variar según la cuenta. Si Storybook no aparece o no permite generar, utiliza un chat de Gemini para preparar el guion y las ilustraciones por separado.
- **Adjunta el dibujo ficticio** si la herramienta admite imagen en esa modalidad.
- **Pega el prompt** y genera una primera versión.
- **Revisa página a página:** continuidad del personaje, ortografía, contenido, duración y lectura accesible. Corrige antes de compartir.
- **Prueba en clase:** detén la lectura antes del desenlace y pregunta qué decisión tomaría el personaje y por qué.
- **Descarga el PDF.** En Storybook, utiliza la opción de descarga en PDF si aparece en tu cuenta. Guarda el documento, ábrelo y comprueba que todas las páginas e ilustraciones se hayan exportado correctamente.

**Ejemplo generado en la formación:** [«El dragón de las emociones» · abrir cuento compartido en Gemini](https://gemini.google.com/share/d/1lg5eNZrUPCBLuq2lIuK30A2Py0L_fpCD?usp=sharing). Se ha creado utilizando la gema **Storybook (beta)** con una cuenta gratuita. La autora confirma que permite descargarlo en PDF. **El enlace compartido puede requerir acceso a Gemini; comprueba los permisos antes de distribuirlo al profesorado.**

**Para incorporarlo como descarga directa al curso:** exporta el PDF, revisa el resultado y súbelo al repositorio, por ejemplo a `assets/pdf/el-dragon-de-las-emociones.pdf`. No se ha subido todavía ese PDF.


**Prompt reutilizable (cuento):**

```text
Actúa como autor y diseñador de cuentos educativos.
Crea un cuento ilustrado en [idioma] para [etapa y curso] a partir
del personaje ficticio que describo o adjunto.
Personaje: [rasgos, colores, ropa y accesorios].
Objetivo de aprendizaje: [objetivo observable].
Tema o situación: [escena cercana al alumnado].
Extensión: [número] páginas, con máximo [número] palabras por página.
Cada página debe incluir: texto narrativo, descripción visual de la escena
y una pregunta breve para conversar.
Mantén consistentes los rasgos del personaje en todas las páginas.
No inventes información del alumnado ni uses personajes reales.
Acaba con un reto que permita demostrar qué han aprendido.
Si no puedes crear las imágenes directamente, entrega instrucciones
visuales listas para generarlas.
```

### Paso a paso: ruta B · Dibujo convertido en miniapp

- Entra en [Canva](https://www.canva.com/), abre **Canva IA → Código** o la opción **Programar/Code** disponible en tu cuenta.
- Describe el personaje de tu dibujo mediante texto; si el editor no admite adjuntar esa imagen al generar código, no presupongas que puede convertirla automáticamente.
- Pide una actividad muy pequeña: **tres pantallas**, botones grandes, respuesta visible y un reto final.
- Prueba todos los botones en **Vista previa**; pide correcciones concretas en el mismo chat.
- Publica únicamente la versión revisada, si tu cuenta lo permite. Prueba la URL en otro dispositivo; no incluyas datos personales.

**Prompt reutilizable (app):**

```text
Crea una miniaplicación web interactiva para [etapa y curso]
sobre [contenido] protagonizada por [personaje ficticio y rasgos].
Objetivo: [qué sabrá hacer el alumnado].
Incluye una pantalla inicial, 3 retos progresivos y pantalla final.
Interacción con botones claros, instrucciones breves y
retroalimentación explicativa tras cada respuesta.
No pidas registro ni almacenes datos del alumnado.
Usa contraste alto, texto legible, teclado y etiquetas accesibles.
Incluye botón Reiniciar y permite repetir un intento.
No des por correcta una respuesta solo porque se haya pulsado;
evalúa cada elección y explica el motivo.
```

**Ejemplos por etapa:** Infantil: el monstruo de los sentimientos elige cómo calmarse. Primaria: un dragón recorre las partes de una planta. Secundaria: el personaje decide cómo ahorrar energía. FP: un robot aprende a seleccionar EPI. EOI: un viajero practica peticiones de ayuda con diálogos A2.

**Comprobación:** muestra tres decisiones del personaje y pide justificar cuál favorece el objetivo de aprendizaje.

---

## 2. Escape room generado con IA
{: #escape }

**Objetivo:** convertir un contenido en tres pruebas encadenadas con retroalimentación, no solo en una pantalla decorativa.

**Herramienta:** [Canva Code](https://www.canva.com/) o un entorno de generación de aplicaciones como [Claude Artifacts](https://claude.ai/), según disponibilidad.

### Paso a paso

- Elige **un objetivo y tres conceptos** que el alumnado deba aplicar.
- Diseña en papel el recorrido: situación inicial → prueba 1 → prueba 2 → prueba 3 → explicación final.
- Abre la herramienta y pega el prompt. Solicita datos y soluciones **ficticios**.
- Prueba primero las respuestas correctas y después tres errores deliberados.
- Comprueba que una respuesta equivocada **no desbloquea** la siguiente puerta.
- Pide mejorar textos, accesibilidad y lógica; comparte la versión validada.

**Prompt reutilizable:**

```text
Crea un escape room web educativo para [etapa, curso y materia].
Título: [título]. Historia inicial: [situación breve].
Objetivo evaluable: [objetivo].
Diseña exactamente 3 pruebas, de dificultad creciente, sobre:
1) [contenido 1], 2) [contenido 2], 3) [contenido 3].
Para cada prueba incluye instrucciones, una respuesta correcta
verificable, dos errores plausibles y una pista útil.
Solo se avanza al resolver la prueba; no muestres las soluciones
antes del intento. Tras un error, explica por qué no funciona
sin revelar de golpe toda la respuesta.
Incluye navegación con teclado, contraste adecuado, botón
Reiniciar y un final con explicación de los tres aprendizajes.
No uses cuentas, seguimiento individual ni servicios externos.
Entrega una aplicación funcional, no una maqueta estática.
```

**Ejemplos por etapa:** Infantil: rescatar tres colores siguiendo patrones (con apoyo adulto). Primaria: descubrir el ciclo del agua. Secundaria: resolver pistas de fuentes históricas. FP: detectar phishing, verificar el dominio y comunicar un incidente. EOI: interpretar horarios, pedir indicaciones y resolver una situación comunicativa.

**Prueba docente:** introduce una respuesta incorrecta en cada sala; anota si la pista ayuda sin regalar la solución.

---

### Demostración realizada · CyberEscape: Operación Anti-Phishing SMR

Ya existe una versión HTML interactiva creada con Gemini que sirve de ejemplo para esta actividad. Incluye tres niveles sobre remitentes, enlaces sospechosos y medidas de seguridad, un temporizador de 20 minutos, retroalimentación tras cada respuesta y una pantalla final.

**Para publicarla:** guarda el archivo revisado como `escape-room-phishing-smr.html` en la raíz del repositorio y realiza commit y push. Cuando esté publicado, el juego estará disponible en [Abrir CyberEscape]({{ '/escape-room-phishing-smr.html' | relative_url }}). **El enlace solo funcionará cuando se haya subido el HTML.**

**Uso en la formación:** juega primero como alumno; después revisa las respuestas incorrectas, explica por qué el candado HTTPS no garantiza la legitimidad de un sitio y comenta que SPF/DKIM/DMARC y MFA reducen riesgos, pero no eliminan todos los ataques.

## 3. Cuento ilustrado con voz, emociones y escenas
{: #cuento }

**Objetivo:** transformar un guion en una narración expresiva acompañada de imágenes y pausas para comprender.

**Herramientas:** [ElevenLabs Text to Speech](https://elevenlabs.io/app/speech-synthesis) y [ElevenLabs Studio](https://elevenlabs.io/app/studio) si tu cuenta lo permite; las imágenes pueden elaborarse con la herramienta visual elegida. Puedes inspirarte en [Sarah y Salsa y Tomás y Popi]({{ '/bloque3-comics-ejemplos.html' | relative_url }}).

### Paso a paso

- Redacta una historia corta de **4 escenas** con un conflicto, un cambio emocional y una solución.
- Crea una imagen por escena; repite la descripción de personajes y objetos para mantener continuidad.
- Escribe el guion dividido por escenas y marca los cambios de emoción con etiquetas cuando el modelo las admita.
- En **Text to Speech**, elige voz e idioma, genera una escena de prueba y escucha pronunciación y pausas.
- En modelos compatibles, prueba indicaciones como `[whispers]`, `[curious]` o `[sighs]`; ajusta si suenan artificiales.
- Exporta el audio; para un montaje final, organiza imágenes y audio en Studio o un editor de vídeo compatible.
- Comprueba sincronización, volumen, subtítulos o transcripción y preguntas de comprensión.

**Prompt reutilizable (guion + dirección):**

```text
Escribe un cuento educativo en [idioma] para [edad o curso].
Objetivo: [aprendizaje]. Personajes ficticios: [rasgos estables].
Organiza 4 escenas: inicio, problema, cambio emocional y solución.
Para cada escena entrega:
- descripción visual completa para ilustrarla;
- narración de 35–60 palabras;
- emoción de cada intervención y sugerencia de pausa;
- pregunta de comprensión o inferencia.
Después entrega el guion de locución listo para copiar en
ElevenLabs, separado por escenas y sin instrucciones técnicas
mezcladas con el texto hablado. Usa etiquetas de interpretación
entre corchetes solo cuando sean compatibles con el modelo.
Termina con una pregunta abierta sobre lo aprendido.
```

**Ejemplos por etapa:** Infantil: Sarah y Salsa superan un susto respirando con calma. Primaria: aventura por el sistema respiratorio. Secundaria: un personaje distingue rumor y evidencia. FP: Tomás y Popi detectan señales de un intento de suplantación. EOI: relato breve con expresiones A2 y pausas para repetir.

**Comprobación:** reproduce primero el audio sin imágenes; pregunta qué emoción identifican y qué pista de la voz les hizo pensar eso.

---

## 4. Podcast educativo a partir de fuentes
{: #podcast }

**Objetivo:** convertir materiales seleccionados en un diálogo de repaso que conduzca a contrastar, no a memorizar pasivamente.

**Herramienta:** [Gemini Notebook](https://notebooklm.google.com/), sección **Studio → Resumen de audio** cuando esté disponible.

### Paso a paso

- Prepara **dos fuentes breves, fiables y autorizadas**; elimina datos personales.
- Crea un cuaderno y añade las fuentes. Especifica título, autor y fecha.
- Verifica que el cuaderno reconozca el contenido preguntando por tres ideas y las referencias correspondientes.
- En **Studio**, selecciona **Resumen de audio** y personaliza idioma, nivel y enfoque si la interfaz ofrece esas opciones.
- Genera el resumen, escúchalo y anota posibles simplificaciones o errores frente a las fuentes.
- Prepara **tres preguntas que obliguen a volver al texto**. No presentes el audio como sustituto de la evidencia.
- Comparte el resultado únicamente si los permisos y derechos de las fuentes lo permiten.

**Instrucción reutilizable para personalización:**

```text
Destina este resumen de audio a [etapa y nivel], materia [materia].
Enfócalo en [objetivo]. Explica de manera dialogada 3 ideas
centrales presentes en las fuentes, distingue hechos de ejemplos
e identifica una confusión habitual. No inventes datos ni citas.
Usa lenguaje claro en [idioma], una duración aproximada de
[duración si la opción está disponible] y concluye con una pregunta
que obligue a consultar las fuentes originales.
```

**Ejemplos por etapa:** Infantil: escuchar en grupo una explicación muy breve, mediada por el docente, sobre animales. Primaria: ciclo del agua basado en un texto escolar. Secundaria: dos enfoques de un acontecimiento histórico con fuentes contrastadas. FP: riesgos de phishing y medidas de verificación. EOI: diálogo sobre hábitos sostenibles con glosario de vocabulario.

**Comprobación:** pide al alumnado localizar en las fuentes una afirmación del audio y señalar dónde aparece o si necesita matices.

---

## 5. Quiz interactivo que enseña con pistas
{: #quiz }

**Objetivo:** dar retroalimentación que explique el error y una segunda oportunidad, en lugar de limitarse a «bien/mal».

**Herramientas:** [Canva Code](https://www.canva.com/) para una actividad interactiva, o las opciones de cuestionario de Gemini Notebook para generar un banco inicial de preguntas a partir de fuentes.

### Paso a paso

- Define un objetivo y **cinco preguntas** alineadas con él.
- Prepara una respuesta correcta y dos distractores razonables para cada pregunta.
- Pide que cada fallo active **primero una pista**, después una explicación y una oportunidad de reintento.
- Genera en Canva Code el cuestionario; si empiezas en Gemini Notebook, revisa y traslada las preguntas a la aplicación.
- Prueba respuestas correctas, incorrectas y repetidas. Comprueba que la explicación no se contradice.
- Añade indicador de progreso y botón Reiniciar, pero evita clasificaciones nominales del alumnado.
- Pide al alumnado explicar por qué una opción incorrecta es tentadora y qué evidencia la descarta.

**Prompt reutilizable:**

```text
Crea un cuestionario formativo interactivo para [etapa/curso]
sobre [tema] con 5 preguntas basadas únicamente en [contenidos
o fuentes facilitadas]. Objetivo: [objetivo].
Cada pregunta tendrá 3 opciones, solo una correcta, y
distractores vinculados a errores frecuentes.
Si se falla: ofrece una pista conceptual SIN revelar la respuesta,
permite reintentar y después explica la solución razonada.
Si se acierta: explica por qué es correcta.
Presenta una pregunta por pantalla, progreso, navegación
accesible, botón Reiniciar y resumen final de los conceptos.
No guardes nombres ni respuestas de estudiantes.
Si falta información en las fuentes, indícalo: no inventes.
```

**Ejemplos por etapa:** Infantil: clasificar objetos por color o forma con imágenes. Primaria: funciones de los órganos. Secundaria: confundir recorrido del aire con intercambio gaseoso. FP: privilegios de solo lectura en una base de datos. EOI: comprender instrucciones de orientación en inglés A2.

**Comprobación:** selecciona una opción incorrecta y evalúa si la pista realmente permite razonar la segunda respuesta.

---

## Demostración adicional · MathLab (Secundaria y Bachillerato)
{: #mathlab }

**MathLab: descubre las funciones y las derivadas** es una aplicación creada con **Gemini Canvas** para experimentar con gráficas, pendientes, rectas tangentes y cociente incremental. Está pensada para **4.º de ESO y 1.º de Bachillerato**. La captura facilitada muestra una pantalla inicial con accesos a los laboratorios y a la guía didáctica; el funcionamiento de todos los controles matemáticos aún requiere una comprobación práctica.

[**Abrir MathLab en Google Sites**](https://sites.google.com/iessanvicente.com/mathlab-descubre-las-funciones) · [Ver el laboratorio de aplicaciones]({{ '/bloque3-artifacts.html' | relative_url }})

> **Acceso:** el enlace se ha construido con la dirección de Google Sites y el nombre de página facilitados por la autora. Si Google Sites solicita acceso o la página no aparece, comprueba la configuración de publicación y los permisos del sitio antes de compartirlo con el profesorado.

### Cómo reproducir la experiencia

- Abre [Gemini](https://gemini.google.com/) y selecciona **Canvas**.
- Solicita una app web titulada **MathLab** con cinco apartados: exploración de funciones, pendiente, derivada y tangente, cociente incremental y retos con pistas.
- Pide gráficas dinámicas, deslizadores, comprobación de respuestas y una explicación de cada cambio; especifica que se debe generar una aplicación funcional, no una imagen.
- Comprueba al menos tres casos: para `f(x)=x²`, la pendiente en `x=3` debe ser `6`; en `x=0` la tangente es horizontal; el cociente incremental no se evalúa directamente con `h=0`.
- Si los controles funcionan, utiliza **Exportar** para continuar en Google Sites, revisa las condiciones de acceso y publica el sitio. Comparte la URL publicada, nunca la de edición.

**Prompt reutilizable para generar una versión propia:**

```text
Actúa como docente de Matemáticas y desarrollador de aplicaciones educativas.
Crea en Canvas una aplicación web interactiva sobre [tema matemático]
para [curso] con estos laboratorios: [lista de conceptos].
Incluye gráficas actualizadas en tiempo real, parámetros que pueda
modificar el alumnado, explicaciones comprensibles y 5 retos con
pistas tras cada error y solución razonada. Todo debe ser funcional,
accesible, sin recopilar datos y matemáticamente correcto.
Para funciones y derivadas, representa la gráfica, la tangente, su
pendiente y el límite del cociente incremental sin dividir por cero.
Añade botones de reinicio y una guía didáctica breve.
```

**Adaptaciones:** en **4.º de ESO**, prioriza tipos de funciones, transformaciones y pendiente; en **1.º de Bachillerato**, incorpora rectas secantes, tangentes y derivada; en **FP**, utiliza gráficas de costes, producción o velocidad con interpretación contextualizada.

---

## Plantilla de entrega · Llévatelo a tu aula

Para cualquiera de las cinco actividades presenta:

- **Contexto:** etapa, curso, materia y objetivo observable.
- **Material de partida:** dibujo ficticio, texto, contenidos o fuente autorizada.
- **Proceso:** prompt inicial y al menos **una mejora** tras probar el recurso.
- **Resultado:** enlace o captura que pueda abrirse y comprobarse; audio o vídeo con transcripción cuando proceda.
- **Evidencia de aprendizaje:** una pregunta o tarea que demuestre comprensión.
- **Revisión docente:** exactitud, adecuación, accesibilidad, privacidad y funcionamiento.

### Lista de comprobación

- [ ] El contenido es correcto y está adaptado a mi grupo.
- [ ] Los controles, audios, vídeos y enlaces funcionan.
- [ ] Los errores generan una explicación útil, no solo una puntuación.
- [ ] He incluido alternativa textual para audio e imágenes significativas.
- [ ] No he subido datos ni imágenes identificables del alumnado.
- [ ] Puedo explicar cómo evaluaré el aprendizaje, no solo el producto generado.

### Recursos y guías

- [Ayuda oficial de Canva Code](https://www.canva.com/es_es/help/canva-code/)
- [Guía de Studio de ElevenLabs](https://elevenlabs.io/docs/es/help-center/product/studio/studio/what-is-studio)
- [Guía de texto a voz de ElevenLabs](https://elevenlabs.io/docs/es/eleven-creative/playground/text-to-speech)
- [Ayuda de resumen de audio de Gemini Notebook](https://support.google.com/gemininotebook/answer/16212820?hl=es-ES)
- [Laboratorio de cómics]({{ '/bloque3-comics-ejemplos.html' | relative_url }}) · [Taller de audio]({{ '/bloque3-audio.html' | relative_url }}) · [Laboratorio de Artifacts]({{ '/bloque3-artifacts.html' | relative_url }})

[← Volver a las actividades del Bloque 3]({{ '/bloque3-actividades.html' | relative_url }})
