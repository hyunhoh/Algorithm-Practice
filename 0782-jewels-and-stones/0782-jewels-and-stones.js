/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;

    for(let char of stones) {
        if(jewels.includes(char)) count++
    }

    return count;
};