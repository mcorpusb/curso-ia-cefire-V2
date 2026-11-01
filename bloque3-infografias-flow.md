---
layout: page
title: "Laboratorio de infografías educativas animadas con IA y Google Flow"
parent: "Bloque 3: Generación Multimodal"
nav_exclude: true
---

# Laboratorio de infografías educativas animadas con IA y Google Flow
{: .fs-8 }

**Objetivo:** diseñar una infografía adaptada a un contenido curricular, comprobar su rigor y convertirla en un breve vídeo animado. El mismo método sirve para Primaria, ESO, Bachillerato y FP. No se necesita crear herramientas personalizadas de pago.
{: .fs-5 .fw-300 }

## Índice del laboratorio

- [Crear una infografía con un prompt reutilizable](#crear-la-infografia)
- [Ejemplos reales por especialidad](#ejemplos-reales)
- [Animar la infografía: prompt en español](#prompt-de-animacion)
- [Versiones breves](#versiones-breves)
- [Ejemplo: mariposa](#ejemplo-mariposa)
- [Google Flow paso a paso, con capturas](#tutorial-flow)
- [Galería de ejemplos y actividad docente](#galeria-y-actividad)

## Crear la infografía
{: id="crear-la-infografia" }

Empieza por definir **qué necesita comprender el alumnado**, antes de elegir la herramienta. Puedes usar ChatGPT, Gemini u otro generador de imágenes. El resultado final se revisa siempre antes de animarlo.

### Prompt maestro para cualquier materia (copiar y adaptar)

```text
Actúa como diseñador de infografías educativas, especialista en didáctica y comunicación visual.

Crea una infografía sobre [TEMA], dirigida a [ETAPA EDUCATIVA], [CURSO Y EDAD], para la materia, ámbito o especialidad [MATERIA O ESPECIALIDAD].

Objetivo de aprendizaje: [QUÉ DEBE COMPRENDER O SABER HACER EL ALUMNADO].
Contenidos imprescindibles: [IDEAS Y DATOS COMPROBADOS].
Tipo de representación: [ANATOMÍA / PROCESO / CICLO / LÍNEA DEL TIEMPO / COMPARACIÓN / ESQUEMA TÉCNICO].

Diseño:
- Formato vertical 9:16, alta resolución y estética de póster educativo profesional.
- Estilo de diseño: [ESTILO DE DISEÑO].
- Título grande y subtítulo breve en español de España (o [IDIOMA]).
- Un elemento protagonista central claro, atractivo y correcto para la materia.
- Entre cuatro y seis bloques numerados con iconos y explicaciones breves.
- Flechas o líneas que expliquen relaciones reales, no decorativas ni contradictorias.
- Franja inferior con un resumen, comparación o comprobación del aprendizaje.
- Tipografía legible, alto contraste, sin saturación ni información pegada a los bordes.
- Secciones separadas para facilitar su animación posterior.

Rigor y accesibilidad:
Adapta el vocabulario a la edad. Evita inventar cifras o normas. Comprueba fórmulas, nombres, fechas, anatomía, conexiones y sentido de las flechas. Representa con precisión los mecanismos técnicos y científicos. No uses imágenes identificables del alumnado ni datos personales.

Prepara una imagen lista para revisión docente y posterior animación en Google Flow.
```

### Variante: póster visual de un animal, planta u objeto central

Para proyectos como **pantera negra** o **mariposa**, sustituye el bloque de diseño por este complemento. No es adecuado forzar una anatomía animal en contenidos como marketing o circuitos eléctricos.

```text
Crea un póster infográfico educativo vertical 9:16 sobre [NOMBRE DEL SUJETO]. Utiliza una ilustración central muy detallada y correcta, con 4-6 paneles explicativos, numeración visible, líneas conectoras precisas y una franja inferior de datos rápidos. Si encaja pedagógicamente, incorpora un pequeño personaje experto presentador sin ocultar información. Estilo editorial premium, iluminación clara, fondo discreto, textos breves en español, tipografía legible y composición preparada para la animación posterior. Evita anatomía incorrecta, etiquetas falsas, datos inventados y saturación visual.
```

> **Revisión necesaria:** la IA puede producir textos correctos en apariencia pero con errores de ortografía, anatomía, fórmulas o datos. No debe darse por válida una infografía únicamente por su calidad gráfica.

## Ejemplos diseñados por etapa y especialidad
{: id="ejemplos-reales" }

Estos ejemplos muestran cómo adaptar **un mismo método** a objetivos de aprendizaje diferentes. Las imágenes son ilustrativas; los vídeos resultantes, cuando estén compartidos, se pueden consultar en la galería externa enlazada más abajo.

<div class="artifact-gallery">
  <figure>
    <a href="{{ '/assets/img/infografias-flow/sistema-respiratorio.png' | relative_url }}"><img src="{{ '/assets/img/infografias-flow/sistema-respiratorio.png' | relative_url }}" alt="Infografía de Primaria sobre el sistema respiratorio" loading="lazy" style="max-height:480px;object-fit:contain"></a>
    <figcaption><strong>Primaria:</strong> sistema respiratorio (3.º). Nariz, tráquea, pulmones e inspiración/espiración.</figcaption>
  </figure>
  <figure>
    <a href="{{ '/assets/img/infografias-flow/ciudad-sostenible.png' | relative_url }}"><img src="{{ '/assets/img/infografias-flow/ciudad-sostenible.png' | relative_url }}" alt="Infografía de ciudad sostenible para Primaria" loading="lazy" style="max-height:480px;object-fit:contain"></a>
    <figcaption><strong>Primaria:</strong> ciudad sostenible con edificios, energía limpia, transporte, parques, residuos y decisiones.</figcaption>
  </figure>
  <figure>
    <a href="{{ '/assets/img/infografias-flow/ciclo-camiseta.png' | relative_url }}"><img src="{{ '/assets/img/infografias-flow/ciclo-camiseta.png' | relative_url }}" alt="Infografía del ciclo de vida de una camiseta para FP" loading="lazy" style="max-height:480px;object-fit:contain"></a>
    <figcaption><strong>FP textil:</strong> fibra → hilado → tejido → confección → uso → fin de vida. Evita presentar un tejido como siempre más sostenible.</figcaption>
  </figure>
  <figure>
    <a href="{{ '/assets/img/infografias-flow/email-marketing.png' | relative_url }}"><img src="{{ '/assets/img/infografias-flow/email-marketing.png' | relative_url }}" alt="Infografía de una campaña de email marketing para FP" loading="lazy" style="max-height:480px;object-fit:contain"></a>
    <figcaption><strong>FP Marketing:</strong> planificación, segmentación, diseño, envío, métricas y optimización; incluye protección de datos.</figcaption>
  </figure>
</div>

**Otros temas posibles:** ciclo del agua; tipos de texto; interpretación de planos; hardware del ordenador; energía fotovoltaica; competencias sociales o técnicas de estudio. El objetivo no es repetir una estética, sino **representar con claridad un contenido concreto**.

## Prompt maestro para animar con Google Flow
{: id="prompt-de-animacion" }

Sube la infografía a Flow como **imagen PNG o JPG**, no como PDF. Sustituye `[NOMBRE DEL SUJETO]` y adapta el movimiento a aquello que representa. El prompt solicita preservar el diseño, pero ningún generador garantiza que los textos permanezcan intactos.

### Prompt completo de animación

```text
Anima esta infografía educativa vertical 9:16 sobre [NOMBRE DEL SUJETO] y conviértela en un vídeo explicativo fluido, profesional y adaptado a [EDAD / ETAPA].

Utiliza la imagen adjunta como referencia principal. Conserva, tanto como sea posible, el sujeto o elemento central, el título, los paneles, los colores, las flechas, los iconos y el encuadre original. No sustituyas elementos ni inventes otros.

Comienza mostrando la infografía completa de frente. Aplica un movimiento de cámara muy suave con un efecto parallax sutil y estable. Anima el sujeto de forma natural y didácticamente correcta: [DESCRIBE EL MOVIMIENTO REAL QUE QUIERES MOSTRAR; POR EJEMPLO, EL AIRE RECORRIENDO LAS VÍAS RESPIRATORIAS, UN AEROGENERADOR GIRANDO O LAS FASES DE UN PROCESO TEXTIL]. Si el sujeto es un ser vivo, utiliza solo movimientos anatómicamente adecuados y discretos. Si es técnico, histórico o educativo —por ejemplo, un ordenador o una campaña de marketing—, anima sus procesos y elementos gráficos: no añadas respiración, aletas, tentáculos ni otros rasgos animales.

Haz aparecer progresivamente los paneles mediante fundidos suaves. Anima las líneas conectoras siguiendo el sentido correcto del proceso y resalta los elementos importantes sin desplazar ni tapar textos. Muestra al final los datos rápidos de la franja inferior mediante una aparición suave. Mantén los gestos de cualquier personaje muy discretos.

Finaliza con la infografía completa visible durante unos instantes. Ritmo pausado, estética educativa limpia, alto contraste y formato vertical 9:16. Evita movimientos bruscos y sobreanimación.

Evita especialmente: deformaciones de letras, fórmulas o números; cambio de palabras; alteraciones anatómicas; movimiento físicamente incorrecto; flechas invertidas; personajes adicionales; objetos aleatorios; parpadeos; cambios de escena; zoom excesivo; baja calidad y textos ilegibles.
```

## Versiones breves
{: id="versiones-breves" }

### Prompt breve para crear la infografía

```text
Crea una infografía educativa vertical 9:16 sobre [TEMA], para [CURSO Y ETAPA] y la materia [MATERIA]. Debe ayudar a comprender [OBJETIVO], incluir 4-6 paneles breves, un esquema visual central, líneas conectoras correctas, alto contraste y textos legibles en [IDIOMA]. Usa un estilo [ESTILO] y no inventes datos. Prepárala para revisarla y animarla después.
```

### Prompt breve para animarla

```text
Anima la infografía adjunta sobre [NOMBRE DEL SUJETO] en vídeo vertical 9:16. Mantén diseño, palabras, colores y contenido. Usa cámara lenta, parallax sutil y movimiento correcto de [ELEMENTO O PROCESO]. Revela paneles, líneas y datos rápidos progresivamente; termina con el póster completo. Evita deformaciones, rasgos impropios, efectos bruscos y objetos nuevos.
```

## Ejemplo: mariposa
{: id="ejemplo-mariposa" }

En este caso, sustituimos `[NOMBRE DEL SUJETO]` por **mariposa** y concretamos únicamente su movimiento natural, sin repetir el prompt completo:

```text
Anima esta infografía vertical 9:16 sobre una mariposa. Conserva su posición, anatomía, colores, título y paneles. Haz que bata las alas muy suavemente y que las antenas se muevan de forma natural, sin despegarla del lugar que ocupa ni deformarla. Resalta brevemente las líneas de conexión con los paneles y añade un acercamiento de cámara pausado. Termina mostrando el póster completo y legible. No inventes estructuras anatómicas ni cambies el texto.
```

### Ejemplo ya adaptado: ciclo de vida de una camiseta (FP)

```text
Anima esta infografía sobre el ciclo de vida de una camiseta, vertical 9:16. Respeta las seis fases y su orden: obtención de fibras, hilado, tejido, confección, uso y fin de vida. Ilustra cada fase con movimiento sutil: giro lento de bobinas, movimiento de hilo y tejido, puntadas de máquina de coser y resaltado del recorrido entre etapas. Mantén las etiquetas y los textos lo más estables posible. No cambies el tipo de fibra ni muestres que todo residuo textil se recicla automáticamente. Termina con el póster completo.
```

### Ejemplo ya adaptado: campaña de email marketing (FP)

```text
Anima esta infografía sobre una campaña de email marketing, vertical 9:16. Muestra un recorrido visual ordenado por planificación, segmentación, diseño del correo, envío, seguimiento y optimización. Añade movimientos discretos al sobre, la pantalla, el gráfico y las flechas entre fases. Resalta las métricas de apertura, clics y conversión sin inventar cifras ni resultados. Conserva la tipografía y la distribución originales todo lo posible. Finaliza con el póster completo y legible.
```

> **No confundir:** un vídeo animado es un recurso audiovisual. Una **infografía interactiva** requiere controles reales (clics, preguntas, decisiones); para crearla puedes utilizar Gemini Canvas, Claude Artifacts u otras herramientas del laboratorio de aplicaciones interactivas.

## Google Flow paso a paso
{: id="tutorial-flow" }

Abre [Google Flow](https://labs.google/fx/tools/flow). La interfaz, los modelos y las opciones de pago pueden variar según la cuenta.

**Manual descargable con capturas:** [PDF]({{ '/assets/docs/manual-google-flow-infografias.pdf' | relative_url }}) · [Word editable]({{ '/assets/docs/manual-google-flow-infografias.docx' | relative_url }}). El tutorial de esta página reúne la versión organizada para el Bloque 3.

### Acceder y crear un proyecto

Accede a Google Flow y selecciona **«+ Nuevo proyecto»**.

![Captura anotada: creación de un proyecto en Google Flow]({{ '/assets/img/infografias-flow/01-crear-proyecto.png' | relative_url }})

### Subir la infografía e introducir el prompt

Arrastra el **PNG/JPG** al proyecto. Pega el prompt de animación (completo o breve), adaptado al tema. Envía la solicitud cuando hayas revisado la configuración.

![Captura anotada: imagen cargada y prompt]({{ '/assets/img/infografias-flow/02-subir-prompt.png' | relative_url }})

### Abrir los ajustes y configurar antes de generar

Abre los ajustes del proyecto, que en las capturas aparecen como **«Configuración del agente»**. Selecciona:

- **Confirmar antes de generar: Siempre**, si aparece esta opción, para evitar generar sin tu autorización.
- **Formato de vídeo: 9:16**, adecuado a la infografía vertical.
- **Cantidad de vídeos: x1**, para revisar una prueba antes de pedir más.
- **Modelo:** elige entre las opciones que muestre tu cuenta; comprueba coste y disponibilidad antes de confirmar.
- **Guardar** la configuración.

![Captura anotada: ajustes del agente y formato]({{ '/assets/img/infografias-flow/03-ajustes.png' | relative_url }})

![Captura anotada: modelos de vídeo]({{ '/assets/img/infografias-flow/04-modelos.png' | relative_url }})

### Generar, revisar, descargar y compartir

Genera una sola prueba. Al terminar, reproduce el vídeo y revisa los movimientos, los textos y las posibles deformaciones. Usa el menú **Descargar** para escoger la calidad disponible. En la captura de la demostración, **720p — Tamaño original** está disponible sin coste adicional y **270p** figura como GIF animado; 1080p y 4K aparecen asociados a una mejora de plan.

![Captura: opciones de descarga, 720p y mejoras de resolución]({{ '/assets/img/infografias-flow/05-descargar.png' | relative_url }})

Antes de compartir el archivo descargado o su enlace con la audiencia prevista, comprueba la exactitud del movimiento y la legibilidad. Si las letras se deforman, genera una secuencia centrada en el dibujo y añade los títulos en un editor de vídeo.

### Créditos y funciones de pago

Durante la demostración se observaron **50 créditos diarios** en la cuenta utilizada. **No es un derecho universal ni una cantidad garantizada para todas las cuentas**: los créditos, los modelos, las limitaciones y las condiciones de renovación pueden variar según el plan y la cuenta. Comienza con una sola generación y revisa el consumo antes de continuar.

La opción **«Crear herramienta»** puede requerir un plan de pago. **No la necesitas** para hacer esta práctica: basta con crear el proyecto, subir la imagen y usar los dos prompts. No compres una suscripción para completar el laboratorio.

### Nota sobre Copilot: trabajar con PDF en la práctica documentada

En el procedimiento concreto que se siguió con **Copilot**, se preparó la infografía como archivo **PDF**, mediante *Imprimir → Guardar como PDF*, para adjuntarla como documento. **No se debe generalizar** esta indicación a todas las funciones de Copilot, que pueden admitir JPG y PNG. Para **Google Flow**, en cambio, partimos de la **imagen PNG/JPG**.

### Revisión pedagógica antes de utilizar el recurso

Antes de llevar la infografía o el vídeo al aula, verifica:

- la exactitud de conceptos, etiquetas, textos y cifras;
- la corrección anatómica, científica, histórica o técnica;
- la adecuación del vocabulario y del contenido a la edad;
- la legibilidad, el contraste y la accesibilidad;
- la ausencia de datos personales del alumnado;
- las posibles deformaciones introducidas durante la animación.

Recuerda que un vídeo animado **no equivale a una aplicación interactiva**: aunque simule movimiento o destaque paneles, no incorpora botones funcionales ni permite tomar decisiones.

## Galería de ejemplos: de la infografía al vídeo
{: id="galeria-y-actividad" }

**[Abrir carpeta compartida con infografías y vídeos de ejemplo](https://drive.google.com/drive/folders/1P2TQxmyKvDVaw5g77_0qg911KCRfD3-V?usp=drive_link)**. Accede con los permisos disponibles; comprueba que los archivos están publicados para la audiencia prevista. También puedes consultar las imágenes de ejemplo de esta página.

### Reto docente · Crea, revisa, anima y justifica

- Elige un tema de tu especialidad y un objetivo curricular concreto.
- Copia el **prompt maestro**, sustituyendo los campos entre corchetes.
- Revisa la imagen y corrige al menos un aspecto relevante (exactitud, legibilidad, secuencia o accesibilidad).
- Adapta el **prompt de animación** al movimiento real que se pretende explicar.
- Si tienes créditos disponibles, genera un vídeo de prueba; si no, entrega un guion de animación sin coste.
- Comprueba el resultado y explica **qué mejora aporta el movimiento al aprendizaje** y qué limitaciones presenta.

**Evidencias:** prompt de imagen, infografía revisada, prompt de animación, vídeo o guion alternativo y reflexión breve. Trabaja solo con materiales propios, públicos o autorizados y sin datos personales del alumnado.

[← Volver al Bloque 3]({{ '/bloque3.html' | relative_url }})
