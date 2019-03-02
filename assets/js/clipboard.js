/*
$(document).ready(function() {
    let container = document.getElementsByTagName("div");
    Array.from(container).forEach((element) => {

        if (element.className == "highlight") {
            console.log("el:", element);
            let copyContainer = document.createElement("div");
            copyContainer.className = "copyContainer";
            let copySymbol = document.createElement("object");
            //copySymbol.innerHTML = "copy!";
            copySymbol.data = "/assets/svg/copy.svg"
            //<object type="image/svg+xml" data="/assets/svg/heart.svg"></object>
            copyContainer.appendChild(copySymbol);
            //element.appendChild(copyContainer);
            element.insertBefore(copyContainer, element.childNodes[0]);  // Insert <li> before the first child of <ul> 
        }
    });
});
*/
