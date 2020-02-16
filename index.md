---
title: hello!
---

<!-- https://stackoverflow.com/questions/1685078/how-do-you-make-a-div-tag-into-a-link -->
<div class="container">
    <div class="fixed about"  id="home" onclick="location.href='/about'">
        <h1 class="home-page"><a href ="/about" class="about">about</a></h1>
        <div class="about-border"></div>
        <p>Are you new to this site? Let me introduce myself!</p>
    </div>

    <div class="fixed code" id="home" onclick="location.href='/code'">
        <h1 class="home-page"><a href = "/code" class="code">code</a></h1>
        <div class="code-border"></div>
        <p>Are you in search of code that sometimes compiles? Well then you're in luck.</p>
    </div>

    <div class="fixed git" id="home" onclick="location.href='https://www.github.com/lbeckman314'">
        <h1 class="home-page">
            <a href = "https://www.github.com/lbeckman314" class="git">github</a><span class="git"> / </span><a href="https://git.liambeckman.com" class="git">cgit</a>
        </h1>
        <div class="git-border"></div>
        <p>Go straight to the source! Checkout some git repos.</p>
    </div>

    <div class="fixed favorites" id="home" onclick="location.href='/favorites'">
        <h1 class="home-page"><a href = "/favorites" class="favorites">favorites</a></h1>
        <div class="favorites-border"></div>
        <p>Here are a few of my favorite things!</p>
    </div>
</div>
