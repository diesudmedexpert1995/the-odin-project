class Ship {
    #length
    #hits
    
    constructor(length) {
        if (length <= 0) throw new Error("Length of the Ship shouldn`t be less 1");
        this.#length = length
        this.#hits = 0
    }

    get length() {
        return this.#length
    }

    get hits(){
        return this.#hits
    }

    hit() {
        if(this.#hits > this.#length){
            return false
        }
        this.#hits++
        return true
    }

    isSunk(){
        return this.#hits >= this.#length
    }
}

export default Ship