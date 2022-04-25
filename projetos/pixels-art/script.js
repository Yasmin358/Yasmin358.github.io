window.onload = function () {
    //variaveis

    const colorsB = document.getElementsByClassName('color');
    let rgbColor = 'black';
    const buttton = document.getElementById('clear-board');
    const buttton2 = document.getElementById('generate-board');
    colorsB[0].classList.add('selected');

    //Criando paleta de cores --------------
    colorpalette();
    //Criar quadro de pixels
    createBoard(5);
    //Criando botão de limpar quadro ------------
    botaoLimpar();
    //Criando botão de tamanho do quadro -------------
    botaoVQV();

    //Paleta de Cores
    function colorpalette() {
        const colors = document.getElementsByClassName('color');
        for (let index = 1; index < colors.length; index++) {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            colors[index].style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        }
        colors[0].style.backgroundColor = 'black';

        for (let index = 0; index < colors.length; index++) {
            colors[index].addEventListener('click', function () { colorSelect(index) });

        }
    }

    function colorSelect(cor) {
        colorsB[cor].classList.add('selected');

        for (let index2 = 0; index2 < colorsB.length; index2++) {
            if (colorsB[index2].classList.contains('selected') && index2 !== cor) {
                colorsB[index2].classList.remove('selected');
            }
        }
        rgbColor = colorsB[cor].style.backgroundColor;
    }


    //Limpar quadro
    function botaoLimpar() {
        buttton.addEventListener('click', function () { clearBoard() });
    }

    function clearBoard() {
        const pixels = document.getElementsByClassName("pixel");
        for (let index = 0; index < pixels.length; index++) {
            pixels[index].style.backgroundColor = 'white';
        }
    }

    //Criar linhas ------------
    function botaoVQV() {
        buttton2.addEventListener('click', function () { generateBoard() });
    }

    function generateBoard() {
        //input
        let linesSize = document.querySelector("#board-size").value;
        if (linesSize == 0) {
            alert("Board inválido!");
        } else if (linesSize < 5 && linesSize > 0) {
            linesSize = 5;
        } else if (linesSize > 50) {
            linesSize = 50;
        }
        clearLines();
        createBoard(linesSize);
    }

    function createBoard(Size) {
        const board = document.getElementById('pixel-board');

        for (let index = 0; index < Size; index += 1) {
            const line = createLine('line');
            board.appendChild(line);
        }

        fillPixelBoard();
        butaoPixels();
        sizeBoard(board, Size);

    }

    function sizeBoard(board, size) {
        if (size > 0) {
            board.style.width = size * 42 + 'px';
            const line = document.getElementsByClassName('line');
            line[0].style.width = size * 42 + 'px';
        }

    }

    function createLine(className) {
        const line = document.createElement('div');
        line.className = className;
        return line;
    }

    //Remover Linhas - Solução Stakoverflow
    function clearLines() {
        const line = document.getElementsByClassName('line');
        while (line.length > 0) {
            line[0].parentNode.removeChild(line[0]);
        }

    }

    //Prencher quadro com pixels -----------

    function fillPixelBoard() {
        const lines = document.getElementsByClassName("line");
        for (let index = 0; index < lines.length; index += 1) {
            fillLine(lines[index], lines);
        }
    }

    function fillLine(divLine, lines) {
        for (let lineColumn = 0; lineColumn < lines.length; lineColumn += 1) {
            const box = createPixel('pixel');
            divLine.appendChild(box);
        }
    }

    function createPixel(className) {
        const pixel = document.createElement('div');
        pixel.className = className;
        return pixel;
    }

    //Pintar quadro

    function colorPixel(index, pixels) {
        pixels[index].style.backgroundColor = rgbColor;
    }

    function butaoPixels() {
        const pixels = document.getElementsByClassName('pixel');
        for (let index = 0; index < pixels.length; index++) {
            pixels[index].addEventListener('click', function () { colorPixel(index, pixels) });
        }
    }
}