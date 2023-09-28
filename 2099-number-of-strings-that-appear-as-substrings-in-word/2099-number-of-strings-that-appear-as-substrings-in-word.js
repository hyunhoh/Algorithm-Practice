/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count = 0;

    for(ele of patterns) {
        if(word.includes(ele)) count++
    }

    return count
};