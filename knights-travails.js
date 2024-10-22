const potentialMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2]
]

function knightMoves(startPosition, endPosition) {
    if (startPosition[0] === endPosition[0] && startPosition[1] === endPosition[1]) {
        return 'You made it in 0 moves!'
    }
}



export {
    knightMoves
}