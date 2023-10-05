/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(word of words) {
        for(let i=0, j=word.length-1; ; i++, j--) {
            if(word[i] !== word[j]) {
                break
            }
            if(i >= j) {
                return word
            }
        }
    }

    return ''
};