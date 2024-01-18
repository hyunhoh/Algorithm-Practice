/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function(words1, words2) {
    const filtered1 = words1.filter(e => words1.indexOf(e) === words1.lastIndexOf(e))
    const filtered2 = words2.filter(e => words2.indexOf(e) === words2.lastIndexOf(e))

    let count = 0

    for(word of filtered1) {
        if(filtered2.includes(word)) count++
    }

    return count
};