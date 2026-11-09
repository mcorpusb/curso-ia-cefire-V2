---
layout: page
title: "Skill en Claude · Taller guiado"
parent: "Agentes y asistentes docentes"
grand_parent: "Bloque 4: Evaluación y Personalización"
nav_order: 3
---

[← Volver al índice de asistentes](bloque4-agentes-ia.html) · [Ir al Bloque 4](bloque4.html)

---

## Taller guiado · Crea tu primera Skill en Claude
{: id="taller-skill-claude" }

**Objetivo:** crear y probar una habilidad de Claude para generar **cuestionarios GIFT para Moodle/Aules**, utilizando los mismos materiales que en la Skill de Gemini. Compararemos **un archivo de instrucciones \`SKILL.md\`** con la creación manual desde Gemini, sin confundir una Skill con una conversación que simplemente contiene un prompt.

**Disponibilidad (consulta realizada en noviembre de 2026):** Anthropic indica que las Skills están disponibles en planes **Free, Pro, Max, Ultra, Team y Enterprise**, siempre que estén habilitadas las capacidades necesarias de ejecución de código y creación de archivos. En cuentas organizativas, la administración puede restringir su creación. [Usar habilidades en Claude — documentación oficial](https://support.claude.com/es/articles/12512180-usar-habilidades-en-claude).

### Paso 1 · Habilitar las Skills

- Abre [Claude](https://claude.ai/) e inicia sesión.
- En una cuenta personal, entra en **Configuración → Capacidades** y comprueba si está habilitada la opción **Ejecución de código y creación de archivos** (o «Crear y editar archivos», según la interfaz).
- Después, abre **Personalizar → Habilidades**. Puedes ver habilidades integradas y, si tu cuenta lo permite, añadir habilidades personalizadas. En cuentas Team/Enterprise, puede intervenir una política de organización.

### Paso 2 · ¿Qué contiene una Skill de Claude?

Las Skills personalizadas de Claude pueden estar formadas por una carpeta que contiene un archivo **\`SKILL.md\`** con metadatos YAML \`name\` y \`description\`, además de instrucciones. Se puede empaquetar la carpeta como un archivo **ZIP** para subirlo. No es necesario escribir código para una habilidad sencilla. [Cómo crear habilidades personalizadas — Anthropic](https://support.claude.com/es/articles/12512198-como-crear-habilidades-personalizadas).

Estructura del ejemplo:

~~~text
generador-gift-aules.zip
└── generador-gift-aules/
    └── SKILL.md
~~~

**Archivo de ejemplo disponible en el repositorio:** [Ver SKILL.md «generador-gift-aules»]({{ '/assets/docs/bloque4/claude/generador-gift-aules/SKILL.md' | relative_url }}). También puedes consultar su [versión de texto en GitHub](https://github.com/mcorpusb/curso-ia-cefire-V2/blob/main/assets/docs/bloque4/claude/generador-gift-aules/SKILL.md) y utilizarla como plantilla.

### Paso 3 · Crear el archivo \`SKILL.md\`

Crea una carpeta llamada \`generador-gift-aules\`, dentro un documento de **texto plano** llamado exactamente \`SKILL.md\`, y pega la plantilla del enlace anterior. El comienzo debe incluir metadatos como estos:

~~~yaml
---
name: generador-gift-aules
description: Genera bancos de preguntas GIFT para Aules desde fuentes docentes, con dificultad configurable, sin numeración y respuestas verificadas.
---
~~~

El resto del archivo explica **cuándo** activar la Skill, qué **fuentes** puede utilizar, cómo crear preguntas de **verdadero/falso** o **cuatro opciones con una correcta**, cómo evitar la **numeración secuencial** y cómo intentar generar un **.txt UTF-8**. La descripción es importante porque Claude la utiliza para decidir cuándo recurrir a la habilidad.

**Alternativa guiada:** si tu interfaz ofrece **«Crear habilidad»** directamente, puedes describir la finalidad en lenguaje natural y pedir que prepare las instrucciones, y revisarlas antes de guardarlas. La ruta de **cargar un ZIP** es reproducible y permite explicar la estructura a todo el profesorado.

### Paso 4 · Empaquetar y cargar

- Comprime la **carpeta completa** \`generador-gift-aules\` en un archivo **\`generador-gift-aules.zip\`**. Comprueba que al abrir el ZIP aparece **la carpeta y dentro \`SKILL.md\`**, no el fichero suelto en la raíz del ZIP.
- Abre **Personalizar → Habilidades → + → Crear habilidad → Cargar una habilidad**, si aparecen estas opciones.
- Selecciona el ZIP y comprueba que la Skill figure en tu lista y esté **activada**.

**No subas** una Skill descargada de otra persona sin revisar antes su contenido y sus posibles scripts. El ejemplo de este taller utiliza únicamente instrucciones de texto.

### Paso 5 · Primera prueba: apuntes de Seguridad Informática

Adjunta un documento docente **sin datos personales** y escribe:

~~~text
Utiliza mi habilidad generador-gift-aules y el documento
adjunto. Genera un banco de 10 preguntas para 2.º de SMR,
Seguridad Informática, sobre seguridad pasiva y copias
de seguridad: 5 verdadero/falso y 5 de cuatro opciones
con una sola correcta. Dificultad alta, castellano.
Entrégame un .txt UTF-8 con sintaxis GIFT, sin numeración
en los nombres de preguntas ni en las respuestas.
~~~

Comprueba que Claude **utiliza la Skill**, que pregunta por las fuentes si no puede acceder a ellas y que entrega **exactamente 10 preguntas**. Para la segunda prueba, cambia solo la **dificultad** (por ejemplo, de alta a baja) y evalúa si los enunciados realmente se simplifican.

### Resultado real de la primera prueba · Claude genera el banco

En la prueba con material docente del tema **«Seguridad pasiva: copias de seguridad y recuperación de datos»**, se obtuvo un bloque GIFT con **10 preguntas**: **5 verdadero/falso y 5 de opción múltiple**, cada una con **cuatro opciones y exactamente una correcta**. Los identificadores son descriptivos y **sin numeración**; la respuesta correcta de opción múltiple aparece en posiciones variadas.

Fragmento representativo del resultado (el banco completo debe validarse en Aules):

~~~text
::VF_RestauracionDiferencial::Para restaurar un sistema a partir de copias diferenciales basta con disponer de la última copia completa y de la última copia diferencial.{T####Correcto. La copia diferencial guarda lo modificado desde la última completa, por lo que solo se necesitan esas dos copias (apartado 3.2).}

::OM_RestaurarIncrementales::Se hace una copia completa cada viernes y una incremental cada día. Si el sistema de ficheros falla, ¿qué copias hay que recuperar?{
~Solo la copia completa y la última incremental
=La última copia completa y todas las incrementales realizadas hasta la fecha del fallo
~Únicamente la última copia incremental
~La última copia completa y solo la primera incremental posterior
####En las incrementales cada copia depende de la anterior, por lo que hay que restaurar la completa más todas las incrementales hasta el fallo (apartado 3.2).
}
~~~

**Detalle técnico revisado:** el separador \`####\` introduce **retroalimentación general** en GIFT, también en las preguntas verdadero/falso; es distinto del separador \`#\` utilizado para comentarios de respuestas concretas. La sintaxis está documentada por [Moodle](https://docs.moodle.org/en/GIFT_format). La revisión de la estructura **no sustituye** la importación efectiva ni la verificación de cada respuesta frente al material original.

**Resultado comparado hasta ahora:** Claude ha respetado la cantidad, los dos tipos de preguntas, la ausencia de numeración y la variación de la posición correcta en este ensayo. En la primera versión de Gemini detectamos problemas de exportación \`.md\` y numeración; tras mejorar sus instrucciones, Gemini también generó un \`.txt\` estructurado. No es una comparación de calidad definitiva: faltan las pruebas de importación y revisión de contenido.

### Paso 6 · Validar en Aules y comparar con Gemini

- Importa el archivo de prueba desde **Banco de preguntas → Importar → GIFT** en una categoría de ensayo de Aules.
- Verifica cantidad, cuatro opciones y una correcta en cada pregunta de opción múltiple, nombres únicos sin numeración, retroalimentación y ausencia de preguntas ajenas a las fuentes.
- Activa **barajar preguntas** y **barajar respuestas** en el cuestionario de Aules si deseas aleatorización: retirar números de los identificadores no activa por sí solo estas opciones.
- Compara Claude con la Skill \`generador-gift-aules\` creada en Gemini: **¿qué herramienta respetó mejor los tipos de preguntas, el formato .txt, las fuentes y la ausencia de numeración?**

**Qué entregar como evidencia en Aules:** captura de la Skill creada (sin datos personales), archivo de prueba o fragmento de preguntas, resultado de la importación y una mejora que hayas realizado tras revisar el banco.

**Importante:** la Skill de Claude queda aquí **documentada y preparada para probar**, pero todavía **no hemos comprobado en una cuenta de Claude concreta** que se cargue ni que su salida se importe correctamente. El éxito de la prueba deberá registrarse con capturas reales, igual que hicimos con Gemini.

---

---

[← Ver todos los talleres de agentes y Skills](bloque4-agentes-ia.html)
