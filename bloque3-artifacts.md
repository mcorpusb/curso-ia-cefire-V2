---
layout: page
title: "Artifacts y aplicaciones interactivas con IA"
parent: "Bloque 3: Generación Multimodal"
nav_order: 6
release_at: 2026-05-05T00:00:00+02:00
artifacts_lab: true
---

# Laboratorio de Artifacts: crea aplicaciones interactivas con inteligencia artificial
{: .fs-8 }

De un prompt a una aplicación funcional: Claude Artifacts, Gemini Canvas y Google AI Studio
{: .fs-5 .fw-300 }

<div class="artifact-hero" markdown="1">

La inteligencia artificial no solo genera textos e imágenes: también permite al profesorado construir **laboratorios virtuales, simuladores y aplicaciones educativas interactivas** mediante instrucciones en lenguaje natural. En este laboratorio observarás resultados reales, los compararás y diseñarás un prototipo propio.

<div class="artifact-hero__meta" aria-label="Información del laboratorio">
  <span>⏱️ 90–120 min</span><span>🧪 6 demostraciones</span><span>🎯 Reto final evaluable</span>
</div>

[Empezar por las demostraciones](#galeria){: .btn .btn-primary }
[Ir al reto final](#reto){: .btn }

</div>

> **Privacidad y revisión docente.** Trabaja con contenido ficticio o público. No introduzcas datos personales del alumnado ni información interna del centro. Una aplicación generada puede contener errores conceptuales, de accesibilidad, seguridad o funcionamiento: pruébala antes de utilizarla en el aula.

## En esta página
{: .no_toc .text-delta }

<nav class="artifact-toc" aria-label="Secciones del Laboratorio de Artifacts" markdown="1">

1. [Introducción a Artifacts](#introduccion)
2. [Plataformas y posibilidades](#plataformas)
3. [Cómo escribir un prompt](#prompt)
4. [Galería de demostraciones reales](#galeria)
5. [Caso práctico 1: ROCKET LAB 3D](#caso-rocket)
6. [Caso práctico 2: PC LAB 3D](#caso-pc)
7. [Caso práctico 3: WEB LAB 3D](#caso-web)
8. [Comparativa de plataformas](#comparativa)
9. [Cómo compartir, exportar y publicar](#compartir)
10. [Actividad práctica](#reto)
11. [Evaluación y reflexión final](#evaluacion)

</nav>

## 1. Introducción a Artifacts
{: id="introduccion" }

Un **Artifact** es un resultado editable y ejecutable que la IA presenta junto a la conversación: por ejemplo, una página, un gráfico o una pequeña aplicación. Otras plataformas usan nombres distintos —Canvas o Build—, pero comparten una dinámica parecida:

<ol class="artifact-flow">
  <li><span>1</span><strong>Describir</strong><small>Objetivo, usuarios y requisitos</small></li>
  <li><span>2</span><strong>Generar</strong><small>Primer prototipo</small></li>
  <li><span>3</span><strong>Probar</strong><small>Contenido e interacciones</small></li>
  <li><span>4</span><strong>Iterar</strong><small>Corregir y mejorar</small></li>
  <li><span>5</span><strong>Compartir</strong><small>Solo tras validar</small></li>
</ol>

No equivale a «pulsar un botón y terminar». El valor educativo aparece cuando el docente formula bien el problema, contrasta la exactitud del modelo, prueba cada control y decide qué aporta la interacción frente a una explicación estática.

### Al finalizar podrás

- distinguir las posibilidades de Claude Artifacts, Gemini Canvas y Google AI Studio;
- redactar un encargo verificable para una aplicación educativa;
- analizar seis experiencias documentadas y sus límites;
- iterar sobre un prototipo y decidir cómo compartirlo;
- diseñar y evaluar un laboratorio virtual relacionado con tu especialidad.

## 2. Plataformas y posibilidades
{: id="plataformas" }

<div class="artifact-platforms">
  <article><span class="artifact-badge artifact-badge--claude">Claude Artifacts</span><h3>Conversación + resultado</h3><p>Adecuado para generar una aplicación junto al chat, verla, pedir cambios y compartir el Artifact cuando la cuenta y la configuración lo permiten.</p><a href="#tutorial-claude">Tutorial de Claude <span aria-hidden="true">→</span></a></article>
  <article><span class="artifact-badge artifact-badge--gemini">Gemini Canvas</span><h3>Prototipo e iteración</h3><p>Canvas facilita trabajar sobre contenido o código, obtener una vista previa y corregir el resultado mediante nuevas instrucciones.</p><a href="#tutorial-gemini">Tutorial de Gemini <span aria-hidden="true">→</span></a></article>
  <article><span class="artifact-badge artifact-badge--ai-studio">Google AI Studio</span><h3>Proyecto en modo Build</h3><p>Build genera proyectos con componentes y vista previa. Compartir el proyecto no es lo mismo que publicar una web independiente.</p><a href="#tutorial-ai-studio">Tutorial de AI Studio <span aria-hidden="true">→</span></a></article>
</div>

Las interfaces, cuotas y opciones pueden cambiar según la cuenta, región, modelo y versión. Comprueba en tu sesión qué controles están disponibles antes de preparar una actividad.

## 3. Cómo escribir un prompt para crear una aplicación
{: id="prompt" }

Un buen encargo combina intención pedagógica y criterios que puedan probarse. Incluye:

1. **Contexto:** etapa, materia, perfil y conocimientos previos.
2. **Objetivo de aprendizaje:** qué debe comprender o practicar el alumnado.
3. **Experiencia:** pantallas, flujo, controles y respuestas esperadas.
4. **Modelo conceptual:** datos, reglas, fórmulas y simplificaciones explícitas.
5. **Accesibilidad:** teclado, foco visible, contraste, texto alternativo y movimiento reducible.
6. **Validación:** casos de prueba, mensajes de error y límites que deben mostrarse.
7. **Tecnología o formato:** solo cuando realmente importe.

<details class="artifact-details" open>
<summary>Plantilla reutilizable de prompt</summary>
<div class="artifact-copy" data-copy-container>
<button class="btn artifact-copy__button" type="button" data-copy-target="prompt-template" hidden>Copiar plantilla</button>
<span class="artifact-copy__status" role="status" aria-live="polite"></span>
<pre id="prompt-template" tabindex="0"><code>Actúa como diseñador/a de experiencias educativas interactivas.

CONTEXTO
- Etapa y materia: [INDICAR]
- Perfil del alumnado: [INDICAR]
- Concepto difícil de explicar: [INDICAR]

OBJETIVO
El alumnado debe ser capaz de [VERBO OBSERVABLE + APRENDIZAJE].

APLICACIÓN
Crea [SIMULADOR / LABORATORIO / HERRAMIENTA] con:
1. [PANTALLA O MÓDULO]
2. [INTERACCIÓN Y RESPUESTA ESPERADA]
3. [RETROALIMENTACIÓN O EVALUACIÓN]

RIGOR
- Usa estas reglas o datos: [INDICAR FUENTES/REGLAS].
- Identifica claramente cualquier simplificación.
- No inventes datos: muestra “dato no disponible” cuando proceda.

ACCESIBILIDAD Y PRIVACIDAD
- Operable con teclado, foco visible, etiquetas y contraste suficiente.
- Respeta prefers-reduced-motion.
- No recojas ni envíes datos personales.

VALIDACIÓN
Antes de terminar, comprueba [3–5 CASOS] y explica las limitaciones.</code></pre>
</div>
</details>

## 4. Explora aplicaciones reales creadas con IA
{: id="galeria" }

En este laboratorio descubrirás cómo una misma idea puede convertirse en una aplicación interactiva utilizando distintas herramientas de inteligencia artificial. Explora los resultados, compara las plataformas y aprende a crear tus propios recursos educativos.

<div class="artifact-filters" role="group" aria-label="Filtrar demostraciones por plataforma">
  <button class="btn is-active" type="button" data-artifact-filter="all" aria-pressed="true">Todas</button>
  <button class="btn" type="button" data-artifact-filter="claude" aria-pressed="false">Claude</button>
  <button class="btn" type="button" data-artifact-filter="gemini" aria-pressed="false">Gemini</button>
  <button class="btn" type="button" data-artifact-filter="ai-studio" aria-pressed="false">AI Studio</button>
</div>

<div class="artifact-gallery" id="artifact-gallery">
{% for project in site.data.artifact_projects %}
  <article class="artifact-card" data-platform="{{ project.platform_key }}" id="{{ project.id }}">
    {% if project.image %}<a class="artifact-card__image" href="{{ project.image | relative_url }}" data-artifact-image aria-label="Ampliar captura de {{ project.title }}"><img src="{{ project.image | relative_url }}" alt="{{ project.image_alt }}" loading="lazy" width="1600" height="797"></a>{% else %}<div class="artifact-card__missing" role="img" aria-label="Captura no disponible"><span aria-hidden="true">⌁</span><strong>Captura no aportada</strong><small>La demostración y el HTML original sí están disponibles.</small></div>{% endif %}
    <div class="artifact-card__body">
      <span class="artifact-badge artifact-badge--{{ project.platform_key }}">{{ project.platform }}</span>
      <h3 id="{{ project.id }}-title">{{ project.title }}</h3>
      <p class="artifact-card__category">{{ project.category }}</p>
      <p>{{ project.description }}</p>
      <ul>{% for feature in project.features %}<li>{{ feature }}</li>{% endfor %}</ul>
      {% if project.technologies %}<p class="artifact-card__tech"><strong>Tecnologías identificadas:</strong> {{ project.technologies }}.</p>{% endif %}
      <div class="artifact-card__actions">
        <a class="btn btn-primary" href="{{ project.demo_url }}" target="_blank" rel="noopener noreferrer">Ver demo en vivo <span class="sr-only">de {{ project.title }} (se abre en una pestaña nueva)</span></a>
        <a class="btn" href="#{{ project.creation_anchor }}">Cómo se creó</a>
        <a class="btn" href="#{{ project.prompt_anchor }}">Ver prompt</a>
      </div>
      {% if project.source_files.size > 0 %}<details class="artifact-sources"><summary>Consultar código y archivos</summary><ul>{% for source in project.source_files %}<li><a href="{{ source.url | relative_url }}" download>{{ source.label }}</a></li>{% endfor %}</ul></details>{% endif %}
    </div>
  </article>
{% endfor %}
</div>

<p class="artifact-demo-note">La demostración se abre en la plataforma donde fue creada. Algunas funciones pueden requerir iniciar sesión. No se incrustan por defecto porque estas plataformas pueden bloquear los marcos externos.</p>

## 5. Caso práctico 1: ROCKET LAB 3D
{: id="caso-rocket" }

El mismo planteamiento produjo tres interpretaciones: Claude generó un centro de simulación; Gemini construyó otra versión con React, TypeScript, Three.js, Recharts y Lucide; y AI Studio creó **AeroVectra 3D**. Las capturas muestran diferencias de composición, controles y densidad de información, pero no bastan para declarar una herramienta «ganadora».

En Gemini se produjo un error durante el primer intento. La aplicación apareció después de una nueva iteración. Este incidente es parte del aprendizaje: la programación asistida por IA exige **leer el error, aislar la causa, pedir una corrección concreta y volver a probar**.

<div class="artifact-compare-note"><strong>Comprobaciones docentes sugeridas:</strong> contrastar las fórmulas; distinguir magnitudes reales de valores simulados; probar límites de cada control; comprobar que las unidades permanecen visibles y que la vista 3D no impide acceder al contenido.</div>

<details class="artifact-details" id="prompt-rocket">
<summary>Guion reproducible de ROCKET LAB 3D</summary>
<p><strong>Nota de procedencia:</strong> no se ha localizado el prompt original completo. Este guion se ha reconstruido a partir de las funciones documentadas y no debe citarse como el prompt utilizado para generar las demos.</p>
<div class="artifact-copy" data-copy-container><button class="btn artifact-copy__button" type="button" data-copy-target="prompt-rocket-text" hidden>Copiar guion</button><span class="artifact-copy__status" role="status" aria-live="polite"></span><pre id="prompt-rocket-text" tabindex="0"><code>Crea un laboratorio educativo llamado “ROCKET LAB 3D” para Física, Tecnología e Ingeniería. Debe incluir un explorador tridimensional de un motor de cohete líquido, selección de componentes, vista explosionada, controles de propulsión, lanzamiento vertical, telemetría simulada, experimentos y modo docente.

Separa claramente los datos observados de las hipótesis didácticas. Muestra unidades, fórmulas y simplificaciones. Añade instrucciones accesibles, controles por teclado, foco visible y una alternativa textual a la vista 3D. Incluye una demostración guiada y casos de prueba para valores mínimos, nominales y máximos. No presentes el modelo como una simulación de ingeniería certificada.</code></pre></div>
</details>

## 6. Caso práctico 2: PC LAB 3D
{: id="caso-pc" }

Las versiones de Claude y Gemini comparten el objetivo —comprender hardware y diagnosticar averías—, pero organizan la experiencia de forma distinta. Claude documenta apertura de chasis, compatibilidad, arranque y evaluación; Gemini separa explorador, montaje, arranque, averías y flujo de datos. Es especialmente útil en FP (ASIR), siempre que las reglas de compatibilidad y los diagnósticos se contrasten con documentación técnica.

<details class="artifact-details" id="prompt-pc">
<summary>Guion reproducible de PC LAB 3D</summary>
<p><strong>Nota de procedencia:</strong> reconstrucción didáctica basada en los módulos disponibles; el prompt original completo no estaba entre los archivos localizados.</p>
<div class="artifact-copy" data-copy-container><button class="btn artifact-copy__button" type="button" data-copy-target="prompt-pc-text" hidden>Copiar guion</button><span class="artifact-copy__status" role="status" aria-live="polite"></span><pre id="prompt-pc-text" tabindex="0"><code>Crea “PC LAB 3D”, un laboratorio para alumnado de ASIR. Permite explorar un ordenador, abrir el chasis, identificar piezas y montar una configuración. Comprueba compatibilidad entre placa, CPU, RAM, almacenamiento, GPU y fuente; después simula POST y arranque.

Incluye un taller de averías con pistas, pruebas de diagnóstico, retroalimentación y puntuación explicable. Diferencia modelos conceptuales de medidas reales. Añade modo docente, demostración guiada y resumen final. Toda función debe poder usarse con teclado y sin depender solo del color o de la escena 3D.</code></pre></div>
</details>

## 7. Caso práctico 3: WEB LAB 3D
{: id="caso-web" }

WEB LAB 3D representa el viaje de una petición desde un navegador virtual hasta DNS, servidor, API y base de datos. Permite experimentar con GET, POST, PUT, PATCH y DELETE, inspeccionar respuestas y provocar errores. Es una **simulación educativa**, no una captura de tráfico real ni un sustituto de las herramientas de desarrollo del navegador.

<details class="artifact-details" id="prompt-web">
<summary>Guion reproducible de WEB LAB 3D</summary>
<p><strong>Nota de procedencia:</strong> reconstrucción basada en la aplicación HTML aportada; no se localizó el prompt original.</p>
<div class="artifact-copy" data-copy-container><button class="btn artifact-copy__button" type="button" data-copy-target="prompt-web-text" hidden>Copiar guion</button><span class="artifact-copy__status" role="status" aria-live="polite"></span><pre id="prompt-web-text" tabindex="0"><code>Crea “WEB LAB 3D — HTTP JOURNEY” para alumnado de DAW. Representa de forma didáctica el recorrido de una petición entre navegador, resolución DNS, servidor, API REST y base de datos. Permite probar GET, POST, PUT, PATCH y DELETE con parámetros seguros y datos ficticios.

Incluye navegador virtual, inspector de red simulado, laboratorio de errores, retos, modo docente y demostración automática. Explica cada estado y código HTTP, diferencia petición y respuesta, e identifica todas las simplificaciones. No afirmes que se captura tráfico real. Garantiza uso con teclado, mensajes de error comprensibles y movimiento reducible.</code></pre></div>
</details>

## Tutoriales paso a paso

### Claude Artifacts
{: id="tutorial-claude" }

1. Accede a Claude y abre una conversación nueva.
2. Describe el objetivo educativo, el alumnado, los módulos y los criterios de validación.
3. Pide una aplicación interactiva o un Artifact y revisa la vista resultante.
4. Prueba cada control; anota fallos de contenido, interfaz y accesibilidad.
5. Solicita cambios pequeños y verificables, uno o pocos cada vez.
6. Revisa el código cuando tu interfaz y tipo de cuenta ofrezcan esa opción.
7. Usa **Share/Compartir** solo después de la validación y revisa qué verá otra persona.

La documentación oficial vigente distingue entre publicar un Artifact para que otras personas lo usen y compartirlo dentro de una organización. La disponibilidad depende del plan; los Artifacts con funciones de IA pueden exigir iniciar sesión. [Consulta la guía oficial de Anthropic](https://support.anthropic.com/es/articles/9547008-descubriendo-publicando-personalizando-y-compartiendo-artefactos){: target="_blank" rel="noopener noreferrer" }.

<figure class="artifact-tutorial-shot"><a href="{{ '/assets/img/artifacts/rocket-claude.png' | relative_url }}" data-artifact-image aria-label="Ampliar captura de Claude Artifacts"><img src="{{ '/assets/img/artifacts/rocket-claude.png' | relative_url }}" alt="ROCKET LAB 3D ejecutándose como Artifact en Claude" loading="lazy"></a><figcaption>Resultado en Claude Artifacts. La interfaz exacta y las opciones de código o compartición pueden variar.</figcaption></figure>

### Gemini Canvas
{: id="tutorial-gemini" }

1. Accede a Gemini y utiliza Canvas cuando esté disponible en tu cuenta.
2. Introduce el encargo y solicita una aplicación con vista previa.
3. Comprueba contenido, controles, consola y adaptación a pantalla pequeña.
4. Si aparece un error —como ocurrió en el primer intento de ROCKET LAB— copia el mensaje útil y pide corregir la causa sin eliminar funciones válidas.
5. Repite la prueba después de cada modificación.
6. Examina el código y las opciones de compartir disponibles en tu sesión.
7. Abre el enlace obtenido en una ventana privada o con otra cuenta para verificar permisos.

Google indica que las apps de Canvas se comparten mediante enlaces públicos. Si una app multiusuario persiste datos, estos pueden quedar visibles o editables para cualquiera que tenga el enlace: no diseñes la práctica para recoger información sensible. [Consulta la guía oficial de seguridad de Canvas](https://support.google.com/gemini/answer/16419134){: target="_blank" rel="noopener noreferrer" }.

<figure class="artifact-tutorial-shot"><a href="{{ '/assets/img/artifacts/rocket-gemini.png' | relative_url }}" data-artifact-image aria-label="Ampliar captura de Gemini Canvas"><img src="{{ '/assets/img/artifacts/rocket-gemini.png' | relative_url }}" alt="ROCKET LAB 3D en una vista de Gemini Canvas" loading="lazy"></a><figcaption>Prototipo generado en Gemini tras iterar. Un resultado visible no elimina la necesidad de probarlo.</figcaption></figure>

### Google AI Studio · Build
{: id="tutorial-ai-studio" }

1. Accede a Google AI Studio y abre **Build** si está habilitado para tu cuenta.
2. Describe la aplicación, sus componentes, datos y comprobaciones.
3. Revisa los archivos generados y la vista previa.
4. Modifica el proyecto mediante instrucciones o edición, según las opciones disponibles.
5. Prueba estados iniciales, errores, navegación y diseño responsive.
6. Usa **Share** para compartir el proyecto con los permisos elegidos; quienes reciban acceso pueden ver el código y crear una copia.
7. Para trabajar fuera de AI Studio, la documentación vigente permite descargar un ZIP o sincronizar con GitHub.
8. **Publish** despliega la aplicación —actualmente mediante Cloud Run— y crea una URL independiente. Revisa elegibilidad, facturación, cuotas, claves, servicios externos y visibilidad antes de publicar.

Estas posibilidades se han contrastado con la [documentación oficial de Build](https://ai.google.dev/gemini-api/docs/aistudio-build-mode){: target="_blank" rel="noopener noreferrer" } y la [guía de despliegue](https://ai.google.dev/gemini-api/docs/aistudio-deploying){: target="_blank" rel="noopener noreferrer" } (consulta realizada el 28 de octubre de 2026). Que la plataforma permita publicar no significa que **AeroVectra 3D** esté publicado: el único enlace aportado para este curso sigue siendo el del proyecto de AI Studio.

<div class="artifact-shot-pair">
<figure class="artifact-tutorial-shot"><a href="{{ '/assets/img/artifacts/google-ai-studio-build.png' | relative_url }}" data-artifact-image aria-label="Ampliar captura del modo Build"><img src="{{ '/assets/img/artifacts/google-ai-studio-build.png' | relative_url }}" alt="Entorno de Google AI Studio con el proyecto y la vista previa" loading="lazy"></a><figcaption>Entorno de creación en AI Studio.</figcaption></figure>
<figure class="artifact-tutorial-shot"><a href="{{ '/assets/img/artifacts/aerovectra-ai-studio.png' | relative_url }}" data-artifact-image aria-label="Ampliar captura de AeroVectra"><img src="{{ '/assets/img/artifacts/aerovectra-ai-studio.png' | relative_url }}" alt="Vista previa de AeroVectra 3D en Google AI Studio" loading="lazy"></a><figcaption>Vista previa del proyecto AeroVectra 3D.</figcaption></figure>
</div>

## Del prompt al código

<div class="artifact-stages">
  <article><span>Etapa 1</span><h3>Prompt inicial</h3><p>Define aprendizaje, público, módulos, reglas, accesibilidad y pruebas.</p></article>
  <article><span>Etapa 2</span><h3>Prototipo</h3><p>La IA genera una primera solución. Captúrala y registra qué funciona y qué no.</p></article>
  <article><span>Etapa 3</span><h3>Iteración</h3><p>Corrige por partes, repite las pruebas y conserva trazabilidad de los cambios.</p></article>
</div>

Los guiones anteriores son reproducibles, pero no sustituyen los prompts originales, que no estaban en los materiales localizados. El código disponible se descarga desde cada tarjeta; se conserva sin «embellecerlo» ni presentarlo abierto por defecto. Los HTML son materiales para inspección o ejecución local controlada: no se incrustan automáticamente en el curso.

## 8. Un mismo prompt, diferentes inteligencias artificiales
{: id="comparativa" }

La tabla recoge únicamente lo observado en las capturas, archivos y enlaces aportados. «No verificado» significa exactamente eso, no ausencia de la función.

<div class="artifact-table-wrap" tabindex="0" role="region" aria-label="Comparativa general de plataformas">
<table>
<thead><tr><th scope="col">Criterio</th><th scope="col">Claude Artifacts</th><th scope="col">Gemini Canvas</th><th scope="col">Google AI Studio</th></tr></thead>
<tbody>
<tr><th scope="row">Generación observada</th><td>Aplicación junto a conversación</td><td>Prototipo en Canvas; hubo que iterar tras un error</td><td>Proyecto en Build con vista previa</td></tr>
<tr><th scope="row">Interactividad aportada</th><td>Rocket y PC con escenas y controles</td><td>Rocket, PC y Web con módulos interactivos</td><td>AeroVectra 3D</td></tr>
<tr><th scope="row">Código disponible aquí</th><td>Rocket y PC en TSX/HTML</td><td>WEB LAB en HTML; código de Rocket/PC no aportado</td><td>No aportado</td></tr>
<tr><th scope="row">Modificación</th><td>Nuevas instrucciones; código según interfaz</td><td>Iteración en Canvas</td><td>Instrucciones y edición del proyecto</td></tr>
<tr><th scope="row">Compartición documentada</th><td>Enlace de Artifact</td><td>Enlace share.gemini.google</td><td>Enlace de proyecto AI Studio</td></tr>
<tr><th scope="row">Exportación/publicación</th><td>El código puede verse, copiarse o descargarse según la guía oficial; no se verificó en estas demos</td><td>No verificada en estas demos</td><td>ZIP, GitHub y despliegue en Cloud Run documentados; AeroVectra no aporta URL publicada</td></tr>
<tr><th scope="row">Límite común</th><td colspan="3">Requiere validación docente; la interfaz, las cuotas y los permisos pueden cambiar.</td></tr>
</tbody>
</table>
</div>

### Comparación por familia

- **ROCKET LAB 3D:** hay versiones en las tres plataformas. Las capturas evidencian diferentes jerarquías visuales; los módulos documentados se solapan, pero el código aportado solo permite inspeccionar directamente la versión TSX/HTML disponible.
- **PC LAB 3D:** Claude y Gemini proponen recorridos distintos para exploración, montaje y diagnóstico. La versión Claude dispone aquí de fuente descargable; la de Gemini, de enlace y captura.
- **WEB LAB 3D:** solo se ha aportado la versión de Gemini, por lo que no se fuerza una comparación inexistente.

> **Conclusión educativa:** «Un mismo prompt puede generar aplicaciones diferentes. La calidad final depende de la herramienta, de la formulación de las instrucciones y del proceso de prueba y mejora».

## 9. Cómo compartir, exportar y publicar
{: id="compartir" }

| Acción | Qué significa | Antes de usarla |
|:--|:--|:--|
| **Compartir** | Dar acceso al Artifact, Canvas o proyecto alojado en la plataforma | Comprobar permisos, sesión requerida y visibilidad |
| **Exportar** | Obtener código o archivos cuando la herramienta lo permite | Revisar licencias, dependencias, claves y contenido generado |
| **Publicar/desplegar** | Servir una aplicación web independiente | Verificar alojamiento, cuotas, privacidad, seguridad y mantenimiento |

El enlace de AeroVectra proporcionado es un **enlace de proyecto de AI Studio**. No se ha facilitado una URL de despliegue web independiente y no se inventa una. En cualquier plataforma, prueba el enlace desde un contexto equivalente al de tu alumnado y prepara una alternativa si exige cuenta o deja de estar disponible.

## 10. Reto: crea tu propio laboratorio virtual con IA
{: id="reto" }

**Objetivo:** elaborar un recurso interactivo relacionado con tu especialidad y documentar su proceso de validación. Tiempo orientativo: **60–90 minutos**.

1. Identifica un concepto difícil de explicar con materiales estáticos.
2. Elige una plataforma y justifica la elección.
3. Redacta un prompt con objetivo y requisitos observables.
4. Genera una primera versión y conserva el prompt.
5. Prueba las interacciones con al menos tres casos.
6. Identifica una mejora concreta.
7. Solicítala mediante un segundo prompt.
8. Verifica el resultado y registra lo que cambió.
9. Comparte el recurso solo si los permisos y condiciones lo permiten.
10. Reflexiona sobre su uso real en el aula y sus límites.

<div class="artifact-levels">
  <article><strong>Inicial</strong><p>Herramienta sencilla con una entrada, una transformación y retroalimentación clara.</p></article>
  <article><strong>Intermedio</strong><p>Simulación con varios controles, estados y explicación del modelo.</p></article>
  <article><strong>Avanzado</strong><p>Laboratorio con pantallas coordinadas, estado compartido y evaluación.</p></article>
</div>

**Entrega sugerida:** prompt inicial, enlace o captura del prototipo, segundo prompt, tres pruebas con sus resultados y reflexión breve. No incluyas datos personales.

## 11. Evaluación y reflexión final
{: id="evaluacion" }

### Rúbrica breve

| Criterio | 1 · Inicial | 2 · En proceso | 3 · Logrado |
|:--|:--|:--|:--|
| Adecuación curricular | Objetivo difuso | Objetivo relacionado con el currículo | Objetivo observable y bien contextualizado |
| Claridad del prompt | Faltan requisitos clave | Incluye objetivo y funciones | Añade reglas, accesibilidad y validación |
| Interactividad | Decorativa o rota | Permite acciones básicas | Las acciones apoyan el aprendizaje y responden bien |
| Corrección conceptual | Hay errores no detectados | Contenido revisado parcialmente | Contenido contrastado y límites explícitos |
| Usabilidad y accesibilidad | Existen barreras graves | Uso principal posible | Teclado, foco, etiquetas, contraste y responsive revisados |
| Validación | Sin pruebas registradas | Pruebas informales | Casos, resultados y correcciones documentados |
| Reflexión | Describe el producto | Identifica una mejora | Analiza utilidad, riesgos, límites y siguiente iteración |

### Cierre

- ¿Qué parte del resultado dependió más de la herramienta y cuál de tus instrucciones?
- ¿Qué error solo apareció al interactuar con la aplicación?
- ¿Qué evidencia necesitas antes de afirmar que el simulador enseña correctamente?
- ¿Qué alternativa ofrecerías si la plataforma exige cuenta o deja de estar disponible?

<p class="artifact-back"><a href="{{ '/bloque3.html' | relative_url }}">← Volver al índice del Bloque 3</a></p>

<dialog class="artifact-lightbox" aria-labelledby="artifact-lightbox-title">
  <div class="artifact-lightbox__bar"><strong id="artifact-lightbox-title">Vista ampliada</strong><button type="button" class="btn" data-lightbox-close>Cerrar</button></div>
  <img alt="">
</dialog>
