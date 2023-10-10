/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    const ans = []

    for(left; left<=right; left++) {
        [...String(left)].map(e => +e).every(e => left % e === 0) ? ans.push(left) : null
    }

    return ans
};