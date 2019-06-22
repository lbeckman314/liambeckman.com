// https://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery

$(document).ready(function() {
    let container = document.getElementsByTagName("div");
    Array.from(container).forEach((element) => {

        if (element.className == "highlight") {
            let copyContainer = document.createElement("div");
            copyContainer.className = "copyContainer";

            let copySymbol = document.createElement("object");
            copySymbol.className = "copySymbol";
            copySymbol.data = "/assets/png/copy.png"

            let copyMessage = document.createElement("p");
            copyMessage.className = "copyMessage hide";
            copyMessage.innerHTML = "Copied!";
            copyContainer.appendChild(copyMessage);

            copyContainer.appendChild(copySymbol);
            element.insertBefore(copyContainer, element.childNodes[0]);  // Insert <li> before the first child of <ul>
        }
    });

    $(".copySymbol").click(function() {
        let par = $(this).parent().parent().children()[1];

        // https://stackoverflow.com/questions/14918939/match-the-start-of-each-new-line-with-javascript-regex
        copy(par.textContent.replace(/^(?:["#].*)\n/gm,''));

        let message = $(this).parent().children()[0];
        message.classList.toggle("hide");
        setTimeout(function() {
            message.classList.toggle("hide");
        }, 1000);
    });

});


function copy(text){
    var $tempInput =  $("<textarea>");
    $("body").append($tempInput);
    $tempInput.val(text).select();

    document.execCommand("copy");
    $tempInput.remove();
}
