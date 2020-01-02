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
※
{% assign m = writing.date | date: "%m" %}
{% case m %}
  {% when '01' %}∫≓
  {% when '02' %}∫⋟
  {% when '03' %}∫∻
  {% when '04' %}∫≈
  {% when '05' %}∫⋗
  {% when '06' %}∫∴
  {% when '07' %}∫⋈
  {% when '08' %}∫⋌
  {% when '09' %}∫≗
  {% when '10' %}≓∫
  {% when '11' %}≓≓
  {% when '12' %}≓⋟
{% endcase %}
※
{% assign m = writing.date | date: "%d" %}
{% case m %}
  {% when '01' %}∫≓
  {% when '02' %}∫⋟
  {% when '03' %}∫∻
  {% when '04' %}∫≈
  {% when '05' %}∫⋗
  {% when '06' %}∫∴
  {% when '07' %}∫⋈
  {% when '08' %}∫⋌
  {% when '09' %}∫≗
  {% when '10' %}≓∫
  {% when '11' %}≓≓
  {% when '12' %}≓⋟
  {% when '13' %}≓∻
  {% when '14' %}≓≈
  {% when '15' %}≓⋗
  {% when '16' %}≓∴
  {% when '17' %}≓⋈
  {% when '18' %}≓⋌
  {% when '19' %}≓≗
  {% when '20' %}⋟∫
  {% when '21' %}⋟≓
  {% when '22' %}⋟⋟
  {% when '23' %}⋟∻
  {% when '24' %}⋟≈
  {% when '25' %}⋟⋗
  {% when '26' %}⋟∴
  {% when '27' %}⋟⋈
  {% when '28' %}⋟⋌
  {% when '29' %}⋟≗
  {% when '30' %}∴∫
  {% when '31' %}∻≓
{% endcase %}
</span>
<!-- https://github.com/Shopify/liquid/issues/223 -->
{% if writing.tags != empty %}
|
{{ writing.tags }}
{% endif %}
</p>
{{ writing.content }}

{% endfor %}
[//]: # "%A, %B %d, %Y"
[//]: # "%A"

