const production_url = 'ws://localhost:8181';
const DEV = false;

// namespace
var lib = lib || (function() {
    var _args = {};

    return {
        init : Args => {
            _args = Args;
        },
        args : () => {
            return _args;
        }
    };
}());

document.addEventListener('DOMContentLoaded', () => {
    bootup(lib.args());
});

function bootup(args) {
    let terminal = document.getElementById('terminal');

    let examples = document.getElementById('demonic-examples');
    examples.childNodes.forEach((example) => {
        example.onclick = () => {
            console.log(example);
            terminal.innerHTML = terminal.innerHTML.replace(/.*$/ ,'> ' + example.innerText);
            terminal.focus();
        }
    });

    let socket = getSocket();
    doTerminal(terminal, socket, args);

    const interval = setInterval(function ping() {
        if (socket.isAlive === false) {
            socket = getSocket();
            doTerminal(terminal, socket, args.mode);
        }

        else {
            socket.isAlive = false;
            let ping = JSON.stringify({
                command: 'ping',
            });
            socket.send(ping);
        }
    }, 3000);
}

function getSocket() {
    // Create WebSocket connection.
    if (DEV) {
        // development
        let socket = new WebSocket(development_url);
        return socket;
    }
    else {
        // production
        let socket = new WebSocket(production_url);
        return socket;
    }
}

// moves cursor to bottom of terminal after command
// https://stackoverflow.com/questions/6249095/how-to-set-caretcursor-position-in-contenteditable-element-div
function setCaret(el) {
    var range = document.createRange();
    var sel = window.getSelection();
    let children = el.lastChild.innerText.split('\n');
    let last_child = children[children.length - 1];
    range.setStart(el.lastChild, el.lastChild.innerText.length);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
    el.focus();
}

// main terminal function
function doTerminal(terminal, socket, args) {
    function heartbeat() {
        socket.isAlive = true;
    }

    terminal.spellcheck = false;

    let info = document.getElementById('info');
    if (info) {
        info.innerHTML = 'Status: Connecting...';
        info.style.backgroundColor = '#ff357a';
    }

    // Connection opened
    socket.onopen = (event) => {
        if (info) {
            info.innerHTML = 'Status: Connected. Press ENTER to blast off!';
            info.style.backgroundColor = '#49ccd4';
        }

        let command = lib.args() || '';

        if (terminal.innerHTML == '') {
            terminal.innerHTML = '> ' + command;
        }

        socket.isAlive = true;

        let message = '';
        let messages = [];
        let commands = [];
        let commNum = 0;
        let up = 0;
        let down = 0;
        let ctrl = false;

        // Listen for messages
        socket.onmessage = (event) => {
            message = event.data;

            var myblob = new Blob([message], {
                type: 'text/plain'
            });

            var reader = new FileReader();
            reader.addEventListener('loadend', function() {
                message = reader.result;

                if (message == 'pong') {
                    heartbeat();
                    return;
                }

                if (message.includes('\r')) {
                    message = message.replace(/\r/g,'');
                    terminal.innerHTML = terminal.innerHTML.replace(/.*$/, message);
                }

                else {
                    let from_server = document.createElement('span');
                    from_server.className = 'from_server';
                    from_server.innerHTML = message;
                    from_server.contentEditable = false;
                    terminal.appendChild(from_server);

                    let user_input = document.createElement('span');
                    user_input.className = 'user_input';
                    user_input.innerHTML = '';
                    terminal.appendChild(user_input);

                    setCaret(terminal);
                }
            });

            reader.readAsText(myblob);

            messages = message.split('\n');
            terminal.scrollTop = terminal.scrollHeight;
        }

        // https://stackoverflow.com/questions/22092762/how-to-detect-ctrlc-and-ctrlv-key-pressing-using-regular-expression/22092839
        terminal.addEventListener('keydown', (event) => {
            var key = event.which || event.keyCode; // keyCode detection
            var ctrl = event.ctrlKey ? event.ctrlKey : ((key === 17) ? true : false); // ctrl detection

            if ( key == 76 && ctrl ) {
                let lines = terminal.innerHTML.split('\n');
                terminal.innerHTML = lines[lines.length - 1];
                event.preventDefault();
                event.preventDefault();
                setCaret(terminal);
            }
            else if ( key == 67 && ctrl ) {
                socket.send('SIGINT');
                terminal.innerHTML += '\n';
            }

            else if ( key == 90 && ctrl ) {
                socket.send('SIGTSTP');
                terminal.innerHTML += '\n';
            }

            else if ( key == 85 && ctrl ) {
                event.preventDefault();
                terminal.innerHTML = terminal.innerHTML.replace(/.*$/,
                    '&gt ');
                setCaret(terminal);
            }
        },false);

        terminal.onkeydown = (event) => {
            let key = event.keyCode;
            let lines = terminal.textContent.split('\n');

            if (key == 8) {
                if (lines[lines.length - 1].length <= 1) {
                    event.preventDefault();
                }
            }

            else if (key == 38) {
                event.preventDefault();
                if ((up - down) < commands.length && down <= up) {
                    up += 1;
                    terminal.innerHTML = terminal.innerHTML.replace(/.*$/,
                        '> ' + commands[commands.length - up + down]);
                }
            }

            else if (key == 40) {
                event.preventDefault();
                if (down < up && (up - down) <= commands.length) {
                    down += 1;
                    if (down == up) {
                        terminal.innerHTML = terminal.innerHTML.replace(/.*$/,
                            '> ');
                    }
                    else {
                        terminal.innerHTML = terminal.innerHTML.replace(/.*$/,
                            '> ' + commands[commands.length - up + down]);
                    }
                }
            }

            // enter key
            else if (key == 13)
            {
                let comm = '';
                comm = terminal.lastChild.innerText;
                event.preventDefault();
                terminal.innerHTML += '\n';

                let user_input = document.createElement('span');
                user_input.className = 'user_input';
                user_input.innerHTML = '';
                terminal.appendChild(user_input);

                up = 0;
                down = 0;
                if (comm == null) {
                    // only use last line
                    comm = lines[lines.length-1];
                    // remove > prompt
                    comm = comm.replace(/\> /g, '');
                    // remove leading spaces
                    comm = comm.replace(/^[ ]*/g, '');
                }

                runCommand(comm, commands, commNum, terminal, socket);
                terminal.scrollTop = terminal.scrollHeight;
            }

            setCaret(terminal);
        }
    }
}

function runCommand(comm, commands, commNum, terminal, socket) {
    if (comm == 'clear') {
        event.preventDefault();
        terminal.innerHTML = '> ';
        commands[commNum] = comm;
        commNum += 1;
    }

    else if (comm == '') {
        event.preventDefault();
        terminal.innerHTML += '\n> ';
    }

    else {
        let message = JSON.stringify({
            command: comm,
        });
        socket.send(message);
        commands[commNum] = comm;
        commNum += 1;
    }
}

