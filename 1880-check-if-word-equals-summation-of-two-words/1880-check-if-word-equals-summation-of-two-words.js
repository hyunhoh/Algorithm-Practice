/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
const convert = function(s) {
    return +[...s].map(e => e.charCodeAt() - 97).join('')
}

var isSumEqual = function(firstWord, secondWord, targetWord) {
    return convert(firstWord) + convert(secondWord) === convert(targetWord)
};