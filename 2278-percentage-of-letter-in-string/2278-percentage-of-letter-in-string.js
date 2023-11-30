/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count = 0

    for(char of s) {
        if(letter === char) count++
    }

    return Math.floor(count / s.length * 100)
};