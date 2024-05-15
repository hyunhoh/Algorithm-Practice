/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var modifiedMatrix = function(matrix) {
    const maxList = []

    for(let i=0; i<matrix[0].length; i++) {
        const col = []

        for(let j=0; j<matrix.length; j++) {
            col.push(matrix[j][i])
        }

        maxList.push(Math.max(...col))
    }

    for(let i=0; i<matrix.length; i++) {
        for(let j=0; j<matrix[0].length; j++) {
            if(matrix[i][j] === -1) matrix[i][j] = maxList[j]
        }
    }

    return matrix
};