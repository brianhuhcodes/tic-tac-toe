//factory function
const gameboard = (() => {
    //array to keep track
    let board = [];
    //function to make players objects
    function players(name, turn, mark) {
        return { name, turn, mark }
    }

    // const {player1, player2} = playerGenO()


    //const { player1, player2 } = playerGenO()///how to passively call playerGenX?
    let player1 
    let player2
    function playerGenO() {
        
        player1 = players('Player O', true, "O")
        player2 = players('Player X', false, "X")
    }


    
    function playerGenX() {
        console.log("playerGenX")
        player1 = players('Player X', true, "X")
        player2 = players('Player O', false, "O")
    }
    
    
    // const player1 = players('player1', true, "O");
    
    //global querySelelector for .move
    const moves = document.querySelectorAll(".move")
    
    //triggered to start listening for the game
    const move = () => {
        const moves = document.querySelectorAll(".move")
        moves.forEach(move => move.addEventListener("click", markOuter))}


    
    //should trigger when the 3 item line is formed
    const removeEvent = () => {
        const moves = document.querySelectorAll(".move")
        moves.forEach(move => move.removeEventListener("click", markOuter))}
        
    
    //triggered after move() and updates board array and marks the board
    function markOuter() {
        const marking = (() => {
            let position = this.id
            console.log('moveoutside')
            if (board[position] === undefined && player1.turn === true) {
                board[position] = player1.mark
                this.innerHTML += board[position]
                player1.turn = false
                player2.turn = true
            }
            else if (board[position] === undefined && player2.turn === true) {
                board[position] = player2.mark
                this.innerHTML += board[position]
                player2.turn = false
                player1.turn = true

            }

            // takes o and x var from updated playerArrays()
            const { o, x } = playerArrays()

            //check if won 
            wincheck(o, x)

        })()
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
                    removeEvent()
                    classChange()
                    displayController.gameWon(player1.name)
                }
                else {
                    console.log("false")
                }}}
        //checks whether x has won
        function checkX(x) {
            for (let i = 0; i<winCases.length; i++) {
                if (winCases[i].every(h => x.includes(h))) {
                    console.log("true")
                    removeEvent()
                    classChange()
                    displayController.gameWon(player2.name)
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
    
    const classChange = () => {
        const moves = document.querySelectorAll(".move")
        moves.forEach(move => move.className = "move-done")}
        
        // why does it say it is not initialized? displayController.gameStart()
    
    

    const boardReset = () => {
        board = []
    }

    
    


    return { move, boardReset, players, playerGenO, playerGenX }
})()





const displayController = (() => {
    const gameboardDiv = document.querySelector(".gameboard")

    function gameWon(name) {
        const gameboardDiv = document.querySelector(".gameboard")
        const gameWon = document.createElement("div")
        gameWon.innerHTML = `${name} won`
        gameWon.className = 'gamewon'
        gameboardDiv.prepend(gameWon)
        gameRestart()
    }
    function gameLost() {
        const gameLost = document.createElement("div")
        gameLost.innerHTML = `You lost`
        gameLost.className = 'gamelost'
        gameboardDiv.append(gameLost)
        
    }
    
    function gameRestart() {
        const gameRestart = document.createElement('button')
        gameRestart.className = 'btn'
        gameRestart.innerHTML = `Restart`
        gameboardDiv.prepend(gameRestart)
        gameRestart.addEventListener("click", e => {
            reset()
            gameRestart.remove()
        })

        
    }

    function reset() {
        const movedones = document.querySelectorAll(".move-done")
        movedones.forEach(md => md.innerHTML = '')
        gameboard.boardReset()
        const gamewon = document.querySelector('.gamewon')
        gamewon.remove()
        movedones.forEach(md => md.className = "move")
        gameboard.move()
    }

    
    (function gameStart() {
    const start = document.querySelector(".start")
    const O = document.querySelector(".OXbtn.O")
    const X = document.querySelector(".OXbtn.X")

    O.addEventListener("click", () => {
        const movebefore = document.querySelectorAll(".move-before")
        movebefore.forEach(mb => mb.className = "move")
        // const player1 = gameboard.players("Player 1", true, "O") //how do i pass these objects?
        // const player2 = gameboard.players("Player 2", false, "X")
        gameboard.playerGenO()
        gameboard.move()
        start.remove()

        
    })
    X.addEventListener("click", () => {
        const movebefore = document.querySelectorAll(".move-before")
        movebefore.forEach(mb => mb.className = "move")
        // const player1 = gameboard.players("Player 1", true, "X")
        // const player2 = gameboard.players("Player 2", false, "O")
        gameboard.playerGenX()
        gameboard.move()
        start.remove()
        
    })
})()

    
    
    return { gameWon }
})()



/* module function can be used right away
factory functions have to be assigned to a var and used it 


//still use factory function?
//message to show winner at the end 
//start and restart 
//add name

start button
start pressed => ask to enter names
game starts

ends
restart pressed
game starts without asking to enter names



change the board move classes to mutliple classes
 */

