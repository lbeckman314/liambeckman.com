---
title: writings
layout: my-default
permalink: /writings/
---

# poems


{% for writing in site.writings %}


<h3><a style="font-size:1.2em;" href="{{ writing.url }}">※ {{ writing.title }}</a></h3>
<p>{{ writing.desc }}</p>


<br />

{% endfor %}

