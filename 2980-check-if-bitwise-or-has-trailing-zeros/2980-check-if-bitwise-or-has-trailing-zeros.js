/**
 * @param {number[]} nums
 * @return {boolean}
 */
var hasTrailingZeros = function(nums) {
    let count = 0

    for(num of nums) {
        const bi = num.toString(2)

        if(bi[bi.length-1] === '0') count++
    }

    return count >= 2
};