---
title: notes
permalink: /notes/
---

{% assign notes = site.notes | sort: 'date' | reverse %}
{% for note in notes %}

<h2>
    <a href="{{ note.url }}" >
        {{ note.title }}
    </a>
    <br />
</h2>
<p style="font-size: 1em; color: #696969">
{{ note.date  | date: "%A, %B %d, %Y" }}

<!-- 0 1 2 3 4 5 6 7 8 9 -->
<!-- ∫ ≓ ⋟ ∻ ≈ ⋗ ∴ ⋈ ⋌ ≗ -->

<span class="date sub">
{% assign date = note.date | date: "%Y※%m※%d" | split: '' %}
{% for char in date %}
  {% case char %}
    {% when '0' %}∫
    {% when '1' %}≓
    {% when '2' %}⋟
    {% when '3' %}∻
    {% when '4' %}≈
    {% when '5' %}⋗
    {% when '6' %}∴
    {% when '7' %}⋈
    {% when '8' %}⋌
    {% when '9' %}≗
    {% else %}{{char}}
  {% endcase %}
{% endfor %}
</span>
</p>
{{ note.content }}

{% endfor %}

