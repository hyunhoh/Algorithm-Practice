/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let sum = 0

    for(let i=0; i<nums.length; i++) {
        nums.length % (i+1) === 0 ? sum += nums[i] ** 2 : null
    }

    return sum
};