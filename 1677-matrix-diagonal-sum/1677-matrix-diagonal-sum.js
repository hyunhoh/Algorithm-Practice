/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    return mat.reduce((acc, cur, idx) =>
        idx === cur.length - 1 - idx ? acc + cur[idx] : acc + cur[idx] + cur[cur.length - 1 - idx]
    , 0)
};