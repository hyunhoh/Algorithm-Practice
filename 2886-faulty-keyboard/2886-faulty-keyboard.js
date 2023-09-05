/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    return [...s].reduce((acc, cur) => cur === 'i' ? acc.reverse() : [...acc, cur], []).join('')
};