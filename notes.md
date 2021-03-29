---
title: notes
permalink: /notes/
---

{% assign notes = site.notes | sort: 'date' | reverse %}
{% for note in notes %}

<div class="notes">
  <div class="bot">
    <h2 class="notes-title"><a href="{{ note.url }}">{{ note.title }}</a></h2>
    <p class="notes-info">{{ note.date | date: "%A, %B %d, %Y" }} <span class="sub">※</span> {{ note.tags }}</p>
  </div>
  <p class="bot">{{ note.excerpt }}</p>
</div>

{% endfor %}

