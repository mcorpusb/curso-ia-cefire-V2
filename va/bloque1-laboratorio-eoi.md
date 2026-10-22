---
layout: page
title: "EOI · Laboratori"
parent: "Laboratori de prompts educatius"
grand_parent: "Bloc 1 · IA Col·laborativa i Gestió GVA"
nav_order: 5
nav_exclude: true
lang: va
translation_key: bloque1-laboratorio-eoi
prompt_lab: true
---
{% include language-switcher.html %}

# Escoles Oficials d’Idiomes · Laboratori de prompts
{: .fs-7 }

Aprendràs a ajustar els prompts al nivell lingüístic, a l’objectiu comunicatiu i a l’activitat de llengua. **Tria un repte; no són activitats obligatòries addicionals.**

{% include prompt-lab-privacy.html %}

## Catàleg
{: id="catalogo" }
<div class="prompt-lab-catalog">
{% for activity in site.data.bloque1_eoi_va %}<article class="prompt-lab-card"><p class="prompt-lab-card__title"><a href="#{{ activity.id | downcase }}">{{ activity.title }}</a></p><p>{{ activity.area }}</p><p>{{ activity.goal }}</p></article>{% endfor %}
</div>
{% for activity in site.data.bloque1_eoi_va %}{% include prompt-lab-activity.html a=activity %}{% endfor %}
[Torna al laboratori]({{ '/va/bloque1-actividades.html' | relative_url }})
