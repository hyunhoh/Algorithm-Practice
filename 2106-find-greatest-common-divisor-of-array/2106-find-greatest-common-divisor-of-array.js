/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    const min = Math.min(...nums)
    const max = Math.max(...nums)

    let divisor = min

    while(max % divisor !== 0 || min % divisor !== 0) {
        divisor--
    }

    return divisor
};