/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    const hash = {}

    for(char of chars) {
        hash[char] = (hash[char] || 0) + 1
    }

    return words.reduce((acc, cur) => {
        let copy = { ...hash }

        for(str of cur) {
            if(str in copy && copy[str] > 0) copy[str] -= 1
            else return acc
        }

        return acc + cur.length
    }, 0)
};