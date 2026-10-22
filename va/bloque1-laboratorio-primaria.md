---
layout: page
title: "Educació Primària · Laboratori"
parent: "Laboratori de prompts educatius"
grand_parent: "Bloc 1 · IA Col·laborativa i Gestió GVA"
nav_order: 2
nav_exclude: true
lang: va
translation_key: bloque1-laboratorio-primaria
prompt_lab: true
---
{% include language-switcher.html %}

# Educació Primària · Laboratori de prompts
{: .fs-7 }

Aprendràs a adaptar un mateix contingut a diferents cursos, ritmes i objectius. **Tria un repte; no són activitats obligatòries addicionals.**

{% include prompt-lab-privacy.html %}

## Catàleg
{: id="catalogo" }
<div class="prompt-lab-catalog">
{% for activity in site.data.bloque1_primaria_va %}<article class="prompt-lab-card"><p class="prompt-lab-card__title"><a href="#{{ activity.id | downcase }}">{{ activity.title }}</a></p><p>{{ activity.area }}</p><p>{{ activity.goal }}</p></article>{% endfor %}
</div>
{% for activity in site.data.bloque1_primaria_va %}{% include prompt-lab-activity.html a=activity %}{% endfor %}
[Torna al laboratori]({{ '/va/bloque1-actividades.html' | relative_url }})
