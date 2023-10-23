/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let int = 1
    let num1 = 0
    let num2 = 0

    while(int <= n) {
        int % m ? num1 += int : num2 += int
        int++
    }

    return num1 - num2
};