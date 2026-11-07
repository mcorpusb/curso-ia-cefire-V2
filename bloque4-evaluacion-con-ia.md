---
layout: page
title: "Evaluación con IA y Aules"
parent: "Bloque 4: Evaluación y Personalización"
nav_order: 2
---

# Evaluación con IA: instrumentos, feedback y Aules
{: .fs-8 }

La IA **propone**; el profesorado **verifica, adapta y evalúa**. Esta guía complementa las actividades [4.1 y 4.2](bloque4.html#actividades-practicas-bloque-4).

## Instrumentos: ¿cuál elegir?

| Instrumento | Qué permite observar | Ejemplo |
|---|---|---|
| Rúbrica analítica | Calidad de dimensiones diferentes | Exposición oral: precisión, estructura y comunicación |
| Lista de cotejo | Cumplimiento de acciones observables | Práctica de laboratorio: verificar pasos |
| Autoevaluación | Conciencia del proceso y objetivos | ¿Qué cambié después del primer borrador? |
| Cuestionario | Comprensión y detección de errores | Preguntas con distractores y feedback |

**Buena práctica:** pegar el criterio oficial como fuente, no pedir que la IA lo invente; revisar descriptores para que no penalicen aspectos ajenos al objetivo evaluado.

## Retroalimentación que ayuda a mejorar

Pide siempre: **fortaleza concreta → mejora prioritaria → siguiente acción realizable**. Ejemplo de prompt:

```text
Actúa como apoyo a la evaluación formativa de [ETAPA/MATERIA].
Criterio oficial (aportado por mí): [..].
Respuesta ficticia o totalmente anonimizada: [..].
No asignas la nota final. Indica dos aciertos observables,
un aspecto que mejorar y el siguiente paso específico.
Distingue lo que muestra la respuesta de lo que supones.
Si faltan datos, indícalo. Tono respetuoso y concreto.
```

## Tutorial: compartir una evaluación interactiva en Aules (Moodle)

Antes de publicar, prueba la aplicación sin iniciar sesión, desde una cuenta de prueba apropiada o vista de estudiante cuando esté disponible. Comprueba teclados, móvil, dependencias externas, enlaces, instrucciones y permisos.

### Método A · Enlace externo (opción habitual y sencilla)

1. Exporta o publica la actividad en una dirección HTTPS accesible al alumnado (p. ej., GitHub Pages si el recurso puede ser público).
2. Abre tu curso de Aules y activa la edición.
3. Añade una actividad o recurso del tipo **URL**; escribe el título, la URL y una explicación de objetivos.
4. Configura la visualización disponible y guarda.
5. Comprueba desde la perspectiva del alumnado que abre sin pedir cuentas no autorizadas.

**Limitación:** un recurso URL por sí solo no registra automáticamente intentos o calificaciones en Aules.

### Método B · Incrustación (si la instalación la admite)

1. En Aules, abre un recurso **Página** o editor HTML disponible.
2. Si el editor y la política institucional permiten HTML incrustado, prueba este código con **una URL propia y permitida**.
3. Guarda; verifica que el sistema no haya eliminado la etiqueta y que el servidor externo admita aparecer en iframe.

```html
<iframe
  src="https://EJEMPLO-DE-TU-SITIO/actividad/"
  title="Actividad interactiva de repaso"
  width="100%" height="620"
  loading="lazy"
  style="border:1px solid #ccc"
  allowfullscreen>
</iframe>
```

**Si aparece vacío o desaparece el iframe:** el editor de Moodle puede filtrar HTML; el sitio externo puede impedir embeber mediante cabeceras de seguridad; la política del centro puede restringirlo. **Usa el método A**, no intentes eludir las restricciones.

### Método C · HTML descargado (solo si funciona en tu Aules)

1. Comprueba que tienes `index.html` y todos los recursos necesarios en rutas relativas (CSS, JavaScript, imágenes).
2. Prueba el recurso localmente, de preferencia en un servidor local de pruebas y sin datos de alumnado.
3. Sube los archivos como recurso **Archivo** o paquete admitido por la instalación de Moodle; si se permite, identifica el archivo principal.
4. Prueba si se muestra o se descarga y si la ejecución de JavaScript está habilitada.
5. Si el HTML se descarga pero no se ejecuta, usa un hosting permitido y el método A.

**Atención:** no todas las instalaciones permiten ejecutar HTML/JavaScript subido. Para registrar resultados en el libro de calificaciones, considera actividades nativas **Cuestionario**, **H5P** o paquetes compatibles **SCORM** si están habilitados y son adecuados; no atribuyas esta capacidad a un iframe o HTML sin integración real. La disponibilidad concreta en Aules depende de la configuración y permisos.

### Miniaplicación de referencia (un archivo)

Copia este código en `index.html`. No guarda respuestas, no envía datos y funciona sin librerías externas:

```html
<!doctype html>
<html lang="es"><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Repaso de ciencias</title>
<main>
<h1>Repaso: fotosíntesis</h1>
<p>¿Qué gas absorben las plantas durante la fotosíntesis?</p>
<button type="button" onclick="check(false)">Oxígeno</button>
<button type="button" onclick="check(true)">Dióxido de carbono</button>
<button type="button" onclick="check(false)">Nitrógeno</button>
<p id="feedback" role="status" aria-live="polite"></p>
<button type="button" onclick="document.getElementById('feedback').textContent=''">Reintentar</button>
</main>
<script>
function check(ok) {
  document.getElementById('feedback').textContent = ok
    ? 'Correcto: la planta capta CO₂ y utiliza luz para producir materia orgánica.'
    : 'Revisa: piensa qué gas necesita la planta para elaborar azúcares. Inténtalo de nuevo.';
}
</script>
</html>
```

Este código es solo un ejemplo didáctico de una pregunta; para la Actividad 4.2 se pide un recurso con varios retos y comprobaciones.

## ¿No entiendes la letra? IA para leer respuestas manuscritas ficticias

La interpretación de letra manuscrita **no es infalible**. Separa rigurosamente tres operaciones: **transcribir** lo visible, **marcar dudas** y **proponer feedback** con criterios aportados. La IA puede omitir negaciones, confundir términos o completar frases de manera plausible pero falsa. **No atribuyas un conocimiento que no puedas leer**.

En este curso usamos únicamente **dos ejemplos sintéticos** (sin alumnado real). Los archivos de referencia se añadirán al repositorio cuando se valide su disponibilidad y su correspondencia con el texto. Mientras tanto, usa las respuestas ficticias siguientes como casos de práctica:

### Caso A · Ciencias Naturales (Primaria / ESO)

**Pregunta:** Explica qué es la fotosíntesis y por qué es importante.

**Texto de referencia del caso ficticio:** «La fotosíntesis es un proceso que hacen las plantas con la luz del sol, el agua y el dióxido de carbono. Con eso fabrican su alimento, que creo que es azúcar, y también sueltan oxígeno al aire, que es muy importante para que podamos respirar los animales y las personas».

**Posibles dudas:** grafía de «hacen»; correcciones tachadas; diferenciar lo que pone de una formulación científicamente más precisa.

**Revisión docente:** la explicación es globalmente correcta aunque simplificada; conviene matizar que la fotosíntesis produce materia orgánica y libera oxígeno, y que no debe evaluarse como si el alumno hubiese escrito todos los términos especializados.

### Caso B · Tecnología (FP / Bachillerato)

**Pregunta:** Explica un circuito en serie; cita una ventaja y un inconveniente.

**Texto de referencia del caso ficticio:** «Un circuito en serie es aquel en el que los componentes están conectados uno detrás de otro, formando un único camino para la corriente. Al ser un solo recorrido, la misma corriente pasa por todos los elementos. Como ventaja, es sencillo de montar y requiere menos cables. Como inconveniente, si un componente se estropea o se interrumpe, deja de funcionar todo el circuito. También, la intensidad puede disminuir si se añaden más elementos».

**Revisión docente:** es correcta la descripción del recorrido y la corriente; el último comentario depende de condiciones como mantener tensión y añadir resistencia total. No convertir tachaduras ambiguas en afirmaciones definitivas.

**Prompt para practicar con cada imagen:**

```text
Te adjunto una respuesta manuscrita completamente ficticia.
1. Transcribe literalmente la respuesta conservando errores y tachaduras visibles.
2. Marca [ilegible] lo que no puedas descifrar y [dudoso: opción A / B]
   cuando haya varias lecturas. No completes por contexto sin advertirlo.
3. Distingue transcripción literal de interpretación probable.
4. Compara solo las partes legibles con esta pauta: [CRITERIO OFICIAL].
5. Propón fortalezas, dudas para el docente y un siguiente paso formativo.
6. No asignes una calificación definitiva ni infieras conocimientos ausentes.
```

**Privacidad:** eliminar el nombre del encabezado no siempre anonimiza el examen: la propia letra, el contexto, anotaciones o metadatos pueden permitir reidentificación. Para tratar trabajos reales, comprueba la autorización institucional y minimiza los datos. En este curso se utilizarán materiales totalmente ficticios.

## Para comprobar antes de compartir

- ¿El recurso es accesible y funciona sin cuentas no previstas?
- ¿Explica por qué una respuesta falla y permite volver a intentarlo?
- ¿Se han comprobado científicamente los resultados y los criterios?
- ¿Has verificado las restricciones reales de tu Aules?
- ¿Evitas guardar datos personales en aplicaciones educativas experimentales?

**Referencias técnicas:** [Moodle: recursos URL](https://docs.moodle.org/en/URL_resource), [Moodle: archivo](https://docs.moodle.org/en/File_resource), [Moodle: H5P](https://docs.moodle.org/en/H5P) y [CAST DUA 3.0](https://udlguidelines.cast.org/).
