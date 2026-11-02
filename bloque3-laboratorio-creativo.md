---
layout: page
title: "Laboratorio creativo · Aplicaciones y recursos con IA"
parent: "Bloque 3: Generación Multimodal"
nav_order: 11
---

# Laboratorio creativo · Aplicaciones y recursos con IA

Del **prompt al recurso educativo**: ejemplos elaborados durante la formación y un procedimiento para reproducirlos. Elige una propuesta, comprueba cómo funciona y adapta su prompt a tu materia.

<div class="artifact-hero" markdown="1">

**Itinerario de trabajo:** 1. Ver el ejemplo → 2. Leer cómo se creó → 3. Copiar el prompt → 4. Probar y corregir → 5. Llevarlo al aula.

[Ir a los ejemplos](#ejemplos){: .btn .btn-primary } [Consultar nuevas ideas](#mas-ideas){: .btn }

</div>

## Ejemplos creados
{: #ejemplos }

| Ejemplo | Etapa | Herramienta |
|:--|:--|:--|
| [El dragón de las emociones · Cuento](#cuento-dragon) | Infantil | Gemini Storybook (beta) |
| [El dragón de las emociones · Juego](#juego-dragon) | Infantil | Gemini Canvas |
| [CyberEscape · Phishing](#cyberescape) | FP | Aplicación HTML generada con IA |
| [MathLab · Funciones y derivadas](#mathlab) | ESO/Bachillerato | Gemini Canvas |
| [HistoriaLab · Fuentes históricas](#historialab) | ESO | Gemini Canvas |
| [FísicaLab · Fuerzas y movimiento](#fisicalab) | ESO/Bachillerato | Gemini Canvas |

> **Antes de empezar:** usa contenido ficticio o propio, sin datos identificativos del alumnado. Comprueba exactitud, derechos, accesibilidad y permisos de acceso. Un recurso generado no equivale a un recurso validado.

---

## 1. El dragón de las emociones · Cuento ilustrado
{: #cuento-dragon }

**Infantil · 5 años · Gemini → Gemas → Storybook (beta).** A partir de un dibujo ficticio de un dragón verde con mochila roja, se creó un cuento sobre alegría, tristeza, miedo y calma.

[Abrir el cuento compartido en Gemini](https://gemini.google.com/share/d/1lg5eNZrUPCBLuq2lIuK30A2Py0L_fpCD?usp=sharing). Storybook permite exportarlo como PDF si la opción está disponible. El archivo PDF no está alojado en este repositorio.

**Cómo se creó**

1. Entra en [Gemini](https://gemini.google.com/) con una cuenta que tenga acceso a la gema **Storybook (beta)**.
2. Adjunta el dibujo del personaje y pega el prompt desplegable.
3. Genera el cuento, revisa los rasgos del dragón en todas las escenas y la adecuación de la narración a Infantil.
4. Descarga el PDF, si aparece esa opción, y ábrelo para comprobar las páginas.

<details markdown="1">
<summary><strong>Ver y copiar el prompt utilizado</strong></summary>

```text
Crea un cuento infantil ilustrado titulado «El dragón de las emociones» para niños y niñas de 5 años. Utiliza la imagen adjunta como referencia y mantén exactamente los rasgos del protagonista: cuerpo verde con pequeñas manchas, barriga amarilla, ojos grandes, cuernos claros, alas amarillas, sonrisa amable y mochila roja. En su primer día de colegio descubre alegría al conocer amigos, tristeza al perder su juguete, miedo al escuchar un ruido desconocido y calma cuando respira despacio y pide ayuda. Crea seis escenas con ilustraciones coloridas y textos breves, expresiones faciales claras y castellano de España. Termina con «¿Cómo te sientes tú hoy?» e incluye una actividad oral para identificar emociones.
```

</details>

**Comprobación docente:** ¿Se distingue cada emoción por la escena y la expresión? ¿Mantiene el dragón la mochila roja?

---

## 2. El dragón de las emociones · Juego interactivo
{: #juego-dragon }

**Infantil · 5 años · Gemini Canvas.** Una segunda actividad con el mismo personaje: elegir emociones, recibir pistas y acompañar una respiración tranquila.

**Resultado:** juego creado durante el taller. Pendiente de incorporar aquí un enlace público verificado o el archivo exportado.

**Cómo se creó**

1. Abre Gemini y selecciona **Canvas**.
2. Adjunta la ilustración y pega el prompt para construir una aplicación funcional.
3. En vista previa, prueba cada emoción, las respuestas incorrectas y los botones de reinicio.
4. Publica o exporta el resultado tras comprobarlo.

<details markdown="1">
<summary><strong>Ver y copiar el prompt utilizado</strong></summary>

```text
Actúa como desarrollador de aplicaciones educativas para Educación Infantil. Crea la aplicación web jugable «El dragón de las emociones» para 5 años con la imagen adjunta del dragón verde y mochila roja. Incluye pantalla inicial, escenas de alegría (nuevo amigo), tristeza (juguete perdido), miedo (ruido y pedir ayuda), calma (respiración animada) y cierre. Para cada escena ofrece tres opciones de emoción, pista amable tras el error, segundo intento y explicación. Diseño ilustrado, botones grandes, apto para táctil, texto breve en castellano, sin datos personales, cronómetros ni penalizaciones. Todos los controles deben funcionar; no generes una presentación estática.
```

</details>

**Comprobación docente:** Las pistas deben ayudar a identificar una emoción sin penalizar al niño; la respiración guiada debe ser opcional.

---

## 3. CyberEscape · Operación Anti-Phishing
{: #cyberescape }

**FP · 2.º SMR · Seguridad Informática.** Un escape room con tres pruebas: remitente, enlace sospechoso y respuesta segura.

[Jugar a CyberEscape]({{ '/escape-room-phishing-smr.html' | relative_url }})

**Cómo se creó**

1. Crea un proyecto interactivo en Gemini Canvas u otra herramienta capaz de generar HTML funcional.
2. Pega el prompt de las tres pruebas y genera una primera versión.
3. Comprueba rutas correctas e incorrectas; revisa las explicaciones de phishing, MFA y autenticación de correo.
4. Exporta el HTML revisado y publícalo en el repositorio.

<details markdown="1">
<summary><strong>Ver y copiar el prompt utilizado</strong></summary>

```text
Actúa como desarrollador de juegos educativos y especialista en ciberseguridad. Crea un ESCAPE ROOM INTERACTIVO para 2.º de SMR, Seguridad Informática, titulado «Misión Phishing: salva la cuenta del instituto». Una alumna recibe un correo que amenaza con bloquear la cuenta en diez minutos. Prueba 1: detectar un dominio de remitente distinto al oficial. Prueba 2: elegir entre tres URL ficticias cuál coincide con el dominio oficial e identificar riesgos. Prueba 3: escoger entre pulsar el enlace, responder con la contraseña o acceder al portal mediante marcador conocido y comunicar el correo. Diseño de misterio tecnológico, tres pruebas consecutivas con validación real, pistas, barra de progreso, botones grandes, efectos discretos, explicación final «¡Misión completada!», reinicio, móvil/tablet/ordenador, sin registro ni datos. No utilices enlaces reales de phishing. Genera una aplicación funcional, no una presentación.
```

</details>

**Comprobación docente:** Ninguna respuesta incorrecta debe desbloquear el siguiente nivel. El candado HTTPS no certifica que una web sea legítima.

---

## 4. MathLab · Funciones y derivadas
{: #mathlab }

**Matemáticas · 4.º ESO y 1.º Bachillerato · Gemini Canvas.** Laboratorio para experimentar con funciones, pendiente, tangentes, cociente incremental y retos.

[Abrir MathLab en Google Sites](https://sites.google.com/iessanvicente.com/mathlabdescubrelasfuncionesyla) (comprobar permisos de acceso).

**Cómo se creó**

1. En Gemini, selecciona **Canvas** y pega el prompt de MathLab.
2. Experimenta con puntos móviles y deslizadores; comprueba que las gráficas cambian realmente.
3. Verifica varios casos matemáticos y corrige los errores.
4. Exporta o publica la aplicación y prueba el enlace desde otra cuenta.

<details markdown="1">
<summary><strong>Ver y copiar el prompt utilizado</strong></summary>

```text
Actúa como profesor de Matemáticas de Secundaria y desarrollador. Crea una app web real «MathLab: descubre las funciones y las derivadas» para 4.º ESO y 1.º Bachillerato. Diseño moderno, accesible y responsive. Laboratorio 1: gráficas dinámicas de f(x)=mx+b, ax²+bx+c, x³ y sin(x) con deslizadores. Laboratorio 2: dos puntos móviles y triángulo de pendiente m=Δy/Δx. Laboratorio 3: parábola x², punto móvil, tangente y pendiente f'(x)=2x, con gráfica de derivada en otro panel. Laboratorio 4: dos puntos de una secante, parámetro h y cociente [f(x+h)-f(x)]/h; explicar límite, nunca dividir por h=0. Laboratorio 5: seis retos sobre crecimiento, pendiente, parábola, tangente horizontal, derivada en x=3 y velocidad instantánea, con pistas y validación matemática. Gráficas, deslizadores, progreso y reinicios funcionales; sin datos personales. Comprueba que f'(3)=6 y que en x=0 la tangente es horizontal. No generes una maqueta.
```

</details>

**Comprobación docente:** Para f(x)=x², f′(3)=6 y en x=0 la tangente es horizontal. En la captura del laboratorio de pendientes: A(−2,−1), B(2,3), m=1.

---

## 5. HistoriaLab · Detectives de fuentes
{: #historialab }

**Geografía e Historia · 4.º ESO · Gemini Canvas.** Investigar la Revolución Industrial comparando fuentes, perspectivas y acontecimientos.

**Publicación indicada por la autora:** identificador `historialab-detectives-de-fuen…`. Falta la URL completa para enlazarla sin inventar su dirección.

**Cómo se creó**

1. Abre Gemini Canvas y pega el prompt de investigación histórica.
2. Genera cinco retos con tarjetas de fuentes, análisis y cronología.
3. Revisa referencias auténticas y marca todos los testimonios inventados como **recreación didáctica**.
4. Prueba las respuestas, publica y comprueba la URL pública.

<details markdown="1">
<summary><strong>Ver y copiar el prompt utilizado</strong></summary>

```text
Actúa como historiador, profesor de Geografía e Historia y desarrollador. Crea «HistoriaLab: Detectives de fuentes» para 4.º ESO, sobre la Revolución Industrial. Misión: investigar los cambios en la vida y el trabajo infantil. Diseña cinco laboratorios: (1) clasificar fuente primaria, secundaria o recreación mediante seis tarjetas; (2) analizar autor, fecha, público, intención y limitaciones de tres documentos; (3) comparar voces de trabajadora textil, propietario y reformador, marcadas claramente como RECREACIONES DIDÁCTICAS; (4) ordenar procesos de industrialización y Factory Act de 1833 en una línea temporal, evitando fechas inventadas; (5) responder con evidencias si la Factory Act protegió suficientemente a la infancia, mediante tarjetas, plantilla y rúbrica. Distingue citas auténticas, paráfrasis y ficción; verifica fuentes de National Archives y Parlamento británico. Diseño de archivo histórico azul oscuro y pergamino; tarjetas, pistas, validación, reinicio, accesibilidad y guía docente. No finjas evaluación automática semántica de texto libre ni inventes citas. Genera una aplicación jugable.
```

</details>

**Comprobación docente:** Una fuente primaria no es automáticamente fiable. No atribuir citas inventadas a personajes históricos.

---

## 6. FísicaLab · Fuerzas y movimiento
{: #fisicalab }

**Física y Química · 4.º ESO y 1.º Bachillerato · Gemini Canvas.** Simulaciones de fuerza neta, segunda ley de Newton, rozamiento, plano inclinado y caída libre.

[Abrir FísicaLab en Google Sites](https://sites.google.com/iessanvicente.com/fsicalabfuerzasymovimiento/full-page-embed?authuser=1) (puede requerir cuenta autorizada).

**Cómo se creó**

1. Genera FísicaLab con Gemini Canvas utilizando el prompt desplegable.
2. Prueba los controles de masa, fuerza, rozamiento, ángulo y gravedad.
3. Revisa las fórmulas: si aparecen delimitadores LaTeX (`$...$`), pide que se presenten como expresiones legibles.
4. Publica la versión corregida y prueba su funcionamiento fuera del editor.

<details markdown="1">
<summary><strong>Ver y copiar el prompt utilizado</strong></summary>

```text
Actúa como profesor de Física y Química, diseñador de simulaciones y desarrollador web. Crea «FísicaLab · Fuerzas y movimiento» para 4.º ESO y 1.º Bachillerato: interfaz de laboratorio azul oscuro con animaciones calculadas, gráficas y controles reales. Seis laboratorios: (1) empujar una caja, cambiar masa 1–20 kg, fuerza de −100 a 100 N, velocidad inicial y rozamiento, mostrando fuerzas, velocidad y aceleración; (2) segunda ley F_neta=m·a, sliders, tabla y gráficas; (3) rozamiento estático y cinético con umbral μsN y fricción μkN; (4) plano inclinado de 0–60° con mg·senθ, mg·cosθ, normal y rozamiento correcto; (5) caída libre desde reposo con masas distintas, gravedad de Tierra/Luna y v=gt, s=½gt² sin resistencia del aire; (6) seis retos con pistas, respuestas validadas y reinicio. SI, g=9,81 m/s². Integración temporal estable independiente de FPS; no dividir por cero; vectores correctos. Validaciones: 5 kg con fuerza neta 20 N produce 4 m/s²; F_neta=0 produce a=0; sin aire masas distintas caen con igual aceleración. Incluye guía docente, accesibilidad, vista previa funcional y datos ficticios.
```

</details>

**Comprobación docente:** Con 5 kg y 20 N netos, a=4 m/s². Sin resistencia del aire dos objetos con distinta masa tienen la misma aceleración.

---

## Más ideas para adaptar a otras materias
{: #mas-ideas }

Estas propuestas **todavía no son aplicaciones publicadas**. Reutiliza los prompts anteriores cambiando el objetivo, las situaciones y la verificación de respuestas.

| Materia | Propuesta | Qué experimenta el alumnado |
|:--|:--|:--|
| Primaria · Ciencias | **BioLab** | Recorrido de la sangre y funciones del corazón |
| Lengua Castellana · ESO | **LenguaLab** | Análisis sintáctico con pistas |
| EOI · Inglés A2 | **CityQuest** | Indicaciones y diálogos en un mapa |
| FP · Informática | **RedLab** | Red simulada y decisiones de seguridad |

### Plantilla breve para una nueva aplicación

```text
Crea con Gemini Canvas una aplicación web interactiva para [etapa y curso]
sobre [contenido]. Objetivo: [aprendizaje observable].
Incluye tres situaciones con controles reales, preguntas verificables,
pistas tras el error y una explicación final. Añade un botón Reiniciar,
una guía docente, accesibilidad y adaptación a móvil.
Usa datos ficticios y no recopiles información personal.
Comprueba los resultados antes de entregar la vista previa.
```

## Recursos de apoyo

- [Cómics y ejemplos narrados]({{ '/bloque3-comics-ejemplos.html' | relative_url }})
- [Audio: ElevenLabs y Gemini]({{ '/bloque3-audio.html' | relative_url }})
- [Laboratorio de Artifacts]({{ '/bloque3-artifacts.html' | relative_url }})
- [Actividades del Bloque 3]({{ '/bloque3-actividades.html' | relative_url }})

> **Nota editorial:** los prompts de las aplicaciones son versiones organizadas a partir de las instrucciones de trabajo utilizadas durante el curso, no transcripciones verificadas de los historiales de Gemini. Las aplicaciones enlazadas deben probarse en una sesión real antes de reutilizarlas con alumnado.

[← Volver al Bloque 3]({{ '/bloque3.html' | relative_url }})
