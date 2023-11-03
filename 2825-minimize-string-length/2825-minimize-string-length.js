/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function(s) {
    const hash = {}

    for(let char of s) {
        hash[char] = (hash[char] || 0) + 1 
    }

    return Object.keys(hash).length
};