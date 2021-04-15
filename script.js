//factory function
const gameboard = (() => {
    //array to keep track
    let board = [];

    //function to make players objects
    const players = (name, turn, mark) => {
        return { name, turn, mark }
    }

    const player1 = players('player1', true, "O");
    const player2 = players('player2', false, "X");

    //global querySelelector for .move
    const moves = document.querySelectorAll(".move")

    //triggered rightaway to start the listening to click events
    const move = () => {
        moves.forEach(move => move.addEventListener("click", function newName() {
            return marking(move)}))}
    
    //should trigger when the 3 item line is formed
    const gameOver = () => {
        moves.forEach(move => move.removeEventListener("click", function newName() {
            return marking(move)}))}
        
    
    //triggered after move() and updates board array and marks the board
    const marking = (move) => {
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

        // takes o and x var from updated playerArrays()
        const { o, x } = playerArrays()

        //check if won 
        wincheck(o, x)

        }
    
    
    //updates the array
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
    
    //check the array against the winCases
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

        //checks whether o has won
        function checkO(o) {       
            for (let i = 0; i<winCases.length; i++) {
                if (winCases[i].every(h => o.includes(h))) {
                    console.log("true")
                    gameOver()
                }
                else {
                    console.log("false")
                }}}
        //checks whether x has won
        function checkX(x) {
            for (let i = 0; i<winCases.length; i++) {
                if (winCases[i].every(h => x.includes(h))) {
                    console.log("true")
                    gameOver()
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


        
    

    return { move }
})()


//     //gameover is not working
//     //cancel dom and show a sign maybe a sign below name class "gameover"



/* module function can be used right away
factory functions have to be assigned to a var and used it 

 */