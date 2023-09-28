/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    const hash = {}
    let count = 0

    for(word of words) {
        if(hash[[...word].reverse().join('')]) count += 1
        hash[word] = 1;
    }

    return count;
};