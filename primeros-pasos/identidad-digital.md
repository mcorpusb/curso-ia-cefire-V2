---
layout: default
title: "Identidad digital y acceso"
parent: Inicio
nav_order: 0
---

# Identidad digital

Todo lo que necesitas saber sobre tu identidad digital como docente antes de comenzar el curso.

## ¿Qué es la identidad digital?

![Esquema de identidad digital docente: usuario, contraseña, correo, perfil profesional, acceso seguro]({{ '/assets/img/identidad-digital-1.png' | relative_url }})

Tu identidad digital es el conjunto de datos que te identifican en los sistemas y plataformas en línea. En el ámbito educativo, esta identidad te permite acceder de forma segura a las herramientas que utilizas en tu labor docente. Igual que en el mundo físico necesitas un DNI para identificarte, en el entorno digital utilizas un usuario y una contraseña para demostrar que eres tú.

## ¿Para qué sirve tu identidad digital?

Te permite:

- Acceder a plataformas educativas como Aules, ITACA 3 o Web Familia.
- Utilizar herramientas corporativas como el correo @edu.gva.es y Microsoft 365.
- Proteger tu información y la del alumnado frente a accesos no autorizados.
- Firmar y gestionar documentos oficiales.
- Participar en formación en línea como este curso.

## Componentes principales

Tu identidad digital se compone de varios elementos clave:

| Componente | Descripción |
|---|---|
| Usuario | Tu identificador personal (asociado a tu cuenta corporativa). |
| Contraseña | Clave secreta que protege tu acceso. |
| Correo electrónico | Dirección @edu.gva.es como canal oficial. |
| Perfil profesional | Información asociada a tu puesto y centro. |

## Cómo funciona el acceso digital

![Flujo de acceso digital: usuario, verificación, MFA, acceso, protección de datos]({{ '/assets/img/flujo-identidad.svg' | relative_url }})

El proceso habitual es sencillo:

1. Introduces tu usuario y contraseña.
2. El sistema verifica tu identidad.
3. (Opcional pero recomendable) Se aplica un segundo factor (MFA).
4. Accedes a la plataforma.
5. Tus datos quedan protegidos según tus permisos.

## Advertencia de seguridad: caso real (2026)

Recientemente se detectó una vulnerabilidad relacionada con la gestión de permisos y control de acceso en Lilli, una herramienta interna de IA utilizada en entornos corporativos. No se ha confirmado una filtración masiva de datos, pero el incidente es relevante como ejemplo real de por qué la identidad digital importa. El problema estuvo en la definición y control de los permisos entre usuarios, no en un ataque externo clásico. La organización corrigió la vulnerabilidad de forma rápida y responsable.

### Qué nos enseña este caso

- La seguridad depende en gran parte de cómo se gestionan las identidades y los accesos.
- Incluso sistemas avanzados pueden fallar si los permisos no están bien definidos.
- La protección no es solo tecnológica: también depende del uso que hacemos.

**Tu identidad digital es una pieza clave de la seguridad.**

## Cómo acceder y gestionar tu identidad

### Cuenta @edu.gva.es

Es tu cuenta principal para acceder a Microsoft 365 (Copilot, Teams, Outlook, etc.).

- [https://www.office.com/](https://www.office.com/)
- [https://login.microsoftonline.com/](https://login.microsoftonline.com/)

### ITACA 3

[https://itaca3.edu.gva.es/](https://itaca3.edu.gva.es/)

Permite gestionar datos académicos y administrativos del centro.

### Web Familia

Canal de comunicación con las familias:

- Mensajes
- Calificaciones
- Informes

💡 Utiliza la misma identidad corporativa.

## Recuperación de acceso

Si tienes problemas:

- Restablece la contraseña en [https://portal.edu.gva.es/](https://portal.edu.gva.es/)
- Revisa credenciales
- Contacta con el SAI o coordinador TIC

> ⚠️ Nunca compartas tu contraseña.

## Buenas prácticas de seguridad digital

### Protección de credenciales

- Usa contraseñas robustas (mínimo 12 caracteres) y únicas para cada servicio.
- No reutilices contraseñas entre plataformas.
- Cambia tus contraseñas periódicamente.
- No compartas tus credenciales con nadie.
- Cierra siempre la sesión en equipos compartidos.

### Doble factor (MFA)

- Actívalo siempre que esté disponible.
- Es la medida más efectiva contra accesos no autorizados.

### Uso seguro de herramientas de IA

- No introduzcas datos personales, sensibles o confidenciales en herramientas no autorizadas.
- Minimiza y anonimiza los datos siempre que sea posible.
- Recuerda: la IA no distingue siempre entre datos e instrucciones.

### Higiene de prompts

- Evita incluir nombres completos, DNI, expedientes o información sensible en tus consultas a IA.
- Antes de enviar información, revisa y elimina datos innecesarios.

### Verificación humana

- Revisa siempre los resultados antes de usarlos, especialmente en documentos oficiales o educativos.
- No confíes ciegamente en la respuesta de una IA.
- Si no controlas el origen del contenido, **no des la respuesta por buena automáticamente** (enfoque Zero Trust).

### Seguridad del dispositivo

- Mantén tus dispositivos actualizados.
- Activa el cifrado de disco (FileVault en Mac, BitLocker en Windows, cifrado en Linux).
- Protege el acceso físico a tus equipos.
- La seguridad no depende solo de la tecnología, sino también del criterio profesional.

## Casos reales recientes: seguridad en IA

### Caso 1: Lilli (McKinsey)

**Qué ocurrió**: se detectó una vulnerabilidad en la gestión de permisos entre usuarios en una herramienta de IA interna.  
**Qué problema de seguridad hay detrás**: el control de identidad y los permisos no estaban correctamente definidos, lo que podría haber permitido accesos indebidos.  
**Qué significa para ti como docente**: tu cuenta es una puerta de acceso a información sensible. Si los permisos no están bien gestionados, los datos pueden quedar expuestos.

**Qué debes hacer tú**

- Activa siempre el doble factor (MFA).
- No reutilices contraseñas.
- Cierra sesión en equipos compartidos.
- Revisa periódicamente tus accesos y actividad.

### Caso 2: Prompt injection en Copilot

![Esquema de prompt injection: entrada externa, instrucciones ocultas, IA, manipulación, revisión humana]({{ '/assets/img/prompt-injection.svg' | relative_url }})

**Qué es**: una técnica en la que se introducen instrucciones ocultas en textos, documentos o contenidos que la IA interpreta como órdenes válidas.  
**Qué es la inyección indirecta**: ocurre cuando la IA recibe instrucciones camufladas en documentos, páginas web, correos, nombres de archivo o cualquier contenido externo.

**Cómo puede producirse**

- Analizando documentos con texto oculto.
- Abriendo enlaces o archivos con instrucciones embebidas.
- Procesando correos o mensajes con contenido manipulado.

**Por qué ocurre**: la IA puede confundir datos con instrucciones, generando respuestas manipuladas o exponiendo información.

**Qué debes hacer tú**

- No confíes en contenido externo sin revisar.
- Verifica siempre la respuesta antes de reutilizarla.
- No introduzcas datos sensibles en herramientas de IA.
- Revisa documentos antes de analizarlos con IA.

## Tabla comparativa de riesgos

| Riesgo | Ejemplo real | Qué puede pasar | Qué hacer |
|---|---|---|---|
| Gestión de identidad | Lilli (McKinsey) | Acceso indebido | MFA + contraseñas seguras + revisar accesos |
| Prompt injection | Copilot | Respuestas manipuladas | Verificar resultados + no confiar ciegamente |

## Seguridad del dispositivo y cifrado

![Esquema de cifrado: dispositivo, disco cifrado, datos protegidos, acceso bloqueado, FileVault, BitLocker, Linux]({{ '/assets/img/cifrado-datos-1.png' | relative_url }})

El cifrado protege tus datos frente a accesos físicos no autorizados. Es fundamental para salvaguardar información sensible como datos del alumnado, informes o comunicaciones.

### ¿Por qué es importante?

Porque manejas información confidencial y eres responsable de su protección.

### Configuración básica por sistema

- **🍎 Mac:** activa FileVault.
- **🪟 Windows:** utiliza BitLocker.
- **🐧 Linux:** habilita el cifrado durante la instalación.

💡 Mantén siempre el sistema actualizado y bloquea la pantalla cuando te ausentes.

## La seguridad evoluciona contigo

Las herramientas y amenazas cambian constantemente. La tecnología ayuda, pero tu criterio profesional es esencial. La seguridad no depende solo de la tecnología, sino también del criterio profesional.

## Qué puedes hacer tú

- Mantener dispositivos actualizados.
- Activar cifrado.
- Aplicar buenas prácticas.
- Usar la IA con criterio.

![Checklist de uso seguro de IA: no datos sensibles, anonimizar, verificar, criterio profesional]({{ '/assets/img/uso-seguro-ia.svg' | relative_url }})

🔑 **No necesitas ser experto/a para estar protegido/a. Tu identidad digital es tu primera línea de defensa.**

## Referencias y lecturas recomendadas

### Seguridad e identidad digital

- [INCIBE – Ciudadanía](https://www.incibe.es/ciudadania)
- [Agencia Española de Protección de Datos (AEPD) – Guías](https://www.aepd.es/guias)
- [NIST – AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)

### Copilot y seguridad en IA

- [Microsoft Learn – Datos, privacidad y seguridad para Microsoft 365 Copilot](https://learn.microsoft.com/es-es/microsoft-365/copilot/microsoft-365-copilot-privacy)
- [Microsoft Learn – Protección y privacidad de Copilot](https://learn.microsoft.com/es-es/copilot/privacy-and-protections)
- [Microsoft Learn – Protección de datos empresariales](https://learn.microsoft.com/es-es/microsoft-365/copilot/enterprise-data-protection)

### Prompt injection y riesgos en IA

- [OWASP – Prompt Injection](https://owasp.org/www-community/attacks/PromptInjection)
- [OWASP Top 10 for LLM Applications](https://owasp.org/www-project-top-10-for-large-language-model-applications/)
- [OWASP Cheat Sheet – Prompt Injection Prevention](https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html)
- [NIST – Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)
