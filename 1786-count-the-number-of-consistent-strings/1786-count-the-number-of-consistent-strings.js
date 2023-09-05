/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    return words.filter(word => {
        for(char of word) {
            if(!allowed.includes(char)) return false;
        }
        return true;
    }).length;
};