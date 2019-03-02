$(document).ready(function() {
    let theme = localStorage.getItem("theme");
    if (theme == "dark") {
        setDark();
        // wait until the DOM before getting image
        document.addEventListener('DOMContentLoaded', darkMst3k);
    }

    else if (theme == "light") {
        setLight();
        // wait until the DOM before getting image
        document.addEventListener('DOMContentLoaded', lightMst3k);
    }


    document.getElementById("darkswitch").onclick = function() {
        setDark();
    };

    document.getElementById("lightswitch").onclick = function() {
        setLight();
    };


    function setDark() {
        localStorage.setItem("theme", "dark");
        document.getElementById("dark").href = "/assets/css/dark.css";
        darkMst3k();

    }

    function setLight() {
        localStorage.setItem("theme", "light");
        document.getElementById("dark").href = "";
        lightMst3k();
    }

    function lightMst3k() {
        let mst3k = document.getElementById("mst3k");
        if (mst3k) {
            mst3k.src = "/assets/png/mst3k.png";
        }
    }

    function darkMst3k() {
        let mst3k = document.getElementById("mst3k");
        if (mst3k) {
            mst3k.src = "/assets/png/mst3k-dark.png";
        }
    }
});
