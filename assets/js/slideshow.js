/*
let names = document.getElementById("align").querySelectorAll("a");
let maxWidth = 0;

console.log(names);
for (let i = 0; i < names.length; i++) {
    console.log("names: " + names[i].innerText + " " + names[i].offsetWidth);
    if (names[i].offsetWidth > maxWidth) {
        maxWidth = names[i].offsetWidth;
    }
}

for (let i = 0; i < names.length; i++) {
    names[i].style.width = maxWidth + "px";
}
*/


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    console.log("slides:", slides);
    console.log("slideIndex:", slideIndex);
    console.log("slides[slideIndex]:", slides[slideIndex]);
    console.log("slides[0]:", (slides)[0]);
    var dots = document.getElementsByClassName("demo");
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    //setTimeout(showSlides, 9000);
    //slideIndex += 1;

}

