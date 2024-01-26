/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let count = 0

    for(let i=0; i<mat.length; i++) {
        for(let j=0; j<mat[0].length; j++) {

            if(mat[i][j] === 0) continue

            if(mat[i].reduce((acc, cur) => acc + cur, 0) > 1) continue

            let sum = 0;

            for(let k=0; k<mat.length; k++) {
                sum += mat[k][j]
            }

            if(sum > 1) continue

            count++

        }
    }

    return count
};