/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const hash = {};

    for(letter of sentence) {
        if(!hash[letter]) hash[letter] = 1;
    }

    return Object.keys(hash).length === 26
};