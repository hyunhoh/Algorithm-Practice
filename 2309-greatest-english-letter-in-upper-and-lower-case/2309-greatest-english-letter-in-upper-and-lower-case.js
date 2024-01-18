/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    const letters = [...s].sort()
    const hash = {}

    for(let i=letters.length-1; i>=0; i--) {
        if(letters[i].charCodeAt() >= 97) hash[letters[i]] = 1

        else {
            if(hash[letters[i].toLowerCase()]) return letters[i]
        }
    }

    return ''
};