console.log("hello world")
let board = [null, null, null, null, null, null, null, null, null]
let board2 = ["o", "o", " ", " ", " ", "o", " ", "x", " "]



// const gameBorad = (one, two) => {
//     const random = () => console.log('random')
//     return {one, two, random}
// }

const gameBoardInner = document.querySelector(".gameboard-inner")


for (let i = 0; i < board2.length; i++) {
    const move = document.createElement('div')

    move.classList.add("move")

    move.innerHTML += board2[i]
    gameBoardInner.appendChild(move)
}

/* module function can be used right away
factory functions have to be assigned to a var and used it 

empty board 3x3
//just exists



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