---
layout: my-default
---



<div class="container">


{% for image in site.gallery %}
        <div class="fixed" id="featured">
            <a href="{{ image.image_path }}"><img class="center" src="/assets/png/initial.png" style="width: 60%; padding-bottom: 10px;"></a>
            <div class="border"></div>
            <p class="code"><a href="{{ image.image_path }}">{{ image.title }}</a></p>
            <p class="code">{{ image.title }}</p>
        </div>

{% endfor %}

</div>
<!--

<br /><br /><br />



{% for image in site.images %}


<h3><a style="font-size:1.2em" href={{ image.url }} title={{ image.tile }}>※ {{ image.title }}</a></h3>
<p>{{ image.description }}</p>
<br />

{% endfor %}

-->
