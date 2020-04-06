---
title: notes
permalink: /notes/
---

{% assign notes = site.notes | sort: 'date' | reverse %}
{% for note in notes %}
<h2><a href="{{ note.url }}" >{{ note.title }}</a></h2>

<p class="sub">
Created → {{ note.created  | date: "%B %d, %Y" }}
</p>

<p class="sub">
Updated → {{ note.date  | date: "%B %d, %Y" }}
</p>
{% endfor %}

