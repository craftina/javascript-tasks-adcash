function labyrinth(matrix) {
    const start = [matrix.length - 1, matrix.length - 1];
    //                    up,     down,   left,    right
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const visitedCollection = new Set();
    const currentMoves = [[...start, 1, false]];
    visitedCollection.add(`${start[0]},${start[1]},false`);

    while (currentMoves.length > 0) {

        const [rowCurrent,
            columnCurrent,
            stepsCurrent,
            isWallRemoved] = currentMoves.shift();

        const isEnd = rowCurrent === 0 && columnCurrent === 0;

        if (isEnd) {
            return stepsCurrent;
        }

        for (const [rowDir, columnDir] of directions) {
            const rowNext = rowDir + rowCurrent;
            const columnNext = columnDir + columnCurrent;
            const isStart = rowNext === matrix.length - 1 
            && columnNext === matrix.length - 1;


            const withinMatrix = rowNext >= 0
                && rowNext < matrix.length
                && columnNext >= 0
                && columnNext < matrix.length;

            if (!withinMatrix) continue;

            if ((matrix[rowNext][columnNext] === 0 && !isStart) || isEnd) {
                const visited = `${rowNext},${columnNext},${isWallRemoved}`;

                if (!visitedCollection.has(visited)) {
                    visitedCollection.add(visited);
                    currentMoves.push([rowNext, columnNext, stepsCurrent + 1, isWallRemoved]);
                }
            }
            else if (matrix[rowNext][columnNext] === 1 && !isWallRemoved) {
                const visited = `${rowNext},${columnNext},true`;

                if (!visitedCollection.has(visited)) {
                    visitedCollection.add(visited);
                    currentMoves.push([rowNext, columnNext, stepsCurrent + 1, true]);
                }
            }
        }
    }
    return "The end can't be reached";
}

let l1 =
    [[0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0]]
let l2 =
    [[0, 1, 1, 0],
    [0, 0, 0, 1],
    [1, 1, 0, 0],
    [1, 1, 1, 0]]
let l3 =
    [[0, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1, 0],
    [0, 0, 0, 0]]
let l4 =
    [[0, 1, 1],
    [1, 1, 1],
    [0, 0, 0]]
console.log(labyrinth(l1));

