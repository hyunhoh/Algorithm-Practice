/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    return [...s].reduce((acc, cur, idx) => {
        acc[indices[idx]] = cur
        return acc
    }, new Array(s.length)).join('')
};