---
title: favorites
permalink: /favorites/
---

# Favorites

<div class = "slideshow-container">
    {% for favorite in site.favorites %}
    {% if favorite.img %}
    <div class="mySlides fade">
        <div class="black-fade">
            <a class="slide-src" href="{{ favorite.src }}"></a>
            <img class="slide" src="/assets/favorites/{{favorite.img}}"/>
            <a class="prev-slideshow" onclick="changeSlides(-1)">〈</a>
            <a class="next-slideshow" onclick="changeSlides(1)">〉</a>
        </div>
        <div class="text"><a href="{{ favorite.src }}">{{ favorite.title }}</a></div>
        {% if favorite.author %}
        <div class="text">© {{ favorite.author }}</div>
        {% else %}
        <div class="text"></div>
        {% endif %}
    </div>
    {% endif %}
    {% endfor %}
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

