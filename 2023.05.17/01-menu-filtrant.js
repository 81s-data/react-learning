colors = ['#B11414', '#3c13a4', '#31a413', '#B8c71d'];

let nSquares = 50;

let board = document.getElementById('board');

let squaresColor = [];

let isLoading = false;

const createSquare = color => {
    let div = document.createElement('div');
    div.classList.add('square');
    div.style.backgroundColor = color;
    return div;
};

const initBoard = () => {
    board.innerHTML = '';
    let time = 0;
    for (let i = 0; i < nSquares; i++) {
        // squaresColor[i] = colors[Math.floor(Math.random() * (3 - 0 + 1) + 0)];
        squaresColor[i] = colors[Math.floor(Math.random() * colors.length)];
        setTimeout(() => {
            board.append(createSquare(squaresColor[i]));
        }, time += 100);
    }
};

initBoard();

document.getElementById('red-btn').onclick = () => {
    board.innerHTML = '';
    console.log('bouton rouge');
    // let squares = squaresColor.filter(item => item === '#B11414');
    // for (let i = 0; i < squares.length; i++) {
    //     board.append(createSquare(squares[i]));
    // }
    squaresColor.filter(item => item === '#B11414')
                .map(item => board.append(createSquare(item)));
};

document.getElementById('blue-btn').onclick = () => {
    board.innerHTML = '';
    console.log('bouton bleu');
    // let squares = squaresColor.filter(item => item === '#3c13a4');
    // for (let i = 0; i < squares.length; i++) {
    //     board.append(createSquare(squares[i]));
    // }
    squaresColor.filter(item => item === '#3c13a4')
                .map(item => board.append(createSquare(item)));
};

document.getElementById('green-btn').onclick = () => {
    board.innerHTML = '';
    console.log('bouton vert');
    // let squares = squaresColor.filter(item => item === '#31a413');
    // for (let i = 0; i < squares.length; i++) {
    //     board.append(createSquare(squares[i]));
    // }
    squaresColor.filter(item => item === '#31a413')
                .map(item => board.append(createSquare(item)));
};

document.getElementById('yellow-btn').onclick = () => {
    board.innerHTML = '';
    console.log('bouton jaune');
    // let squares = squaresColor.filter(item => item === '#B8c71d');
    // for (let i = 0; i < squares.length; i++) {
    //     board.append(createSquare(squares[i]));
    // }
    squaresColor.filter(item => item === '#B8c71d')
                .map(item => board.append(createSquare(item)));
};

document.getElementById('reset-btn').onclick = () => {
    board.innerHTML = '';
    // for (let i = 0; i < squaresColor.length; i++) {
    //     board.append(createSquare(squaresColor[i]));
    // }
    squaresColor.map(item => board.append(createSquare(item)));
};