/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    return [...String(n)].reduce((acc, cur, idx) => idx % 2 ? acc - cur : acc + +cur)
};