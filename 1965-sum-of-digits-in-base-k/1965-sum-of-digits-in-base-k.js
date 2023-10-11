/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
    return [...n.toString(k)].reduce((acc, cur) => acc + +cur, 0)
};