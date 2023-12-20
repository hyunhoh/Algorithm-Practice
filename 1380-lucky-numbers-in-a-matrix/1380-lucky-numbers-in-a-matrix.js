/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const minList = []
    const maxList = []

    for(let i=0; i<matrix.length; i++) {
        minList.push(Math.min(...matrix[i]))
    }

    for(let i=0; i<matrix[0].length; i++) {
        const col = []

        for(let j=0; j<matrix.length; j++) {
            col.push(matrix[j][i])
        }

        maxList.push(Math.max(...col))
    }

    for(num of minList) {
        if(maxList.includes(num)) return [num]
    }

    return []
};