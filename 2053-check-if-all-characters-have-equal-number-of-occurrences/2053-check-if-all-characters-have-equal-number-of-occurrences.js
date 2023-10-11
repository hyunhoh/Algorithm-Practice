/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const hash = {}

    for(char of s) {
        hash[char] ? hash[char] += 1 : hash[char] = 1
    }

    const values = Object.values(hash)

    for(let i=0; i<values.length-1; i++) {
        if(values[i] !== values[i+1]) return false
    }

    return true
};