---
layout: my-default
---

{% assign posts = site.posts | sort: 'date' | reverse %}
{% for post in posts %}

<h2>
    <a href="{{ post.url }}" >
        {{ post.title }}
    </a>
    <br />
</h2>
<p style="font-size: 1em; color: #696969">
{{ post.date  | date: "%A, %B %d, %Y" }}
:: 
{% assign m = post.date | date: "%Y" %}
{% case m %}
  {% when '2018' %}⋟∫≓⋌
{% endcase %}
※
{% assign m = post.date | date: "%m" %}
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
{% assign m = post.date | date: "%d" %}
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

</p>
<p>{{ post.description }}</p>

{% endfor %}
[//]: # "%A, %B %d, %Y"
[//]: # "%A"
