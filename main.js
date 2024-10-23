import { knightMoves } from "./knights-travails.js";

function prettyPrint(startPosition, endPosition) {
    try {
        const result = knightMoves(startPosition, endPosition)

        if (result === null) {
            console.log(`No path between ${startPosition} --> ${endPosition}`)
            return
        }

        console.log(`You made it in ${result.length - 1} ${result.length - 1 === 1 ? 'move' : 'moves'}! Here's your path from ${startPosition} --> ${endPosition}`)

        for (const position of result) {
            console.log(position)
        }
    } catch(e) {
        console.log(e.message)
    }
}

prettyPrint([3,3], [4,3])
prettyPrint([7,2], [2,5])
prettyPrint([0,0], [7,7])
prettyPrint([2,8], [4,7])