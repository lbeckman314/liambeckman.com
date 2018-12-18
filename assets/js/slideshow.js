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

function minusSlides(n) {
    showSlides(slideIndex -= n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

touch();

function touch() {
    const _C = document.querySelector('.slideshow-container'), N = _C.children.length;
    _C.addEventListener('mousedown', lock, false);
    _C.addEventListener('touchstart', lock, false);

    _C.addEventListener('mouseup', move, false);
    _C.addEventListener('touchend', move, false);

    function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };

    let x0 = null;

    function lock(e) { x0 = unify(e).clientX };

    let k = 0;

    function move(e) {
        if(x0 || x0 === 0) {
            let dx = unify(e).clientX - x0, s = Math.sign(dx);

            if((k > 0 || s < 0) && (k < N - 1 || s > 0)) {
                //_C.style.setProperty('--k', k -= s);
                console.log("k:", k);
                k -= s;
                console.log("k:", k);
                console.log("s:", s);
                currentSlide(k);

            }

            x0 = null
        }
    };

    _C.addEventListener('touchmove', e => {e.preventDefault()}, false)
}

document.onkeypress =  function(event) {

    let key = event.keyCode;
    if (key == 39) {
        slideIndex += 1;
        currentSlide(slideIndex);
        //plusSlides(1);
    }
    else if (key == 37) {
        slideIndex -= 1;
        //minusSlides(1);
        currentSlide(slideIndex);
    }

}

function showSlides(n) {
    //slideIndex = n;

    var i;
    var slides = document.getElementsByClassName("mySlides");
    //console.log("slides:", slides);
    //console.log("slideIndex:", slideIndex);
    //console.log("slides[slideIndex]:", slides[slideIndex]);
    //console.log("slides[0]:", (slides)[0]);
    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }


    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    //setTimeout(showSlides, 9000);
    //slideIndex += 1;


}

