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
    const queue = [[startPosition, [startPosition]]]
    const visited = new Set()

    visited.add(startPosition.toString())

    while (queue.length > 0) {
        const [current, path] = queue.shift()

        if (current[0] === endPosition[0] && current[1] === endPosition[1]) {
            console.log(`You made it in ${path.length - 1} moves!`)
            path.forEach(square => {
                console.log(square)
            });
            return
        }

        for (const [dx, dy] of potentialMoves) {
            const next = [current[0] + dx, current[1] + dy]
            if (validatePosition(next[0], next[1]) && !visited.has(next.toString())) {
                visited.add(next.toString())
                queue.push([next, [...path, next]])
            }
        }
    }
}

function validatePosition(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8
}


export {
    knightMoves
}