---
title: writings
permalink: /writings/
---

{% assign writings = site.writings | sort: 'date' | reverse %}
{% for writing in writings %}

<h2>
    <a href="{{ writing.url }}" >
        {{ writing.title }}
    </a>
    <br />
</h2>
<p style="font-size: 1em; color: #696969">
{{ writing.date  | date: "%A, %B %d, %Y" }}

<!-- 0 1 2 3 4 5 6 7 8 9 -->
<!-- ∫ ≓ ⋟ ∻ ≈ ⋗ ∴ ⋈ ⋌ ≗ -->

<!--:: {{ note.date | date: "%Y※%m※%d" | xyz }}-->

<span class="date sub">
{% assign m = writing.date | date: "%Y" %}
{% case m %}
  {% when '2015' %}⋟∫≓⋗
  {% when '2016' %}⋟∫≓∴
  {% when '2017' %}⋟∫≓⋈
  {% when '2018' %}⋟∫≓⋌
  {% when '2019' %}⋟∫≓≗
  {% when '2020' %}⋟∫≓∫
{% endcase %}
</span>
</p>
{{ writing.content }}

{% endfor %}

