/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let x = 1

    while(x <= n) {
        if((x ** 2 * 2) === (n ** 2 + n)) return x
        else x++
    }

    return -1
};