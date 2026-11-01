---
layout: page
title: "Laboratorio · Cómics educativos con IA"
parent: "Bloque 3: Generación Multimodal"
nav_order: 7
---

# Laboratorio · Del guion al cómic con IA
{: .fs-8 }

Dos ejemplos reales de trabajo con **ChatGPT y generación de imágenes**: un cuento de emociones para Infantil y una aventura sobre el movimiento y los músculos. El objetivo no es solo obtener un dibujo: aprenderemos a **preparar el guion, mantener la apariencia de los personajes, cambiar el estilo y revisar el producto**.

> **Nota:** Los protagonistas de estas actividades se plantean como personajes ilustrados ficticios. No utilices fotos identificables del alumnado ni datos personales en servicios externos.

## Caso 1 · Sarah, Salsa y las emociones (Infantil, 3 años)

**Objetivo didáctico:** reconocer alegría, sorpresa, miedo, tristeza, enfado y calma; ensayar una respiración sencilla (oler una flor y soplar una vela imaginaria).

**Personajes constantes:**
- **Sarah:** niña ilustrada de seis años, cabello rubio ondulado, ganchos rojos, camiseta amarilla, tutú rosa y deportivas de colores.
- **Salsa:** perrita Yorkshire regordeta y dormilona, con pequeño moño y lazo rojo.

### Cuaderno de NotebookLM de referencia

El cuento de Sarah y Salsa se trabajó también en un cuaderno de NotebookLM que puedes consultar como ejemplo para diseñar una historia educativa a partir de fuentes propias:

**[Abrir el cuaderno «Sarah, Salsa y las emociones» en NotebookLM](https://notebook.google.com/notebook/d032e7ea-08f2-4791-8096-fb5005c57ca7)**

> **Acceso:** para abrir el cuaderno necesitas una cuenta Google y permisos de lectura concedidos por su propietaria. Si aparece «Solicitar acceso», pide permiso; no se ha comprobado que el enlace sea público.

**Estructura del cómic:** portada y siete páginas: (1) juego y alegría; (2) estallido inesperado de un globo y miedo; (3) torre de bloques caída y tristeza; (4) enfado; (5) respiración flor-vela; (6) calma y abrazo; (7) reconstrucción de la torre y pregunta final: «Y tú, ¿cómo te sientes hoy?».

### Prompt reutilizable: cuento emocional

```text
Crea un cómic educativo para Educación Infantil (3 años), titulado
«¡Sarah, Salsa y las emociones!». Dibujo cartoon de formas redondeadas,
expresiones muy visibles, colores vivos, fondo de juego luminoso.

Mantén los mismos personajes en todas las viñetas:
Sarah, niña ficticia rubia de melena ondulada con ganchos rojos,
camiseta amarilla, tutú rosa y zapatillas de colores;
Salsa, Yorkshire regordeta con moño y lazo rojo.

Portada y 7 páginas, con 2 viñetas por página salvo la página 5,
que contiene 3. Secuencia: alegría al construir una torre;
sorpresa al explotar un globo; Salsa siente miedo y se esconde;
la torre cae y Sarah se pone triste; Sarah se enfada;
se detiene y practica «huelo una flor, soplo una vela»;
recupera la calma, abraza a Salsa y vuelve a jugar.
Cierra con «Y tú, ¿cómo te sientes hoy?».

Mantén lenguaje muy breve, legible y adaptado a 3 años.
Antes de ilustrar, presenta un guion por página y viñeta.
Después genera la portada y una página cada vez, sin cambiar
ropa, peinados, colores ni diseño de Sarah y Salsa.
```

### Resultado visual generado

![Cómic de Sarah y Salsa, emociones en estilo cartoon]({{ '/assets/img/comics/sarah-salsa-emociones.png' | relative_url }})

**Para observar en clase:** ¿se distinguen las emociones sin leer? ¿El texto cabe en los bocadillos? ¿La estrategia de respiración aparece visualmente en dos pasos? El globo que explota debe mostrarse sin escenas violentas ni aterradoras.

## Caso 2 · La invasión de la gelatina amarilla (Primaria / Secundaria)

**Objetivo didáctico:** explicar que los músculos necesitan energía para moverse, que el organismo utiliza distintos combustibles y que la actividad física regular contribuye a la salud.

**Personajes constantes:**
- **Tomás:** joven ficticio alto y atlético, cabello negro rizado recogido en coleta, ojos verdes, traje tecnológico de superhéroe con luces de neón.
- **Popi:** Yorkshire negro con moño recogido por una goma naranja y minicapa heroica.

**Guion de partida:** portada y diez páginas. El centro de mando envía a Tomás y Popi al interior del cuerpo; visitan el tejido muscular, observan personajes que representan reservas energéticas, vuelven al centro y animan a adoptar hábitos activos.

### Prompt reutilizable: aventura científica cartoon

```text
Convierte esta historia de divulgación sobre músculos y energía en un
cómic educativo titulado «La invasión de la gelatina amarilla».

Estilo: cartoon de aventuras, contornos gruesos, colores saturados,
figuras redondeadas, humor visual, expresiones exageradas y viñetas
dinámicas; evita estética realista y anatomía inquietante.

Conserva siempre a Tomás (pelo negro rizado con coleta, ojos verdes,
traje de superhéroe tecnológico con luz azul) y Popi (Yorkshire negro,
moño con goma naranja, minicapa).

Organiza portada y 10 páginas con unas 3-4 viñetas por página.
Usa un centro de mando, un viaje microscópico y una ciudad de fibras
musculares habitada por células caricaturescas. Las reservas de
energía aparecen como personajes amarillos simpáticos, no como
enemigos del cuerpo.

Mensajes científicos correctos: los músculos utilizan ATP y obtienen
energía a partir de distintos nutrientes; grasas y carbohidratos
pueden emplearse simultáneamente según las circunstancias; el tejido
muscular no se transforma en grasa; el ejercicio regular mejora la
función muscular y cardiovascular. Evita asociar tamaño corporal
con pereza, culpa o enfermedad.

Escribe primero el guion revisado con diálogos muy cortos. Después
genera la portada y las páginas por separado. Comprueba continuidad
de personajes, orden de viñetas, ortografía y precisión científica.
```

### Resultados visuales generados

**Primera versión: cómic de superhéroes**

![Versión de superhéroes de Tomás y Popi]({{ '/assets/img/comics/tomas-popi-superheroes.png' | relative_url }})

**Segunda versión: estilo cartoon**

![Versión cartoon de Tomás y Popi]({{ '/assets/img/comics/tomas-popi-cartoon.png' | relative_url }})

### Experimentación · Cambiar solo el estilo

Partimos del **mismo guion** y pedimos dos interpretaciones visuales. En la primera, «cómic americano de superhéroes: entintado grueso, composición épica, dramatismo, luces contrastadas». Después, sin cambiar ni personajes ni historia:

```text
Cambia el estilo del cómic anterior a cartoon infantil:
formas redondeadas, rostros expresivos, proporciones caricaturescas,
colores brillantes y ambiente amable. Conserva exactamente los
personajes, sus accesorios, la secuencia narrativa y el significado
educativo. Genera cada página por separado para mejorar la legibilidad.
```

**Preguntas para comparar:** ¿qué versión se comprende mejor a la edad elegida? ¿La IA conserva los personajes? ¿Qué errores aparecen al generar muchas páginas de golpe? ¿Se pueden leer todos los textos?

## Flujo de trabajo recomendado

1. **Definir el objetivo** y la edad: qué aprenderá el alumnado.
2. **Crear fichas de personajes** (rasgos, ropa, accesorios, paleta).
3. **Escribir el guion** por páginas, viñetas, planos y diálogos.
4. **Generar primero una portada de prueba** y ajustar la apariencia.
5. **Crear página a página** usando la referencia visual aprobada; evitar un único collage con todo el cuento.
6. **Corregir el texto y maquetar** los bocadillos en Canva, PowerPoint u otra herramienta si la IA introduce letras erróneas.
7. **Revisar la exactitud didáctica**, accesibilidad y coherencia antes de compartirlo.

### Revisión científica importante del segundo ejemplo

El guion de partida dramatiza la grasa como invasora de los músculos. Es una **metáfora narrativa, no una descripción literal**: los músculos no se convierten en células grasas, la grasa corporal tiene funciones necesarias, y el organismo utiliza mezclas de combustibles durante el ejercicio. Tampoco debe enseñarse que un único partido de baloncesto «limpia» por completo el tejido muscular. Evitemos mensajes de culpabilización corporal o recomendaciones dietéticas restrictivas; centrémonos en **movimiento, descanso, alimentación variada y bienestar**.

## Propuesta para el profesorado

Elige uno de los ejemplos o un contenido de tu materia. Entrega **guion de 4-6 viñetas, dos estilos de la misma escena, una versión corregida y una reflexión breve** sobre continuidad visual, legibilidad y rigor del contenido.

[← Volver al Bloque 3]({{ '/bloque3.html' | relative_url }})
