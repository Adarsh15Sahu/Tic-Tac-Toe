console.log("Welcome to Tic Tac Tae");
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("game-over.mp3")
let turn = "X";
let gameOver = false;
const changeTurn = () => {

    return turn === "X" ? "O" : "X"
}

// function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = "Congratulations  " + boxtext[e[0]].innerText + "  Won";
            gameOver = true;
            let img = document.getElementById('imag');
            img.src = "giphy2.gif";
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";
            gameover.play();
        }
        let isDraw = true;
        Array.from(boxtext).forEach(box => {
            if (box.innerText === "") {
                isDraw = false;
            }
        });
        if (isDraw && !gameOver) {
            document.querySelector('.info').innerText = "It's a Draw!";
            let img = document.getElementById('imag');
            img.src = "gifpy.gif";
            document.querySelector('.image').getElementsByTagName('img')[0].style.width = "200px";
            gameOver = true;
            gameover.play();
        }
    })
}

//main logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!gameOver) {
                document.getElementsByClassName("info")[0].innerText = "Turn for  " + turn;
            }

        }
    })
})

///
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    gameOver = false;
    // let img = document.getElementById('imag');
    // img.src = "giphy2.gif";

    document.querySelector('.image').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.info').innerText = "Turn for X";
})