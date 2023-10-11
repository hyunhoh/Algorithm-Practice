/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const hash = {}

    for(char of s) {
        hash[char] ? hash[char] += 1 : hash[char] = 1
    }

    const val = hash[s[0]]

    for(key in hash) {
        if(val !== hash[key]) return false
    }

    return true
};