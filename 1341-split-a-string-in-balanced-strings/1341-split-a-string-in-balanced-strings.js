/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let count = 0;
    let balance = 0;

    for(char of s) {
        if(char === 'R') balance++;
        if(char === 'L') balance--;
        if(balance === 0) {
            count++;
            balance = 0;
        }
    }

    return count;
};