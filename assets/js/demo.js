
// https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

//var WebSocket = require('ws')
//const readline = require('readline');


//process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

// Create WebSocket connection.
const socket = new WebSocket('wss://liambeckman.com:8181');
//const socket = new WebSocket('https://liambeckman.com/demo/devilish');

const userPrompt = "devilish";

var MYLIBRARY = MYLIBRARY || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        helloWorld : function() {
            //alert('Hello World! :: ' + _args[0]);
            //console.log('Hello World! :: ' + _args[0]);
            return _args[0];
        }
    };
}());


document.addEventListener('DOMContentLoaded', function () {
    let terminal = document.getElementById("terminal");
    terminal.spellcheck = false;
    console.log("terminal:", terminal);
    console.log("Connecting to server...");
    terminal.value = "Connecting...\n";
    // Connection opened
    socket.onopen = function (event) {
        console.log("Success!");
        //terminal.value += "OK\n";
        //command = readline.question(": ");
        console.log("Sending initial message to server.");
        //terminal.value += "Sending initial message to server.\n";
        terminal.value = "Press ENTER to blast off!\n\n";

        let userPrompt = MYLIBRARY.helloWorld();

        terminal.value += "> " + userPrompt;

        //socket.send("devilish");

        let message = "";
        let messages = [];
        // Listen for messages
        socket.onmessage = function(event) {
            //console.log("MESSAGE:", event.data);
            terminal.value += event.data;
            message = event.data.toString();
            console.log("MESSAGE:", message);
            messages = message.split("\n");
            terminal.scrollTop = terminal.scrollHeight;
            console.log("MESSAGES:", messages);

            console.log("COMMAND:", comm);
        }


        document.getElementById('terminal').onkeypress = function (event) {
            let key = event.keyCode;
            let lines = terminal.value.split("\n");


            if (key == 8) {
                console.log(lines[lines.length - 1].length);
                if (lines[lines.length - 1].length <= 2) {
                    console.log("backspace detected");
                    event.preventDefault();
                }
            }

            else if (key == 46) {
                console.log("delete detected");
                //terminal.value += "\n> ";
            }

            else if (key == 13)
            {
                for (let i = 0; i < lines.length; i++)
                {
                    //console.log(lines[i]);
                }
                console.log("message:", message);
                comm = lines[lines.length-1];
                //console.log("you entered:", comm);
                console.log("messages.length:", messages.length);
                if (messages.length > 0) {
                    comm = comm.substring(messages[messages.length - 1].length - 1);
                }
                //console.log("you entered:", comm);
                comm = comm.replace(/([>:]+ *)/g, "");
                comm = comm.replace(/^[ ]*/g, "");
                
                console.log("you entered:", comm);
                if (comm == "clear") {
                    event.preventDefault();
                    terminal.value = "> ";
                }

                else if (comm == "") {
                    event.preventDefault();
                    terminal.value += "\n> ";
                }

                else {
                    socket.send(comm);
                }

            terminal.scrollTop = terminal.scrollHeight;
            }

        }
    }
});




