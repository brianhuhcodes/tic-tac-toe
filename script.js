console.log("hello world")
let board = ["", "", "", "", "", "", "", "", ""]




// const gameBorad = (one, two) => {
//     const random = () => console.log('random')
//     return {one, two, random}
// }

const gameBoardInner = document.querySelector(".gameboard-inner")


// for (let i = 0;i < board.length; i++) {
//     const move = document.createElement('div')

//     move.classList.add("move")

//     move.innerHTML += board[i]
//     gameBoardInner.appendChild(move)
// }


const moves = document.querySelectorAll(".move")
moves.forEach(move => move.addEventListener("click", e => {
    let position = move.id
    
    if (board[position] == '' | 'x' | 'o') {
        board[position] = "o"
        move.innerHTML += board[position]
}
}))
//how do i sync a move div to array???


//move.innerHTML += board2[i]
//move.addEventListener('click', e => console.log(e))


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