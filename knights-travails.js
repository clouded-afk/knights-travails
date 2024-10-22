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
            if (next[0] >= 0 && next[0] < 8 && next[1] >= 0 && next[1] < 8 && !visited.has(next.toString())) {
                visited.add(next.toString())
                queue.push([next, [...path, next]])
            }
            
        }
    }
}


export {
    knightMoves
}