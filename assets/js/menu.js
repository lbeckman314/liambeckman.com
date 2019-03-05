/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function nav(x) {
    document.getElementById("myDropdown").classList.toggle("show");
    x.classList.toggle("change");
}

function config() {
    document.getElementById("config").classList.toggle("show");
}

function leftPadding() {
    let padding_left = document.getElementById("padding-left");
    let padding_right = document.getElementById("padding-right");

    //console.log("left:", padding_left.value);
    let content = document.getElementById("content");
    localStorage.setItem("padding-left", String(padding_left.value));
    content.style.paddingLeft = String(padding_left.value);
}

function rightPadding() {
    let padding_left = document.getElementById("padding-left");
    let padding_right = document.getElementById("padding-right");
    //console.log("right:", padding_right.value);
    let content = document.getElementById("content");
    localStorage.setItem("padding-right", String(padding_right.value));
    content.style.paddingRight = String(padding_right.value);
}


function bothPadding(evt) {
    let padding_left = document.getElementById("padding-left");
    let padding_right = document.getElementById("padding-right");
    let content = document.getElementById("content");
    console.log("side:", evt.target.side);

    if (evt.target.side == "left") {
        //console.log("left:", padding_left.value);
        localStorage.setItem("padding-left", String(padding_left.value));
        content.style.paddingLeft = String(padding_left.value);

        //console.log("right:", padding_right.value);
        localStorage.setItem("padding-right", String(padding_left.value));
        content.style.paddingRight = String(padding_left.value);
        padding_right.value = padding_left.value;
    }

    else if (evt.target.side == "right") {
        //console.log("left:", padding_left.value);
        localStorage.setItem("padding-left", String(padding_right.value));
        content.style.paddingLeft = String(padding_right.value);

        //console.log("right:", padding_right.value);
        localStorage.setItem("padding-right", String(padding_right.value));
        content.style.paddingRight = String(padding_right.value);

        padding_left.value = padding_right.value;
    }
}




function setDefault() {
    let content = document.getElementById("content");

    let padding_left = document.getElementById("padding-left");
    let padding_right = document.getElementById("padding-right");
    localStorage.setItem("padding-left", "6%");
    content.style.paddingLeft = "6%";

    localStorage.setItem("padding-right", "6%");
    content.style.paddingRight = "6%";

    let padding_left_local = localStorage.getItem("padding-left");
    let padding_right_local = localStorage.getItem("padding-right");

    padding_left.placeholder = padding_left_local;
    padding_right.placeholder = padding_right_local;
    padding_left.value = padding_left_local;
    padding_right.value = padding_right_local;


    let font_size_local = "1em"
    let line_height_local = 1.7
    let font_size_input = document.getElementById("font-size");
    let line_height_input = document.getElementById("line-height");

    document.getElementsByTagName("html")[0].style.fontSize = font_size_local;
    font_size_input.placeholder = font_size_local;
    document.getElementsByTagName("html")[0].style.lineHeight = line_height_local;
    line_height_input.placeholder = line_height_local;

    localStorage.setItem("font-size", String(font_size_local));
    localStorage.setItem("line-height", String(line_height_local));

}

$( document ).ready(function() {
    $("#settings").click(function() {
        document.getElementById("config").classList.toggle("show");
        if (document.getElementById("settings").style.transform == "rotate(180deg)") {
            document.getElementById("settings").style.transform = "unset";
        }
        else {
            document.getElementById("settings").style.transform = "rotate(180deg)";
        }
    });

    $("#linker").click(function() {
        link();
    });


    let linked = false;
    link();

    function link() {
        let content = document.getElementById("content");
        let linker = document.getElementById("linker");
        let padding_left = document.getElementById("padding-left");
        let padding_right = document.getElementById("padding-right");

        if (!linked) {
            linked = true;
            linker.style.backgroundColor = "unset";
            padding_left.removeEventListener("input", bothPadding);
            padding_right.removeEventListener("input", bothPadding);

            padding_left.addEventListener("input", leftPadding);
            padding_right.addEventListener("input", rightPadding);
        }

        else if (linked) {
            linker.style.backgroundColor = "#FF357A";
            linked = false;

            padding_left.removeEventListener("input", leftPadding);
            padding_right.removeEventListener("input", rightPadding);

            padding_left.side = "left";
            padding_right.side = "right";
            padding_left.addEventListener("input", bothPadding);
            padding_right.addEventListener("input", bothPadding);

        }
    }

    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener("click", function(event) {
        console.log("click");
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
        console.log("target:", event.target);
        console.log("current target:", event.currentTarget);
        if (!event.target.matches('#settings') && !event.target.parentNode.matches('.config-content') && !event.target.parentNode.matches('.inline') && !event.target.matches('.config-content')) {
            var dropdowns = document.getElementsByClassName("config-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }

            document.getElementById("settings").style.transform = "rotate(180deg)";
            document.getElementById("settings").style.transform = "unset";
        }
    });

    window.addEventListener("keydown", function(e) {
        e = e || window.event;
        let key = e.which || e.keyCode; // keyCode detection
        console.log("key:", key);
        if (key == 27) {
            var dropdowns_menu = document.getElementsByClassName("dropdown-content");
            var dropdowns_config = document.getElementsByClassName("config-content");

            var i;
            for (i = 0; i < dropdowns_menu.length; i++) {
                var openDropdown = dropdowns_menu[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
                var openDropdown_config = dropdowns_config[i];
                if (openDropdown_config.classList.contains('show')) {
                    openDropdown_config.classList.remove('show');
                }
            }
        }
    });

    let content = document.getElementById("content");
    let padding_left_local = localStorage.getItem("padding-left");
    let padding_right_local = localStorage.getItem("padding-right");
    let padding_left = document.getElementById("padding-left");
    let padding_right = document.getElementById("padding-right");

    if (padding_left_local) {
        content.style.paddingLeft = String(padding_left_local);
        padding_left.placeholder = padding_left_local;
    }
    if (padding_right_local) {
        content.style.paddingRight = String(padding_right_local);
        padding_right.placeholder = padding_right_local;
    }

    let font_size = document.getElementById("font-size");
    let font_height = document.getElementById("line-height");

    function change_font_size() {
        let size = font_size.value;
        document.getElementsByTagName("html")[0].style.fontSize = size;
        localStorage.setItem("font-size", String(font_size.value));
    }

    function change_font_height() {
        let height = font_height.value;
        document.getElementsByTagName("html")[0].style.lineHeight = height;
        localStorage.setItem("line-height", String(line.value));
    }

    let font_size_local = localStorage.getItem("font-size");
    let line_height_local = localStorage.getItem("line-height");
    let font_size_input = document.getElementById("font-size");
    let line_height_input = document.getElementById("line-height");

    if (font_size_local) {
        document.getElementsByTagName("html")[0].style.fontSize = font_size_local;
        font_size_input.placeholder = font_size_local;
    }

    if (line_height_local) {
        document.getElementsByTagName("html")[0].style.lineHeight = line_height_local;
        line_height_input.placeholder = line_height_local;
    }

    font_size.addEventListener("input", change_font_size);
    font_height.addEventListener("input", change_font_height);

});
