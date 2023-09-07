/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const alt = gain.reduce((acc, cur) => [...acc, acc[acc.length-1] + cur], [0])

    return Math.max(...alt)

};