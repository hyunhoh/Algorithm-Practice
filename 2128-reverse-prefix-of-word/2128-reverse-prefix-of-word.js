/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const idx = word.indexOf(ch)

    const prefix = [...word].slice(0,idx+1).reverse()
    const postfix = [...word].slice(idx+1)

    return [...prefix, ...postfix].join('')
};