---
title: favorites
permalink: /favorites/
---

# Favorites

<div class = "slideshow-container">
{% for favorite in site.favorites %}
   {% if favorite.img %}
       <div class="mySlides fade">
            <div class="black-fade"><img class="slide" src="{{ favorite.img }}"/></div>
            <div class="text"><a href="{{ favorite.src }}">{{ favorite.title }}</a></div>
        </div>
    {% endif %}
{% endfor %}

<a class="prev-slideshow" onclick="plusSlides(-1)"></a>
<a class="next-slideshow" onclick="plusSlides(+1)"></a>
</div>

<div>
{% assign directory = "" %}
{% for favorite in site.favorites %}
    {% assign current = favorite.path | split: "/" %}
    {% assign current = current[1] %}
    {% if directory != current %}
        {% assign directory = current %}
        <h2>{{ current }}</h2>
    {% endif %}
    {% if favorite.path contains "poems" %}
        <p>※ <a href="{{ favorite.src }}">{{ favorite.title }}</a> by {{ favorite.author }}</p>
        <pre class="poem">{{ favorite.content }}</pre>
    {% else %}
        <p>※ <a href="{{ favorite.src }}">{{ favorite.title }}</a> ⇢ {{ favorite.content | strip_html }}</p>
    {% endif %}
{% endfor %}
</div>

# ※

<script src="/assets/js/slideshow.js"></script>
