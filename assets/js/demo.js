// https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

//var WebSocket = require('ws')
//const readline = require('readline');


//process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;


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

function dup() {

    let terminals = document.getElementsByClassName("terminal");
    let terminalContainer = document.getElementById("terminal-container");
    let buttonContainer = document.getElementById("button-container");


    let clone = document.createElement("textarea");
    clone.className = "terminal";
    terminalContainer.appendChild(clone);

    clone.focus();
    doTerminal(clone);

    let removeTerminal = document.createElement("span");
    removeTerminal.id = "remove-terminal";
    removeTerminal.innerHTML = "-";
    buttonContainer.appendChild(removeTerminal);

    removeTerminal.onclick = function() {
        clone.remove();
        removeTerminal.remove();
        terminals[0].focus();
    }
}

function zigzagPort(message) {
    let terminals = document.getElementsByClassName("terminal");
    let original = terminals[0];
    let clone = terminals[1];

    if (message.includes("port number:")) {

        let port = message.split(" ");
        port = port[port.length - 1];

        terminals[1].value = terminals[1].value.replace(/.*$/ ,"> " + "zigzag-client " + parseInt(port));

    }
}

document.addEventListener('DOMContentLoaded', function () {

    let terminals = document.getElementsByClassName("terminal");

    let duplicateTerminal = document.getElementById("duplicate-terminal");
    if (duplicateTerminal) {
        duplicateTerminal.onclick = function() {
            if (terminals.length < 2) {
                dup();
            }
        }
    }

    let examples = document.getElementsByClassName("demo-examples");
    for (let i = 0; i < examples.length; i++) {
        let example = examples[i].textContent;
        examples[i].onclick = function() {
            terminals[0].value = terminals[0].value.replace(/.*$/ ,"> " + example);
            terminals[0].focus();
        }
    }

    console.log(terminals[0]);
    doTerminal(terminals[0]);
});

function doTerminal(terminal) {
    console.log("doTerm:", terminal);
    terminal.spellcheck = false;
    console.log("terminal:", terminal);
    console.log("Connecting to server...");
    terminal.value = "Connecting...\n";

    // Create WebSocket connection.
    const socket = new WebSocket('wss://liambeckman.com:8181');
    //const socket = new WebSocket('https://liambeckman.com/demo/devilish');

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
        let commands = [];
        let commNum = 0;
        let up = 0;
        let down = 0;
        let ctrl = false;
        // Listen for messages
        socket.onmessage = function(event) {
            message = event.data.toString();
            console.log("MESSAGE:", message);
            message.split('\n');

            if (message.includes('\r')) {
                console.log("SUCCESS");
                message = message.replace(/\r/g,"");
                terminal.value = terminal.value.replace(/.*$/ ,message);

            }
            // suppress firejail warnings
            else if (message.includes("Warning")) {
                terminal.value = terminal.value.replace(/.*$/ ,"");
            }
            else {
                terminal.value += message

            }
            console.log("MESSAGE:", message);
            messages = message.split("\n");
            terminal.scrollTop = terminal.scrollHeight;
            console.log("MESSAGES:", messages);

            console.log("COMMAND:", comm);
            zigzagPort(message);
        }

        // https://stackoverflow.com/questions/22092762/how-to-detect-ctrlc-and-ctrlv-key-pressing-using-regular-expression/22092839
        terminal.addEventListener("keydown",function(e){
            e = e || window.event;
            var key = e.which || e.keyCode; // keyCode detection
            var ctrl = e.ctrlKey ? e.ctrlKey : ((key === 17) ? true : false); // ctrl detection
            
            if ( key == 76 && ctrl ) {
                console.log("Ctrl + L Pressed !");
                terminal.value = "> ";
                event.preventDefault();
                e.preventDefault();
                terminal.focus();
            } 
            else if ( key == 67 && ctrl ) {
                console.log("Ctrl + C Pressed !");
                //e.preventDefault();
                //event.preventDefault();
                socket.send("SIGINT");
                terminal.value += "\n";
                //terminal.value = terminal.value.replace(/.*$/ ,"> ");
            }

            else if ( key == 90 && ctrl ) {
                console.log("Ctrl + Z Pressed !");
                //e.preventDefault();
                //event.preventDefault();
                socket.send("SIGTSTP");
                terminal.value += "\n";
                //terminal.value = terminal.value.replace(/.*$/ ,"> ");
            }

            else if ( key == 85 && ctrl ) {
                console.log("Ctrl + U Pressed !");
                e.preventDefault();
                //event.preventDefault();
                terminal.value = terminal.value.replace(/.*$/ ,"> ");
            }
            
        },false);


        terminal.onkeydown = function (event) {
            let key = event.keyCode;
            let lines = terminal.value.split("\n");

            console.log("key:", key);

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

            else if (key == 9) {
                event.preventDefault();
                terminal.value += "TAB detected";
                terminal.value += "\n> ";
                console.log("TAB detected");
                //socket.send("TAB");
                //terminal.value += "\n> ";
            }


            else if (key == 38) {
                console.log("up arrow detected");
                event.preventDefault();
                if ((up - down) < commands.length && down <= up) {
                    up += 1;
                    console.log("up:", up);
                    console.log("down:", down);
                    console.log("commands.length:", commands.length);
                    terminal.value = terminal.value.replace(/.*$/ ,"> " + commands[commands.length - up + down]);
                }
                console.log("commands:", commands);
                //terminal.value += "\n> ";
            }

            else if (key == 40) {
                console.log("down arrow detected");
                event.preventDefault();
                if (down < up && (up - down) <= commands.length) {
                    down += 1;
                    console.log("up:", up);
                    console.log("down:", down);
                    if (down == up) {
                        terminal.value = terminal.value.replace(/.*$/ ,"> ");
                    }
                    else {
                        terminal.value = terminal.value.replace(/.*$/ ,"> " + commands[commands.length - up + down]);
                    }
                }
                console.log("commands:", commands);
                //terminal.value += "\n> ";
            }

            else if (key == 13)
            {
                event.preventDefault();
                terminal.value += "\n";
                up = 0;
                down = 0;
                for (let i = 0; i < lines.length; i++)
                {
                    //console.log(lines[i]);
                }
                console.log("message:", message);
                comm = lines[lines.length-1];
                console.log("you entered:", comm);
                console.log("messages.length:", messages.length);
                if (messages.length > 0) {
                    comm = comm.substring(messages[messages.length - 1].length - 1);
                }

                comm = comm.substring(1);
                //console.log("you entered:", comm);
                //comm = comm.replace(/([>:]+ *)/g, "");
                comm = comm.replace(/^[ ]*/g, "");
                
                console.log("you entered:", comm);
                if (comm == "clear") {
                    event.preventDefault();
                    terminal.value = "> ";
                    commands[commNum] = comm;
                    commNum += 1;
                }

                else if (comm == "") {
                    event.preventDefault();
                    terminal.value += "\n> ";
                }


                else {
                    socket.send(comm);
                    commands[commNum] = comm;
                    commNum += 1;

                    if (comm == "zigzag-server") {
                        let terminals = document.getElementsByClassName("terminal");
                        if (terminals.length < 2) {
                            dup();
                        }
                    }
                }

            terminal.scrollTop = terminal.scrollHeight;
            }

        }
    }

}
