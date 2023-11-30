/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let res = 0

    for(left; left <= right; left++) {
        vowels.includes(words[left][0]) &&
        vowels.includes(words[left][words[left].length-1]) ? res++ : null
    }

    return res
};