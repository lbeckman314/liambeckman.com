---
title: writings
layout: my-default
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
<!-- https://github.com/Shopify/liquid/issues/223 -->
{% if writing.tags != empty %}
|
{{ writing.tags }}
{% endif %}
<br />
<p>{{ writing.content }}</p>
<br />
<br />
<hr />
<br />
<br />

{% endfor %}
[//]: # "%A, %B %d, %Y"
[//]: # "%A"

