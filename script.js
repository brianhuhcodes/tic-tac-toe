console.log("hello world")
let board = ["", "", "", "", "", "", "", "", ""]


const gameBoardInner = document.querySelector(".gameboard-inner")


const moves = document.querySelectorAll(".move")


//to see which player is going next
function count() {
    let empty = 0
    for (let i = 0; i < board.length; i++) {
        if (board[i] == "") {
            empty++
        }
    }
    if (empty % 2 == 0 ) {
        return first
    }
    else {
        return second
    }
    }

//factory function???
const gameTurn = () => {
    const firstmove = moves.forEach(move => move.addEventListener("click", e => {
        let position = move.id
        
        if (board[position] == '' | 'x' | 'o') {
            board[position] = "o"
            move.innerHTML += board[position]
    }
    }))

    const secondmove = moves.forEach(move => move.addEventListener("click", e => {
        let position = move.id
        
        if (board[position] == '' | 'x' | 'o') {
            board[position] = "x"
            move.innerHTML += board[position]
    }
    }))

    
    return {firstmove, secondmove}
}

gameTurn()
const first = gameTurn.firstmove()
const second = gameTurn.secondmove()



if ((board[0] && board[1]) && (board[0] && board[2]) || (board[3] && board[4]) && (board[3] && board[5]) || (board[6] && board[7]) && (board[6] && board[8]) || (board[0] && board[3]) && (board[0] && board[6]) || (board[1] && board[4]) && (board[1] && board[7]) || (board[2] && board[5]) && (board[2] && board[8]) || (board[0] && board[4]) && (board[0] && board[8]) || (board[2] && board[4]) && (board[2] && board[6])) {
    //game over 
    //cancel dom and show a sign maybe a sign below name class "gameover"
}


/* module function can be used right away
factory functions have to be assigned to a var and used it 



when first person click, o shows up
//how to show o?

second person's turn
//alternating turns

second person clicks, x shows up
//how to show x?

first person's turn
//alternate the turn again

fill in the array
and when 3 line is formed then 

game wins or lose


so figure out the possible formation and pick out all the situation that wins.
lets say   [o, x, o,
            o, x, x
            o,     ]
this means that [o, x, o, o, x, x, o, null, null] is won by player o.

if not null then you can't click

if null then you can click
the winning scenarios are 3 rows 3 columns and 2 crosses



 */