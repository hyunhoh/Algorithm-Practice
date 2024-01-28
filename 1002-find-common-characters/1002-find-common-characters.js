/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const res = []

    for(char of words[0]) {
        console.log(words[0])
        console.log(char)
        if(words.every(word => word.includes(char))) {
            res.push(char)
            words = words.map(word => word.replace(char, ''))
        }
    }
    
    return res
};