/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let pair = true;
    let count = 0;

    for(char of s) {
        if(char === '|') pair = !pair
        if(pair) {
            if(char === '*') count++;
        }
    }

    return count;
};