/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    return mat.reduce((acc, cur, idx) => {
        const sum = cur.reduce((acc, cur) => acc + cur)

        return sum > acc[1] ? [idx, sum] : acc
    }, [0, 0])
};