/**
 * @param {string[]} words
 * @return {number}
 */
var similarPairs = function(words) {
    const convert = words.map(word => {
        const hash = {}

        for(char of word) {
            if(!hash[char]) hash[char] = 1
        }

        return Object.keys(hash).sort().join('')
    })

    let count = 0

    for(let i=0; i<convert.length; i++) {
        for(let j=i+1; j<convert.length; j++) {
            if(convert[i] === convert[j]) count++
        }
    }

    return count
};