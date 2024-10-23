function knightMoves(startPosition, endPosition) {
    const BOARDSIZE = 8

    const possibleKinghtMoves = [
        [2,1],
        [2,-1],
        [-2,1],
        [-2,-1],
        [1,2],
        [1,-2],
        [-1,2],
        [-1,-2],
    ]

    function validatePosition(x, y) {
        return x >= 0 && x < BOARDSIZE && y >= 0 && y < BOARDSIZE
    }

    for (const point of [...startPosition, ...endPosition]) {
        if (point >= BOARDSIZE || point < 0) {
            throw new Error('Invalid Start or End position. The board is an 8x8, all points must be in the range 0-7.')
        }
    }

    const queue = [[startPosition, [startPosition]]]
    const visitedBoardSquares = new Set()

    while (queue.length > 0) {
        const [vertex, path] = queue.shift()

        if (vertex[0] === endPosition[0] && vertex[1] === endPosition[1]) {
            return path
        }

        for (const move of possibleKinghtMoves) {
            const nextMove = [vertex[0] + move[0], vertex[1] + move[1]]

            if (validatePosition(nextMove[0], nextMove[1]) && !visitedBoardSquares.has(nextMove.toString())) {
                visitedBoardSquares.add(nextMove.toString())
                queue.push([nextMove, [...path, nextMove]])
            }
        }
    }
    return null
}


export {
    knightMoves
}