/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    // return new Array(n).fill(n).map((_, i) => start + 2 * i).reduce((acc, cur) => acc ^ cur);
    let res;

    for(let i=0; i<n; i++) {
        res = res ^ (start + 2 * i)
    }

    return res;
};