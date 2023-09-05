/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    const converted = words.map(word => [...word].map(e => morse[e.charCodeAt()-97]).join(''))

    const obj = {};
    let output = 0;

    for(ele of converted) {
        if(!obj[ele]) {
            obj[ele] = 1
            output++
        }
    }

    return output;
};