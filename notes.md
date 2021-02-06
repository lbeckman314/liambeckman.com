---
title: notes
permalink: /notes/
---

{% assign notes = site.notes | sort: 'date' | reverse %}
{% for note in notes %}

<h1><a href="{{ note.url }}" >{{ note.title }}</a></h1>
<p>{{ note.date  | date: "%A, %B %d, %Y" }}</p>
<p>{{ note.excerpt }}</p>
{% endfor %}

