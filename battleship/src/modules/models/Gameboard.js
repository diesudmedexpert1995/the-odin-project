class Gameboard {
    #ships
    #shots
    constructor() {
        this.#ships = []
        this.#shots = []
    }

    get ships(){
        return this.#ships
    }

    get shots(){
        return this.#shots
    }

    placeShip(ship, coordinates){
        if(ship.length !== coordinates.length) throw new Error("The ship`s length should be same as given coordinates length");
        if (this.#ships.find(({ship: shipElement})=> shipElement === ship)) throw new Error("Same ship exists in this coordinates on the gameboard");
        for (const {coordinates: existingCoordinates} of this.#ships) {
            for(const coord of coordinates){
                if (
                    existingCoordinates.some(
                      (existingCoord) =>
                        existingCoord[0] === coord[0] && existingCoord[1] === coord[1],
                    )
                  )
                throw new Error("The ship overlaps with another ship");
            }

        }
        this.#ships.push({ship, coordinates})
    }

    receiveAttack(coordinate){
        const isAttackedBefore = this.#shots.some(
            ([x,y]) => coordinate[0] === x && coordinate[1] === y 
        )
        if(isAttackedBefore) throw new Error(`This coordinate [${x},${y}] has been already attacked once`);

        this.#shots.push(coordinate)

        const hitShip = this.#ships.find((shipElement) => shipElement.coordinates.some(
            (coord) => coord[0] === coordinate[0] && coord[1] === coordinate[1],
          ),)
        
        if(hitShip){
            hitShip.ship.hit()
            return true
        }
        return false
    }

    isShipsSunk(){
        return this.#ships.every(({ship})=>ship.isSunk())
    }

    clearBoard(){
        this.#ships = []
        this.#shots = []
    }
}

export default Gameboard