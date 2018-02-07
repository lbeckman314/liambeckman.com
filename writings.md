---
layout: my-default
permalink: /writings/
---


<div class="container">



{% assign writings-sorted = site.writings | sort: "date" | reverse %}
{% for writing in writings-sorted %}
        <div class="fixed" id="featured">
            <a href="{{ writing.url }}"><img class="center" src="/assets/png/initial.png" style="width: 60%; padding-bottom: 10px;"></a>
            <div class="border"></div>
            <p class="code"><a href="{{ writing.url }}">{{ writing.title }}</a></p>
            <p class="code">{{ writing.desc }}</p>
        </div>

{% endfor %}

</div>
<!--

<br /><br /><br />



{% for writing in site.writings %}


<h3><a style="font-size:1.2em" href={{ writing.url }} title={{ writing.tile }}>※ {{ writing.title }}</a></h3>
<p>{{ writing.description }}</p>
<br />

{% endfor %}

-->
