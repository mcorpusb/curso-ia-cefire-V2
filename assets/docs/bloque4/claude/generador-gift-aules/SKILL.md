---
name: generador-gift-aules
description: Crea cuestionarios GIFT para Moodle/Aules desde apuntes docentes, con verdadero/falso y cuatro opciones, una correcta, sin numeracion y con dificultad configurable.
---

# Generador de cuestionarios GIFT para Aules

## Cuándo usarla
Utiliza esta Skill cuando el docente quiera crear bancos de preguntas GIFT para Moodle/Aules a partir de fuentes que aporta.

## Fuentes
- Utiliza solamente el material adjunto o el texto realmente accesible. Si menciona un cuaderno que no puedes consultar, solicita sus fuentes. No finjas acceso.
- No inventes información ajena a las fuentes y no uses datos personales del alumnado.

## Configuración
Confirma curso, materia, contenido, número (10 por defecto), dificultad (baja, media, alta, muy alta), modalidad (verdadero/falso, cuatro opciones o mixta), idioma y fuente. Pregunta solo por datos esenciales que falten.

## Preguntas
- Genera exactamente la cantidad solicitada, sin preguntas repetidas ni referencias cruzadas.
- Verdadero/falso: afirmaciones inequívocas con {T} o {F}; equilibra verdaderas y falsas.
- Opción múltiple: exactamente cuatro opciones, una correcta marcada = y tres incorrectas marcadas ~; varía la posición de la respuesta correcta y usa distractores plausibles.
- Mixta: mitad de cada tipo por defecto.
- Incluye retroalimentación breve con sintaxis GIFT válida.
- Dificultad baja: recuerdo; media: comprensión y aplicación; alta: análisis y casos; muy alta: razonamiento complejo basado en fuentes.
- No generes emparejamiento, respuesta corta ni ensayo salvo petición expresa.

## Nombres y sintaxis
- Usa nombres únicos y descriptivos, sin números de orden: ::VF_RestauracionSistema:: o ::OM_CopiasIncrementales::.
- Nunca Q01, T3_17, Pregunta2; no numeres enunciados y no pongas letras A, B, C, D delante de las opciones.
- Escapa caracteres reservados de GIFT y separa las preguntas mediante una línea en blanco.
- Verifica llaves, claves y que solo una respuesta de cada pregunta de opción múltiple es válida.
- Quitar numeración no baraja preguntas: el docente debe activar el barajado dentro de Aules.

## Salida
- Intenta crear y entregar un archivo real .txt UTF-8, con nombre descriptivo y solamente contenido GIFT, sin títulos Markdown o envoltorios de código.
- Si no es posible generar un .txt descargable, dilo claramente y entrega el texto GIFT limpio listo para guardarse como .txt; no sustituyas el archivo por un .md sin advertirlo.
- Fuera del archivo, proporciona un resumen y un solucionario separado; indica las fuentes que sustentan las respuestas cuando sea posible.
- No afirmes que la importación en Aules fue validada sin una prueba real.

## Control final
Comprueba cantidad, nivel, modalidad, respaldo en fuentes, identificadores sin numeración, cuatro opciones y una sola correcta, distintas posiciones de las correctas, sintaxis GIFT y salida .txt si está disponible. La revisión final corresponde al docente.
