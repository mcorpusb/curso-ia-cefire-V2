---
layout: page
title: Audio
parent: "Bloque 3: Generación Multimodal"
nav_order: 10
---

# Audio · ElevenLabs y Gemini

¿Cómo sabe quien escucha que un personaje tiene miedo si no puede ver la viñeta? Escucha una escena, fíjate en la voz y prueba a dirigir tu propia versión.

## Escucha los cuentos de ElevenLabs

### Sarah y Salsa · Del susto a la calma

![Portada del cuento Sarah y Salsa y las emociones]({{ '/assets/img/comics/sarah-salsa-emociones.png' | relative_url }})

Escucha qué ocurre después del estallido del globo. ¿En qué momento cambia el ritmo de la narración? ¿Qué hace la voz para que puedas seguir el ejercicio de respiración?

<audio controls preload="none" aria-label="Cuento de Sarah y Salsa" src="{{ '/assets/audio/sarah-salsa-emociones-elevenlabs.mp3' | relative_url }}"></audio>

[Escuchar o descargar Sarah y Salsa]({{ '/assets/audio/sarah-salsa-emociones-elevenlabs.mp3' | relative_url }})

### Tomás y Popi · La aparición de las criaturas amarillas

![Portada del cuento de superhéroes Tomás y Popi]({{ '/assets/img/comics/tomas-popi-superheroes.png' | relative_url }})

Este fragmento termina cuando Popi salta hacia atrás. Escucha los segundos anteriores al salto. ¿Qué te permite anticipar la sorpresa?

<audio controls preload="none" aria-label="Primera parte de Tomás y Popi" src="{{ '/assets/audio/tomas-popi-superheroes-parte1.mp3' | relative_url }}"></audio>

[Escuchar o descargar Tomás y Popi]({{ '/assets/audio/tomas-popi-superheroes-parte1.mp3' | relative_url }}) · [Leer los guiones y ver las viñetas]({{ '/bloque3-comics-ejemplos.html' | relative_url }})

## Taller con ElevenLabs · De un guion al MP3

Vamos a grabar dos veces una escena nueva de Popi. El reto es que quien la escuche sepa cuándo tiene miedo y cuándo se tranquiliza, incluso con los ojos cerrados.

- **Abre el editor.** Inicia sesión en [ElevenLabs](https://elevenlabs.io/app/speech-synthesis) y entra en **Text to Speech** (texto a voz).
- **Elige la voz y el modelo.** Escucha las muestras y elige una voz que pronuncie el castellano como quieres para tu cuento. Selecciona **Eleven v4** o **Eleven v3** para probar las indicaciones de interpretación entre corchetes.
- **Graba una primera toma.** Pega este texto en el editor y pulsa **Generate speech**. Escucha cómo interpreta la voz los puntos suspensivos y el cambio de emoción.

   > ¿Quién anda ahí? Tomás… ¿eres tú? ¡Ah, eras tú! Pensaba que había alguien detrás de la puerta.

- **Dirige la segunda toma.** Conserva la misma voz y el mismo modelo. Sustituye el texto por esta versión y vuelve a pulsar **Generate speech**. La etiqueta se coloca justo antes de la frase cuya interpretación quieres cambiar.

   ```text
   [whispers] ¿Quién anda ahí? Tomás… ¿eres tú?
   [relieved] ¡Ah, eras tú! Pensaba que había alguien detrás de la puerta.
   ```

- **Escucha y ajusta.** Reproduce las dos tomas desde **History** (historial). ¿Se reconoce el alivio al oír «¡Ah, eras tú!»? Si el cambio apenas se percibe, prueba otra voz con ese mismo fragmento antes de generar el cuento completo.
- **Descarga el MP3.** En **History**, localiza la toma que prefieras, pulsa el icono de descarga y selecciona **MP3**. Guárdala como `popi-detras-de-la-puerta.mp3`. Para llevarla al aula, muestra la viñeta y pide al grupo que señale en qué palabra cambia la emoción.

**Para narrar un cuento completo**, divide el guion por escenas y conserva una copia con las indicaciones de voz. Puedes organizar los fragmentos en [ElevenLabs Studio](https://elevenlabs.io/app/studio). En el [laboratorio de cómics]({{ '/bloque3-comics-ejemplos.html' | relative_url }}) tienes el guion completo de Tomás y Popi para practicar.

[Guía de texto a voz de ElevenLabs](https://elevenlabs.io/docs/eleven-creative/playground/text-to-speech) · [Cómo descargar una grabación](https://elevenlabs.io/docs/help-center/product/core-capabilities/text-to-speech/how-do-i-download-generated-files-from-text-to-speech)

## Taller con Gemini · Dos guiones para generar en clase

Abre [Google AI Studio](https://aistudio.google.com/), elige la generación de voz con un modelo Gemini TTS y selecciona una o dos voces según el ejercicio. Introduce el guion y usa la indicación de interpretación para dirigir la lectura. Genera el audio y escúchalo con el texto delante.

### Una voz · ¿Qué ha oído Popi?

**Guion para una escena nueva:** «Popi se quedó quieto. Algo se movía al otro lado de la puerta. Escuchó otra vez. ¡Era Tomás, que intentaba abrir con las manos llenas!»

**Primera toma.** Lee despacio y en voz baja. Haz una pausa después de «otra vez». Deja que se oiga el alivio al reconocer a Tomás.

**Segunda toma.** Mantén el texto y la voz, pero interpreta la escena con curiosidad desde la primera frase. Pon las dos versiones al grupo sin decir cuál es cuál. ¿Qué detalle ha cambiado su interpretación?

### Dos voces · Un mensaje urgente en 2.º de SMR

**Interpretación.** Asigna una voz a Alba y otra a Dani. Alba empieza con prisa. Dani pregunta con calma y deja espacio para que Alba se dé cuenta del problema.

> Alba: Me acaba de llegar un correo. Dice que hoy pierdo la cuenta si no entro en este enlace.  
> Dani: Espera. ¿Qué dirección aparece si despliegas el remitente?  
> Alba: El nombre dice «Soporte», pero el dominio no es el del centro.  
> Dani: ¿Cómo comprobarías el aviso sin usar el enlace del correo?

Detén el audio tras la pregunta y pide al grupo que proponga una comprobación por un canal conocido. Para comparar herramientas, genera el mismo diálogo en ElevenLabs y escucha en cuál se distinguen mejor los turnos.

[Guía de Google sobre generación de voz con Gemini](https://ai.google.dev/gemini-api/docs/speech-generation?hl=es)

## Crear música con Gemini
{: #gemini-musica }

¿Qué música pondrías debajo de la voz de Popi para que se note el momento en que deja de tener miedo?

![Pantalla Crear música de Gemini con Lyria 3.5. Se ven las plantillas Música de fondo y Memorizar algo, el campo para describir la pista y los controles Duración, Voces y Género.]({{ '/assets/img/gemini-musica.svg' | relative_url }})

- Abre [Gemini](https://gemini.google.com/) y selecciona **Música**. En la pantalla de la captura aparece **Crear música**.
- Elige **Música de fondo**. También puedes escribir directamente en **Describe la pista musical**.
- Revisa **Duración**, **Voces** y **Género**. Para acompañar el cuento, elige una duración próxima a la de la escena y pide una pista instrumental.
- Copia esta descripción y envíala:

   > Crea una pieza instrumental para un cuento de Primaria. Popi oye algo detrás de la puerta. Empieza con notas de piano suaves y espaciadas. A mitad de la pieza descubre que es Tomás. Cambia entonces a una melodía cálida y tranquila. Sin letra ni percusión fuerte, para que se entienda la narración.

- Reproduce la pista junto al fragmento narrado. ¿Coincide el cambio musical con la frase «¡Ah, eras tú!»? Si llega demasiado pronto, pide que el piano mantenga la tensión unos segundos más.

**Otra prueba para Primaria.** Selecciona **Memorizar algo** y pide una estrofa breve sobre el recorrido del aire desde la nariz hasta los pulmones. Escucha la letra y comprueba el orden de los órganos antes de cantarla en clase.

### Prompt reutilizable · Crea una canción para tu clase

Este **prompt reutilizable** sirve para crear canciones en Gemini Música. El profesorado solo tiene que cambiar lo que aparece entre corchetes y pegarlo en **Describe la pista musical**.

```text
Crea una canción en [idioma] para alumnado de [etapa, curso o nivel] de [asignatura o módulo]. Al terminar de escucharla, quiero que el alumnado sea capaz de [objetivo concreto].

La canción parte de esta situación: [una escena cercana al alumnado]. Usa estos contenidos como referencia: [pega entre 3 y 5 ideas, expresiones o pasos que deben aparecer]. Respeta su significado y su orden cuando sea importante.

Dale un estilo [pop acústico, rap, rumba, indie…], con [una voz / dos voces que se responden], ritmo [tranquilo / medio / animado] y una duración aproximada de [duración]. La voz debe entenderse por encima de la música. Utiliza un tono natural para esa edad y evita forzar las rimas si se pierde precisión.

Empieza directamente con la escena. En la primera estrofa, plantea un problema. En el estribillo, convierte la idea principal en una frase breve que la clase pueda cantar. En la segunda estrofa, muestra cómo se aplica. Termina con una pregunta que el alumnado pueda responder al detener la música.

Genera la canción cantada con acompañamiento musical.
```

### Tres ejemplos listos para pegar en «Describe la pista musical»

#### Secundaria · Biología · «¿Por qué respiro más rápido?»

> Crea una canción indie pop en castellano de aproximadamente un minuto para 3.º de ESO. La protagonista llega al tercer piso del instituto, se queda sin aliento y se pregunta qué ocurre dentro de su cuerpo. Sigue una bocanada de aire desde la nariz hasta los alvéolos, pasando por la faringe, la laringe, la tráquea, los bronquios y los bronquiolos. En el estribillo, deja clara la diferencia entre el recorrido del aire y el paso del oxígeno a la sangre. Usa una voz juvenil, dicción clara y un ritmo que permita seguir el viaje sin atropellar los nombres. Termina cantando «¿En qué momento pasó el oxígeno a mi sangre?».

**Escucha la canción generada en Gemini Música.**

<audio controls preload="none" aria-label="El viaje del aire, canción de Biología para 3.º de ESO" src="{{ '/assets/audio/El_viaje_del_aire.mp3' | relative_url }}"></audio>

[Escuchar o descargar «El viaje del aire»]({{ '/assets/audio/El_viaje_del_aire.mp3' | relative_url }})

#### Idiomas · Inglés A2 · «Which way to the station?»

> Crea una canción pop acústica en inglés para alumnado de nivel A2. Dos voces representan a una viajera y a una persona del barrio. La viajera pregunta «Excuse me, how do I get to the station?». La otra voz le indica, en este orden, que siga recto, gire a la izquierda al llegar a la biblioteca y cruce la calle. Usa «go straight on», «turn left at the library» y «cross the street». Convierte la pregunta inicial en un estribillo que la clase pueda cantar. Mantén un ritmo tranquilo y deja una pausa después de cada indicación para que el alumnado pueda dibujar la ruta mientras escucha. Duración aproximada de un minuto.

**Escucha la canción generada en Gemini Música.**

<audio controls preload="none" aria-label="Turn Left at the Library, canción de inglés A2" src="{{ '/assets/audio/Turn_Left_at_the_Library.mp3' | relative_url }}"></audio>

[Escuchar o descargar «Turn Left at the Library»]({{ '/assets/audio/Turn_Left_at_the_Library.mp3' | relative_url }})

#### FP · 2.º de SMR · «¿Abrirías ese enlace?»

> Crea un rap dialogado en castellano de un minuto para 2.º de SMR, módulo de Seguridad Informática. Alba recibe un correo que amenaza con bloquearle la cuenta del centro en diez minutos. Dani le pregunta qué dirección aparece al desplegar el remitente. Alba descubre que el dominio no coincide con el del centro. En el estribillo utiliza «Para, comprueba, avisa». En la segunda estrofa, Alba abre el portal del centro desde su marcador habitual y comunica el mensaje a soporte. Haz que las voces suenen como dos compañeros de clase, con una base suave que permita entender cada pista. Termina con la pregunta «Y si el dominio pareciera correcto, ¿cómo comprobarías el aviso?».

**Escucha «El truco en el remitente».** Vídeo musical generado para trabajar la detección de mensajes sospechosos y la verificación del remitente.

<video controls preload="none" playsinline width="459" poster="{{ '/assets/img/el-truco-en-el-remitente.png' | relative_url }}" aria-label="Vídeo El truco en el remitente">
  <source src="{{ '/assets/audio/El_truco_en_el_remitente.mp4' | relative_url }}" type="video/mp4">
  Tu navegador no admite la reproducción de vídeo.
</video>

[Ver o descargar «El truco en el remitente» (MP4)]({{ '/assets/audio/El_truco_en_el_remitente.mp4' | relative_url }})

