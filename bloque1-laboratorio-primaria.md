---
layout: page
title: "Educación Primaria · Laboratorio"
parent: "Laboratorio de prompts educativos"
grand_parent: "Bloque 1 · IA Colaborativa y Gestión GVA"
nav_order: 2
lang: es
translation_key: bloque1-laboratorio-primaria
prompt_lab: true
---
{% include language-switcher.html %}

# Educación Primaria · Laboratorio de prompts
{: .fs-7 }

Aprenderás a adaptar un mismo contenido a diferentes cursos, ritmos y objetivos. **Elige un reto; no son actividades obligatorias adicionales.**

{% include prompt-lab-privacy.html %}

## Catálogo
{: id="catalogo" }
<div class="prompt-lab-catalog">
{% for activity in site.data.bloque1_primaria_es %}<article class="prompt-lab-card"><p class="prompt-lab-card__title"><a href="#{{ activity.id | downcase }}">{{ activity.title }}</a></p><p>{{ activity.area }}</p><p>{{ activity.goal }}</p></article>{% endfor %}
</div>

{% for activity in site.data.bloque1_primaria_es %}{% include prompt-lab-activity.html a=activity %}{% endfor %}

[Volver al laboratorio]({{ '/bloque1-actividades.html' | relative_url }})
