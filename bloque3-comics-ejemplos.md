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

## Sarah, Salsa y las emociones (Infantil, 3 años)

**Objetivo didáctico:** reconocer alegría, sorpresa, miedo, tristeza, enfado y calma; ensayar una respiración sencilla (oler una flor y soplar una vela imaginaria).

**Personajes constantes:**
- **Sarah:** niña ilustrada de seis años, cabello rubio ondulado, ganchos rojos, camiseta amarilla, tutú rosa y deportivas de colores.
- **Salsa:** perrita Yorkshire regordeta y dormilona, con pequeño moño y lazo rojo.

### Cuaderno de NotebookLM de referencia

El cuento de Sarah y Salsa se trabajó también en un cuaderno de NotebookLM que puedes consultar como ejemplo para diseñar una historia educativa a partir de fuentes propias:

**[Abrir el cuaderno «Sarah, Salsa y las emociones» en NotebookLM](https://notebook.google.com/notebook/d032e7ea-08f2-4791-8096-fb5005c57ca7)**

> **Acceso:** para abrir el cuaderno necesitas una cuenta Google y permisos de lectura concedidos por su propietaria. Si aparece «Solicitar acceso», pide permiso; no se ha comprobado que el enlace sea público.

**Estructura del cómic:** portada y siete páginas:

- Juego y alegría.
- Estallido inesperado de un globo, sorpresa y miedo.
- Torre de bloques caída y tristeza.
- Enfado.
- Respiración de la flor y la vela.
- Calma y abrazo.
- Reconstrucción de la torre y pregunta final: «Y tú, ¿cómo te sientes hoy?».

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

<audio controls preload="metadata" style="width:100%;max-width:740px">
  <source src="{{ '/assets/audio/sarah-salsa-emociones-elevenlabs.mp3' | relative_url }}" type="audio/mpeg">
  Tu navegador no admite el reproductor de audio.
</audio>

[Escuchar o descargar el MP3]({{ '/assets/audio/sarah-salsa-emociones-elevenlabs.mp3' | relative_url }})


### Pedir a la IA un guion para narrar

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

### Generar una primera prueba en «De texto a voz»

- Abre [De texto a voz de ElevenLabs](https://elevenlabs.io/app/speech-synthesis).
- Selecciona una voz femenina española **cálida y comprensible** (en el ejemplo se probó *Fiona – Warm & Engaging*; escucha antes su pronunciación).
- Escoge **Eleven v4**, si lo tienes disponible, y revisa que el idioma sea español; en la interfaz puede figurar «Automático».
- Ajusta la **estabilidad hacia un punto intermedio o ligeramente creativo**, evitando una entonación excesivamente teatral para tres años. Mantén la similitud media-alta como punto de partida.
- Pega **solo la apertura y una escena**. Prueba primero el texto limpio y pulsa **Generar**; escucha desde el principio.
- Comprueba pronunciación de «Sarah» y «Salsa», ritmo, naturalidad, claridad y créditos antes de generar todo el cuento.

> **No confundas etiquetas con texto hablado.** Algunos modelos leen literalmente indicaciones como «NARRADORA — alegre» o «[long pause]». Usa solo etiquetas documentadas para el modelo seleccionado, prueba una escena corta y, si se leen en voz alta, elimínalas o gestiona la actuación mediante voces/edición.

### Añadir emociones con indicaciones de voz

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

### Hacer que Sarah tenga otra voz

En «De texto a voz», si aparece **+ Añadir hablante**, crea otro hablante para las intervenciones de Sarah. Selecciona una voz diferente, juvenil y clara; la narradora conservará la suya. Reparte los fragmentos entre hablantes en lugar de escribir literalmente «Sarah:» o «Narradora:».

**Fragmentos de Sarah para separar:** «¡Qué contenta estoy!», «¡Qué susto!», «Mi torre...», «¡Estoy enfadada!», «Voy a parar y respirar», «Ahora estoy tranquila», «¡Nuestra torre!». Para Salsa, es más fiable añadir **ladridos breves como efectos sonoros** que pedir a la narradora que ladre durante toda la escena.

### Organizar el cuento completo en Studio

Si el audio va a ser largo o necesitas editarlo por partes:

- Abre [ElevenLabs Studio](https://elevenlabs.io/app/studio) y crea un proyecto de audio, o importa el guion revisado.
- Separa **portada y páginas 1–7** como capítulos o escenas.
- Asigna la narradora y Sarah a los fragmentos correspondientes; mantén los diálogos cortos.
- Genera y escucha **escena por escena**, regenerando solo los párrafos que necesiten mejoras.
- Añade música y efectos con moderación. Usa un estallido de globo suave, no estridente.
- En «Huelo la flor, soplo la vela», incorpora **silencios reales** para que el alumnado pueda acompañar la respiración; las etiquetas de pausa no garantizan segundos exactos.
- Exporta el audio final en **MP3 o WAV**.

Studio permite organizar capítulos, voces y exportaciones de audio; consulta su [documentación oficial](https://elevenlabs.io/docs/es/help-center/product/studio/studio/what-is-studio).

### Unir el audio y las imágenes

Importa las ilustraciones del cómic y el audio en Clipchamp, Canva u otro editor. Coloca cada imagen durante su escena correspondiente, añade subtítulos legibles si procede y exporta un **vídeo-cuento**. Para Infantil, evita transiciones rápidas, música demasiado alta y efectos que asusten. Si el propósito es autorregulación, deja visible la flor y la vela durante el ejercicio.

### Comprobación docente y mini-reto

Antes de compartirlo, revisa pronunciación, cambios emocionales, ausencia de instrucciones leídas literalmente, coherencia con las viñetas, volumen de efectos, tiempo de respiración y licencias de voces/música. No uses grabaciones ni clones de voz de menores reales.

**Reto:** crea un fragmento de 30–60 segundos en dos versiones: a) una sola voz con entonación; b) narradora y Sarah como hablantes distintos. Compara cuál comunica mejor la emoción y explica qué correcciones has realizado.

---

## La invasión de la gelatina amarilla (Primaria / Secundaria)

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

### Audio de Tomás y Popi · Primera parte

Narración generada en **ElevenLabs, con Martin Osborne – Polished and Intense (Eleven v4)**. Es un **fragmento**, no el cuento completo: llega hasta la aparición de las criaturas amarillas, cuando Popi salta hacia atrás.

<audio controls preload="metadata" style="width:100%;max-width:740px">
  <source src="{{ '/assets/audio/tomas-popi-superheroes-parte1.mp3' | relative_url }}" type="audio/mpeg">
  Tu navegador no admite el reproductor de audio.
</audio>

[Escuchar o descargar la primera parte en MP3]({{ '/assets/audio/tomas-popi-superheroes-parte1.mp3' | relative_url }})


### Audiocómic de superhéroes · Guion completo para ElevenLabs

El siguiente texto es la **versión narrada completa** de «La invasión de la gelatina amarilla», adaptada al lenguaje oral. Se ha revisado el mensaje científico para que las grasas no aparezcan como enemigas del organismo. Puede usarse con **Eleven v4**, una voz expresiva y, si hace falta, en varios fragmentos. Las etiquetas entre corchetes son indicaciones de interpretación: haz una prueba corta antes de generar todo, ya que algunas voces pueden leerlas literalmente.

<details markdown="1">
<summary><strong>Mostrar el guion completo para copiar y pegar en ElevenLabs</strong></summary>

```text
[dramatic] En lo más profundo del cuerpo humano existe un mundo que nadie ha visto jamás.

Un mundo de células, músculos y energía. Un mundo donde cada segundo ocurre algo extraordinario.

Pero hoy... algo está a punto de cambiar.

[whispers] Una extraña invasión se aproxima.

[excited] ¡Y solo dos héroes podrán investigar lo que está sucediendo!

¡Tomás y Popi! ¡Comienza la invasión de la gelatina amarilla!

[energetic] ¡Saludos, reclutas! Bienvenidos al Centro de Mando del Cuerpo Humano.

Soy Tomás, vuestro guía biomecánico. Y este pequeño héroe de cuatro patas es Popi.

[playful] ¡Guau, guau!

[laughs] Aunque Popi es pequeño, está convencido de que es el cerebro de todas nuestras misiones.

[serious] Hoy tenemos un problema. Nuestros sensores han detectado que una persona lleva muchas horas sin moverse.

Sus músculos necesitan actividad para mantenerse fuertes y saludables. Tenemos que investigar qué sucede dentro de su cuerpo.

[excited] ¡Preparado, Popi! ¡Iniciamos la operación microscópica!

[whispers] Popi se acerca lentamente a la consola, levanta una patita... y pulsa un enorme botón rojo.

[shouts] ¡MINIATURIZACIÓN ACTIVADA!

¡Clic! ¡Fuuuuuuush!

[excited] ¡Tomás y Popi se hacen diminutos! Más pequeños que una hormiga. Más pequeños que un granito de arena.

Y comienzan a viajar por el torrente sanguíneo.

[amazed] ¡Guauuuu! ¡A su alrededor pasan cientos de glóbulos rojos! ¡Parecen naves espaciales!

[excited] ¡Agárrate fuerte, Popi! ¡Próxima parada: el tejido muscular!

[amazed] ¡Qué espectáculo! Enormes fibras musculares rojas se extienden hasta donde alcanza la vista.

Unas se contraen. Otras se relajan. Y pequeñas células trabajan sin descanso.

[cheerful] ¡Bienvenidos al mundo de los músculos!

Aquí se hace posible cada movimiento de nuestro cuerpo: caminar, saltar, correr... ¡y hasta mover un dedo!

Pero los músculos necesitan energía, y esa energía se obtiene mediante un trabajo extraordinario de nuestras células.

[worried] ¡Jefe, jefe! Un pequeño trabajador celular se acerca corriendo.

¡Necesitamos combustible para seguir trabajando!

[confident] ¡Tranquilo, compañero! Nuestro cuerpo utiliza nutrientes como los carbohidratos y las grasas para producir energía.

Las mitocondrias ayudan a fabricar el ATP que necesitan las células.

[playful] ¡Guau!

[laughs] ¡Exactamente, Popi! Tú también necesitas energía para mover esa colita.

[whispers] Pero entonces... las luces del tejido muscular comienzan a parpadear.

Los trabajadores se miran sorprendidos. Algo extraño está sucediendo.

[gasps] ¿Qué ha sido eso?

De pronto, una enorme compuerta se abre sobre sus cabezas.

[shouts] ¡PLOP! ¡PLOP! ¡PLOOOOOOP!

Una multitud de criaturas amarillas y gelatinosas aparece ante ellos.

Son redondas, viscosas... ¡y algunas parecen estar medio dormidas!

[surprised] ¡Popi, mira eso!

[playful] ¡Guau, guau, guau!

Una de las criaturas amarillas rebota delante del pequeño perro.

[playful] ¡Un momentoooo! ¡Que no puedo frenar! ¡Ploooooop!

[laughs] Popi salta hacia atrás. ¡Por poco acaba convertido en una croqueta de gelatina!

[serious] ¡Alto, alto! Estas criaturas representan nuestras reservas de grasa.

Y aunque parezcan monstruos... no son realmente nuestros enemigos.

Las grasas cumplen funciones importantes en el organismo y también pueden utilizarse como fuente de energía.

[surprised] ¿Cómo? ¿Entonces no somos los malos?

[cheerful] ¡Exactamente! El verdadero problema no es tener reservas energéticas.

Lo importante es comprender cómo funciona el cuerpo y cómo cuidarlo.

[dramatic] Mientras tanto, en otra zona del tejido muscular, los trabajadores comienzan a aburrirse.

Las fibras llevan mucho tiempo sin participar en actividades intensas.

[complaining] ¡Jefe, necesitamos movimiento! ¡Esto parece una fábrica en vacaciones!

[playful] ¡Guau!

[determined] ¡Tienes razón, Popi! Pasar demasiado tiempo sin actividad no es bueno para nuestros músculos.

¡Tenemos que activar el Protocolo de Vida Sana!

[dramatic] Tomás levanta el brazo. Su traje tecnológico comienza a brillar.

Y aparece ante ellos un enorme holograma azul.

En la pantalla se iluminan tres símbolos: unas zapatillas deportivas, una botella de agua y un plato de comida variada.

[heroic] ¡Atención, reclutas! Para cuidar nuestro cuerpo necesitamos movimiento regular, una alimentación variada y suficiente descanso.

¡No existe una solución mágica! ¡Los buenos hábitos se construyen cada día!

[excited] ¡Guau, guau!

Popi ya se está poniendo unas pequeñas zapatillas deportivas.

[laughs] ¡Ja, ja, ja! ¡Parece que nuestro héroe tiene prisa!

[dramatic] De repente... ¡PI! ¡PI! ¡PI!

¡La alarma del centro de mando comienza a sonar!

[serious] Atención. Movimiento detectado. Actividad física iniciada.

[excited] ¡Lo hemos conseguido, Popi! ¡Nuestro sujeto ha salido a jugar al baloncesto!

[shouts] ¡TODOS A SUS PUESTOS! ¡LOS MÚSCULOS ENTRAN EN ACCIÓN!

[dramatic] Dentro del cuerpo empieza una auténtica revolución.

Los mensajeros nerviosos corren de un lado a otro. Las fibras musculares comienzan a contraerse.

[excited] ¡Atención! ¡Preparados para el salto! ¡Tres, dos, uno...!

[shouts] ¡ARRIBAAAA!

El adolescente salta para lanzar el balón a la canasta.

¡Sus músculos trabajan juntos para conseguirlo!

[amazed] ¡Increíble! Las fibras se contraen y se relajan.

Las células producen energía. ¡Todo un equipo trabajando coordinadamente!

[playful] ¡Guauuuuu!

[urgent] ¡Jefe! ¡Las fábricas celulares necesitan seguir produciendo ATP!

[confident] ¡Activad el suministro energético! ¡Necesitamos nutrientes y oxígeno para continuar!

[dramatic] Las mitocondrias comienzan a brillar como pequeñas centrales eléctricas.

¡Fuuuuuuuuush!

[excited] ¡La energía está llegando! ¡Los músculos pueden seguir trabajando!

Entonces, una de las pequeñas criaturas amarillas se acerca a Tomás.

[softly] Disculpa, señor superhéroe... ¿Nosotros también podemos ayudar?

[happy] ¡Por supuesto! El organismo también puede obtener energía utilizando sus reservas de grasa.

¡Aquí todos tenemos una función!

[playful] ¡Por fin! ¡Yo pensaba que solo servía para hacer de gelatina!

[laughs]

[heroic] ¡Así es, reclutas! El cuerpo utiliza diferentes combustibles según sus necesidades.

Y con la actividad física regular podemos mejorar nuestra resistencia y fortalecer los músculos.

[dramatic] Poco a poco, el paisaje muscular recupera su actividad.

Los trabajadores sonríen. Las fibras se mueven. Las criaturas amarillas continúan cumpliendo su función como reservas de energía.

[relieved] ¡Uffff! ¡Qué alegría volver a trabajar!

[playful] ¡Guau, guau!

[excited] ¡Bien hecho, Popi! ¡Ahora tenemos que regresar al centro de mando!

Tomás pulsa un botón de su traje.

[shouts] ¡REGRESO ACTIVADO!

¡Zaaaaaaaap!

[amazed] En un instante, nuestros héroes recuperan su tamaño normal.

¡Ya están otra vez en el centro de mando!

En la pantalla principal aparece el adolescente jugando al baloncesto con sus amigos.

Corre. Salta. Se divierte. Y disfruta de estar en movimiento.

[proud] ¡Misión cumplida, Popi!

Hoy hemos aprendido cómo trabajan los músculos y por qué es importante mantenernos activos.

[playful] ¡Guau!

Pero Popi todavía tiene una sorpresa.

El pequeño Yorkshire aparece levantando una pesa diminuta.

[excited] ¡Guau, guau, guau!

[laughs] ¡Ja, ja, ja! ¡Pero bueno, Popi! ¡Vaya superhéroe estás hecho!

[warm] Y ahora, reclutas... tenemos una última misión para vosotros.

[heroic] Recordad algo muy importante.

Vuestro cuerpo es extraordinario.

No necesitáis ser superhéroes para cuidarlo.

Podéis caminar, bailar, jugar, montar en bicicleta o practicar cualquier actividad física que disfrutéis.

Lo importante es encontrar momentos para moveros y cuidaros.

[playful] ¡Guau, guau!

[laughs] ¡Sí, Popi! ¡Jugar con tu perro también cuenta!

[dramatic] Y así termina una aventura microscópica llena de descubrimientos.

Pero nuestros héroes saben que todavía quedan muchísimos misterios por explorar dentro del cuerpo humano.

[excited] ¡Preparado para la siguiente misión, Popi!

¡Guauuuuuu!

[heroic] ¡HASTA LA PRÓXIMA AVENTURA MICROSCÓPICA!

¡FIN DEL EPISODIO!
```

</details>

**Para generar el audio:** abre [ElevenLabs · De texto a voz](https://elevenlabs.io/app/speech-synthesis), selecciona una voz narrativa y Eleven v4, copia el texto (sin los delimitadores del bloque) y prueba una escena. Si no tienes suficientes créditos, divide el guion en fragmentos en los cambios naturales de escena; no lo recortes sin conservar el resto. **El fragmento ya generado se detiene cuando Popi salta hacia atrás frente a una criatura amarilla**.

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

## Intrusión en la red: un cómic de ciberseguridad creado con NotebookLM

**Público:** personas sin conocimientos técnicos previos. **Formato:** portada y diez páginas. **Estilo:** cómic europeo de línea clara con ambientación tecnológica.

Este tercer ejemplo muestra un proceso distinto: partimos de un tema de ciberseguridad, pedimos a NotebookLM un guion visual y reunimos el resultado en un único documento. El cómic presenta a Tomy, la profesora Corpusiana y su perro, con una intrusión ficticia como hilo conductor.

**[Abrir o descargar el cómic completo en PDF]({{ '/assets/docs/comic_intrusion_red_optimizado.pdf' | relative_url }})**

 
### Instrucciones utilizadas en NotebookLM

**Prompt maestro para preparar el guion:**

```text
Eres un Guionista y Director Visual especializado en cómic profesional.
Tu trabajo es convertir una idea en un guion listo para ilustrarse con IA
o por un dibujante real. Antes de escribir, pregunta de forma breve y una
a una por: concepto central, público, extensión aproximada, estilo
artístico, tono e idioma, y descripción física detallada de cada
personaje (rasgos, vestimenta, edad, accesorios). No empieces el guion
hasta tener todo definido. Cuando lo desarrolles, estructura por páginas
y viñetas, especifica tipo de plano y ángulo (primer plano, contrapicado,
panorámica…), iluminación y atmósfera, y redacta descripciones visuales
completas repitiendo siempre los rasgos físicos del personaje para
mantener coherencia visual. Entrega el resultado en Markdown, con
portada opcional y cada viñeta claramente separada.
```

**Indicaciones de contenido y formato facilitadas después:**

```text
Un ataque real mediante herramientas de explotación de vulnerabilidades.
Quiero que me generes un cómic explicando este tema.

Público general sin conocimientos técnicos, 10 páginas,
un toque más tecnológico, ilustración de cómic europeo de línea clara.

Crea el cómic.

¿Puedes unir todas las páginas en un único documento?
```

### Cómo reproducir la experiencia

- Selecciona un cuaderno de NotebookLM con fuentes adecuadas al contenido que quieras trabajar.
- Introduce el prompt maestro y contesta las preguntas sobre tema, destinatarios, páginas, estilo y personajes.
- Solicita el guion completo y revisa el rigor de sus explicaciones.
- Pide las ilustraciones o traslada el guion a un generador de imágenes según las funciones disponibles en tu cuenta.
- Comprueba cada página: continuidad visual, diálogos, legibilidad y precisión técnica.
- Pide reunir todas las páginas y exporta el cómic a PDF para facilitar su lectura y uso educativo.

### Revisión docente antes de compartirlo

El cómic emplea un lenguaje visual deliberadamente simplificado. Muestra, entre otros contenidos, reconocimiento de sistemas, herramientas de análisis, desbordamiento de búfer y medidas defensivas. Conviene explicar que **Nessus/OpenVAS son analizadores de vulnerabilidades**, que las herramientas de explotación tienen otras finalidades y que **encontrar un fallo no significa obtener acceso automáticamente**. Las ilustraciones de pantallas y ataques son narrativas, no procedimientos técnicos verificables. Utiliza el ejemplo para hablar de prevención, autorizaciones y respuesta a incidentes, no como manual de intrusión.

---
## Flujo de trabajo recomendado

- **Definir el objetivo** y la edad: qué aprenderá el alumnado.
- **Crear fichas de personajes** (rasgos, ropa, accesorios, paleta).
- **Escribir el guion** por páginas, viñetas, planos y diálogos.
- **Generar primero una portada de prueba** y ajustar la apariencia.
- **Crear página a página** usando la referencia visual aprobada; evitar un único collage con todo el cuento.
- **Corregir el texto y maquetar** los bocadillos en Canva, PowerPoint u otra herramienta si la IA introduce letras erróneas.
- **Revisar la exactitud didáctica**, accesibilidad y coherencia antes de compartirlo.

### Revisión científica importante del segundo ejemplo

El guion de partida dramatiza la grasa como invasora de los músculos. Es una **metáfora narrativa, no una descripción literal**: los músculos no se convierten en células grasas, la grasa corporal tiene funciones necesarias, y el organismo utiliza mezclas de combustibles durante el ejercicio. Tampoco debe enseñarse que un único partido de baloncesto «limpia» por completo el tejido muscular. Evitemos mensajes de culpabilización corporal o recomendaciones dietéticas restrictivas; centrémonos en **movimiento, descanso, alimentación variada y bienestar**.

## Propuesta para el profesorado

Elige uno de los ejemplos o un contenido de tu materia. Entrega **guion de 4-6 viñetas, dos estilos de la misma escena, una versión corregida y una reflexión breve** sobre continuidad visual, legibilidad y rigor del contenido.

[← Volver al Bloque 3]({{ '/bloque3.html' | relative_url }})
