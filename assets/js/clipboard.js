// https://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery

$(document).ready(function() {
    let container = document.getElementsByTagName("div");
    Array.from(container).forEach((element) => {

        if (element.className == "highlight") {
            console.log("el:", element);
            let copyContainer = document.createElement("div");
            copyContainer.className = "copyContainer";
            let copySymbol = document.createElement("object");
            //copySymbol.innerHTML = "copy!";
			copySymbol.className = "copySymbol";
            //copySymbol.data = "/assets/svg/copy.svg"
            copySymbol.data = "/assets/png/copy.png"
            //<object type="image/svg+xml" data="/assets/svg/heart.svg"></object>
			let copyMessage = document.createElement("p");
			copyMessage.className = "copyMessage hide";
			copyMessage.innerHTML = "Copied!";
			copyContainer.appendChild(copyMessage);

            copyContainer.appendChild(copySymbol);
            //element.appendChild(copyContainer);
            element.insertBefore(copyContainer, element.childNodes[0]);  // Insert <li> before the first child of <ul>
            //element.insertBefore(copyContainer, element.childNodes[0]);  // Insert <li> before the first child of <ul>
        }
    });

	$(".copySymbol").click(function() {
		console.log("click!");
		let par = $(this).parent().parent().children()[1];
		//let par = $(".highlight").text();
		//document.execCommand("copy");
		copy(par.textContent);
		console.log("this:", par);
		let message = $(this).parent().children()[0];
		message.classList.toggle("hide");
		setTimeout(function() {
			message.classList.toggle("hide");
		}, 1000);
		console.log("message:", message);
	});

});


function copy(text){
	var $tempInput =  $("<textarea>");
	$("body").append($tempInput);
	$tempInput.val(text).select();
	document.execCommand("copy");
	$tempInput.remove();
}

