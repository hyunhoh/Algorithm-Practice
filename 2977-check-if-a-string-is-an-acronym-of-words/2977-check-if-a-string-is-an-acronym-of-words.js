/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    return words.reduce((acc, cur) => acc + cur[0], '') === s
};