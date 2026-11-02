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

Escucha qué ocurre después del estallido del globo. ¿En qué momento cambia el ritmo de la narración? ¿Qué hace la voz para que puedas seguir el ejercicio de respiración?

<audio controls preload="none" aria-label="Cuento de Sarah y Salsa" src="{{ '/assets/audio/sarah-salsa-emociones-elevenlabs.mp3' | relative_url }}"></audio>

[Escuchar o descargar Sarah y Salsa]({{ '/assets/audio/sarah-salsa-emociones-elevenlabs.mp3' | relative_url }})

### Tomás y Popi · La aparición de las criaturas amarillas

Este fragmento termina cuando Popi salta hacia atrás. Escucha los segundos anteriores al salto. ¿Qué te permite anticipar la sorpresa?

<audio controls preload="none" aria-label="Primera parte de Tomás y Popi" src="{{ '/assets/audio/tomas-popi-superheroes-parte1.mp3' | relative_url }}"></audio>

[Escuchar o descargar Tomás y Popi]({{ '/assets/audio/tomas-popi-superheroes-parte1.mp3' | relative_url }}) · [Leer los guiones y ver las viñetas]({{ '/bloque3-comics-ejemplos.html' | relative_url }})

## Taller con ElevenLabs · De un guion al MP3

Vamos a grabar dos veces una escena nueva de Popi. El reto es que quien la escuche sepa cuándo tiene miedo y cuándo se tranquiliza, incluso con los ojos cerrados.

1. **Abre el editor.** Inicia sesión en [ElevenLabs](https://elevenlabs.io/app/speech-synthesis) y entra en **Text to Speech** (texto a voz).
2. **Elige la voz y el modelo.** Escucha las muestras y elige una voz que pronuncie el castellano como quieres para tu cuento. Selecciona **Eleven v4** o **Eleven v3** para probar las indicaciones de interpretación entre corchetes.
3. **Graba una primera toma.** Pega este texto en el editor y pulsa **Generate speech**. Escucha cómo interpreta la voz los puntos suspensivos y el cambio de emoción.

   > ¿Quién anda ahí? Tomás… ¿eres tú? ¡Ah, eras tú! Pensaba que había alguien detrás de la puerta.

4. **Dirige la segunda toma.** Conserva la misma voz y el mismo modelo. Sustituye el texto por esta versión y vuelve a pulsar **Generate speech**. La etiqueta se coloca justo antes de la frase cuya interpretación quieres cambiar.

   ```text
   [whispers] ¿Quién anda ahí? Tomás… ¿eres tú?
   [relieved] ¡Ah, eras tú! Pensaba que había alguien detrás de la puerta.
   ```

5. **Escucha y ajusta.** Reproduce las dos tomas desde **History** (historial). ¿Se reconoce el alivio al oír «¡Ah, eras tú!»? Si el cambio apenas se percibe, prueba otra voz con ese mismo fragmento antes de generar el cuento completo.
6. **Descarga el MP3.** En **History**, localiza la toma que prefieras, pulsa el icono de descarga y selecciona **MP3**. Guárdala como `popi-detras-de-la-puerta.mp3`. Para llevarla al aula, muestra la viñeta y pide al grupo que señale en qué palabra cambia la emoción.

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
