/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const idx = word.indexOf(ch)

    return [...[...word].slice(0,idx+1).reverse(), ...[...word].slice(idx+1)].join('')
};