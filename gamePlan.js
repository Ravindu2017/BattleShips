// First Commit
// const { Position } = require("./battleShips.html")
class Position {
    constructor(width, depth){
        this.width = width;
        this.depth = depth;
        this.hit = null;
        this.ship = null;
    }
}

class Gameboard {
    constructor(board) {
        this.board = {};
    }
    
    append(x, y){
        if (this.board[x+y]) {
            return "object exists"
        }

        const squares = new Position(x, y);
        const key = squares.width + squares.depth;

        this.board[key] = squares;

        // this.gameState

    }

    createBoardGame() {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const location = new Position(String.fromCharCode(65+i), j+1);
                // gameState.append(location.width, location.depth);
                this.append(location.width, location.depth);
            }
        }
    }
}

const gameState = new Gameboard();
// gameState.append("A", 10);

const what = new Position("A", 10);
// gameState.append(what.width, what.depth);

// function createBoardGame(obj) {
//     for (let i = 0; i < 10; i++) {
//         for (let j = 0; j < 10; j++) {
//             const location = new Position(String.fromCharCode(65+i), j+1);
//             // gameState.append(location.width, location.depth);
//             obj.append(location.width, location.depth);
//         }
//     }
// }

// createBoardGame(gameState);

gameState.createBoardGame();

console.log(gameState.board["A10"].hit, gameState.board["F2"].ship, what, String.fromCharCode(65))//, charCodeAt(165))
console.log(gameState.board);
// module.exports = {
//     Position,
//     Gameboard
// }