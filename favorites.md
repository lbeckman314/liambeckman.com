---
title: favorites
src: /assets/js/slideshow.js
---

# Favorites

<div class = "slideshow-container">
    <a class="prev-slideshow" onclick="plusSlides(-1)"></a>
    <a class="next-slideshow" onclick="plusSlides(+1)"></a>
</div>

{% loop_directory directory:images iterator:image filter:*.jpg sort:descending %}
   <img src="{{ image }}" />
{% endloop_directory %}

{% loop_directory directory:code iterator:fil sort:descending %}
    file: {{fil}}
{% endloop_directory %}

# ※
