$(document).ready(() => {
    pandoc_to_codemirror();
});

// markdown -> html -> codemirror converters
function pandoc_to_codemirror() {
    let i = 1;

    // cb = "codeblock"
    let identifier = `#cb${i}`;
    while ($(identifier).length > 0) {
        let myTextArea = $(identifier)[0].childNodes[0];
        if (myTextArea.classList.contains('norun')) {
            i += 1;
            identifier = `#cb${i}`;
            continue;
        }

        // mode
        let mode = myTextArea.classList[1];
        if (mode == 'c') {
            mode = 'text/x-csrc';
        }

        // codemirror
        let editor = CodeMirror(function(elt) {
            myTextArea.parentNode.replaceChild(elt, myTextArea);
        }, {
            value: myTextArea.innerText,
            mode: mode,
            theme: "dracula",
            lineNumbers: true,
            viewportMargin: Infinity,
        });

        // compile/run button
        let buttons = $('<div></div>');
        buttons.attr('class', 'buttons');

        let run = $('<button></button>');
        run.text('▶');
        run.attr('onclick', 'termInit(this)');
        buttons.append(run);

        let child = $(identifier)[0].childNodes[0];
        $(identifier)[0].insertBefore(buttons[0], child);

        i += 1;
        identifier = `#cb${i}`;
    }
}

function jekyll_to_codemirror() {

}

function org_to_codemirror() {

}

// starts up the websocket
function termInit(element) {
    let ed_parent = element.parentNode.parentNode;
    let ed = element.parentNode.parentNode.childNodes[1].CodeMirror;
    let code = ed.getValue();

    let language = ed.getMode().name;
    let terminal;

    if (! ed_parent.querySelector('#terminal')) {
        terminal = $('<div></div>');
        terminal.attr('id', 'terminal');

        let terminals = $('<pre></pre>')
        terminals.attr('class', 'terminals');
        terminals.attr('tabindex', '0');
        terminals.attr('contentEditable', 'true');

        terminal.append(terminals);
        ed_parent.append(terminal[0]);
        console.log('terminal:', terminal);
    }
    else {
        terminal = [
            ed_parent.querySelector('#terminal')
        ];
    }

    let args = {
        mode: 'code',
        code: code,
        language: language,
        terminal: terminal,
    }

    Demo.bootup(args);
}
