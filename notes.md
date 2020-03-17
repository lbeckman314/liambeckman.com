---
title: etc
---

{% assign notes = site.notes | sort: 'date' | reverse %}
{% for note in notes %}
<h2><a href="{{ note.url }}" >{{ note.title }}</a></h2>

<p class="sub">
Created → {{ note.created  | date: "%B %d, %Y" }}
<!--:: {{ note.created | date: "%Y※%m※%d" | xyz }}-->
</p>

<p class="sub">
Updated → {{ note.date  | date: "%B %d, %Y" }}
<!--:: {{ note.date | date: "%Y※%m※%d" | xyz }}-->
</p>
{% endfor %}

