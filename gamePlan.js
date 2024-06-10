// First Commit
// const { Position } = require("./battleShips.html")
class Position {
    constructor(width, depth){
        this.width = width;
        this.depth = depth;
        this.hit = null;
        this.ship = null;
        // this.fleet = {
        //     "carrier":      5,}
        //     "BattleShip":   4,
        //     "Destroyer":    3,
        //     "Submarine":    3,
        //     "Patrol":       2,
        // };
    }
}

class Gameboard {
    constructor() {
        this.board = {};
        this.ships = {};
        // this.shipsPlaced = true;
        this.shipsPlaced = false;
        this.boolShips = {};
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

    place() {
        this.ships = {
            "Carrier":      5,
            "BattleShip":   4,
            "Destroyer":    3,
            "Submarine":    3,
            "Patrol":       2,
        };
        // this.shipsPlaced = this.ships && Object.keys(this.ships).length > 0;
        this.updateShipsPlaced();
    }

    updateShipsPlaced() {
        this.shipsPlaced = Object.keys(this.ships).length <= 0;
    }

    currentShips({shipName: value}) {
        this.boolShips = {
            "Carrier":      value,
            "BattleShip":   value,
            "Destroyer":    value,
            "Submarine":    value,
            "Patrol":       value,
        }
    }

    // haveShips() {
    //     this.ships = {
    //         "Carrier":      5,
    //         "BattleShip":   4,
    //         "Destroyer":    3,
    //         "Submarine":    3,
    //         "Patrol":       2,
    //     }
    // }
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
console.log(gameState.shipsPlaced);
gameState.place();
delete gameState.ships.BattleShip
delete gameState.ships.Carrier
delete gameState.ships.Destroyer
delete gameState.ships.Patrol
delete gameState.ships.Submarine

console.log(gameState.shipsPlaced);
// gameState.ships = {};
gameState.updateShipsPlaced();
console.log(gameState.ships, Object.keys(gameState.ships).length <= 0, gameState.shipsPlaced, gameState.currentShips());

// console.log(gameState.board["A10"].hit, gameState.board["F2"].ship, what, String.fromCharCode(65))//, charCodeAt(165))
// console.log(gameState.board);
// module.exports = {
//     Position,
//     Gameboard
// }