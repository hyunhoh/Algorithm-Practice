/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function(words, separator) {
    return words.reduce((acc, cur) => {
        const split = cur.split(separator)

        for(ele of split) {
            ele ? acc.push(ele) : null
        }

        return acc
    }, [])
};