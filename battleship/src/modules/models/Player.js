class Player {
    #name
    #gameboard
    #boardSize
    constructor(name, gameboard, boardSize = 10) {
        this.#name = name
        this.#gameboard = gameboard
        this.#boardSize = boardSize
    }

    get name() {
        return this.#name;
    }

    get gameboard() {
        return this.#gameboard;
    }

    receiveAttack(coordinates){
        this.#gameboard.receiveAttack(coordinates)
    }

    attackEnemy(enemyPlayer, coordinates){
        return enemyPlayer.receiveAttack(coordinates)
    }

    isShipsSunk(){
        return this.#gameboard.isShipsSunk()
    }

    placeShipsRandomly(ships){
        this.#gameboard.clearBoard()
        for(const ship of ships){
            let isPlaced = false
            while(!isPlaced){
                try {
                    const coordinates = this.#generateRandomCoordinates(ship.length)
                    this.#gameboard.placeShip(ship, coordinates)
                    isPlaced = true
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }

    #generateRandomCoordinates(length) {
        const isHorizontal = Math.random() < 0.5;
        let x, y;

        if (isHorizontal) {
            x = this.#getRandomInt(0, this.#boardSize - length);
            y = this.#getRandomInt(0, this.#boardSize - 1);
            return Array.from({ length }, (_, i) => [x + i, y]);
        } else {
            x = this.#getRandomInt(0, this.#boardSize - 1);
            y = this.#getRandomInt(0, this.#boardSize - length);
            return Array.from({ length }, (_, i) => [x, y + i]);
        }
    }

    #getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default Player