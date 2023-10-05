/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let count = 0
    let x = 1

    while(x <= Math.min(a, b)) {
        if(a % x === 0 && b % x === 0) {
            count++
        }
        x++
    }

    return count
};