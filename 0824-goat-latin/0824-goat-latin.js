/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

    return sentence.split(' ').map((e, i) => vowels.includes(e[0]) ?  e + 'ma' + 'a'.repeat(i+1)
    : e.slice(1) + e[0] + 'ma' + 'a'.repeat(i+1)).join(' ')
};