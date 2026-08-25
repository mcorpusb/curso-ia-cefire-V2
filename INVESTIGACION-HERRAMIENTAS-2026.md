# INVESTIGACIÓN DE HERRAMIENTAS DE IA PARA DOCENTES · 2026

**Rama:** `curso-ia-cefire-v2`  
**Fecha de revisión:** agosto 2026  
**Fuentes consultadas:** documentación oficial de cada plataforma, páginas de producto y soporte  

> **Aviso metodológico:** Esta investigación se basa en fuentes oficiales consultadas en agosto de 2026. Los precios, límites y funciones pueden cambiar. Para información definitiva sobre la disponibilidad de funciones en cuentas GVA, siempre verificar con el administrador del sistema o la web oficial de la GVA.

---

## ÍNDICE

1. [Microsoft Copilot — Entorno GVA](#1-microsoft-copilot--entorno-gva)
2. [Google Gemini y Gemini for Education](#2-google-gemini-y-gemini-for-education)
3. [NotebookLM (Gemini Notebook)](#3-notebooklm-gemini-notebook)
4. [ChatGPT (OpenAI)](#4-chatgpt-openai)
5. [Kimi (Moonshot AI)](#5-kimi-moonshot-ai)
6. [Canva for Education](#6-canva-for-education)
7. [Gamma](#7-gamma)
8. [Napkin AI](#8-napkin-ai)
9. [ElevenLabs](#9-elevenlabs)
10. [Herramientas de vídeo: HeyGen y Synthesia](#10-herramientas-de-vídeo-heygen-y-synthesia)
11. [Agentes, Gems y GPTs educativos](#11-agentes-gems-y-gpts-educativos)
12. [Herramientas de vibe coding y creación web](#12-herramientas-de-vibe-coding-y-creación-web)
13. [Tabla resumen: ¿Qué herramienta uso para...?](#13-tabla-resumen-qué-herramienta-uso-para)
14. [Alternativas gratuitas de interés educativo](#14-alternativas-gratuitas-de-interés-educativo)

---

## 1. MICROSOFT COPILOT — ENTORNO GVA

**Fuente principal:** [learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-overview) (actualizado 07/2026)

### Distinción fundamental: dos productos distintos

Microsoft tiene actualmente **dos productos con el nombre Copilot** que son completamente diferentes en lo que ofrecen y en lo que cuestan. Esta distinción es crítica para el curso:

---

### 1.1 Copilot Chat (anteriormente «Microsoft Copilot»)

**Tipo:** Gratuito para usuarios con cuenta Microsoft 365  
**Disponibilidad GVA:** ✅ Disponible con cuenta `@edu.gva.es` si la organización lo ha habilitado  
**Acceso:** `m365.cloud.microsoft`, `copilot.microsoft.com`, Teams, Microsoft365.com

**Qué incluye:**
- Chat con IA conectado a la web (búsqueda en tiempo real)
- Protección de datos empresarial cuando aparece la insignia 🛡️ «Protegido»
- El usuario puede proporcionar documentos y datos organizativos para enriquecer las respuestas
- Generación de imágenes (DALL·E integrado)
- Copilot Pages (crear documentos colaborativos a partir del chat)
- Agentes básicos
- Carga y análisis de archivos adjuntos
- Sin acceso a los datos internos de la organización (no lee correos, calendarios ni documentos del OneDrive corporativo automáticamente — el usuario debe proporcionar el contenido)

**Importante para GVA:**
> La insignia 🛡️ «Protegido» indica que la sesión tiene Enterprise Data Protection activa. Los datos procesados no se usan para entrenar modelos de Microsoft/OpenAI. Verificar con el administrador GVA que esta función esté activada en el tenant educativo.

**Modelo actual:** GPT-5 (según documentación oficial de Microsoft, julio 2026)

---

### 1.2 Microsoft 365 Copilot (con licencia adicional)

**Tipo:** Licencia de pago adicional sobre un plan M365 existente  
**Precio comercial:** desde ~18 USD/usuario/mes (pago anual) como complemento  
**Disponibilidad GVA:** ⚠️ Verificar con el administrador del sistema. Requiere plan de licencia específico para educación (A3 o A5 en educación). NO está incluido automáticamente en todas las licencias GVA.

**Qué añade respecto a Copilot Chat:**
- Integración nativa completa en **Word, Excel, PowerPoint, Outlook, Teams, OneNote, Loop, Whiteboard, Forms**
- Acceso automático a **Microsoft Graph**: correos, chats, documentos, reuniones del usuario (solo lo que tiene permiso para ver)
- Microsoft 365 Copilot Search: búsqueda universal en todas las fuentes Microsoft 365
- Agentes preconfigurados: **Researcher, Analyst, Facilitator**
- Copilot Studio: creación de agentes personalizados avanzados

**Funciones por aplicación (con licencia M365 Copilot):**

| App | Funciones de Copilot |
|:----|:---------------------|
| **Word** | Redactar, editar, resumir. Los documentos Word pueden usarse como fuente de datos |
| **PowerPoint** | Crear presentación desde prompt o desde documento Word. Añadir diapositivas, imágenes, cambios de formato |
| **Excel** | Sugerir fórmulas, tipos de gráficos, analizar datos |
| **Outlook** | Resumir hilo de correo, redactar respuestas, coaching de tono y claridad |
| **Teams** | Resumir reuniones (transcripción en tiempo real), resumir chats (hasta 30 días) |
| **OneNote** | Redactar planes, generar ideas, crear listas |
| **Loop** | Creación colaborativa de contenido |
| **Whiteboard** | Generar ideas, organizar por temas, resumir pizarra |
| **Forms** | Generar preguntas y sugerencias para formularios y encuestas |

**Aviso para el curso:**
> En V1, el curso presentaba Copilot como si las funciones de Word/PowerPoint/Teams estuvieran disponibles automáticamente con la cuenta GVA. Esto no es correcto para todas las cuentas. En V2 debemos distinguir claramente: **Copilot Chat** (disponible con cuenta GVA, sin coste adicional si el tenant lo habilita) vs. **M365 Copilot completo** (requiere licencia adicional; verificar con el administrador GVA).

---

### 1.3 Resumen de disponibilidad para docentes GVA

| Función | Disponibilidad | Condición |
|:--------|:---------------|:----------|
| Copilot Chat en navegador (web) | ✅ Disponible | Cuenta `@edu.gva.es` + tenant habilitado |
| Protección de datos (insignia 🛡️) | ✅ Disponible | Mismo que arriba |
| Chat con búsqueda web | ✅ Disponible | Mismo |
| Carga y análisis de documentos | ✅ Disponible | Mismo |
| Generación de imágenes (DALL·E) | ✅ Disponible | Mismo (verificar si habilitado en el tenant GVA) |
| Copilot Pages | ✅ Disponible | Mismo |
| Copilot en Word (redactar/editar/resumir) | ⚠️ Solo básico sin licencia | Con licencia M365 Copilot: funciones completas |
| Copilot en PowerPoint (crear desde prompt) | ⚠️ Solo básico sin licencia | Con licencia M365 Copilot: funciones completas |
| Copilot en Outlook (resumir correos) | ⚠️ Solo básico sin licencia | Con licencia M365 Copilot: funciones completas |
| Copilot en Teams (resumir reuniones) | ⚠️ Solo básico sin licencia | Con licencia M365 Copilot: funciones completas |
| Copilot en OneNote | ⚠️ Solo básico sin licencia | Con licencia M365 Copilot: funciones completas |
| Copilot Studio (crear agentes avanzados) | ⚠️ Por verificar en GVA | Requiere licencia adicional |
| Agentes preconfigurados (Researcher, Analyst) | ⚠️ Por verificar en GVA | Requiere licencia M365 Copilot Business |

**Nota sobre «básico» vs. «completo»:** Sin licencia adicional M365 Copilot, en las apps (Word, Excel, etc.) existe un modo «M365 Copilot (Basic)» con acceso estándar y límites más bajos. Con la licencia completa existe el modo «M365 Copilot (Premium)» con acceso prioritario y todas las funciones.

---

## 2. GOOGLE GEMINI Y GEMINI FOR EDUCATION

**Fuente:** workspace.google.com y edu.google.com (agosto 2026)

### 2.1 Gemini (cuenta personal de Google)

**Tipo:** Gratuito con límites / Google One AI Premium (de pago)  
**Disponibilidad docente GVA:** Solo con cuenta personal de Google. **No usar cuenta `@edu.gva.es`** para acceder a Gemini a través de plataformas no homologadas.

**Funciones gratuitas actuales:**
- Chat multimodal: texto, imagen, audio, vídeo, documentos
- Búsqueda web en tiempo real (Deep Research: investigación autónoma de múltiples fuentes)
- Análisis de documentos y PDFs
- Gemini Live: conversación oral en tiempo real, interrumpible, con intercambio natural
- Canvas: documento colaborativo que se puede editar junto con Gemini
- Gems: asistentes personalizados con instrucciones fijas (equivalente a GPTs de ChatGPT)
- Generación de imágenes con Imagen 3 (verificar disponibilidad gratuita)
- Búsqueda en Google Drive (si se conecta la cuenta)

**Google One AI Premium:**
- Acceso a Gemini avanzado (Gemini 2.5 Pro)
- Gemini en Gmail, Docs, Sheets, Slides, Meet (Workspace integrado)
- 2 TB de almacenamiento en Drive

### 2.2 Gemini for Education / Google Workspace for Education

**Tipo:** Gratuito (Fundamentals) / De pago (Plus, Standard, Teaching & Learning Upgrade)  
**Modelos:**
- **Education Fundamentals** (gratuito): Google Classroom, Meet, Drive, Docs, Sheets, Slides. Sin Gemini avanzado integrado en apps.
- **Teaching & Learning Upgrade** (~4 USD/usuario/mes): Incluye Gemini en Classroom, Meet con transcripción, funciones avanzadas de evaluación.
- **Education Plus**: paquete completo con más funciones.

> **Nota GVA:** Los centros que usen Google Workspace for Education Fundamentals tienen acceso gratuito a las apps de Google pero **sin Gemini integrado en las apps** (Docs, Slides, etc.) a menos que paguen el upgrade. Los docentes pueden usar Gemini.google.com con su cuenta personal mientras usen contenido no sensible.

### 2.3 Deep Research en Gemini

**Tipo:** Disponible en el plan gratuito con límites  
Deep Research realiza investigación autónoma en múltiples fuentes web, sintetiza los resultados y produce un informe estructurado con citas. Puede tardar varios minutos.

**Uso educativo:**
- Investigar un tema curricular con fuentes verificadas
- Generar informe inicial para una unidad didáctica
- Comparar información de múltiples fuentes antes de preparar materiales

**Limitación importante:** Deep Research en Gemini busca en la web; no trabaja sobre documentos que el docente proporciona (para eso: NotebookLM).

---

## 3. NOTEBOOKLM (GEMINI NOTEBOOK)

**Fuente:** [notebooklm.google](https://notebooklm.google/) (agosto 2026)  
**Nombre actual:** NotebookLM / Gemini Notebook (Google ha comenzado a llamarlo también «Gemini Notebook»)

### 3.1 Qué es

NotebookLM es una herramienta de IA **fundamentada en las fuentes que el usuario proporciona**. No responde desde conocimiento general: responde desde los documentos, webs, vídeos y audios que el docente sube. **Todas las respuestas incluyen citas exactas** del material original.

Esta característica lo convierte en la herramienta más adecuada del mercado para:
- Trabajar con el currículo oficial (DOGV, BOE, decretos de la GVA)
- Analizar programaciones didácticas y proyectos educativos del centro
- Investigar a partir de bibliografía académica
- Preparar materiales fundamentados en documentos reales

### 3.2 Fuentes que acepta (agosto 2026)

- PDFs
- Documentos de Google (Docs, Slides)
- Páginas web (URL)
- Vídeos de YouTube (transcripción)
- Archivos de audio (MP3, WAV, etc.)
- Texto copiado directamente
- Google Drive

### 3.3 Funciones de salida (agosto 2026)

| Función | Descripción | Disponibilidad |
|:--------|:------------|:---------------|
| **Chat con citas** | Responde preguntas sobre las fuentes con citas exactas | ✅ Gratuito |
| **Guía de estudio** | Genera un resumen estructurado del notebook | ✅ Gratuito |
| **Cuestionario / Quiz** | Genera preguntas de comprensión a partir de las fuentes | ✅ Gratuito |
| **Resumen de Audio (Audio Overview)** | Conversación en formato podcast entre dos voces IA sobre el contenido | ✅ Gratuito |
| **Mapa conceptual / Mindmap** | Genera un mapa visual de conceptos a partir de las fuentes | ✅ Gratuito |
| **Flashcards** | Tarjetas de repaso | ✅ Gratuito |
| **Infografía** | Genera una infografía visual del contenido | ✅ Gratuito (verificar disponibilidad geográfica) |
| **Presentación** | Genera una presentación a partir del contenido | ✅ Gratuito (verificar disponibilidad geográfica) |
| **Video Overview** | Vídeo generado con resumen visual animado | 🔄 En despliegue progresivo |
| **Deep Research** (en NotebookLM) | Investigación que combina las fuentes con búsqueda web | 🔄 En despliegue (verificar) |

### 3.4 Privacidad

- **Para organizaciones y centros educativos**: los datos **NO se usan para entrenar a Gemini**.
- Para usuarios individuales: tampoco se usan para entrenamiento salvo que el usuario envíe feedback voluntariamente.
- Fuente oficial: política de privacidad de Google NotebookLM.

> **Para el curso:** NotebookLM es uno de los pocos entornos donde un docente puede subir documentos del centro (programaciones didácticas, proyectos educativos no confidenciales, normativa) con razonable seguridad de privacidad. Sin embargo, **no subir datos personales del alumnado, informes psicopedagógicos ni actas nominales**.

### 3.5 Flujo educativo con NotebookLM

```
FUENTES (PDFs, webs, vídeos, normativa, currículo)
   ↓
INVESTIGACIÓN (chat con citas, Deep Research)
   ↓
COMPRENSIÓN (guía de estudio, mapa conceptual, audio overview)
   ↓
VERIFICACIÓN (citas exactas → comprobar en el documento original)
   ↓
TRANSFORMACIÓN (cuestionario, flashcards, infografía, presentación)
   ↓
MATERIAL EDUCATIVO (listo para usar o adaptar en el aula)
```

---

## 4. CHATGPT (OPENAI)

**Fuente:** [openai.com](https://openai.com/es-ES/), [chatgpt.com/business/education](https://chatgpt.com/business/education) (agosto 2026)

### 4.1 Modelos actuales (agosto 2026)

OpenAI ha lanzado GPT-5 como modelo principal, con versiones iterativas (GPT-5.4, GPT-5.5, GPT-5.6 mencionadas en la web oficial). La serie GPT-4o sigue disponible en algunos planes.

### 4.2 Plan gratuito

**Tipo:** Gratuito con límites (sin tarjeta de crédito para registrarse)  
**Funciones disponibles:**
- Chat con GPT-5 (con límites de mensajes diarios)
- Búsqueda web en tiempo real
- Generación de imágenes (DALL·E, con límites)
- Análisis de archivos y documentos adjuntos
- Canvas: editor colaborativo para textos y código junto con la IA
- Proyectos (organización de conversaciones)
- GPTs personalizados: usar los creados por otros (no crear los propios sin cuenta de pago)

**Limitaciones del plan gratuito:**
- Mensajes limitados con los modelos más potentes antes de pasar al modelo más básico
- No permite crear GPTs propios
- Sin memoria persistente entre conversaciones (salvo la función Memory, verificar disponibilidad)

### 4.3 ChatGPT Plus (~20 USD/mes)

- Acceso completo a GPT-5 sin límites bajos
- Crear GPTs personalizados
- Más capacidad de análisis de datos
- Acceso a nuevas funciones antes que el plan gratuito

### 4.4 ChatGPT Edu (para universidades)

**Tipo:** Pago · Solo para instituciones de educación superior (universitaria)  
**No disponible para centros K-12 como opción directa.**

Incluye: GPT-5 con límites altos, crear y compartir GPTs en el workspace institucional, controles de administración (SSO, SCIM), privacidad garantizada (datos no usados para entrenar modelos), panel de análisis.

> **Para el curso:** ChatGPT Edu es para universidades. Los docentes de Infantil, Primaria, Secundaria, FP y EOI usarán la versión gratuita o Plus personal. No hay plan educativo específico para K-12 actualmente.

### 4.5 Para docentes de GVA

ChatGPT no está dentro del entorno corporativo GVA. Para usarlo:
- Crear cuenta personal en ChatGPT (no con la cuenta `@edu.gva.es`)
- **No introducir datos personales del alumnado ni documentos sensibles del centro**
- Útil para tareas sin datos sensibles: preparar explicaciones, generar prompts, crear materiales genéricos

### 4.6 Usos educativos actuales destacados

- Generación de imágenes educativas con DALL·E (Bloque 3)
- Canvas para redactar y editar documentos largos iterativamente
- Búsqueda web en tiempo real para verificar información
- Análisis de documentos (PDFs de currículo, normativa)
- Creación y uso de GPTs personalizados (Bloque 4)

---

## 5. KIMI (MOONSHOT AI)

**Fuente:** [kimi.com](https://www.kimi.com/) (agosto 2026)

### 5.1 Estado actual

Kimi es desarrollado por Moonshot AI (China). En 2026 es una de las plataformas de IA más completas del mercado en cuanto a funcionalidades integradas. Va mucho más allá de ser un simple chatbot.

**Nota sobre «Kimi Claw»:** El término «Kimi Claw» que aparecía en V1 hacía referencia a una función o herramienta específica dentro del ecosistema Kimi (relacionada con búsqueda/rastreo web). En la plataforma actual (agosto 2026) aparece en la barra lateral, lo que confirma que sigue presente, pero no es el nombre del producto principal.

### 5.2 Modelos actuales

- Modelos de razonamiento avanzado (Kimi k1.5 y posteriores)
- Contexto muy largo: capacidad de procesar documentos extensos (cientos de páginas)
- Multimodalidad: texto, imagen, archivos

### 5.3 Funciones disponibles (navegador)

| Función | Descripción | Acceso |
|:--------|:------------|:-------|
| **Chat** | Conversación general, análisis, redacción | Gratuito con límites |
| **Deep Research** | Investigación autónoma web, informe estructurado | Gratuito con créditos |
| **Slides** | Creación de presentaciones desde texto o prompts | Gratuito con créditos |
| **Docs** | Creación y edición de documentos | Gratuito con créditos |
| **Sheets** | Hojas de cálculo generadas por IA | Gratuito con créditos |
| **Websites** | Creación de páginas web desde un prompt | Gratuito con créditos |
| **Design** | Generación de diseños visuales | Gratuito con créditos |
| **Agent** | Agente autónomo para tareas encadenadas | Gratuito con créditos |
| **Swarm** | Múltiples agentes trabajando en paralelo | Gratuito con créditos |
| **Kimi Code** | Generación y ejecución de código | Gratuito con créditos |
| **Kimi Work** (Beta) | Suite integrada de trabajo | Beta |
| **Scheduled Tasks** | Tareas programadas de forma autónoma | Gratuito con créditos |

### 5.4 Modelo de precio

- **Plan gratuito:** acceso al chat y funciones básicas con límites diarios
- **Funciones avanzadas:** funcionan con un sistema de créditos mensuales; cuando se agotan, se reducen las funciones disponibles o la velocidad
- **Plan de pago:** más créditos, acceso prioritario, más capacidades de agent y swarm

> **Nota de privacidad:** Kimi es un servicio de una empresa china. Para uso educativo: nunca introducir datos personales del alumnado. Usar solo para creación de materiales genéricos o exploración de la herramienta.

### 5.5 Usos educativos destacados

- **Slides**: crear presentaciones completas desde un texto o descripción
- **Deep Research**: investigar un tema desde múltiples fuentes web
- **Websites**: crear páginas web educativas sin saber código (vibe coding simplificado)
- **Context largo**: analizar documentos extensos sin perder el hilo
- **Agent y Swarm**: demostrar al alumnado cómo funcionan los agentes autónomos

---

## 6. CANVA FOR EDUCATION

**Fuente:** [canva.com/education](https://www.canva.com/education/) (agosto 2026)

### 6.1 Acceso y precio

**100% gratuito** para:
- Docentes K-12 verificados (verificación con email educativo o prueba de empleo)
- Estudiantes (a través de clase invitada por el docente)
- Centros y distritos escolares cualificados

> "Es nuestro compromiso que Canva Education seguirá siendo 100% gratuito para educadores K-12, sus estudiantes y instituciones escolares cualificadas." (Fuente oficial, agosto 2026)

### 6.2 Funciones incluidas en Canva Education (gratuito)

- Acceso a toda la biblioteca de plantillas (millones de diseños)
- **Magic Studio (IA integrada):**
  - Magic Write: generación de texto con IA
  - Text to Image (Imagen generada por IA)
  - Magic Design: diseño automático a partir de una descripción
  - Magic Animate: animaciones automáticas
  - Magic Erase / Magic Edit: edición de imágenes con IA
  - AI Video Generator (verificar disponibilidad en el plan educativo)
  - Background Remover
- Herramientas de vídeo (grabación, edición, subtítulos automáticos)
- Presentaciones, documentos, infografías, pósters, webs
- Pizarras interactivas
- Tareas y actividades para alumnado (crear, asignar, revisar)
- Integración con LMS: Google Classroom, Moodle, Blackboard, Canvas, Teams, Schoology, D2L

### 6.3 Privacidad

Canva for Education cumple con regulaciones de protección de datos. Para menores de edad, los datos se gestionan dentro del entorno de la clase.

### 6.4 Cómo verificarse como docente

1. Ir a [canva.com/edu-signup](https://www.canva.com/edu-signup/)
2. Registrarse con el email educativo (`@edu.gva.es` o similar)
3. Esperar verificación (normalmente pocos días)

---

## 7. GAMMA

**Fuente:** gamma.app (agosto 2026 — página de precios inaccesible durante la auditoría; datos basados en documentación del producto y la versión V1 del curso)

### 7.1 Qué es

Gamma es una plataforma que genera presentaciones, documentos y páginas web completas a partir de un prompt en lenguaje natural. El resultado incluye diseño visual automatizado.

### 7.2 Planes (verificar condiciones actuales en gamma.app/pricing)

| Plan | Precio aproximado | Características |
|:-----|:-----------------|:----------------|
| **Free** | $0 | Funciones básicas, **marca de agua en exportaciones**, límite de créditos de IA |
| **Plus** | ~$10/mes | Sin marca de agua, más créditos IA, exportación a PDF/PPT |
| **Pro** | ~$20/mes | Funciones avanzadas, analíticas, dominio personalizado |

> ⚠️ **Aviso para el curso:** Los límites de créditos y la existencia/ausencia de marca de agua cambian frecuentemente. **No incluir cifras exactas en el contenido pedagógico.** Dirigir al docente a consultar gamma.app/pricing.

### 7.3 Para docentes GVA

- Gamma es un servicio externo, no integrado en el entorno GVA
- Los datos se procesan en servidores de Gamma (EE.UU.)
- **No subir documentos sensibles ni datos del alumnado**
- Útil para crear materiales y presentaciones con contenido no sensible
- El enlace de invitación incluido en V1 probablemente está caducado → incluir solo gamma.app

### 7.4 Alternativa en entorno GVA

Para el docente que necesita generar presentaciones sin salir del entorno protegido: **Copilot en PowerPoint** (con licencia M365 Copilot) o crear el guion en Copilot Chat y ejecutarlo manualmente en PowerPoint.

---

## 8. NAPKIN AI

**Fuente:** napkin.ai (agosto 2026 — página principal no devolvió contenido procesable durante la auditoría)

### 8.1 Qué es

Napkin AI es una herramienta que transforma texto en diagramas, esquemas e infografías de forma automatizada. Dado un texto explicativo, genera una representación visual estructurada.

### 8.2 Estado (agosto 2026)

- Existe un plan gratuito con funcionalidades básicas
- Requiere registro
- Idioma principal: inglés (la generación de diagramas a partir de texto en español puede ser menos precisa)

### 8.3 Utilidad educativa

- Transformar apuntes textuales en diagramas conceptuales
- Crear infografías rápidamente para materiales de clase
- Visualizar procesos y relaciones causa-efecto

> **Para el curso V2:** Napkin AI tiene utilidad como herramienta secundaria de apoyo visual. Incluirla como alternativa en la sección de infografías y esquemas, no como herramienta principal. La **generación de imágenes con texto integrado** tiene el riesgo de ser poco accesible (texto incrustado en imagen sin alt text legible). Preferir siempre HTML/CSS cuando sea posible.

---

## 9. ELEVENLABS

**Fuente:** [elevenlabs.io/pricing](https://elevenlabs.io/pricing) (agosto 2026)

### 9.1 Plan gratuito

**Precio:** $0/mes  
**Créditos:** 10.000 créditos/mes  
**Equivalencia aproximada:** ~10 minutos de audio generado al mes  
**Funciones incluidas:**
- Text to Speech
- Speech to Text
- Sound Effects
- Voice Design
- Music (generación de música)
- Productions (3 proyectos en Studio)
- AI Image Generator (verificar disponibilidad en plan Free)
- AI Video Generator (verificar disponibilidad en plan Free)
- Sin licencia comercial

**Limitaciones del plan gratuito:**
- Sin licencia comercial (no publicar los audios con fines comerciales)
- Solo ~10 minutos de audio por mes
- Calidad de audio: 128 kbps, 44.1kHz
- Precio por minuto extra: ~$0.36/min

### 9.2 Plan Starter ($6/mes)

- 30.000 créditos (~30 min de audio)
- **Licencia comercial** ✅
- Voice Cloning instantáneo
- 20 proyectos en Studio
- Dubbing Studio

### 9.3 Plan Creator ($22/mes, primer mes al 50%: $11)

- 121.000 créditos (~121 min)
- Professional Voice Cloning
- Créditos adicionales

### 9.4 Para docentes GVA

- El plan gratuito es suficiente para crear 1-2 audios educativos cortos al mes
- Sin licencia comercial en el plan gratuito (verificar si los materiales educativos internos lo requieren)
- **No reproducir la voz real de alumnos ni clonados sin consentimiento explícito**
- Útil para: crear narraciones de materiales, adaptar textos a formato audio para alumnado con dificultades lectoras, podcasts educativos

> **Aviso para el curso:** No escribir "10 minutos al mes" en el contenido principal. Los créditos y límites cambian. Indicar: "Modalidad gratuita con límites de uso mensual. Consulta las condiciones actuales en elevenlabs.io/pricing."

---

## 10. HERRAMIENTAS DE VÍDEO: HEYGEN Y SYNTHESIA

**Fuente HeyGen:** [heygen.com/pricing](https://www.heygen.com/pricing) (agosto 2026)

### 10.1 HeyGen

**Plan Free:**
- $0/mes
- **3 vídeos por mes**, máximo **1 minuto por vídeo**
- 500+ avatares predefinidos
- 1 Digital Twin personalizado
- 30+ idiomas
- Procesamiento de vídeo estándar
- Sin eliminación de marca de agua

**Creator ($29/mes):**
- 600 créditos/mes
- Vídeos de hasta 30 minutos
- Exportación 1080p
- Sin marca de agua
- 175+ idiomas y dialectos
- Voice Cloning

**Pro ($49/mes):**
- 1.000 créditos/mes
- Exportación 4K
- Más funciones avanzadas

**Coste de los créditos:**
- Avatar III: 3 créditos/min
- Avatar IV/V: 20 créditos/min
- Traducción con lip-sync: 5 créditos/min

**Para docentes GVA:**
- El plan gratuito permite probar la herramienta pero **3 vídeos de máximo 1 minuto al mes** es muy limitado para uso docente regular
- Para uso sistemático en clase, el plan Creator es necesario (~$29/mes = ~26€/mes)
- **No usar fotos del alumnado para crear avatares sin consentimiento informado**

### 10.2 Synthesia

**Estado agosto 2026:** (no auditado directamente por acceso restringido a precios)
- Plataforma de vídeo con avatares IA similar a HeyGen
- Plan gratuito con límites similares o más restrictivos que HeyGen
- Orientado más al entorno corporativo/empresarial
- Más caro que HeyGen en planes de pago

> **Para el curso V2:** HeyGen es la herramienta de referencia para vídeo con avatares. Synthesia queda como alternativa. Dado el coste de los planes de pago, el uso de estas herramientas en V2 debe plantearse como **recurso de demostración y exploración**, no como herramienta de uso regular gratuito.

---

## 11. AGENTES, GEMS Y GPTS EDUCATIVOS

### 11.1 Microsoft Copilot Agents

**Con Copilot Chat (sin licencia adicional):**
- Acceso a agentes básicos predefinidos de Microsoft
- Capacidad de crear prompts reutilizables que actúan como "agentes ligeros"

**Con licencia M365 Copilot:**
- Researcher, Analyst, Facilitator (agentes preconfigurados)
- Copilot Studio: crear agentes avanzados con flujos, conectores y memoria

**Copilot Studio con cuenta GVA:** Verificar con el administrador. Puede requerir licencia adicional o estar habilitado según el plan educativo de la GVA.

### 11.2 Gemini Gems

**Tipo:** Gratuito (con cuenta personal de Google)  
**Qué son:** Asistentes personalizados de Gemini con instrucciones fijas. El usuario crea un Gem con instrucciones de rol, contexto y comportamiento, y puede usarlo en cualquier conversación nueva sin repetir el contexto.

**Para docentes GVA:**
- Crear Gems con cuenta personal de Google (no con `@edu.gva.es`)
- Útil para crear asistentes pedagógicos reutilizables
- No introducir datos sensibles del centro ni del alumnado

### 11.3 ChatGPT GPTs personalizados

**Plan gratuito:** Usar GPTs creados por otros (biblioteca pública de GPTs)  
**Plan Plus (~$20/mes):** Crear GPTs propios y compartirlos

**Para docentes sin plan de pago:**
- Acceso a la biblioteca de GPTs educativos existentes (sin coste extra)
- No pueden crear sus propios GPTs sin suscripción

### 11.4 Kimi Agent y Kimi Swarm

**Kimi Agent:** Agente autónomo que ejecuta tareas encadenadas: navega por la web, busca información, genera contenido, organiza datos.

**Kimi Swarm:** Múltiples agentes trabajando en paralelo en subtareas de un objetivo mayor. Muy útil como demostración conceptual de agentes autónomos para el alumnado.

**Acceso:** Gratuito con créditos mensuales.

---

## 12. HERRAMIENTAS DE VIBE CODING Y CREACIÓN WEB

### 12.1 Definición de vibe coding en 2026

El término popularizado por Andrej Karpathy: desarrollar aplicaciones conversando con una IA. El usuario describe qué quiere, la IA genera el código, el usuario prueba, describe lo que falla y la IA corrige.

### 12.2 Herramientas principales (agosto 2026)

| Herramienta | Descripción | Plan gratuito | Idioma | Privacidad |
|:------------|:------------|:-------------|:-------|:-----------|
| **Kimi Websites** | Crea webs desde un prompt | Sí, con créditos | EN/CN/otros | Ext. GVA |
| **Bolt.new** | Editor web con IA, crea apps completas | Sí, con límites | EN | Ext. GVA |
| **Replit** | IDE con IA, crear y desplegar apps | Sí (Replit Free) | EN | Ext. GVA |
| **Claude (Anthropic)** | Chat con IA para código, con «Projects» | Sí, con límites | EN/ES | Ext. GVA |
| **ChatGPT Canvas** | Editor colaborativo para código y texto | Sí (plan gratuito) | ES/EN | Ext. GVA |
| **Copilot Chat** | Asistente para código en el navegador | ✅ Con cuenta GVA | ES/EN | ✅ Entorno GVA |
| **GitHub Copilot** | Asistencia de código en VS Code | Gratuito para educación | EN | Ext. GVA |

### 12.3 Para el curso V2 (Bloque 4)

El vibe coding educativo no requiere que el docente sepa programar. El flujo práctico:

1. Describir la necesidad pedagógica
2. Usar ChatGPT, Kimi o Bolt para generar la app
3. Publicar en GitHub Pages (gratuito)
4. Probar con alumnado real

**Herramienta recomendada para empezar:** ChatGPT (plan gratuito) + Canvas, o Kimi Websites, para crear apps simples sin configurar entornos locales.

---

## 13. TABLA RESUMEN: ¿QUÉ HERRAMIENTA USO PARA...?

> Esta tabla debe aparecer en el curso como recurso de decisión permanente. Los límites exactos de uso gratuito deben consultarse en las webs oficiales.

| Tarea docente | Herramienta recomendada | Alternativa | Gratuita | Entorno GVA | Advertencia privacidad |
|:--------------|:------------------------|:------------|:--------:|:-----------:|:----------------------|
| Redactar actas, correos, documentos | Copilot Chat | Gemini, ChatGPT | ✅ | ✅ (Copilot) | Solo en Copilot @edu.gva.es para datos sensibles |
| Analizar el currículo oficial (DOGV) | NotebookLM | Copilot Chat | ✅ | ⚠️ | No subir datos del alumnado |
| Investigar un tema con fuentes verificadas | NotebookLM | Gemini Deep Research | ✅ | ⚠️ | Solo contenido no sensible |
| Crear presentación visual | Gamma | Canva, Kimi Slides | ✅ (con límites) | ❌ | No subir datos sensibles |
| Crear presentación en entorno GVA | Copilot en PowerPoint | Copilot Chat + PPT manual | ⚠️ licencia | ✅ | Entorno protegido |
| Diseñar infografía | Canva | Napkin AI | ✅ Canva Edu | ❌ | No datos del alumnado |
| Generar imagen educativa | Copilot Chat (DALL·E) | ChatGPT, Gemini | ✅ | ✅ (Copilot) | Solo para contenido no real |
| Crear audio para materiales | ElevenLabs | Canva (texto a audio) | ✅ (con límites) | ❌ | No voces reales del alumnado |
| Crear vídeo con avatar IA | HeyGen | Synthesia | ✅ (muy limitado) | ❌ | No fotos del alumnado |
| Diseñar rúbricas LOMLOE | Copilot Chat | Gemini, ChatGPT | ✅ | ✅ (Copilot) | Sin datos nominales del alumnado |
| Crear retroalimentación personalizada | Copilot Chat | ChatGPT | ✅ | ✅ (Copilot) | Usar datos anonimizados |
| Adaptar textos a diferentes niveles | Copilot Chat | Gemini, ChatGPT | ✅ | ✅ (Copilot) | Sin datos del alumnado |
| Crear cómic educativo (guion) | ChatGPT / Copilot Chat | Gemini | ✅ | ✅ (Copilot) | — |
| Diseñar situación de aprendizaje | Copilot Chat | Gemini, ChatGPT | ✅ | ✅ (Copilot) | — |
| Crear asistente/agente educativo reutilizable | Gemini Gems | GPTs ChatGPT, Copilot Studio | ✅ (Gems) | ⚠️ Copilot Studio | Sin datos del alumnado |
| Crear app educativa interactiva | ChatGPT + Canvas | Kimi Websites, Bolt | ✅ (con límites) | ❌ | No datos del alumnado |
| Investigar con múltiples agentes en paralelo | Kimi Swarm | — | ✅ (con créditos) | ❌ | Solo contenido no sensible |
| Audio overview de documentos curriculares | NotebookLM | — | ✅ | ⚠️ | Solo documentos no sensibles |
| Resumen de reunión de Teams | Copilot en Teams | — | ⚠️ licencia M365 Copilot | ✅ | Entorno protegido |

---

## 14. ALTERNATIVAS GRATUITAS DE INTERÉS EDUCATIVO

### 14.1 Microsoft Education Hub

- [education.microsoft.com](https://education.microsoft.com/): formación para docentes, recursos pedagógicos y certificaciones de Microsoft en educación.
- Acceso gratuito para docentes verificados.

### 14.2 Google for Education Teacher Center

- Formación oficial de Google para docentes.
- Incluye cursos sobre Workspace for Education y uso de IA.

### 14.3 Adobe Express for Education

- Suite de diseño simplificado con IA integrada.
- Gratuito para educadores verificados.
- Buena alternativa a Canva para centros con licencia Adobe.

### 14.4 CapCut

- Editor de vídeo gratuito con funciones de IA (subtítulos automáticos, efectos, eliminación de fondo, avatar IA básico).
- Alternativa económica a HeyGen para vídeos simples con subtítulos.
- Propiedad de ByteDance (China). Revisar políticas de privacidad antes de usar.

### 14.5 Udio / Suno

- Generadores de música con IA.
- Plan gratuito con créditos limitados.
- Útil para crear jingles o fondos musicales para materiales educativos.
- No subir contenido protegido por derechos de autor.

### 14.6 Google Labs

- [labs.google](https://labs.google): experimentos de IA en fase beta.
- Algunos útiles para educación (GenType, Whisk, AudioFX, etc.).
- Disponibilidad variable por país/idioma. Tratar como recurso de exploración, no como herramienta estable.

---

## RESUMEN EJECUTIVO PARA EL CURSO

### Las tres herramientas prioritarias para docentes GVA en 2026

| # | Herramienta | Por qué es prioritaria | Condición |
|:-:|:-----------|:-----------------------|:----------|
| 1 | **Copilot Chat** (`@edu.gva.es`) | Entorno protegido, integrado en Microsoft 365, gratuito con cuenta GVA | Verificar que el tenant GVA lo tiene habilitado |
| 2 | **NotebookLM** | Única herramienta que trabaja fundamentada en fuentes del docente, con citas verificables | Cuenta personal de Google; no subir datos sensibles |
| 3 | **Canva for Education** | 100% gratuito para docentes verificados, funciones de IA incluidas, integración con Google Classroom y Teams | Verificación educativa (pocos días) |

### Las tres herramientas de comparativa y ampliación

| # | Herramienta | Para qué añade valor | Condición |
|:-:|:-----------|:---------------------|:----------|
| 4 | **Gemini** | Deep Research autónomo, multimodalidad, Canvas, Gems | Cuenta personal; no datos sensibles |
| 5 | **ChatGPT** | Plataforma generalista de referencia, generación de imágenes, GPTs educativos, vibe coding básico | Cuenta personal; plan gratuito con límites |
| 6 | **Kimi** | Creación de presentaciones/webs/documentos desde IA, Agent Swarm como demostración | Cuenta personal; no datos sensibles; empresa china |

---

*Investigación completada · agosto 2026 · Rama: curso-ia-cefire-v2*  
*Fuentes: documentación oficial de cada plataforma consultada en agosto 2026*  
*Los precios, límites y funciones pueden cambiar. Verificar siempre en las webs oficiales antes de presentar al alumnado.*
