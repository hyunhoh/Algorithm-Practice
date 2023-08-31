/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    let res = n;

    while(res % 2) {
        res = res * 2;
    }

    return res;
};