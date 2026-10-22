---
layout: page
title: "Formación Profesional · Laboratorio"
parent: "Laboratorio de prompts educativos"
grand_parent: "Bloque 1 · IA Colaborativa y Gestión GVA"
nav_order: 4
lang: es
translation_key: bloque1-laboratorio-fp
prompt_lab: true
---
{% include language-switcher.html %}

# Formación Profesional · Laboratorio de prompts
{: .fs-7 }

Construirás prompts técnicos completos, verificarás resultados y trabajarás con simulaciones profesionales realistas. **Elige un reto; no son actividades obligatorias adicionales.**

{% include prompt-lab-privacy.html %}

## Catálogo
{: id="catalogo" }
<div class="prompt-lab-catalog">
{% for activity in site.data.bloque1_fp_es %}<article class="prompt-lab-card"><p class="prompt-lab-card__title"><a href="#{{ activity.id | downcase }}">{{ activity.title }}</a></p><p>{{ activity.area }}</p><p>{{ activity.goal }}</p></article>{% endfor %}
</div>

{% for activity in site.data.bloque1_fp_es %}{% include prompt-lab-activity.html a=activity %}{% endfor %}

[Volver al laboratorio]({{ '/bloque1-actividades.html' | relative_url }})
