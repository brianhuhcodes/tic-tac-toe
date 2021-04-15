


//to see which player is going next


//factory function???
const gameboard = (() => {
    let board = [];
    const players = (name, turn, mark) => {
        return { name, turn, mark }
    }

    const player1 = players('player1', true, "O");
    const player2 = players('player2', false, "X");
    const moves = document.querySelectorAll(".move")

    const move = () => {
        moves.forEach(move => move.addEventListener("click", e => {
        let position = move.id
        console.log('moveoutside')
        if (board[position] === undefined && player1.turn === true) {
            board[position] = player1.mark
            move.innerHTML += board[position]
            player1.turn = false
            player2.turn = true
        }
        else if (board[position] === undefined && player2.turn === true) {
            board[position] = player2.mark
            move.innerHTML += board[position]
            player2.turn = false
            player1.turn = true


    }

    const { o, x } = playerArrays()
    wincheck(o, x)
    }))
}


    const playerArrays = () => {
        let o = [];
        let x = [];


        for (let i = 0; i < 9; i++) {
            if (board[i] === 'O') {
                o.push(i)

            }
            else if (board[i] === 'X') {
                x.push(i)
            }
        }
        
        return { o, x }
    }
    

    const wincheck = (o, x) => {        
        const winCases = [
            [0,1,2],
            [0,3,6],
            [3,4,5],
            [6,7,8],
            [1,4,7],
            [2,4,6],
            [2,5,8],
            [0,4,8]
        ];

        function checkO(o) {       
            for (let i = 0; i<winCases.length; i++) {
                if (winCases[i].every(h => o.includes(h))) {
                    console.log("frue")
                    return gameOver()
                }
                else {
                    console.log("false")
                }}}

        function checkX(x) {
            for (let i = 0; i<winCases.length; i++) {
                if (winCases[i].every(h => x.includes(h))) {
                    console.log("true")

                    return gameOver()
                }
                else {
                    console.log("false")
                }
            }}
        
        const oCheck = checkO(o)
        const xCheck = checkX(x)
        console.log(oCheck)
        console.log(xCheck)
        

    }

    const gameOver = () => {
        moves.forEach(move => move.removeEventListener("click", e => {
            let position = move.id
            if (board[position] === undefined && player1.turn === true) {
                player1.turn = false
                player2.turn = true
            }
            else if (board[position] === undefined && player2.turn === true) {
                player2.turn = false
                player1.turn = true
            }}))}
        
    

    return { move }
})()

gameboard.move()



// if ((board[0] && board[1]) && (board[0] && board[2]) || (board[3] && board[4]) && (board[3] && board[5]) || (board[6] && board[7]) && (board[6] && board[8]) || (board[0] && board[3]) && (board[0] && board[6]) || (board[1] && board[4]) && (board[1] && board[7]) || (board[2] && board[5]) && (board[2] && board[8]) || (board[0] && board[4]) && (board[0] && board[8]) || (board[2] && board[4]) && (board[2] && board[6])) {
//     //game over 
//     //cancel dom and show a sign maybe a sign below name class "gameover"
// }


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