// First Commit
// const { Position } = require("./battleShips.html")
class Position {
    constructor(width, depth){
        this.width = width;
        this.depth = depth;
        this.hit = null;
        this.ship = null;
        this.gameOver = false;
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
        this.name = "";
        this.board = {};
        this.ships = {};
        this.gameSet = false;
        // this.shipsPlaced = true;
        this.shipsPlaced = false;
        this.boolShips = {};
        this.htmlID = "";
        this.coordinates = {
            "Carrier":      [],
            "BattleShip":   [],
            "Destroyer":    [],
            "Submarine":    [],
            "Patrol":       [],
        };
        this.allOver = false;
    }

    reset() {
        this.name = "";
        this.board = {};
        this.ships = {};
        this.gameSet = false;
        this.shipsPlaced = false;
        this.boolShips = {};
        this.htmlID = "";
        this.coordinates = {
            "Carrier":      [],
            "BattleShip":   [],
            "Destroyer":    [],
            "Submarine":    [],
            "Patrol":       [],
        };
        this.allOver = false;
    }

    setLocation(key, value) {
        this.coordinates[key].push(...value);
    }

    healthPoints(key, value) {
        // maybe set ships value to 0
        return this.coordinates[key].length
    }
    
    append(x, y) {
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

    currentShips() {
        this.boolShips = {
            "Carrier":      this.healthPoints("Carrier"),
            "BattleShip":   this.healthPoints("BattleShip"),
            "Destroyer":    this.healthPoints("Destroyer"),
            "Submarine":    this.healthPoints("Submarine"),
            "Patrol":       this.healthPoints("Patrol"),
        }
        let sum = 0;
        for (let n of Object.keys(this.boolShips)) {
            sum += this.boolShips[n];
        }
        // return this.boolShips
        return sum
    }

    gameOver() {
        // this.currentShips();
        this.allOver = this.currentShips() === 0;
    }

    updateState() {
        this.gameSet = this.currentShips() === 17;
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
// console.log(gameState.shipsPlaced);
gameState.place();
delete gameState.ships.BattleShip
delete gameState.ships.Carrier
delete gameState.ships.Destroyer
delete gameState.ships.Patrol
delete gameState.ships.Submarine

// console.log(gameState.shipsPlaced);
// gameState.ships = {};
gameState.updateShipsPlaced();
// console.log(gameState.ships, Object.keys(gameState.ships).length <= 0, gameState.shipsPlaced, gameState.currentShips(), gameState.setLocation("Patrol", "A1", "A2", "A3"));
// console.log(gameState.ships, Object.keys(gameState.ships).length <= 0, gameState.currentShips(), gameState.setLocation("Patrol", "A1", "A2", "A3"));
// console.log(gameState.setLocation("Patrol", ["A1", "A2", "A3"]), gameState.coordinates);
// console.log(gameState.board["A10"].hit, gameState.board["F2"].ship, what, String.fromCharCode(65))//, charCodeAt(165))
// console.log(gameState.board);
// module.exports = {
//     Position,
//     Gameboard
// }