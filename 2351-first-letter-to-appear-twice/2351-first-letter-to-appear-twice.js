/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const hash = {}

    for(letter of s) {
        if(hash[letter]) return letter
        else hash[letter] = 1
    }
};