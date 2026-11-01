---
layout: page
title: "Laboratorio · Cómics educativos con IA"
parent: "Bloque 3: Generación Multimodal"
nav_order: 7
---

# Laboratorio · Del guion al cómic con IA
{: .fs-8 }

Dos ejemplos reales de trabajo con **ChatGPT y generación de imágenes**: un cuento de emociones para Infantil y una aventura sobre el movimiento y los músculos. El objetivo no es solo obtener un dibujo: aprenderemos a **preparar el guion, mantener la apariencia de los personajes, cambiar el estilo y revisar el producto**.

> **Nota:** Los protagonistas de estas actividades se plantean como personajes ilustrados ficticios. No utilices fotos identificables del alumnado ni datos personales en servicios externos.

## Caso 1 · Sarah, Salsa y las emociones (Infantil, 3 años)

**Objetivo didáctico:** reconocer alegría, sorpresa, miedo, tristeza, enfado y calma; ensayar una respiración sencilla (oler una flor y soplar una vela imaginaria).

**Personajes constantes:**
- **Sarah:** niña ilustrada de seis años, cabello rubio ondulado, ganchos rojos, camiseta amarilla, tutú rosa y deportivas de colores.
- **Salsa:** perrita Yorkshire regordeta y dormilona, con pequeño moño y lazo rojo.

### Cuaderno de NotebookLM de referencia

El cuento de Sarah y Salsa se trabajó también en un cuaderno de NotebookLM que puedes consultar como ejemplo para diseñar una historia educativa a partir de fuentes propias:

**[Abrir el cuaderno «Sarah, Salsa y las emociones» en NotebookLM](https://notebook.google.com/notebook/d032e7ea-08f2-4791-8096-fb5005c57ca7)**

> **Acceso:** para abrir el cuaderno necesitas una cuenta Google y permisos de lectura concedidos por su propietaria. Si aparece «Solicitar acceso», pide permiso; no se ha comprobado que el enlace sea público.

**Estructura del cómic:** portada y siete páginas: (1) juego y alegría; (2) estallido inesperado de un globo y miedo; (3) torre de bloques caída y tristeza; (4) enfado; (5) respiración flor-vela; (6) calma y abrazo; (7) reconstrucción de la torre y pregunta final: «Y tú, ¿cómo te sientes hoy?».

### Prompt reutilizable: cuento emocional

```text
Crea un cómic educativo para Educación Infantil (3 años), titulado
«¡Sarah, Salsa y las emociones!». Dibujo cartoon de formas redondeadas,
expresiones muy visibles, colores vivos, fondo de juego luminoso.

Mantén los mismos personajes en todas las viñetas:
Sarah, niña ficticia rubia de melena ondulada con ganchos rojos,
camiseta amarilla, tutú rosa y zapatillas de colores;
Salsa, Yorkshire regordeta con moño y lazo rojo.

Portada y 7 páginas, con 2 viñetas por página salvo la página 5,
que contiene 3. Secuencia: alegría al construir una torre;
sorpresa al explotar un globo; Salsa siente miedo y se esconde;
la torre cae y Sarah se pone triste; Sarah se enfada;
se detiene y practica «huelo una flor, soplo una vela»;
recupera la calma, abraza a Salsa y vuelve a jugar.
Cierra con «Y tú, ¿cómo te sientes hoy?».

Mantén lenguaje muy breve, legible y adaptado a 3 años.
Antes de ilustrar, presenta un guion por página y viñeta.
Después genera la portada y una página cada vez, sin cambiar
ropa, peinados, colores ni diseño de Sarah y Salsa.
```

### Resultado visual generado

![Cómic de Sarah y Salsa, emociones en estilo cartoon]({{ '/assets/img/comics/sarah-salsa-emociones.png' | relative_url }})

**Para observar en clase:** ¿se distinguen las emociones sin leer? ¿El texto cabe en los bocadillos? ¿La estrategia de respiración aparece visualmente en dos pasos? El globo que explota debe mostrarse sin escenas violentas ni aterradoras.


## Dar vida al cuento con ElevenLabs: del cómic al audio

Después de generar y revisar las ilustraciones, podemos convertir **«Sarah, Salsa y las emociones»** en un cuento sonoro con narración expresiva, personajes y pequeños efectos. Es una demostración de cómo combinar **NotebookLM → IA para guion → ElevenLabs → editor de vídeo**.

**Herramientas:** [ElevenLabs](https://elevenlabs.io/) · [De texto a voz](https://elevenlabs.io/app/speech-synthesis) · [Studio](https://elevenlabs.io/app/studio). La interfaz, los modelos disponibles y el consumo de créditos pueden variar según la cuenta.

### Escucha el resultado: Sarah y Salsa con Fiona (Eleven v4)

**Audio de demostración:** narración completa de aproximadamente **5 min 31 s**, realizada con la voz *Fiona – Warm & Engaging* y el modelo *Eleven v4*. Incluye diálogos interpretados con la misma voz, risas, sorpresa y respiración guiada.

<audio controls preload="none" style="width:100%;max-width:740px">
  <source src="{{ '/assets/audio/sarah-salsa-emociones-elevenlabs.mp3' | relative_url }}" type="audio/mpeg">
  Tu navegador no admite el reproductor de audio.
</audio>

[Escuchar o descargar el MP3]({{ '/assets/audio/sarah-salsa-emociones-elevenlabs.mp3' | relative_url }})

> **Archivo necesario para activar el reproductor:** sube `assets/audio/sarah-salsa-emociones-elevenlabs.mp3` al repositorio y publícalo en `main`. Hasta entonces el reproductor todavía no tendrá audio. El resultado refleja el nombre «Sara» pronunciado en castellano, aunque en el guion y las imágenes se escribe «Sarah».

### Paso 1 · Pedir a la IA un guion para narrar

No pegues directamente el texto de las viñetas: primero solicita un **guion oral** que respete la historia y el vocabulario de Infantil. Puedes usar este prompt con ChatGPT, Gemini o Copilot, junto al cómic o a su guion original:

```text
Actúa como guionista de cuentos sonoros para Educación Infantil
(3 años). Transforma el cómic «Sarah, Salsa y las emociones» en un
guion narrado listo para ElevenLabs, en español de España.

Historia: Sarah y su perrita Salsa juegan con bloques; se sorprenden
por el estallido de un globo; Salsa tiene miedo y al esconderse tira
la torre; Sarah siente tristeza y enfado; recupera la calma con la
respiración «huelo una flor, soplo una vela»; se abrazan, reconstruyen
la torre y preguntan al oyente cómo se siente.

Conserva los personajes, la secuencia de portada y siete páginas y
un tono amable y respetuoso. Incluye:
- Narradora cálida y expresiva, diálogos breves de Sarah y ladridos
  puntuales de Salsa; sin inventar nuevas escenas importantes.
- Frases cortas, vocabulario comprensible, preguntas al oyente,
  onomatopeyas y espacio para respirar en la escena flor-vela.
- Dos versiones de salida:
  A) texto limpio para una única voz;
  B) guion dramatizado separado por HABLANTE 1 (narradora),
     HABLANTE 2 (Sarah) y efectos de Salsa, listo para pegar por
     fragmentos en una herramienta de voz.
- Propón, aparte del texto oral, etiquetas expresivas compatibles
  con el modelo de ElevenLabs elegido, por ejemplo [laughs],
  [whispers], [surprised] o [sad]. No incluyas instrucciones como
  «NARRADORA:» dentro del texto que se leerá.
- Incluye una lista aparte de efectos opcionales, NO dentro del texto
  hablado: bloques, pequeño «pum» de globo, ladrido, música suave.
- Señala las pausas de respiración que habrá que ajustar después
  en el editor si el modelo no respeta su duración.
No incluyas mensajes de que sentir enfado o miedo es malo.
```

### Paso 2 · Generar una primera prueba en «De texto a voz»

1. Abre [De texto a voz de ElevenLabs](https://elevenlabs.io/app/speech-synthesis).
2. Selecciona una voz femenina española **cálida y comprensible** (en el ejemplo se probó *Fiona – Warm & Engaging*; escucha antes su pronunciación).
3. Escoge **Eleven v4**, si lo tienes disponible, y revisa que el idioma sea español; en la interfaz puede figurar «Automático».
4. Ajusta la **estabilidad hacia un punto intermedio o ligeramente creativo**, evitando una entonación excesivamente teatral para tres años. Mantén la similitud media-alta como punto de partida.
5. Pega **solo la apertura y una escena**. Prueba primero el texto limpio y pulsa **Generar**; escucha desde el principio.
6. Comprueba pronunciación de «Sarah» y «Salsa», ritmo, naturalidad, claridad y créditos antes de generar todo el cuento.

> **No confundas etiquetas con texto hablado.** Algunos modelos leen literalmente indicaciones como «NARRADORA — alegre» o «[long pause]». Usa solo etiquetas documentadas para el modelo seleccionado, prueba una escena corta y, si se leen en voz alta, elimínalas o gestiona la actuación mediante voces/edición.

### Paso 3 · Añadir emociones con indicaciones de voz

En los modelos compatibles, coloca una indicación justo antes de la frase a interpretar. Por ejemplo:

```text
[happy] ¡Qué mañana tan bonita!
[excited] ¡Yujuuuu! ¡Qué contenta estoy!
[whispers] Pero de repente...
[surprised] ¡PUM! ¡Qué susto!
[sad] Oh... Mi torre se ha caído.
[angry] ¡Estoy enfadada!
[whispers] Ahora voy a respirar despacito.
[laughs] ¡Qué cosquillas, Salsa!
```

Estas etiquetas son **orientativas, no una garantía de actuación**; comienza con [laughs] y [whispers], comprueba el resultado y ajusta lo que no funcione. No incluyas los encabezados de página ni las explicaciones pedagógicas en el campo de voz si no quieres que se pronuncien.

### Paso 4 · Hacer que Sarah tenga otra voz

En «De texto a voz», si aparece **+ Añadir hablante**, crea otro hablante para las intervenciones de Sarah. Selecciona una voz diferente, juvenil y clara; la narradora conservará la suya. Reparte los fragmentos entre hablantes en lugar de escribir literalmente «Sarah:» o «Narradora:».

**Fragmentos de Sarah para separar:** «¡Qué contenta estoy!», «¡Qué susto!», «Mi torre...», «¡Estoy enfadada!», «Voy a parar y respirar», «Ahora estoy tranquila», «¡Nuestra torre!». Para Salsa, es más fiable añadir **ladridos breves como efectos sonoros** que pedir a la narradora que ladre durante toda la escena.

### Paso 5 · Organizar el cuento completo en Studio

Si el audio va a ser largo o necesitas editarlo por partes:

1. Abre [ElevenLabs Studio](https://elevenlabs.io/app/studio) y crea un proyecto de audio, o importa el guion revisado.
2. Separa **portada y páginas 1–7** como capítulos o escenas.
3. Asigna la narradora y Sarah a los fragmentos correspondientes; mantén los diálogos cortos.
4. Genera y escucha **escena por escena**, regenerando solo los párrafos que necesiten mejoras.
5. Añade música y efectos con moderación. Usa un estallido de globo suave, no estridente.
6. En «Huelo la flor, soplo la vela», incorpora **silencios reales** para que el alumnado pueda acompañar la respiración; las etiquetas de pausa no garantizan segundos exactos.
7. Exporta el audio final en **MP3 o WAV**.

Studio permite organizar capítulos, voces y exportaciones de audio; consulta su [documentación oficial](https://elevenlabs.io/docs/es/help-center/product/studio/studio/what-is-studio).

### Paso 6 · Unir el audio y las imágenes

Importa las ilustraciones del cómic y el audio en Clipchamp, Canva u otro editor. Coloca cada imagen durante su escena correspondiente, añade subtítulos legibles si procede y exporta un **vídeo-cuento**. Para Infantil, evita transiciones rápidas, música demasiado alta y efectos que asusten. Si el propósito es autorregulación, deja visible la flor y la vela durante el ejercicio.

### Comprobación docente y mini-reto

Antes de compartirlo, revisa pronunciación, cambios emocionales, ausencia de instrucciones leídas literalmente, coherencia con las viñetas, volumen de efectos, tiempo de respiración y licencias de voces/música. No uses grabaciones ni clones de voz de menores reales.

**Reto:** crea un fragmento de 30–60 segundos en dos versiones: a) una sola voz con entonación; b) narradora y Sarah como hablantes distintos. Compara cuál comunica mejor la emoción y explica qué correcciones has realizado.

---

## Caso 2 · La invasión de la gelatina amarilla (Primaria / Secundaria)

**Objetivo didáctico:** explicar que los músculos necesitan energía para moverse, que el organismo utiliza distintos combustibles y que la actividad física regular contribuye a la salud.

**Personajes constantes:**
- **Tomás:** joven ficticio alto y atlético, cabello negro rizado recogido en coleta, ojos verdes, traje tecnológico de superhéroe con luces de neón.
- **Popi:** Yorkshire negro con moño recogido por una goma naranja y minicapa heroica.

**Guion de partida:** portada y diez páginas. El centro de mando envía a Tomás y Popi al interior del cuerpo; visitan el tejido muscular, observan personajes que representan reservas energéticas, vuelven al centro y animan a adoptar hábitos activos.

### Prompt reutilizable: aventura científica cartoon

```text
Convierte esta historia de divulgación sobre músculos y energía en un
cómic educativo titulado «La invasión de la gelatina amarilla».

Estilo: cartoon de aventuras, contornos gruesos, colores saturados,
figuras redondeadas, humor visual, expresiones exageradas y viñetas
dinámicas; evita estética realista y anatomía inquietante.

Conserva siempre a Tomás (pelo negro rizado con coleta, ojos verdes,
traje de superhéroe tecnológico con luz azul) y Popi (Yorkshire negro,
moño con goma naranja, minicapa).

Organiza portada y 10 páginas con unas 3-4 viñetas por página.
Usa un centro de mando, un viaje microscópico y una ciudad de fibras
musculares habitada por células caricaturescas. Las reservas de
energía aparecen como personajes amarillos simpáticos, no como
enemigos del cuerpo.

Mensajes científicos correctos: los músculos utilizan ATP y obtienen
energía a partir de distintos nutrientes; grasas y carbohidratos
pueden emplearse simultáneamente según las circunstancias; el tejido
muscular no se transforma en grasa; el ejercicio regular mejora la
función muscular y cardiovascular. Evita asociar tamaño corporal
con pereza, culpa o enfermedad.

Escribe primero el guion revisado con diálogos muy cortos. Después
genera la portada y las páginas por separado. Comprueba continuidad
de personajes, orden de viñetas, ortografía y precisión científica.
```

### Resultados visuales generados

**Primera versión: cómic de superhéroes**

![Versión de superhéroes de Tomás y Popi]({{ '/assets/img/comics/tomas-popi-superheroes.png' | relative_url }})

**Segunda versión: estilo cartoon**

![Versión cartoon de Tomás y Popi]({{ '/assets/img/comics/tomas-popi-cartoon.png' | relative_url }})

### Experimentación · Cambiar solo el estilo

Partimos del **mismo guion** y pedimos dos interpretaciones visuales. En la primera, «cómic americano de superhéroes: entintado grueso, composición épica, dramatismo, luces contrastadas». Después, sin cambiar ni personajes ni historia:

```text
Cambia el estilo del cómic anterior a cartoon infantil:
formas redondeadas, rostros expresivos, proporciones caricaturescas,
colores brillantes y ambiente amable. Conserva exactamente los
personajes, sus accesorios, la secuencia narrativa y el significado
educativo. Genera cada página por separado para mejorar la legibilidad.
```

**Preguntas para comparar:** ¿qué versión se comprende mejor a la edad elegida? ¿La IA conserva los personajes? ¿Qué errores aparecen al generar muchas páginas de golpe? ¿Se pueden leer todos los textos?

## Flujo de trabajo recomendado

1. **Definir el objetivo** y la edad: qué aprenderá el alumnado.
2. **Crear fichas de personajes** (rasgos, ropa, accesorios, paleta).
3. **Escribir el guion** por páginas, viñetas, planos y diálogos.
4. **Generar primero una portada de prueba** y ajustar la apariencia.
5. **Crear página a página** usando la referencia visual aprobada; evitar un único collage con todo el cuento.
6. **Corregir el texto y maquetar** los bocadillos en Canva, PowerPoint u otra herramienta si la IA introduce letras erróneas.
7. **Revisar la exactitud didáctica**, accesibilidad y coherencia antes de compartirlo.

### Revisión científica importante del segundo ejemplo

El guion de partida dramatiza la grasa como invasora de los músculos. Es una **metáfora narrativa, no una descripción literal**: los músculos no se convierten en células grasas, la grasa corporal tiene funciones necesarias, y el organismo utiliza mezclas de combustibles durante el ejercicio. Tampoco debe enseñarse que un único partido de baloncesto «limpia» por completo el tejido muscular. Evitemos mensajes de culpabilización corporal o recomendaciones dietéticas restrictivas; centrémonos en **movimiento, descanso, alimentación variada y bienestar**.

## Propuesta para el profesorado

Elige uno de los ejemplos o un contenido de tu materia. Entrega **guion de 4-6 viñetas, dos estilos de la misma escena, una versión corregida y una reflexión breve** sobre continuidad visual, legibilidad y rigor del contenido.

[← Volver al Bloque 3]({{ '/bloque3.html' | relative_url }})
