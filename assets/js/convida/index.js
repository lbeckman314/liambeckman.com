// Use ES module import syntax to import functionality from the module
// that we have compiled.
//
// Note that the `default` import is an initialization function which
// will "boot" the module and make it ready to use. Currently browsers
// don't support natively imported WebAssembly as an ES module, but
// eventually the manual initialization won't be required!
//import { memory } from './convida_bg.wasm';
import { Cell, Universe, default as init } from './pkg/convida.js';

//const { Cell, Universe }= wasm_bindgen;
//import { memory } from "./pkg/convida_bg.wasm";

var CONVIDA = CONVIDA || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        helloWorld : function() {
            return _args[0];
        }
    };
}());

async function run() {
    // First up we need to actually load the wasm file, so we use the
    // default export to inform it where the wasm file is located on the
    // server, and then we wait on the returned promise to wait for the
    // wasm to be loaded.
    //
    // Note that instead of a string here you can also pass in an instance
    // of `WebAssembly.Module` which allows you to compile your own module.
    // Also note that the promise, when resolved, yields the wasm module's
    // exports which is the same as importing the `*_bg` module in other
    // modes
    const memory =  await init('/assets/js/convida/pkg/convida_bg.wasm');
    console.log(memory);

    // And afterwards we can use all the functionality defined in wasm.

    // Import the WebAssembly memory at the top of the file.

    const CELL_SIZE = 10; // px
    const GRID_COLOR = "#131516";
    //const DEAD_COLOR = "#131516";
    var DEAD_COLOR = window.getComputedStyle(document.getElementById("wrapper")).backgroundColor;
    var DEAD_COLOR_OLD = DEAD_COLOR;
    const ALIVE_COLOR = "#28292a";
    const pops = ["#DB37C4","#ED68D9","#49CCD4","#678CFA","#4635F7"];
    //const pops = ["#080808","#303030","#696969","#A6A6A6","#7A7A7A"];
    const colorchoice = CONVIDA.helloWorld();

    let contentHeight = document.getElementById("content").clientHeight;
    console.log("contentHeight:", contentHeight);
    let contentWidth = document.getElementById("content").clientWidth;
    console.log("contentWidth:", contentWidth);

    ////Construct the universe, and get its width and height.
    const universe = Universe.new();
    universe.set_size(contentWidth / 180, contentHeight / 10.8);
    const width = universe.width();
    console.log("width:", width);
    const height = universe.height();


    // Give the canvas room for all of our cells and a 1px border
    // around each of them.
    const canvasPrime = document.getElementsByClassName("game-of-life-canvas")[0];
    console.log("canvasPrime:", canvasPrime);
    //const canvasAlt = document.getElementsByClassName("game-of-life-canvas")[1];
    canvasInit(canvasPrime);
    //canvasInit(canvasAlt);
    //const canvasAlt = canvasPrime.cloneNode(true);
    var canvasAlt = cloneCanvas(canvasPrime);


    function cloneCanvas(oldCanvas) {

        //create a new canvas
        var newCanvas = document.getElementsByClassName("game-of-life-canvas")[1];
        var context = newCanvas.getContext('2d');

        //set dimensions
        newCanvas.width = oldCanvas.width;
        newCanvas.height = oldCanvas.height;

        //apply the old canvas to the new one
        context.drawImage(oldCanvas, 0, 0);

        //return the new canvas
        return newCanvas;
    }

    function canvasInit(canvas) {
        canvas.height = (CELL_SIZE + 1) * height + 1;
        canvas.width = (CELL_SIZE + 1) * width + 1;


        const ctx = canvas.getContext("2d");

        if (ctx === null) {
            alert("unable to initialize WebGL.");
        }

        let animationId = null;
        let con = 1;

        const isPaused = () => {
            return animationId === null;
        };


        canvas.addEventListener("click", event => {
            let index = idx(canvas);
            let row = index.row;
            let col = index.col;

            if (event.ctrlKey) {
                console.log("ctrl");
                universe.glider(row, col);
            }

            else if (event.shiftKey) {
                console.log("shift");
                universe.pulsar(row, col);
            }

            else {
                universe.toggle_cell(row, col);
            }

            //drawGrid();
            drawCells();
            canvasAlt = cloneCanvas(canvasPrime);
        });

        function idx(canvas) {
            const boundingRect = canvas.getBoundingClientRect();

            const scaleX = canvas.width / boundingRect.width;
            const scaleY = canvas.height / boundingRect.height;

            const canvasLeft = (event.clientX - boundingRect.left) * scaleX;
            const canvasTop = (event.clientY - boundingRect.top) * scaleY;

            const row = Math.min(Math.floor(canvasTop / (CELL_SIZE + 1)), height - 1);
            const col = Math.min(Math.floor(canvasLeft / (CELL_SIZE + 1)), width - 1);

            return {
                row: row,
                col: col
            };
        }

        //console.log("Waiting for clients...");

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

        // The result of 'requestAnimationFrame' is assigned to 'animationId'.
        const renderLoop = () => {
            //debugger;
            //    pre.textContent = universe.render();
            //for (let i = 0; i < 9; i++) {
            universe.tick();
            //}

            //drawGrid();
            drawCells();

            animationId = requestAnimationFrame(xyz);
            canvasAlt = cloneCanvas(canvasPrime);
        };

        const xyz = async () => {
            console.log("xyz:", animationId);
            if (con == 1) {
                setTimeout(renderLoop, 9000);
            }
            else {
                while(con == 0) {
                    console.log("XYZ con:", con);
                    await sleep(100);
                }
                renderLoop();
            }
        }

        const drawGrid = () => {
            ctx.beginPath();
            ctx.strokeStyle = GRID_COLOR;

            // Vertical lines.
            for (let i = 0; i <= width; i++) {
                ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
                ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
            }

            for (let j = 0; j <= height; j++) {
                ctx.moveTo(0,                           j * (CELL_SIZE + 1) + 1);
                ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
            }

            ctx.stroke();
        };


        const getIndex = (row, column) => {
            return row * width + column;
        };

        //const memory = WebAssembly.Memory;


        console.log("cells:", memory.memory.buffer);
        const drawCells = () => {
            const cellsPtr = universe.cells();
            const cells = new Uint8Array(memory.memory.buffer, cellsPtr, width * height);

            ctx.beginPath();
            ctx.fillStyle = ALIVE_COLOR;
            for (let row = 0; row < height; row++) {
                for (let col = 0; col < width; col++) {
                    const idx = getIndex(row, col);
                    if (cells[idx] !== Cell.Alive) {
                        continue;
                    }

                    if (colorchoice == "bw") {}
                    else {
                        //https://stackoverflow.com/questions/5092808/how-do-i-randomly-generate-html-hex-color-codes-using-javascript
                        //ctx.fillStyle = "#000000".replace(/0/g,function(){return (Math.floor(Math.random()*16)).toString(16);});
                        //console.log(ctx.fillStyle);
                        // https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
                        ctx.fillStyle = pops[Math.floor(Math.random() * pops.length)];
                    }

                    ctx.fillRect(
                        col * (CELL_SIZE + 1) + 1,
                        row * (CELL_SIZE + 1) + 1,
                        CELL_SIZE + 1,
                        CELL_SIZE + 1
                    );
                }
            }

            DEAD_COLOR = window.getComputedStyle(document.getElementById("wrapper")).backgroundColor;
            ctx.fillStyle = DEAD_COLOR;
            for (let row = 0; row < height; row++) {
                for (let col = 0; col < width; col++) {
                    const idx = getIndex(row, col);
                    if (cells[idx] !== Cell.Dead) {
                        continue;
                    }

                    ctx.clearRect(
                        col * (CELL_SIZE + 1) + 1,
                        row * (CELL_SIZE + 1) + 1,
                        CELL_SIZE + 1,
                        CELL_SIZE + 1
                    );
                }
            }

            ctx.stroke();
        };


        //drawGrid();
        drawCells();
        //requestAnimationFrame(renderLoop);
        renderLoop();
    }
}

run();
