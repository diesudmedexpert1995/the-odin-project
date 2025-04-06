export default function KnightTravails(source, destination){
    const KNIGHT_OFFSETS = [
        [1, 2],
        [2, 1],
        [-1, 2],
        [-2, 1],
        [1, -2],
        [2, -1],
        [-1, -2],
        [-2, -1],
    ]

    const traverse = (moves, path) => {
        console.log(`You made it in ${moves} moves! Here's your path:`)
        for (let i = 0; i < path.length; i++) {
            console.log(path[i])            
        }
    }

    let queue = [{position: source, moves: 0, path: [source]}]
    let visited = new Set()
    let minMoves = Infinity

    while(queue.length !== 0){
        let {position, moves, path} = queue.shift()
        let [x, y] = position

        if(x === destination[0] && y === destination[1]){
            if(moves < minMoves){
                minMoves = moves
                traverse(minMoves, path)
                break
            }
        }

        for(let  i = 0; i < KNIGHT_OFFSETS.length; i++){
            let newXPos = x + KNIGHT_OFFSETS[i][0]
            let newYPos = y + KNIGHT_OFFSETS[i][1]

            if(newXPos >= 0 && newXPos < 8 && newYPos >= 0 && newYPos < 8){
                let newPosition = [newXPos, newYPos]

                if(!visited.has(`${newXPos}, ${newYPos}`)){
                    queue.push({
                        position: newPosition,
                        moves: moves + 1,
                        path: [...path, newPosition]
                    })
                }
            }
        }
    }
    if (minMoves === Infinity) return 'No solution has been found'
}